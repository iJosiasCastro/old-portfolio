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


            <!-- <div class="text-center px-9 text-sm border-b md:border-b-0 md:border-r md:h-full dark:border-gray-600 max-w-sm mx-auto pb-3 mt-8 md:my-0">
            <div class="bg-blue-700 rounded-full p-2 w-14 h-14 mx-auto mb-2">
                <svg class="text-white w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm2.818 5.865 2.635 1.622-2.641 1.645c-.207.146-.318.378-.318.613 0 .601.682.966 1.182.613l3.511-2.257c.199-.141.318-.369.318-.614 0-.244-.119-.472-.318-.613l-3.505-2.235c-.498-.35-1.182.009-1.182.612 0 .236.111.468.318.614zm9.678 3.873c0-.414-.336-.75-.75-.75h-3.5c-.413 0-.75.336-.75.75s.337.75.75.75h3.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/>
                </svg>
            </div>
            <h2 class="text-base md:text-lg font-medium">Backend</h2>
            <p>El buen diseño de una base de datos  y su modelación es la clave de toda Web App o sitio web.</p>
            <div class="my-7">
                <h5 class="text-blue-600 dark:text-blue-400">Lenguajes:</h5>
                <p>
                PHP<br>
                SQL<br>
                </p>
            </div>
            <div class="my-7">
                <h5 class="text-blue-600 dark:text-blue-400">Frameworks:</h5>
                <p>
                Laravel (MVC y Rest API)<br>
                Firebase
                </p>
            </div>
            <div class="my-7">
                <h5 class="text-blue-600 dark:text-blue-400">Herramientas:</h5>
                <p>
                Git<br>
                Oracle Cloud<br>
                Linux<br>
                Dia (DFD y DER)<br>
                </p>
            </div>
            </div>
            <div class="text-center px-9 text-sm md:border-r md:h-full dark:border-gray-600 max-w-sm mx-auto mt-8 md:my-0 md:py-0">
            <div class="bg-blue-700 rounded-full p-3 w-14 h-14 mx-auto mb-2">
                <svg class="text-white w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm.505 4h14v16h-14v-16z"/>
                </svg>
            </div>
            <h2 class="text-base md:text-lg font-medium">Profesor</h2>
            <p>Imparto clases de programación, mi meta es ayudar a otros desarrolladores a seguir mejorando.</p>
            <div class="my-7">
                <h5 class="text-blue-600 dark:text-blue-400">Estadisticas:</h5>
                <p>
                HTML<br>
                CSS<br>
                SASS<br>
                Javascript ES5/ES6
                </p>
            </div>
            <div class="my-7">
                <h5 class="text-blue-600 dark:text-blue-400">Habilidades:</h5>
                <p>
                Seguimiento de tareas<br>
                Explicación detallada<br>
                Uso de problemas didácticos<br>
                Explicación con recursos visuales<br>
                Ejemplos de código en vivo
                </p>
            </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props:['data']
}
</script>