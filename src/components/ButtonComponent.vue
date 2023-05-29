<template>
  <button
    @click="$emit('clickHandler')"
    class="text-primary inline-flex items-center justify-center rounded-full border border-primary py-2.5 px-10 text-center transition hover:text-white lg:px-8 xl:px-10"
    :class="{
      'bg-primary text-white': style === 'fill',
      'bg-transparent hover:bg-primary hover:border-primary text-primary': style != 'fill',
      'opacity-50 transition-none': disabled
    }"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String,
  style: String,
  disabled: Boolean
})
</script>
