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
      setTimeout(() => {
        this.$patch({ loggedIn: true, name: 'Bob Ross' })
      }, 2000)
    },
  },
})
