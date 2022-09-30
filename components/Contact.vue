<template>
    <div class="bg-blue-700 grid lg:grid-cols-2">
        <div class="max-w-6xl mx-auto px-2 py-8 text-white">
            <div class="max-w-md mx-auto">
                <h3 class="text-2xl font-semibold mb-3">{{data.contact_form_title}}</h3>
                <p v-html="data.contact_form_description"></p>
                
                <form class="mt-8">
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium">{{data.contact_form.name.label}}</label>
                            <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" :placeholder="data.contact_form.name.placeholder" required>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium">{{data.contact_form.email.label}}</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" :placeholder="data.contact_form.email.placeholder" required>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="subject" class="block mb-2 text-sm font-medium">{{data.contact_form.email.label}}</label>
                        <input type="text" id="subject" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" :placeholder="data.contact_form.subject.placeholder" required>
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium">{{data.contact_form.message.label}}</label>
                        <textarea type="text" id="message" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light resize-none" :placeholder="data.contact_form.message.placeholder" rows="10" required>
                        </textarea>
                    </div>

                    <button type="submit" class="text-blue-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">{{data.contact_form.submit.label}}</button>
                </form>

            </div>
        </div>
        <div class="relative overflow-hidden">
            <img class="h-full w-full object-cover" :src="$store.state.darkmode ? '/img/map-dark.png' : '/img/map.png' " alt="">
            <div class="bg-white dark:bg-gray-800 text-lg p-3 md:p-5 absolute top-2 left-2 md:top-4 md:left-4 bg-opacity-75 ">
                <h5 class="text-xl font-semibold mb-3">Josias Castro</h5>
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-red-500 -ml-1 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                    <p>Buenos Aires, Olavarria</p>
                </div>
                <div class="flex">
                    <a class="flex items-center" href="mailto:josiascastro2003@gmail.com">
                        <svg class="w-5 h-5 mt-1 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                        <p>josiascastro2003@gmail.com</p>
                    </a>
                </div>
                <div class="flex">
                    <a class="flex items-center" href="api.whatsapp.com/send?phone=542284586916">
                        <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                        <p>+54 2284 586916</p>
                    </a>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
export default {
    props:['data'],
}
</script>