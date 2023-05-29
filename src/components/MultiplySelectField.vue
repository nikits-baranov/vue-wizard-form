<script setup>
import { ref } from 'vue'

const props = defineProps({
  propLabel: String,
  propOptions: Array,
  propSelected: Array,
  propPlaceholder: String,
  errors: Array
})

const selected = ref(props.propSelected)
</script>

<template>
  <div class="multiply-selection" :class="{ invalid: !!errors }">
    <label class="mb-3 block text-base font-medium text-black" :for="propLabel">{{
      propLabel
    }}</label>
    <multi-select
      :id="propLabel"
      open-direction="bottom"
      v-model="selected"
      :multiple="true"
      :options="propOptions"
      :placeholder="propPlaceholder"
      :hide-selected="true"
      :searchable="false"
      @select="$emit('onSelect', selected)"
      @remove="$emit('onRemove', selected)"
    ></multi-select>
    <p class="mt-[10px] text-sm text-danger">{{ errors ? errors[0] : '' }}</p>
  </div>
</template>

<style scope>
.multiply-selection .multiselect__tags {
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

.multiply-selection .multiselect__tags-wrap {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  padding: 5px 0 0 0;
  gap: 12px;
}

.multiply-selection .multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 6px 26px 6px 10px;
  border-radius: 3px;
  color: #637381;
  margin: 0;
  line-height: 1;
  background: #eeeeee;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
}

.multiply-selection.invalid .multiselect__tags {
  border: 1px solid #dc3545;
}

.multiply-selection .multiselect__tag-icon {
  cursor: pointer;
  margin-left: 4px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-weight: 700;
  font-style: initial;
  width: 22px;
  text-align: center;
  line-height: 22px;
  transition: all 0.2s ease;
  border-radius: 5px;
}

.multiply-selection .multiselect__tag-icon:hover::after {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z' fill='%23000000'%3E%3C/path%3E%3C/svg%3E");
}

.multiply-selection .multiselect__tag-icon::after {
  content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z' fill='%23637381'%3E%3C/path%3E%3C/svg%3E");
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  padding: 2px 0 0 2px;
}

.multiply-selection .multiselect__placeholder,
.multiply-selection .multiselect__input,
.multiply-selection .multiselect__single {
  display: flex;
  font-size: 16px;
  padding: 0;
  margin: 0 0 0 5px;
}

.multiply-selection .multiselect__select {
  height: 100%;
  display: flex;
  align-items: center;
}

.multiply-selection .multiselect__select::before {
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

.multiply-selection .multiselect__option--highlight {
  background: #3056d3;
  outline: none;
  color: white;
}

.multiply-selection .multiselect__option--highlight::after {
  background: #3056d3;
  color: white;
}
</style>
