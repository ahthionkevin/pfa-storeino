<template>
    <div class="options">
        <div v-for="(option, i) in options" :key="i" :class="option.key" class="p-1 bg-gray-50 mb-1 border">
            <b class="capitalize option-name mb-1 flex">{{ option.name }}</b>
            <div class="options-list">
                <div v-for="(val, ii) in option.values" :key="ii" class="option mx-1">
                    <button :class="selected[`option${i+1}`] && selected[`option${i+1}`].value == val._id ? 'active': ''" @click="setVariant(i+1, val._id)" :id="val._id" :style="`${option.key == 'color' ? `background-color:${val.value2}` : ''}`"><small>{{ val.value1 }}</small></button>
                </div>
            </div>
        </div>
        <si-product-price v-if="showPrice" class="flex px-1 text-2xl" :type="'simple'" :price="selected.price" :variants="[]"></si-product-price>
    </div>
</template>
<script>
export default {
    props: {
        options: Array,
        variants: Array,
        showPrice: {type: Boolean, false: true},
    },
    data() {
        return {
            selected: this.variants[0],
        }
    },
    methods: {
        setVariant(index, value) {
            // 1 2 3
            let index1 ,index2;
            if(index == 1){ index1=2; index2=3; }
            if(index == 2){ index1=1; index2=3; }
            if(index == 3){ index1=1; index2=2; }

            if(this.options.length == 3){
                this.selected = this.variants.find(variant => variant[`option${index}`].value == value && variant[`option${index1}`].value == this.selected[`option${index1}`].value && variant[`option${index2}`].value == this.selected[`option${index2}`].value);
            }else if(this.options.length == 2){
                this.selected = this.variants.find(variant => variant[`option${index}`].value == value && variant[`option${index1}`].value == this.selected[`option${index1}`].value);
            }else{
                this.selected = this.variants.find(variant => variant[`option${index}`].value == value);
            }
            this.$emit('selected', this.selected);
        },
    },
}
</script>
<style scoped>
.options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.options .options-list{
    display: flex;
    flex-wrap: wrap;
}
.options .option {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 5px;
}
.options .option button {
    border-radius: 3px;
    background: #fff;
    padding: 5px 10px;
    cursor: pointer;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
}
.options .color .option button {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: transparent;
    overflow: hidden;
    position: relative;
}
.options .color .option button.active{
    color: transparent;
    box-shadow: 0 0 0px 2px white, 0 0 0px 4px var(--primary-color)
}
.options .option button.active {
    color: white;
    background-color: var(--primary-color);
}
</style>