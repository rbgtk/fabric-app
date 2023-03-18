<template>
  <Navigation class="mb-4" />
  
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import Navigation from './components/Navigation.vue'
</script>

<style>

</style>