import Image from "next/image";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center px-4 py-10 dark:bg-auth-dark ">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h1-bold text-dark100_light900">
              Join StackOverFlow
            </h1>
            <p className="paragraph-regular text-dark100_light900">
              To get your ques/ans right!
            </p>
          </div>
          <Image
            src="images/site-Logo.svg"
            alt={""}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}

        <div>
          {" "}
          <SocialAuthForm />
        </div>
      </section>
    </main>
  );
}
