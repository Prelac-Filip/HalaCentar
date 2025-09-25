<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader
          title="Rekreativci"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Želite li probuditi energiju i radost pokreta u svom životu?'
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
          title="Kako započinje Vaš put u grupnom treningu?"
          :ui="{
            title: 'hover:text-primary',
          }"
        />

        <UPageSection
          description="Vaše putovanje počinje donošenjem Vaših ciljeva, iskustva i povijesti ozljeda, ako ih ima, a grupni trening može krenuti odmah, bez obaveznog testiranja, za brzi ulazak u svijet pokreta i zabave."
          orientation="horizontal"
          :features="[{
              title: 'Opcija dijagnostike',
              description: 'S vremenom nudimo opciju detaljne dijagnostike kako bismo točno razumjeli Vaše stanje, jače strane i područja za poboljšanje, te prilagodili treninge za najbolje rezultate.',
              icon: 'fluent:chart-multiple-20-regular'
            }, 
            {
              title: 'Grupe',
              description: 'Grupe su ograničene na do 8 ljudi, osiguravajući individualizirani pristup s vježbama prilagođenim svakom pojedincu, bez gužve, uz toplinu koja čini svaki trening užitkom.',
              icon: 'fluent:sport-20-regular'
            },
            {
              title: 'Ciklusi',
              description: 'Na kraju svakog ciklusa, osvjetljavamo Vaš napredak i zajedno gradimo nove ciljeve, stvarajući zajedništvo koje vas pokreće naprijed.',
              icon: 'fluent:recycle-32-regular'
            },
          ]"
          :ui="{
            title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <NuxtImg
            src="img/No-Image-Placeholder.svg"
            format="webp"
            width="352"
            height="352"
            alt="Slika rekreativaca u grupnom treningu u Hala centru"
            class="w-full rounded-lg"
          />
        </UPageSection>
      </UPage>

      <UPage>
        <UPageHeader
          title="Samostalni trening za fleksibilnost"
          :ui="{
            title: 'hover:text-primary',
          }"
        />

        <UPageSection
          description="Za one koji žele slobodu, nudimo opciju detaljne dijagnostike mobilnosti i jakosti te kreiranje personaliziranog programa koji zajedno prolazimo kao edukacija"
          orientation="horizontal"
          :features="[{
              title: 'Edukacija i praćenje',
              description: 'Učimo vas kako pravilno izvoditi vježbe, pratiti napredak i prilagođavati ih svom životu.',
              icon: 'fluent:chart-person-20-regular'
            }, 
            {
              title: 'Bilo gdje - Bilo kada',
              description: 'Ovaj program možete provoditi bilo gdje – od doma ili u drugoj teretani – uz našu podršku na daljinu za savjete i prilagodbe.',
              icon: 'fluent:clock-20-regular'
            },
            {
              title: 'Neovisnost',
              description: 'To je idealno za one koji žele neovisnost, ali s našim stručnim vodstvom – jer u Hala centru Vaš napredak je uvijek naša priča!',
              icon: 'fluent:video-person-sparkle-20-regular'
            },
          ]"
          :ui="{
            title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
          reverse
        >
          <NuxtImg
            src="img/Rekreativci.jpg"
            format="webp"
            alt="Slika rekreativca u samostalnom treningu u Hala centru"
            class="w-full rounded-lg"
          />
        </UPageSection>
      </UPage>
    </UContainer>

    <USeparator color="primary" size="sm" />

    <AppCallToAction />
  </div>
</template>

<script lang="ts" setup>
const welcomeCards = ref([
  {
    title: 'Program',
    description: 'U Hala centru, program za rekreativce je vjetar u leđa koji vas pokreće prema zdravlju i zajedništvu, nudeći grupne treninge i fleksibilne opcije za sve razine, uz stručno vodstvo koje brine o svakom detalju.',
    icon: 'fluent:apps-list-detail-20-regular',
  },
  {
    title: 'Više od tjelovježbe',
    description: 'Ovaj program nije samo vježbanje – to je prostor gdje svaki pokret postaje dio Vaše priče o vitalnosti, gdje se kroz toplu zajednicu osjećate kao kod kuće, bez obzira na razinu iskustva.',
    icon: 'fluent:ribbon-star-32-regular',
  },
  {
    title: 'Pridružite se',
    description: 'Pridružite se i krenite putem zdravlja koji je jednostavan, zabavan i Vaš!',
    icon: 'fluent:trophy-20-regular',
  }
])
</script>

<style>

</style>