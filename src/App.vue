<template>
  <div id="app">
    <Header />
    <div class="main">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </div>
    <Footer />
    <Loader />
    <Toaster />
  </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Loader from '@/components/Loader/Loader';
import Toaster from '@/components/Toaster/Toaster';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Loader,
    Toaster
  }
}
</script>

<style lang="scss" src="./main.scss"/>
