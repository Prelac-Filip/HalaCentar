<script lang="ts" setup>
const features = ref([
  {
    title: 'Morfološko testiranje',
    description: 'Radimo detaljno morfološko testiranje koje uključuje mjerenje tjelesne mase, visine, opsega i debljine kožnih nabora kako bismo dobili preciznu sliku o Vašoj tjelesnoj strukturi i sastavu.',
    icon: 'hugeicons:body-part-muscle',
  },
  {
    title: 'Motoričko testiranje',
    description: 'Mjerimo maksimalnu dinamičku snagu, reaktivnu snagu, brzinu te Vašu agilnost kako bi optimizirali Vaše performanse i razvoj.',
    icon: 'fluent:engine-20-regular',
  },
  {
    title: 'Mobilnost i snaga',
    description: 'Precizno testiranje mobilnosti zglobova i snage mišića uz Dynamo Max uređaj kako bi dobili najprecizniju sliku Vašega stanja da osmislimo Vaš kvalitetan program za uspjeh.',
    icon: 'fluent:person-running-20-regular',
  }
])
const links = ref([
  {
    label: 'Saznajte više',
    to: '/dijagnostika',
    color: 'primary',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageSection
    title="Dijagnostika"
    description="Želite li otkriti skrivene mogućnosti svog tijela i krenuti putem koji vodi do vaših ciljeva?"
    orientation="horizontal"
    :features="features"
    :links="links"
    :ui="{
      title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
    }"
    reverse
  >
    <NuxtImg
      src="img/Dijagnostika.jpg"
      alt="Slika dijagnostike sportaša"
      class="w-full rounded-lg"
    />
  </UPageSection>
</template>

<style>

</style>