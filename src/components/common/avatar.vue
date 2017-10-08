<template>
    <div class="avatar-wrap">
      <img class="image" :src="avatar" :width="size" :height="size" :style="border" alt="">
      <div class="grade" v-if="grade">
        <i class="iconfont iconfont-v"></i><span>{{ grade }}</span>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        border: ''
      }
    },
    props: {
      avatar: '',
      size: '',
      borderWidth: '',
      borderColor: '',
      grade: ''
    },
    created () {
      this.border = `border: ${this.borderWidth}px solid ${this.borderColor}`
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "src/assets/css/variables.scss";

  .avatar-wrap {
    display: inline-block;
    position: relative;
    .image {
      border-radius: 50%;
      vertical-align: top;
      object-fit: cover;
    }
    .grade {
      padding: 2px 5px;
      position: absolute;
      right: 0;
      bottom: -5px;
      font-size: 12px;
      color: $white;
      border: 2px solid $white;
      border-radius: 10px;
      background: $yellow;
    }
  }
</style>
