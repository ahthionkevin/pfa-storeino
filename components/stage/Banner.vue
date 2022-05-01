<template>
    <div class="banner-box flex flex-col justify-center items-center text-center m-5" :style="`background-image: url(${item.image ? item.image.src : $store.state.defaults.sliderImage});`">
        <h4 class="text-xl text-gray-50">Crazy Deal</h4>
        <h2 class="text-5xl font-semibold text-gray-50">{{item.title}}</h2>
        <span class="text-2xl text-gray-50 overflow-hidden px-3 break-words">{{item.description}}</span>
        <router-link v-if="item.button.active" :to="item.button.url"><button class="text-xl text-gray-50 border-solid border-2 p-2 mt-2">{{item.button.text}}</button></router-link>
    </div>
</template>

<script>
    export default {
        props:{
            item: Object
        },
        data(){
            return{
            }
        }
        
    }
</script>

<style scoped>
    .banner-box{
        min-width: 500px;
        height: 50vh;
        background-size: cover;
        background-position: center;
        transition: .4s ease-in-out;
    }

    .banner-box:hover{
        transform: scale(1.01);
        overflow: hidden;
    }

    button{
        transition: .4s ease-in-out;
    }

    .banner-box:hover button{
        --tw-bg-opacity: 1;
        background-color: rgba(16, 185, 129, var(--tw-bg-opacity));
        border: 0px;
    }
    /* button:hover{
        border: 0px;
    } */
</style>