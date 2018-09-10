Page({

  /**
   * 页面的初始数据
   */
  data: {
    oneLevelNav: 0,
    // categoryWarpNav: ['食品生鲜', '家居家纺', '酒水饮料', '家具家装'], //导航
    categoryWarpNav: ['生鲜', '家居家纺', '饮料', '家具家装'], //导航
    multiTwoAndThreeArray: [
      {
        parentId: 1,
        list: [
          {
            oneSpecId: '1-1',
            oneSpecName: '速冻调理',
            list: [
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
                  },
                  {
                    oneSpecId: '1-1-6',
                    oneSpecName: '腌制菜'
                  },
                  {
                    oneSpecId: '1-1-7',
                    oneSpecName: '烧烤串类'
                  },
                  {
                    oneSpecId: '1-1-8',
                    oneSpecName: '其他'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '1-2',
            oneSpecName: '调味速食',
            list: [
              {
                parentId: '1-2',
                list: [
                  {
                    oneSpecId: '1-2-1',
                    oneSpecName: '醋'
                  },
                  {
                    oneSpecId: '1-2-2',
                    oneSpecName: '料酒'
                  },
                  {
                    oneSpecId: '1-2-3',
                    oneSpecName: '其他'
                  },
                  {
                    oneSpecId: '1-2-4',
                    oneSpecName: '火锅／香锅'
                  },
                  {
                    oneSpecId: '1-2-5',
                    oneSpecName: '糖'
                  },
                  {
                    oneSpecId: '1-2-6',
                    oneSpecName: '酱菜'
                  },
                  {
                    oneSpecId: '1-2-7',
                    oneSpecName: '调味料'
                  },
                  {
                    oneSpecId: '1-2-8',
                    oneSpecName: '调味酱'
                  },
                  {
                    oneSpecId: '1-2-9',
                    oneSpecName: '酱油'
                  },
                  {
                    oneSpecId: '1-2-10',
                    oneSpecName: '花椒／八角'
                  },
                  {
                    oneSpecId: '1-2-11',
                    oneSpecName: '蚝油'
                  },
                  {
                    oneSpecId: '1-2-12',
                    oneSpecName: '鱼露'
                  },
                  {
                    oneSpecId: '1-2-13',
                    oneSpecName: '花椒油'
                  },
                  {
                    oneSpecId: '1-2-14',
                    oneSpecName: '浓汤宝'
                  },
                  {
                    oneSpecId: '1-2-15',
                    oneSpecName: '盐'
                  },
                  {
                    oneSpecId: '1-2-16',
                    oneSpecName: '鸡精／味精'
                  },
                  {
                    oneSpecId: '1-2-17',
                    oneSpecName: '火锅蘸料'
                  },
                  {
                    oneSpecId: '1-2-18',
                    oneSpecName: '大酱'
                  },
                  {
                    oneSpecId: '1-2-19',
                    oneSpecName: '辣椒酱'
                  },
                  {
                    oneSpecId: '1-2-20',
                    oneSpecName: '香菇酱'
                  },
                  {
                    oneSpecId: '1-2-21',
                    oneSpecName: '花生酱'
                  },
                  {
                    oneSpecId: '1-2-22',
                    oneSpecName: '果酱'
                  },
                  {
                    oneSpecId: '1-2-23',
                    oneSpecName: '海鲜酱'
                  },
                  {
                    oneSpecId: '1-2-24',
                    oneSpecName: '沙拉／千岛酱'
                  },
                  {
                    oneSpecId: '1-2-25',
                    oneSpecName: '豆瓣酱'
                  },
                  {
                    oneSpecId: '1-2-26',
                    oneSpecName: '意面酱'
                  },
                  {
                    oneSpecId: '1-2-27',
                    oneSpecName: '咖喱'
                  },
                  {
                    oneSpecId: '1-2-28',
                    oneSpecName: '黄油'
                  },
                  {
                    oneSpecId: '1-2-29',
                    oneSpecName: '奶油'
                  },
                  {
                    oneSpecId: '1-2-30',
                    oneSpecName: '火腿肠'
                  },
                  {
                    oneSpecId: '1-2-31',
                    oneSpecName: '罐头'
                  },
                  {
                    oneSpecId: '1-2-32',
                    oneSpecName: '腊味制品'
                  }
                ]
              },
            ]
          },
          {
            oneSpecId: '1-3',
            oneSpecName: '冻品冷饮',
            list: [
              {
                parentId: '1-3',
                list: [
                  {
                    oneSpecId: '1-3-1',
                    oneSpecName: '其他'
                  },
                  {
                    oneSpecId: '1-3-2',
                    oneSpecName: '冷冻食品'
                  },
                  {
                    oneSpecId: '1-3-3',
                    oneSpecName: '牛羊肉'
                  },
                  {
                    oneSpecId: '1-3-4',
                    oneSpecName: '乳品'
                  },
                  {
                    oneSpecId: '1-3-5',
                    oneSpecName: '猪肉'
                  },
                  {
                    oneSpecId: '1-3-6',
                    oneSpecName: '票券'
                  },
                  {
                    oneSpecId: '1-3-7',
                    oneSpecName: '家禽类'
                  },
                  {
                    oneSpecId: '1-3-8',
                    oneSpecName: '奶酪黄油'
                  },
                  {
                    oneSpecId: '1-3-9',
                    oneSpecName: '冰淇淋'
                  },
                  {
                    oneSpecId: '1-3-10',
                    oneSpecName: '熟食腊肠'
                  },
                  {
                    oneSpecId: '1-3-11',
                    oneSpecName: '冰棍雪糕'
                  },
                  {
                    oneSpecId: '1-3-12',
                    oneSpecName: '水饺/馄饨'
                  },
                  {
                    oneSpecId: '1-3-13',
                    oneSpecName: '汤圆/元宵'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '1-4',
            oneSpecName: '蔬菜蛋品',
            list: [
              {
                parentId: '1-4',
                list: [
                  {
                    oneSpecId: '1-4-1',
                    oneSpecName: '葱姜蒜椒'
                  },
                  {
                    oneSpecId: '1-4-2',
                    oneSpecName: '鲜菌菇'
                  },
                  {
                    oneSpecId: '1-4-3',
                    oneSpecName: '茄果瓜类'
                  },
                  {
                    oneSpecId: '1-4-4',
                    oneSpecName: '鹌鹑蛋'
                  },
                  {
                    oneSpecId: '1-4-5',
                    oneSpecName: '松花蛋'
                  },
                  {
                    oneSpecId: '1-4-6',
                    oneSpecName: '咸蛋'
                  },
                  {
                    oneSpecId: '1-4-7',
                    oneSpecName: '喜蛋'
                  },
                  {
                    oneSpecId: '1-4-8',
                    oneSpecName: '其他'
                  },
                  {
                    oneSpecId: '1-4-9',
                    oneSpecName: '叶菜类'
                  },
                  {
                    oneSpecId: '1-4-10',
                    oneSpecName: '根茎类'
                  },
                  {
                    oneSpecId: '1-4-11',
                    oneSpecName: '豆品'
                  },
                  {
                    oneSpecId: '1-4-12',
                    oneSpecName: '鸡蛋'
                  },
                  {
                    oneSpecId: '1-4-13',
                    oneSpecName: '鸭蛋'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '1-5',
            oneSpecName: '新鲜水果',
            list: [
              {
                parentId: '1-5',
                list: [
                  {
                    oneSpecId: '1-5-1',
                    oneSpecName: '橙子'
                  },
                  {
                    oneSpecId: '1-5-2',
                    oneSpecName: '石榴'
                  },
                  {
                    oneSpecId: '1-5-3',
                    oneSpecName: '百香果'
                  },
                  {
                    oneSpecId: '1-5-4',
                    oneSpecName: '牛油果'
                  },
                  {
                    oneSpecId: '1-5-5',
                    oneSpecName: '山竹'
                  }, {
                    oneSpecId: '1-5-6',
                    oneSpecName: '西瓜'
                  },
                  {
                    oneSpecId: '1-5-7',
                    oneSpecName: '草莓'
                  },
                  {
                    oneSpecId: '1-5-8',
                    oneSpecName: '哈密瓜'
                  },
                  {
                    oneSpecId: '1-5-9',
                    oneSpecName: '龙眼'
                  },
                  {
                    oneSpecId: '1-5-10',
                    oneSpecName: '葡萄/提子'
                  }, {
                    oneSpecId: '1-5-11',
                    oneSpecName: '枣'
                  },
                  {
                    oneSpecId: '1-5-12',
                    oneSpecName: '椰子'
                  },
                  {
                    oneSpecId: '1-5-13',
                    oneSpecName: '毛丹/毛荔枝'
                  },
                  {
                    oneSpecId: '1-5-14',
                    oneSpecName: '蓝莓'
                  },
                  {
                    oneSpecId: '1-5-15',
                    oneSpecName: '进口水果'
                  },
                  {
                    oneSpecId: '1-5-16',
                    oneSpecName: '其他'
                  },
                  {
                    oneSpecId: '1-5-17',
                    oneSpecName: '苹果'
                  },
                  {
                    oneSpecId: '1-5-18',
                    oneSpecName: '香蕉'
                  },
                  {
                    oneSpecId: '1-5-19',
                    oneSpecName: '梨'
                  },
                  {
                    oneSpecId: '1-5-20',
                    oneSpecName: '桔子'
                  },
                  {
                    oneSpecId: '1-5-21',
                    oneSpecName: '柚子'
                  },
                  {
                    oneSpecId: '1-5-22',
                    oneSpecName: '圣女果'
                  },
                  {
                    oneSpecId: '1-5-23',
                    oneSpecName: '猕猴桃'
                  }, {
                    oneSpecId: '1-5-24',
                    oneSpecName: '菠萝/凤梨'
                  },
                  {
                    oneSpecId: '1-5-25',
                    oneSpecName: '车厘子/樱桃'
                  },
                  {
                    oneSpecId: '1-5-26',
                    oneSpecName: '火龙果'
                  },
                  {
                    oneSpecId: '1-5-27',
                    oneSpecName: '榴莲'
                  },
                  {
                    oneSpecId: '1-5-28',
                    oneSpecName: '芒果'
                  }, {
                    oneSpecId: '1-5-29',
                    oneSpecName: '莲雾'
                  },
                  {
                    oneSpecId: '1-5-30',
                    oneSpecName: '桃'
                  },
                  {
                    oneSpecId: '1-5-31',
                    oneSpecName: '李子'
                  },
                  {
                    oneSpecId: '1-5-32',
                    oneSpecName: '柠檬'
                  },
                  {
                    oneSpecId: '1-5-33',
                    oneSpecName: '荔枝'
                  },
                  {
                    oneSpecId: '1-5-34',
                    oneSpecName: '杏'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '1-6',
            oneSpecName: '米面粮油',
            list: [
              {
                parentId: '1-6',
                list: [
                  {
                    oneSpecId: '1-6-1',
                    oneSpecName: '有机食品'
                  },
                  {
                    oneSpecId: '1-6-2',
                    oneSpecName: '杂粮'
                  },
                  {
                    oneSpecId: '1-6-3',
                    oneSpecName: '大米'
                  },
                  {
                    oneSpecId: '1-6-4',
                    oneSpecName: '面粉'
                  },
                  {
                    oneSpecId: '1-6-5',
                    oneSpecName: '食用油'
                  },
                  {
                    oneSpecId: '1-6-6',
                    oneSpecName: '花生油'
                  },
                  {
                    oneSpecId: '1-6-7',
                    oneSpecName: '橄榄油'
                  },
                  {
                    oneSpecId: '1-6-8',
                    oneSpecName: '泰国香米'
                  },
                  {
                    oneSpecId: '1-6-9',
                    oneSpecName: '"粉丝'
                  },
                  {
                    oneSpecId: '1-6-10',
                    oneSpecName: '葵花籽油'
                  },
                  {
                    oneSpecId: '1-6-11',
                    oneSpecName: '其他'
                  },
                  {
                    oneSpecId: '1-6-12',
                    oneSpecName: '方便食品'
                  },
                  {
                    oneSpecId: '1-6-13',
                    oneSpecName: '挂面'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '1-7',
            oneSpecName: '休闲食品',
            list: [
              {
                parentId: '1-7',
                list: [
                  {
                    oneSpecId: '1-7-1',
                    oneSpecName: '膨化食品'
                  },
                  {
                    oneSpecId: '1-7-2',
                    oneSpecName: '糖果/巧克力'
                  },
                  {
                    oneSpecId: '1-7-3',
                    oneSpecName: '布丁果冻'
                  },
                  {
                    oneSpecId: '1-7-4',
                    oneSpecName: '口香糖'
                  },
                  {
                    oneSpecId: '1-7-5',
                    oneSpecName: '龟苓膏'
                  },
                  {
                    oneSpecId: '1-7-6',
                    oneSpecName: '豆制品'
                  },
                  {
                    oneSpecId: '1-7-7',
                    oneSpecName: '其他'
                  },
                  {
                    oneSpecId: '1-7-8',
                    oneSpecName: '坚果炒货'
                  },
                  {
                    oneSpecId: '1-7-9',
                    oneSpecName: '果干蜜饯'
                  },
                  {
                    oneSpecId: '1-7-10',
                    oneSpecName: '肉干肉脯'
                  },
                  {
                    oneSpecId: '1-7-11',
                    oneSpecName: '红枣'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '1-8',
            oneSpecName: '海鲜水产',
            list: [
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
                    oneSpecName: '贝类'
                  },
                  {
                    oneSpecId: '1-8-5',
                    oneSpecName: '鱼类'
                  },
                  {
                    oneSpecId: '1-8-6',
                    oneSpecName: '海参'
                  },
                  {
                    oneSpecId: '1-8-7',
                    oneSpecName: '特色水产'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '1-9',
            oneSpecName: '南北干货',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '1-10',
            oneSpecName: '饼干糕点',
            list: [
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
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        parentId: 2,
        list: [
          {
            oneSpecId: '2-1',
            oneSpecName: '厨具锅具',
            list: [
              {
                parentId: '2-1',
                list: [
                  {
                    oneSpecId: '2-1-1',
                    oneSpecName: '厨房工具'
                  },
                  {
                    oneSpecId: '2-1-2',
                    oneSpecName: '刀具剪刀'
                  },
                  {
                    oneSpecId: '2-1-3',
                    oneSpecName: '其他'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '2-2',
            oneSpecName: '餐具水具',
            list: [
              {
                parentId: '2-2',
                list: [
                  {
                    oneSpecId: '2-2-1',
                    oneSpecName: '餐具套装'
                  },
                  {
                    oneSpecId: '2-2-2',
                    oneSpecName: '水具'
                  },
                  {
                    oneSpecId: '2-2-3',
                    oneSpecName: '茶具'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '2-3',
            oneSpecName: '家纺',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '2-4',
            oneSpecName: '家具',
            list: [
              {
                parentId: '2-4',
                list: [
                  {
                    oneSpecId: '2-4-1',
                    oneSpecName: '沙发'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        parentId: 3,
        list: [
          {
            oneSpecId: '3-1',
            oneSpecName: '酒',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '3-2',
            oneSpecName: '茶',
            list: [
              {
                parentId: '3-2',
                list: [
                  {
                    oneSpecId: '3-2-1',
                    oneSpecName: '冲调果汁'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '3-3',
            oneSpecName: '牛奶制品',
            list: [
              {
                parentId: '3-3',
                list: [
                  {
                    oneSpecId: '3-3-1',
                    oneSpecName: '牛奶'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '3-4',
            oneSpecName: '饮料饮品',
            list: [
              {
                parentId: '3-4',
                list: [
                  {
                    oneSpecId: '3-4-1',
                    oneSpecName: '其他'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '3-5',
            oneSpecName: '冲饮调冲',
            list: [
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
              }
            ]
          }
        ]
      },
      {
        parentId: 4,
        list: [
          {
            oneSpecId: '4-1',
            oneSpecName: '灯饰照明',
            list: [
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
                    oneSpecName: '氛围照明'
                  },
                  {
                    oneSpecId: '4-1-9',
                    oneSpecName: '室外/庭院灯'
                  },
                  {
                    oneSpecId: '4-1-10',
                    oneSpecName: '落地灯'
                  },
                  {
                    oneSpecId: '4-1-11',
                    oneSpecName: '其他'
                  }
                ]
              }
            ]
          },
          {
            oneSpecId: '4-2',
            oneSpecName: '厨房卫浴',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '4-3',
            oneSpecName: '五金工具',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '4-4',
            oneSpecName: '电工电料',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '4-5',
            oneSpecName: '墙地面材料',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '4-6',
            oneSpecName: '装饰材料',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '4-7',
            oneSpecName: '装修服务',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '4-8',
            oneSpecName: '卧室家具',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '4-9',
            oneSpecName: '客厅家具',
            list: [
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
              }
            ]
          },
          {
            oneSpecId: '4-10',
            oneSpecName: '儿童家具',
            list: [
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
              }
            ]
          }
        ]
      }
    ],
    inputValue: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  oneLevelNavClick(ev) {
    this.setData({
      oneLevelNav: ev.currentTarget.dataset.info
    });
  },
  goToGoodsList(ev) {
    let json = {
      categoryThreeKey: ev.currentTarget.dataset.categoryid
    }
    wx.navigateTo({
      url: '/pages/goods_list/goods_list?json=' + JSON.stringify(json)
    })

  },
  searchGoods() {
    let json = {
      keywords:this.data.inputValue
    }
    wx.navigateTo({
      url: '/pages/goods_list/goods_list?json=' + JSON.stringify(json)
    })
  },
  bindKeyInput(e){
    this.setData({
      inputValue: e.detail.value
    })
  }
})