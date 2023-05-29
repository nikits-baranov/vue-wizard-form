<template>
  <div class="container flex flex-col gap-10">
    <SingleSelectField
      :propLabel="'Children'"
      :propOptions="store.childrenField.options"
      :propSelected="store.childrenField.selected"
      :propPlaceholder="'Choose answer'"
      :errors="store.errors.childrenField"
      @onSelect="store.onChangeChildren($event)"
      @onRemove="store.onChangeChildren($event)"
    />
    <MultiplySelectField
      :propLabel="'Hobbies'"
      :propOptions="store.hobbiesField.options"
      :propSelected="store.hobbiesField.selected"
      :propPlaceholder="'Choose answer'"
      :errors="store.errors.hobbiesField"
      @onSelect="store.onChangeHobbies($event)"
      @onRemove="store.onChangeHobbies($event)"
    />
  </div>
</template>

<script setup>
import MultiplySelectField from '../MultiplySelectField.vue'
import SingleSelectField from '../SingleSelectField.vue'
import { useWizardStore } from '../../stores/wizard-form'

const store = useWizardStore()
</script>
