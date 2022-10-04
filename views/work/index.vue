<template>
  <div>
    <Layout :data="data">

      <div class="h-6 md:h-12"></div>
      <div class="max-w-4xl mx-auto px-2">
        <h2 class="text-xl sm:text-2xl pb-5">{{data.works_index_title}}</h2>
        <WorksGrid :data="data" />
        
      </div>

      <div class="h-28 md:h-56"></div>
    </Layout>
  </div>
</template>

<script>
import es from "~/static/lang/es.json";
import en from "~/static/lang/en.json";
export default {
  head(){
    return {
      title: this.data.works_index_title,
    }
  },
  async asyncData({route}){
    const lang = route.name.slice(0,3)=='en.' ? en : es
    return { data: lang }
  },
}
</script>