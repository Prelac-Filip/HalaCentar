<script setup lang="ts">
const plans = ref([
  {
    title: 'Sportaši',
    description: 'Personalizirani treninzi za mlade i iskusne sportaše.',
    tagline: 'Po treningu',
    price: '35€',
    terms: '*Cijena testiranja ovisi o potrebnoj bateriji testova',
    features: [
      'Fokus na snagu, brzinu i mentalnu čvrstoću',
      'Detaljna dijagnostika',
      'Prilagođeno dobi i razini iskustva'
    ],
    button: {
      label: 'Javite nam se',
      to: '/pridruzi-se?plan=1'
    }
  },
  {
    title: 'Rekreativci (grupni trening)',
    description: 'Grupni treninzi do 8 osoba',
    tagline: '2x tjedno / mjesečno',
    price: '60€',
    features: [
      'Fokus na opću kondiciju i zdravlje',
      'Prilagođeno svim razinama',
      'Društvena i motivirajuća atmosfera'
    ],
    button: {
      label: 'Javite nam se',
      to: '/pridruzi-se?plan=2'
    }
  },
  {
    title: 'Rekreativci (samostalni trening)',
    tagline: 'Dijagnostika + plan',
    price: '150€',
    features: [
      'Personalizirani program',
      'Edukacija za vježbanje bilo gdje i bilo kada',
      'Podrška i savjeti na daljinu'
    ],
    button: {
      label: 'Javite nam se',
      to: '/pridruzi-se?plan=3'
    }
  },
  {
    title: 'Djeca (Hala Kids)',
    description: 'Program za djecu od 4 do 10 godina',
    tagline: '2x tjedno / mjesečno',
    price: '45€',
    features: [
      'Razvoj koordinacije i motoričkih sposobnosti',
      'Sampouzdanje kroz zabavu',
      'Sigurno i podržavajuće okruženje',
      'Voditeljica s iskustvom u radu s djecom' 
    ],
    button: {
      label: 'Javite nam se'
      ,
      to: '/pridruzi-se?plan=4'
    }
  },
  {
    title: 'Rehabilitacija',
    tagline: 'Po treningu',
    price: '35€',
    terms: '*Cijena dijagnostike ovisi o stanju',
    features: [
      'Individualizirani oporavak',
      'Za mlade sportaše i rekreativce',
      'Precizna dijagnostika',
      'Prilagođeno zdravstvenom stanju' 
    ],
    button: {
      label: 'Javite nam se',
      to: '/pridruzi-se?plan=5'
    }
  },
  {
    title: 'Sportovi izdržljivosti',
    tagline: 'Funkcionalno testiranje',
    price: '50€',
    terms: '*Cijena plana I programa ovisi o ciljevima',
    features: [
      'Personalizirani planovi',
      'Za trkače, bicikliste i trail entuzijaste',
      'Fokus na srčane zone i prevenciju ozljeda'
    ],
    button: {
      label: 'Javite nam se',
      to: '/pridruzi-se?plan=6'
    }
  },
  {
    title: 'Online trening',
    description: 'Fleksibilni programi za sportaše, rekreativce i trkače, s virtualnom podrškom i planom putem aplikacije.',
    price: 'Cijena ovisi o ciljevima',
    button: {
      label: 'Javite nam se',
      to: '/pridruzi-se?plan=7'
    }
  }
]);

const testingPlans = ref([
  {
    title: 'Morfološko testiranje',
    price: '30€',
    features: [
      'Sastava tijela',
      'Dužina udova',
      'Opsezi tijela'
    ],
    button: {
      label: 'Javite nam se',
      to: '/pridruzi-se?plan=8'
    }
  },
  {
    title: 'Motoričko testiranje',
    price: '50€',
    features: [
      'Snage',
      'Brzine',
      'Agilnosti'
    ],
    button: {
      label: 'Javite nam se'
      ,
      to: '/pridruzi-se?plan=9'
    }
  },
  {
    title: 'Mobilnost i snaga',
    features: [
      'Testiranje zglobova',
      'Testiranje mišića',
    ],
    price: '~90€',
    button: {
      label: 'Javite nam se',
      to: '/pridruzi-se?plan=10'
    }
  },
  {
    title: 'Funkcionalno testiranje',
    features: [
      'Srčane zone',
      'Disanje',
    ],
    price: '50€',
    button: {
      label: 'Javite nam se',
      to: '/pridruzi-se?plan=11'
    }
  }
]);
</script>

<template>
  <div>
    <UContainer>
      <UPage>
        <UPageHeader 
          title="Cjenik trening planova" 
          :ui="{
            title: 'hover:text-primary',
          }"
        />
        <UPageBody>
          <UPricingPlans orientation="vertical" :plans="plans" />
        </UPageBody>
        <UPageHeader 
          title="Cjenik testiranja" 
          :ui="{
            title: 'hover:text-primary',
          }"
        />
        <UPageBody>
          <UPricingPlans :plans="testingPlans" />
        </UPageBody>
      </UPage>
    </UContainer>
  </div>
</template>
