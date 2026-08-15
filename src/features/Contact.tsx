import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion } from 'motion/react';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { staggerContainer } from '@/lib/animations';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters.'),
  email: z.string().trim().email('Enter a valid email address.'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters.'),
  _gotcha: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type SubmitStatus = {
  type: 'success' | 'error';
  message: string;
} | null;

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      _gotcha: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus(null);

    if (values._gotcha) {
      form.reset();
      return;
    }

    const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();

    if (!formspreeFormId) {
      setSubmitStatus({
        type: 'error',
        message:
          'Contact delivery is not configured yet. Please try again later.',
      });
      return;
    }

    try {
      const response = await fetch(
        `https://formspree.io/f/${formspreeFormId}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Formspree request failed');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thanks. Your message has been delivered.',
      });
      form.reset();
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Message delivery failed. Please try again.',
      });
    }
  };

  return (
    <motion.section
      id='contact'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
    >
      <SectionHeader
        subtitle='Contact'
        title="Let's Work Together"
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-10 grid gap-5'
        >
          <input
            type='text'
            tabIndex={-1}
            autoComplete='off'
            aria-hidden='true'
            className='sr-only'
            {...form.register('_gotcha')}
          />

          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Your name'
                    autoComplete='name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='you@example.com'
                    autoComplete='email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Tell me about your project'
                    rows={6}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitStatus ? (
            <p
              className={
                submitStatus.type === 'success'
                  ? 'text-sm text-primary'
                  : 'text-sm text-destructive'
              }
              role={submitStatus.type === 'success' ? 'status' : 'alert'}
              aria-live={
                submitStatus.type === 'success' ? 'polite' : 'assertive'
              }
            >
              {submitStatus.message}
            </p>
          ) : null}

          <Button
            type='submit'
            className='w-fit'
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Form>
    </motion.section>
  );
};

export default Contact;
