'use client';

import { authenticate } from '@/actions/auth';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

export default function Auth() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const router = useRouter();

  const onSubmit = async ({ email, password }: z.infer<typeof loginSchema>) => {
    setIsAuthenticating(true);

    try {
      await authenticate(email, password);
      router.push('/admin');
    } catch (error) {
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="flex h-svh items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 animate-gradient-flow">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-[#36b2fd] opacity-20 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-400 to-[#36b2fd] opacity-20 blur-3xl animate-float" />

      <div className="relative mx-auto w-[400px] max-w-full px-4">
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#36b2fd] to-blue-400 bg-clip-text text-transparent animate-gradient-flow">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-1">Sign in to your account</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#36b2fd] to-blue-400 opacity-30 blur animate-pulse-slow" />
          <div className="relative rounded-xl border border-blue-100 bg-white/80 backdrop-blur-sm p-8 shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email" className="font-medium text-gray-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          {...field}
                          disabled={isAuthenticating}
                          className="rounded-lg border-blue-100 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#36b2fd] focus:ring-1 focus:ring-[#36b2fd] focus:shadow-sm"
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <FormLabel htmlFor="password" className="font-medium text-gray-700">
                          Password
                        </FormLabel>
                        <a
                           href="https://wa.me/923425093685" target='_blank'
                          className="text-xs text-[#36b2fd] hover:text-blue-600 transition-colors duration-300"
                        >
                          Forgot password? (Contact us)
                        </a>
                      </div>
                      <FormControl>
                        <Input
                          disabled={isAuthenticating}
                          id="password"
                          type="password"
                          {...field}
                          className="rounded-lg border-blue-100 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#36b2fd] focus:ring-1 focus:ring-[#36b2fd] focus:shadow-sm"
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <Button
                  disabled={isAuthenticating}
                  type="submit"
                  className="w-full mt-2 bg-gradient-to-r from-[#36b2fd] to-blue-500 hover:from-blue-600 hover:to-blue-500 text-white transition-all duration-300 shadow-lg hover:shadow-blue-300/50 animate-pulse-slow rounded-lg"
                >
                  {isAuthenticating ? (
                    <div className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Don&apos;t have an account?</span>
              <a href="https://wa.me/923425093685" target='_blank' className="text-[#36b2fd] hover:text-blue-600 font-medium transition-colors duration-300">
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Aamdan. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
