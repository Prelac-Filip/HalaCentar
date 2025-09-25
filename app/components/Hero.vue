<template>
  <div class="h-screen w-screen bg-gradient-to-br from-primary to-primary-50 -z-1 justify-start content-center">
    <div class="mx-auto max-w-7xl pt-16 sm:pt-24">
      <div class="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
          <div class="space-y-8">
            <div class="space-y-4">
              <div class="flex space-y-3 justify-center">
                <h1
                  class="text-6xl font-bold font-cocogoose tracking-tight text-black animate-jump-in animate-duration-650 animate-ease-in">
                  <span class="sm:text-6xl">
                    Dobrodošli u
                  </span>
                  <br>
                  <span
                    class="font-extrabold font-cocogoose text-6xl bg-gradient-to-r from-third to-yellow-300 text-transparent bg-clip-text animate-gradient">Hala
                    Centar
                  </span>
                </h1>
              </div>

              <p
                class="text-black font-montserrat sm:mt-5 sm:text-xl lg:text-lg xl:text-xl animate-fade-up animate-duration-[1100ms] animate-delay-1000 animate-ease-linear leading-7">
                Vaše mjesto za snagu, zdravlje i zajednicu. Hala centar nije samo prostor za trening - to je zajednica u
                kojoj svatko pronalazi svoje mjesto, bez obzira na ciljeve ili iskustvo.
              </p>

            </div>

            <div class="border-t border-gray-700"></div>

            <div class="flex space-x-4 justify-center items-center text-white">
              <div class="flex items-center space-x-2">
                <div class="flex flex-shrink-0 -space-x-1">
                  <NuxtImg loading="lazy" width="19" height="19" decoding="async"
                    class="h-6 w-6 max-w-none rounded-full ring-2 ring-white" style="color:transparent"
                    src="https://randomuser.me/api/portraits/men/29.jpg" />
                  <NuxtImg loading="lazy" width="19" height="19" decoding="async"
                    class="h-6 w-6 max-w-none rounded-full ring-2 ring-white" style="color:transparent"
                    src="https://randomuser.me/api/portraits/men/90.jpg"/>
                  <NuxtImg loading="lazy" width="19" height="19" decoding="async"
                    class="h-6 w-6 max-w-none rounded-full ring-2 ring-white" style="color:transparent"
                    src="https://randomuser.me/api/portraits/men/75.jpg"/>
                  <NuxtImg loading="lazy" width="19" height="19" decoding="async"
                    class="h-6 w-6 max-w-none rounded-full ring-2 ring-white" style="color:transparent"
                    src="https://randomuser.me/api/portraits/men/5.jpg"/>
                </div>

                <span class="flex-shrink-0 text-xs font-medium leading-5">+9</span>

              </div>

              <div class="h-4 border-l border-gray-700"></div>

              <NuxtLink class="z-1" to="https://www.google.com/search?sa=X&sca_esv=452a92eb2c2ade68&hl=hr-HR&gl=hr&tbm=lcl&sxsrf=AE3TifPtwwBuZjRTvWhfbVvfCsW7m5H5DA:1756925055521&q=Hala+Trening+Centar+Recenzije&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NzYzNDA3MDU3MTE0NjYyMrc038DI-IpR1iMxJ1EhpCg1LzMvXcE5Na8ksUghKDU5Na8qMyt1ESt-eQBaar18WgAAAA&rldimm=7361070574413322797&ved=2ahUKEwiRhtPun72PAxX7RPEDHTpaLKUQ9fQKegQITxAF&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews" target="_blank">
                <div class="flex items-center">

                  <svg class="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                    </path>
                  </svg>
                  <svg class="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                    </path>
                  </svg>
                  <svg class="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                    </path>
                  </svg>
                  <svg class="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                    </path>
                  </svg>
                  <svg class="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                    </path>
                  </svg>

                </div>
              </NuxtLink>
              <div class="h-4 border-l border-gray-700"></div>
              <UButton @click="scrollToCards" color="primary"
                class="font-semibold text-black rounded-full cursor-pointer z-1 hover:animate-bounce animate-ease-in-out"
                size="xl">
                Krenimo</UButton>
            </div>
            <ClientOnly>
              <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </ClientOnly>
          </div>
        </div>

        <div class="flex items-center w-full col-span-6">
          <ClientOnly>
            <UCarousel v-slot="{ item }" dots :items="pictures" loop width="680" height="453" :autoplay="{ delay: 2500 }">
              <NuxtImg :src="item" class="rounded-xl" width="680" height="453"/>
            </UCarousel>
          </ClientOnly>
          <!-- <div class="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
            <div style="width: 100%; height: 100%;">
              <div style="width: 100%; height: 100%;">
                <iframe frameborder="0" allowfullscreen="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  width="100%" height="100%"
                  src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&" id="widget2">
                </iframe>
              </div>
            </div>
           </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
function scrollToCards() {
  const el = document.getElementById('sport-card')
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 60 // adjust pixels to your desired offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
const pictures = [
  '/img/test.jpg',
  '/img/hala.jpg',
  '/img/hala-sprint.webp',
  '/img/hala-skok.webp',
]
</script>

<style>
/*Start Animations*/
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

/*End Animations*/
/*
  -- Start BackGround Animation 
  */
@media (orientation: portrait) {
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
  }
}

@media (orientation: landscape) {
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 20%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 5%;
  width: 35px;
  height: 35px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 57%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 70%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 30%;
  width: 130px;
  height: 130px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 15%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 80%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

/*
  -- End BackGround Animation 
  */
</style>