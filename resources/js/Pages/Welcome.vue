<script setup>
import { Head, Link } from '@inertiajs/vue3';

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
    noAutenticado: "Programador.Usuario"
};

function obtenerLetras(texto) {
    return texto.split("").map((letra, i) => ({
        letra,
        delay: `${i * 50}ms`
    }));
}
</script>

<template>

    <Head title="Mi Perfil" />
    <div class="bg-white h-screen">
        <div class="bg-green-700 h-20 flex items-center justify-center">
            <div class="flex justify-between w-full max-w-6xl px-4 text-gray-300 font-bold">
                <nav v-if="canLogin" class="flex space-x-10">
                    <Link v-if="$page.props.auth.user" :href="('/')"
                        class="transition hover:text-white focus:outline-none flex items-center space-x-2 group">
                    <img :src="$page.props.auth.user.profile_image || 'https://via.placeholder.com/40'"
                        alt="Profile Image"
                        class="w-10 h-10 rounded-full border border-gray-300 transition-transform duration-300 transform group-hover:translate-x-2 delay-[0ms]" />

                    <span class="flex space-x-[1.5px]">
                        <span v-for="{ letra, delay } in obtenerLetras(usuario.autenticado)" :key="letra + delay"
                            class="inline-block transition-transform duration-300 transform group-hover:translate-x-2"
                            :style="{ transitionDelay: delay }">
                            {{ letra }}
                        </span>
                    </span>
                    </Link>

                    <template v-else>
                        <Link :href="('/')"
                            class="transition hover:text-white focus:outline-none flex items-center space-x-2 group">
                        <div
                            class="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-bold transition-transform duration-300 transform group-hover:translate-x-2 delay-[0ms]">
                            U
                        </div>
                        <span class="flex space-x-[1.5px]">                            <span v-for="{ letra, delay } in obtenerLetras(usuario.noAutenticado)" :key="letra + delay"
                                class="inline-block transition-transform duration-300 transform group-hover:translate-x-2"
                                :style="{ transitionDelay: delay }">
                                {{ letra }}
                            </span>
                        </span>
                        </Link>
                    </template>

                    <Link :href="route('about')"
                        class="transition hover:text-white hover:underline focus:outline-none flex items-center">
                    Acerca de mí</Link>
                    <Link :href="route('project')"
                        class="transition hover:text-white hover:underline focus:outline-none flex items-center">
                    Proyectos</Link>
                    <Link :href="route('blog')"
                        class="transition hover:text-white hover:underline focus:outline-none flex items-center">
                    Publicaciones</Link>
                </nav>

                <nav v-if="canLogin" class="flex space-x-7">
                    <Link v-if="$page.props.auth.user" :href="route('dashboard')"
                        class="transition hover:text-white hover:underline focus:outline-none">Panel</Link>
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
    </div>
</template>
