const cardText = [
  {
    "id": 1,
    "desc": "土味情话（赵处ver）",
    "buffText": "抽到该卡片后，己方所有被撩到的沈巍/居老师卡HP+3"
  },
  {
    "id": 2,
    "desc": "土味情话（沈教授ver）",
    "buffText": "抽到该卡片后，己方所有被撩到的赵云澜/北老师卡ATK+3"
  },
  {
    "id": 3,
    "desc": "北老师：“其实当时看了小说……有点小尴尬！”",
    "buffText": "抽到该卡片后，己方所有卡片纷纷点赞并ATK+2"
  },
  {
    "id": 4,
    "desc": "北老师：“你说的皇太子……是什么东西？（巍笑巍笑）”",
    "buffText": "抽到该卡片后，对方所有卡片纷纷移开视线并HP-2"
  },
  {
    "id": 5,
    "desc": "说好的兄弟同心一统大封呢？留守少年心里苦！",
    "buffText": "面面很生气，后果很严重！用该卡攻击对方哥哥/居老师卡时ATK+5！"
  },
  {
    "id": 6,
    "desc": "打不过就靠颜值碾压，我面面今天就要C位出道！",
    "buffText": "面面发动美色攻击，抽到该卡后对方除沈巍/居老师卡全员HP-2"
  },
  {
    "id": 7,
    "desc": "“赵云澜一看他贤良淑德就牙疼，老牛破车一样地按着老腰去卫生间洗漱了，把门摔得山响。”",
    "buffText": "抽到该卡片后，沈老师默默给己方所有赵云澜/北老师卡HP+5"
  },
  {
    "id": 8,
    "desc": "全剧最强alpha，没有之一",
    "buffText": "用该卡攻击对方时，除赵云澜/北老师以外的所有卡片ATK+5！"
  },
  {
    "id": 9,
    "desc": "“沈教授你……jia到我们特调处来如何？”",
    "buffText": "赵处嘴角微微一笑给自己加了个buff，该卡片被敌方攻击时ATK-3"
  },
  {
    "id": 10,
    "desc": "“见了你就百般讨好地跟着，赶都赶不走，见了我就先让我吃了一鞭，你说他可有多偏心。”",
    "buffText": "用该卡片攻击对方巍澜2人CP卡时ATK+5"
  },
  {
    "id": 11,
    "desc": "赵处长你是吃可爱多长大的吗？",
    "buffText": "对方的沈巍/居老师卡攻击这张卡时ATK为0（沈巍：舍不得！）"
  },
  {
    "id": 12,
    "desc": "邓林之阴初见昆仑君，惊鸿一瞥，乱我心曲。巍笔。",
    "buffText": "抽到该卡片后，昆仑君给己方所有卡片增加2点ATK"
  },
  {
    "id": 13,
    "desc": "不接受任何异议。我不听我不听我不听。",
    "buffText": "抽到该卡片后，对方赵云澜/北老师卡纷纷丧失战斗意志并ATK-2"
  },
  {
    "id": 14,
    "desc": "“赵云澜闻言，立刻扭头去瞪那边往这边看的人, 满不在乎地说：“看什么看，没见过帅哥搅基是不是？””",
    "buffText": "抽到该卡片后，被闪瞎狗眼的对方卡片纷纷ATK-2"
  },
  {
    "id": 15,
    "desc": "“那眼神极深极远，黑沉沉的，他的表情像是怀念，像是克制，含着某种呼之欲出的眷恋……又仿佛包含着某种深沉的痛苦。”",
    "buffText": "斩魂使搓了个大招，攻击对方卡片时ATK+5！"
  },
  {
    "id": 16,
    "desc": "澜受……是一定要澜受的！",
    "buffText": "抽到该卡片时，我方所有卡片纷纷送上祝福并ATK+3"
  },
  {
    "id": 17,
    "desc": "好的。不然呢？",
    "buffText": "居老师魅力无限，攻击对方任意卡片ATK+3"
  },
  {
    "id": 18,
    "desc": "“人家等你哟～～～～”",
    "buffText": "小澜孩发动撒娇技能，被敌方任意卡片攻击时ATK-3"
  },
  {
    "id": 19,
    "desc": "不要慌！斩魂使可能只是想带你大封观光一日游！",
    "buffText": "用该卡片攻击对方任意卡片ATK+5"
  },
  {
    "id": 20,
    "desc": "居老师：北老师的缺点？不存在的！",
    "buffText": "抽到该卡片时，受到鼓舞的我方卡片纷纷给自己加了3点HP"
  },
  {
    "id": 21,
    "desc": "居老师不喜欢这个表情包可能是因为攻受顺序写反了（并不）",
    "buffText": "抽到该卡片时，我方所有卡片纷纷笑而不语地ATK+2"
  },
  {
    "id": 22,
    "desc": "“我要吃干、煸、小、黄、鱼！”",
    "buffText": "抽到该卡片时，被猫咪萌到的我方卡片纷纷HP+2"
  },
  {
    "id": 23,
    "desc": "脱马前的沈教授到底逆了多少人CP呢？",
    "buffText": "弱小可怜都是装的。用该卡攻击对面任意卡片ATK+5"
  },
  {
    "id": 24,
    "desc": "给所有镇魂女鬼打Call！",
    "buffText": "来自沈教授的肯定！抽到该卡时我方所有卡片ATK+2"
  },
  {
    "id": 25,
    "desc": "嗯！",
    "buffText": "抽到该卡片时，我方所有巍澜2人CP卡HP+10"
  },
  {
    "id": 26,
    "desc": "“你看沈老师的胳膊，还露着一截纱布呢，咱领导是多禽兽啊”",
    "buffText": "赵处很无辜！用该卡攻击对方沈巍/居老师以外的卡ATK+2"
  },
  {
    "id": 27,
    "desc": "夜尊：“朱一面是谁？”",
    "buffText": "抽到该卡片时，我方所有鬼面卡ATK、HP+3"
  },
  {
    "id": 28,
    "desc": "拿这张照片做头像/桌面/待机图片的都来举个手～",
    "buffText": "抽到该卡片时，对方所有卡片纷纷表示抵挡不住沈教授的魅力并HP-2"
  },
  {
    "id": 29,
    "desc": "“别老师？”“不是别，是北……波A北！！”",
    "buffText": "抽到该卡时，我方所有巍澜2人CP卡ATK+2"
  },
  {
    "id": 30,
    "desc": "“赵云澜咬了咬牙，恨恨地说：“我他妈真恨不得用手铐把你锁在家里。””",
    "buffText": "赵处爱的告白！用该卡攻击对方沈巍/居老师以外的卡ATK+5"
  },
  {
    "id": 31,
    "desc": "“赵云澜摸了摸鼻子：“没怎么样, 上过床了，不过纯睡觉, 他脸皮太薄, 一直没让我碰。””",
    "buffText": "抽到该卡片时，我方所有沈巍/居老师卡ATK+5"
  },
  {
    "id": 32,
    "desc": "芒果有的，椰子也会有的！",
    "buffText": "受到兄弟情的鼓舞，我方所有卡片ATK+1"
  },
  {
    "id": 33,
    "desc": "讲真，做他沈巍的弟弟长大了不报社才有鬼！面面：可我就是鬼啊…… _(:3 」∠)_",
    "buffText": "用该卡片攻击对方巍澜2人CP卡时ATK+5"
  },
  {
    "id": 34,
    "desc": "烛九心里苦，烛九不说！",
    "buffText": "抽到该卡片后，我方所有卡片纷纷表示同情并HP+2"
  },
  {
    "id": 35,
    "desc": "“判官大人，我虽然出身卑下，为人不才，至今为止，倒也没听说过有什么是斩魂刀斩不得、切不动的。”",
    "buffText": "用该卡攻击对方时，除赵云澜/北老师以外的所有卡片ATK+5！"
  },
  {
    "id": 36,
    "desc": "“只见这假和尚突然转过身，猛地扑向自他们来了以后就安静地靠墙站在一边的沈巍：“大王要拿贫僧祭旗，贵妃救命！””",
    "buffText": "赵处表示这马屁拍得非常受用，但对方所有卡片纷纷表示闪瞎狗眼并HP-2"
  },
  {
    "id": 37,
    "desc": "“……赵云澜贱兮兮地对祝红压低了声音，说：“他是我家’内人’嘛。””",
    "buffText": "抽到该卡片后，对方除沈巍/居老师所有卡片默默地移开了视线并HP-3"
  },
  {
    "id": 38,
    "desc": "“赵云澜面无表情地说：“你不害我，你往死里折腾我。””",
    "buffText": "沈教授红着脸表示同意，并针对对方所有赵云澜/北老师卡默默加了5点ATK"
  },
  {
    "id": 39,
    "desc": "每天沉溺在新的表情包里自拔不能～",
    "buffText": "表情包是快乐的源泉！抽到该卡后我方所有卡片ATK+1"
  },
  {
    "id": 40,
    "desc": "80kg - 65kg = ？",
    "buffText": "什么时候可以看到居老师的8块腹肌呢……抽到该卡后我方所有巍澜2人CP卡ATK+3"
  },
  {
    "id": 41,
    "desc": "距离镇魂开播才过了一个月？！",
    "buffText": "抽到该卡片后，对方所有卡片受到暴击并HP-3"
  },
  {
    "id": 42,
    "desc": "“（赵云澜）用更加郁闷的眼神扫了一眼沈巍，总算憋出一句话：“我特么一个纯一，你就算……你、你就不能对我稍微客气点吗？””",
    "buffText": "抽到该卡片后，我方所有沈巍/居老师卡羞红了脸并ATK+10"
  },
  {
    "id": 43,
    "desc": "居老师：“你走开～～”（这句话我也就听了一千来遍吧嗯嗯）",
    "buffText": "抽到该卡片后，我方所有卡片露出了欣慰的笑容并HP+3"
  },
  {
    "id": 44,
    "desc": "欢迎加入3批大战（拍手）",
    "buffText": "抽到该卡片后，对方所有赵云澜/北老师卡大惊失色并ATK-3！"
  },
  {
    "id": 45,
    "desc": "“赵云澜差点让他给气乐了：“是啊，你倒是省得尴尬，净围观我尴尬是吧？看我办的那些破事特欢乐吗？””",
    "buffText": "抽到该卡片后，我方赵云澜/北老师以外的所有卡片表示喜闻乐见并HP+5"
  },
  {
    "id": 46,
    "desc": "“宝贝，你也太辣了！”",
    "buffText": "抽到该卡片后，我方所有沈巍/居老师卡表示并不记得这句台词但AKT+5"
  },
  {
    "id": 47,
    "desc": "“赵云澜：“好啊，跟你姓就跟你姓，来车震吗老公？你什么也不用做，只要躺倒享受就行了，我好好伺候你。””",
    "buffText": "用该卡片攻击对方沈巍/居老师卡ATK+1（然后就被就地正法了……）"
  },
  {
    "id": 48,
    "desc": "小鬼王：“好看，想抱你。”",
    "buffText": "抽到该卡片后，我方所有沈巍/居老师卡感受到了信息素并ATK+5"
  },
  {
    "id": 49,
    "desc": "听老婆的话跟党走",
    "buffText": "沈巍很生气，后果很严重，用该卡攻击对方面面卡ATK+10"
  },
  {
    "id": 50,
    "desc": "那什么，其实骨科也算社会主义兄弟情（逃走",
    "buffText": "抽到该卡时，我方所有赵云澜/北老师纷纷表示不能苟同并ATK+3"
  },
  {
    "id": 51,
    "desc": "赵云澜说，“过一辈子很好，但是我得振振夫纲。”  不作死就不会死，嗯。",
    "buffText": "用该卡片攻击对方卡片时ATK+5！但该buff对沈巍/居老师卡无效……"
  },
  {
    "id": 52,
    "desc": "“一句话福至心灵地到了嘴边，赵云澜笑眯眯地脱口说：“求包养，会暖床。””",
    "buffText": "抽到该卡时，我方所有巍澜2人CP卡ATK+3（面面：等等这不是我的卡吗）"
  },
  {
    "id": 53,
    "desc": "哈哈哈哈哈哈哈哈哈哈哈哈哈哈给敬业的演员大大点赞！",
    "buffText": "抽到该卡时，对方所有卡片大惊失色并ATK-2"
  },
  {
    "id": 54,
    "desc": "8只金角大王大战孙行者（误",
    "buffText": "8个面面站C位，攻击对方任意卡片ATK+4"
  },
  {
    "id": 55,
    "desc": "这是一个自带音频的表情包",
    "buffText": "抽到该卡时，对方所有沈巍/居老师卡不动声色的掉了2格HP"
  }
];

