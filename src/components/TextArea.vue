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
    class="bg-gray-800 text-white h-40 resize-y rounded-md"
  ></textarea>
  <div class="flex flex-col justify-between text-white">
    <div class="flex flex-col">
      <div>
        <input type="checkbox" id="one" value="One" />
        <label class="ms-2" for="one">Exclude Spaces</label>
      </div>

      <div>
        <input type="checkbox" id="two" value="Two" />
        <label class="ms-2" for="two">Set Character Limit</label>
      </div>
    </div>
    <p>Approx. reading time: [value here]</p>
  </div>
</template>
