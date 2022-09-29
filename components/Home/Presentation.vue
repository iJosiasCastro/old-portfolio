<template>
    <div class="max-w-2xl mx-auto">
        <div class="h-24"></div>
        <div class="text-center">
          <div class="flex flex-col items-center">
            <div>
              <!-- <img class="rounded-full w-24 " src="https://sebkay.com/img/seb-avatar-2021.webp" alt=""> -->
              <img class="rounded-full w-24 " src="/img/1646147149735.jpg" alt="">
            </div>
            <img class="h-8 w-8 -mr-16 -mt-6 mb-6" src="/img/svg/argentina_flag.svg" alt="">
          </div>
          <div class="max-w-md mx-auto">
            <h1 class="text-3xl mb-3" v-html="data.home_presentation_title"></h1>
            <p class="text-lg" v-html="data.home_presentation_paragraph"></p>
          </div>
        </div>
        <div class="h-14"></div>
      </div>    
</template>

<script>
export default {
    props:['data']
}
</script>