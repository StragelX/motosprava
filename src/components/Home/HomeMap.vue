<script setup>
import SectionHeader from '@/components/_shared/SectionHeader.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';
</script>

<template>
    <section class="bg-bg_gray">
        <div class="container mx-auto">
            <SectionHeader backText="контакти" title="Як до нас доїхати" text="Для початку оберіть запит - це допоможе надати актуальну інформацію про послуги та їх ціни" />

            <div class="xl:flex items-stretch">
                <!-- TODO adjust video block size for actual video -->
                <div class="overflow-hidden xl:w-3/5 flex-none bg-slate-300">
                    <video class="w-full h-full object-cover" controls autoplay="false" muted>
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="bg-white p-6 sm:py-14 sm:px-12">
                    <p class="text-zinc-800 text-2xl xl:text-4xl font-bold font-['Roboto Condensed'] mb-14">Наші контакти</p>

                    <div class="flex gap-5 items-baseline">
                        <Phone class="h-6 pt-1 flex-none text-primary" />

                        <a href="tel:+38 (063) 123 56 89" class="text-zinc-800 xl:text-2xl font-bold hover:underline">+38 (063) 123 56 89</a>
                    </div>

                    <div class="h-px border my-5 bg-stone-300"></div>

                    <div class="flex gap-5 items-baseline">
                        <MapMarker class="h-6 pt-1 flex-none text-primary" />

                        <p class="text-base text-zinc-800 xl:text-2xl font-light">
                            Ви отримаєте від нас найкращий контент, який допоможе вашому бізнесу зростати. Найсвіжіші новини, бонуси - лише для підписників!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
