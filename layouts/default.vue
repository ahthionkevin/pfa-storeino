<template>
    <div class="bg-gray-50 transition-all delay-300" :class="$store.state.showHeaderMenu ? 'to-right' : ''">
        <component :is="'style'">
            :root{ --primary-rgb: {{ rgb.r }}, {{rgb.g}}, {{ rgb.b }}; --primary-color: rgb(var(--primary-rgb)); }
            .bg-primary{ background-color: var(--primary-color); }
            .bg-primary:hover{ background-color: rgb(var(--primary-rgb),0.8); }
            .text-primary{ color: var(--primary-color); }
        </component>
        <sections-header-top></sections-header-top>
        <sections-header></sections-header>
        <sections-header-menu></sections-header-menu>
        <Nuxt/>
        <sections-footer></sections-footer>
        <div class="bg-white flex">
            <hr class="my-2 w-full">
        </div>
        <sections-footer-menu></sections-footer-menu>
        <sections-copyright></sections-copyright>
        <si-full-image></si-full-image>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rgb: { r: 0, g: 130, b: 70 },
        }
    },
    async fetch(){
        this.rgb = this.$tools.hexToRgb(this.$settings.style.primary_color);
    }
}
</script>
<style>
    .to-right{
        transform: translateX(20rem);
    }
</style>