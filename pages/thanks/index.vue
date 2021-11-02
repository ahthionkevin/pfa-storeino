<template>
    <div class="container">
		<div class="row">
			<div class=" bg-white  mb-3 text-center py-24 flex items-center flex-col">
				<div class="relative">
                    <h1 class="text-primary text-9xl font-sans font-bold mb-4">
                        <span>{{ $settings.sections.thanks.title }}</span>
                    </h1>
                    <p class="my-4 text-gray-700 font-semibold text-4xl">{{ $settings.sections.thanks.description }}</p>
				</div>
				<nuxt-link to="/shop" class="bg-primary inline-flex  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg"> {{ $settings.sections.thanks.buttons.back_to_shop_text }}</nuxt-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	mounted() {
		this.$tools.call('PAGE_VIEW');
	}
}
</script>