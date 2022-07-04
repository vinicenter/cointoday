<script setup lang="ts">
import content from '@/content.json';
import logo from '@/assets/logo.png';
import IconComponent from '../core/IconComponent.vue';
</script>

<script lang="ts">
export default {
  components: { IconComponent },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand navbar-nav flex-row">
        <img
          :src="logo"
          alt="app logo"
          width="50"
          height="50"
          class="d-inline-block align-text-top"
        >
        <li class="nav-item">
          <a class="nav-link">
            {{content.app_name}}
          </a>
        </li>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
            >
              <IconComponent
                icon="ph-github-logo"
                size="32"
              />
              repository link
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 0px !important;
}

.navbar-collapse {
  text-align: center;
}

.navbar-dark .navbar-toggler {
  color: var(--navbarLinkColor) !important;
  border: none !important;
  box-shadow: none;
}
.bg-dark {
  background-color: var(--navbarBackgroundColor) !important;
}
.nav-title {
  color: var(--navbarTextTitleColor) !important;
  text-decoration: none !important;
}
.navbar-dark .navbar-nav .nav-link {
  color: var(--navbarLinkColor) !important;
}
.navbar-dark:hover .navbar-nav:hover .nav-link:hover {
  color: var(--navbarLinkColorHover) !important;
}
</style>
