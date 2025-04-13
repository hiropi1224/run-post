// client-component.tsx
"use client";

import { Button, Field, Input, Textarea } from "@chakra-ui/react";
import {
  mergeForm,
  useForm,
  useStore,
  useTransform,
} from "@tanstack/react-form";
import { initialFormState } from "@tanstack/react-form/nextjs";
import { useActionState } from "react";
import { formAction } from "~/app/actions/template";
import { formOpts } from "~/modules/templates/form/config";

export const TemplateForm = () => {
  const [state, action] = useActionState(formAction, initialFormState);

  const form = useForm({
    ...formOpts,
    transform: useTransform((baseForm) => mergeForm(baseForm, state!), [state]),
  });

  const formErrors = useStore(form.store, (formState) => formState.errors);

  return (
    <form
      action={action as never}
      onSubmit={() => form.handleSubmit()}
      className="flex flex-col gap-4"
    >
      {formErrors.map((error) => (
        <p key={error as string}>{error}</p>
      ))}

      <form.Field
        name="name"
        validators={{
          onChange: ({ value }) =>
            value.length < 3
              ? "Client validation: You must be at least 3 characters"
              : undefined,
        }}
      >
        {(field) => {
          return (
            <Field.Root required>
              <Field.Label>
                テンプレート名 <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="テンプレート名"
                name="name"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.map((error) => (
                <Field.ErrorText key={error as string}>{error}</Field.ErrorText>
              ))}
            </Field.Root>
          );
        }}
      </form.Field>
      <form.Field
        name="content"
        validators={{
          onChange: ({ value }) =>
            value.length < 3
              ? "Client validation: You must be at least 3 characters"
              : value.length > 140
                ? "Client validation: You must be less than 140 characters"
                : undefined,
        }}
      >
        {(field) => {
          return (
            <Field.Root required>
              <Field.Label>
                投稿内容 <Field.RequiredIndicator />
              </Field.Label>
              <Textarea
                placeholder="投稿内容"
                name="content"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <Field.HelperText>投稿内容を入力してください。</Field.HelperText>
              {field.state.meta.errors.map((error) => (
                <Field.ErrorText key={error as string}>{error}</Field.ErrorText>
              ))}
            </Field.Root>
          );
        }}
      </form.Field>
      <form.Field name="type">
        {(field) => {
          return (
            <Field.Root>
              <Field.Label>
                カテゴリ <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="カテゴリ"
                name="type"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </Field.Root>
          );
        }}
      </form.Field>
      <form.Subscribe
        selector={(formState) => [formState.canSubmit, formState.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit}>
            {isSubmitting ? "..." : "Submit"}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
};
