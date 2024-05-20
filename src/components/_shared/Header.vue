<script setup>
import LoginVariant from 'vue-material-design-icons/LoginVariant.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import Menu from 'vue-material-design-icons/Menu.vue';
import Close from 'vue-material-design-icons/Close.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const menuItems = [
    { name: 'Діагностика Авто', path: '/services/1' },
    { name: 'Технічне обслуговування', path: '/services/2' },
    { name: 'Регулювання розвалу-сходження', path: '/services/3' },
    { name: 'Шиномонтаж', path: '/services/4' },
];
</script>

<template>
    <header class="fixed top-0 left-0 right-0 bg-black bg-opacity-70 border-b border-[#6D6D6D] z-50">
        <div class="container mx-auto">
            <div class="flex items-center justify-between px-4">
                <router-link to="/" class="flex-none xl:w-auto">
                    <img src="../../assets/img/logo.webp" alt="logo">
                </router-link>

                <menu class="hidden lg:flex items-center gap-3">
                    <router-link to="/aboutUs" class="text-stone-300 text-lg font-normal font-['Roboto Condensed'] pt-7 pb-6 px-7 border-b-4 border-transparent hover:border-primary transition-all">
                        Про Нас
                    </router-link>

                    <div class="group relative">
                        <button class="text-stone-300 flex items-center gap-2 text-lg font-normal font-['Roboto Condensed'] pt-7 pb-6 px-7 border-b-4 border-transparent hover:border-primary transition-all">
                            Послуги
                            <ChevronDown />
                        </button>

                        <div class="opacity-0 absolute top-[calc(100%_+_1px)] left-0 bg-white rounded-bl rounded-br overflow-hidden transition-opacity group-hover:opacity-100 shadow-2xl pointer-events-none group-hover:pointer-events-auto">

                            <router-link v-for="item in menuItems" :key="item.path" :to="item.path" class="header_link bg-transparent hover:bg-primary px-7 py-4 text-zinc-800 hover:text-white transition-all w-full text-sm font-normal font-['Roboto Condensed'] block whitespace-nowrap">
                                {{ item.name }}
                            </router-link>
                        </div>
                    </div>
                </menu>

                <div class="hidden lg:flex items-center gap-6">
                    <router-link to="/" class="flex items-center gap-1.5 px-4 h-14 text-white text-xs font-bold font-['Roboto Condensed'] uppercase hover:shadow">
                        В собистий кабінет
                        <LoginVariant />
                    </router-link>

                    <a href="#call" class="flex gap-1.5 mx-auto items-center justify-center h-14 rounded shadow border text-sm font-normal font-['Roboto Condensed'] uppercase transition-all bg-primary border-primary text-white hover:xl:border-white hover:xl:bg-white hover:xl:text-zinc-800 w-[200px]">
                        Замовити дзвінок
                        <Phone />
                    </a>
                </div>

                <button class="lg:hidden" @click="toggleMenu">
                    <Close class="text-white" v-if="isMenuOpen" />
                    <Menu class="text-white" v-else />
                </button>
            </div>
        </div>
    </header>

    <div class="flex flex-col gap-2 fixed z-20 bg-[#323232] left-0 right-0 bottom-0 h-screen overflow-auto pt-24 text-white text-xs font-bold uppercase" v-if="isMenuOpen" @click="toggleMenu">
        <router-link to="/" class="flex items-center justify-center w-full gap-1.5 py-4">
            В собистий кабінет
            <LoginVariant />
        </router-link>

        <a href="#call" class="flex items-center justify-center w-full gap-1.5 py-4">
            Замовити дзвінок
            <Phone />
        </a>

        <router-link to="/aboutUs" class="flex items-center justify-center w-full gap-1.5 py-4">
            Про Нас
        </router-link>

        <div class="w-full h-[1px] bg-white opacity-50 flex-none" />

        <p class="flex items-center justify-center w-full gap-1.5 py-2">Послуги:</p>

        <div class="w-full h-[1px] bg-white opacity-50 flex-none" />

        <router-link v-for="item in menuItems" :key="item.path" :to="item.path" class="flex items-center justify-center w-full gap-1.5 py-4">
            {{ item.name }}
        </router-link>
    </div>
</template>


<style scoped>
.header_link.router-link-exact-active {
    background-color: #4D7DF9;
    color: white;
}
</style>