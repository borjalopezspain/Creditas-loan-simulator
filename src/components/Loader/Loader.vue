<template>
  <div 
    class="loader-container"
    v-if="loaderActive"
  >
    <div 
      class="lds-roller"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="loader-msg">
      {{ loaderMsg }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Loader',
  computed: {
    ...mapState('loader', ['loaderActive', 'loaderMsg'])
  }
}
</script>

<style scoped lang="scss" src="./loader.scss"/>