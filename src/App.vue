<template>
  <div
    class="flex flex-col content-center sm:p-[5%] bg-[url(/src/assets/images/bg-dark-theme.png)] h-100"
  >
    <h2 class="text-white text-center text-3xl font-bold">Analyze your text in real-time.</h2>
    <TextArea :message="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import TextArea from './components/TextArea.vue'

const message = ref('')
console.log(message)
const charCount = computed(() => {
  return message.split('').length
})
</script>
