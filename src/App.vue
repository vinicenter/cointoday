<script setup lang="ts">
import NavbarComposition from '@/components/composition/NavbarComposition.vue';
import IconLinkComponent from '@/components/core/icon/IconLinkComponent.vue';
import content from '@/content.json';
import { toggleThemeCache } from '@/lib/localStorage';
</script>

<script lang="ts">
export default {
  components: {
    NavbarComposition,
    IconLinkComponent,
  },
};
</script>

<template>
  <NavbarComposition>
    <template v-slot:link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
      </ul>
      <ul class="navbar-nav d-flex">
        <li class="nav-item">
          <IconLinkComponent
            :href="content.app_repo"
            :size="32"
            icon="ph-github-logo"
          />

          <IconLinkComponent
            @click="toggleThemeCache()"
            :size="32"
            icon="ph-lightbulb"
          />
        </li>
      </ul>
    </template>
  </NavbarComposition>
  <RouterView />
  <notifications
    closeOnClick
    position="bottom left"
    ignoreDuplicates
  />
</template>

<style scoped>
.nav-icon {
  content: 'a';
}

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
