<template>
  <div>
    <Layout :data="data">

      <div class="max-w-2xl mx-auto p-2">
        <div class="h-12 md:h-24"></div>
          <div class="text-center">
            <div class="flex flex-col items-center">
              <div>
                <!-- <img class="rounded-full w-24 " src="https://sebkay.com/img/seb-avatar-2021.webp" alt=""> -->
                <img class="rounded-full w-24 " src="/img/1646147149735.jpg" alt="">
              </div>
              <img class="h-8 w-8 -mr-16 -mt-6 mb-6" src="/img/svg/argentina_flag.svg" alt="">
            </div>
            <div class="max-w-md mx-auto">
              <h1 class="text-xl sm:text-3xl mb-3" v-html="data.home_presentation_title"></h1>
              <p class="text-base sm:text-lg" v-html="data.home_presentation_paragraph"></p>
            </div>
          </div>
          <div class="h-14"></div>
      </div>    
      
      <div>
        <img class="mx-auto -mb-12 sm:-mb-20" src="/img/computers.png" alt="">
        <div class="bg-blue-700 text-white py-28">
          <div class="max-w-2xl mx-auto text-center md:text-lg px-2">
            <p v-html="data.home_about_hero_paragraph"></p>
          </div>
        </div>
      </div>

      <Skills :data="data" />


      <div class="h-48"></div>
      <div class="max-w-4xl mx-auto px-2 text-center">
        <h2 class="text-xl sm:text-2xl pb-5">{{data.home_works_title}}</h2>

        <WorksGrid :data="data" :length="6" />
        
        <div class="mt-12">
          <NuxtLink to="works" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {{data.home_works_button}}
          </NuxtLink>
        </div>
      </div>

      <div class="h-48"></div>
      <Contact :data="data" />
      <div class="h-28"></div>
    </Layout>
  </div>
</template>

<script>
export default {
  head(){
    return {
      title: this.data.home_title,
    }
  },
  async asyncData({$http, route}){
    const lang = route.name.slice(0,3)=='es.' ? 'es' : 'en'
    return await $http.$get(`/lang/${lang}.json`)
      .then((res) => {
        return {data: res}
      })
  },
}
</script>