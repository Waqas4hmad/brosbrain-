import { ReactNode } from "react";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export default function LegalSection({
  title,
  children,
}: LegalSectionProps) {
  return (
    <section className="mb-12">
     
 <h2 className="mb-4 text-2xl font-bold text-slate-900 text-black dark:text-white">
                          {title}

                </h2>
      <div className="space-y-4 leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}