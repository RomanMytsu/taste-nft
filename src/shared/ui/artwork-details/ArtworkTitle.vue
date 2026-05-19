<script setup>
defineProps({ title: String })
</script>

<template>
  <h1 class="title">{{ title }}</h1>
</template>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 12px;
}
</style>
