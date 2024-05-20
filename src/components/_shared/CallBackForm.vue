<script setup>
import { ref } from 'vue'
import Btn from '@/components/_shared/Btn.vue';
import HeaderH2 from '@/components/_shared/H2.vue';

const showComment = ref(false)

</script>

<template>
    <section class="bg-bg py-12 xl:py-20 relative">
        <div class="absolute -top-40 pointer-events-none" id="call"></div>

        <div class="container px-4 mx-auto">
            <div class="sm:flex items-start justify-center xl:gap-10">
                <div class="mb-8 sm:mb-0">
                    <HeaderH2 customClass="mb-8 sm:mb-14">Запис на сервіс</HeaderH2>

                    <div class="w-full xl:max-w-[640px] text-zinc-800 xl:text-3xl font-light">
                        Залиште заявку на дзвінок або на запис.<br /><br />Ми зв’язуємося з вами для уточнення всіх деталей і домовляємось про зустріч.
                    </div>
                </div>

                <div class="w-full xl:max-w-[640px] space-y-6">
                    <input class="bg-white h-[60px] w-full rounded border px-6 text-black placeholder:text-zinc-800 xl:text-2xl font-light" type="text" placeholder="Ваше ім'я">

                    <input class="bg-white h-[60px] w-full rounded border px-6 text-black placeholder:text-zinc-800 xl:text-2xl font-light" type="text" placeholder="Номер телефону">

                    <button v-if="!showComment" @click="showComment = !showComment" class="text-zinc-800 xl:text-2xl font-normal">+ Додати коментар</button>

                    <transition name="fade">
                        <textarea v-if="showComment" class="bg-white h-40 resize-y w-full rounded border p-6 text-black placeholder:text-zinc-800 xl:text-2xl font-light" placeholder="Ваш коментар"></textarea>
                    </transition>

                    <Btn :active="true">Записатись на сервіс</Btn>
                </div>
            </div>
        </div>
    </section>
</template>
