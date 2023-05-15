<template>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="isActive">
        <ellipse cx="5.14286" cy="5.68421" rx="5.14286" ry="5.68421" fill="#FF0D0D"/>
        <ellipse cx="12.8571" cy="5.68421" rx="5.14286" ry="5.68421" fill="#FF0D0D"/>
        <path d="M9 18L16.7942 9.47368H1.20577L9 18Z" fill="#FF0D0D"/>
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
        <ellipse cx="5.14286" cy="5.68421" rx="5.14286" ry="5.68421" fill="#958E8E"/>
        <ellipse cx="12.8571" cy="5.68421" rx="5.14286" ry="5.68421" fill="#958E8E"/>
        <path d="M9 18L16.7942 9.47368H1.20577L9 18Z" fill="#958E8E"/>
    </svg>
</template>
<script>
export default {
    name: "BaseHeart",
    props: {
        isActive: {
            default: false
        }
    }
}
</script>

<style scoped>

</style>