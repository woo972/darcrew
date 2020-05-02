<template>
  <div class="tile is-ansestor">
    <div class="tile is-parent">
      <div class="tile is-child">
        <div class="level">
          <div class="level-left">
            <div class="level-item" @click="goBack">취소</div>
          </div>
          <div class="level-right">
            <div class="level-item" @click="addPost">등록</div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <textarea class="textarea has-fixed-size" placeholder="제목 입력" rows="1"></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <textarea class="textarea has-fixed-size" placeholder="내용 입력" rows="10"></textarea>
          </div>
        </div>
        <div class="level">
          <div class="level-item">사진</div>
          <div class="level-item">투표</div>
          <div class="level-item">해쉬태그</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostEditor",
  methods: {
    goBack() {
      this.$router.push({ name: "Forum" });
    },
    addPost() {
      this.$router.push({ name: "Forum" });
    }
  }
};
</script>

<style>
</style>