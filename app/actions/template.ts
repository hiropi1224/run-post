'use server'

import {
  ServerValidateError,
  createServerValidate,
} from '@tanstack/react-form/nextjs'
import { formOpts } from '~/modules/templates/form/config'

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (value.name.length < 3) {
      return 'Server validation: You must be at least 3 characters'
    }
    if (value.content.length < 3) {
      return 'Server validation: You must be at least 3 characters'
    }
    if (value.content.length > 140) {
      return 'Server validation: You must be less than 140 characters'
    }
  },
})

export async function formAction(prev: unknown, formData: FormData) {
  console.log("---- form action ----")
  try {
    const validatedData = await serverValidate(formData)
    console.log("validatedData", validatedData);

  } catch (e) {
    if (e instanceof ServerValidateError) {
      return e.formState
    }

    throw e
  }

  console.log('form has successfully validated!')
}