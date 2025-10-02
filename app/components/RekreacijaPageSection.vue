<script lang="ts" setup>
const features = ref([
  {
    title: 'Samostalno ili u grupi',
    description: 'Bilo da preferirate individualne treninge ili uživate u dinamici grupnih aktivnosti, osiguravamo Vam individualizirani pristup s vježbama prilagođenim Vama.',
    icon: 'fluent:people-community-20-regular',
  },
  {
    title: 'Ciklusi za napredak',
    description: 'Na kraju svakog ciklusa, osvjetljavamo vaš napredak i zajedno gradimo nove ciljeve, stvarajući zajedništvo koje vas pokreće naprijed.',
    icon: 'fluent:arrow-circle-up-sparkle-20-regular',
  },
  {
    title: 'Neobavezno testiranje',
    description: 'Vaš trening može krenuti odmah, bez potrebe za inicijalnim testiranjem, iako je ono dostupno ako želite detaljnije razumjeti svoje početne sposobnosti.',
    icon: 'fluent:document-one-page-beaker-16-regular',
  }
])
const links = ref([
  {
    label: 'Saznajte više',
    to: '/rekreativci',
    color: 'primary',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageSection
    title="Rekreativci"
    description="Želite li probuditi energiju i radost pokreta u svom životu?"
    orientation="horizontal"
    :features="features"
    :links="links"
    :ui="{
      title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
    }"
    reverse
  >
    <NuxtImg
      src="img/Rekreativci.jpg"
      format="webp"
      alt="Slika rekreativca u pokretu tijekom grupnog treninga"
      class="w-full rounded-lg"
    />
  </UPageSection>
</template>

<style>

</style>