<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Početna",
      icon: "fa-solid:home",
      to: "/",
    },
    {
      label: "Sportaši",
      icon: "fa6-solid:dumbbell",
      to: "/sportasi",
      inactiveClass: "bg-black",
    },
    {
      label: "Rekreativci",
      icon: "fa7-solid:person-running",
      to: "/rekreativci",
    },
    {
      label: "Djeca",
      icon: "fa7-solid:child-reaching",
      to: "/djeca",
    },
    {
      label: "Dijagnostika",
      icon: "fa7-solid:chart-bar",
      to: "/dijagnostika",
    },
    {
      label: "Rehabilitacija",
      icon: "fa7-solid:user-doctor",
      to: "/rehabilitacija",
    },
    {
      label: "O nama",
      icon: "fa7-solid:circle-info",
      to: "/o-nama",
    },
  ]
]);
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <template #default>
      <UNavigationMenu :items="items" variant="link" class="hidden lg:block" />
    </template>

    <template #right> 
        <UButton icon="fa7-solid:film" size="md" variant="ghost"/>
        <UButton icon="fa6-brands:instagram" size="md" variant="ghost"/>
        <UButton icon="fa6-brands:facebook" size="md" variant="link"/>

        <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
