<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader
          title="Za sve koji žele više"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='U Hala centru svatko je dobrodošao, a naši programi su skrojeni da odgovore vašim jedinstvenim ciljevima.'
        />
      </UPage>
    </UContainer>

    <UPageSection
      title="Treniraj. Napreduj. Uživaj."
      description="Sportaši pronalaze stručno vodstvo za vrhunske performanse, bilo da se radi o mladim talentima ili iskusnim natjecateljima. Naši treninzi pomažu im razviti snagu, brzinu i mentalnu izdržljivost, uz personalizirani pristup koji maksimizira njihov potencijal. Rekreativci uživaju u grupnim treninzima koji spajaju zabavu, zajedništvo i postizanje forme, savršeno za one koji žele zdraviji život bez pritiska. Bilo da ste početnik ili samo želite uživati u pokretu, naši programi stvaraju atmosferu u kojoj se svaki korak prema boljoj formi osjeća kao radost."
      orientation="horizontal"
      :ui="{
        title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
      }"
      class="opacity-0 intersect:opacity-100 intersect:animate-fade-left animate-duration-[2500] animate-ease-linear transition intersect-once intersect-half"
      icon="fluent:person-running-20-regular"
    >
      <NuxtImg
        src="img/Hrvoje2.jpeg"
        format="webp"
        width="352"
        height="352"
        alt="Slika naših sportaša u Hala Centru"
        class="w-full rounded-lg"
      />
    </UPageSection>

    <UPageSection
    title="Oporavak i radosna djeca"
      description="Za one u rehabilitaciji, nudimo sigurne i stručne programe koji vraćaju snagu i pokretljivost, uz pažljivo praćenje. Naši treneri osiguravaju da svaki korak oporavka bude prilagođen vašim potrebama, vraćajući vam povjerenje u svoje tijelo. Roditelji i njihova djeca otkrivaju radost pokreta kroz Hala Kids, program za djecu od 4 do 10 godina koji kroz igru razvija koordinaciju, samopouzdanje i veselje. Ovi treninzi potiču djecu da zavole sport i izgrade zdrave navike uz podršku našeg pedagoškog pristupa."
      orientation="horizontal"
      :ui="{
        title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
      }"
      class="opacity-0 intersect:opacity-100 intersect:animate-fade-left animate-duration-[2500] animate-ease-linear transition intersect-once intersect-half"
      icon="fluent:stethoscope-20-regular"
      reverse
    >
      <NuxtImg
        src="img/Hrvoje2.jpeg"
        format="webp"
        width="352"
        height="352"
        alt="Slika uspjeha oproravka i radosne djece u Hala centru"
        class="w-full rounded-lg"
      />
    </UPageSection>

    <UPageSection
      title="Izdržljivost na vrhuncu"
      description="A za ljubitelje sportova izdržljivosti, poput trčanja ili biciklizma, naši treninzi kombiniraju stručnu dijagnostiku s personaliziranim pristupom kako bismo točno odredili vaše srčane zone, optimizirali trenažni proces i unaprijedili sposobnosti. Uz naše programe, priprema za utrke ili postizanje osobnih rekorda postaje učinkovitija, sigurnija i prilagođena vašim ciljevima."
      orientation="horizontal"
      :ui="{
        title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
      }"
      class="opacity-0 intersect:opacity-100 intersect:animate-fade-left animate-duration-[2500] animate-ease-linear transition intersect-once intersect-half"
      icon="fluent:vehicle-bicycle-20-regular"
    >
      <NuxtImg
        src="img/Hrvoje2.jpeg"
        format="webp"
        width="352"
        height="352"
        alt="Slika treninga izdržljivosti u Hala centru"
        class="w-full rounded-lg"
      />
    </UPageSection>

    <UContainer>
      <UPage>
        <UPageHeader
          title="Zajednica koja inspirira"
          :ui="{
            title: 'hover:text-primary',
          }"
          description='Hala centar je više od mjesta za vježbanje – to je prostor gdje se rađaju prijateljstva, dijele uspjehi i slave promjene'
        />
      </UPage>
    </UContainer>

  <UPageSection
      title="Stručnost. Podrška. Zajednica."
      description="Naš pedagoški pristup znači da ne samo treniramo, već učimo svakog klijenta kako maksimalno iskoristiti svoje potencijale. Bilo da ste početnik ili profesionalac, u Hala centru ćete pronaći toplinu, podršku i stručnost koja vas vodi prema vašim ciljevima. Ovdje ste dio zajednice koja vjeruje u vas – i to je ono što nas čini posebnima."
      orientation="horizontal"
      :ui="{
        title: 'text-primary cursor-pointer underline decoration-wavy decoration-primary/60 hover:text-third hover:decoration-solid hover:decoration-third/60',
      }"
      class="opacity-0 intersect:opacity-100 intersect:animate-fade-left animate-duration-[2500] animate-ease-linear transition intersect-once intersect-half"
      icon="fluent:teaching-20-regular"
      reverse
    >
      <NuxtImg
        src="img/Hrvoje2.jpeg"
        format="webp"
        width="352"
        height="352"
        alt="Slika zajednice u Hala centru"
        class="w-full rounded-lg"
      />
    </UPageSection>    

    <USeparator color="primary" size="sm" />

    <AppCallToAction />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>