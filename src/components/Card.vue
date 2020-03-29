<template>
  <div class="tile is-ancestor" @click="onClick">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item is-size-7">{{post.branchName}}</div>
          </div>
          <div class="level-right">
            <div class="level-item is-size-7">{{post.writer}}</div>
            <div class="level-item is-size-7">{{post.creDate}}</div>
          </div>
        </div>
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item is-size-6">{{post.title}}</div>
          </div>
        </div>
        <div clas="level is-mobile">
          <div class="leve-item is-size-7">{{post.contents}}</div>
        </div>
        <div class="level is-mobile is-size-7">
          <div class="level-item">
            <span class="icon">
              <i class="fas fa-eye"></i>
            </span>
            {{post.viewCounts}}
          </div>
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
          <div class="level-item">
            <span class="icon">
              <i class="fas fa-bookmark"></i>
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: { post: { type: Object, default: () => [] } },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
<style scoped>
.level {
  margin-bottom: 0.5rem;
}
</style>