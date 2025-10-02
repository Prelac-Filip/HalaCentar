<script setup lang="ts">
useSeoMeta({
  description: 'Pridružite se Hala Centru – pošaljite upit za sportaške, rekreativne, dječje ili rehabilitacijske programe. Osigurajte individualni pristup, stručnost i podršku za svoj napredak.',
});

import type { FormError, FormSubmitEvent } from '@nuxt/ui'
const route = useRoute()
const planRef = route.query.plan as string | undefined;
const mail = useMail()

const state = reactive({
  name: undefined,
  surname: undefined,
  email: undefined,
  plan: planRef,
  message: 'Poštovani,\nzanima me Vaš program [UNESITE PLAN] i volio/la bih dobiti više informacija.\nSrdačan pozdrav!'
});

const items = [
  [
    { label: 'Trening za sportaše', value: '1' },
    { label: 'Grupni trening rekreativaca', value: '2' },
    { label: 'Individualni trening rekreativca', value: '3' },
    { label: 'Djeca (Hala Kids)', value: '4' },
    { label: 'Rehabilitacija', value: '5' },
    { label: 'Sportovi izdržljivosti', value: '6' },
    { label: 'Online trening', value: '7' }
  ],
  [
    { label: 'Morfološko testiranje', value: '8' },
    { label: 'Motoričko testiranje', value: '9' },
    { label: 'Testiranje snage i mobilnosti', value: '10' },
    { label: 'Funkcionalno testiranje', value: '11' }
  ]
];

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ name: 'name', message: 'Molimo unesite Vaše ime.' })
  if (!state.surname) errors.push({ name: 'surname', message: 'Molimo unesite Vaše prezime.' })
  if (!state.email) errors.push({ name: 'email', message: 'Molimo da unijete pravilnu email adresu.' })
  if (!validateEmail(state.email)) errors.push({ name: 'email', message: 'Molimo da unijete pravilnu email adresu.' })
  if (!state.plan) errors.push({ name: 'plan', message: 'Molimo odaberite za što ste zainteresirani.' })
  return errors
}

const validateEmail = (email: string) => {
  if (!email) return false;
  else return email
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({ title: 'Success', description: 'Uspješno ste nam poslali upit.', color: 'success' })
  console.log(event.data)
  mail.send({
    from: state.name + " " + state.surname,
    subject: 'UPIT: ' + state.email + " se zanima za trening plan " + state.plan,
    text: state.message,
  })
}

</script>

<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader title="Pridruži se" 
          :ui="{
            title: 'hover:text-primary',
          }"
          description="Zainteresirani ste za naše usluge? Pošaljite nam upit i javit ćemo Vam se u najkraćem mogućem roku!" />
        <UForm :validate="validate" :state="state" class="space-y-4 my-8" @submit="onSubmit">
          <UFormField label="Ime" name="name" required description="Nikad nećemo dijeliti Vaše osobne podatke." size="xl">
            <UInput v-model="state.name" class="w-full" />
          </UFormField>

          <UFormField label="Prezime" name="surname" required description="Nikad nećemo dijeliti Vaše osobne podatke." size="xl">
            <UInput v-model="state.surname" class="w-full" />
          </UFormField>

          <UFormField label="Email" name="email" required description="Nikad nećemo dijeliti Vaš email." size="xl">
            <UInput v-model="state.email" class="w-full" />
          </UFormField>

          <UFormField label="Zanimate se za:" name="plan" size="xl" required>
            <USelect v-model="state.plan" :items="items" class="w-full" selected-icon="fluent:dumbbell-28-regular" />
          </UFormField>

          <UFormField label="Vaša poruka" name="message" description="Napišite nam sve što Vas dodatno zanima."
            size="xl">
            <UTextarea v-model="state.message" class="w-full" />
          </UFormField>

          <UButton type="submit" trailing-icon="fluent:send-20-filled" size="xl">
            Pošaljite upit
          </UButton>
        </UForm>
      </UPage>
    </UContainer>
  </div>
</template>
