import { defineStore } from "pinia"
import { ref } from "vue"
import { MOCK_USER } from "@/shared/api/mocks/user"

export const useWalletStore = defineStore("wallet", () => {
  const isConnected = ref(localStorage.getItem("is_wallet_connected") === "true")

  const Data = ref({
    ...MOCK_USER,
  })

  const connect = () => {
    isConnected.value = true
    localStorage.setItem("is_wallet_connected", "true")
  }

  const disconnect = () => {
    isConnected.value = false
    localStorage.removeItem("is_wallet_connected")
  }

  return {
    isConnected,
    Data,
    connect,
    disconnect,
  }
})
