<script setup lang="ts">
</script>

<script lang="ts">
export default {
  emits: ['update:modelValue'],
  props: {
    name: String,
    placeholder: String,
    label: String,
    footer: String,
    list: String,
    col: {
      type: String,
      default: 'col-12',
    },
    type: {
      type: String,
      default: 'text',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isReadonlyData: this.isReadonly,
      isDisabledData: this.isDisabled,
    };
  },
  methods: {
    update(e : any) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<template>
  <div>
    <label :for="name" :class="col" class="form-label">
      {{ label }}
      <input
        class="form-control text-center"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :readonly="isReadonlyData"
        :disabled="isDisabledData"
        :value="$attrs.modelValue"
        :type="type"
        :list="list"
        @change="update($event)"
      >
      <div class="form-text">
        {{ footer }}
      </div>
    </label>
  </div>
</template>

<style lang="scss">
input {
  padding: 15px!important;
  border: 1px solid var(--textColor) !important;
  color: var(--textColor) !important;
  background-color: var(--backgroundColor) !important;
}
input::placeholder {
  color: var(--textColorHover) !important;
}
label {
  color: var(--textColorHover) !important;
}
</style>
