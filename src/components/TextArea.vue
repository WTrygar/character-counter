<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  message: {
    type: String,
  },
})
</script>

<template>
  <p>{{}}</p>
  <textarea
    ref="message"
    placeholder="Start typing here... (or paste your text)"
    class="bg-gray-800 text-white resize-y rounded-md"
  ></textarea>
  <div class="flex flex-row justify-between text-white">
    <div>
      <input type="checkbox" id="one" value="One" />
      <label for="one">One</label>

      <input type="checkbox" id="two" value="Two" />
      <label for="two">Two</label>
    </div>
    <p>Approx. reading time [value here]</p>
  </div>
</template>
