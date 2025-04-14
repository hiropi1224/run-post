import { formOptions } from '@tanstack/react-form/nextjs'
import * as v from "valibot";

export const formOpts = formOptions({
  defaultValues: {
    name: '',
    content: '',
    type: '',
  },
})

export const formSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty("テンプレート名を入力してください")),
  content: v.pipe(v.string(), v.nonEmpty("テンプレートの内容を入力してください")),
  type: v.pipe(v.string()),
});

