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
            features: 'lg:grid-cols-2',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <!-- Ovdje IFrame videa-->
          <div class="flex flex-col justify-center md:flex-row gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-0">
            <div>  
            <NuxtImg
                src="img/Morfolosko.jpg"
                format="webp"
                width="1440"
                height="1080"
                alt="Slika čovjeka u procesu testiranja svog sastava tijela u Hala centru"
                class="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div>
              <NuxtImg
                src="img/Morfolosko2.jpg"
                format="webp"
                width="1440"
                height="1080"
                alt="Slika objašnjenja rezultata u Hala centru"
                class="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </UPageSection>

        <USeparator color="primary" size="sm" />

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
            features: 'lg:grid-cols-2',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <div class="flex flex-col justify-center md:flex-row gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-0">
            <div>
              <NuxtImg
                src="img/Motoricko.jpg"
                format="webp"
                alt="Slika čovjeka u procesu testiranja svojih motoričkih sposobnosti u Hala centru"
                class="h-full w-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <NuxtImg
                src="img/Motoricko2.jpg"
                format="webp"
                alt="Slika revizije rezultata u Hala centru"
                class="h-full w-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </UPageSection>

        <USeparator color="primary" size="sm" />

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
            features: 'lg:grid-cols-2',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <div class="flex flex-col justify-center md:flex-row gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-0">
            <div>
              <NuxtImg
                src="img/Mobilnost.jpg"
                format="webp"
                width="1440"
                height="1080"
                alt="Slika čovjeka u testiranju svoje mobilnosti i snage u Hala centru"
                class="h-full w-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <NuxtImg
                src="img/Mobilnost2.jpg"
                format="webp"
                width="1440"
                height="1080"
                alt="Slika upotrebe Dynamo Max uređaja u Hala centru"
                class="h-full w-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </UPageSection>

        <USeparator color="primary" size="sm" />

        <UPageSection
          title="Funkcionalno testiranje"
          orientation="vertical"
          :features="[{
              title: 'Tymewear',
              description: 'Pomoću Tymeweara mjerimo srčane zone i obrasce disanja, omogućujući optimizaciju napora za sportaše koji ciljaju vrhunske performanse',
              icon: 'fluent:phone-20-regular'
            }, 
            {
              title: 'Osim sportaša?',
              description: 'Za rekreativce koji žele zdraviju formu ili osobe u oporavku kojima je potreban precizan plan, osiguravajući da svaki trening bude učinkovit i prilagođen.',
              icon: 'fluent:person-20-regular'
            }
          ]"
          :ui="{
            title: 'hover:text-primary',
            features: 'lg:grid-cols-2',
          }"
          class="opacity-0 intersect:opacity-100 intersect:animate-fade-down animate-duration-[2500] animate-ease-linear transition intersect-once"
        >
          <div class="flex flex-col justify-center md:flex-row gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-0">
            <div>
              <NuxtImg
                src="img/Funkcionalno.jpg"
                format="webp"
                width="1440"
                height="1080"
                alt="Slika čovjeka u procesu testiranja svojih funkcionalnih sposobnosti u Hala centru"
                class="h-full w-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <NuxtImg
                src="img/Funkcionalno2.jpg"
                format="webp"
                width="1440"
                height="1080"
                alt="Slika revizije rezultata u Hala centru"
                class="h-full w-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </UPageSection>
      </UPage>
    </UContainer>

    <USeparator color="primary" size="sm" />

    <AppCallToAction />
  </div>
</template>

<script lang="ts" setup>
import type { features } from 'process';

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