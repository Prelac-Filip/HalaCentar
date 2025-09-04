<script lang="ts" setup>
const features = ref([
  {
    title: 'Početak rehabilitacije',
    description: 'Svaki oporavak započinje toplim dočekom gdje u povjerljivom razgovoru dijelimo vaše ciljeve, iskustvo i povijest ozljede, a vi nam donosite sve nalaze od liječnika kako bismo točno razumjeli vaš slučaj i odredili smjer rada.',
    icon: 'fluent:doctor-20-regular',
  },
  {
    title: 'Rehabilitacija za sve',
    description: 'Sportaše vraćamo na teren jačima i otpornijima, dok rekreativcima vraćamo užitak svakodnevnih aktivnosti bez boli.',
    icon: 'fluent:person-head-hint-20-regular',
  },
  {
    title: 'Krenite odmah',
    description: 'Što raniji početak rehabilitacije, tim raniji rezultati i povratak prema sreći pokreta.',
    icon: 'fluent:person-walking-20-regular',
  }
])
const links = ref([
  {
    label: 'Saznajte više',
    to: '/rehabilitacija',
    color: 'primary',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageSection
    title="Rehabilitacija"
    description="Tražite put koji će vas voditi od boli do snage, gdje ozljeda postaje lekcija, a oporavak priča o trijumfu?"
    orientation="horizontal"
    :features="features"
    :links="links"
    :ui="{
      title: 'hover:text-primary cursor-pointer',
    }"
    reverse
  >
    <NuxtImg
      src="img/sport-rehab.webp"
      width="352"
      height="300"
      alt="Slika rehabilitacije sportaša"
      class="w-full rounded-lg"
    />
  </UPageSection>
</template>

<style>

</style>