<script lang="ts" setup>
const features = ref([
  {
    title: 'Detaljna dijagnostika',
    description: 'Mi provodimo detaljnu i profesionalnu dijagnostiku kako bismo točno razumjeli Vaše trenutno stanje i potencijal, identificirajući jače strane i područja za napredak.',
    icon: 'fluent:search-sparkle-16-filled',
  },
  {
    title: 'Rast i razvoj',
    description: 'Za mlađe sportaše posebno pratimo rast i razvoj, uzimajući u obzir njihovu biološku dob, što osigurava zdrav i održiv napredak.',
    icon: 'fluent:arrow-trending-12-filled',
  },
  {
    title: 'Personalizirani treninzi',
    description: 'Gradimo personalizirani plan s vježbama za snagu, brzinu, eksplozivnost i mentalnu izdržljivost, uz stalno praćenje i prilagodbe kako bi vaš napredak bio brz i siguran.',
    icon: 'fluent:dumbbell-28-regular',
  }
])
const links = ref([
  {
    label: 'Saznajte više',
    to: '/sportasi',
    color: 'primary',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageSection
    title="Sportaši"
    description="Jeste li spremni dosegnuti vrh? U Hala centru, program za sportaše je plamen koji rasplamsava ambiciju mladih i iskusnih sportaša, osmišljen da izbrusi vašu snagu, brzinu i mentalnu čvrstoću."
    orientation="horizontal"
    :features="features"
    :links="links"
    :ui="{
      title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
    }"
  >
    <NuxtImg
      src="img/SportasiHome.jpg"
      format="webp"
      alt="Slika sportaša u pokretu"
      class="w-full rounded-lg"
    />
  </UPageSection>
</template>

<style>

</style>