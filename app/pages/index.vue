<script setup lang="ts">
const testimonials = ref([
  {
    user: {
      name: 'Doris',
      description: 'Recenzija s Googlea',
      avatar: {
        alt: 'Doris'
      }
    },
    quote: '“Odličan prostor i stručni dečki! Sve preporuke 👍”',
    to: 'https://share.google/k1RcaFFjn9A7hmCvq'
  },
  {
    user: {
      name: 'Leona',
      description: 'Recenzija s Googlea',
      avatar: {
        alt: 'Leona'
      }
    },
    quote: '“Najbolja teretana sa stručnim trenerima.👌”',
    to: 'https://share.google/u58kh8uYMHKUmKWsv'
  },
  {
    user: {
      name: 'Marin Juričić',
      description: 'Recenzija s Googlea',
      avatar: {
        alt: 'Marin Juričić'
      }
    },
    quote: '“Sve preporuke!”',
    to: 'https://share.google/ntym07CtqgaHnd6TY'
  }
])
</script>


<template>
  <div>
    <Hero />

    <SportPageSection id="sport-card"
      class="opacity-0 intersect:opacity-100 intersect:animate-jump-in animate-duration-[2500] animate-ease-linear transition intersect-once" 
    />

    <USeparator color="primary" size="sm" />

    <RekreacijaPageSection 
      class="opacity-0 intersect:opacity-100 intersect:animate-jump-in animate-duration-[2500] animate-ease-linear transition intersect-once"
    />

    <USeparator color="primary" size="sm" />

    <DjecaPageSection 
      class="opacity-0 intersect:opacity-100 intersect:animate-jump-in animate-duration-[2500] animate-ease-linear transition intersect-once"
    />

    <USeparator color="primary" size="sm" />

    <DijagnostikaPageSection 
      class="opacity-0 intersect:opacity-100 intersect:animate-jump-in animate-duration-[2500] animate-ease-linear transition intersect-once"
    />

    <USeparator color="primary" size="sm" />

    <RehabilitacijaPageSection 
      class="opacity-0 intersect:opacity-100 intersect:animate-jump-in animate-duration-[2500] animate-ease-linear transition intersect-once"
    />

    <USeparator color="primary" size="sm" />

    <UPage>
      <UContainer class="my-20">
        <UPageHeader title="Što naši klijenti kažu?" 
        :ui="{
          title: 'hover:text-primary ',
        }" 
        description="Ponosni smo na naše zadovolj(e)ne klijente i njihove pozitivne recenzije." 
        />
        <UPageColumns class="mt-10">
          <UPageCard v-for="(testimonial, index) in testimonials" :key="index" variant="subtle"
            :description="testimonial.quote" :to="testimonial.to" target="_blank" highlight
            :class="index==0 ? 'opacity-0 intersect:opacity-100 intersect:animate-fade-right animate-duration-[2500ms] animate-delay-500 animate-ease-in-out transition intersect-once' : 
                index==1 ? 'opacity-0 intersect:opacity-100 intersect:animate-fade-up animate-duration-[2500ms] animate-delay-[750ms] animate-ease-in-out transition intersect-once' : 
                index==2 ? 'opacity-0 intersect:opacity-100 intersect:animate-fade-left animate-duration-[2500ms] animate-delay-1000 animate-ease-in-out transition intersect-once' : ''"
            >
            <template #footer>
              <UUser v-bind="testimonial.user" size="xl" />
            </template>
          </UPageCard>
        </UPageColumns>
      </UContainer>
    </UPage>

    <USeparator color="primary" size="sm" />
    <AppCallToAction />
  </div>
</template>
