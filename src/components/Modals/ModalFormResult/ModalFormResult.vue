<template>
  <div 
    class="modal" 
    id="modal-form-result"
    v-if="modalFormState"
  >
    <div class="modal-container">
      <span 
        class="close-modal"
        @click="closeModal"
      />
      <h1 class="modal-container__title">Your loan query</h1>
      <div class="modal-container__content">
        <div class="info-field">
          <p class="label">Collateral type</p>
          <p class="value">{{ selectedCollateralType }}</p>
        </div>
        <div class="info-field">
          <p class="label">Number of Installments</p>
          <p class="value">{{ numberOfInstallments }}</p>
        </div>
        <div class="info-field">
          <p class="label">Collateral Value</p>
          <p class="value">{{ collateralValue }}</p>
        </div>
        <div class="info-field">
          <p class="label">Loan Amount</p>
          <p class="value">{{ loanValue }}</p>
        </div>
        <div class="info-field">
          <p class="label">Interest Rate (month)</p>
          <p class="value">{{ formResultCalcRules.interestRate }}%</p>
        </div>
        <div class="result-box">
          <div class="result-box__info">
            <p class="label">Monthly installment</p>
            <p class="value">R${{ formResultMonthlyInstallment }}</p>
          </div>
          <div class="result-box__info">
            <p class="label">Total payable</p>
            <p class="value">R${{ formResultTotalPayable }}</p>
          </div>
        </div>
        <div class="user-email">
          <input 
            type="email" 
            name="email" 
            placeholder="Insert your e-mail"
            v-model="userEmail"
            :class=" !isEmailOk ? 'email-no-ok' : ''"
          >
        </div>
        <div class="button-container">
          <button 
            class="button-container__button cta-btn"
            @click="sendForm"
          >
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
    "loancalc"
);

const data = () => ({
  userEmail: '',
  isEmailOk: true
});

const validateEmail = function _validateEmail() {
  // eslint-disable-next-line no-useless-escape
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const testPattern = pattern.test(String(this.userEmail).toLowerCase());

  testPattern ? this.isEmailOk = true : this.isEmailOk = false;
};

const sendForm = function _sendForm(event) {
  event.preventDefault();

  if(!this.isEmailOk || this.userEmail === '') {
    this.isEmailOk = false;
    return;
  }

  const payload = {
    data: {
      monthlyInstallment: this.formResultMonthlyInstallment.toString(),
      totalPayable: this.formResultTotalPayable.toString(),
      collateralValue: this.collateralValue.toString(),
      loanValue: this.loanValue.toString(),
      numberOfInstallments: this.collateralValue.toString(),
      selectedCollateralType: this.selectedCollateralType.toString(),
      email: this.userEmail
    },
    loadingMsg: 'Sending loan query...'
  };

  this.sendFormResult(payload);
};

const closeModal = function _closeModal() {
  this.setModalFormResultState(false);
};

export default {
  name:'ModalFormResult',
  data,
  computed: {
    ...mapState([
      'formResultMonthlyInstallment', 
      'formResultTotalPayable', 
      'collateralValue',
      'loanValue',
      'numberOfInstallments',
      'selectedCollateralType',
      'formResultCalcRules',
      'modalFormState'
    ])
  },
  methods: {
    ...mapActions(['sendFormResult']),
    ...mapMutations(['setModalFormResultState']),
    sendForm,
    closeModal,
    validateEmail
  },
  watch: {
    userEmail() {
      this.validateEmail();
    }
  }
}
</script>

<style scoped lang="scss" src="./modal-form-result.scss"/>