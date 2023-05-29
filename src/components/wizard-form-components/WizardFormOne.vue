<template>
  <div class="container flex flex-col gap-10">
    <TextInputField
      :label="'First name'"
      :placeholder="'John'"
      :icon="true"
      :errors="store.errors.firstName"
      v-model="store.firstName"
      @input="store.errorHandler('firstName', $event.target.value)"
    />
    <TextInputField
      :label="'Last name'"
      :placeholder="'Milosz'"
      :icon="true"
      :errors="store.errors.lastName"
      v-model="store.lastName"
      @input="store.errorHandler('lastName', $event.target.value)"
    />
    <CountrySelectField
      :prop-label="'Select country'"
      :prop-countries="store.countryField.countries"
      :prop-is-loading="store.countryField.isLoading"
      :prop-selected-value="store.countryField.selectedCountry"
      :errors="store.errors.countryField"
      @asyncFind="store.fetchCountriesData($event)"
      @onSelect="store.onChangeCountry($event)"
      @onRemove="store.onChangeCountry($event)"
    />
  </div>
</template>

<script setup>
import TextInputField from '../TextInputField.vue'
import CountrySelectField from '../CountrySelectField.vue'
import { useWizardStore } from '../../stores/wizard-form'

const store = useWizardStore()
</script>
