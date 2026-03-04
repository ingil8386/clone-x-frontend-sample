<template>
  <div>
    <div class="title-contaniner">
        <h2>Home</h2>
            <div>{{userName}}</div>
    </div>        

            <TweetBar></TweetBar>
            <FeedList></FeedList>
  
  </div>
</template>

<script>
import TweetBar from '@/components/TweetBar.vue';
import FeedList from '@/components/FeedList.vue';
import { useUserStore } from '@/store/user';
export default {
    name: "MainPage",
    components : { TweetBar, FeedList },
    computed:{
      userName(){
        const UserStore = useUserStore()
        return UserStore.getUserName
      }
    }

}
</script>

<style scoped>
.title-contaniner{
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
</style>