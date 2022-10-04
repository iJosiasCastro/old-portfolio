<template>
    <div>
        <nav class="sticky top-0 z-40 bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 border-b dark:border-gray-600">
            <div class="flex flex-wrap items-center justify-end max-w-screen-xl mx-auto">
                <NuxtLink :to="{name: data.lang_prefix+'home'}" class="flex flex-1 items-center">
                    <span class="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">Josias Castro</span>
                </NuxtLink>
                <div class="flex items-center lg:order-2">
                    <!-- Language buttons -->
                    <NuxtLink :to="{name:'en.' + this.$route.name}" v-if="data.lang == 'es'" class="cursor-pointer bg-gray-600 dark:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium hover:bg-gray-500 mr-2 rounded-lg text-sm text-white py-2 px-3 dark:focus:ring-gray-700 dark:hover:bg-primary-700 flex items-center">
                        <img src="/lang/en.png" class="w-4 h-4 mr-1" alt="english">
                        <span>
                            En
                        </span>
                    </NuxtLink>
                    <NuxtLink :to="{name: this.$route.name.slice(3)}" v-if="data.lang == 'en'" class="cursor-pointer bg-gray-600 dark:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium hover:bg-gray-500 mr-2 rounded-lg text-sm text-white py-2 px-3 dark:focus:ring-gray-700 dark:hover:bg-primary-700 flex items-center">
                        <img src="/lang/es.png" class="w-4 h-4 mr-1" alt="español">
                        <span>
                            Es
                        </span>
                    </NuxtLink>

                    <!-- Darkmode buttons -->
                    <button v-show="darkmode != 'load'" @click="toggleTheme()" id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm px-3 py-2">
                        <svg v-if="darkmode" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    </button>

                    <!-- Collapse toggle -->
                    <button @click="showMobileMenu=!showMobileMenu" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" :class="showMobileMenu ? '' : 'hidden'">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 mr-5">
                        <li v-for="item in data.header_items" :key="item.route">
                            <NuxtLink :to="{name: data.lang_prefix+item.route_name}" class="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-blue-400 dark:hover:text-white dark:border-gray-700">
                                {{item.title}}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main class="dark:bg-gray-900 dark:text-white">
            <slot></slot>
        </main>
        <footer class="bg-gray-800 text-white border-t dark:border-gray-600">
            <div class="flex flex-col md:flex-row justify-center md:justify-between max-w-6xl mx-auto items-center py-4 md:py-8 px-4">
                <p>© 2022 Josias Castro.</p>
                <p>{{data.footer_before_paragraph}} <a href="https://nuxtjs.org/" class="text-green-400 hover:underline">NuxtJS</a>.</p>
                <div class="flex items-center mt-8 md:mt-0">
                    <a href="https://www.linkedin.com/in/josiascastro/" class="mr-3">
                        <span class="sr-only">LinkedIn</span>
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5492284586916" class="mr-3">
                        <span class="sr-only">WhatsaApp</span>
                        <svg  class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    </a>
                    <a href="mailto:josiascastro2003@gmail.com">
                        <span class="sr-only">Email</span>
                        <svg  class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    props:['data'],
    mounted(){
        // Load darkmode
        if(localStorage.getItem('color-theme') == 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark')
        }
        this.darkmode = localStorage.getItem('color-theme') == 'dark'
        this.$store.commit('set_darkmode', this.darkmode)
    },
    data(){
        return {
            darkmode: 'load',
            showMobileMenu: false
        }
    },
    methods:{
        toggleTheme(){
            this.darkmode = !this.darkmode;
            this.$store.commit('set_darkmode', this.darkmode)
            if(this.darkmode){
                localStorage.setItem('color-theme', 'dark');
                document.documentElement.classList.add('dark');
            }else{
                localStorage.setItem('color-theme', 'light');
                document.documentElement.classList.remove('dark');
            }
        }
    }
}
</script>