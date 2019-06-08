<template>
  <div
    @click="closeModal"
    class="modal"
  >
    <div class="modal__wrap">
      <button 
        @click.prevent="download"
        class="btn btn-download"
      >
        다운로드
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['canvas'],
  methods: {
    download() {
      if (this.canvas.msToBlob) { //for IE
        var blob = this.canvas.msToBlob();
        window.navigator.msSaveBlob(blob, 'mistover.png');
      } else {
        //other browsers
        const link = document.createElement('a');
        link.download = 'mistover.png';
        link.href = this.canvas.toDataURL();
        link.click();
    }
    },
    closeModal(event) {
      if (!$(event.target).hasClass('modal__wrap')) {
        this.$emit('closeModal', false);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/utils/all';

.modal {
  @include overlay($is-flex-center: true);
  flex-direction: column;
  background-color: rgba(0, 0, 0, .5);
  &__wrap {
    
  }
}
</style>

