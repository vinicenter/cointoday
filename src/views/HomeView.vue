<script setup lang="ts">
import PageComposition from '@/components/composition/PageComposition.vue';
import ConvertComposition from '@/components/composition/ConvertComposition.vue';
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
    <div
      class="col d-flex justify-content-center flex-column align-items-center"
    >
      <ConvertComposition />
    </div>
  </PageComposition>
</template>
