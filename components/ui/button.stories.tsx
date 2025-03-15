import type { Meta, StoryObj } from "@storybook/react";
import { IconArrowRight, IconTrash } from "justd-icons";
import { Button } from "./button";

// メタデータの定義
const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "warning"],
      description: "ボタンの用途/意図を指定します",
    },
    appearance: {
      control: { type: "select" },
      options: ["solid", "outline", "plain"],
      description: "ボタンの外観スタイルを指定します",
    },
    size: {
      control: { type: "select" },
      options: ["extra-small", "small", "medium", "large", "square-petite"],
      description: "ボタンのサイズを指定します",
    },
    shape: {
      control: { type: "select" },
      options: ["square", "circle"],
      description: "ボタンの形状を指定します",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "ボタンの無効状態を指定します",
    },
    isPending: {
      control: { type: "boolean" },
      description: "ボタンのローディング状態を指定します",
    },
    children: {
      control: { type: "text" },
      description: "ボタン内のテキストや要素",
    },
    onPress: { action: "pressed" },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "React Ariaベースのアクセシブルなボタンコンポーネントです。様々な外観、サイズ、意図によるスタイリングが可能です。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// デフォルトストーリー
export const Default: Story = {
  args: {
    children: "ボタン",
    intent: "primary",
    appearance: "solid",
    size: "medium",
    shape: "square",
  },
};

// インテントバリエーション
export const Primary: Story = {
  args: {
    children: "プライマリーボタン",
    intent: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "セカンダリーボタン",
    intent: "secondary",
  },
};

export const Warning: Story = {
  args: {
    children: "警告ボタン",
    intent: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "危険ボタン",
    intent: "danger",
  },
};

// 外観バリエーション
export const Outline: Story = {
  args: {
    children: "アウトラインボタン",
    appearance: "outline",
  },
};

export const Plain: Story = {
  args: {
    children: "プレーンボタン",
    appearance: "plain",
  },
};

// サイズバリエーション
export const ExtraSmall: Story = {
  args: {
    children: "極小",
    size: "extra-small",
  },
};

export const Small: Story = {
  args: {
    children: "小",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "大",
    size: "large",
  },
};

export const SquarePetite: Story = {
  args: {
    children: <IconTrash />,
    size: "square-petite",
    shape: "circle",
  },
};

// 状態バリエーション
export const Disabled: Story = {
  args: {
    children: "無効",
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "読み込み中",
    isPending: true,
  },
};

// アイコン付き
export const WithIcon: Story = {
  args: {
    children: (
      <>
        次へ進む <IconArrowRight data-slot="icon" />
      </>
    ),
  },
};

// 複数バリエーションの表示例
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button intent="primary">プライマリー</Button>
        <Button intent="secondary">セカンダリー</Button>
        <Button intent="warning">警告</Button>
        <Button intent="danger">危険</Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button appearance="solid">ソリッド</Button>
        <Button appearance="outline">アウトライン</Button>
        <Button appearance="plain">プレーン</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button size="extra-small">極小</Button>
        <Button size="small">小</Button>
        <Button size="medium">中</Button>
        <Button size="large">大</Button>
        <Button size="square-petite">
          <IconTrash />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button shape="square">四角形</Button>
        <Button shape="circle">丸形</Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button isDisabled>無効</Button>
        <Button isPending>処理中</Button>
      </div>
    </div>
  ),
};
