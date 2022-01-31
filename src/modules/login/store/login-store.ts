import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      loggedIn: false,
      name: '',
    }
  },
  actions: {
     login() {
      this.$patch({ loggedIn: true, name: 'Bob Ross' })
    },
  },
})
