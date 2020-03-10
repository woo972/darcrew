<template>
  <div class="tile is-ancestor">
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
        <div class="level">
          <div class="level-left">
            <div class="level-item is-size-4">{{post.title}}</div>
          </div>
        </div>
        <div clas="level">
          <div class="leve-item">{{post.contents}}</div>
        </div>
        <div class="level is-mobile is-size-7">
          <div class="level-item">
            <div class>◎</div>
            {{post.viewCounts}}
          </div>
          <div class="level-item">
            <div class>◎</div>
            {{post.likeCounts}}
          </div>
          <div class="level-item">
            <div class>◎</div>
            {{post.commentCounts}}
          </div>
          <div class="level-item">
            <div class>☆</div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: { post: { type: Object, default: () => [] } }
};
</script>
<style scoped>
.level {
  margin-bottom: 0.5rem;
}
</style>