<script lang="ts" setup>
import IconComponent from '@/components/core/icon/IconComponent.vue';
</script>

<script lang="ts">
export default {
  props: {
    href: String,
    icon: String,
    size: Number,
  },
  components: {
    IconComponent,
  },
};
</script>

<template>
  <a
    :href="href"
    class="text-decoration-none"
    target="_blank"
    tabindex="0"
  >
    <IconComponent
      :icon="icon"
      :size="size"
    />
  </a>
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
