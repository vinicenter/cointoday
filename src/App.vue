<script setup lang="ts">
import NavbarComposition from '@/components/composition/NavbarComposition.vue';
</script>

<script lang="ts">
export default {
  components: {
    NavbarComposition,
  },
};
</script>

<template>
  <NavbarComposition />
  <RouterView />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss">
@import '@/assets/tokens.scss';
@import 'bootstrap';
@import '@/assets/global.scss';
</style>
