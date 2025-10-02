<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader
          title="Rehabilitacija"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Tražite put koji će vas voditi od boli do snage, gdje ozljeda postaje lekcija, a oporavak priča o trijumfu?'
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
          title="Što čeka Vas u rehabilitaciji Hala centra?"
          :ui="{
            title: 'hover:text-primary',
          }"
        />

        <UPageSection
          description="Svaki oporavak započinje toplim dočekom gdje u povjerljivom razgovoru dijelimo Vaše ciljeve, iskustvo i povijest ozljede, a vi nam donosite sve nalaze od liječnika kako bismo točno razumjeli Vaš slučaj i odredili smjer rada."
          orientation="horizontal"
          :features="[{
              title: 'Dijagnostika',
              description: 'Ovisno o stupnju ozljede, provodimo dodatni pregled ili dijagnostiku (testiranje pokretljivosti, snage i funkcionalnosti) kako bismo bili još precizniji u radu, identificirajući jače strane i područja za poboljšanje.',
              icon: 'fluent:doctor-20-regular'
            }, 
            {
              title: 'Jači bez boli',
              description: 'Kroz aktivnosti inspirirane istraživanjima o neuroplastičnosti i regeneraciji, sportaši vraćaju se na teren jači i otporniji, dok rekreativci ponovno uživaju u svakodnevnim aktivnostima bez boli.',
              icon: 'hugeicons:body-part-muscle'
            },
            {
              title: 'Ciklusi',
              description: 'Na kraju svakog ciklusa, slavimo Vaše napretke u motivirajućem okruženju, gdje ozljeda postaje priča o trijumfu – jer u Hala centru rehabilitacija nije samo liječenje, već ponovno otkrivanje Vaše snage i slobode.',
              icon: 'fluent:recycle-32-regular'
            },
          ]"
          :ui="{
            title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
          reverse
        >
          <NuxtImg
            src="img/Rehabilitacija.jpg"
            format="webp"
            alt="Slika čovjeka u procesu rehabilitacije u Hala centru"
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
useSeoMeta({
  description: 'Rehabilitacija u Hala centru – individualni pristup oporavku, stručno vođeni programi za sportaše i rekreativce, povratak snazi i slobodi pokreta kroz inovativne metode i podršku.',
});

const welcomeCards = ref([
  {
    title: 'Program',
    description: 'U Hala centru, rehabilitacijski program je svjetionik za mlade sportaše željne povratka na teren i rekreativce koji se žele vratiti svakodnevnim aktivnostima, osmišljen da vrati pokretljivost, snagu i radost pokreta.',
    icon: 'fluent:accessibility-20-regular',
  },
  {
    title: 'Više od liječenja',
    description: 'Ovaj program nije samo liječenje – to je putovanje gdje stručnost susreće empatiju, gdje svaki pokret postaje korak prema novoj slobodi, a vi dobivate podršku koja vas čini spremnima za život bez ograničenja.',
    icon: 'fluent:ribbon-star-32-regular',
  },
  {
    title: 'Pridružite se',
    description: 'Pridružite se i otkrijte kako rehabilitacija u Hala centru postaje Vaša priča o ponovnom rođenju – gdje slabost postaje moć, a ograničenje prilika!',
    icon: 'fluent:trophy-20-regular',
  }
])
</script>

<style>

</style>