<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
//TODO https://ui4.nuxt.com/docs/getting-started/icons/nuxt#collections
</script>

<template>
  <UApp>
    <AppHeader />
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>