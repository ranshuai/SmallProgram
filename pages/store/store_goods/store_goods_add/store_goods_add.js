import WxValidate from '../../../../utils/wx_validate.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeInfo:{},
    array: [],

    index: 0,
    multiIndex: [0, 0, 0],
    multiOneArray: [
      {
        oneSpecId: 1,
        oneSpecName: '食品生鲜'
      },
      {
        oneSpecId: 2,
        oneSpecName: '家居家纺'
      },
      {
        oneSpecId: 3,
        oneSpecName: '酒水饮料'
      },
      {
        oneSpecId: 4,
        oneSpecName: '家具家装'
      }

    ],
    multiTwoArray: [
      {
        parentId: 1,
        list: [
          {
            oneSpecId: '1-1',
            oneSpecName: '速冻调理'
          },
          {
            oneSpecId: '1-2',
            oneSpecName: '调味速食'
          },
          {
            oneSpecId: '1-3',
            oneSpecName: '冻品冷饮'
          },
          {
            oneSpecId: '1-4',
            oneSpecName: '蔬菜蛋品'
          },
          {
            oneSpecId: '1-5',
            oneSpecName: '新鲜水果'
          },
          {
            oneSpecId: '1-6',
            oneSpecName: '米面粮油'
          },
          {
            oneSpecId: '1-7',
            oneSpecName: '休闲食品'
          },
          {
            oneSpecId: '1-8',
            oneSpecName: '海鲜水产'
          },
          {
            oneSpecId: '1-9',
            oneSpecName: '南北干货'
          },
          {
            oneSpecId: '1-10',
            oneSpecName: '饼干糕点'
          }
        ]
      },
      {
        parentId: 2,
        list: [
          {
            oneSpecId: '2-1',
            oneSpecName: '厨具锅具'
          },
          {
            oneSpecId: '2-2',
            oneSpecName: '餐具水具'
          },
          {
            oneSpecId: '2-3',
            oneSpecName: '家纺'
          },
          {
            oneSpecId: '2-4',
            oneSpecName: '家具'
          }
        ]
      },
      {
        parentId: 3,
        list: [
          {
            oneSpecId: '3-1',
            oneSpecName: '酒'
          },
          {
            oneSpecId: '3-2',
            oneSpecName: '茶'
          },
          {
            oneSpecId: '3-3',
            oneSpecName: '牛奶制品'
          },
          {
            oneSpecId: '3-4',
            oneSpecName: '饮料饮品'
          },
          {
            oneSpecId: '3-5',
            oneSpecName: '冲饮调冲'
          }
        ]
      },
      {
        parentId: 4,
        list: [
          {
            oneSpecId: '4-1',
            oneSpecName: '灯饰照明'
          },
          {
            oneSpecId: '4-2',
            oneSpecName: '厨房卫浴'
          },
          {
            oneSpecId: '4-3',
            oneSpecName: '五金工具'
          },
          {
            oneSpecId: '4-4',
            oneSpecName: '电工电料'
          },
          {
            oneSpecId: '4-5',
            oneSpecName: '墙地面材料'
          },
          {
            oneSpecId: '4-6',
            oneSpecName: '装饰材料'
          },
          {
            oneSpecId: '4-7',
            oneSpecName: '装修服务'
          },
          {
            oneSpecId: '4-8',
            oneSpecName: '卧室家具'
          },
          {
            oneSpecId: '4-9',
            oneSpecName: '客厅家具'
          },
          {
            oneSpecId: '4-10',
            oneSpecName: '儿童家具'
          }
        ]
      }
    ],
    multiThreeArray: [
      {
        parentId: '1-1',
        list: [
          {
            oneSpecId: '1-1-1',
            oneSpecName: '速冻蔬菜'
          },
          {
            oneSpecId: '1-1-2',
            oneSpecName: '速冻调料'
          },
          {
            oneSpecId: '1-1-3',
            oneSpecName: '速冻面点'
          },
          {
            oneSpecId: '1-1-4',
            oneSpecName: '火锅丸类'
          },
          {
            oneSpecId: '1-1-5',
            oneSpecName: '烤肠'
          }
        ]
      },
      {
        parentId: '1-2',
        list: [
          {
            oneSpecId: '1-2-1',
            oneSpecName: '酱菜'
          },
          {
            oneSpecId: '1-2-2',
            oneSpecName: '调味料'
          },
          {
            oneSpecId: '1-2-3',
            oneSpecName: '调味酱'
          },
          {
            oneSpecId: '1-2-4',
            oneSpecName: '酱油'
          },
          {
            oneSpecId: '1-2-5',
            oneSpecName: '花椒/八角'
          },
          {
            oneSpecId: '1-2-6',
            oneSpecName: '其他'
          },
          {
            oneSpecId: '1-2-7',
            oneSpecName: '火锅/香锅底料'
          },
          {
            oneSpecId: '1-2-8',
            oneSpecName: '糖'
          }
        ]
      },
      {
        parentId: '1-3',
        list: [
          {
            oneSpecId: '1-3-1',
            oneSpecName: '猪肉'
          },
          {
            oneSpecId: '1-3-2',
            oneSpecName: '家禽类'
          },
          {
            oneSpecId: '1-3-3',
            oneSpecName: '汤圆／元宵'
          },
          {
            oneSpecId: '1-3-4',
            oneSpecName: '冰棍雪糕'
          },
          {
            oneSpecId: '1-3-5',
            oneSpecName: '熟食腊肠'
          },
          {
            oneSpecId: '1-3-6',
            oneSpecName: '其他'
          },
          {
            oneSpecId: '1-3-7',
            oneSpecName: '水饺／混沌'
          },
          {
            oneSpecId: '1-3-8',
            oneSpecName: '牛羊肉'
          }
        ]
      },
      {
        parentId: '1-4',
        list: [
          {
            oneSpecId: '1-4-1',
            oneSpecName: '叶菜类'
          },
          {
            oneSpecId: '1-4-2',
            oneSpecName: '豆品'
          },
          {
            oneSpecId: '1-4-3',
            oneSpecName: '根茎类'
          },
          {
            oneSpecId: '1-4-4',
            oneSpecName: '鸡蛋'
          }
        ]
      },
      {
        parentId: '1-5',
        list: [
          {
            oneSpecId: '1-5-1',
            oneSpecName: '桃'
          },
          {
            oneSpecId: '1-5-2',
            oneSpecName: '柠檬'
          },
          {
            oneSpecId: '1-5-3',
            oneSpecName: '香蕉'
          },
          {
            oneSpecId: '1-5-4',
            oneSpecName: '橘子'
          },
          {
            oneSpecId: '1-5-5',
            oneSpecName: '圣女果'
          }, {
            oneSpecId: '1-5-6',
            oneSpecName: '菠萝／凤梨'
          },
          {
            oneSpecId: '1-5-7',
            oneSpecName: '火龙果'
          },
          {
            oneSpecId: '1-5-8',
            oneSpecName: '芒果'
          },
          {
            oneSpecId: '1-5-9',
            oneSpecName: '李子'
          },
          {
            oneSpecId: '1-5-10',
            oneSpecName: '荔枝'
          }, {
            oneSpecId: '1-5-11',
            oneSpecName: '苹果'
          },
          {
            oneSpecId: '1-5-12',
            oneSpecName: '梨'
          },
          {
            oneSpecId: '1-5-13',
            oneSpecName: '车厘子／樱桃'
          },
          {
            oneSpecId: '1-5-14',
            oneSpecName: '榴莲'
          },
          {
            oneSpecId: '1-5-15',
            oneSpecName: '柚子'
          },
          {
            oneSpecId: '1-5-16',
            oneSpecName: '猕猴桃'
          },
          {
            oneSpecId: '1-5-17',
            oneSpecName: '莲雾'
          },
          {
            oneSpecId: '1-5-18',
            oneSpecName: '杏'
          }
        ]
      },
      {
        parentId: '1-6',
        list: [
          {
            oneSpecId: '1-6-1',
            oneSpecName: '面粉'
          },
          {
            oneSpecId: '1-6-2',
            oneSpecName: '杂粮'
          },
          {
            oneSpecId: '1-6-3',
            oneSpecName: '方便食品'
          },
          {
            oneSpecId: '1-6-4',
            oneSpecName: '大米'
          },
          {
            oneSpecId: '1-6-5',
            oneSpecName: '有机食品'
          }, {
            oneSpecId: '1-6-6',
            oneSpecName: '食用油'
          },
          {
            oneSpecId: '1-6-7',
            oneSpecName: '挂面'
          }
        ]
      },
      {
        parentId: '1-7',
        list: [
          {
            oneSpecId: '1-7-1',
            oneSpecName: '其他'
          },
          {
            oneSpecId: '1-7-2',
            oneSpecName: '坚果炒货'
          },
          {
            oneSpecId: '1-7-3',
            oneSpecName: '红枣'
          },
          {
            oneSpecId: '1-7-4',
            oneSpecName: '肉干肉铺'
          },
          {
            oneSpecId: '1-7-5',
            oneSpecName: '果干蜜饯'
          }
        ]
      },
      {
        parentId: '1-8',
        list: [
          {
            oneSpecId: '1-8-1',
            oneSpecName: '其他'
          },
          {
            oneSpecId: '1-8-2',
            oneSpecName: '虾类'
          },
          {
            oneSpecId: '1-8-3',
            oneSpecName: '蟹类'
          },
          {
            oneSpecId: '1-8-4',
            oneSpecName: '海参'
          },
          {
            oneSpecId: '1-8-5',
            oneSpecName: '贝类'
          },
          {
            oneSpecId: '1-8-6',
            oneSpecName: '鱼类'
          },
          {
            oneSpecId: '1-8-7',
            oneSpecName: '特色水产'
          }
        ]
      },
      {
        parentId: '1-9',
        list: [
          {
            oneSpecId: '1-9-1',
            oneSpecName: '其他特产'
          },
          {
            oneSpecId: '1-9-2',
            oneSpecName: '枸杞'
          },
          {
            oneSpecId: '1-9-3',
            oneSpecName: '菌菇'
          },
          {
            oneSpecId: '1-9-4',
            oneSpecName: '莲子'
          },
          {
            oneSpecId: '1-9-5',
            oneSpecName: '枣子'
          },
          {
            oneSpecId: '1-9-6',
            oneSpecName: '桂圆'
          },
          {
            oneSpecId: '1-9-7',
            oneSpecName: '黑木耳'
          },
          {
            oneSpecId: '1-9-8',
            oneSpecName: '海产干货'
          },
          {
            oneSpecId: '1-9-9',
            oneSpecName: '北京特产'
          },
          {
            oneSpecId: '1-9-10',
            oneSpecName: '内蒙古特产'
          },
          {
            oneSpecId: '1-9-11',
            oneSpecName: '新疆特产'
          },
          {
            oneSpecId: '1-9-12',
            oneSpecName: '东北特产'
          },
          {
            oneSpecId: '1-9-13',
            oneSpecName: '云南特产'
          },
          {
            oneSpecId: '1-9-14',
            oneSpecName: '湖南特产'
          },
          {
            oneSpecId: '1-9-15',
            oneSpecName: '四川特产'
          },
          {
            oneSpecId: '1-9-16',
            oneSpecName: '福建特产'
          },
          {
            oneSpecId: '1-9-17',
            oneSpecName: '山西特产'
          }
        ]
      },
      {
        parentId: '1-10',
        list: [
          {
            oneSpecId: '1-10-1',
            oneSpecName: '月饼'
          },
          {
            oneSpecId: '1-10-2',
            oneSpecName: '饼干'
          },
          {
            oneSpecId: '1-10-3',
            oneSpecName: '传统糕点'
          },
          {
            oneSpecId: '1-10-4',
            oneSpecName: '西式糕点'
          },
          {
            oneSpecId: '1-10-5',
            oneSpecName: '曲奇'
          },
          {
            oneSpecId: '1-10-6',
            oneSpecName: '威化'
          },
          {
            oneSpecId: '1-10-7',
            oneSpecName: '派'
          },
          {
            oneSpecId: '1-10-8',
            oneSpecName: '沙琪玛'
          },
          {
            oneSpecId: '1-10-9',
            oneSpecName: '蛋卷'
          },
          {
            oneSpecId: '1-10-10',
            oneSpecName: '面包'
          },
          {
            oneSpecId: '1-10-11',
            oneSpecName: '其他'
          },
          {
            oneSpecId: '1-9-12',
            oneSpecName: '东北特产'
          }
        ]
      },

      {
        parentId: '2-1',
        list: [
          {
            oneSpecId: '2-1-1',
            oneSpecName: '厨房工具'
          },
          {
            oneSpecId: '2-1-2',
            oneSpecName: '其他'
          },
          {
            oneSpecId: '2-1-3',
            oneSpecName: '刀具剪刀'
          }
        ]
      },
      {
        parentId: '2-2',
        list: [
          {
            oneSpecId: '2-2-1',
            oneSpecName: '茶具'
          },
          {
            oneSpecId: '2-2-2',
            oneSpecName: '水具'
          },
          {
            oneSpecId: '2-2-3',
            oneSpecName: '餐具套装'
          }
        ]
      },
      {
        parentId: '2-3',
        list: [
          {
            oneSpecId: '2-3-1',
            oneSpecName: '被子'
          },
          {
            oneSpecId: '2-3-2',
            oneSpecName: '窗帘／纱'
          },
          {
            oneSpecId: '2-3-3',
            oneSpecName: '抱枕靠垫'
          },
          {
            oneSpecId: '2-3-4',
            oneSpecName: '沙发垫／斤'
          }
        ]
      },
      {
        parentId: '2-4',
        list: [
          {
            oneSpecId: '2-4-1',
            oneSpecName: '沙发'
          }
        ]
      },


      {
        parentId: '3-1',
        list: [
          {
            oneSpecId: '3-1-1',
            oneSpecName: '其他'
          },
          {
            oneSpecId: '3-1-2',
            oneSpecName: '啤酒'
          },
          {
            oneSpecId: '3-1-3',
            oneSpecName: '洋酒'
          },
          {
            oneSpecId: '3-1-4',
            oneSpecName: '白酒'
          },
          {
            oneSpecId: '3-1-5',
            oneSpecName: '红葡萄酒'
          }
        ]
      },
      {
        parentId: '3-2',
        list: [
          {
            oneSpecId: '3-2-1',
            oneSpecName: '冲调果汁'
          }
        ]
      },
      {
        parentId: '3-3',
        list: [
          {
            oneSpecId: '3-3-1',
            oneSpecName: '牛奶'
          },
          {
            oneSpecId: '2-3-2',
            oneSpecName: '窗帘／纱'
          }
        ]
      },
      {
        parentId: '3-4',
        list: [
          {
            oneSpecId: '3-4-1',
            oneSpecName: '其他'
          }
        ]
      },
      {
        parentId: '3-5',
        list: [
          {
            oneSpecId: '3-5-1',
            oneSpecName: '饮料'
          },
          {
            oneSpecId: '3-5-2',
            oneSpecName: '水'
          }
        ]
      },


      {
        parentId: '4-1',
        list: [
          {
            oneSpecId: '4-1-1',
            oneSpecName: '吊灯'
          },
          {
            oneSpecId: '4-1-2',
            oneSpecName: '台灯'
          },
          {
            oneSpecId: '4-1-3',
            oneSpecName: '筒灯／射灯'
          },
          {
            oneSpecId: '4-1-4',
            oneSpecName: 'LED灯'
          },
          {
            oneSpecId: '4-1-5',
            oneSpecName: '装饰灯'
          },
          {
            oneSpecId: '4-1-6',
            oneSpecName: '节能灯'
          },
          {
            oneSpecId: '4-1-7',
            oneSpecName: '手电筒'
          },
          {
            oneSpecId: '4-1-8',
            oneSpecName: '室外庭院灯'
          },
          {
            oneSpecId: '4-1-9',
            oneSpecName: '落地灯'
          },
          {
            oneSpecId: '4-1-10',
            oneSpecName: '其他'
          }
        ]
      },
      {
        parentId: '4-2',
        list: [
          {
            oneSpecId: '4-2-1',
            oneSpecName: '龙头'
          },
          {
            oneSpecId: '4-2-2',
            oneSpecName: '水槽'
          },
          {
            oneSpecId: '4-2-3',
            oneSpecName: '马桶'
          },
          {
            oneSpecId: '4-2-4',
            oneSpecName: '沐浴花洒'
          },
          {
            oneSpecId: '4-2-5',
            oneSpecName: '厨卫挂件'
          },
          {
            oneSpecId: '4-2-6',
            oneSpecName: '净水软水'
          },
          {
            oneSpecId: '4-2-7',
            oneSpecName: '智能马桶'
          },
          {
            oneSpecId: '4-2-8',
            oneSpecName: '浴室柜'
          },
          {
            oneSpecId: '4-2-9',
            oneSpecName: '橱柜'
          },
          {
            oneSpecId: '4-2-10',
            oneSpecName: '厨卫配件'
          },
          {
            oneSpecId: '4-2-11',
            oneSpecName: '陶瓷件组套'
          },
          {
            oneSpecId: '4-2-12',
            oneSpecName: '淋浴房'
          },
          {
            oneSpecId: '4-2-13',
            oneSpecName: '沐浴桶'
          },
          {
            oneSpecId: '4-2-14',
            oneSpecName: '浴缸'
          },
          {
            oneSpecId: '4-2-15',
            oneSpecName: '其他'
          },
        ]
      },
      {
        parentId: '4-3',
        list: [
          {
            oneSpecId: '4-3-1',
            oneSpecName: '家电五金'
          },
          {
            oneSpecId: '4-3-2',
            oneSpecName: '手动工具'
          },
          {
            oneSpecId: '4-3-3',
            oneSpecName: '电动工具'
          },
          {
            oneSpecId: '4-3-4',
            oneSpecName: '智能锁'
          },
          {
            oneSpecId: '4-3-5',
            oneSpecName: '测量工具'
          },
          {
            oneSpecId: '4-3-6',
            oneSpecName: '工具组套'
          },
          {
            oneSpecId: '4-3-7',
            oneSpecName: '劳防用品'
          },
          {
            oneSpecId: '4-3-8',
            oneSpecName: '机械锁'
          },
          {
            oneSpecId: '4-3-9',
            oneSpecName: '机电五金'
          },
          {
            oneSpecId: '4-3-10',
            oneSpecName: '气动工具'
          },
          {
            oneSpecId: '4-3-11',
            oneSpecName: '工具配件'
          },
          {
            oneSpecId: '4-3-12',
            oneSpecName: '其他'
          }
        ]
      },



      {
        parentId: '4-4',
        list: [
          {
            oneSpecId: '4-4-1',
            oneSpecName: '智能家具'
          },
          {
            oneSpecId: '4-4-2',
            oneSpecName: '接线板／插排'
          },
          {
            oneSpecId: '4-4-3',
            oneSpecName: '电线／电缆'
          },
          {
            oneSpecId: '4-4-4',
            oneSpecName: '配电箱／断路器'
          },
          {
            oneSpecId: '4-4-5',
            oneSpecName: '开关'
          },
          {
            oneSpecId: '4-4-6',
            oneSpecName: '电料配件'
          }
        ]
      },
      {
        parentId: '4-5',
        list: [
          {
            oneSpecId: '4-5-1',
            oneSpecName: '油漆／涂料'
          },
          {
            oneSpecId: '4-5-2',
            oneSpecName: '瓷砖'
          },
          {
            oneSpecId: '4-5-3',
            oneSpecName: '地板'
          },
          {
            oneSpecId: '4-5-4',
            oneSpecName: '壁纸'
          },
          {
            oneSpecId: '4-5-5',
            oneSpecName: '管材／管件'
          },
          {
            oneSpecId: '4-5-6',
            oneSpecName: '木材／板材'
          },
          {
            oneSpecId: '4-5-7',
            oneSpecName: '涂刷辅料／胶'
          },
          {
            oneSpecId: '4-5-8',
            oneSpecName: '其他'
          }
        ]
      },
      {
        parentId: '4-6',
        list: [
          {
            oneSpecId: '4-6-1',
            oneSpecName: '门'
          },
          {
            oneSpecId: '4-6-2',
            oneSpecName: '窗'
          },
          {
            oneSpecId: '4-6-3',
            oneSpecName: '浴霸'
          },
          {
            oneSpecId: '4-6-4',
            oneSpecName: '散热器'
          },
          {
            oneSpecId: '4-6-5',
            oneSpecName: '地暖'
          },
          {
            oneSpecId: '4-6-6',
            oneSpecName: '壁炉'
          },
          {
            oneSpecId: '4-6-7',
            oneSpecName: '吊顶'
          },
          {
            oneSpecId: '4-6-8',
            oneSpecName: '移门壁柜'
          },
          {
            oneSpecId: '4-6-9',
            oneSpecName: '园艺／工具'
          },
          {
            oneSpecId: '4-6-10',
            oneSpecName: '其他'
          }
        ]
      },
      {
        parentId: '4-7',
        list: [
          {
            oneSpecId: '4-7-1',
            oneSpecName: '安装维修'
          },
          {
            oneSpecId: '4-7-2',
            oneSpecName: '装修设计'
          },
          {
            oneSpecId: '4-7-3',
            oneSpecName: '整体全包'
          },
          {
            oneSpecId: '4-7-4',
            oneSpecName: '监理服务'
          },
          {
            oneSpecId: '4-7-5',
            oneSpecName: '局部装修'
          },
          {
            oneSpecId: '4-7-6',
            oneSpecName: '其他'
          }
        ]
      },
      {
        parentId: '4-8',
        list: [
          {
            oneSpecId: '4-8-1',
            oneSpecName: '床'
          },
          {
            oneSpecId: '4-8-2',
            oneSpecName: '单人床'
          },
          {
            oneSpecId: '4-8-3',
            oneSpecName: '双人床'
          },
          {
            oneSpecId: '4-8-4',
            oneSpecName: '大圆床'
          },
          {
            oneSpecId: '4-8-5',
            oneSpecName: '实木床'
          },
          {
            oneSpecId: '4-8-6',
            oneSpecName: '衣柜'
          },
          {
            oneSpecId: '4-8-7',
            oneSpecName: '床头柜'
          },
          {
            oneSpecId: '4-8-8',
            oneSpecName: '简易衣柜'
          },
          {
            oneSpecId: '4-8-9',
            oneSpecName: '五斗柜'
          },
          {
            oneSpecId: '4-8-10',
            oneSpecName: '梳妆台'
          },
          {
            oneSpecId: '4-8-11',
            oneSpecName: '穿衣镜'
          },
          {
            oneSpecId: '4-8-12',
            oneSpecName: '其他'
          }
        ]
      },
      {
        parentId: '4-9',
        list: [
          {
            oneSpecId: '4-9-1',
            oneSpecName: '沙发'
          },
          {
            oneSpecId: '4-9-2',
            oneSpecName: '鞋柜'
          },
          {
            oneSpecId: '4-9-3',
            oneSpecName: '电视柜'
          },
          {
            oneSpecId: '4-9-4',
            oneSpecName: '凳子'
          },
          {
            oneSpecId: '4-9-5',
            oneSpecName: '椅子'
          },
          {
            oneSpecId: '4-9-6',
            oneSpecName: '桌子'
          },
          {
            oneSpecId: '4-9-7',
            oneSpecName: '屏风'
          },
          {
            oneSpecId: '4-9-8',
            oneSpecName: '茶几'
          },
          {
            oneSpecId: '4-9-9',
            oneSpecName: '沙发床'
          },
          {
            oneSpecId: '4-9-10',
            oneSpecName: '衣帽架'
          },
          {
            oneSpecId: '4-9-11',
            oneSpecName: '酒柜'
          },
          {
            oneSpecId: '4-9-12',
            oneSpecName: '其他'
          }
        ]
      },
      {
        parentId: '4-10',
        list: [
          {
            oneSpecId: '4-10-1',
            oneSpecName: '儿童床'
          },
          {
            oneSpecId: '4-10-2',
            oneSpecName: '双层／多层床'
          },
          {
            oneSpecId: '4-10-3',
            oneSpecName: '儿童桌椅'
          },
          {
            oneSpecId: '4-10-4',
            oneSpecName: '儿童床垫'
          },
          {
            oneSpecId: '4-10-5',
            oneSpecName: '儿童衣柜'
          },
          {
            oneSpecId: '4-10-6',
            oneSpecName: '儿童书桌'
          },
          {
            oneSpecId: '4-10-7',
            oneSpecName: '儿童沙发'
          },
          {
            oneSpecId: '4-10-8',
            oneSpecName: '其他'
          }
        ]
      },

    ],
    multiArrayNew: [
      ['食品生鲜', '家居家纺', '酒水饮料', '家具家装'],
      ['速冻调理', '调味速食', '冻品冷饮', '蔬菜蛋品', '新鲜水果', '米面粮油', '海鲜水产', '南北干货', '饼干糕点'],
      ['速冻蔬菜', '速冻调料', '速冻面点', '火锅丸类', '烤肠']
    ],
    multiOneArrayNew: ['食品生鲜', '家居家纺', '酒水饮料', '家具家装'],
    multiTwoArrayNew: ['速冻调理', '调味速食', '冻品冷饮', '蔬菜蛋品', '新鲜水果', '米面粮油', '海鲜水产', '南北干货', '饼干糕点'],
    multiThreeArrayNew: ['速冻蔬菜', '速冻调料', '速冻面点', '火锅丸类', '烤肠'],
    multiOneId: 1,
    multiTwoId: 1,
    form: {
      specs: '',
      name: '',
      price: '',
      storeCount: '',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      storeInfo: JSON.parse(options.info)
    });

    this.initValidate();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  //时间选择器
  bindMultiPickerColumnChange: function (e) {
    this.multiArrayNewInit(e);
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },

  //分类数据初始化
  multiArrayNewInit: function (e) {
    //一级分类的数据不变
    if (e.detail.column == 0) {
      this.data.multiOneId = e.detail.value + 1;
    }
    //二级分类的数据根据一级分类的Id获取
    if (e.detail.column == 1) {
      this.data.multiTwoId = e.detail.value + 1;
    }
    //三级分类的数据根据一级分类的Id获取
    let multiTwoArrayNew = this.data.multiTwoArray.map(item => {
      if (item.parentId == this.data.multiOneId) {
        return item.list.map(_item => {
          return _item.oneSpecName
        });
      }
    })
    this.data.multiTwoArrayNew = multiTwoArrayNew.filter(item => item != undefined)[0] || [];
    let multiThreeArrayNew = this.data.multiThreeArray.map(item => {
      if (item.parentId == (this.data.multiOneId + '-' + this.data.multiTwoId)) {
        var arr = item.list.map(_item => {
          return _item.oneSpecName
        });
        if (arr) {
          return arr;
        }
      }
    })
    this.data.multiThreeArrayNew = multiThreeArrayNew.filter(item => item != undefined)[0] || [];
    console.log(this.data.multiOneArrayNew);
    console.log(this.data.multiTwoArrayNew);
    console.log(this.data.multiThreeArrayNew);
    this.setData({
      multiArrayNew: [this.data.multiOneArrayNew,
      this.data.multiTwoArrayNew,
      this.data.multiThreeArrayNew
      ],
      multiOneArrayNew: this.data.multiOneArrayNew,
      multiTwoArrayNew: this.data.multiTwoArrayNew,
      multiThreeArrayNew: this.data.multiThreeArrayNew
    });

  },
  // 验证规则
  initValidate: function () {
    // 验证字段的规则  :'',

    const rules = {
      specs: {
        required: true,
        maxlength: 11
      },
      name: {
        required: true,
        maxlength: 11
      },
      price: {
        required: true,
      },
      storeCount: {
        required: true,
        maxlength: 11
      }
    }

    //验证字段的提示信息
    const messages = {
      specs: {
        required: '规格是必填的'
      },
      name: {
        required: '商品名称是必填的'
      },
      price: {
        required: '商品价格是必填的'
      },
      storeCount: {
        required: '库存数量是必填的'
      },

    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
  },
  //提交
  submitForm(e) {
    const params = e.detail.value;

    let categoryKeyArr = this.data.multiIndex.map(item=>{
      return item + 1;
    });

    let categoryThreeKey = categoryKeyArr.join('-');
    let categoryTwoKeyArr = categoryKeyArr.splice(2,1);
    let categoryTwoneKey = categoryKeyArr.join('-');
    let categoryOneKeyArr = categoryKeyArr.splice(1, 1);
    let categoryOneKey = categoryKeyArr.join('-');
    Object.assign(params, { categoryThreeKey: categoryThreeKey, categoryTwoneKey: categoryTwoneKey, categoryOneKey: categoryOneKey},this.data.storeInfo)
    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      // this.showModal(error)
      console.log(error);
      wx.showToast({
        title: error.msg,
        icon: 'none'
      })
      return false
    }
    //提交信息
    this.saveData(params);
    // wx.showToast({
    //   title: '发布成功',
    //   icon: 'none'
    // })
  },
  saveData(params){
    console.log(params)

    wx.navigateTo({
      url: '/pages/store/store_goods/store_goods_add/store_goods_add2/store_goods_add2?info=' + JSON.stringify(params) ,
    })
  }
})