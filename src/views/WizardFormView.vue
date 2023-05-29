<template>
  <div class="container mx-auto grow">
    <StepperComponent
      :propSteps="store.steps"
      :propCurrentStep="store.step"
      class="max-w-[360px] mx-auto mt-6"
      v-if="store.step < 4"
    />

    <div class="max-w-[491px] mx-auto mt-12">
      <WizardFormOne v-if="store.step == 1" />
      <WizardFormTwo v-else-if="store.step == 2" />
      <WizardFormThree v-else-if="store.step == 3" />
      <section v-else>
        <div class="bg-light w-full min-h-[100px] mt-6 rounded-md shadow-sm p-5">
          <h3 class="text-lg text-black font-medium">Prepared JSON based on answers:</h3>
          <pre class="p-2.5"><code class="json">{{ store.renderJsonData }}</code></pre>
        </div>
        <div class="flex justify-center">
          <RouterLink
            class="text-primary mt-6 border-primary hover:bg-primary hover:border-primary inline-flex flex-none items-center justify-center rounded-md border py-3 px-10 text-center text-base transition hover:text-white lg:px-8 xl:px-10"
            to="/"
          >
            Home page
          </RouterLink>
        </div>
      </section>
    </div>

    <div class="flex gap-4 justify-center mt-6" v-if="store.step < 4">
      <ButtonComponent @clickHandler="store.backStep()" v-if="store.step > 1" :text="'Back'" />
      <ButtonComponent
        @clickHandler="store.nextStep()"
        :text="'Next'"
        :style="'fill'"
        :disabled="isNextDisabled"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount } from 'vue'
import StepperComponent from '../components/StepperComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import WizardFormOne from '../components/wizard-form-components/WizardFormOne.vue'
import WizardFormTwo from '../components/wizard-form-components/WizardFormTwo.vue'
import WizardFormThree from '../components/wizard-form-components/WizardFormThree.vue'

import { useWizardStore } from '../stores/wizard-form'

const store = useWizardStore()

onBeforeUnmount(() => {
  store.$reset()
})

const isNextDisabled = computed(() => {
  if (store.step === 1) {
    const countriesLoaded = store.countryField.countries.length > 0
    const requiredFields =
      store.firstName.length > 0 &&
      store.lastName.length > 0 &&
      !!store.countryField.selectedCountry

    const checkErrors =
      !!store.errors?.countryField || !!store.errors?.firstName || !!store.errors?.lastName

    return !requiredFields || !countriesLoaded || checkErrors
  } else if (store.step === 2) {
    const requiredFields =
      store.childrenField.selected && !!store.hobbiesField.selected.length ? false : true

    return requiredFields
  } else if (store.step === 3) {
    if (store.carDriverField.selected === 'Yes') {
      return !(!!store.drivingExperiance && !store.errors?.drivingExperiance)
    } else {
      return !store.carDriverField.selected
    }
  } else if (store.step === 4) {
    return false
  } else {
    return true
  }
})
</script>
