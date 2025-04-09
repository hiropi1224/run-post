import type { NextPageProps } from "~/app/type";

export default async function TemplateDetailPage({
  params,
}: NextPageProps<{ templateId: string }>) {
  const { templateId } = await params;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">{`${templateId}: テンプレート詳細`}</h1>
        <button type="button">編集</button>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-lg">テンプレート名</h2>
            <p className="text-gray-700">サンプルテンプレート</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">投稿内容</h2>
            <p className="text-gray-700">
              このテンプレートの詳細な説明がここに入ります。
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">作成日</h2>
            <p className="text-gray-700">2024-01-01</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">ハッシュタグ</h2>
            <p className="text-gray-700">ランニング</p>
          </div>
        </div>
      </div>
    </div>
  );
}
