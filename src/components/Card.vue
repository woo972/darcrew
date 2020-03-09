<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item is-size-7">
              여기어디
              <!-- {{branchTitle}} -->
            </div>
          </div>
          <div class="level-right">
            <div class="level-item is-size-7">
              글쓴이닉네임
              <!-- {{writer}} -->
            </div>
            <div class="level-item is-size-7">
              2020.04.07
              <!-- {{creDate}} -->
            </div>
          </div>
        </div>
        <div class="level">
          <div class="level-left">
            <div class="level-item is-size-4">
              글 제목은 이거라고 합니다
              <!-- {{title}} -->
            </div>
          </div>
        </div>
        <div clas="level">
          <div class="leve-item">
            글 내용 중 일부는 여기에 보인다고 합니다.
            중간에 개행이 들어가거나
            길어지면 어덯게
            되는 걸까요
            그림이나 영상을 미리보기 방지처럼 올리면??
            <!-- {{contents}} -->
          </div>
        </div>
        <div class="level is-mobile is-size-7">
          <div class="level-item">
            <div class>◎</div>1,304
            <!-- {{viewCounts}} -->
          </div>
          <div class="level-item">
            <div class>◎</div>3,450
            <!-- {{likeCounts}} -->
          </div>
          <div class="level-item">
            <div class>◎</div>50
            <!-- {{commentCounts}} -->
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
  name: "SingleCard"
};
</script>
<style scoped>
.level {
  margin-bottom: 0.5rem;
}
</style>