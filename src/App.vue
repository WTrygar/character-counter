<script setup>
import { computed, ref } from 'vue'
import CounterBox from './components/CounterBox.vue'
import LetterDensity from './components/LetterDensity.vue'
import Navbar from './components/Navbar.vue'
import TextArea from './components/TextArea.vue'

const message = ref('')
console.log(message)
const charCount = computed(() => {
  return message.split('').length
})
</script>

<template>
  <div
    class="flex flex-col content-center px-[1.5%] sm:px-[3%] md:px-[10%] bg-[url(/src/assets/images/bg-dark-theme.png)] h-screen text-white"
  >
    <Navbar />
    <h2
      class="text-center leading-16 sm:mx-5 md:mx-30 text-3xl sm:text-5xl md:text-6xl font-bold m-5"
    >
      Analyze your text in real-time.
    </h2>

    <TextArea :message="message" />
    <div
      class="flex flex-col sm:flex-row sm:justify-stretch sm:w-full h-60 sm:h-30 gap-2 text-black my-5"
    >
      <CounterBox class="bg-fuchsia-300 sm:w-1/3" />
      <CounterBox class="bg-orange-400 sm:w-1/3" />
      <CounterBox class="bg-red-300 sm:w-1/3" />
    </div>
    <LetterDensity />
    <p>{{ message }}</p>
  </div>
</template>
