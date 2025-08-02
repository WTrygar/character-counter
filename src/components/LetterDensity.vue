<template>
  <div
    id="letterbox"
    name="letterbox"
    :class="{ 'max-h-l.2vh': store.isActive, 'max-h-60': !store.isActive }"
    class="overflow-hidden flex flex-col"
  >
    <h3 class="font-semibold text-xl">Letter Density</h3>

    <div
      :class="{ hidden: !(store.countA > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>A</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countA / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countA }} ({{
            Math.round((store.countA / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countB > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>B</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countB / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countB }} ({{
            Math.round((store.countB / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countC > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>C</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countC / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countC }} ({{
            Math.round((store.countC / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countD > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>D</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countD / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countD }} ({{
            Math.round((store.countD / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countE > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>E</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countE / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countE }} ({{
            Math.round((store.countE / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countF > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>F</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countF / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countF }} ({{
            Math.round((store.countF / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countG > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>G</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countG / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countG }} ({{
            Math.round((store.countG / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countH > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>H</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countH / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countH }} ({{
            Math.round((store.countH / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countI > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>I</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countI / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countI }} ({{
            Math.round((store.countI / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countJ > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>J</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countJ / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countJ }} ({{
            Math.round((store.countJ / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countK > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>K</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countK / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countK }} ({{
            Math.round((store.countK / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countL > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>L</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countL / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countL }} ({{
            Math.round((store.countL / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countM > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>M</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countM / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countM }} ({{
            Math.round((store.countM / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countN > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>N</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countN / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countN }} ({{
            Math.round((store.countN / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countO > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>O</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countO / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countO }} ({{
            Math.round((store.countO / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countP > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>P</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countP / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countP }} ({{
            Math.round((store.countP / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countQ > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>Q</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countQ / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countQ }} ({{
            Math.round((store.countQ / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countR > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>R</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countR / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countR }} ({{
            Math.round((store.countR / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countS > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>S</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countS / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countS }} ({{
            Math.round((store.countS / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countT > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>T</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countT / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countT }} ({{
            Math.round((store.countT / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countU > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>U</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countU / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countU }} ({{
            Math.round((store.countU / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countV > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>V</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countV / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countV }} ({{
            Math.round((store.countV / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countW > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>W</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countW / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countW }} ({{
            Math.round((store.countW / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countX > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>X</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countX / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countX }} ({{
            Math.round((store.countX / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countY > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>Y</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countY / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countY }} ({{
            Math.round((store.countY / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
    <div
      :class="{ hidden: !(store.countZ > 0) }"
      class="flex flex-row grow justify-between items-center mt-4"
    >
      <div class="w-1/20">
        <h4>Z</h4>
      </div>
      <div class="w-7/10 sm:w-8/10 h-4 bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          class="h-4 rounded-full bg-fuchsia-300"
          :style="{ width: (store.countZ / store.message.length) * 100 + '%' }"
        ></div>
      </div>
      <div class="w-4/20 sm:w-3/20 text-right">
        <p>
          {{ store.countZ }} ({{
            Math.round((store.countZ / store.message.length) * 10000) / 100
          }}%)
        </p>
      </div>
    </div>
  </div>
  <button
    @click="store.isActive = !store.isActive"
    class="flex flex-row items-center pt-2.5 w-30 hover:cursor-pointer"
  >
    <span>See more</span>
    <svg
      data-accordion-icon
      class="w-3 h-3 shrink-0 ml-2"
      :class="{ 'rotate-180': !store.isActive }"
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
