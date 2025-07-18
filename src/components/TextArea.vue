<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  message: {
    type: String,
  },
})
</script>

<template>
  <textarea
    ref="message"
    placeholder="Start typing here... (or paste your text)"
    class="bg-gray-200 dark:bg-gray-800 text-black dark:text-white min-h-50 resize-y rounded-md"
  ></textarea>
  <div class="flex flex-col sm:flex-row my-2 justify-between text-white">
    <div class="flex flex-col sm:flex-row sm:gap-2">
      <div>
        <input type="checkbox" id="one" value="One" />
        <label class="ms-2 text-black dark:text-white" for="one">Exclude Spaces</label>
      </div>

      <div>
        <input type="checkbox" id="two" value="Two" />
        <label class="ms-2 text-black dark:text-white" for="two">Set Character Limit</label>
      </div>
    </div>
    <p class="ms-2 text-black dark:text-white">Approx. reading time: [value here]</p>
  </div>
</template>
