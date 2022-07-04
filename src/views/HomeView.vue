<script setup lang="ts">
import PageComposition from '@/components/composition/PageComposition.vue';
</script>

<script lang="ts">
export default {
  components: {
    PageComposition,
  },
};
</script>

<template>
  <PageComposition
    title="Home"
    description="This is the home page."
    :isDescriptionVisible="false"
    :isTitleVisible="false"
  >
    Home
  </PageComposition>
</template>
