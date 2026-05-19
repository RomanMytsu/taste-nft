<script setup>
import { useWalletStore } from "@/features/wallet-connect/useWallet"
import BaseSvg from "@/shared/ui/icon/BaseSvg.vue"
import { ref } from "vue"

const { Data, disconnect } = useWalletStore()
const isDropdownOpen = ref(false)
// const profileRef = ref(null)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const handleLogout = () => {
  isDropdownOpen.value = false
  disconnect()
}
</script>

<template>
  <div class="profile">
    <div class="profile__trigger" @click="toggleDropdown">
      <div class="profile__info">
        <div class="profile__avatar-wrapper">
          <img :src="Data.img" alt="Avatar" width="40" height="40" class="profile__avatar-img" />
        </div>
        <div class="profile__info-text-wrapper">
          <p class="profile__info_name">{{ Data.name }}</p>
          <p class="profile__info_username">{{ Data.username }}</p>
        </div>
      </div>
      <div class="profile__balance">
        <span class="profile__balance_label">Balance:</span>
        <BaseSvg id="icon-sold-icon" width="16" height="16" />
        <span class="profile__balance_value">{{ Data.balance }}</span>
      </div>
      <BaseSvg
        id="icon-icon-arrow-profile"
        width="16"
        height="13"
        class="profile__arrow"
        :class="{ profile__arrow_rotateg: isDropdownOpen }"
      />
    </div>

    <transition name="dropdown">
      <div v-if="isDropdownOpen" class="profile__dropdown">
        <div class="profile__dropdown-header">
          <div class="profile__info">
            <div class="profile__avatar-wrapper">
              <img
                :src="Data.img"
                alt="Avatar"
                width="40"
                height="40"
                class="profile__avatar-img"
              />
            </div>
            <div class="profile__info-text-wrapper">
              <p class="profile__info_name">{{ Data.name }}</p>
              <p class="profile__info_username">{{ Data.username }}</p>
            </div>
          </div>
          <div class="profile__balance">
            <span class="profile__balance_label">Balance:</span>
            <BaseSvg id="icon-sold-icon" width="16" height="16" />
            <span class="profile__balance_value">{{ Data.balance }}</span>
          </div>
          <BaseSvg
            id="icon-icon-arrow-profile"
            width="16"
            height="13"
            class="profile__arrow"
            :class="{ profile__arrow_rotateg: isDropdownOpen }"
          />
        </div>

        <p class="profile__address-label">Address: {{ Data.address }}</p>
        <nav class="profile__nav">
          <button class="profile__nav-link">My profile</button>
          <button class="profile__nav-link">Balance settings</button>
          <button class="profile__nav-link profile__nav-link_logout" @click="handleLogout">
            Log out
          </button>
        </nav>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.profile {
  position: relative;
  display: flex;
  align-items: center;

  &__trigger {
    display: flex;
    align-items: flex-end;
    cursor: pointer;

    @media (max-width: $bp-laptop-sm) {
      .profile__info-text-wrapper,
      .profile__balance,
      .profile__arrow {
        display: none;
      }
    }
  }

  &__avatar-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.15);
  }

  &__avatar-img {
    width: 40px;
    height: 40px;
    border-radius: 12px;
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 10px;

    &-text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2px;
      white-space: nowrap;
    }

    &_name {
      font-weight: 700;
      font-size: 16px;
    }

    &_username {
      font-weight: 500;
      font-size: 12px;
      background: $gradient-primary-text;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__balance {
    display: flex;
    align-items: center;
    gap: 4px;
    transform: translate(-6px);

    &_label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }

    &_value {
      font-size: 12px;
    }
  }

  &__arrow {
    transition: transform 0.4s ease;
    align-self: center;
    &_rotateg {
      transform: rotate(180deg);
    }
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 15px);
    left: -8px;
    width: 267px;
    border-radius: 12px;
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.05);
    background: #30363d;
    z-index: 10;
    padding: 8px 12px 12px;
    @media (max-width: $bp-laptop-sm) {
      left: -208px;
    }

    &-header {
      display: flex;
      align-items: flex-end;
      cursor: pointer;
    }
  }

  &__address-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    margin: 10px 0 16px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &-link {
      background-color: transparent;
      border: none;
      font-family: $font-family;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.29;
      color: #fff;
      text-align: left;

      &_logout {
        color: #ff5e54;
      }
    }
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
