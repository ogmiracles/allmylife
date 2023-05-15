<template>
    <Transition
            name="expand"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
    >
        <slot></slot>
    </Transition>
</template>

<script lang="ts">
export default {
    name: "ToggleAnimation",
    setup() {
        const enter = (el: HTMLElement) => {
            el.style.height = "auto"
            const height = getComputedStyle(el).height
            el.style.height = "0"
            getComputedStyle(el)
            setTimeout(() => {
                el.style.height = height
            })
        }
        const afterEnter = (el: HTMLElement) => {
            el.style.height = "auto"
        }
        const leave = (el: HTMLElement) => {
            el.style.height = getComputedStyle(el).height
            getComputedStyle(el)
            setTimeout(() => {
                el.style.height = "0"
            })
        }

        return { enter, afterEnter, leave }
    },
}
</script>

<style scoped lang="scss">
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}
</style>
