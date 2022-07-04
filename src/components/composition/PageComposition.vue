<script setup lang="ts">
import TitleComponent from '@/components/core/TitleComponent.vue';
import TextComponent from '@/components/core/TextComponent.vue';
</script>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
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
  <div class="container">
    <div v-if="isTitleVisible">
      <TitleComponent type="h2">{{ title }}</TitleComponent>
    </div>
    <div v-if="isDescriptionVisible">
      <TextComponent>{{ description }}</TextComponent>
    </div>
    <slot />
  </div>
</template>
