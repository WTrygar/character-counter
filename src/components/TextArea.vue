<script setup>
import { useCounterStore } from '@/stores/ProductStore'

const store = useCounterStore()
</script>

<template>
  <textarea
    v-model="store.message"
    placeholder="Start typing here... (or paste your text)"
    class="bg-gray-200 dark:bg-gray-800 text-black dark:text-white min-h-50 resize-y rounded-md focus:border-2 focus:border-solid focus:ring-fuchsia-300 focus:border-fuchsia-300"
  ></textarea>
  <div class="flex flex-col sm:flex-row my-2 justify-between text-white">
    <div class="flex flex-col sm:flex-row sm:gap-2">
      <div>
        <input type="checkbox" id="one" value="One" v-model="store.check" />
        <label class="ms-2 text-black dark:text-white" for="one">Exclude Spaces</label>
      </div>

      <div>
        <input type="checkbox" id="two" value="Two" />
        <label class="ms-2 text-black dark:text-white" for="two">Set Character Limit</label>
        <input
          type="number"
          name="limit"
          id="limit"
          v-model="store.limit"
          class="ms-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white w-15"
        />
      </div>
    </div>
    <p v-if="store.approxReadTime > 1" class="ms-2 text-black dark:text-white">
      Approx. reading time: ~{{ store.approxReadTime }} minutes
    </p>
    <p v-else class="ms-2 text-black dark:text-white">
      Approx. reading time: ~{{ store.approxReadTime }} minute
    </p>
  </div>
</template>
