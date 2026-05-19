<script setup>
defineProps({
  avatar: String,
  name: String,
  username: String,
})
</script>

<template>
  <div class="user-info">
    <div class="user-info__avatar-wrap">
      <img :src="avatar" alt="avatar" class="user-info__avatar-img" width="47" height="47" />
    </div>
    <div class="user-info__info-wrapper">
      <p class="user-info__name">{{ name }}</p>
      <p class="user-info__username">{{ username }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;

  &__info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    white-space: nowrap;
  }

  &__name {
    font-weight: 700;
    font-size: 18px;
  }

  &__username {
    font-weight: 500;
    font-size: 14px;
    background: $gradient-primary-text;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
