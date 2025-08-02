import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { message: '', limit: 0, check: false, isActive: false }
  },
  getters: {
    characterCounter: (state) => state.message.length,

    characterCounterExcludingSpaces: (state) =>
      state.message.length - state.message.split(' ').length,

    wordCounter: (state) => state.message.split(' ').length,

    sentenceCounter: (state) => state.message.split(/[.?!]/g).filter(Boolean).length,

    approxReadTime: (state) => Math.round(state.message.length / 200),

    countA: (state) =>
      (state.message.match(/a/g) || []).length + (state.message.match(/A/g) || []).length,
    countB: (state) =>
      (state.message.match(/b/g) || []).length + (state.message.match(/B/g) || []).length,
    countC: (state) =>
      (state.message.match(/c/g) || []).length + (state.message.match(/C/g) || []).length,
    countD: (state) =>
      (state.message.match(/d/g) || []).length + (state.message.match(/D/g) || []).length,
    countE: (state) =>
      (state.message.match(/e/g) || []).length + (state.message.match(/E/g) || []).length,
    countF: (state) =>
      (state.message.match(/f/g) || []).length + (state.message.match(/F/g) || []).length,
    countG: (state) =>
      (state.message.match(/g/g) || []).length + (state.message.match(/G/g) || []).length,
    countH: (state) =>
      (state.message.match(/h/g) || []).length + (state.message.match(/H/g) || []).length,
    countI: (state) =>
      (state.message.match(/i/g) || []).length + (state.message.match(/I/g) || []).length,
    countJ: (state) =>
      (state.message.match(/j/g) || []).length + (state.message.match(/J/g) || []).length,
    countK: (state) =>
      (state.message.match(/k/g) || []).length + (state.message.match(/K/g) || []).length,
    countL: (state) =>
      (state.message.match(/l/g) || []).length + (state.message.match(/L/g) || []).length,
    countM: (state) =>
      (state.message.match(/m/g) || []).length + (state.message.match(/M/g) || []).length,
    countN: (state) =>
      (state.message.match(/n/g) || []).length + (state.message.match(/N/g) || []).length,
    countO: (state) =>
      (state.message.match(/o/g) || []).length + (state.message.match(/O/g) || []).length,
    countP: (state) =>
      (state.message.match(/p/g) || []).length + (state.message.match(/P/g) || []).length,
    countR: (state) =>
      (state.message.match(/r/g) || []).length + (state.message.match(/R/g) || []).length,
    countS: (state) =>
      (state.message.match(/s/g) || []).length + (state.message.match(/S/g) || []).length,
    countT: (state) =>
      (state.message.match(/t/g) || []).length + (state.message.match(/T/g) || []).length,
    countU: (state) =>
      (state.message.match(/u/g) || []).length + (state.message.match(/U/g) || []).length,
    countW: (state) =>
      (state.message.match(/w/g) || []).length + (state.message.match(/W/g) || []).length,
    countX: (state) =>
      (state.message.match(/x/g) || []).length + (state.message.match(/X/g) || []).length,
    countY: (state) =>
      (state.message.match(/y/g) || []).length + (state.message.match(/Y/g) || []).length,
    countZ: (state) =>
      (state.message.match(/z/g) || []).length + (state.message.match(/Z/g) || []).length,
  },
})
