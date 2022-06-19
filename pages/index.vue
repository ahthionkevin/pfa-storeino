<template>
  <div>
    <!-- <sections-banner v-if="$settings.sections.banner.active"></sections-banner> -->
    <part-collection v-if="$settings.sections.collections.active"></part-collection>
    <part-event></part-event>
    <part-banner v-if="$settings.sections.banner.active"></part-banner>
    <template v-for="i in 5">
      <!-- <sections-products :key="i" :data-key="i" v-if="$settings.sections[`products_${i}`].active" :section="$settings.sections[`products_${i}`]"></sections-products> -->
      <part-product :key="i" :data-key="i" v-if="$settings.sections[`products_${i}`].active && i<3" :section="$settings.sections[`products_${i}`]"></part-product>
    </template>

    
    <template v-for="i in 5">
      <part-product :key="i" :data-key="i" v-if="$settings.sections[`products_${i}`].active && i>2" :section="$settings.sections[`products_${i}`]"></part-product>
    </template>

    <!-- <sections-posts v-if="$settings.sections.posts.active"></sections-posts> -->
    <!-- <sections-services v-if="$settings.sections.services.active"></sections-services> -->
    <part-service v-if="$settings.sections.services.active"></part-service>
    <part-news-letter></part-news-letter>
    <div class="container">
      <si-app-loader  placement="BEFORE_HOME_FOOTER"/>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'home',
  data: () => ({
    events: []
  }),
  async fetch(){
    this.$store.state.seo.title = this.$settings.store_name;
    this.$store.state.seo.description = this.$settings.store_description;
    // this.events = await this.$http.$get('http://localhost:9000/api/events/wantedEvent')
  },
  mounted() {
    this.$tools.call('PAGE_VIEW');
    this.$storeino.fbpx('PageView')
  },
}
</script>
