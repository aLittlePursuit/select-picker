/*
 * @Author: huimin
 * @Date: 2017-09-11 10:25:59
 * @Last Modified by: huimin
 * @Last Modified time: 2017-09-19 10:03:08
 */
<template>
  <div class="drop-down">
    <div class="drop-down-bar">
      <i v-if="showBack" class="iconfont iconfont-nav-left" @click="$router.go(-1)">
        <span class="back-text">返回</span>
      </i>
      <div class="pull-left">
        <slot name="left"></slot>
      </div>
      <div class="pull-right">
        <slot class="pull-right" name="right"></slot>
      </div>
      <div class="drop-down-title" @click="showDropDowMenu">{{headTitle}}
        <i class="iconfont iconfont-caret-down" v-if="dropDownList.lenght!==0 && isShowMenu === false"></i>
        <i class="iconfont iconfont-caret-up" v-if="dropDownList.lenght!==0 && isShowMenu === true"></i>
      </div>
    </div>
    <ul class="drop-down-list" v-if="isShowMenu" @click="showDropDowMenu">
      <li v-for="item in dropDownList">
        <a :class="{active: item.isActive}" @click="goTo(item.isNeedLogin, item.path)">{{item.name}}</a>
      </li>
    </ul>
    <div class="drop-down-shade" v-if="isShowMenu" @click="isShowMenu = false"></div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { getLocalStorage } from '@/utils/common'

export default {
  name: 'dropDownHeader',
  data () {
    return {
      isShowMenu: false
    }
  },
  props: {
    headTitle: {
      type: String,
      require: true
    },
    showBack: {
      type: Boolean,
      default: true
    },
    dropDownList: {
      type: Array,
      default: []
    }
  },
  methods: {
    showDropDowMenu () {
      if (this.dropDownList.length !== 0) {
        this.isShowMenu = !this.isShowMenu
      }
    },
    goTo (isNeedLogin, path) {
      if (isNeedLogin) {
        let openId = getLocalStorage('openId') || null
        if (openId) {
          this.$router.push(path)
        } else {
          MessageBox.confirm('轻松登录，做个有身份的人！').then(action => {
            this.$router.push({ path: '/login', name: 'login' })
          })
        }
      } else {
        this.$router.push(path)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/scss">
@import 'src/assets/css/global.scss';

.drop-down {

  .drop-down-bar {

    background: $green;
    height: 44px;
    line-height: 44px;
    @include outerPadding;



    .drop-down-title {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      @include importantText;
    }

    i {
      @include assistText;
    }

    span {
      padding-left: 10px;
    }
  }
  .drop-down-list {
    z-index: 2;
    position: fixed;
    top: 44px;
    left: 0;
    border-top: 1px solid #7e8c8d;

    li a {
      height: 44px;
      line-height: 44px;
      background: white;
      width: 100vw;
      display: inline-block;
      text-align: center;
      border-bottom: 1px solid #e2e2e2;
    }

    .active {
      color: $green;
      border-bottom: 2px solid $green;
    }
  }

  .drop-down-shade {
    height: calc(100vh - 44px - 50px);
    width: 100vw;
    position: absolute;
    top: 44px;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
  }
}
</style>
