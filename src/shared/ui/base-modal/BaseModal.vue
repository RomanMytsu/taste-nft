<script setup>
import { onMounted, onUnmounted } from "vue"
import BaseSvg from "../icon/BaseSvg.vue"

const isOpen = defineModel({ type: Boolean, default: false })

const closeModal = () => {
  isOpen.value = false
}

const handleEscape = (e) => {
  if (e.key === "Escape" && isOpen.value) closeModal()
}

onMounted(() => document.addEventListener("keydown", handleEscape))
onUnmounted(() => document.removeEventListener("keydown", handleEscape))
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-wrapper">
          <div class="modal-header">
            <div class="modal-header__center">
              <slot name="header-center"></slot>
            </div>
            <div class="modal-header__right">
              <slot name="header-right">
                <button @click="closeModal" class="modal-close">
                  <BaseSvg id="icon-icon-close" width="17" height="16" />
                </button>
              </slot>
            </div>
          </div>
          <div class="modal-content">
            <slot name="content" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(35, 31, 32, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (max-width: $bp-tablet) {
    padding-top: 0;
    padding-bottom: 0;
  }
}

.modal-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 32px;
  box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.05);
  background: #30363d;
  width: 653px;
  min-height: 200px;
  max-height: 90vh;
  padding: 45px 0 32px;

  @media (max-width: $bp-tablet) {
    max-width: 100vw;
    max-height: 100vh;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    padding-top: 24px;
    padding-bottom: 24px;
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 24px;

  &__center {
    flex: 1;
    display: flex;
    justify-content: center;
    font-weight: 700;
    text-align: center;
  }
}

.modal-close {
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  flex: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;

  .modal-wrapper {
    transition: transform 0.4s ease;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

  .modal-wrapper {
    transform: scale(0.9) translateY(20px);
  }
}
</style>
