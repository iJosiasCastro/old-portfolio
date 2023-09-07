<template>
    <div class="max-w-6xl mx-auto px-5 md:px-10">
        <div class="bg-gray-100 rounded-2xl border border-gray-300 py-8 -mt-16 dark:bg-gray-800 dark:border-gray-600 grid grid-cols-1 md:grid-cols-3">
            
            <div v-for="skill in data.skills" :key="skill.title" class="text-center px-9 text-sm border-b md:border-b-0 md:border-r md:h-full dark:border-gray-600 max-w-sm mx-auto pb-3 md:py-0">
                <div class="bg-blue-700 rounded-full p-2.5 w-14 h-14 mx-auto mb-2">
                    <svg class="text-white w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="skill.icon">
                    </svg>
                </div>
                <h2 class="text-base md:text-lg font-medium">{{skill.title}}</h2>
                <p v-html="skill.description"></p>
                <div class="my-7" v-for="(point, i) in skill.points" :key="i">
                    <h5 class="text-blue-600 dark:text-blue-400">{{point.title}}</h5>
                    <p>
                        <span v-for="(item, x) in point.items" :key="x">
                            {{item}}<br>
                        </span>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:['data']
}
</script>