<template>
    <Layout :data="data">
        <div class="max-w-5xl mx-auto px-2 pt-16">
            <!-- Breadcumb -->
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                    <NuxtLink :to="{name: data.lang_prefix+'home'}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        {{data.works_breadcums_home_label}}
                    </NuxtLink>
                    </li>
                    <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <NuxtLink :to="{name: data.lang_prefix+'works.index'}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                            {{data.works_breadcums_works_label}}
                        </NuxtLink>
                    </div>
                    </li>
                    <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                            {{work.title}}
                        </span>
                    </div>
                    </li>
                </ol>
            </nav>
            
            
            <div class="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4 sm:mt-8">
                <WorksGallery class="md:row-start-1 md:col-span-4" :images="work.images" />
                <div class="row-start-1 md:col-span-2">
                    <h1 class="text-3xl">{{work.title}}</h1>
                    <div class="my-6">
                        <h3 class="text-xl font-semibold">{{data.works_show_overview_title}}</h3>
                        <p v-html="work.overview"></p>
                    </div>
                    <div class="my-6">
                        <h3 class="text-xl font-semibold">{{data.works_show_overview_development_title}}</h3>
                        <p v-html="work.development"></p>
                    </div>
                    <div class="my-6">
                        <h3 class="text-xl font-semibold">{{data.works_show_overview_stack_title}}</h3>
                        <div class="flex flex-wrap">
                            <span v-for="(item, i) in work.stack" :key="i" :class="`bg-${item.color}-100 text-${item.color}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${item.color}-200 dark:text-${item.color}-800 mb-2`">
                                {{item.name}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-28"></div>
    </Layout>
</template>

<script>
import es from "~/static/lang/es.json";
import en from "~/static/lang/en.json";
export default {
  head(){
    return {
      title: this.work.title,
    }
  },
  async asyncData({route, params}){
    const lang = route.name.slice(0,3)=='en.' ? en : es
    const work = lang.works.find(e=>e.slug==params.slug)
    if(!work){
        redirect('/')
    }
    return {work, data: lang}
  },
}
</script>