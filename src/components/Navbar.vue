<template>
  <div class="flex flex-row justify-between py-2.5">
    <div
      class="h-10 w-70 bg-no-repeat bg-[url(/src/assets/images/logo-light-theme.svg)] dark:bg-[url(/src/assets/images/logo-dark-theme.svg)]"
    ></div>
    <a
      @click="toggleDark()"
      class="bg-gray-200 dark:bg-gray-800 w-9 h-9 flex p-1.5 rounded-lg content-center"
    >
      <div
        class="h-7.5 w-7.5 bg-[url(/src/assets/images/icon-moon.svg)] dark:bg-[url(/src/assets/images/icon-sun.svg)] bg-no-repeat"
      ></div>
    </a>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
