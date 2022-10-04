<template>
  <div>
    <Layout :data="data">

      <!-- Presentation -->
      <div class="max-w-2xl mx-auto p-2">
        <div class="h-12 md:h-24"></div>
          <div class="text-center">
            <div class="flex flex-col items-center animated fadeInLeft">
              <div>
                <img class="rounded-full w-24 " src="/img/1646147149735.jpg" alt="">
              </div>
              <img class="h-8 w-8 -mr-16 -mt-6 mb-6" src="/img/svg/argentina_flag.svg" alt="">
            </div>
            <div class="max-w-md mx-auto animated fadeInLeft">
              <h1 class="text-xl sm:text-3xl mb-3" v-html="data.home_presentation_title"></h1>
              <p class="text-base sm:text-lg" v-html="data.home_presentation_paragraph"></p>
            </div>
          </div>
          <div class="h-14"></div>
      </div>    
      
      <!-- About hero -->
      <div class="animated fadeInUpBig">
        <img class="mx-auto -mb-12 sm:-mb-20" src="/img/computers.png" alt="">
        <div class="bg-blue-700 text-white pt-20 pb-24 sm:py-28">
          <div class="max-w-2xl mx-auto text-center text-sm md:text-lg px-2">
            <p v-html="data.home_about_hero_paragraph"></p>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div v-animate-onscroll="'animated fadeInUp'" class="max-w-6xl mx-auto px-5 md:px-10">
          <div class="bg-gray-100 rounded-2xl border border-gray-300 py-3 md:py-8 -mt-16 dark:bg-gray-800 dark:border-gray-600 grid grid-cols-1 md:grid-cols-3">
              
              <div v-animate-onscroll="'animated fadeInUp'" v-for="skill in data.skills" :key="skill.title" class="skill text-center px-9 text-sm border-b md:border-b-0 mx-auto pt-6 pb-2 md:py-0 md:border-r md:h-full dark:border-gray-600 max-w-sm">
                  <div class="bg-blue-700 rounded-full p-2.5 w-14 h-14 mx-auto mb-2">
                      <svg class="text-white w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="skill.icon">
                      </svg>
                  </div>
                  <h2 class="text-base md:text-lg font-medium">{{skill.title}}</h2>
                  <p v-html="skill.description"></p>
                  <div class="my-7" v-for="(point, i) in skill.points" :key="i">
                      <h5 class="text-blue-600 dark:text-blue-400">{{point.title}}</h5>
                      <p>
                          <span v-for="(item, x) in point.items" :key="x">
                              {{item}}<br>
                          </span>
                      </p>
                  </div>
              </div>

          </div>
      </div>

      <!-- Works -->
      <div class="h-16 md:h-48"></div>
      <div class="max-w-4xl mx-auto px-2 text-center">
        <h2 class="text-xl sm:text-2xl pb-5">{{data.home_works_title}}</h2>

        <WorksGrid :data="data" :length="6" />
        
        <div class="mt-12">
          <NuxtLink :to="{name: data.lang_prefix + 'works.index'}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {{data.home_works_button}}
          </NuxtLink>
        </div>
      </div>

      <div class="h-20 md:h-48"></div>
      <Contact :data="data" />
      <div class="h-6 md:h-28"></div>
    </Layout>
  </div>
</template>

<script>
import es from "~/static/lang/es.json";
import en from "~/static/lang/en.json";
export default {
  head(){
    return {
      title: this.data.home_title,
    }
  },
  async asyncData({route}){
    const lang = route.name.slice(0,3)=='en.' ? en : es
    return {data: lang}
  },
}
</script>

<style>
.skill:last-child{
  border: 0px !important;
}
</style>