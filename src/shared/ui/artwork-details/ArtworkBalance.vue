<script setup>
import BaseSvg from "../icon/BaseSvg.vue"
defineProps({ balance: String })
</script>

<template>
  <div class="artwork-balance">
    <div class="artwork-balance__icon-wrapper">
      <BaseSvg id="icon-sold-icon" width="19" height="19" class="artwork-balance__icon" />
    </div>
    <span class="artwork-balance__balance">{{ balance }}</span>
  </div>
</template>

<style scoped lang="scss">
.artwork-balance {
  display: flex;
  gap: 6px;

  &__balance {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
