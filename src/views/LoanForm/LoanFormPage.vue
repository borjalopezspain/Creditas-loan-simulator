<template>
  <div class="loan-form-page">
    <div class="loan-form-page__title">
      <h1>Perform a loan simulation using your asset as collateral.</h1>
    </div>
    <div class="loan-form-page__form-container">
      <cr-form />
    </div>
    <modal-result />
  </div>
</template>

<script>
import CRForm from '@/components/CRForm/CRForm';
import ModalFormResult from '@/components/Modals/ModalFormResult/ModalFormResult';

export default {
  name: 'LoanFormPage',
  components: {
    'cr-form': CRForm,
    'modal-result': ModalFormResult
  }
}
</script>

<style scoped lang="scss" src="./loan-form-page.scss"/>