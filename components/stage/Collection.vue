<template>
     <div class="card overflow-hidden my-2 mr-4 ml-0 bg-white rounded-lg relative ">
        <nuxt-link :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
        <div class="img-container">
          <img :src="item.image.src" :alt="item.title"/>
        </div>
        <div class="card-text">
          <h3 class="text-center">{{item.name}}</h3>
        </div>
        </nuxt-link>
     </div>
</template>

<script>
    export default {
        props: ['item'],
    }
</script>

<style scoped>
  .card{
        /* margin: 0.4rem 1rem 0.4rem 0;
        background: rgb(255, 255, 255);
        border-radius: 8px;
        overflow: hidden;
        position: relative; */
        box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
        transition: 0.2s ease;
        width: 202px;
  }

  .card:hover{
    transform: scale(1.04);
    cursor: pointer;
  }

  .card:hover img{
    transform: scale(1.08);
  }

  .card:hover .card-text{
      opacity: 1;
      bottom: .08rem;
  }

  .img-container {
    overflow: hidden;
  }
  .img-container img {
    height: 210px;
    transition: 0.4s ease;
  }
  .card-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0.8rem;
    position: absolute;
    bottom: 1rem;
    opacity: 0;
    transition: 0.6s;
    width: 100%;
    height: 200px;
    background: linear-gradient(0deg, white 20%, transparent 100%);
  }
  .card-text h3 {
    font-size: 1.7rem;
    padding-right: 4px;
    font-weight: 700;
  }
  .card-text span {
    background: #2eb7eb;
    font-weight: bold;
    padding: 4px 6px;
    color: white;
    border-radius: 4px;
  }        

</style>