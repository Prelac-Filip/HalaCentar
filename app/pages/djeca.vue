<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader
          title="Djeca - Hala Kids"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Tražite mjesto gdje će Vaše dijete kroz pokret otkriti čaroliju rasta i stvoriti nova prijateljstva?'
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
          title="Upoznajte Saru – dušu Hala Kids"
          :ui="{
            title: 'hover:text-primary',
          }"
        />

        <UPageSection
          description="Sara Jakšić, magistra ranog i predškolskog odgoja i obrazovanja te doktorantica na Kineziološkom fakultetu u Zagrebu, samostalno predvodi Hala Kids s vizijom koja spaja odgoj i kineziologiju u harmoničan svijet pokreta."
          orientation="horizontal"
          :features="[{
              title: 'Sarina stručnost',
              description: 'Njezina istraživanja o utjecaju pokreta na ranu i predškolsku dob otkrivaju kako dinamične aktivnosti ne samo jačaju tijelo, već i bude maštu i emocionalnu otpornost, a ona to pretvara u praksu kroz program koji djecu vodi prema holističkom rastu.',
              icon: 'fluent:text-bullet-list-square-search-20-regular'
            }, 
            {
              title: 'Autorica i edukatorica',
              description: 'Kao autorica radionica i voditeljica edukacija, Sara donosi inovativne ideje iz svog rada na Učiteljskom fakultetu i međunarodnim konferencijama, stvarajući prostor gdje svaki mališan osjeća da je njegov pokret dio veće priče o otkrivanju sebe.',
              icon: 'fluent:hat-graduation-sparkle-20-regular'
            },
            {
              title: 'Strast u radu',
              description: 'Njezina strast nije samo u znanju – ona je most između nauke i srca, gdje djeca kroz pokret uče ne samo vještine, već i kako biti radoznala i hrabra u svijetu.',
              icon: 'fluent:heart-20-regular'
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
            alt="Slika naše trenerice Sare"
            class="w-full rounded-lg"
          />
        </UPageSection>
      </UPage>

      <UPage>
        <UPageHeader
          title="Što čeka Vaše dijete u Hala Kids?"
          :ui="{
            title: 'hover:text-primary',
          }"
        />

        <UPageSection
          description="Svaki susret započinje veselim dočekom gdje djeca ulaze u svijet pokreta, bez ikakvog pritiska – samo energija, pokret i nova prijateljstva."
          orientation="horizontal"
          :features="[{
              title: 'Radost pokreta',
              description: 'Sudjelovanjem u dinamičnim aktivnostima koje grade koordinaciju ili timskih izazova koji jačaju socijalne veze, djeca prirodno razvijaju vještine, otkrivajući radost pokreta u malim grupama gdje se svatko osjeća važnim.',
              icon: 'fluent:person-running-20-regular'
            }, 
            {
              title: 'Sigurno okruženje',
              description: 'Kao roditelj, možete biti mirni znajući da Sara osigurava sigurno okruženje, uz aktivnosti inspirirane istraživanjima koja pokazuju kako pokret poboljšava kognitivne sposobnosti i emocionalni razvoj.',
              icon: 'fluent:shield-task-20-regular'
            },
            {
              title: 'Zabava i rast',
              description: 'Na kraju svakog susreta, djeca odlaze puna energije i priča o novim prijateljima, a Vi vidite kako se korištenjem tijela uz zabavu i druženja razvijaju vještine potrebne u njihovoj dobi – jer u Hala Kids djeca dolaze radi zabave i prijateljstava, a mi brinemo da uz pokret rastu snažno i veselo.',
              icon: 'lucide:smile'
            },
          ]"
          :ui="{
            title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
          reverse
        >
          <NuxtImg
            src="img/No-Image-Placeholder.svg"
            format="webp"
            width="352"
            height="352"
            alt="Slika djece u pokretu u Hala centru"
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
    description: 'U Hala centru, Hala Kids program za djecu od 4 do 10 godina pretvara svaki susret u putovanje puno energije, gdje djeca prirodno razvijaju vještine poput koordinacije, ravnoteže i socijalnih veza, a Vi kao roditelj vidite kako raste sretno i samopouzdano dijete.',
    icon: 'fluent:accessibility-20-regular',
  },
  {
    title: 'Više od aktivnosti',
    description: 'Ovaj program nije samo aktivnost – to je prostor gdje djeca dinamičnim pokretima uče voljeti sport, graditi prijateljstva i osjećati se slobodno, dok roditelji imaju miran um znajući da je sve osmišljeno za njihov zdrav razvoj.',
    icon: 'fluent:ribbon-star-32-regular',
  },
  {
    title: 'Pridružite se',
    description: 'Pridružite se i vidite kako Hala Kids postaje omiljeno mjesto za Vašeg mališana – gdje energija i rast idu ruku pod ruku!',
    icon: 'fluent:trophy-20-regular',
  }
])
</script>

<style>

</style>