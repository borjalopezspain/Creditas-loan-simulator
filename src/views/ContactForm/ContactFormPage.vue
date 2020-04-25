<template>
  <div id="contact-form-page">
    <h1>Contact Form Page</h1>
    <span 
      @click="$router.go('-1')" 
      class="action-button --animate --aqua"
    >
      Go back
    </span>
  </div>
</template>

<script>

export default {
  name: 'ContactForm',
}
</script>

<style scoped src="./contact-form-page.scss" lang="scss"/>