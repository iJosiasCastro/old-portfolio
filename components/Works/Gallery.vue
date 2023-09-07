<template>
<div class="flex">
    <div>
        <div v-for="(image, i) in images" :key="i"
            @mouseover="previewImage = i"
            @mouseleave="previewImage = actualImage"
            @click="actualImage = i"
            :class="{ 'border-blue-500' : actualImage==i }"
            class="cursor-pointer w-16 h-16 object-cover p-1 border-2 mb-2 rounded">
            <img :src="image" class="w-full h-full object-contain" alt="">
        </div>
    </div>
    <div class="ml-2">
        <img :src="images[previewImage]" @click="showPhotoSwipe(0)" class="cursor-pointer w-full border-2 rounded object-contain"/>
    </div>
    
    <client-only>
        <vue-picture-swipe class="viewer" :isOpen="isOpen" :items="items" :options="options" @close="hidePhotoSwipe"></vue-picture-swipe>
    </client-only>

</div>
</template>

<script>
export default {
    name: 'carrousel',
    props: ['images'],
    async mounted(){
        var items = []
        // console.log(this.images)
        this.images.forEach(image => {
                items.push({
                w: 1024,
                h: 1024,
                src: image,
            })
        })
        this.items = items
    },
    data() {
        return {
            previewImage: 0,
            actualImage: 0,
            isOpen: false,
            options: {
                index: 0,
                shareEl: false,
            },
            items: []
        }
    },
    methods: {
        showPhotoSwipe (index) {
            this.isOpen = true
            this.$set(this.options, 'index', index)
        },
        hidePhotoSwipe () {
            this.isOpen = false
        },
    },
}  
</script>

<style>
.pswp img {
    max-width: none;
    object-fit: contain;
}

.viewer {
    z-index: 30000;
    position: fixed;
}
</style>
