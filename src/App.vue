<template>
  <nav-bar />
  <main class="max-w-8xl mx-auto">
    <div class="py-4 lg:px-8 mx-4 lg:mx-0">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import NavBar from 'components/NavBar.vue'
</script>