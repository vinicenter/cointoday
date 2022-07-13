<script setup lang="ts">
import NavbarComposition from '@/components/composition/NavbarComposition.vue';
import IconComponent from '@/components/core/IconComponent.vue';
import content from '@/content.json';
import { toggleThemeCache } from '@/lib/localStorage';
</script>

<script lang="ts">
export default {
  components: {
    NavbarComposition,
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
          <a
            :href="content.app_repo"
            class="text-decoration-none"
            target="_blank"
            tabindex="0"
          >
            <IconComponent
              class="icon"
              icon="ph-github-logo"
              :size="32"
            />
          </a>
          <a
            @click="toggleThemeCache()"
            @keydown.enter="toggleThemeCache()"
            class="text-decoration-none"
            tabindex="0"
          >
            <IconComponent
              class="icon"
              icon="ph-lightbulb"
              :size="32"
            />
          </a>
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
