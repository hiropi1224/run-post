"use server";

import type { NeonDbError } from "@neondatabase/serverless";
import {
  ServerValidateError,
  createServerValidate,
  initialFormState,
} from "@tanstack/react-form/nextjs";
import { formOpts } from "~/modules/templates/form/config";
import { trpc } from "~/trpc/server";

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

export async function formAction(prev: unknown, formData: FormData) {
  try {
    const validatedData = await serverValidate(formData);

    const template = await trpc.templates.create({
      name: validatedData.name,
      content: validatedData.content,
      type: validatedData.type as "run" | "walk" | "cycle" | "other",
    });

    return {
      ...initialFormState,
      submitted: true,
      data: template,
    };
  } catch (e) {
    const error = e as NeonDbError;
    console.log("Error details:", {
      message: error.message,
      code: error.code,
      detail: error.detail,
      values: {
        name: formData.get("name"),
        content: formData.get("content"),
        type: formData.get("type"),
      },
    });
    if (e instanceof ServerValidateError) {
      return e.formState;
    }

    return {
      ...initialFormState,
      submitted: false,
      meta: {
        errors: ["テンプレートの作成に失敗しました"],
      },
    };
  }
}
