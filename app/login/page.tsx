import AuthForm from '@/components/AuthForm';

export const metadata = { title: 'Sign in · Shabab News' };

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
