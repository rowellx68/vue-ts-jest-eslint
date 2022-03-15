<template>
  <h1>Login</h1>

  <button
    class="primary"
    @click.prevent="login"
  >
    Log me In
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLoginStore } from 'modules/login/store/login-store'

const store = useLoginStore()
const router = useRouter()

const login = () => {
  store.login()
}

store.$subscribe(() => {
  // redirect once logged in

  if (store.loggedIn) {
    router.push({ name: 'booking-page' })
  }
})
</script>