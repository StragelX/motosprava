<script setup>
import WalletBifoldOutline from 'vue-material-design-icons/WalletBifoldOutline.vue';
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue';
</script>

<template>
    <section class="relative">
        <img src="../../assets/img/repairman_looks_online_new_car_parts_1.webp" alt="hero" class="absolute top-0 left-0 w-full h-full object-cover object-center z-0">

        <div class="container mx-auto relative z-10">
            <div class="flex flex-col justify-center h-screen text-white font-bold font-['Roboto Condensed']">
                <h1 class="text-6xl uppercase mb-8 text_shadow">
                    Технічний огляд та діагностика
                </h1>

                <div class="w-fit">
                    <div class="flex items-center justify-between gap-5 text-3xl w-fit">
                        <WalletBifoldOutline class="text-[#FFEE02] pt-1" />

                        <p class="font-normal text_shadow w-[340px]">прблизна ціна послуги:</p>
                        <p class="text_shadow">≈ 5 700 ₴</p>
                    </div>

                    <div class="w-full h-0.5 bg-stone-300 my-5"></div>

                    <div class="flex items-center justify-between gap-5 text-2xl w-fit">
                        <ClockOutline class="text-[#FFEE02] pt-1" />

                        <p class="font-normal text_shadow w-[340px]">строк виконання послуги:</p>
                        <p class="text_shadow">4 дні</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
