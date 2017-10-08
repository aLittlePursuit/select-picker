<template>
  <div>
    <div @click="isVisible = true">显示picker</div>
    <!--外层div控制picker组件位置和显示隐藏,组件本身不做固定位置和显示隐藏-->
    <div class="picker" v-show="isVisible">
      <yz-select-picker :col-data="colData" @cancel="cancelCallback" @confirm="confirmCallback"></yz-select-picker>
    </div>
  </div>
</template>

<script>
  import selectPicker from '@/components/selectPicker'

  export default {
    data () {
      return {
        isVisible: false,
        colData: {}
      }
    },
    created () {
      // 数据结构
      this.colData = {
        col: 4,  // 此值最大值为6，最小为1，表示列数
        data: [
          {
            text: '科室1',
            id: '1',
            col2: [
              {
                text: '科室11',
                id: '11',
                col3: [
                  {
                    text: '科室111',
                    id: '111',
                    col4: [
                      {
                        text: '科室1111',
                        id: '1111'
                      },
                      {
                        text: '科室1112',
                        id: '1112'
                      }
                    ]
                  }
                ]
              },
              {
                text: '科室12',
                id: '12',
                col3: [
                  {
                    text: '科室121',
                    id: '121',
                    col4: [
                      {
                        text: '科室1211',
                        id: '1211'
                      },
                      {
                        text: '科室1212',
                        id: '1212'
                      }
                    ]
                  }
                ]
              },
              {
                text: '科室13',
                id: '13',
                col3: [
                  {
                    text: '科室131',
                    id: '131',
                    col4: [
                      {
                        text: '科室1311',
                        id: '1311'
                      },
                      {
                        text: '科室1312',
                        id: '1312'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: '科室2',
            id: '2',
            col2: [
              {
                text: '科室21',
                id: '21',
                col3: [
                  {
                    text: '科室211',
                    id: '211',
                    col4: [
                      {
                        text: '科室2111',
                        id: '2111'
                      },
                      {
                        text: '科室2112',
                        id: '2112'
                      }
                    ]
                  }
                ]
              },
              {
                text: '科室22',
                id: '22',
                col3: [
                  {
                    text: '科室221',
                    id: '221',
                    col4: [
                      {
                        text: '科室2211',
                        id: '2211'
                      },
                      {
                        text: '科室2212',
                        id: '2212'
                      }
                    ]
                  }
                ]
              },
              {
                text: '科室23',
                id: '23',
                col3: [
                  {
                    text: '科室231',
                    id: '231',
                    col4: [
                      {
                        text: '科室2311',
                        id: '2311'
                      },
                      {
                        text: '科室2312',
                        id: '2312'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: '科室3',
            id: '3',
            col2: [
              {
                text: '科室31',
                id: '31',
                col3: [
                  {
                    text: '科室311',
                    id: '311',
                    col4: [
                      {
                        text: '科室3111',
                        id: '3111'
                      },
                      {
                        text: '科室3112',
                        id: '3112'
                      }
                    ]
                  }
                ]
              },
              {
                text: '科室32',
                id: '32',
                col3: [
                  {
                    text: '科室321',
                    id: '321',
                    col4: [
                      {
                        text: '科室3211',
                        id: '3211'
                      },
                      {
                        text: '科室3212',
                        id: '3212'
                      }
                    ]
                  }
                ]
              },
              {
                text: '科室33',
                id: '33',
                col3: [
                  {
                    text: '科室331',
                    id: '331',
                    col4: [
                      {
                        text: '科室3311',
                        id: '3311'
                      },
                      {
                        text: '科室3312',
                        id: '3312'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: '科室4',
            id: '4',
            col2: [
              {
                text: '科室41',
                id: '41',
                col3: [
                  {
                    text: '科室411',
                    id: '411',
                    col4: [
                      {
                        text: '科室4111',
                        id: '4111'
                      },
                      {
                        text: '科室4112',
                        id: '4112'
                      }
                    ]
                  }
                ]
              },
              {
                text: '科室42',
                id: '42',
                col3: [
                  {
                    text: '科室421',
                    id: '421',
                    col4: [
                      {
                        text: '',
                        id: ''
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      cancelCallback () {
        this.isVisible = false
      },
      confirmCallback (data) {
        this.isVisible = false
        console.log(data)
      }
    },
    components: {
      'yz-select-picker': selectPicker
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .picker {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
