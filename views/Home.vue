<template>
  <div>
    <Layout :data="data">

      <HomePresentation :data="data" />
      
      <HomeAboutHero :data="data" />

      <Skills :data="data" />

      <WorksGrid />

      <div class="h-28"></div>
      <div class="max-w-2xl mx-auto px-2 text-center">
        <h2 class="text-xl">{{data.home_works_title}}</h2>
        
        <div class="mt-12">
          <a href="" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {{data.home_works_button}}
          </a>
        </div>

      </div>
      <div class="h-36"></div>
      <Contact :data="data" />
      <div class="h-28"></div>
    </Layout>
  </div>
</template>

<script>
export default {
    props: ['data'],
    name: 'en.index'

}
</script>