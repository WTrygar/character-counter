import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { message: '' }
  },
  getters: {
    characterCounter: (state) => state.message.length,

    wordCounter: (state) => state.message.split(' ').length,

    sentenceCounter: (state) => state.message.split(/[.?!]/g).filter(Boolean).length,
  },
})
