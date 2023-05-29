<template>
  <ol
    class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 text-base"
  >
    <li
      v-for="(item, i) in propSteps"
      :key="i + 1"
      :class="{
        transition: true,
        'flex md:w-full items-center after:w-full after:h-0.5 after:border-b after:border-primary after:bg-primary after:hidden sm:after:inline-block':
          item <= propCurrentStep && item != propSteps,
        'flex md:w-full items-center after:w-full after:h-0.5 after:border-b after:border-gray after:bg-gray after:hidden sm:after:inline-block':
          item != propSteps,
        'flex items-center': item === propSteps
      }"
    >
      <span
        :class="{
          'transition flex flex-none w-[50px] h-[50px] text-xl rounded-full items-center justify-center    border-2': true,
          'border-primary bg-primary text-white': item <= propCurrentStep,
          'border-primary bg-light text-primary': item === propCurrentStep + 1,
          'border-gray bg-light text-black': item >= propCurrentStep + 2
        }"
      >
        {{ item }}
      </span>
    </li>
  </ol>
</template>

<script setup>
defineProps({
  propSteps: Number,
  propCurrentStep: Number
})
</script>
