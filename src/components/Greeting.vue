<template>
  <h1>Hello, {{ name }}</h1>
</template>

<script setup lang="ts">
interface GreetingProps {
  name: string
}

defineProps<GreetingProps>()
</script>