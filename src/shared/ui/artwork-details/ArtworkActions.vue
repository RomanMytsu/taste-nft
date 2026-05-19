<script setup>
import BaseSvg from "../icon/BaseSvg.vue"
</script>

<template>
  <div class="artwork-actions">
    <button class="artwork-actions__button">
      <BaseSvg id="icon-icon-external-link" width="20" height="20" class="artwork-actions__icon" />
    </button>
    <button class="artwork-actions__button">
      <BaseSvg id="icon-icon-share" width="20" height="20" class="artwork-actions__icon" />
    </button>
    <button class="artwork-actions__button">
      <BaseSvg id="icon-icons-menu" width="20" height="20" class="artwork-actions__icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.artwork-actions {
  display: flex;
  gap: 8px;

  &__button {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    background: transparent;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: background 0.4s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
}
</style>
