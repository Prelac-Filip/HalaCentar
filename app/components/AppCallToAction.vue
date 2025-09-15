<script setup lang="ts">
const links = ref([
  {
    label: 'Krenimo',
    color: 'neutral',
    trailingIcon: 'fluent:arrow-right-20-filled',
    to: '/pridruzi-se'
  },
  {
    label: 'Cjenik',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'fluent:cart-20-filled',
    to: '/cjenik'
  }
])
</script>

<template>
  <UPageCTA
    title="Pridružite nam se već danas!"
    description="Kliknite na dugme kako biste nam poslali Vaše kontakt informacije i trening preference!"
    :links="links"
    variant="subtle"
  >
    <LazyStarsBg />
  </UPageCTA>
</template>
