<script setup>
import UserProfile from "@/entities/user/ui/UserProfile.vue"
import SearchBar from "@/features/search/ui/SearchBar.vue"
import ConnectWalletModal from "@/features/wallet-connect/ConnectWalletModal.vue"
import { useWalletStore } from "@/features/wallet-connect/useWallet"
import logo from "@/shared/assets/icons/logo.svg"
import BaseButton from "@/shared/ui/button/BaseButton.vue"
import { ref } from "vue"

const isWalletModalOpen = ref(false)
const walletStore = useWalletStore()
const openWalletModal = () => {
  isWalletModalOpen.value = true
}
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <RouterLink to="/" class="header__logo">
        <div class="header__logo-wrapper">
          <img :src="logo" alt="logo" class="header__logo-img" width="47" height="47" />
        </div>
      </RouterLink>
      <SearchBar />
      <div class="header__profile-wrapper">
        <div v-if="walletStore.isConnected" class="header__profile-active">
          <BaseButton class="header__profile-btn">
            <p class="header__profile-btn-text-desc">+ Add artwork</p>
            <p class="header__profile-btn-text-mob">+</p></BaseButton
          >
          <UserProfile />
        </div>
        <BaseButton v-else @click="openWalletModal" class="header__btn-wallet"
          >Connect wallet</BaseButton
        >
      </div>
    </div>
  </header>
  <ConnectWalletModal v-model="isWalletModalOpen" />
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0 0 32px 32px;
  height: 56px;
  box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.05);
  background: #30363d;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__logo-wrapper {
    width: 47px;
    height: 47px;
  }

  &__profile-wrapper {
    margin-left: 16px;
    @media (max-width: $bp-mobile) {
      margin-left: 8px;
    }
  }

  &__profile-active {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__profile-btn {
    &-text-mob {
      display: none;
      @media (max-width: $bp-laptop-sm) {
        display: block;
        font-size: 32px;
      }
    }

    &-text-desc {
      @media (max-width: $bp-laptop-sm) {
        display: none;
      }
    }
  }

  &__btn-wallet {
    @media (max-width: $bp-mobile) {
      width: 28px;
      height: 28px;
      font-size: 8px;
      white-space: normal;
    }
  }

  :deep(.search-bar) {
    margin-left: 25px;
    @media (max-width: $bp-mobile) {
      margin-left: 12px;
    }
  }
}
</style>
