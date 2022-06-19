<template>

<div class="bg-white mt-2 head">
   
    <si-app-loader placement="BEFORE_HEADER"/>
<div>  

  
     <div class="flex p-2 justify-between items-center container">
        <div class="flex p-2 justify-between rounded-full">
             <div> 
                        
                
                 <div class="rounded-full bg-gray-100"> 
                    <span class="font-bold text-sm px-5"> Order Online or Call Now: </span>  
                    <br/>
                    <a href="tel:+5552347651" class="text-sm px-5"><span class="phone fa fa-phone"> 
                     </span> +555 234 765 1  </a> 
                     
                 </div> 
                

          </div>
        </div>
        

      
        <div class="logo flex justify-center items-center w-1/2 bg-white mt-2 ">

             <router-link to="/">
                  <div class="transition duration-300 delay-150 hover:delay-0">
                    <img class="h-12 w-full object-contain storeino" :src="section.logo ? section.logo.src : 'https://storeno.b-cdn.net/stores/3-2022/1647442436770.png'" alt='Store logo'/>
                   </div>
                </router-link>
                
            </div>

           
            <div class="icons flex items-center justify-between rounded-full bg-gray-100 mt-2">

                <button v-if="$settings.sections.header.icons.search" @click="showSearch=true"   aria-label="Search button" class="item p-2 rounded-md mx-1 relative hover:bg-yellow-400">
                    <i class="fa fa-search"></i>
                    <!-- <si-svg><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" class="w-5 h-5 translate self-center" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve" path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
	   c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
	  C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
	  S32.459,40,21.983,40z">
        </svg></si-svg> -->
                    <small v-if="$route.query.search" class="-top-1  rounded-full absolute w-1 h-1 p-1 bg-green-700 text-white flex justify-center items-center"></small>
                </button>


                <router-link v-if="$settings.sections.header.icons.account" to="/account/orders" title="Account" class="item hidden md:block p-2 bg-white rounded-md mx-1 hover:bg-yellow-400">
                    <!-- <si-svg><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 translate"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg></si-svg> -->
                    <i class="fa fa-user"></i>
                    
                </router-link>




                <router-link v-if="$settings.sections.header.icons.wishlist" to="/wishlist" title="Wishlist" class="item hidden md:block p-2 rounded-md mx-1 relative hover:bg-yellow-400">
                    <!-- <svg width="20px" height="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="20px"
	                viewBox="0 0 490.4 490.4" style="enable-background:new 0 0 490.4 490.4;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M222.5,453.7c6.1,6.1,14.3,9.5,22.9,9.5c8.5,0,16.9-3.5,22.9-9.5L448,274c27.3-27.3,42.3-63.6,42.4-102.1
                                    c0-38.6-15-74.9-42.3-102.2S384.6,27.4,346,27.4c-37.9,0-73.6,14.5-100.7,40.9c-27.2-26.5-63-41.1-101-41.1
                                    c-38.5,0-74.7,15-102,42.2C15,96.7,0,133,0,171.6c0,38.5,15.1,74.8,42.4,102.1L222.5,453.7z M59.7,86.8
                                    c22.6-22.6,52.7-35.1,84.7-35.1s62.2,12.5,84.9,35.2l7.4,7.4c2.3,2.3,5.4,3.6,8.7,3.6l0,0c3.2,0,6.4-1.3,8.7-3.6l7.2-7.2
                                    c22.7-22.7,52.8-35.2,84.9-35.2c32,0,62.1,12.5,84.7,35.1c22.7,22.7,35.1,52.8,35.1,84.8s-12.5,62.1-35.2,84.8L251,436.4
                                    c-2.9,2.9-8.2,2.9-11.2,0l-180-180c-22.7-22.7-35.2-52.8-35.2-84.8C24.6,139.6,37.1,109.5,59.7,86.8z"/>
                            </g>
                        </g>
                    </svg> -->
                    <i class="fa fa-heart"></i>
                </router-link>

                <router-link v-if="$settings.sections.header.icons.cart" to="/cart" title="Cart" id="cart-icon" class="item hidden md:block p-2 relative hover:bg-yellow-400">
                    <!-- <svg width="20px" height="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 366.305 366.305" style="enable-background:new 0 0 366.305 366.305;" xml:space="preserve">
                        <g>
                            <g>
                                <path style="fill:#010002;" d="M160.336,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579
                                    s36.579-16.412,36.579-36.579C196.915,309.328,180.511,292.917,160.336,292.917z M160.336,349.817
                                    c-11.201,0-20.321-9.112-20.321-20.321c0-11.201,9.12-20.321,20.321-20.321c11.201,0,20.321,9.12,20.321,20.321
                                    C180.658,340.705,171.545,349.817,160.336,349.817z"/>
                                <path style="fill:#010002;" d="M274.965,292.917c-20.167,0-36.579,16.42-36.579,36.579c0,20.167,16.412,36.579,36.579,36.579
                                    c20.159,0,36.579-16.412,36.579-36.579C311.544,309.328,295.124,292.917,274.965,292.917z M274.965,349.817
                                    c-11.209,0-20.321-9.112-20.321-20.321c0-11.201,9.112-20.321,20.321-20.321c11.193,0,20.321,9.12,20.321,20.321
                                    C295.287,340.705,286.158,349.817,274.965,349.817z"/>
                                <path style="fill:#010002;" d="M364.575,92.783c-1.536-1.967-3.894-3.113-6.397-3.113H83.342L60.688,6.23
                                    c-0.049-0.179-0.179-0.317-0.244-0.488c-0.179-0.528-0.447-0.992-0.732-1.463c-0.268-0.447-0.512-0.886-0.853-1.268
                                    c-0.333-0.382-0.723-0.667-1.13-0.975C57.306,1.711,56.9,1.394,56.42,1.158c-0.447-0.228-0.927-0.341-1.422-0.488
                                    c-0.528-0.154-1.04-0.284-1.601-0.325c-0.195-0.008-0.358-0.114-0.561-0.114H8.129C3.642,0.231,0,3.873,0,8.36
                                    s3.642,8.129,8.129,8.129h38.489l22.622,83.334l40.627,164.579c0.894,3.633,4.154,6.186,7.893,6.186h199.768
                                    c3.739,0,6.991-2.544,7.893-6.186l40.643-164.652C366.672,97.319,366.119,94.758,364.575,92.783z M311.17,254.33H124.131
                                    L87.504,105.927h260.301L311.17,254.33z"/>
                            </g>
                        </g>
                    </svg> -->
                    <i class="fa-solid fa-cart-shopping"></i>
                </router-link>

            </div>
        </div>
        <div v-if="showSearch" class="flex items-center justify-center absolute inset-0 z-20">
            <!-- <div @click="showSearch=false" class="bg-black bg-opacity-50 flex fixed inset-0"></div> -->
            <div class="bg-white absolute w-1/3 p-2">
                <form @submit.prevent="search" class="search flex container bg-gray-50 p-2 rounded-md border border-gray-200" action="/shop?">
                    <button type="button" @click="showSearch=false" aria-label="Search button">
                        <si-svg><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" class="w-5 h-5 translate self-center" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve" path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
	   c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
	  C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
	  S32.459,40,21.983,40z">
                </svg></si-svg>
                    </button>
                    <input autofocus v-model="q" class="bg-transparent outline-none w-full px-2" :placeholder="'Cherchez ici'" type="search" name="q">
                   
                    
                </form>
                 <small class="justify-center text-xs bg-blend-color-burn">Taper puis cliquer sur Entrer</small>
            </div>
        </div>
    </div>

    <si-app-loader placement="AFTER_HEADER">
         
    </si-app-loader>

    


</div>

</template>
<script>
export default {
    data() {
        return {
            showSearch: false,
            iconMenu: null,
            q: this.$route.query.search,
            section: this.$settings.sections.header
        }
    },
    watch: {
        showSearch(val) {
            if (val) {
                this.$nextTick(()=>{
                    document.querySelector('form.search input').focus();
                })
            }
        }
    },
    methods: {
        search(){
            this.$store.state.search = this.q;
            this.$router.push({ path: '/shop', query: { search: this.q }});
            this.showSearch = false;
        }
    },
}
</script>

<style>
    .item:hover{
        border-radius: 50px;
    }
/* .logo ::before{
      content: "ST";
      border-top-color: lightblue;
      font-size: larger;
      font-weight: bold;
      font-family: Sans-Serif;
      
    }

    .logo ::after{
      content: "REINO";
       border-top-color: lightblue;
      font-size: larger;
      font-weight: bold;
      font-family: Sans-Serif;
    } */
    /* .head {
      position: fixed;
      z-index:9;
    } */
    /* .phone ::before {
      content: "+456 231 209 1";
    } */
    .please  {
    z-index: -1;
    position:relative;
    }                        
</style>