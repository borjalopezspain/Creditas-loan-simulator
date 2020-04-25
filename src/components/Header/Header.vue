<template>
  <header class="header">
    <div class="header__container">
      <div class="header__container--logo">
        <span @click="$router.push('/')" title="Creditas">
          <img class="logo" src="https://staging.creditas.com.br/static/images/logo-creditas-white-3cd22a2808.svg" alt="Creditas logo">
        </span>
      </div>
      <help-button />
    </div>
  </header>
</template>


<script>
import HelpButton from '@/components/HelpButton/HelpButton';

export default {
  name: 'Header',
  components: {
    'help-button': HelpButton,
  }
}
</script>

<style scoped src="./header.scss" lang="scss"/>