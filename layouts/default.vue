<template>
    <div class="bg-gray-50">
        <component :is="'style'">
            :root{ --primary-rgb: 0, 140, 70; --primary-color: rgb(0, 140, 70); }
            .bg-primary{ background-color: var(--primary-color); }
            .bg-primary:hover{ background-color: rgb(var(--primary-rgb),0.8); }
            .text-primary{ color: var(--primary-color); }
        </component>
        <sections-header-top></sections-header-top>
        <sections-header></sections-header>
        <sections-header-menu></sections-header-menu>
        <Nuxt/>
        
        <sections-footer></sections-footer>
        <div class="bg-white flex">

    <hr class="my-2 w-full">
        </div>
        <sections-footer-menu></sections-footer-menu>
        <sections-copyright></sections-copyright>
    </div>
</template>