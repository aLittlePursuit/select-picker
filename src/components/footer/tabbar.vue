<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/dynamic/all">
        <i class="iconfont iconfont-2x iconfont-dynamic-o"></i>动态
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/discover">
        <i class="iconfont iconfont-2x iconfont-discover-o"></i>发现
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/message/all">
        <i class="iconfont iconfont-2x iconfont-message-o"></i>消息
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/mine">
        <i class="iconfont iconfont-2x iconfont-mine-o"></i>我的
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbar',
    data () {
      return {}
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  @import 'src/assets/css/global';
  .tab {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    background: #fff;
    .tab-item {
      flex: 1;
      > a {
        color: $dark-text;
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        text-decoration: none;
        .iconfont {
          margin-bottom: 5px;
        }
        &.active {
          background: #fff;
          color: $green;
          .iconfont-dynamic-o {
            &:before {
              content: '\f053'
            }
          }
          .iconfont-discover-o {
            &:before {
              content: '\f055'
            }
          }
          .iconfont-mine-o {
            &:before {
              content: '\f057'
            }
          }
          .iconfont-message-o {
            &:before {
              content: '\f059'
            }
          }
        }
      }
    }
  }
</style>
