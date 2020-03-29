<template>
  <div class="container is-fulid">
    <div v-for="post in postList" :key="post.postId">
      <Card :post="post" @onClick="getPost(post.postId)"></Card>
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
      return this.$store.state.forum.postList;
    }
  },
  created() {
    this.$store.dispatch("getPostList");
  },
  methods: {
    getPost(postId) {
      this.$router.push({ name: "Post", params: { postId } });
    }
  }
};
</script>
