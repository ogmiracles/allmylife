<template>
    <button :class="['base-button', rounded ? 'base-button-rounded': '', variant ? `base-button-${variant}`: '']"
            :style="{'--min-width': minWidth}">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "BaseButton"
}
</script>
<script setup>
const props = defineProps({
    rounded: {
        type: Boolean,
        default: false
    },
    minWidth: {
        type: String,
        default: 'fit-content'
    },

    variant: {
        type: String,
        validator(value) {
            return ['grey', 'black', 'blue', 'white'].includes(value)
        },
        default: 'black'
    }
})
</script>

<style scoped lang="scss">
.base-button {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: none;
  border-radius: 16px;
  color: white;
  font-weight: 600;
  font-style: normal;
  font-size: 14px;
  line-height: 160%;
  cursor: pointer;
  transition: all linear 0.2s;
  min-width: var(--min-width);

  &:hover {
    background: #dddddd;

    .base-button-black {
      background: gray;
    }
  }

  &-blue {
    background: linear-gradient(180deg, #0E5096 0%, #0274BA 100%);
  }

  &-black {
    background: #181818;
    color: #F7F7F7;

    //box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 2px rgba(0, 0, 0, 0.06);
  }

  &-white {
    border: 1px solid black;
    background: white;
    color: black;

  }

  &-grey {
    border-color: transparent;
    background: #1818181E;
    color: #181818;
    box-shadow: none;
  }

  &-rounded {
    border-radius: 40px;
  }
}

.before-content {
  display: flex;
}

.after-content {
  display: flex;
}

</style>