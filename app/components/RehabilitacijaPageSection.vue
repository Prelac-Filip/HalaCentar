<script lang="ts" setup>
const features = ref([
  {
    title: 'Početak rehabilitacije',
    description: 'Svaki oporavak započinje toplim dočekom gdje u povjerljivom razgovoru dijelimo Vaše ciljeve, iskustvo i povijest ozljede, a vi nam donosite sve nalaze od liječnika kako bismo točno razumjeli Vaš slučaj i odredili smjer rada.',
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
      title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
      features: {
        title: 'hover:text-primary cursor-pointer underline decoration-third',
      },
    }"
    reverse
  >
    <NuxtImg
      src="img/RehabilitacijaHome.jpg"
      alt="Slika rehabilitacije sportaša"
      class="w-full rounded-lg"
    />
  </UPageSection>
</template>

<style>

</style>