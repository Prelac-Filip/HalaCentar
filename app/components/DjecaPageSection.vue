<script lang="ts" setup>
const features = ref([
  {
    title: 'Trenerica Sara',
    description: 'Sara Jakšić, magistra ranog i predškolskog odgoja i obrazovanja te doktorantica na Kineziološkom fakultetu u Zagrebu, autorica radionica i voditeljica edukacija. Sara donosi inovativne ideje iz svog rada na Učiteljskom fakultetu i međunarodnim konferencijama kako bi osigurala da svaki trening bude ispunjen smijehom, učenjem i razvojem.',
    icon: 'fluent:person-heart-20-regular',
  },
  {
    title: 'Alati za samopouzdanje',
    description: 'Ovaj program nije samo aktivnost – to je prostor gdje djeca dinamičnim pokretima uče voljeti sport, graditi prijateljstva i osjećati se slobodno.',
    icon: 'game-icons:muscle-up',
  },
  {
    title: 'Sigurno okruženje',
    description: 'Kao roditelj, možete biti mirni znajući da Sara osigurava sigurno okruženje, uz aktivnosti inspirirane istraživanjima koja pokazuju kako pokret poboljšava kognitivne sposobnosti i emocionalni razvoj.',
    icon: 'fluent:shield-task-20-regular',
  }
])
const links = ref([
  {
    label: 'Saznajte više',
    to: '/djeca',
    color: 'primary',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageSection
    title="Djeca - Hala Kids"
    description="Tražite mjesto gdje će vaše dijete kroz pokret otkriti čaroliju rasta i stvoriti nova prijateljstva? U Hala centru, Hala Kids program za djecu od 4 do 10 godina pretvara svaki susret u putovanje puno energije, koordinacije, ravnoteže i socijalnih veza."
    orientation="horizontal"
    :features="features"
    :links="links"
    :ui="{
      title: 'hover:text-primary cursor-pointer',
    }"
  >
    <NuxtImg
      src="img/kids-traning.jpg"
      format="webp"
      width="352"
      height="300"
      alt="Slika treninga djece u dvorani"
      class="w-full rounded-lg"
    />
  </UPageSection>
</template>

<style>

</style>