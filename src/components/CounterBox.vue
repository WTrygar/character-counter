<template>
  <div class="rounded-lg">
    <div class="font-bold text-4xl sm:text-5xl p-4">
      <slot name="counter"><p class=""></p></slot>
    </div>
    <div class="px-2 text-md sm:text-sm md:text-md">
      <slot name="description"><p class="">Counter</p></slot>
    </div>
  </div>
</template>

<script setup></script>
