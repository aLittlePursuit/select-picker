<template>
  <div class="select-picker">
    <!--头部-->
    <div class="select-picker-head">
      <div class="cancel-btn" @click="cancel">取消</div>
      <div class="confirm-btn" @click="confirm">确定</div>
    </div>
    <!--滚动区域-->
    <div class="select-picker-content">
      <div class="scroll-cell" v-for="(item, index) in colData.col">
        <div class="col col-hook" @scroll="scrollListen(index)">
          <ul v-if="index === 0">
            <li v-for="itemData in colData.data">{{ itemData.text }}</li>
          </ul>
          <ul v-if="index === 1">
            <li v-for="itemData in colData.data[col1Number].col2">{{ itemData.text }}</li>
          </ul>
          <ul v-if="index === 2">
            <li v-for="itemData in colData.data[col1Number].col2[col2Number].col3">{{ itemData.text }}</li>
          </ul>
          <ul v-if="index === 3">
            <li v-for="itemData in colData.data[col1Number].col2[col2Number].col3[col3Number].col4">{{ itemData.text }}</li>
          </ul>
          <ul v-if="index === 4">
            <li v-for="itemData in colData.data[col1Number].col2[col2Number].col3[col3Number].col4[col4Number].col5">{{ itemData.text }}</li>
          </ul>
          <ul v-if="index === 5">
            <li v-for="itemData in colData.data[col1Number].col2[col2Number].col3[col3Number].col4[col4Number].col5[col5Number].col6">{{ itemData.text }}</li>
          </ul>
        </div>
      </div>
      <div class="mask-top"></div>
      <div class="select-box"></div>
      <div class="mask-bottom"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      colData: {
        type: Object
      }
    },
    data () {
      return {
        col1Number: 0,
        col2Number: 0,
        col3Number: 0,
        col4Number: 0,
        col5Number: 0,
        col6Number: 0
      }
    },
    methods: {
      // 滚动监听方法
      scrollListen (e) {
        const holdHeight = 36  // 样式设置中每个li高度为36px定高
        let scrollCell = document.getElementsByClassName('col-hook')
        let scrollHeight = scrollCell[e].scrollTop  // 不同列滚动高度，根据e判断那一列
        let getNumber = Math.round(scrollHeight / holdHeight)  // 计算出滚动到那一个元素
        // 这里最多支持6列
        for (let i = 0; i < this.colData.col; i++) {
          if (e === i) {
            if (i === 0) { // 第一列滚动后得到的值赋值
              this.col1Number = getNumber
            }
            if (i === 1) { // 第二列滚动后得到的值赋值
              this.col2Number = getNumber
            }
            if (i === 2) { // 第三列滚动后得到的值赋值
              this.col3Number = getNumber
            }
            if (i === 3) { // 第四列滚动后得到的值赋值
              this.col4Number = getNumber
            }
            if (i === 4) { // 第五列滚动后得到的值赋值
              this.col5Number = getNumber
            }
            if (i === 5) { // 第六列滚动后得到的值赋值
              this.col6Number = getNumber
            }
            // 此循环目的是滚动当前列，其所关联的后面的所有列scrollTop重置为0
            for (let j = e + 1; j < scrollCell.length; j++) {
              scrollCell[j].scrollTop = 0
            }
          }
        }
      },
      // 取消按钮事件
      cancel () {
        this.$emit('cancel')
      },
      // 确定按钮事件
      confirm () {
        let getData
        // if判断传入参数为几列，传给父组件的数据就是几条
        if (this.colData.col === 1) {
          getData = {
            col1Data: this.colData.data[this.col1Number].id
          }
        }
        if (this.colData.col === 2) {
          getData = {
            col1Data: this.colData.data[this.col1Number].id,
            col2Data: this.colData.data[this.col1Number].col2[this.col2Number].id
          }
        }
        if (this.colData.col === 3) {
          getData = {
            col1Data: this.colData.data[this.col1Number].id,
            col2Data: this.colData.data[this.col1Number].col2[this.col2Number].id,
            col3Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].id
          }
        }
        if (this.colData.col === 4) {
          getData = {
            col1Data: this.colData.data[this.col1Number].id,
            col2Data: this.colData.data[this.col1Number].col2[this.col2Number].id,
            col3Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].id,
            col4Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].col4[this.col4Number].id
          }
        }
        if (this.colData.col === 5) {
          getData = {
            col1Data: this.colData.data[this.col1Number].id,
            col2Data: this.colData.data[this.col1Number].col2[this.col2Number].id,
            col3Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].id,
            col4Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].col4[this.col4Number].id,
            col5Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].col4[this.col4Number].col5[this.col5Number].id
          }
        }
        if (this.colData.col === 6) {
          getData = {
            col1Data: this.colData.data[this.col1Number].id,
            col2Data: this.colData.data[this.col1Number].col2[this.col2Number].id,
            col3Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].id,
            col4Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].col4[this.col4Number].id,
            col5Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].col4[this.col4Number].col5[this.col5Number].id,
            col6Data: this.colData.data[this.col1Number].col2[this.col2Number].col3[this.col3Number].col4[this.col4Number].col5[this.col5Number].col6[this.col6Number].id
          }
        }
        this.$emit('confirm', getData)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .select-picker-head {
    display: flex;
    width: 100%;
    height: 44px;
    background: #eee;
    .cancel-btn,
    .confirm-btn {
      flex: 1;
      text-align: center;
      line-height: 44px;
      font-size: 16px;
      color: #999;
    }
  }
  .select-picker-content {
    display: flex;
    position: relative;
    .scroll-cell {
      flex: 1;
      background: #fff;
      .col {
        width: 100%;
        height: 252px;
        overflow: auto;
        color: #333;
        background: #fff;
        &::-webkit-scrollbar {
          display: none;
        }
        > ul {
          margin: 0;
          padding: 107px 0;
          list-style: none;
          > li {
            text-align: center;
            line-height: 36px;
            height: 36px;
          }
        }
      }
    }
    .select-box {
      position: absolute;
      left: 0;
      top: 107px;
      width: 100%;
      height: 36px;
      background: rgba(0,0,0,.1);
    }
    .mask-top,
    .mask-bottom {
      position: absolute;
      left: 0;
      width: 100%;
      height: 107px;
      background: rgba(255,255,255,.5);
    }
    .mask-top {
      top: 0;
    }
    .mask-bottom {
      bottom: 0;
    }
  }
</style>

