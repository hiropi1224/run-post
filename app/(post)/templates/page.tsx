import { Button, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { TemplateCard } from "~/app/modules/template/ui/components/template-card";

export default function TemplatesPage() {
  return (
    <div className="m-4 flex flex-col gap-8">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <li key={item}>
            <Link href={`/templates/${item}`}>
              <TemplateCard
                title={`テンプレート ${item}`}
                description="description"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
