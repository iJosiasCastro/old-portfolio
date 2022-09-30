<template>
    <div class="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3">
        <div v-for="work in works" :key="work.slug" class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <NuxtLink :to="{name: data.lang_prefix+'works.show', params: {slug: work.slug} }">
                <img class="rounded-t-lg object-cover" :src="work.thumbnail" alt="" />
            </NuxtLink>
            <div class="p-2 sm:p-5">
                <NuxtLink :to="data.lang_prefix+'/works/'+work.slug">
                    <h5 class="mb-1 sm:mb-2 text-base sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{work.title}}</h5>
                </NuxtLink>
                <p class="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                    {{work.overview | summarize(14)}}
                </p>
                <NuxtLink :to="data.lang_prefix+'/works/'+work.slug" class="inline-flex items-center py-2 px-3 mb-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {{data.home_read_more_button}}
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data', 'length'],
    mounted(){
        this.length ?
            this.works = this.data.works.splice(0, [this.length])
        :   this.works = this.data.works
    },
    data(){
        return{
            works:[]
        }
    }
}
</script>