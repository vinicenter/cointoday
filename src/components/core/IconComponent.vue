<script lang="ts">
export default {
  props: {
    isHover: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      require: false,
      default: 25,
    },
  },
};
</script>

<template>
  <span>
    <i
      :class="isHover ? 'icon ' + icon : icon"
      :style="'font-size: ' + size + 'px'"
    />
  </span>
</template>

<style lang="scss" scoped>
.icon {
  color: var(--textColor);
}
.icon:hover {
  color: var(--textColorHover);
  -webkit-transition: color 0.15s ease, color 0.15s ease;
  transition: color 0.15s ease, color 0.15s ease;
}
</style>
