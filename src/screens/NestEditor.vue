<template>
  <div class="container is-fulid">
    <h1 class="title">활용 레이아웃 선택</h1>
    <div class="button" @click="confirm">결정하기</div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical">
        <div class="tile is-child box" @click="addToSelectedLayouts('COMMUNITY')">
          <div class="level">
            <div class="level-item">커뮤니티형 게시판</div>
          </div>사진
        </div>
        <div class="tile is-child box" @click="addToSelectedLayouts('PICTURE')">
          <div class="level">
            <div class="level-item">사진형 게시판</div>
          </div>사진
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NestEditor",
  data() {
    return {
      selectedLayouts: []
    };
  },
  methods: {
    addToSelectedLayouts(layoutType) {
      let flag = true;
      let selectedLayoutsLength = this.selectedLayouts.length;
      while (selectedLayoutsLength--) {
        if (this.selectedLayouts[selectedLayoutsLength] === layoutType) {
          flag = false;
          break;
        }
      }
      flag ? this.selectedLayouts.push(layoutType) : "";
    },
    confirm() {
      alert(this.selectedLayouts);
    }
  }
};
</script>
