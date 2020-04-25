<template>
  <div class="home-container">
    <span 
      @click="$router.push('/loanform')" 
      class="action-button --animate --aqua"
    >
      Start Loan Simulator
    </span>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped src="./home.scss" lang="scss"/>