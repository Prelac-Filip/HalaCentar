<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader
          title="Treninzi i naši klijenti"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Slike naših treninga, sportaša, rekreativaca i djece u Hala centru'
        />
        
        <UPageBody>
          <UCarousel v-slot="{ item }" dots :items="treninzi" :ui="{ item: 'basis-1/3' }" arrows loop>
            <NuxtImg :src="item" class="rounded-xl" width="400" height="550"/>
          </UCarousel>
        </UPageBody>
      </UPage>
    </UContainer>

    <UContainer>
      <UPage>
        <UPageHeader
          title="Naš prostor"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Slike našeg prostora i opreme u Hala centru'
        />
        
        <UPageBody>
          <LazyUCarousel v-slot="{ item }" dots :items="prostor" :ui="{ item: 'basis-1/3' }" arrows loop>
            <NuxtImg :src="item" class="rounded-xl" width="800" height="1100"/>
          </LazyUCarousel>
        </UPageBody>
      </UPage>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  description: 'Pogledajte galeriju Hala Centra – fotografije naših treninga, događanja i uspjeha sportaša, rekreativaca i djece u inspirativnom okruženju.',
});

const treninzi = [
  '/img/Rekreativci.jpg',
  '/img/RekreativciGrupni.jpg',
  '/img/hala-sprint.webp',
  '/img/Izdrzljivost.jpg',
  '/img/Mobilnost.jpg',
  '/img/Mobilnost2.jpg',
  '/img/Rehabilitacija.jpg',
  '/img/Sportasi.jpg',
  '/img/SportasiHome.jpg',
  '/img/SportasiMeni.jpg',
  '/img/DjecaHome.jpg',
  '/img/DjecaVise.jpg',
]

const prostor = [
  '/img/dvorana1.jpg',
  '/img/dvorana2.jpg',
  '/img/dvorana3.jpg',
  '/img/dvorana4.jpg',
  '/img/dvorana5.jpg',
  '/img/dvorana6.jpg',
  '/img/dvorana7.jpg',
  '/img/dvorana8.jpg',
  '/img/dvorana9.jpg',
  '/img/dvorana10.jpg',

]
</script>

<style>

</style>