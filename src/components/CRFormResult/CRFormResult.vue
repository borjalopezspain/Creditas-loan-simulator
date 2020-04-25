<template>
  <div class="result-container">
    <div class="quota-container">
      <h2>Monthly installment</h2>
      <div class="quota-container__quota">
        <strong>R$</strong>
        <span>{{ formResultMonthlyInstallment }}</span>
      </div>
    </div>
    <div class="amount-container">
      <h3>Total payable</h3>
      <div class="amount-container__quota">
        <strong>R$</strong>
        <span>{{ formResultTotalPayable }}</span>
      </div>
    </div>
    <div class="tax-container">
      <h3>Interest rate (month)</h3>
      <p class="tax-container__rate">{{ interestRate }}%</p>
    </div>
    <div class="button-container">
      <button 
        data-testid="cr-submit-btn"
        class="button-container__button cta-btn"
        type="submit"
        @click="openFormModal"
      >
        <span>Request</span>
      </button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapMutations, mapState } = createNamespacedHelpers(
    "loancalc"
);

const data = () => ({
  monthlyInstallment: '',
  totalPayable: ''
});

const openFormModal = function _openFormModal(event) {
  event.preventDefault();
  this.setModalFormResultState(true);
};

export default {
  name: 'CRFormResult',
  data,
  computed: {
    ...mapState([
      'formResultMonthlyInstallment', 
      'formResultTotalPayable', 
      'interestRate',
    ])
  },
  methods: {
    ...mapMutations(['setModalFormResultState']),
    openFormModal
  }
}
</script>

<style lang="scss" scoped src="./cr-form-result.scss" />