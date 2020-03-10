<template>
  <div class="container is-fulid">
    <div v-for="post in postList" :key="post.postId">
      <Card :post="post"></Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Forum",
  components: { Card },
  computed: {
    postList() {
      return this.$store.state.postList;
    }
  }
};
</script>
