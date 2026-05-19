<script setup>
import SvgManager from "@/shared/ui/icon/SvgManager.vue"
import AppLayout from "./layouts/AppLayout.vue"
</script>

<template>
  <AppLayout>
    <router-view />
  </AppLayout>
  <SvgManager />
</template>

<style scoped lang="scss"></style>
