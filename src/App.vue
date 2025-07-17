<script setup>
import { computed, ref } from 'vue'
import CounterBox from './components/CounterBox.vue'
import TextArea from './components/TextArea.vue'

const message = ref('')
console.log(message)
const charCount = computed(() => {
  return message.split('').length
})
</script>

<template>
  <div
    class="flex flex-col content-center p-[1.5%] bg-[url(/src/assets/images/bg-dark-theme.png)] h-screen"
  >
    <!-- <Navbar /> -->
    <h2 class="text-white text-center text-3xl font-bold">Analyze your text in real-time.</h2>

    <TextArea :message="message" />
    <div class="flex flex-col gap-2">
      <CounterBox class="bg-fuchsia-300" />
      <CounterBox class="bg-orange-400" />
      <CounterBox class="bg-red-300" />
    </div>
    <p>{{ message }}</p>
  </div>
</template>
