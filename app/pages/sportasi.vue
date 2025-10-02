<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader
          title="Sportaši"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Jeste li spremni dosegnuti vrh?'
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

      <UPage>
        <UPageHeader
          title="Kako započinje Vaš put u Hala centru?"
          :ui="{
            title: 'hover:text-primary',
          }"
        />

        <UPageSection
          description="Vaše putovanje počinje donošenjem Vaših ciljeva, iskustva i povijesti ozljeda, ako ih ima, a mi provodimo detaljnu i profesionalnu dijagnostiku kako bismo točno razumjeli Vaše trenutno stanje i potencijal, identificirajući jače strane i područja za napredak."
          orientation="horizontal"
          :features="[{
              title: 'Mladi sportaši',
              description: 'Za mlađe sportaše posebno pratimo rast i razvoj, uzimajući u obzir njihovu biološku dob, što osigurava zdrav i održiv napredak. Na temelju toga, gradimo personalizirani plan s vježbama za snagu, brzinu, eksplozivnost i mentalnu izdržljivost, uz stalno praćenje i prilagodbe kako bi Vaš napredak bio brz i siguran.',
              icon: 'fluent:sport-20-regular'
            },
            {
              title: 'Ciklusi',
              description: 'Na kraju svakog ciklusa, zajedno osvjetljavamo Vaše postignuće, stvarajući plan za sljedeće izazove – jer u Hala centru svaki sportaš gradi svoju priču o uspjehu.',
              icon: 'fluent:recycle-32-regular'
            },
          ]"
          :ui="{
            title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <NuxtImg
            src="img/SportasiMeni.jpg"
            format="webp"
            alt="Slika sportaša u pokretu u Hala centru"
            class="w-9/12 justify-self-center rounded-lg hover:scale-[130%] transition-transform duration-300"
          />
        </UPageSection>
      </UPage>
    </UContainer>

    <USeparator color="primary" size="sm" />

    <AppCallToAction />

  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  description: 'Program za sportaše u Hala Centru – profesionalna dijagnostika, individualni treninzi i stručno vodstvo za razvoj snage, brzine i mentalne izdržljivosti. Izgradite svoju priču o uspjehu uz podršku stručnjaka.',
});

const welcomeCards = ref([
  {
    title: 'Program',
    description: 'U Hala centru, program za sportaše je plamen koji rasplamsava ambiciju mladih i iskusnih sportaša, osmišljen da izbrusi Vašu snagu, brzinu i mentalnu čvrstoću.',
    icon: 'fluent:apps-list-detail-20-regular',
  },
  {
    title: 'Više od treninga',
    description: 'Ovaj program nije samo trening – to je putovanje gdje stručnost susreće strast, gdje svaki korak na terenu postaje dio Vaše priče o izvrsnosti, uz toplu podršku zajednice koja vjeruje u vas.',
    icon: 'fluent:ribbon-star-32-regular',
  },
  {
    title: 'Pridružite se',
    description: 'Pridružite se i pretvorite svoje ciljeve u stvarnost – jer u Hala centru svaki trening je iskra Vaše buduće pobjede!',
    icon: 'fluent:trophy-20-regular',
  }
])
</script>

<style>

</style>