<template>
    <div>
        <div class="copy">
            <div class="flex justify-between items-center flex-wrap">
                    <h2 class="font-semibold text-2xl">
                        {{ title }}
                    </h2>
                <div v-html="description.replace(/__YEAR__/gi, year)">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
            title: this.$settings.sections.footer.copyright.store_name,
            description: this.$settings.sections.footer.copyright.text
        }
    },
}
</script>
<style scoped>
    .copy{
        background-color: #222;
        padding: 25px 15px;
        color: #aeaeae;
    }
</style>