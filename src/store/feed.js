
import { defineStore } from "pinia"

export const useFeedStore = defineStore("feed", {
  state: () => ({
    feedData: []
  }),
  actions: {
    getFeedData() {
      this.feedData = [
        { id: 1, content: "오늘도 멋진 하루 되세요!", user: { name: "user" } },
        { id: 2, content: "아침 커피로 하루 시작", user: { name: "user" } },
        { id: 3, content: "디버깅만 몇 시간째…", user: { name: "user" } },
        { id: 4, content: "2025년에는 꼭 운동한다!", user: { name: "user" } },
        { id: 5, content: "우리 집 강아지 너무 귀여워", user: { name: "다미장" } },
      ]
    },
    removeFeed(id){
      this.feedData = this.feedData.filter(feed => feed.id!==id)
    }
  }
})