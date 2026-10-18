import { AuthFormHeader } from "@/components/features/auth/auth-form-header";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/features/auth/login-form";

export default function LoginPage() {
  return (
    <Card className="rounded-2xl border-white/40 bg-white p-6 shadow-2xl shadow-black/20 sm:p-8 [&_input]:border-plum/20 [&_input]:bg-white [&_input]:py-3 [&_input]:outline-none [&_input]:focus:border-flame [&_input]:focus:ring-2 [&_input]:focus:ring-flame/20">
      {/* The page owns its presentation; the feature handles form state and submission. */}
      <AuthFormHeader title="Welcome back" description="Sign in to find your next favorite meal." />

      <LoginForm />

      <Link className="mt-6 block text-center text-sm text-chili underline underline-offset-4" to={"/auth/signup"}>
        New here? Create an account
      </Link>
    </Card>
  );
}