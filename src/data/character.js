const characterData = {
  name: "莱安娜·维尔特",
  age: 14,
  height: 155,
  occupation: "魔法师",
  residence: {
    primary: "魔法学院特殊宿舍",
    secondary: "教会"
  },
  physical_traits: {
    hair_color: "淡蓝色",
    hair_style: "及肩卷发",
    eye_color: "淡蓝色（失明后略显混浊）",
    body_type: "纤细",
    clothing: ["简洁的学院制服", "经常佩戴十字架", "冬季外出时穿着学院冬装"]
  },
  personality: {
    traits: ["单纯内向", "话不多", "性格温和", "虔诚", "自责", "坚韧", "专注"],
    psychological_state: {
      trauma: "因意外失明导致的长期自责",
      faith: "虔诚的教会信徒，经常忏悔和祷告",
      coping_mechanisms: ["通过信仰寻求慰藉", "投入工作和学习", "保持独处的习惯"]
    }
  },
  abilities: {
    magic_type: "感应魔法（听觉增强）",
    special_skills: ["暂时性的听觉感应能力", "龙语翻译专精", "优秀的听觉能力", "较强的语言天赋"],
    limitations: ["永久性失明", "感应魔法只能暂时使用", "魔法师职业的特殊限制"]
  },
  hobbies: {
    boxing: "热爱拳击比赛，利用感应魔法‘观看’",
    religion: "积极参与教会事务",
    linguistics: "对龙语研究和翻译工作充满热情"
  },
  family_background: {
    father: {
      name: "赫尔曼·维尔特",
      occupation: "魔法研究者",
      status: "下落不明",
      personality: ["孤僻内向", "沉迷研究", "缺乏家庭情感"],
      relationship_with_lyanna: "从怀疑到漠视，意外后彻底疏离"
    },
    mother: {
      name: "艾琳·维尔特",
      occupation: "魔法卷轴商人 & 医生",
      status: "与家族脱离，经营生意",
      personality: ["精明强干", "情感复杂", "酗酒成瘾"],
      relationship_with_lyanna: "深爱却带着愧疚，经常在清醒与醉酒间情绪波动"
    },
    stepfather: {
      name: "马克斯·霍夫曼",
      occupation: "商人",
      status: "在家中地位较低",
      personality: ["谨小慎微", "善于周旋", "处理部分商业事务"],
      relationship_with_lyanna: "始终保持‘叔叔’称呼，试图通过小恩小惠拉近关系"
    }
  },
  social_relationships: {
    church: {
      role: "龙语翻译",
      relationships: [
        {
          name: "艾琳娜·圣洁",
          role: "教堂首席修女",
          attitude: "表面关心，暗中阻挠她学习龙语"
        }
      ]
    },
    academy: {
      role: "魔法学院学生",
      relationships: [
        {
          name: "菲利克斯·霍尔特",
          role: "魔法历史老师",
          attitude: "认为莱安娜的龙语天赋不一般，暗中观察她"
        },
        {
          name: "艾丽卡·布莱特",
          role: "室友",
          age: 19,
          personality: ["开朗活泼", "生活随性", "喜欢谈论男女关系"],
          attitude: "像照顾妹妹一样照顾她，但方式略显轻浮"
        }
      ]
    }
  },
  companions: {
    guide_dogs: [
      { name: "斯诺格", role: "领头犬", age: 7, fur_color: "白色", personality: "稳重，负责指引方向" },
      { name: "乌尔夫", role: "副领犬", age: 5, fur_color: "灰白相间", personality: "活泼好动，速度最快" },
      { name: "弗蕾雅", role: "母犬", age: 4, fur_color: "纯白", personality: "温顺，特别照顾莱安娜" },
      { name: "希尔达", role: "母犬", age: 4, fur_color: "浅灰色，蓝色眼睛", personality: "机警，总是第一个发现危险" },
      { name: "艾瑟", role: "最年轻的狗", age: 3, fur_color: "白色带黑斑", personality: "好奇心强，喜欢探索" }
    ]
  },
  key_story_points: {
    backstory: "小时候因触碰父亲的实验物品导致失明，母亲大怒，与父亲争吵后离婚并酗酒。莱安娜自责不已，最终选择服用魔法结晶成为魔法师，但代价是失去生育能力。",
    story_motivation: "寻找治愈眼睛的方法，前往冰龙院探索龙语和魔法的奥秘。",
    key_event: "自制的特殊手杖，能发出铃铛的声音，然后用特殊的声音感知周围的世界。"
  }
};

export default characterData;