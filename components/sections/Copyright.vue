<template>
    <div class="bg-primary">
        <div class="container mx-auto px-4 py-2">
            <div class="flex justify-between items-center flex-wrap">
                    <h2 class="text-white font-semibold text-2xl">
                        {{ title }}
                    </h2>
                <div class="text-white" v-html="description.replace(/__YEAR__/gi, year)">
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
            title: 'Online Store',
            description: 'Copyright © __YEAR__. All rights reserved. <a href="//storeino.com">storeino.com</a>'
        }
    },
}
</script>