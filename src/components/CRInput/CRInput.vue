<template>
  <div class="input-container">
    <label 
      data-testid="cr-input-label"
      :for="inputName"
    >
      {{inputLabel}}
    </label>
    <input 
      data-testid="cr-input"
      type="number"
      :name="inputName"
      v-model="valueInput"
      :class="isOutOfRange ? 'out-of-range' : ''"
    >
  </div>
</template>

<script>

const props = {
  inputName: {
    type: String,
    required: true
  },
  inputLabel: {
    type: String,
    required: true
  },
  inputValue: {
    type: Number,
  },
  rangeValues: {
    type: Object,
  },
  maxValue: {
    type: Number
  }
};

const data = () => ({
  valueInput: null,
  selectedRangeValues: {},
  isOutOfRange: false
});

const checkIsOutOfRange = function _checkIsOutOfRange() {
  let max;

  if(this.rangeValues.maximum) {
    max = this.rangeValues.maximum;
  } else {
    max = this.maxValue;
  }

  const min = this.rangeValues.minimum;

  if(this.valueInput < min || this.valueInput > max) {
    this.isOutOfRange = true;
  } else {
    this.isOutOfRange = false;
  }

};


export default {
  name: 'CR-Input',
  props,
  data,
  methods: {
    checkIsOutOfRange
  },
  watch: {
    inputValue() {
      this.valueInput = this.inputValue;
    },
    valueInput() {
      if(this.valueInput) {
        this.checkIsOutOfRange();
      }
      if(!this.isOutOfRange) {
        this.$emit('modifyRangeValue', this.valueInput);
      }
    },
    rangeValues() {
      this.selectedRangeValues = this.rangeValues;
      setTimeout(() => {
        this.valueInput = this.rangeValues.minimum;
      }, 100);
    },
    maxValue() {
      this.checkIsOutOfRange();
    }
  }
}

</script>


<style scoped lang="scss" src="./cr-input.scss"/>

