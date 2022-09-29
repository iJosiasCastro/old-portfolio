<template>
  <div>
    <Layout :data="data">
      <div class="h-36"></div>
      <Contact :data="data" />
      <div class="h-28"></div>
    </Layout>
  </div>
</template>

<script>
export default {
    head(){
        return {
            title: this.data.home_presentation_title,
        }
    },
    props: ['data']
}
</script>