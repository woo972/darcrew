<template>
  <div class="tile is-ansestor">
    <div class="tile is-parent">
      <div class="tile is-child">
        <div class="field">
          <div class="control">
            <textarea class="textarea has-fixed-size" placeholder="댓글 입력" rows="1"></textarea>
            <div @click="addReply" class="button is-text">등록</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostEditor",
  methods: {
    addReply() {}
  }
};
</script>

<style scoped>
</style>