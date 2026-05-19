<script setup>
import { useWalletStore } from "@/features/wallet-connect/useWallet"
import ArtworkActions from "@/shared/ui/artwork-details/ArtworkActions.vue"
import ArtworkBalance from "@/shared/ui/artwork-details/ArtworkBalance.vue"
import ArtworkDetails from "@/shared/ui/artwork-details/ArtworkDetails.vue"
import ArtworkField from "@/shared/ui/artwork-details/ArtworkField.vue"
import ArtworkTitle from "@/shared/ui/artwork-details/ArtworkTitle.vue"
import BaseButton from "@/shared/ui/button/BaseButton.vue"
import UserInfo from "@/shared/ui/user-info/UserInfo.vue"
import HeroSlider from "./components/HeroSlider.vue"
import { SLIDER_DATA } from "../model/slider"

const { Data } = useWalletStore()
</script>

<template>
  <section class="hero">
    <div class="hero__container container">
      <div class="hero__left-content">
        <ArtworkDetails>
          <template #top>
            <UserInfo :avatar="Data.img" :name="Data.name" :username="Data.username" />
          </template>
          <ArtworkTitle :title="Data.title" />
          <ArtworkField label="Description:">{{ Data.description }}</ArtworkField>
          <template #bottom>
            <ArtworkField label="Sold for:">
              <ArtworkBalance :balance="Data.balance" />
            </ArtworkField>
            <div class="hero__actions">
              <BaseButton size="sm">View</BaseButton>
              <ArtworkActions />
            </div>
          </template>
        </ArtworkDetails>
      </div>
      <div class="hero__right-content">
        <HeroSlider :items="SLIDER_DATA" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  margin-top: 97px;

  &__container {
    display: flex;
    gap: 16px;
  }

  &__left-content {
    flex: 1 1 516px;
    display: flex;
    align-items: flex-end;
    max-width: 516px;

    :deep(.artwork-details__bottom) {
      .field {
        display: flex;
        gap: 8px;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: flex-end;
    gap: 12px;
  }

  &__right-content {
    flex: 1 1 786px;
    max-width: 786px;
    max-height: 519px;
    aspect-ratio: 786 / 519;
    min-width: 0;
    position: relative;
  }
}
</style>
