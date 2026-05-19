<script setup></script>

<template>
  <div class="artwork-details">
    <div class="artwork-details__top">
      <slot name="top" />
    </div>

    <div class="artwork-details__body">
      <slot />
    </div>

    <div class="artwork-details__bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.artwork-details {
  display: flex;
  flex-direction: column;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__body {
    margin-bottom: 16px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    container-type: inline-size;
  }
}
</style>
