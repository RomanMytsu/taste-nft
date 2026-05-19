<script setup>
import AppHeader from "@/widgets/header/ui/AppHeader.vue"
</script>

<template>
  <div class="app-layout">
    <AppHeader />

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}
</style>
