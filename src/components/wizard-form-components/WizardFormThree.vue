<template>
  <div class="container flex flex-col gap-10">
    <div>
      <p class="mb-3 block text-base font-medium text-black text-center">Drives a car</p>
      <div class="flex gap-4 justify-center">
        <div v-for="(item, i) in store.carDriverField.options" :key="i" class="flex items-center">
          <input
            :id="'radio-' + item"
            type="radio"
            name="experiance"
            :value="item"
            v-model="store.carDriverField.selected"
            class="w-4 h-4"
            @change="store.onChangeCarDriver($event.target.value)"
          />
          <label :for="'radio-' + item" class="ml-2 text-sm font-medium text-gray-900">
            {{ item }}
          </label>
        </div>
      </div>
    </div>

    <TextInputField
      v-show="store.carDriverField.selected === 'Yes'"
      :label="'Driving experience(years)'"
      :placeholder="'0'"
      :icon="false"
      :errors="store.errors.drivingExperiance"
      v-model="store.drivingExperiance"
      @input="store.errorHandler('drivingExperiance', $event.target.value)"
    />
  </div>
</template>

<script setup>
import TextInputField from '../TextInputField.vue'
import { useWizardStore } from '../../stores/wizard-form'

const store = useWizardStore()
</script>
