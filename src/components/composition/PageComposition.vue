<script setup lang="ts">
import TitleComponent from '@/components/core/TitleComponent.vue';
import TextComponent from '@/components/core/TextComponent.vue';
</script>

<script lang="ts">
export default {
  props: {
    title: String,
    description: String,
    isDescriptionVisible: {
      type: Boolean,
      default: true,
    },
    isTitleVisible: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    TitleComponent,
    TextComponent,
  },
};
</script>

<template>
  <div class="container" style="margin-top: 0px">
    <div v-if="isTitleVisible">
      <TitleComponent type="h2">{{ title }}</TitleComponent>
    </div>
    <div v-if="isDescriptionVisible">
      <TextComponent>{{ description }}</TextComponent>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
}
</style>
