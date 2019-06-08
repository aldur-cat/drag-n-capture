<template>
  <div class="board">
    <ul class="board__list">
      <li 
        v-for="item in boardList" 
        :key="item.id"
        class="board__items"
      >
        <a :href="`#${item.id}`" class="board__link">
          <img :src="item.imgUrl" alt="이미지" class="board__img">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Board',
  data() {
    return {
      boardList: [
        { 
          id: 1,
          imgUrl: '/images/character1.jpg'
         },
        { 
          id: 2,
          imgUrl: '/images/character2.jpg'
         },
        { 
          id: 3,
          imgUrl: '/images/character3.jpg'
         },
        { 
          id: 4,
          imgUrl: '/images/character4.jpg'
         },
        { 
          id: 5,
          imgUrl: '/images/character5.jpg'
         },
        { 
          id: 6,
          imgUrl: '/images/default.jpg'
         },
        { 
          id: 7,
          imgUrl: '/images/default.jpg'
         },
        { 
          id: 8,
          imgUrl: '/images/default.jpg'
         },
        { 
          id: 9,
          imgUrl: '/images/default.jpg'
         },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.board {
  $dimensions: 100px;

  display: flex;
  position: relative;
  transform: skew(-10deg);
  background-color: rgba(255, 255, 0, .3);
  &__list {
    display: flex;
    flex-wrap: wrap;
    width: $dimensions * 3;
    height: $dimensions * 3;
  }
  &__items {
    flex: 0 0 auto;
    position: relative;
    box-sizing: border-box;
    width: $dimensions;
    height: $dimensions;
    border: 1px solid #000;
    font-size: 30px;
  }
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    color: inherit;
  }
  &__img {
    width: 90%;
    height: 90%;
  }
}
</style>