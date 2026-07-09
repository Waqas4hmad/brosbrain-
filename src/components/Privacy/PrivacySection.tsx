import { ReactNode } from "react";

interface PrivacySectionProps {
  title: string;
  children: ReactNode;
}

export default function PrivacySection({
  title,
  children,
}: PrivacySectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-bold  text-black dark:text-white">{title}</h2>
      <div className="space-y-4 text-black dark:text-white leading-7">
        {children}
      </div>
    </section>
  );
}