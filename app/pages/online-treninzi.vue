<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader
          title="O nama"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Dobrodošli u Hala centar – Vaše mjesto za snagu, zdravlje i zajednicu'
        />
        
        <UPageBody>
          <UPageGrid>
            <UPageCard
              v-for="(card, index) in welcomeCards"
              :key="index"
              v-bind="card"
              variant="subtle"
              highlight
              :class="index==0 ? 'animate-fade-right animate-duration-[2500ms] animate-delay-500 animate-ease-in-out' : 
                index==1 ? 'animate-fade-up animate-duration-[2500ms] animate-delay-[750ms] animate-ease-in-out' : 
                index==2 ? 'animate-fade-left animate-duration-[2500ms] animate-delay-1000 animate-ease-in-out' : ''" 
            />
          </UPageGrid>

          <!-- Carousel slika ovdje -->
        </UPageBody>
      </UPage>
      <UPageHeader
          title="Što čeka Vas u Online treningu Hala centra?"
          :ui="{
            title: 'hover:text-primary',
          }"
        />
    </UContainer>

    <UPage>

        <UPageSection
          description="Vaše putovanje započinje virtualnim sastankom gdje dijelimo tko ste, čime se bavite i što želite postići – bilo da je to vrhunska izvedba, zdravija forma, povratak nakon ozljede ili osobni rekord na stazi."
          orientation="horizontal"
          :features="[{
              title: 'Vođenje kroz testove',
              description: 'Zatim vas vodimo kroz jednostavne testove koje sami snimate (npr. pokreti, trčanje ili vježbe snage), a naši stručnjaci analiziraju snimke kako bismo stvorili precizan uvid u vaše stanje, jače strane i područja za napredak.',
              icon: 'fluent:meet-now-20-regular'
            }, 
            {
              title: 'Personalizirani program',
              description: 'Na temelju toga, kreiramo personalizirani program koji dobivate putem aplikacije, s jasnim uputama za vježbe, metrike za praćenje (npr. tempo, intenzitet) i savjete za tehniku ili prevenciju ozljeda, prilagođene vašim ciljevima – od maratona do svakodnevne vitalnosti i snage.',
              icon: 'fluent:document-bullet-list-multiple-20-regular'
            },
            {
              title: 'Podrška i konzultacije',
              description: 'Uz našu podršku na daljinu, redovite konzultacije i prilagodbe plana, vaš napredak postaje stvarnost gdje god bili – jer u Hala centru online trening je vaša formula za uspjeh, ispunjena stručnošću i toplinom.',
              icon: 'fluent:chat-multiple-heart-20-regular'
            },
          ]"
          :ui="{
            title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <NuxtImg
            src="img/OnlineTrening.jpg"
            format="webp"
            alt="Slika online treninga u Hala centru"
            class="w-full rounded-lg"
          />
        </UPageSection>
      </UPage>

    <USeparator color="primary" size="sm" />

    <AppCallToAction />
  </div>
</template>

<script lang="ts" setup>
const welcomeCards = ref([
  {
    title: 'Izvan granice teretane',
    description: 'Želite li svoju strast za pokretom pretvoriti u putovanje koje nadilazi granice teretane, gdje svaki trening postaje korak bliže vašem cilju? Online trening donosi snagu stručnog vodstva u vaš dom ili stazu, osmišljen za sportaše, rekreativce, bodybuildere i trkače koji žele fleksibilnost bez kompromisa na kvalitetu.',
    icon: 'fluent:home-heart-20-regular',
  },
  {
    title: 'Više od plana vježbanja',
    description: 'Ovaj program nije samo plan vježbi – to je most koji spaja vašu ambiciju s našom podrškom, prilagođen vašem ritmu života, uz toplinu zajednice koja vas prati na daljinu.',
    icon: 'fluent:lightbulb-filament-20-regular',
  },
  {
    title: 'Pridružite se danas',
    description: 'Pridružite se i otkrijte kako online trening u Hala centru čini vaš napredak mogućim bilo gdje – jer svaki vaš pokret je dio naše zajedničke priče!',
    icon: 'fluent:heart-circle-20-filled',
  }
])
</script>

<style>

</style>