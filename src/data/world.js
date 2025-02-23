const worldData = {
  story: {
    title: "雪山篇",
    setting: {
      region: "冰之领域",
      climate: "极寒，终年暴雪，温度常年低于零度",
      terrain: ["雪山", "冰川", "冻土", "极地森林"],
      notable_locations: [
        {
          name: "永冰之巅",
          description: "神秘的冰龙栖息地，终年被风雪笼罩，传说中蕴含极强魔力。",
          altitude: "8000米以上",
          inhabitants: ["冰龙", "龙语祭司", "少数修行者"]
        },
        {
          name: "冰龙院",
          description: "信仰冰龙的圣地，传承千年的预言与龙语典籍保存于此。",
          ruler: "神秘女祭司",
          population: 3000,
          architecture: "北欧石质修道院风格，融合冰雪雕刻工艺"
        },
        {
          name: "寒霜城",
          description: "北方王国的政治与经济中心，建立在魔力矿脉交汇处。",
          population: 500000,
          major_exports: ["魔法结晶", "寒铁", "兽皮"],
          architecture: "结合爱斯基摩与中欧乡村风格，坚固且适应寒冷气候"
        },
        {
          name: "白崖城",
          description: "位于海崖之上的港口要塞，北方王国对外贸易的主要通道。",
          main_industries: ["渔业", "贸易", "航海"],
          architecture: "高耸的石质城墙，配有坚固的防御工事"
        }
      ]
    },
    factions: [
      {
        name: "冰龙院",
        description: "冰龙瓦尔凯特的信仰中心，研究龙语与魔法结晶的学派。",
        leader: "神秘女祭司",
        philosophy: "通过龙语研究与魔法的结合，探索世界的真理",
        notable_members: ["寂松老人（前祭司）", "龙语学者"]
      },
      {
        name: "寒霜王国",
        description: "北方最强的王国，经济依赖魔法结晶的开采与交易。",
        ruler: "寒霜国王",
        military_strength: "寒霜骑士团、魔导部队",
        political_position: "与青之国度联盟，但与火龙部族敌对"
      },
      {
        name: "雪山的隐者",
        description: "远离文明的修行者与魔法研究者，他们隐居于冰川洞穴。",
        notable_members: ["寂松老人", "流浪的魔导士"]
      }
    ],
    magic_system: {
      magic_types: ["冰魔法", "龙语魔法", "符文魔法"],
      magic_source: "魔法结晶（冰龙的魔力凝聚）",
      limitations: [
        "人类无法直接使用魔力，必须借助结晶",
        "冰魔法需要适应寒冷环境，否则对使用者本身有害",
        "龙语魔法需要极高的语言理解力，并非所有人都能掌握"
      ]
    },
    story_progression: [
      {
        chapter: "序章",
        summary: "莱安娜得知冰龙的传说，决定踏上旅途。",
        main_events: ["回忆失明的过去", "听闻冰龙的召唤", "离开魔法学院"]
      },
      {
        chapter: "第一章",
        summary: "旅途中的生存挑战，莱安娜与雪山的考验。",
        main_events: ["遭遇暴风雪", "导盲犬帮助她前行", "冰龙的影子在远方出现"]
      },
      {
        chapter: "第二章",
        summary: "冰龙院的修行，莱安娜的魔法觉醒。",
        main_events: ["学习龙语的深层含义", "使用感应魔法增强能力", "与祭司讨论未来的试炼"]
      },
      {
        chapter: "最终章",
        summary: "莱安娜面临最终试炼，决定自己的命运。",
        main_events: ["面对冰龙的智慧考验", "揭开龙语封印", "做出最终选择"]
      }
    ]
  },
  world: {
    name: "寒霜世界",
    description: "五大神龙统治的世界，雪山篇为其北方核心区域。",
    major_regions: ["冰之领域", "青之国度", "炎之大地", "砂漠群岛", "黑龙的隐秘之地"],
    historical_events: [
      {
        name: "五龙的离去",
        description: "五大神龙厌倦战争，离开大陆前往群岛。",
        result: "世界各国建立新的信仰体系"
      },
      {
        name: "魔法结晶战争",
        description: "围绕魔法结晶的资源争夺战。",
        result: "冰龙院宣布中立，并成为魔法学术圣地"
      }
    ]
  }
};

export default worldData;