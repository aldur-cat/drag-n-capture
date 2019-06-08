<template>
  <div id="app">
    <Board ref="board" />
    <button
      @click.prevent="capture"
      class="btn btn-capture"
    >
      캡쳐
    </button>
    <Modal
      ref="modal" 
      v-if="isShowedModal"
      @closeModal="closeModal"
      :canvas="canvas"
    />
  </div>
</template>

<script>
import Board from '@/components/Board.vue'
import Modal from '@/components/Modal.vue'

import html2canvas from 'html2canvas';

export default {
  name: 'app',
  components: {
    Board,
    Modal
  },
  data() {
    return {
      isShowedModal: false,
      canvas: null
    }
  },
  methods: {
    capture() {
      this.isShowedModal = true;
      html2canvas(this.$refs.board.$el)
        .then(canvas => {
          this.canvas = canvas;
          $(this.$refs.modal.$el).prepend(this.canvas);
        });
    },
    closeModal(state) {
      this.isShowedModal = state;
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
/deep/ .btn {
  margin: 20px;
  padding: 10px;
  background: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  font-weight: bold;
  color: #444;
}
</style>
