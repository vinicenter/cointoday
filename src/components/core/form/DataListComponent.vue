<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
    },
  },
};
</script>

<template>
  <datalist :id="id">
    <option
      v-for="(name, value) in list"
      :key="name"
      :value="value"
    >
      {{ name }}
    </option>
  </datalist>
</template>
