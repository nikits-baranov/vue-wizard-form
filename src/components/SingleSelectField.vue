<template>
  <div class="single-selection" :class="{ invalid: !!errors }">
    <label class="mb-3 block text-base font-medium text-black" :for="propLabel"
      >{{ propLabel }}
    </label>
    <multi-select
      :id="propLabel"
      v-model="selected"
      :placeholder="propPlaceholder"
      :options="propOptions"
      :hide-selected="true"
      :searchable="false"
      @select="$emit('onSelect', selected)"
      @remove="$emit('onRemove', selected)"
    ></multi-select>
    <p class="mt-2.5 text-sm text-danger">{{ errors ? errors[0] : '' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  propLabel: String,
  propOptions: Array,
  propSelected: String,
  propPlaceholder: String,
  errors: Array
})

const selected = ref(props.propSelected)
</script>

<style scope>
.single-selection .multiselect__tags {
  min-height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding-top: 0px;
  padding-left: 16px;
  border: 1px solid #e0e0e0;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
}

.single-selection.invalid .multiselect__tags {
  border: 1px solid #dc3545;
}

.single-selection .multiselect__placeholder,
.single-selection .multiselect__input,
.single-selection .multiselect__single {
  display: flex;
  font-size: 16px;
  padding: 0;
  margin: 0 0 0 5px;
}

.single-selection .multiselect__select {
  height: 100%;
  display: flex;
  align-items: center;
}

.single-selection .multiselect__select::before {
  content: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.8'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z' fill='%23637381'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  position: relative;
  right: 0;
  top: 0;
  color: transparent;
  margin-top: 0;
  padding: 2px 0 0 0;
  border-style: solid;
  border-width: 0;
  border-color: transparent;
  z-index: 60;
}

.single-selection .multiselect__option--highlight {
  background: #3056d3;
  outline: none;
  color: white;
}

.single-selection .multiselect__option--highlight::after {
  background: #3056d3;
  color: white;
}
</style>
