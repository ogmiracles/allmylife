<template>
    <div class="cart-count">
        <div class="arrow" @click="decrement">
            <icon-arrow class="rotate-180"/>
        </div>
        <div class="cart-count__input">
            {{ modelValue }}
        </div>
        <div class="arrow" @click="increment">
            <icon-arrow/>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartCount"
}
</script>
<script setup>
import IconArrow from '@/assets/icons/arrow.svg?component'
const emit =defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type: Number,
        required: true
    }
})

const increment = () => {
    emit('update:modelValue', props.modelValue + 1)
}
const decrement = () => {
    if (props.modelValue > 1) {
        emit('update:modelValue', props.modelValue - 1)
    }
}
</script>

<style scoped lang="scss">
.cart-count {
  display: flex;
  gap: 4px;
  border: 1px solid black;
  border-radius: 30px;
  min-height: 25px;

  .arrow {
    display: flex;
    align-items: center;
  }

  &__input {
    width: 40px;
    border-left: 1px solid black;
    border-right: 1px solid black;
   display: flex;
      justify-content: center;
  }
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>