<script setup>
import LoginVariant from 'vue-material-design-icons/LoginVariant.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
</script>

<template>
    <header class="fixed top-0 left-0 right-0 bg-black bg-opacity-70 border-b border-[#6D6D6D] z-50">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <router-link to="/" class="flex-none">
                    <img src="../../assets/img/logo.webp" alt="logo">
                </router-link>

                <menu class="flex items-center gap-3">
                    <router-link to="/aboutUs" class="text-stone-300 text-lg font-normal font-['Roboto Condensed'] pt-7 pb-6 px-7 border-b-4 border-transparent hover:border-[#4D7DF9] transition-all">
                        Про Нас
                    </router-link>

                    <div class="group relative">
                        <button class="text-stone-300 flex items-center gap-2 text-lg font-normal font-['Roboto Condensed'] pt-7 pb-6 px-7 border-b-4 border-transparent hover:border-[#4D7DF9]  transition-all">
                            Послуги
                            <ChevronDown />
                        </button>

                        <div class="opacity-0 absolute top-[calc(100%_+_1px)] left-0 bg-white rounded-bl rounded-br overflow-hidden transition-opacity group-hover:opacity-100 shadow-2xl pointer-events-none group-hover:pointer-events-auto">

                            <router-link to="/services/1" class="header_link bg-transparent hover:bg-[#4D7DF9] px-7 py-4 text-zinc-800 hover:text-white transition-all w-full text-sm font-normal font-['Roboto Condensed'] block whitespace-nowrap">
                                Діагностика Авто
                            </router-link>

                            <router-link to="/services/2" class="header_link bg-transparent hover:bg-[#4D7DF9] px-7 py-4 text-zinc-800 hover:text-white transition-all w-full text-sm font-normal font-['Roboto Condensed'] block whitespace-nowrap">
                                Технічне обслуговування
                            </router-link>

                            <router-link to="/services/3" class="header_link bg-transparent hover:bg-[#4D7DF9] px-7 py-4 text-zinc-800 hover:text-white transition-all w-full text-sm font-normal font-['Roboto Condensed'] block whitespace-nowrap">
                                Регулювання розвалу-сходження
                            </router-link>

                            <router-link to="/services/4" class="header_link bg-transparent hover:bg-[#4D7DF9] px-7 py-4 text-zinc-800 hover:text-white transition-all w-full text-sm font-normal font-['Roboto Condensed'] block whitespace-nowrap">
                                Шиномонтаж
                            </router-link>
                        </div>
                    </div>
                </menu>

                <div class="flex items-center gap-6">
                    <router-link to="/" class="flex items-center gap-1.5 px-4 h-14 text-white text-xs font-bold font-['Roboto Condensed'] uppercase hover:shadow">
                        В собистий кабінет
                        <LoginVariant />
                    </router-link>

                    <a href="#call" class="flex gap-1.5 mx-auto items-center justify-center h-14 rounded shadow border text-sm font-normal font-['Roboto Condensed'] uppercase transition-all bg-[#4D7DF9] border-[#4D7DF9] text-white hover:lg:border-white hover:lg:bg-white hover:lg:text-zinc-800 w-[200px]">
                        Замовити дзвінок
                        <Phone />
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>


<style scoped>
.header_link.router-link-exact-active {
    background-color: #4D7DF9;
    color: white;
}
</style>