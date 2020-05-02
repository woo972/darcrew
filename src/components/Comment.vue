<template>
  <!-- <div class="tile is-anscestor">
    <div class="tile is-parent">
  <div class="tile is-child box">-->
  <div>
    <div class="level is-size-7">
      <div class="level-left">
        <div class="level-item">{{comment.writer}}</div>
      </div>
      <div class="level-right">
        <div class="level-item">{{comment.creDate}}</div>
      </div>
    </div>
    <div class="level is-size-7">
      <div class="level-left">
        <div class="level-item">{{comment.contents}}</div>
      </div>
    </div>
    <div class="level is-size-7">
      <div class="level-item">
        <span class="icon">
          <i class="fas fa-thumbs-up"></i>
        </span>
        {{comment.likeCounts}}
      </div>
      <div class="level-item" @click="routeToReplyEditor">
        <span class="icon">
          <i class="fas fa-comments"></i>
        </span>
        대댓글
      </div>
    </div>
  </div>
  <!-- </div>
    </div>
  </div>-->
</template>

<script>
export default {
  name: "comment",
  props: {
    comment: [Object]
  },
  methods: {
    routeToReplyEditor() {
      this.$router.push({ name: "ReplyEditor" });
    }
  }
};
</script>

<style>
</style>