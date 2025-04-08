import Link from "next/link";
import { Button } from "~/components/ui";
import { Card } from "~/components/ui/card";

export default function TemplatesPage() {
  return (
    <div className="m-4 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">テンプレート一覧</h1>
        <Button>
          <Link href="/templates/new">新規作成</Link>
        </Button>
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <li key={item}>
            <Link href={`/templates/${item}`}>
              <Card className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <h2 className="mb-2 font-semibold text-xl">
                  テンプレート {item}
                </h2>
                <p className="text-gray-600">
                  テンプレートの説明文がここに入ります。
                </p>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
