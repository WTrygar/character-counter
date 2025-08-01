import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { message: '', limit: 0, check: false }
  },
  getters: {
    characterCounter: (state) => state.message.length,

    characterCounterExcludingSpaces: (state) =>
      state.message.length - state.message.split(' ').length,

    wordCounter: (state) => state.message.split(' ').length,

    sentenceCounter: (state) => state.message.split(/[.?!]/g).filter(Boolean).length,

    approxReadTime: (state) => Math.round(state.message.length / 200),
  },
})
