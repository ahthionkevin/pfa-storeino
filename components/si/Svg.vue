<template>
<span class="inline-block">
    <img v-if="svg" :class="classs" width="50" height="50" alt="svg-icon" :src="`data:image/svg+xml;utf-8,${svg}`" type="image/svg+xml">
    <slot v-else/>
</span>
</template>
<script>
export default {
    data() {
        return {
            svg: '',
            classs:"w-5 h-5"
        }
    },mounted() {
        this.svg = encodeURIComponent(this.$slots.default[0].elm.parentElement.innerHTML);
        this.classs = this.$slots.default[0].elm.getAttribute("class");
    },
}
</script>