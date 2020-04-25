<template>
  <div class="select-container">
    <label 
      :for="selectName"
    >
      {{selectLabel}}
    </label>
    <select
      data-testid="cr-select"
      :name="selectName"
      v-model="selectedOption"
    >
      <option 
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="selectName"
      >{{ option.label }}</option>
    </select>
  </div>
</template>

<script>

const props = {
  selectName: {
    type: String,
    required: true
  },
  selectLabel: {
    type: String,
    required: true
  },
  options: {
    type: Array
  }
};

const data = () => ({
  selectedOption: ''
});

const mounted = function _mounted() {
  if(this.options) {
    const found = this.options.find(option => option.selected === true)
    if(found) {
      this.selectedOption = found.value;
    }
  }
};

export default {
  name: 'CR-Select',
  props,
  data,
  watch: {
    selectedOption() {
      this.$emit('setCollateralValues', this.selectedOption)
    },
    options() {
      this.selectedOption = this.options.find(option => option.selected === true).value;
    }
  },
  mounted
}
</script>


<style scoped lang="scss" src="./cr-select.scss"/>
