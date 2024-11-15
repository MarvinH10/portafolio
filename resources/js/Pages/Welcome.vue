<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});

const usuario = {
    autenticado: "Marvin Campos",
    noAutenticado: "Usuario Desconocido"
};

function obtenerLetras(texto) {
    return texto.split("").map((letra, i) => ({
        letra,
        delay: `${i * 20}ms`
    }));
}

const iconUrl = ref('');

onMounted(async () => {
    try {
        const response = await fetch('https://api.example.com/tu-icon');
        const data = await response.json();
        iconUrl.value = data.iconUrl;
    } catch (error) {
        console.error('Error al obtener el icono:', error);
        iconUrl.value = '/img/default-icon.png';
    }
});
</script>

<template>

    <Head title="Mi Perfil" />
    <div class="bg-green-700 h-screen">
        <div class="bg-green-700 h-20 flex items-center justify-center fixed top-0 left-0 w-full z-10">
            <div class="flex justify-between w-full max-w-9xl px-4 text-gray-300 font-bold">
                <nav class="flex space-x-10">
                    <Link :href="('/')"
                        class="transition hover:text-white focus:outline-none flex items-center space-x-2 group">
                    <img :src="iconUrl" alt="Icono"
                        class="w-10 h-10 transition-transform duration-300 transform group-hover:translate-x-2 delay-[0ms] mr-1" />
                    <span class="flex space-x-[1.5px]">
                        <span v-for="{ letra, delay } in obtenerLetras(usuario.noAutenticado)" :key="letra + delay"
                            class="inline-block transition-transform duration-100 transform group-hover:translate-x-1"
                            :style="{ transitionDelay: delay }">
                            {{ letra }}
                        </span>
                    </span>
                    </Link>
                    <Link :href="route('about')"
                        class="transition hover:text-white hover:underline focus:outline-none flex items-center">
                    Acerca de mí
                    </Link>
                    <Link :href="route('project')"
                        class="transition hover:text-white hover:underline focus:outline-none flex items-center">
                    Proyectos
                    </Link>
                    <Link :href="route('blog')"
                        class="transition hover:text-white hover:underline focus:outline-none flex items-center">
                    Publicaciones
                    </Link>
                </nav>
                <nav v-if="canLogin" class="flex space-x-7">
                    <Link v-if="$page.props.auth.user" :href="route('dashboard')"
                        class="transition hover:text-white hover:underline focus:outline-none">Panel
                    </Link>
                    <template v-else>
                        <Link :href="route('login')"
                            class="transition hover:text-white hover:underline focus:outline-none flex items-center">
                        <i class="bi bi-person mr-1" style="font-size: 1.3rem;"></i> Entrar
                        </Link>
                        <Link v-if="canRegister" :href="route('register')"
                            class="transition hover:text-white focus:outline-none flex items-center">
                        <button
                            class="relative overflow-hidden p-1 px-4 bg-green-500 text-white rounded-full transition duration-200 hover:text-white group">
                            <span
                                class="absolute inset-0 bg-green-400 transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                            <span class="relative z-10 flex items-center">
                                Registrar
                                <i class="bi bi-house-add ml-1" style="font-size: 1.3rem;"></i>
                            </span>
                        </button>
                        </Link>
                    </template>
                </nav>
            </div>
        </div>
        <div class="flex h-screen">
            <div class="w-1/2 bg-green-700 flex flex-col items-left justify-center px-4 space-y-4 ml-20 mr-3">
                <div class="flex items-center mb-6">
                    <img src="https://via.placeholder.com/120" alt="Imagen de Perfil"
                        class="w-16 h-16 rounded-[9px] shadow-lg mr-4" />
                    <h1 class="text-sm font-bold text-white">
                        Por <span class="underline cursor-pointer">Marvin Campos</span>
                    </h1>
                </div>
                <h1 class="text-6xl font-bold text-white">
                    Bienvenido a mi Mundo de Código y Creatividad
                </h1>
                <p class="text-white font-bold">Descubre cómo transformo ideas <span class="text-gray-300">en soluciones
                        digitales.</span></p>
                <p class="text-white font-bold">Explora los proyectos <span class="text-gray-300">que representan</span>
                    mi
                    pasión
                    <span class="text-gray-300">por</span> el desarrollo.
                </p>
            </div>
            <div class="w-1/2 bg-green-500 flex items-center justify-center">
                <img src="https://via.placeholder.com/500x700" alt="Imagen grande" class="h-full w-full object-cover" />
            </div>
        </div>
    </div>
</template>
