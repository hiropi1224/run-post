import { formOptions } from '@tanstack/react-form/nextjs'

export const formOpts = formOptions({
  defaultValues: {
    name: '',
    content: '',
    type: '',
  },
})