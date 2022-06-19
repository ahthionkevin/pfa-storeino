<template>
<div class="header mb-6" :style="`background-image: url(${banner.items[Object.keys(banner.items)[0]].image ? banner.items[Object.keys(banner.items)[0]].image.src : $store.state.defaults.sliderImage});`">
    <nav id="navbar" class="">
        <router-link to="/">
            <img :src="section.logo ? section.logo.src : require('~/assets/pay/logo.png')" alt="" class="logo"/>
            <!-- <img class="h-12 w-full object-contain storeino logo" :src="section.logo ? section.logo.src : 'https://storeno.b-cdn.net/stores/3-2022/1647442436770.png'" alt='Store logo'/> -->
        </router-link>
        <ul v-if="menu" id="menu">
            <li v-for="(item,key) in menu.items" :key="key" class="text-lg font-medium"><nuxt-link :to="item.url">{{item.text}}</nuxt-link></li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    data() {
        return {
            section: this.$settings.sections.header,
            navbar : null,
            menu : null,
            banner: this.$settings.sections.banner,
            show: false,
            activeId: null,
            menu: this.$settings.sections.header.menu,
            otherMenu: [
                {
                    _id: "lang",
                    text: this.$store.state.language.code,
                    active: this.$settings.sections.header.icons.language,
                    childrens: this.$settings.store_languages.map(l=> {
                        return {
                            _id: l.code,
                            text: l.name,
                            url: `?lang=${l.code}`
                        }
                    })
                },
                {
                    _id: "currency",
                    text: this.$store.state.currency.code,
                    active: this.$settings.sections.header.icons.currency,
                    childrens: this.$settings.store_currencies.map(c=> {
                        return {
                            _id: c.code,
                            text: c.name,
                            url: `?cur=${c.code}`
                        }
                    })
                }
            ].filter(item=> item.active)
        }
    },
    watch: {
        "$route.params": {
            handler(params) {
                this.$store.state.showHeaderMenu = false
            },
            deep: true
        },
        "$store.state.showHeaderMenu"(val){
            if(val){
                this.show = val;
            }else{
                setTimeout(() => {
                    this.show = val;
                },500);
            }
        }
    },
    methods: {
        handleScroll () {
        // Your scroll handling here
        window.onscroll = function(){
            if(window.pageYOffset >= menu.offsetTop + 20){
                navbar.classList.add("sticky")
            }else{
                navbar.classList.remove("sticky");
            }
        }
        console.log(window.scrollY)
        }
    },
    beforeMount () {
        if(process.client){
            if(document.getElementById("navbar")){
                    console.log('navbar created');
                } else {
                console.log('fail...') 
                }
            if(document.getElementById("menu")){
                    console.log('menu created');
                } else {
                console.log('fail...') 
                }
    }
        window.addEventListener('wheel', this.handleScroll)
    },
    
    beforeDestroy() {
        window.removeEventListener('wheel', this.handleScroll);
    },
}
</script>
<style lang="css" scoped>
.header{
    width: 100%;
    height: 100vh;
    background-image: url(../../assets/pay/image.png);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    /* background-color: brown; */
}
nav{
    width: 100%;
    padding: 20px 0;
    text-align: center;
    z-index: 100;
}
.logo{
    width: 150px;
    margin: 20px auto;
    cursor: pointer;
    
}

nav ul{
    background-color: #000;
    width: 100%;
    margin-top: 10px;
}

nav ul li{
    display: inline-block;
    list-style: none;
    margin: 20px 30px;
    color: #FFF;
    transition: .4s ease-in;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

nav ul li:hover{
    display: inline-block;
    list-style: none;
    margin: 20px 30px;
    color: rgb(243, 192, 42);
}
nav.sticky{
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 8%;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: padding 1s;
}

nav.sticky ul{
    width: auto;
}
[dir='ltr'] .move-out{ transform: translateX(-40em); }
[dir='ltr'] .move-in{ transform: translateX(-20em); }
[dir="rtl"] .move-out{ transform: translateX(40em); }
[dir="rtl"] .move-in{ transform: translateX(20em); }
</style>
