<template>
  <div class="range-container">
    <input 
      type="range" 
      :min="selectedRangeValues.minimum" 
      :max="maximumValue" 
      v-model="selectedValue" 
      :step="selectedRangeValues.step"
    >
    <div class="range-container__values">
      <span class="loan-minimum">{{ selectedRangeValues.minimum }}</span>
      <span class="loan-maximum">{{ maximumValue }}</span>
    </div>
  </div>
</template>

<script>

const props = {
  rangeValues: {
    type: Object
  },
  modifiedValue: {
    type: Number
  },
  maxValue: {
    type: Number
  }
};

const data = () => ({
  selectedValue: '',
  selectedRangeValues: {},
  formatedRange: {},
  maximumValue: 0
});

const formatRange = function _formatRange () {
  const payload = {
    value: this.selectedValue, 
    max: this.maximumValue, 
    min: this.selectedRangeValues.minimum,
    type: this.selectedRangeValues.type
  }
  return payload;
};

const setMaxValue = function _setMaxValue() {
  if(this.selectedRangeValues.type === 'collateral') {
    this.maximumValue = this.selectedRangeValues.maximum;
  } else {
    if(this.selectedRangeValues.type === 'loan' && this.maxValue < this.selectedRangeValues.maximum) {
      this.maximumValue = this.maxValue;
    } else {
      this.maximumValue = this.selectedRangeValues.maximum;
    }
  }
};

export default {
  name: 'CR-Range',
  props,
  data,
  watch: {
    rangeValues() {
      this.selectedRangeValues = this.rangeValues;
      this.$emit('setRangeValue', this.formatRange());
      this.setMaxValue();
    },
    selectedValue() {
      this.$emit('setRangeValue', this.formatRange());
    },
    modifiedValue() {
      this.selectedValue = this.modifiedValue;
    },
    maxValue() {
      this.setMaxValue();
    }
  },
  methods: {
    formatRange,
    setMaxValue
  }
}
</script>


<style scoped lang="scss" src="./cr-range.scss"/>