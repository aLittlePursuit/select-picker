<template>
  <div class="search">
    <a @click="isShowSearch=true">
      <i class="mintui mintui-search"></i>
      <input class="search-input" type="text" placeholder="搜索">
    </a>
    <div class="search-page-wrap" v-if="isShowSearch">
      <div class="search-page-input">
        <i class="mintui mintui-search"></i>
        <input cl type="text" placeholder="请输入搜索内容">
        <span @click="isShowSearch=false" class="search-page-cancel">取消</span>
      </div>
      <div class="search-page-history"></div>
      <div class="search-page-hot"></div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
      isShowSearch: false
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import 'src/assets/css/global.scss';
.search {
  height: 45px;
  width: 100%;
  padding: 7px 15px;



  a {
    padding: 5px;
    background: $white;
    width: 100%;
    border-radius: 4px;
    display: flex;
    height: 30px;
    .mintui-search {
      padding-top: 2px;
    }


    .search-input {
      padding-left: 5px;
      outline: none;
    }
  }

  .search-page-wrap {
    position: absolute;
    top: 0;
    left: 0;
    background: $white;
    width: 100vw;
    height: 100vh;
  }

  .search-page-input {
    height: 56px;
    padding: 19px 16px;
    border-bottom: 1px solid $bg;

    i {
      position: relative;
      top: 2px;
    }

    input {
      margin-left: 16px;
      outline: none;
    }

    .search-page-cancel {
      position: absolute;
      right: 16px;
      font-size: 14px;
    }
  }
}
</style>