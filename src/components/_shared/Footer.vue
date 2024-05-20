<script setup>
import Instagram from 'vue-material-design-icons/Instagram.vue';
import Facebook from 'vue-material-design-icons/Facebook.vue';
</script>

<template>
    <section class="bg-[#323232] px-4 pt-10 pb-16">
        <div class="container mx-auto">
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <router-link to="/">
                        <img src="@/assets/img/logo_footer.webp" alt="logo" />
                    </router-link>

                    <p class=" text-white text-base xl:text-lg font-light max-w-[730px] mb-10">Ви отримаєте від нас найкращий контент, який допоможе вашому бізнесу зростати. Найсвіжіші новини, бонуси - лише для підписників!</p>

                    <p class="text-stone-300 text-sm font-light">Copyright © 2024 Мотосправа. Всі права захищенні</p>
                </div>

                <div class="w-1/3">
                    <div class="flex items-center justify-end gap-3 mt-6">
                        <a href="/" target="_blank" class="opacity-60 transition-opacity hover:opacity-100">
                            <Facebook style="color:#fff" />
                        </a>
                        <a href="/" target="_blank" class="opacity-60 transition-opacity hover:opacity-100">
                            <Instagram style="color:#fff" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
