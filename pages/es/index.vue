<template>
    <Home :data="data" />
</template>

<script>
import Home from '../../views/Home.vue'
export default {
  head(){
    return {
      title: this.data.home_presentation_title,
    }
  },
  async asyncData({$http}){
    return await $http.$get("/lang/es.json")
      .then((res) => {
        return {data: res}
      })
  },
  components: { Home },
  name: 'es.index',
}
</script>
