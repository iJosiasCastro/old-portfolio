<template>
    <div>
        <img class="mx-auto -mb-12 sm:-mb-20" src="/img/computers.png" alt="">
        <div class="bg-blue-700 text-white py-28">
          <div class="max-w-2xl mx-auto text-center md:text-lg px-2">
            <p v-html="data.home_about_hero_paragraph"></p>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props:['data']
}
</script>