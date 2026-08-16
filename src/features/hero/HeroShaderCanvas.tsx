import { useEffect, useRef } from 'react';

type ShaderProgram = {
  program: WebGLProgram;
  position: number;
  resolution: WebGLUniformLocation | null;
  time: WebGLUniformLocation | null;
  pointer: WebGLUniformLocation | null;
  scroll: WebGLUniformLocation | null;
};

const vertexShaderSource = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_pointer;
uniform float u_scroll;

float circle(vec2 uv, vec2 center, float radius, float feather) {
  return 1.0 - smoothstep(radius, radius + feather, distance(uv, center));
}

float wave(vec2 uv, float offset) {
  return sin((uv.x * 7.5) + (uv.y * 4.0) + offset) * 0.5 + 0.5;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 aspectUv = vec2((uv.x - 0.5) * (u_resolution.x / u_resolution.y), uv.y - 0.5);
  vec2 pointer = vec2((u_pointer.x - 0.5) * (u_resolution.x / u_resolution.y), u_pointer.y - 0.5);

  float drift = u_time * 0.18 + u_scroll * 0.9;
  float field = wave(aspectUv, drift) * 0.35;
  field += wave(aspectUv.yx * 1.45, -drift * 1.2) * 0.25;

  float core = circle(aspectUv, pointer * 0.5 + vec2(0.18, 0.04), 0.24, 0.42);
  float orbit = circle(aspectUv, vec2(-0.28 + sin(drift) * 0.08, 0.1 + cos(drift * 0.8) * 0.06), 0.18, 0.35);
  float sweep = smoothstep(0.08, 0.85, field + core + orbit);

  vec3 ink = vec3(0.04, 0.05, 0.06);
  vec3 emerald = vec3(0.16, 0.78, 0.46);
  vec3 cyan = vec3(0.16, 0.66, 0.88);
  vec3 amber = vec3(0.95, 0.68, 0.24);
  vec3 color = mix(ink, emerald, sweep * 0.7);
  color = mix(color, cyan, core * 0.55);
  color = mix(color, amber, orbit * 0.35);

  float vignette = smoothstep(0.9, 0.1, distance(uv, vec2(0.58, 0.45)));
  float alpha = (0.18 + sweep * 0.46) * vignette;

  gl_FragColor = vec4(color, alpha);
}
`;

const createShader = (
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) => {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
};

const createProgram = (gl: WebGLRenderingContext): ShaderProgram | null => {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  const program = gl.createProgram();

  if (!program) {
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return {
    program,
    position: gl.getAttribLocation(program, 'a_position'),
    resolution: gl.getUniformLocation(program, 'u_resolution'),
    time: gl.getUniformLocation(program, 'u_time'),
    pointer: gl.getUniformLocation(program, 'u_pointer'),
    scroll: gl.getUniformLocation(program, 'u_scroll'),
  };
};

const HeroShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: 'high-performance',
      stencil: false,
    });

    if (!canvas || !gl) {
      return undefined;
    }

    const shader = createProgram(gl);

    if (!shader) {
      return undefined;
    }

    const buffer = gl.createBuffer();

    if (!buffer) {
      return undefined;
    }

    const pointer = { x: 0.66, y: 0.38 };
    let animationFrame = 0;
    let lastFrame = 0;
    let start = performance.now();
    let visible = true;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    gl.useProgram(shader.program);
    gl.enableVertexAttribArray(shader.position);
    gl.vertexAttribPointer(shader.position, 2, gl.FLOAT, false, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      const nextWidth = Math.max(1, Math.floor(width * pixelRatio));
      const nextHeight = Math.max(1, Math.floor(height * pixelRatio));

      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
        gl.viewport(0, 0, nextWidth, nextHeight);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const draw = (now: number) => {
      if (now - lastFrame < 32) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }

      lastFrame = now;

      if (!visible) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(shader.resolution, canvas.width, canvas.height);
      gl.uniform1f(shader.time, (now - start) / 1000);
      gl.uniform2f(shader.pointer, pointer.x, pointer.y);
      gl.uniform1f(
        shader.scroll,
        window.scrollY /
          Math.max(document.documentElement.scrollHeight - window.innerHeight, 1),
      );
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      animationFrame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();

      pointer.x = (event.clientX - bounds.left) / Math.max(bounds.width, 1);
      pointer.y = 1 - (event.clientY - bounds.top) / Math.max(bounds.height, 1);
    };

    const onVisibilityChange = () => {
      visible = document.visibilityState === 'visible';
      start = performance.now();
    };

    canvas.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(shader.program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className='absolute inset-0 h-full w-full opacity-90'
    />
  );
};

export default HeroShaderCanvas;
