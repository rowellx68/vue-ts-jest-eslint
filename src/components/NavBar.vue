<template>
  <nav class="bg-slate-100 border-b border-slate-900/10">
    <div class="max-w-8xl mx-auto">
      <div class="py-4 lg:px-8 mx-4 lg:mx-0">
        <router-link
          to="/"
          class="uppercase"
        >
          Hot Desk
        </router-link>
        <div v-if="store.loggedIn">
          <span>{{ store.name }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useLoginStore } from 'modules/login/store/login-store'

const store = useLoginStore()
</script>