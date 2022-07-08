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
      v-for="(entity, index) in list"
      :key="index"
      :value="entity.value"
    >
      {{ entity.name }}
    </option>
  </datalist>
</template>
