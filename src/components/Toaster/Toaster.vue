<template>
  <div 
    id="toaster-container"
    :class="toasterActive === true ? 'active' : ''"
  >
    <div 
      class="toaster"
      :class="toasterType"
    >
      <div class="toaster__text">{{ toasterMsg }}</div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapMutations } = createNamespacedHelpers(
    "toaster"
);

const closeToaster = function _closetoaster() {
  const payload = {
    state: false,
    msg: '',
    type: ''
  };

  setTimeout(() => {
    this.setToasterState(payload)
  }, 2000);
};

export default {
  name: 'Toaster',
  computed: {
    ...mapState(['toasterActive', 'toasterMsg', 'toasterType'])
  },
  methods: {
    ...mapMutations(['setToasterState']),
    closeToaster
  },
  watch: {
    toasterActive() {
      this.closeToaster();
    }
  }
}
</script>

<style lang="scss" src="./toaster.scss"/>