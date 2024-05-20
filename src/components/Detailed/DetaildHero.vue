<script setup>
import WalletBifoldOutline from 'vue-material-design-icons/WalletBifoldOutline.vue';
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue';
</script>

<template>
    <section class="relative">
        <img src="../../assets/img/repairman_looks_online_new_car_parts_1.webp" alt="hero" class="absolute top-0 left-0 w-full h-full object-cover object-center z-0">

        <div class="container mx-auto relative z-10">
            <div class="flex flex-col justify-center h-screen text-white font-bold font-['Roboto Condensed'] px-4">
                <h1 class="text-2xl md:text-3xl lg:text-6xl uppercase mb-8 text_shadow">
                    Технічний огляд та діагностика
                </h1>

                <div class="w-fit text-xl lg:text-3xl text_shadow">
                    <div class="flex items-center justify-between gap-5 w-fit">
                        <WalletBifoldOutline class="text-bg pt-1" />

                        <p class="font-normal w-auto md:w-[340px]">прблизна ціна послуги:</p>
                        <p>≈ 5 700 ₴</p>
                    </div>

                    <div class="w-full h-0.5 bg-stone-300 my-5"></div>

                    <div class="flex items-center justify-between gap-5 w-fit">
                        <ClockOutline class="text-bg pt-1" />

                        <p class="font-normal w-auto md:w-[340px]">строк виконання послуги:</p>
                        <p>4 дні</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
