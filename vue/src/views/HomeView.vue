<template>
  <div class="home-container">
    <nav-bar></nav-bar>
    <router-view class="content-view"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: #fff;
}

.content-view {
  padding-top: 84px;
}
</style>

