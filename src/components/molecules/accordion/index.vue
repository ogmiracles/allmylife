<template>
<div class="accordion">
<div class="accordion__panel">
    <div class="accordion__panel__label">{{ label }}</div>
    <div class="accordion__panel__controller controller " @click="isOpen = !isOpen">
        <icon-arrow :class="[isOpen? 'rotate-180': '', 'accordion__arrow']"/>
    </div>
</div>
<toggle-animation>
    <div class="accordion__content" v-if="isOpen">
        <div v-if="!withContentSlot" class="accordion__content__item">
            {{ data }}
        </div>
        <slot v-else/>
    </div>
</toggle-animation>
</div>
</template>

<script>
export default {
    name: "Accordion"
}
</script>

<script setup>

import IconArrow from "@/assets/icons/arrow-down.svg?component";
import ToggleAnimation from "@/components/atoms/toggle-animation/index.vue";

const props = defineProps({
    label: {
        type: String,
        default: 'Руководитель'
    },
    data: {
        type: String,
        default: ''
    },
    withContentSlot: {
        type: Boolean,
        default: false
    },
    isOpen: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped lang="scss" src="./index.scss"/>

