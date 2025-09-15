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
            />
          </UPageGrid>

          <!-- Carousel slika ovdje -->
        </UPageBody>
      </UPage>

      <UPage>
        <UPageHeader
          title="Upoznajte naš tim"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Hrvoje, Alen i Sara'
        />
      </UPage>
    </UContainer>

    <div class="hidden lg:block">
      <NuxtImg
        src="/img/left_side2.png"
        class="hidden 2xl:block absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[650px]"
        loading="lazy"
      />
    </div>

    <UPageSection
      title="Hrvoje"
      description="Kondicijski trener s više od deset godina iskustva i diplomom Kineziološkog fakulteta, poznat po svojoj stručnosti u rehabilitaciji i kondicijskoj pripremi."
      orientation="horizontal"
      :features="[{
          title: 'Rad u nogometu',
          description: 'Kao voditelj kondicijskog dijela u Školi nogometa Rijeka, radio je s mladim talentima, dok su mu iskustva u NK Orijent i rad sa seniorima u Sloveniji omogućila da usavrši svoje vještine u radu s različitim dobnim skupinama i potrebama.',
          icon: 'fluent:sport-soccer-20-regular'
        },
        {
          title: 'Rehabilitacija',
          description: 'Hrvoje je stručnjak za rehabilitaciju od ozljeda, pomažući klijentima da povrate snagu, pokretljivost i povjerenje u svoje tijelo kroz pažljivo osmišljene programe. Njegov strpljiv, personaliziran pristup, potkrijepljen stalnim usavršavanjem na europskim edukacijama, čini ga pravim mentorom koji svakog klijenta vodi prema uspjehu.',
          icon: 'fluent:doctor-20-regular'
        },
        {
          title: 'Mentor za uspjeh',
          description: 'Bilo da pomaže sportašu da se vrati na teren, rekreativcu da otkrije radost u vježbanju ili osobi u rehabilitaciji da povrati snagu, Hrvoje stvara sigurno i toplo okruženje u kojem svatko napreduje. Njegova sposobnost da razumije individualne potrebe i izgradi povjerenje ključna je za zajednicu Hala centra.',
          icon: 'fluent:teaching-20-regular'
        }
      ]"
      :ui="{
        title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
      }"
    >
      <NuxtImg
        src="img/No-Image-Placeholder.svg"
        format="webp"
        width="352"
        height="352"
        alt="Slika sportaša u pokretu"
        class="w-full rounded-lg"
      />
    </UPageSection>

    <USeparator color="primary" size="sm" />

    <UPageSection
      title="Alen"
      description="Kondicijski trener s diplomom Kineziološkog fakulteta, usmjeren na kondicijsku pripremu sportaša."
      orientation="horizontal"
      :features="[{
          title: 'Rad u nogometu',
          description: 'Godine rada u Školi nogometa Rijeka omogućile su mu da pomogne mladim sportašima u razvoju snage, brzine i samopouzdanja, često pretvarajući izazove u prilike za rast.',
          icon: 'fluent:sport-soccer-20-regular'
        },
        {
          title: 'Kreativan i inovativan',
          description: 'Kao član Hrvatske Mense, Alen donosi kreativan i analitički pristup treninzima, uvijek smišljajući inovativne načine kako motivirati klijente. Njegova strast za timskim i individualnim sportovima odražava se u energiji koju unosi u Hala centar – svaki trening s njim je prilika za zabavu, učenje i pomicanje granica.',
          icon: 'fluent:lightbulb-filament-20-regular'
        },
        {
          title: 'Trener za sve',
          description: 'Bilo da radi s mladim sportašima koji sanjaju o vrhunskim rezultatima, rekreativcima koji žele aktivniji život ili roditeljima koji žele inspirirati svoju djecu, Alen ima dar da svakoga potakne da pronađe radost u pokretu i osjeti se kao dio zajednice.',
          icon: 'fluent:people-community-20-regular'
        }
      ]"
      :ui="{
        title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
      }"
      reverse
    >
      <NuxtImg
        src="img/No-Image-Placeholder.svg"
        format="webp"
        width="352"
        height="352"
        alt="Slika sportaša u pokretu"
        class="w-full rounded-lg"
      />
    </UPageSection>

    <USeparator color="primary" size="sm" />

    <UPageSection
      title="Sara"
      description="Magistra ranog i predškolskog odgoja i obrazovanja te doktorantica na Kineziološkom fakultetu u Zagrebu, posvećena razvoju djece kroz pokret i sport."
      orientation="horizontal"
      :features="[{
          title: 'Što donosi?',
          description: 'Kao glavna voditeljica programa Hala Kids, Sara donosi stručnost i toplinu u rad s djecom od 4 do 10 godina, pomažući im da kroz igru razviju koordinaciju, samopouzdanje i ljubav prema pokretu.',
          icon: 'fluent:person-heart-20-regular'
        },
        {
          title: 'Neprocjenivo iskustvo',
          description: 'Njezino iskustvo u istraživanju pokreta u ranoj dobi, vođenje sportskih radionica i edukacija na Učiteljskom fakultetu čini je pravom mentoricom koja djecu inspirira da zavole sport i izgrade zdrave navike.',
          icon: 'fluent:building-government-search-20-regular'
        },
        {
          title: 'Sigurnost i veselje',
          description: 'Uz stalno usavršavanje i sudjelovanje na međunarodnim konferencijama, Sara unosi suvremene pristupe u programe Hala centra, stvarajući veselo i sigurno okruženje u kojem djeca napreduju. Njezina strast i pedagoški dar čine svaki trening Hala Kids zabavnim i nezaboravnim dijelom zajednice Hala centra.',
          icon: 'fluent:shield-task-20-regular'
        }
      ]"
      :ui="{
        title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
      }"
    >
      <NuxtImg
        src="img/No-Image-Placeholder.svg"
        format="webp"
        width="352"
        height="352"
        alt="Slika sportaša u pokretu"
        class="w-full rounded-lg"
      />
    </UPageSection>

    <USeparator color="primary" size="sm" />

    <AppCallToAction />



    </div>
</template>

<script lang="ts" setup>
const welcomeCards = ref([
  {
    title: 'Hala Centar',
    description: 'Hala centar nije samo prostor za trening – to je zajednica u kojoj svatko pronalazi svoje mjesto, bez obzira na ciljeve ili iskustvo. Ovdje se spajaju stručnost, motivacija i topla, "kao doma" atmosfera koja vas inspirira da budete najbolja verzija sebe.',
    icon: 'fluent:home-heart-20-regular',
  },
  {
    title: 'Misija Hala Centra',
    description: 'Naša misija je jednostavna: pružiti personalizirane programe koji donose dugoročne rezultate, uz posvećenost svakom klijentu i osjećaj pripadnosti koji čini svaki trening posebnim.',
    icon: 'fluent:lightbulb-filament-20-regular',
  },
  {
    title: 'Tu smo za Vas',
    description: ' Bilo da želite poboljšati performanse, vratiti snagu nakon ozljede, uživati u pokretu ili pomoći svom djetetu da raste snažno, Hala centar je tu da vas podrži na svakom koraku.',
    icon: 'fluent:heart-circle-20-filled',
  }
])
</script>

<style>

</style>