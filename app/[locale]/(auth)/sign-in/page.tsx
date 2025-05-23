import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import CredentialsSignInForm from "./credentials-signin-form";
import { GoogleSignInForm } from "./google-signin-form";
import { Button } from "@/components/ui/button";
import { getSetting } from "@/lib/actions/setting.actions";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignInPage(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { site } = await getSetting();

  const { callbackUrl = "/" } = searchParams;

  const session = await auth();
  if (session) {
    return redirect(callbackUrl);
  }

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <CredentialsSignInForm />
          </div>
          <hr className="my-3" />
          <p className="text-center text-gray-700">Or</p>
          <div className="mt-4">
            <GoogleSignInForm />
          </div>
        </CardContent>
      </Card>
      <p className="text-center my-4 text-gray-700">New to {site.name}?</p>

      <Link href={`/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
        <Button className="w-full" variant="outline">
          Create your {site.name} account
        </Button>
      </Link>
    </div>
  );
}
