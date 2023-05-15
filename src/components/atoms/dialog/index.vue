<template>
        <Teleport to="#dialog">
            <div class="a-dialog" :class="{ active: modelValue }">
                <div
                        ref="dialog"
                        class="a-dialog__content"
                        :style="{ '--max-width': maxWidth, maxHeight }"
                >
                    <slot></slot>
                </div>
            </div>
        </Teleport>
    <slot name="activator" :on="onClick"></slot>
</template>

<script lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref, watch } from 'vue'

export default {
    name: 'ADialog',
    props: {
        maxWidth: {
            type: String,
            default: '400px',
        },
        maxHeight: {
            type: String,
            default: 'fit-content',
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const dialog = ref(null)
        onClickOutside(dialog, () => onClose())

        const onClose = () => {
            emit('close')
            emit('update:modelValue', false)
        }

        const onClick = () => {
            emit('update:modelValue', true)
        }

        watch(
            () => props.modelValue,
            (newVal) => {
                if (newVal) {
                    document.documentElement.style.cssText = `
				  overflow: hidden;
          padding-right: ${
                        window.innerWidth - document.documentElement.clientWidth
                    }px;
        `
                } else {
                    setTimeout(() => {
                        document.documentElement.removeAttribute('style')
                    }, 250)
                }
            }
        )

        return { dialog, onClick }
    },
}
</script>
<style scoped lang="scss" src="./index.scss"></style>
