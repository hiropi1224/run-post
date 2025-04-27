"use server";

import { createServerValidate } from "@tanstack/react-form/nextjs";
import { formOpts } from "~/modules/templates/form/config";
import { trpc } from "~/trpc/server";
import type { ActionState } from "~/utils/with-callback";

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (value.name.length < 3) {
      return "Server validation: You must be at least 3 characters";
    }
    if (value.content.length < 3) {
      return "Server validation: You must be at least 3 characters";
    }
    if (value.content.length > 140) {
      return "Server validation: You must be less than 140 characters";
    }
  },
});

export async function formAction(
  prev: unknown,
  formData: FormData,
): Promise<ActionState> {
  try {
    const validatedData = await serverValidate(formData);

    await trpc.templates.create({
      name: validatedData.name,
      content: validatedData.content,
      type: validatedData.type as "run" | "walk" | "cycle" | "other",
    });

    return {
      status: "SUCCESS",
      message: "テンプレートを作成しました",
    };
  } catch (e) {
    return {
      status: "ERROR",
      message: "テンプレートの作成に失敗しました",
    };
  }
}
