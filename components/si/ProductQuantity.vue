<template>
    <div class="flex w-full items-center justify-center">
        <button @click="inc(-1)" class="bg-gray-50 border py-2 px-4" :class="value > quantity.min ? 'bg-primary text-white' : ''">-</button>
        <div class="flex">
            <label class="relative border py-2 h-full">
                <span class="px-2 py-4 px-5 text-center ">{{ value }}</span>
                <input :min="quantity.min" :max="quantity.max" class="px-2 text-center absolute outline-none inset-0 bg-opacity-0 w-full h-full" v-model="value" type="number">
            </label>
            <span v-if="quantity.unit">{{ quantity.unit }}</span>
        </div>
        <button @click="inc(1)" class="bg-gray-50 border py-2 px-4" :class="value < quantity.instock ? 'bg-primary text-white' : ''">+</button>
    </div>
</template>
<script>
export default {
    props: {
        quantity: Object,
    },
    data() {
        return {
            value: this.quantity.default || 1
        }
    },
    watch:{
        value(val, old){
            if(val > this.quantity.instock) this.value = this.quantity.instock;
            if(val < this.quantity.min) this.value = this.quantity.default;
            if(isNaN(val)) this.value = this.quantity.default;
        }
    },
    methods: {
        inc(inc){
            this.value += (this.quantity.increment * inc)
        }
    },
}
</script>