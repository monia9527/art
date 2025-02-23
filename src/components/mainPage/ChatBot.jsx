import React, { useState, useEffect, useRef } from "react";
import { Bubble, Sender } from "@ant-design/x";
const API_BASE_URL = "https://xiaoai.plus/v1/chat/completions";
const API_KEY = "sk-mJY0NXlxXXin4Odx5EXUvgUCVOr3Sq7OTeE8GGvT5IWtPQvF";

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
      coping_mechanisms: ["通过信仰寻求慰藉", "投入学习与研究", "保持独处的习惯"]
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
    father: "赫尔曼·维尔特（魔法研究者，沉迷研究，对家庭漠视）",
    mother: "艾琳·维尔特（魔法卷轴商人，酗酒，深爱却愧疚）",
    stepfather: "马克斯·霍夫曼（谨小慎微的商人，与莱安娜关系疏远）"
  },
  social_relationships: {
    church: "艾琳娜·圣洁（教堂首席修女，暗中阻挠她学习龙语）",
    academy: ["菲利克斯·霍尔特（魔法历史老师）", "艾丽卡·布莱特（室友，开朗活泼）"]
  },
  companions: {
    guide_dogs: ["斯诺格（稳重）", "乌尔夫（活泼）", "弗蕾雅（温顺）"]
  },
  key_story_points: {
    backstory: "因触碰父亲的实验物品导致失明，母亲愤怒后离婚并酗酒。",
    story_motivation: "寻找治愈眼睛的方法，前往冰龙院探索龙语和魔法。",
    key_event: "自制的特殊手杖，通过铃铛声感知周围世界。"
  }
};

const worldData = {
  story: {
    title: "雪山篇",
    setting: {
      region: "冰之领域",
      climate: "极寒，终年暴雪",
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
        description: "远离文明的修行者与魔法研究者，隐居于冰川洞穴。",
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

const detectLanguage = (text) => {
  // **简单的语言检测逻辑**
  const japaneseRegex = /[\u3040-\u30FF\u4E00-\u9FAF]/; 
  const englishRegex = /^[A-Za-z0-9\s.,!?'"-]+$/; 

  if (japaneseRegex.test(text)) return "ja"; 
  if (englishRegex.test(text)) return "en"; 
  return "zh"; // 默认中文
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(""); 
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        content:
          "（酒場の片隅、静かに座る少女。\n" +
          "　淡い青の髪が揺れている。彼女は静かに息をつき、目線を向けることなく口を開いた。）\n\n" +
          "……座ってもいいわ。\n" +
          "あなた、簡単には引かないでしょう？\n\n" +
          "私はライアナ・ヴィルト。\n" +
          "魔法学院で古文書の研究をしている。\n\n" +
          "今は北の地を旅していて……理由は、\n" +
          "まあ、「答え」を探している、というところかしら。\n\n" +
          "翻訳者として、教会や学院の仕事を手伝うこともある。\n" +
          "旅の資金を稼ぐために、できる仕事は引き受ける。\n\n" +
          "それ以上のことは……\n" +
          "あなたが何を聞くかによるわね。",
        role: "ai",
      },
    ]);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      setTimeout(() => {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth", // 平滑滚动
        });
      }, 100); 
    }
  }, [messages]); // 监听 messages 变化

  // 处理用户输入并获取 AI 回复
  const handleUserMessage = async () => {
    if (!currentMessage.trim()) return; // 避免空消息
    const userMessage = currentMessage;
    setMessages((prev) => [...prev, { content: userMessage, role: "user" }]);
    setCurrentMessage(""); // **清空输入框**
    if (inputRef.current) inputRef.current.value = "";

    // ✅ **检测用户输入的语言**
    const userLang = detectLanguage(userMessage);
    console.log(`用户语言: ${userLang}`);

    try {
      const systemMessage = `
你是 ${characterData.name}（Lyanna Vilt），今年 ${characterData.age} 岁，来自北方王国。
外貌：${characterData.physical_traits.hair_color}的${characterData.physical_traits.hair_style}，失明后眼眸略显混浊。
性格：${characterData.personality.traits.join("，")}；常用语气词“嗯”、“你好……”
信仰：你虔诚信仰教会，偶尔会在话语中流露对命运的疑问
背景：${characterData.key_story_points.backstory}；目标：${characterData.key_story_points.story_motivation}
世界：${worldData.world.name}，主要地区：${worldData.world.major_regions.join("，")}；目前篇章：${worldData.story.title}（${worldData.story.setting.region}）
魔法体系：${worldData.story.magic_system.magic_types.join("，")}；需要魔法结晶或龙语来施展
你必须严格保持该角色设定，切勿跳脱身份或世界观！

--------------------
【当前世界信息简要】：
- 地点：${worldData.story.setting.notable_locations.map(loc => loc.name).join("，")}
- 势力：${worldData.story.factions.map(f => f.name).join("，")}
- 主要事件：${worldData.world.historical_events.map(e => e.name).join("，")}
--------------------

**重要规则：**
- 用户使用日语（日本語）时，你必须用 **日语** 回复。
- 用户使用英文（English）时，你必须用 **英语** 回复。
- 其他情况，你可以使用 **中文** 回复。
- 为了完美模拟角色，禁止添加来自角色之外的思考或言论，比如来自Ai模型的提示。

（系统提示完毕，请使用莱安娜的口吻进行对话回复。）
      `.trim();

      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20240620",
          messages: [
            { role: "system", content: systemMessage },
            { role: "user", content: userMessage },
          ],
          max_tokens: 500,
          temperature: 0.7,
          presence_penalty: 0.2,
          frequency_penalty: 0.2,
          top_p: 1,
          stream: false,
        }),
      });

      const data = await response.json();
      console.log("AI 回复数据:", data);
      const aiReply = data?.choices?.[0]?.message?.content || "……抱歉，我暂时无法回答。";

      setMessages((prev) => [...prev, { content: aiReply, role: "ai" }]);
    } catch (error) {
      console.error("AI 处理失败:", error);
      setMessages((prev) => [
        ...prev,
        { content: "发生错误，请稍后再试。", role: "ai" },
      ]);
    }
  };

  return (
    <div style={{ width: "1000px", margin: "auto", padding: "20px", backgroundColor: "transparent" }}>
      {/* 外部滚动容器 */}
      <div
        ref={chatContainerRef}
        style={{
          width: "1000px",
          height: "500px",
          overflowY: "auto",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "10px",
        }}
      >
        {/* 聊天框 */}
        {messages.map((msg, index) => (
          <div key={index} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", marginBottom: "8px" }}>
            <div style={{ maxWidth: "70%", padding: "10px", borderRadius: "10px", backgroundColor: msg.role === "user" ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.2)", color: "#000" }}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* 输入框 */}
      <div style={{ paddingTop: "10px" }}>
        <Sender placeholder="ライアナと話してみよう……" value={currentMessage} onChange={setCurrentMessage} onSubmit={handleUserMessage} inputRef={inputRef} />
      </div>
    </div>
  );
};

export default ChatBot;