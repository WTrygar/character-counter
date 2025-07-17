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
    class="flex flex-col content-center p-[1.5%] bg-[url(/src/assets/images/bg-dark-theme.png)] h-screen text-white"
  >
    <Navbar />
    <h2 class="text-center text-3xl font-bold m-5">Analyze your text in real-time.</h2>

    <TextArea :message="message" />
    <div class="flex flex-col gap-2 text-black my-5">
      <CounterBox class="bg-fuchsia-300" />
      <CounterBox class="bg-orange-400" />
      <CounterBox class="bg-red-300" />
    </div>
    <LetterDensity />
    <p>{{ message }}</p>
  </div>
</template>
