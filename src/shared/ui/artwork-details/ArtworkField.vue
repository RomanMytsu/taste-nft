<script setup>
defineProps({ label: String, value: [String, Number] })
</script>

<template>
  <div class="field">
    <span class="field__label">{{ label }}</span>
    <span class="field__value">
      <slot>{{ value }}</slot>
    </span>
  </div>
</template>

<style scoped lang="scss">
.field {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;

  &__label {
    color: rgba(255, 255, 255, 0.5);
    margin-right: 4px;
    white-space: nowrap;
  }
}
</style>
