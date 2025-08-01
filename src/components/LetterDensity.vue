<template>
  <div>
    <h3 class="font-semibold text-xl">Letter Density</h3>
    <div class="flex flex-row justify-between items-center mt-4">
      <div class="w-1/20">
        <h4>A</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div class="h-4 rounded-full bg-fuchsia-300" style="width: 16.06%"></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>{{ store.countA }}</p>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mt-4">
      <div class="w-1/20">
        <h4>I</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div class="h-4 rounded-full bg-fuchsia-300" style="width: 11.65%"></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>29 (11.65%)</p>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mt-4">
      <div class="w-1/20">
        <h4>T</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div class="h-4 rounded-full bg-fuchsia-300" style="width: 11.24%"></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>28 (11.24)</p>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mt-4">
      <div class="w-1/20">
        <h4>O</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div class="h-4 rounded-full bg-fuchsia-300" style="width: 8.84%"></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>22 (8.84%)</p>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mt-4">
      <div class="w-1/20">
        <h4>N</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div class="h-4 rounded-full bg-fuchsia-300" style="width: 8.43%"></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>21 (8.43%)</p>
      </div>
    </div>
  </div>
  <button class="flex flex-row items-center pt-5">
    <span>See more</span>
    <svg
      data-accordion-icon
      class="w-3 h-3 rotate-180 shrink-0 ml-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5 5 1 1 5"
      />
    </svg>
  </button>
</template>

<script setup>
import { useCounterStore } from '@/stores/ProductStore'

const store = useCounterStore()
</script>
