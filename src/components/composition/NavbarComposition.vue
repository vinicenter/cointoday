<script setup lang="ts">
import content from '@/content.json';
import logo from '@/assets/logo.png';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand navbar-nav flex-row">
        <img
          :src="logo"
          alt="app logo"
          width="50"
          class="d-inline-block align-text-top"
        >
        <li class="nav-item">
          <a class="nav-link app-name">
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
        <slot name="link"/>
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
