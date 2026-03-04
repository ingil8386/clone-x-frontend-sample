
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({
    user: { id: 1, name: "테스터" }
  }),
  getters: {
    getUserName: (state) => state.user.name
  }
})