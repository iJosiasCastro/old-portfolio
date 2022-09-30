<template>
  <div>
    <Layout :data="data">

      <Contact class="" :data="data" />
      <div class="h-24"></div>
    </Layout>
  </div>
</template>


<script>
export default {
  head(){
    return {
      title: this.data.contact_title,
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