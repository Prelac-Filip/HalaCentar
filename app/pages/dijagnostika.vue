<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader
          title="Dijagnostika"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Želite li otkriti skrivene mogućnosti svog tijela i krenuti putem koji vodi do Vaših ciljeva?'
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
          title="Što čeka Vas u testiranju Hala centra?"
          :ui="{
            title: 'hover:text-primary',
          }"
        />

        <UPageSection
          title="Morfološko testiranje"
          orientation="vertical"
          :features="[{
              title: 'Kod mladih',
              description: 'Kod mlađih klijenata mjerimo visinu, težinu i dužinu udova kako bismo pratili rast i razvoj, određujući senzibilne faze za optimalan napredak.',
              icon: 'fluent:accessibility-20-regular'
            }, 
            {
              title: 'Kod starijih',
              description: 'Kod starijih koristimo MyTanita vagu za detaljnu analizu sastava tijela (npr. mišićna masa, masna masa, postotak masti), pružajući precizan uvid za personalizirani plan koji vodi do zdravije forme ili performansi.',
              icon: 'fluent:person-20-regular'
            }
          ]"
          :ui="{
            title: 'hover:text-primary',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <!-- Ovdje IFrame videa-->
          <NuxtImg
            src="img/No-Image-Placeholder.svg"
            format="webp"
            width="352"
            height="352"
            alt="Slika čovjeka u procesu rehabilitacije"
          />
        </UPageSection>

        <UPageSection
          title="Motoričko testiranje"
          orientation="vertical"
          :features="[{
              title: 'My Jump aplikacija',
              description: 'My Jump Lab je vodeća aplikacija za mjerenje sportske izvedbe, namijenjena trenerima, vrhunskim sportašima, fizioterapeutima i istraživačima. Koristimo je kako bi dobili preciznu sliku Vaših mogućnosti',
              icon: 'fluent:phone-20-regular'
            }, 
            {
              title: 'Što mjerimo?',
              description: 'Točne podatke o maksimalnoj dinamičkoj snazi (eksplozivna snaga pokreta), reaktivnoj snazi (brzina reakcije mišića), brzini (eksplozivnost) i promjeni smjera (agilnost), što nam omogućuje optimizaciju Vaših performansi ili Vašeg razvoja.',
              icon: 'fluent:person-20-regular'
            }
          ]"
          :ui="{
            title: 'hover:text-primary',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <NuxtImg
            src="img/No-Image-Placeholder.svg"
            format="webp"
            width="352"
            height="352"
            alt="Slika čovjeka u procesu rehabilitacije"
          />
        </UPageSection>

        <UPageSection
          title="Mobilnost i snaga"
          orientation="vertical"
          :features="[{
              title: 'Dynamo Max',
              description: 'Koristimo Dynamo Max uređaj od Valda za precizno testiranje mobilnosti zglobova (npr. opseg pokreta u ramenima ili kukovima) i snage mišića',
              icon: 'fluent:phone-20-regular'
            }, 
            {
              title: 'Što nam to omogućava?',
              description: 'Najprecizniju sliku vašeg stanja kako bismo osmislili kvalitetan program za sportaše, rekreativce, oporavak ili djecu, uz fokus na prevenciju ozljeda i jačanje temelja.',
              icon: 'fluent:person-20-regular'
            }
          ]"
          :ui="{
            title: 'hover:text-primary',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <NuxtImg
            src="img/No-Image-Placeholder.svg"
            format="webp"
            width="352"
            height="352"
            alt="Slika čovjeka u procesu rehabilitacije"
          />
        </UPageSection>

        <UPageSection
          title="Motoričko testiranje"
          orientation="vertical"
          :features="[{
              title: 'My Jump aplikacija',
              description: 'My Jump Lab je vodeća aplikacija za mjerenje sportske izvedbe, namijenjena trenerima, vrhunskim sportašima, fizioterapeutima i istraživačima. Koristimo je kako bi dobili preciznu sliku Vaših mogućnosti',
              icon: 'fluent:phone-20-regular'
            }, 
            {
              title: 'Što mjerimo?',
              description: 'Točne podatke o maksimalnoj dinamičkoj snazi (eksplozivna snaga pokreta), reaktivnoj snazi (brzina reakcije mišića), brzini (eksplozivnost) i promjeni smjera (agilnost), što nam omogućuje optimizaciju Vaših performansi ili Vašeg razvoja.',
              icon: 'fluent:person-20-regular'
            }
          ]"
          :ui="{
            title: 'hover:text-primary',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <NuxtImg
            src="img/No-Image-Placeholder.svg"
            format="webp"
            width="352"
            height="352"
            alt="Slika čovjeka u procesu rehabilitacije"
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
    description: 'U Hala centru, naš program dijagnostike je ključ koji otvara vrata Vašem potencijalu, bilo da ste sportaš koji juri vrhunske performanse, rekreativac željan zdravijeg života, osoba u oporavku ili roditelj koji podržava razvoj svog djeteta.',
    icon: 'fluent:accessibility-20-regular',
  },
  {
    title: 'Više od testiranja',
    description: 'Kroz precizna testiranja, stvaramo kristalno jasnu sliku Vašeg stanja, omogućujući prilagođeni program koji vas vodi do uspjeha u sigurnom i toplom okruženju.',
    icon: 'fluent:ribbon-star-32-regular',
  },
  {
    title: 'Pridružite se',
    description: 'Pridružite se i započnite svoje putovanje s povjerenjem – jer u Hala centru testiranje je prva iskra Vašeg napretka!',
    icon: 'fluent:trophy-20-regular',
  }
])
</script>

<style>

</style>