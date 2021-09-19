<template>
    <div class="options">
        <div v-for="(option, i) in options" :key="i" :class="option.key">
            <b class="capitalize">{{ option.name }}</b>
            <div v-for="(val, ii) in option.values" :key="ii" class="option">
                <button :class="selected[`option${i+1}`] && selected[`option${i+1}`].value == val._id ? 'active': ''" :id="val._id">{{ val.value1 }}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        options: Array,
        variants: Array,
    },
    data() {
        return {
            selected: this.variants[0],
        }
    },
}
</script>
<style scoped>
.options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}
.options .option {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
}
.options .option button {
    border: 1px solid #ccc;
    border-radius: 3px;
    background: #fff;
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
}
.options .option button.active {
    background: #f5f5f5;
}
</style>