<template>
  <div>
    <div>
        <h2>Home</h2>
            <div>User님</div>
            <TweetBar></TweetBar>
            <FeedList></FeedList>
   
    </div>
  </div>
</template>

<script>
import TweetBar from '@/components/TweetBar.vue';
import FeedList from '@/components/FeedList.vue';
export default {
    name: "MainPage",
    components : { TweetBar, FeedList},

}
</script>

<style>

</style>