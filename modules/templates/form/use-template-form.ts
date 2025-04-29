import { useActionState } from "react";
import { formAction } from "~/app/actions/template";
import { createToastCallbacks, withCallbacks } from "~/utils/with-callback";

export const useTemplateForm = () => {
  return useActionState(
    withCallbacks(
      formAction,
      createToastCallbacks({
        loadingMessage: "テンプレートを作成しています...",
        redirect: "/templates",
      }),
    ),
    null,
  );
};
