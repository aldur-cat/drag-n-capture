<template>    
  <!-- <draggable 
    v-model="boardList" 
    :options="dragOptions" 
    @sort="isEndedSort"
    class="board"
  > -->
    <!-- <transition-group 
      name="list" 
      tag="ul"
      class="board__list"
    > -->
    <div class="board">
      <ul 
        ref="board"
        class="board__list"
      >
        <li 
          v-for="item in boardList" 
          :key="item.id"
          class="board__items"
        >
          <a :href="`#${item.id}`" class="board__link">
            <img :src="require(`@/assets${item.imgUrl}`)" alt="이미지" class="board__img">
          </a>
        </li>
      </ul>
    </div>
    <!-- </transition-group> -->
  <!-- </draggable> -->
</template>

<script>
if (Number.parseInt === undefined) {
  Number.parseInt = window.parseInt;
}
import Sortable, { Swap } from 'sortablejs';
Sortable.mount(new Swap());

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
      ],
      sortable: null
    }
  },
  mounted() {
    this.sortable = Sortable.create(this.$refs.board, this.dragOptions);
    console.log()
  },
  computed: {
    dragOptions() {
      const self = this;
      return { 
        // draggable: '.board__items',
        // handle: '.board__link',
        // animation: 100,
        swap: true, // Enable swap plugin
        swapClass: 'board__items--highlight', // The class applied to the hovered swap item
        animation: 150,
        // Changed sorting within list
        onUpdate(event) {
          // same properties as onEnd
          console.log('update')
        },
        // Called by any change to the list (add / update / remove)
        onSort (event) {
          // same properties as onEnd
          const temp = self.boardList[event.newIndex];
          self.boardList[event.newIndex] = self.boardList[event.oldIndex];
          self.boardList[event.oldIndex] = temp;
          console.log('sort')
        },
        onEnd(event) {
          console.log('end')
        //   var itemEl = event.item;  // dragged HTMLElement
        //   event.to;    // target list
        //   event.from;  // previous list
        //   event.oldIndex;  // element's old index within old parent
        //   event.newIndex;  // element's new index within new parent
        //   event.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
        //   event.newDraggableIndex; // element's new index within new parent, only counting draggable elements
        //   event.clone // the clone element
        //   event.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
        },
      }
    }
  },
  methods: {
    isEndedSort(event) {
      console.log(event)
      
      // this.indexEndedSort = event.newIndex
      // setTimeout(() => {
      //   this.indexEndedSort = -1
      // }, 500)
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
  &__items--highlight {
    transform: scale(1.1);
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