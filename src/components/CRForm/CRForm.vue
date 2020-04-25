<template>
  <form class="form">
    <div class="form__fields">
      <div class="field-group">
        <div class="field">
          <cr-select
            select-name="collateral"
            select-label="Collateral"
            :options="colOptions"
            @setCollateralValues="setSelectedCollateral"
          />
        </div>
        <div class="field">
          <cr-select
            select-name="installments"
            select-label="Number of Installments"
            :options="installmentOptions"
            @setCollateralValues="setInstallmentValue"
          />
        </div>
      </div>
      <div class="field-group">
        <div class="field">
          <cr-input
            input-name="collateralValue"
            input-label="Collateral Value"
            :inputValue="collateralInputValue"
            :rangeValues="collateralRange"
            @modifyRangeValue="modifyRangeValueCollateral"
          />
        </div>
        <div class="field">
          <cr-range
            :range-values="collateralRange"
            :inputValue="collateralInputValue"
            :modifiedValue="collateralValue"
            @setRangeValue="setCollateralRangeValue"
          />
        </div>
      </div>
      <div class="field-group">
        <div class="field">
          <cr-input
            input-name="loanAmount"
            input-label="Loan Amount"
            :inputValue="loanInputValue"
            :rangeValues="loanRange"
            :maxValue="maxLoanAmount"
            @modifyRangeValue="modifyRangeValueLoan"
          />
        </div>
        <div class="field">
          <cr-range
            :range-values="loanRange"
            :inputValue="loanInputValue"
            :modifiedValue="loanValue"
            :maxValue="maxLoanAmount"
            @setRangeValue="setLoanRangeValue"
          />
        </div>
      </div>
    </div>
    <div class="form__result">
      <cr-form-result />
    </div>
  </form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
    "loancalc"
);

import CRInput from '../CRInput/CRInput';
import CRSelect from '../CRSelect/CRSelect';
import CRRange from '../CRRange/CRRange';
import CRFormResult from '../CRFormResult/CRFormResult';

const data = () => ({
  colOptions: [],
  installmentOptions: [],
  selectedCollateral: [],
  collateralRange: {},
  loanRange: {},
  loanInputValue: null,
  collateralInputValue: null,
  setMaxLoanAmount: 0
});


const setSelectedCollateral = function _setSelectedCollateral(value) {
  this.setSelectedData(value);

  if(this.selectedData) {
    this.installmentOptions = this.selectedData.installments;
    this.collateralRange = this.selectedData.collateralRange;
    this.loanRange = this.selectedData.loanRange; 
  }

  this.calcFormResult();
};

const setInstallmentValue = function _setInstallmentValue(value) {
  this.setNumberOfInstallments(value);
  this.calcFormResult();
}

const setCollateralRangeValue = function _setRangeValue(value) {
  this.calcCollateralRangeValue(value);
  this.calcMaxLoanAmount(value);
  this.collateralInputValue = Number(this.collateralValue);
  this.calcFormResult();
};

const setLoanRangeValue = function _setRangeValue(value) {
  this.calcLoanRangeValue(value);
  this.loanInputValue = Number(this.loanValue);
  this.calcFormResult();
};

const modifyRangeValueCollateral = function _modifyRangeValueCollateral(value) {
  this.setRangeValueCollateral(value);
  this.calcFormResult();
};

const modifyRangeValueLoan = function _modifyRangeValueLoan(value) {
  this.setRangeValueLoan(value);
  this.calcFormResult();
};

const created = function _created() {
  this.colOptions = this.collateralOptions;
  this.setSelectedCollateral();
};

export default {
  name: 'LoanForm',
  components: {
    'cr-input': CRInput,
    'cr-select': CRSelect,
    'cr-range': CRRange,
    'cr-form-result': CRFormResult
  },
  data,
  methods: {
    ...mapActions(['setSelectedData', 'calcCollateralRangeValue', 'calcLoanRangeValue', 'calcFormResult', 'calcMaxLoanAmount']),
    ...mapMutations(['setRangeValueCollateral', 'setRangeValueLoan', 'setNumberOfInstallments']),
    setSelectedCollateral,
    setCollateralRangeValue,
    setLoanRangeValue,
    modifyRangeValueCollateral,
    modifyRangeValueLoan,
    setInstallmentValue
  },
  created,
  computed: {
    ...mapState(['collateralValue', 'loanValue', 'collateralOptions', 'dataOptions', 'selectedData', 'maxLoanAmount'])
  }
}
</script>

<style lang="scss" scoped src="./cr-form.scss" />
