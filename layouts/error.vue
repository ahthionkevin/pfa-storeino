<template>
    <div class="container">
		<div class="row">
			<div class="text-gray-50 text-center py-24 flex items-center flex-col">
				<div class="relative">
				<h1 class="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
					<span>{{ String(error.statusCode).split('').join(' ') }}</span></h1>
					<span class="my-4 text-primary font-semibold text-4xl">Page not found!</span>
				</div>
				<h5 class="text-primary font-semibold text-xl my-4">We are sorry, but the page you requested was not found</h5>
				<a class="bg-primary inline-flex  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg">Got to Home</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  props: ['error'],
}
</script>
<style>
	.tracking-tighter-less {
		letter-spacing: -0.75rem;
	}
	.text-shadow {
        color: var(--primary-color);
		text-shadow: -8px 0 0 rgba(var(--primary-rgb),.8);
	}
</style>