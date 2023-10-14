<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <header>
      <nav>
        <RouterLink style="margin-right: 10px;" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>
