<script setup>
import SectionHeader from "@/components/_shared/SectionHeader.vue";
import DetailedCheckbox from "./DetailedCheckbox.vue";

const parts = [
    {
        title: 'Заміна повітряного фільтра',
        checked: false
    },
    {
        title: 'Заміна свічок запалювання',
        checked: false
    },
    {
        title: 'Заміна приводного ременя',
        checked: false
    },
    {
        title: 'Заміна свічок розжарювання',
        checked: false
    },
    {
        title: 'Заміна ременя ГРМ',
        checked: false
    },
    {
        title: 'Заміна оливи в двигуні',
        checked: false
    },
    {
        title: 'Заміна повітряного фільтра',
        checked: false
    },
]

const togglePart = (index) => {
    parts[index].checked = !parts[index].checked;
};
</script>

<template>
    <section class="bg-[#F8F8F8] pb-20">
        <div class="container mx-auto">
            <SectionHeader backText="деталі" title=" Опціональний список необхідних деталей для операції" text="" />

            <div class="text-zinc-800 text-2xl font-light mb-10">
                Діагностика автомобіля – це важливий етап його обслуговування. Вона
                дозволяє виявити потенційні проблеми на ранніх стадіях і запобігти
                їхньому розвитку. Це може заощадити вам час і гроші на ремонті
                автомобіля в майбутньому.<br /><br />Ми в Хантерс Гараж маємо досвід і
                обладнання для проведення якісної діагностики автомобіля. Ми можемо
                перевірити всі системи автомобіля і виявити будь-які проблеми, навіть
                ті, які не видно неозброєним оком.
            </div>

            <div class="bg-white rounded-2xl border border-stone-300 p-10 text-zinc-800 text-base lg:text-lg font-light font-['Roboto'] space-y-2">
                <template v-if="parts.length">
                    <DetailedCheckbox v-for="(part, index) in parts" :key="index" :title="part.title" :checked="part.checked" @click="togglePart(index)" />
                </template>
            </div>
        </div>
    </section>
</template>
