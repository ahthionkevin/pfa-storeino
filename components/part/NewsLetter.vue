<template>
    <div class="newsLetter">
        <div class="container_">
            <h1 class="text-black text-2xl mb-3 font-bold">Love Burgers? Like Deals?</h1>
            <p class="text-black text-lg py-5">Be the first to know about our newest menu items and latest offers.</p>
            <div class="email">
                <input type="email" placeholder="Email">
                <i class="icon fa fa-envelope"></i>
                <button type="submit">Subscribe</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.newsLetter{
    background: #FFCA3C;
    width: 100%;
    height: 50vh;
    position: relative;
}

.container_{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.container_ .email{
    height: 50px;
    position: relative;
}

.container_ .email input{
    height: 100%;
    width: 650px;
    padding-left: 50px;
    font-size: 18px;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 50px;
}

.container_ .email .icon{
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
}

.container_ .email button{
    position: absolute;
    top: 50%;
    right: -40px;
    transform: translate(-50%, -50%);
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 50px;
    outline: none;
    background: rgb(242,0,45);
    color: white;
    transition: 0.3s;
}

.container_ .email button:hover{
    background: #323234;
}
</style>