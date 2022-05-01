<template>
        <div v-if="$settings.sections.collections.active" class="container mt-7">
            <h2 class="text-center text-4xl font-bold">{{$settings.sections.collections.title}}</h2>
            <div v-if="items.length>0" class="flex flex-wrap justify-center">
                <stage-collection v-for="(item,index) in items" :key="index" :item="item"></stage-collection>
            </div>
        </div>
</template>

<script>
    export default {
        data(){
            return{
                    items: [],
                    loading: true
            }
        },
        async fetch(){
            try {
                const filter = {};
                if (this.$settings.sections.collections.items.length > 0) {
                    this.items = this.$settings.sections.collections.items;
                }
                else {
                    const { data } = await this.$storeino.collections.search(filter);
                    this.items = data.results;
                }
            }
            catch (e) {
                console.log({ e });
            }
            this.loading = false;
            if (process.client) {
            }
        },

        mounted() {
            console.log(this.items);
        },
    }
</script>

<style scoped>

</style>