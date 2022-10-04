<template>
  <div>
    <Layout :data="data">

      <Contact class="" :data="data" />
      <div class="h-24"></div>
    </Layout>
  </div>
</template>


<script>
import es from "~/static/lang/es.json";
import en from "~/static/lang/en.json";
export default {
  head(){
    return {
      title: this.data.contact_title,
    }
  },
  async asyncData({route}){
    const lang = route.name.slice(0,3)=='en.' ? en : es
    return {data: lang}
  },
}
</script>