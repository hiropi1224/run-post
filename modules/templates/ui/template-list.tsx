"use client";

import { Suspense } from "react";
import { TemplateCard } from "~/app/modules/template/ui/components/template-card";
import { trpc } from "~/trpc/client";

export const TemplateList = () => {
  return (
    <Suspense>
      <TemplateListSuspense />
    </Suspense>
  );
};

const TemplateListSuspense = () => {
  const [templates] = trpc.templates.getMany.useSuspenseQuery();

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {templates.map((template) => (
        <li key={template.id}>
          <TemplateCard title={template.name} description={template.content} />
        </li>
      ))}
    </ul>
  );
};
