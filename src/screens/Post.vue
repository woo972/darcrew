<template>
  <div class="tile is-ansestor">
    <div class="tile is-parent is-vertical">
      <div class="tile is-child box">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item" @click="goBack">
              <span class="icon">
                <i class="fa fa-arrow-left"></i>
              </span>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="icon">
                <i class="fas fa-bell"></i>
              </span>
            </div>
            <div class="level-item">
              <span class="icon">
                <i class="fas fa-bookmark"></i>
              </span>
            </div>
            <div class="level-item">
              <span class="icon">
                <i class="fas fa-share-alt"></i>
              </span>
            </div>
            <div class="level-item">
              <span class="icon">
                <i class="fas fa-ellipsis-v"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item is-size-7">{{post.branchName}}</div>
          </div>
        </div>
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item is-size-6">{{post.title}}</div>
          </div>
        </div>
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item is-size-7">{{post.writer}}</div>
          </div>
          <div class="level-right">
            <div class="level-item is-size-7">{{post.creDate}}</div>
          </div>
        </div>
        <div class="level">
          <div class="level-left">
            <div class="level-item is-size-7">{{post.contents}}</div>
          </div>
        </div>
        <div class="level is-mobile is-size-7">
          <div class="level-item">
            <span class="icon">
              <i class="fas fa-thumbs-up"></i>
            </span>
            {{post.likeCounts}}
          </div>
          <div class="level-item">
            <span class="icon">
              <i class="fas fa-comments"></i>
            </span>
            {{post.commentCounts}}
          </div>
        </div>
      </div>
      <div class="tile is-child box" v-for="comment in comments" :key="comment.commentId">
        <Comment :comment="comment"></Comment>
      </div>
      <div class="is-fixed-bottom">
        <ReplyEditor />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment";
import ReplyEditor from "@/components/ReplyEditor";
export default {
  name: "Post",
  components: { Comment, ReplyEditor },
  created() {
    let postId = this.$route.params.postId;
    this.$store.dispatch("getPost", postId);
    this.post = this.$store.state.forum.post;
    this.$store.dispatch("getComments", postId);
    this.comments = this.$store.state.forum.comments;
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Forum" });
    }
  }
};
</script>

<style>
</style>