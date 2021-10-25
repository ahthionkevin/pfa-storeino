<template>
  <div>
    <sections-banner></sections-banner>
    <sections-collections></sections-collections>
    <template v-for="i in 5">
      <sections-products :key="i" :data-key="i" v-if="$settings.sections[`products_${i}`].active" :section="$settings.sections[`products_${i}`]"></sections-products>
    </template>
    <sections-posts></sections-posts>
    <sections-services></sections-services>
  </div>
</template>
<script>
export default {
}
</script>