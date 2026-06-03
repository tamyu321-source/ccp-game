const STORAGE_KEY = "archive-fog-save-v1";

const TEXT = {
  tw: {
    title: "檔案迷霧",
    subtitle: "解密詞條，連破關卡",
    startTitle: "檔案迷霧",
    startCopy: "從直白黑歷史開始，逐步進入諧音、隱喻和高干擾檔案。",
    start: "開始",
    continue: "繼續",
    reset: "重置進度",
    level: "關卡",
    chapter: "章節",
    time: "時間",
    score: "分數",
    streak: "連破",
    mistakes: "失誤",
    clue: "線索",
    target: "復原詞條",
    tokens: "檔案碎片",
    hint: "提示",
    shuffle: "重排",
    skip: "跳過",
    next: "下一關",
    retry: "重試",
    archive: "檔案列",
    solved: "已解密",
    remaining: "剩餘",
    complete: "解密完成",
    failed: "檔案封存",
    failedCopy: "時間歸零，這份檔案需要重新拆解。",
    answer: "答案",
    stars: "星級",
    sound: "音量",
    muted: "靜音",
    unlocked: "可遊玩詞條",
    endless: "循環檔案",
    noHints: "提示耗盡",
    mode: "模式",
    historyTag: "年代",
    campaignDone: "主線已跑完，進入循環檔案。",
    modeNames: {
      blackout: "遮黑復原",
      scramble: "碎片拼接",
      pressure: "高壓審讀",
      echo: "暗語回聲",
      purge: "肅清干擾"
    },
    categories: {
      ccp: "中共檔案",
      ccpMetaphor: "中共暗語",
      soviet: "蘇共檔案",
      northKorea: "朝鮮黑話",
      taiwan: "台灣政治",
      us: "美國政治"
    },
    contextLabel: "背景脈絡"
  },
  cn: {
    title: "档案迷雾",
    subtitle: "解密词条，连破关卡",
    startTitle: "档案迷雾",
    startCopy: "从直白黑历史开始，逐步进入谐音、隐喻和高干扰档案。",
    start: "开始",
    continue: "继续",
    reset: "重置进度",
    level: "关卡",
    chapter: "章节",
    time: "时间",
    score: "分数",
    streak: "连破",
    mistakes: "失误",
    clue: "线索",
    target: "复原词条",
    tokens: "档案碎片",
    hint: "提示",
    shuffle: "重排",
    skip: "跳过",
    next: "下一关",
    retry: "重试",
    archive: "档案列",
    solved: "已解密",
    remaining: "剩余",
    complete: "解密完成",
    failed: "档案封存",
    failedCopy: "时间归零，这份档案需要重新拆解。",
    answer: "答案",
    stars: "星级",
    sound: "音量",
    muted: "静音",
    unlocked: "可游玩词条",
    endless: "循环档案",
    noHints: "提示耗尽",
    mode: "模式",
    historyTag: "年代",
    campaignDone: "主线已跑完，进入循环档案。",
    modeNames: {
      blackout: "遮黑复原",
      scramble: "碎片拼接",
      pressure: "高压审读",
      echo: "暗语回声",
      purge: "肃清干扰"
    },
    categories: {
      ccp: "中共档案",
      ccpMetaphor: "中共暗语",
      soviet: "苏共档案",
      northKorea: "朝鲜黑话",
      taiwan: "台湾政治",
      us: "美国政治"
    },
    contextLabel: "背景脉络"
  },
  en: {
    title: "Archive Fog",
    subtitle: "Restore entries, break levels",
    startTitle: "Archive Fog",
    startCopy: "Start with direct historical records, then move into puns, metaphors, and dense decoys.",
    start: "Start",
    continue: "Continue",
    reset: "Reset",
    level: "Level",
    chapter: "Chapter",
    time: "Time",
    score: "Score",
    streak: "Streak",
    mistakes: "Misses",
    clue: "Clue",
    target: "Restored Entry",
    tokens: "Fragments",
    hint: "Hint",
    shuffle: "Shuffle",
    skip: "Skip",
    next: "Next",
    retry: "Retry",
    archive: "Archive Queue",
    solved: "Solved",
    remaining: "Left",
    complete: "Decoded",
    failed: "Sealed",
    failedCopy: "The timer hit zero. Decode this file again.",
    answer: "Answer",
    stars: "Stars",
    sound: "Volume",
    muted: "Muted",
    unlocked: "Playable entries",
    endless: "Endless archive",
    noHints: "No hints",
    mode: "Mode",
    historyTag: "Era",
    campaignDone: "Campaign cleared. Endless archive is running.",
    modeNames: {
      blackout: "Blackout Restore",
      scramble: "Fragment Stitch",
      pressure: "Pressure Read",
      echo: "Cipher Echo",
      purge: "Purge Decoys"
    },
    categories: {
      ccp: "CCP Archive",
      ccpMetaphor: "CCP Cipher",
      soviet: "Soviet Archive",
      northKorea: "North Korea Slang",
      taiwan: "Taiwan Politics",
      us: "US Politics"
    },
    contextLabel: "Context"
  }
};

const ROUTE_COPY = {
  tw: {
    route: "\u8def\u7dda",
    time: "\u6642\u9593\u9806\u5e8f",
    difficulty: "\u96e3\u5ea6\u9806\u5e8f",
    timeDesc: "\u6309\u5e74\u4ee3\u63a8\u9032\uff0c\u95dc\u5361\u58d3\u529b\u96a8\u6a5f",
    difficultyDesc: "\u6309\u8a5e\u689d\u96e3\u5ea6\u63a8\u9032\uff0c\u95dc\u5361\u58d3\u529b\u96a8\u6a5f"
  },
  cn: {
    route: "\u8def\u7ebf",
    time: "\u65f6\u95f4\u987a\u5e8f",
    difficulty: "\u96be\u5ea6\u987a\u5e8f",
    timeDesc: "\u6309\u5e74\u4ee3\u63a8\u8fdb\uff0c\u5173\u5361\u538b\u529b\u968f\u673a",
    difficultyDesc: "\u6309\u8bcd\u6761\u96be\u5ea6\u63a8\u8fdb\uff0c\u5173\u5361\u538b\u529b\u968f\u673a"
  },
  en: {
    route: "Route",
    time: "Timeline",
    difficulty: "Difficulty",
    timeDesc: "Entries follow eras; challenge pressure is randomized",
    difficultyDesc: "Entries follow base difficulty; challenge pressure is randomized"
  }
};

function entry(tw, cn, en, clueTw, clueCn, clueEn, difficulty, category, year = "", contextTw = "", contextCn = "", contextEn = "") {
  return { tw, cn, en, clueTw, clueCn, clueEn, difficulty, category, year, contextTw, contextCn, contextEn };
}

const WORD_BANK = [
  entry("文化大革命", "文化大革命", "Cultural Revolution", "十年浩劫的招牌詞，學校、家庭與社會秩序一起被捲入政治狂熱。", "十年浩劫的招牌词，学校、家庭与社会秩序一起被卷入政治狂热。", "A decade of political frenzy that swallowed schools, families, and social order.", 1, "ccp", "1966-1976"),
  entry("三年大饑荒", "三年大饥荒", "Great Famine", "糧倉報喜、餐桌沉默，人口代價被長期改寫。", "粮仓报喜、餐桌沉默，人口代价被长期改写。", "Granaries reported plenty while dinner tables told a different story.", 1, "ccp", "1959-1961"),
  entry("大躍進", "大跃进", "Great Leap Forward", "後院鋼爐與浮誇數字一起奔跑，結果不是鋼鐵神話。", "后院钢炉与浮夸数字一起奔跑，结果不是钢铁神话。", "Backyard furnaces and inflated quotas raced toward disaster.", 1, "ccp", "1958"),
  entry("人民公社", "人民公社", "People Commune", "把飯桌、田地和口號綁在一起的大型集體實驗。", "把饭桌、田地和口号绑在一起的大型集体实验。", "A mass collectivization experiment binding fields, slogans, and dining halls.", 1, "ccp", "1958"),
  entry("反右運動", "反右运动", "Anti Rightist Campaign", "先請人說話，再把說話的人列進名冊。", "先请人说话，再把说话的人列进名册。", "People were invited to speak, then punished for what they said.", 1, "ccp", "1957"),
  entry("百花齊放", "百花齐放", "Hundred Flowers", "聽起來像春天，結局卻像點名冊。", "听起来像春天，结局却像点名册。", "It sounded like spring, then turned into a list of targets.", 1, "ccp", "1956-1957"),
  entry("破四舊", "破四旧", "Destroy Four Olds", "舊思想、舊文化、舊風俗、舊習慣被少年革命熱拖去砸碎。", "旧思想、旧文化、旧风俗、旧习惯被少年革命热拖去砸碎。", "Old ideas, culture, customs, and habits were dragged into revolutionary smashing.", 1, "ccp", "1966"),
  entry("大字報", "大字报", "Big Character Posters", "牆上文字變成政治武器，墨水比法律更快。", "墙上文字变成政治武器，墨水比法律更快。", "Wall text became a political weapon, faster than law.", 1, "ccp", "1960s"),
  entry("上山下鄉", "上山下乡", "Down to the Countryside", "城市青年被送往田野，青春成了政策燃料。", "城市青年被送往田野，青春成了政策燃料。", "Urban youth were sent to the countryside as policy fuel.", 1, "ccp", "1968"),
  entry("知識青年", "知识青年", "Educated Youth", "課本還沒合上，行李已經被送到農村。", "课本还没合上，行李已经被送到农村。", "Schoolbooks closed and bags were packed for the countryside.", 1, "ccp", "1960s-1970s"),
  entry("林彪事件", "林彪事件", "Lin Biao Incident", "接班人突然墜成禁忌，官方敘事急轉彎。", "接班人突然坠成禁忌，官方叙事急转弯。", "A named successor fell from the sky into official taboo.", 2, "ccp", "1971"),
  entry("四人幫", "四人帮", "Gang of Four", "文革末章裡被推到聚光燈下的政治替罪符。", "文革末章里被推到聚光灯下的政治替罪符。", "The political scapegoat spotlight at the end of the Cultural Revolution.", 2, "ccp", "1976"),
  entry("批林批孔", "批林批孔", "Criticize Lin and Confucius", "古人與死人被綁進同一場政治作業。", "古人与死人被绑进同一场政治作业。", "An ancient thinker and a dead marshal were tied into one campaign.", 2, "ccp", "1973"),
  entry("樣板戲", "样板戏", "Model Operas", "舞台只剩標準答案，唱腔也要排隊表態。", "舞台只剩标准答案，唱腔也要排队表态。", "The stage kept only approved answers, even the arias lined up.", 2, "ccp", "1960s"),
  entry("計劃生育", "计划生育", "Family Planning", "國家把人口寫進表格，也把家庭寫進罰單。", "国家把人口写进表格，也把家庭写进罚单。", "Population became a spreadsheet, and families became fines.", 1, "ccp", "1980s"),
  entry("一孩政策", "一孩政策", "One Child Policy", "一句政策進了產房，幾代人的家庭結構被改寫。", "一句政策进了产房，几代人的家庭结构被改写。", "One policy entered maternity wards and rewrote family structures.", 1, "ccp", "1980-2015"),
  entry("六四事件", "六四事件", "June Fourth", "廣場、學生、戒嚴與被刪掉的日曆。", "广场、学生、戒严与被删掉的日历。", "A square, students, martial law, and a date erased from calendars.", 1, "ccp", "1989"),
  entry("8964", "8964", "Eight Nine Six Four", "四個數字比很多長篇文字更容易觸發沉默。", "四个数字比很多长篇文字更容易触发沉默。", "Four digits that trigger more silence than many long essays.", 1, "ccp", "1989"),
  entry("坦克人", "坦克人", "Tank Man", "一個人、一排坦克、一張世界記住而牆內模糊的照片。", "一个人、一排坦克、一张世界记住而墙内模糊的照片。", "One person, a line of tanks, and an image remembered abroad but blurred at home.", 1, "ccp", "1989"),
  entry("天安門清場", "天安门清场", "Tiananmen Clearing", "午夜之後，廣場被武力改成空白。", "午夜之后，广场被武力改成空白。", "After midnight, force turned the square into blank space.", 2, "ccp", "1989"),
  entry("改革開放", "改革开放", "Reform and Opening", "市場被打開一條縫，政治門鎖仍然握在同一隻手裡。", "市场被打开一条缝，政治门锁仍然握在同一只手里。", "Markets opened a crack while the political lock stayed in the same hand.", 1, "ccp", "1978"),
  entry("南方談話", "南方谈话", "Southern Tour", "老人南下講市場，讓停擺的路線重新加速。", "老人南下讲市场，让停摆的路线重新加速。", "An elder went south and restarted the market route.", 2, "ccp", "1992"),
  entry("嚴打", "严打", "Strike Hard", "治安口號變成重拳，程序往往跑在後面。", "治安口号变成重拳，程序往往跑在后面。", "A law-and-order slogan became a heavy fist, with procedure lagging behind.", 2, "ccp", "1983"),
  entry("法輪功鎮壓", "法轮功镇压", "Falun Gong Crackdown", "一個民間團體被定性後，抓捕、宣傳與恐懼一起上線。", "一个民间团体被定性后，抓捕、宣传与恐惧一起上线。", "After a movement was labeled, arrests, propaganda, and fear went online together.", 2, "ccp", "1999"),
  entry("下崗潮", "下岗潮", "Layoff Wave", "鐵飯碗碎裂，工人階級突然成了成本。", "铁饭碗碎裂，工人阶级突然成了成本。", "The iron rice bowl cracked, and workers became costs.", 2, "ccp", "1990s"),
  entry("三峽移民", "三峡移民", "Three Gorges Resettlement", "大壩升起，無數家門沉到水線以下。", "大坝升起，无数家门沉到水线以下。", "A dam rose and countless homes sank below the waterline.", 2, "ccp", "1990s-2000s"),
  entry("汶川豆腐渣", "汶川豆腐渣", "Wenchuan Shoddy Schools", "地震之後，倒下的不只牆，也有工程良心。", "地震之后，倒下的不只墙，也有工程良心。", "After the quake, more than walls collapsed.", 2, "ccp", "2008"),
  entry("毒奶粉", "毒奶粉", "Tainted Milk Powder", "嬰兒喝下去的是奶，也是監管漏洞。", "婴儿喝下去的是奶，也是监管漏洞。", "Babies drank milk and a regulatory failure.", 1, "ccp", "2008"),
  entry("溫州動車事故", "温州动车事故", "Wenzhou Train Crash", "高鐵事故後，泥土蓋得比答案更快。", "高铁事故后，泥土盖得比答案更快。", "After the high-speed rail crash, dirt moved faster than answers.", 2, "ccp", "2011"),
  entry("薄熙來案", "薄熙来案", "Bo Xilai Case", "唱紅打黑的明星官員，最後成了權鬥教材。", "唱红打黑的明星官员，最后成了权斗教材。", "A star official of red songs and crackdowns became a lesson in power struggle.", 2, "ccp", "2012"),
  entry("周永康案", "周永康案", "Zhou Yongkang Case", "政法巨頭落馬，安全機器也被拿來清牌。", "政法巨头落马，安全机器也被拿来清牌。", "A security czar fell, and the security machine became part of the purge.", 3, "ccp", "2014"),
  entry("徐才厚案", "徐才厚案", "Xu Caihou Case", "軍中老虎倒下，買官賣官浮上檯面。", "军中老虎倒下，买官卖官浮上台面。", "A military tiger fell and rank-selling surfaced.", 3, "ccp", "2014"),
  entry("零八憲章", "零八宪章", "Charter Zero Eight", "一份呼籲憲政的文本，成了監牢裡的諾獎影子。", "一份呼吁宪政的文本，成了监牢里的诺奖影子。", "A constitutional appeal became the shadow of a Nobel Prize in prison.", 2, "ccp", "2008"),
  entry("劉曉波", "刘晓波", "Liu Xiaobo", "和平文字走進牢房，獎牌沒有等到自由。", "和平文字走进牢房，奖牌没有等到自由。", "Peaceful words entered prison; the prize never met freedom.", 2, "ccp", "2010"),
  entry("新疆再教育營", "新疆再教育营", "Xinjiang Reeducation Camps", "培訓之名下，監控、拘押與身份改造密集重疊。", "培训之名下，监控、拘押与身份改造密集重叠。", "Under the name of training, surveillance, detention, and identity remolding overlapped.", 2, "ccp", "2017"),
  entry("香港國安法", "香港国安法", "Hong Kong National Security Law", "一紙法律落下，街頭口號和選舉空間一起收窄。", "一纸法律落下，街头口号和选举空间一起收窄。", "One law landed, and protest slogans and election space narrowed together.", 2, "ccp", "2020"),
  entry("雨傘運動", "雨伞运动", "Umbrella Movement", "傘不是為了下雨，而是為了擋催淚煙。", "伞不是为了下雨，而是为了挡催泪烟。", "Umbrellas were not for rain, but for tear gas.", 2, "ccp", "2014"),
  entry("反送中", "反送中", "Anti Extradition Protests", "一條引渡路線，點燃整座城市的恐懼。", "一条引渡路线，点燃整座城市的恐惧。", "An extradition path ignited a citywide fear.", 1, "ccp", "2019"),
  entry("白紙運動", "白纸运动", "White Paper Protests", "什麼都不寫，反而寫出了最多。", "什么都不写，反而写出了最多。", "Writing nothing ended up saying the most.", 1, "ccp", "2022"),
  entry("動態清零", "动态清零", "Dynamic Zero COVID", "病毒、城市與民生都被塞進一個會動的零。", "病毒、城市与民生都被塞进一个会动的零。", "A moving zero tried to contain virus, cities, and livelihoods.", 1, "ccp", "2020-2022"),
  entry("封城", "封城", "City Lockdown", "一聲令下，門外世界變成手機通知。", "一声令下，门外世界变成手机通知。", "With one order, the outside world became phone notifications.", 1, "ccp", "2020s"),
  entry("健康碼", "健康码", "Health Code", "一個顏色決定你能不能上車、上班、回家。", "一个颜色决定你能不能上车、上班、回家。", "One color decided whether you could travel, work, or go home.", 1, "ccp", "2020s"),
  entry("方艙醫院", "方舱医院", "Fangcang Hospital", "臨時病房鋪開，城市被切成隔離格子。", "临时病房铺开，城市被切成隔离格子。", "Temporary wards spread out as cities were cut into quarantine grids.", 2, "ccp", "2020s"),
  entry("核酸常態化", "核酸常态化", "Routine PCR Testing", "棉棒成了通行證，排隊成了日常表情。", "棉棒成了通行证，排队成了日常表情。", "A swab became a pass, and queues became daily life.", 2, "ccp", "2020s"),
  entry("鐵鏈女", "铁链女", "Chained Woman", "一條鐵鏈拉出戶籍、拐賣與基層治理的黑洞。", "一条铁链拉出户籍、拐卖与基层治理的黑洞。", "One chain exposed a black hole of trafficking, household registration, and local governance.", 2, "ccp", "2022"),
  entry("彭帥事件", "彭帅事件", "Peng Shuai Case", "一則指控出現又消失，網球場外的審查更搶鏡。", "一则指控出现又消失，网球场外的审查更抢镜。", "An allegation appeared and vanished, while censorship stole the spotlight.", 3, "ccp", "2021"),
  entry("秦剛消失", "秦刚消失", "Qin Gang Disappearance", "外交官突然退場，公告比答案更克制。", "外交官突然退场，公告比答案更克制。", "A diplomat exited suddenly, and official notices stayed more restrained than answers.", 3, "ccp", "2023"),
  entry("李克強逝世", "李克强逝世", "Li Keqiang Passing", "總理離世後，悼念也要被精準控溫。", "总理离世后，悼念也要被精准控温。", "After a premier died, public mourning was temperature-controlled.", 3, "ccp", "2023"),
  entry("房地產泡沫", "房地产泡沫", "Property Bubble", "鋼筋水泥堆成增長神話，也堆成債務懸崖。", "钢筋水泥堆成增长神话，也堆成债务悬崖。", "Concrete built a growth myth and a debt cliff.", 2, "ccp", "2010s"),
  entry("恆大危機", "恒大危机", "Evergrande Crisis", "樓還沒交，債已經先到。", "楼还没交，债已经先到。", "The debt arrived before the apartments did.", 2, "ccp", "2021"),
  entry("爛尾樓", "烂尾楼", "Unfinished Homes", "房貸在扣，房子停在半空。", "房贷在扣，房子停在半空。", "Mortgage payments continued while the home stayed unfinished.", 1, "ccp", "2020s"),
  entry("村鎮銀行", "村镇银行", "Village Bank Scandal", "存款變成維權，維權又被顏色攔下。", "存款变成维权，维权又被颜色拦下。", "Deposits became protests, and protests were blocked by color codes.", 2, "ccp", "2022"),
  entry("平台經濟整頓", "平台经济整顿", "Platform Crackdown", "互聯網巨頭突然學會低頭，資本也要背政治課文。", "互联网巨头突然学会低头，资本也要背政治课文。", "Tech giants learned to bow, and capital memorized political lessons.", 2, "ccp", "2020s"),
  entry("共同富裕", "共同富裕", "Common Prosperity", "聽起來像分蛋糕，有時更像先交出刀叉。", "听起来像分蛋糕，有时更像先交出刀叉。", "It sounds like sharing cake, and sometimes like surrendering the cutlery first.", 3, "ccp", "2021"),
  entry("國進民退", "国进民退", "State Advances Private Retreats", "市場說自由，股權說排隊讓位。", "市场说自由，股权说排队让位。", "Markets talk freedom while ownership lines up to step aside.", 3, "ccp", "2010s"),
  entry("防火長城", "防火长城", "Great Firewall", "牆不是用磚砌的，是用關鍵字和封包砌的。", "墙不是用砖砌的，是用关键词和封包砌的。", "A wall built from keywords and packets, not bricks.", 1, "ccp", "2000s"),
  entry("網評員", "网评员", "Online Commentator", "鍵盤上班，評論區打卡。", "键盘上班，评论区打卡。", "A keyboard job with a comment-section timecard.", 2, "ccp", "2000s"),
  entry("社會信用", "社会信用", "Social Credit", "分數不只在考卷上，也可能在生活門口。", "分数不只在考卷上，也可能在生活门口。", "Scores moved from exams to the doors of daily life.", 2, "ccp", "2010s"),
  entry("人臉識別", "人脸识别", "Facial Recognition", "攝影機不只是看路，也在給路人建檔。", "摄像机不只是看路，也在给路人建档。", "Cameras do not just watch roads; they file passersby.", 2, "ccp", "2010s"),
  entry("戰狼外交", "战狼外交", "Wolf Warrior Diplomacy", "外交辭令戴上拳套，推文比談判桌更硬。", "外交辞令戴上拳套，推文比谈判桌更硬。", "Diplomatic language put on boxing gloves.", 2, "ccp", "2010s"),
  entry("一帶一路", "一带一路", "Belt and Road", "宏大工程鋪向世界，也把債務與影響力一起鋪開。", "宏大工程铺向世界，也把债务与影响力一起铺开。", "A grand infrastructure route carrying debt and influence with it.", 2, "ccp", "2013"),
  entry("千人計劃", "千人计划", "Thousand Talents Plan", "人才招牌背後，安全疑慮與技術轉移一起被點名。", "人才招牌背后，安全疑虑与技术转移一起被点名。", "A talent program shadowed by security and technology-transfer concerns.", 3, "ccp", "2008"),
  entry("金融反腐", "金融反腐", "Financial Anti Corruption", "錢袋系統被巡視，市場信號也跟著屏息。", "钱袋系统被巡视，市场信号也跟着屏息。", "The money system came under inspection, and markets held their breath.", 3, "ccp", "2020s"),
  entry("軍隊清洗", "军队清洗", "Military Purge", "軍階越高，公告越短，謎語越長。", "军阶越高，公告越短，谜语越长。", "The higher the rank, the shorter the notice and the longer the riddle.", 3, "ccp", "2020s"),
  entry("任志強案", "任志强案", "Ren Zhiqiang Case", "敢說話的地產大炮，被判成安靜教材。", "敢说话的地产大炮，被判成安静教材。", "An outspoken real-estate figure became a lesson in silence.", 3, "ccp", "2020"),
  entry("金盾工程", "金盾工程", "Golden Shield", "治安、數據與網路審查在同一面盾牌後面合體。", "治安、数据与网络审查在同一面盾牌后面合体。", "Policing, data, and internet control merged behind one shield.", 3, "ccp", "2000s"),
  entry("戶籍制度", "户籍制度", "Hukou System", "同一個國家，不同城市門票。", "同一个国家，不同城市门票。", "One country, different city tickets.", 2, "ccp", "1958"),
  entry("習禁評", "习禁评", "Xi Ban Comments", "名字一改，評論區就知道該閉嘴。", "名字一改，评论区就知道该闭嘴。", "A name pun where the comment box learns silence.", 4, "ccpMetaphor", ""),
  entry("刁邁乎", "刁迈乎", "Diao May Care", "長得像錯字，讀起來像不能說的名字。", "长得像错字，读起来像不能说的名字。", "It looks like a typo and sounds like a name people avoid saying.", 5, "ccpMetaphor", ""),
  entry("總加速師", "总加速师", "Chief Accelerator", "不是改革列車長，更像把油門踩到底的人。", "不是改革列车长，更像把油门踩到底的人。", "Not a reform conductor, more like someone flooring the accelerator.", 4, "ccpMetaphor", ""),
  entry("梁家河大學", "梁家河大学", "Liangjiahe University", "學歷傳奇的田野校徽，常被拿來反諷個人崇拜。", "学历传奇的田野校徽，常被拿来反讽个人崇拜。", "A field-campus joke aimed at credential mythology and personality worship.", 4, "ccpMetaphor", ""),
  entry("慶豐包子鋪", "庆丰包子铺", "Qingfeng Bun Shop", "一頓包子被拍成親民樣板，後來變成政治梗。", "一顿包子被拍成亲民样板，后来变成政治梗。", "A bun-shop photo op became a long-running political meme.", 4, "ccpMetaphor", "2013"),
  entry("維尼下架", "维尼下架", "Winnie Removed", "卡通熊突然變敏感，童話也學會避諱。", "卡通熊突然变敏感，童话也学会避讳。", "A cartoon bear became sensitive, and fairy tales learned caution.", 4, "ccpMetaphor", ""),
  entry("十年大健康", "十年大健康", "Ten Years of Great Health", "把浩劫換成健康，把封控說成養生。", "把浩劫换成健康，把封控说成养生。", "A euphemism that turns upheaval into wellness language.", 5, "ccpMetaphor", ""),
  entry("三年大吃飽", "三年大吃饱", "Three Years of Great Fullness", "把饑荒說成吃飽，黑色幽默靠反話發光。", "把饥荒说成吃饱，黑色幽默靠反话发光。", "A famine inverted into fullness through dark irony.", 5, "ccpMetaphor", ""),
  entry("鄧碾平", "邓碾平", "Deng the Crusher", "名字裡藏著履帶，暗指廣場上的鋼鐵結局。", "名字里藏着履带，暗指广场上的钢铁结局。", "A name pun with tank treads hidden in it.", 5, "ccpMetaphor", "1989"),
  entry("江核心", "江核心", "Jiang Core", "核心一詞被反覆拋光，像政治身份的金邊名片。", "核心一词被反复抛光，像政治身份的金边名片。", "The word core polished into a political business card.", 4, "ccpMetaphor", "1990s"),
  entry("河蟹社會", "河蟹社会", "Harmonized Society", "和諧被諧音成河蟹，鉗子專夾敏感詞。", "和谐被谐音成河蟹，钳子专夹敏感词。", "Harmony became a crab whose claws pinch sensitive words.", 4, "ccpMetaphor", ""),
  entry("厲害了我的鍋", "厉害了我的锅", "Amazing My Pot", "把自豪口號換一個字，鍋就自己背上了。", "把自豪口号换一个字，锅就自己背上了。", "One changed character turns a patriotic slogan into blame.", 4, "ccpMetaphor", ""),
  entry("牆國", "墙国", "Wall Country", "國界之外還有網界，牆內牆外像兩個宇宙。", "国界之外还有网界，墙内墙外像两个宇宙。", "A country where the online wall feels like another border.", 4, "ccpMetaphor", ""),
  entry("趙家人", "赵家人", "Zhao Family", "不是姓氏問題，是特權階層的暗號。", "不是姓氏问题，是特权阶层的暗号。", "Not about a surname, but a code for entrenched privilege.", 4, "ccpMetaphor", ""),
  entry("韭菜", "韭菜", "Chives", "割了一茬又一茬，投資人和百姓都懂這個比喻。", "割了一茬又一茬，投资人和百姓都懂这个比喻。", "Cut again and again; investors and citizens know the metaphor.", 3, "ccpMetaphor", ""),
  entry("低端人口", "低端人口", "Low End Population", "一個冷冰冰的標籤，把人變成可清退項目。", "一个冷冰冰的标签，把人变成可清退项目。", "A cold label that turns people into removable items.", 3, "ccpMetaphor", "2017"),
  entry("尋釁滋事", "寻衅滋事", "Picking Quarrels", "萬能口袋罪，什麼不順眼都能往裡裝。", "万能口袋罪，什么不顺眼都能往里装。", "A catch-all offense roomy enough for anything inconvenient.", 3, "ccpMetaphor", ""),
  entry("境外勢力", "境外势力", "Foreign Forces", "問題來自內部時，劇本常把鏡頭轉向外面。", "问题来自内部时，剧本常把镜头转向外面。", "When problems are internal, the script often points outside.", 3, "ccpMetaphor", ""),
  entry("正能量", "正能量", "Positive Energy", "不是物理名詞，是評論區的情緒配額。", "不是物理名词，是评论区的情绪配额。", "Not physics, but an emotional quota for public speech.", 3, "ccpMetaphor", ""),
  entry("全過程民主", "全过程民主", "Whole Process Democracy", "選票很少出場，形容詞負責撐場。", "选票很少出场，形容词负责撑场。", "Ballots rarely appear; adjectives do the heavy lifting.", 4, "ccpMetaphor", ""),
  entry("不忘初心", "不忘初心", "Never Forget Original Aspiration", "口號反覆刷新，像系統提示一樣常駐。", "口号反复刷新，像系统提示一样常驻。", "A slogan refreshed so often it feels like a system prompt.", 3, "ccpMetaphor", ""),
  entry("靈活就業", "灵活就业", "Flexible Employment", "失業換個說法，表格看起來就柔軟多了。", "失业换个说法，表格看起来就柔软多了。", "Unemployment gets a softer label, and the spreadsheet looks better.", 3, "ccpMetaphor", ""),
  entry("可防可控", "可防可控", "Preventable and Controllable", "每次風暴前都很穩，每次風暴後都很忙。", "每次风暴前都很稳，每次风暴后都很忙。", "Stable before every storm, busy after every storm.", 3, "ccpMetaphor", ""),
  entry("自願隔離", "自愿隔离", "Voluntary Quarantine", "自願兩個字，有時需要很多人看守。", "自愿两个字，有时需要很多人看守。", "The word voluntary sometimes requires many guards.", 4, "ccpMetaphor", ""),
  entry("靜默管理", "静默管理", "Silent Management", "城市突然安靜，不是因為大家都想休息。", "城市突然安静，不是因为大家都想休息。", "The city went silent, not because everyone wanted a rest.", 3, "ccpMetaphor", "2022"),
  entry("賦紅碼", "赋红码", "Assigned Red Code", "顏色不是健康結果，而是通行命運。", "颜色不是健康结果，而是通行命运。", "The color was not just a health result; it was travel fate.", 4, "ccpMetaphor", "2022"),
  entry("刪帖如風", "删帖如风", "Posts Vanish Fast", "文字剛落地，風就把它掃走。", "文字刚落地，风就把它扫走。", "Text lands, and the wind sweeps it away.", 3, "ccpMetaphor", ""),
  entry("大翻譯運動", "大翻译运动", "Great Translation Movement", "牆內話術被搬到牆外，忽然失去濾鏡。", "墙内话术被搬到墙外，忽然失去滤镜。", "Domestic rhetoric moved outside the wall and lost its filter.", 3, "ccpMetaphor", "2022"),
  entry("潤學", "润学", "Runology", "把離開研究成學問，簽證成了人生技能樹。", "把离开研究成学问，签证成了人生技能树。", "Leaving became a field of study, and visas became a skill tree.", 3, "ccpMetaphor", ""),
  entry("躺平", "躺平", "Lying Flat", "不再跟口號賽跑，也不再替增長燃燒。", "不再跟口号赛跑，也不再替增长燃烧。", "Refusing to race slogans or burn out for growth.", 2, "ccpMetaphor", ""),
  entry("內卷", "内卷", "Involution", "大家一起用力，結果只是原地更累。", "大家一起用力，结果只是原地更累。", "Everyone works harder and stays in the same place, only more exhausted.", 2, "ccpMetaphor", ""),
  entry("歷史虛無主義", "历史虚无主义", "Historical Nihilism", "當歷史不聽話，帽子就先扣上來。", "当历史不听话，帽子就先扣上来。", "When history disobeys, the label arrives first.", 4, "ccpMetaphor", ""),
  entry("集體記憶清零", "集体记忆清零", "Collective Memory Reset", "日期還在，記憶被要求格式化。", "日期还在，记忆被要求格式化。", "The date remains while memory is asked to format itself.", 5, "ccpMetaphor", ""),
  entry("口罩共和國", "口罩共和国", "Mask Republic", "臉被遮住，通行證比表情更重要。", "脸被遮住，通行证比表情更重要。", "Faces were covered, and passes mattered more than expressions.", 4, "ccpMetaphor", ""),
  entry("大健康時代", "大健康时代", "Great Health Era", "把管控包裝成健康，把日常改造成流程。", "把管控包装成健康，把日常改造成流程。", "Control packaged as health, daily life rebuilt as procedure.", 4, "ccpMetaphor", ""),
  entry("賽博秦制", "赛博秦制", "Cyber Qin System", "古老集權加上現代數據，像青銅器插了網線。", "古老集权加上现代数据，像青铜器插了网线。", "Ancient centralization plus modern data, like bronze plugged into the internet.", 5, "ccpMetaphor", ""),
  entry("小粉紅", "小粉红", "Little Pink", "鍵盤愛國隊，表情包和出征速度都很快。", "键盘爱国队，表情包和出征速度都很快。", "Keyboard patriots with fast memes and faster raids.", 3, "ccpMetaphor", ""),
  entry("領導先走", "领导先走", "Leaders Leave First", "災難片裡最懂秩序的一句諷刺台詞。", "灾难片里最懂秩序的一句讽刺台词。", "A disaster-scene line that understands hierarchy too well.", 4, "ccpMetaphor", ""),
  entry("十月革命", "十月革命", "October Revolution", "紅色帝國的開場鈴聲，後來響了七十多年。", "红色帝国的开场铃声，后来响了七十多年。", "The opening bell of a red empire that rang for decades.", 1, "soviet", "1917"),
  entry("大清洗", "大清洗", "Great Purge", "忠誠也會被懷疑，名單比審判更早寫好。", "忠诚也会被怀疑，名单比审判更早写好。", "Even loyalty was suspect; lists were written before trials.", 2, "soviet", "1936-1938"),
  entry("古拉格", "古拉格", "Gulag", "冰雪、勞改與帝國陰影裡的長線監牢。", "冰雪、劳改与帝国阴影里的长线监牢。", "Frozen labor camps stretching through an imperial shadow.", 1, "soviet", "1930s-1950s"),
  entry("烏克蘭大饑荒", "乌克兰大饥荒", "Holodomor", "糧食被政治拿走，田野留下饑餓。", "粮食被政治拿走，田野留下饥饿。", "Grain was taken by politics, and hunger stayed in the fields.", 2, "soviet", "1932-1933"),
  entry("莫斯科審判", "莫斯科审判", "Moscow Trials", "認罪像排練好的劇本，舞台叫法庭。", "认罪像排练好的剧本，舞台叫法庭。", "Confessions read like rehearsed scripts on a courtroom stage.", 3, "soviet", "1936-1938"),
  entry("布拉格之春", "布拉格之春", "Prague Spring", "春天剛長出自由，坦克就開進街道。", "春天刚长出自由，坦克就开进街道。", "Freedom sprouted in spring, then tanks entered the streets.", 2, "soviet", "1968"),
  entry("匈牙利事件", "匈牙利事件", "Hungarian Uprising", "街頭想離開鐵幕，履帶把答案壓回去。", "街头想离开铁幕，履带把答案压回去。", "The streets tried to leave the Iron Curtain; treads pushed them back.", 2, "soviet", "1956"),
  entry("柏林牆", "柏林墙", "Berlin Wall", "水泥把城市切開，也把制度的恐懼寫在邊界上。", "水泥把城市切开，也把制度的恐惧写在边界上。", "Concrete split a city and wrote a regime's fear on the border.", 1, "soviet", "1961-1989"),
  entry("車諾比", "切尔诺贝利", "Chernobyl", "反應爐爆炸後，謊言比輻射先擴散。", "反应堆爆炸后，谎言比辐射先扩散。", "After the reactor blew, lies spread before radiation reports did.", 2, "soviet", "1986"),
  entry("蘇聯解體", "苏联解体", "Soviet Collapse", "紅旗降下，巨型制度在冬天拆成十五塊。", "红旗降下，巨型制度在冬天拆成十五块。", "The red flag came down, and a giant system broke into fifteen pieces.", 1, "soviet", "1991"),
  entry("克格勃", "克格勃", "KGB", "情報機器聽見很多秘密，也製造很多恐懼。", "情报机器听见很多秘密，也制造很多恐惧。", "An intelligence machine that heard secrets and manufactured fear.", 2, "soviet", "1954-1991"),
  entry("真理報", "真理报", "Pravda", "名字叫真理，讀者卻要學會反向閱讀。", "名字叫真理，读者却要学会反向阅读。", "Named truth, but readers learned to read backwards.", 3, "soviet", ""),
  entry("計劃經濟", "计划经济", "Planned Economy", "每個數字都被安排，貨架有時忘了配合。", "每个数字都被安排，货架有时忘了配合。", "Every number was planned; shelves sometimes forgot to cooperate.", 2, "soviet", ""),
  entry("排隊買麵包", "排队买面包", "Bread Queues", "不是美食節，是短缺制度的日常畫面。", "不是美食节，是短缺制度的日常画面。", "Not a food festival, but the daily image of shortage.", 2, "soviet", ""),
  entry("鋼鐵慈父", "钢铁慈父", "Man of Steel Father", "父親感和恐懼感被焊在同一座銅像上。", "父亲感和恐惧感被焊在同一座铜像上。", "Fatherly imagery and fear welded onto one statue.", 4, "soviet", ""),
  entry("黑金政治", "黑金政治", "Black Gold Politics", "地方派系、金錢與權力在選舉邊緣交換眼神。", "地方派系、金钱与权力在选举边缘交换眼神。", "Local factions, money, and power exchanging looks at the edge of elections.", 2, "taiwan", ""),
  entry("藍綠惡鬥", "蓝绿恶斗", "Blue Green Brawl", "政策還沒上桌，顏色先把桌子掀了。", "政策还没上桌，颜色先把桌子掀了。", "Policy is not on the table yet; colors already flipped it.", 2, "taiwan", ""),
  entry("立法院衝突", "立法院冲突", "Legislative Brawls", "民主殿堂偶爾變拳擊場，麥克風比法案更危險。", "民主殿堂偶尔变拳击场，麦克风比法案更危险。", "A democratic chamber that sometimes turns into a boxing ring.", 2, "taiwan", ""),
  entry("黨產爭議", "党产争议", "Party Assets Dispute", "威權年代留下的帳本，在民主年代繼續吵。", "威权年代留下的账本，在民主年代继续吵。", "Authoritarian-era ledgers kept arguing in democratic times.", 2, "taiwan", ""),
  entry("太陽花運動", "太阳花运动", "Sunflower Movement", "學生佔領議場，服貿協議被照到發燙。", "学生占领议场，服贸协议被照到发烫。", "Students occupied the legislature, putting a trade pact under bright light.", 1, "taiwan", "2014"),
  entry("萊豬風波", "莱猪风波", "Ractopamine Pork Dispute", "一塊豬肉，牽出食安、外交與選舉口水。", "一块猪肉，牵出食安、外交与选举口水。", "One cut of pork pulled in food safety, diplomacy, and campaign noise.", 2, "taiwan", ""),
  entry("高端疫苗爭議", "高端疫苗争议", "Medigen Vaccine Dispute", "國產疫苗變成信任測驗，科學與政治同桌。", "国产疫苗变成信任测验，科学与政治同桌。", "A domestic vaccine became a trust test where science sat with politics.", 3, "taiwan", "2021"),
  entry("九二共識", "九二共识", "Nineteen Ninety Two Consensus", "四個字能讓兩岸各自解讀，也能讓選戰升溫。", "四个字能让两岸各自解读，也能让选战升温。", "Four words that both sides interpret and campaigns heat up.", 2, "taiwan", "1992"),
  entry("白色恐怖", "白色恐怖", "White Terror", "戒嚴年代的陰影，讓島上的沉默留下名字。", "戒严年代的阴影，让岛上的沉默留下名字。", "Martial-law shadows that left names inside silence.", 2, "taiwan", "1949-1987"),
  entry("戒嚴時期", "戒严时期", "Martial Law Era", "民主來臨前，島上很多自由被鎖進命令。", "民主来临前，岛上很多自由被锁进命令。", "Before democracy arrived, many freedoms were locked inside orders.", 1, "taiwan", "1949-1987"),
  entry("美麗島事件", "美丽岛事件", "Kaohsiung Incident", "街頭抗爭與審判，後來成了民主轉型的火種。", "街头抗争与审判，后来成了民主转型的火种。", "A protest and trial that later became fuel for democratic transition.", 2, "taiwan", "1979"),
  entry("水門事件", "水门事件", "Watergate", "一次闖入、幾盤錄音，總統寶座開始漏水。", "一次闯入、几盘录音，总统宝座开始漏水。", "A break-in and some tapes made the presidency leak.", 1, "us", "1972"),
  entry("伊拉克大規模殺傷武器", "伊拉克大规模杀伤武器", "Iraq WMD Claim", "開戰理由很響亮，戰後證據很安靜。", "开战理由很响亮，战后证据很安静。", "The case for war was loud; the postwar evidence was quiet.", 2, "us", "2003"),
  entry("關塔那摩", "关塔那摩", "Guantanamo", "法律邊界被放到海灣，拘押問題被拖成長影。", "法律边界被放到海湾，拘押问题被拖成长影。", "Legal boundaries were moved to a bay, and detention became a long shadow.", 2, "us", "2002"),
  entry("愛國者法案", "爱国者法案", "Patriot Act", "安全名義下，監控權力快速擴張。", "安全名义下，监控权力快速扩张。", "Under the banner of security, surveillance power expanded fast.", 2, "us", "2001"),
  entry("稜鏡計劃", "棱镜计划", "PRISM Program", "雲端資料照進稜鏡，隱私被折射成國安。", "云端资料照进棱镜，隐私被折射成国安。", "Cloud data entered a prism, and privacy refracted into national security.", 2, "us", "2013"),
  entry("遊說旋轉門", "游说旋转门", "Lobbying Revolving Door", "官員與企業之間的門，一直轉得很順。", "官员与企业之间的门，一直转得很顺。", "The door between office and industry keeps spinning smoothly.", 3, "us", ""),
  entry("選區重劃", "选区重划", "Gerrymandering", "地圖被畫成拼圖，選票被折成形狀。", "地图被画成拼图，选票被折成形状。", "Maps turn into puzzles and votes get folded into shapes.", 2, "us", ""),
  entry("一月六日", "一月六日", "January Sixth", "國會山的玻璃碎了，選舉陰謀論走進大門。", "国会山的玻璃碎了，选举阴谋论走进大门。", "Capitol glass broke as election conspiracy entered the building.", 2, "us", "2021"),
  entry("太大不能倒", "太大不能倒", "Too Big to Fail", "金融巨獸犯錯，帳單常寄給納稅人。", "金融巨兽犯错，账单常寄给纳税人。", "When financial giants stumble, the bill often finds taxpayers.", 2, "us", "2008"),
  entry("豬肉桶政治", "猪肉桶政治", "Pork Barrel Politics", "預算裡的地方甜點，常比公共利益更香。", "预算里的地方甜点，常比公共利益更香。", "Local budget treats that can smell sweeter than public interest.", 3, "us", ""),
  entry("影子金主", "影子金主", "Dark Money", "選舉廣告很亮，錢的來源很暗。", "选举广告很亮，钱的来源很暗。", "Campaign ads shine while the money source stays dark.", 3, "us", ""),
  entry("親自指揮", "亲自指挥", "Personally Commanded", "每逢大事都要把第一人稱掛上去，功勞和鍋一起變成最高規格。", "每逢大事都要把第一人称挂上去，功劳和锅一起变成最高规格。", "A first-person command slogan that puts both credit and blame at the top.", 4, "ccpMetaphor", "2020", "這個梗來自官方宣傳常用的「親自指揮、親自部署」。網民用它反諷權力高度集中：政策成敗都被塑造成最高領導人的直接安排。", "这个梗来自官方宣传常用的“亲自指挥、亲自部署”。网民用它反讽权力高度集中：政策成败都被塑造成最高领导人的直接安排。", "The phrase comes from official propaganda saying Xi personally commanded and deployed major work. Online users turn it into a jab at centralized power and top-level responsibility."),
  entry("親自部署", "亲自部署", "Personally Deployed", "會議還沒開完，部署已經親自到位。", "会议还没开完，部署已经亲自到位。", "Before the meeting ends, the deployment is already personally framed.", 4, "ccpMetaphor", "2020", "它常和「親自指揮」並列，用於疫情、防災、重大工程等官方報導。梗的重點不是字面行動，而是最高領導敘事如何覆蓋所有政策細節。", "它常和“亲自指挥”并列，用于疫情、防灾、重大工程等官方报道。梗的重点不是字面行动，而是最高领导叙事如何覆盖所有政策细节。", "Usually paired with personally commanded, it appears in official coverage of crises and major campaigns. The meme points at how leader-centered narration absorbs policy details."),
  entry("通商寬衣", "通商宽衣", "Trade and Undress", "本來像外交詞，讀錯後變成全網記憶點。", "本来像外交词，读错后变成全网记忆点。", "A diplomatic phrase turned into a remembered slip of the tongue.", 5, "ccpMetaphor", "2016", "這是習近平演講讀稿失誤引發的網路梗。它被反覆引用，不只是嘲笑口誤，也是在調侃官方形象工程與個人崇拜中的不可出錯人設。", "这是习近平演讲读稿失误引发的网络梗。它被反复引用，不只是嘲笑口误，也是在调侃官方形象工程与个人崇拜中的不可出错人设。", "This meme grew from a Xi speech-reading slip. It is remembered not only as a verbal mistake, but as a satire of the flawless-leader image promoted by state media."),
  entry("定於一尊", "定于一尊", "One Supreme Figure", "所有椅子都還在，聚光燈只剩一把。", "所有椅子都还在，聚光灯只剩一把。", "Many seats remain, but the spotlight keeps only one.", 4, "ccpMetaphor", "2010s", "「定於一尊」原本是政治表述，後來常被用來概括權力集中與個人核心化。它和修憲、核心地位、個人崇拜等討論經常一起出現。", "“定于一尊”原本是政治表述，后来常被用来概括权力集中与个人核心化。它和修宪、核心地位、个人崇拜等讨论经常一起出现。", "The phrase is used to describe concentrating authority around one supreme figure. It is often discussed alongside term-limit removal, core status, and personality-cult politics."),
  entry("兩個確立", "两个确立", "Two Establishes", "兩個詞把核心寫進答案，考卷不必再猜。", "两个词把核心写进答案，考卷不必再猜。", "Two formula words write the core into the answer sheet.", 3, "ccp", "2021", "「兩個確立」是中共十九屆六中全會後強化習近平核心地位的政治公式。遊戲裡把它作為口號型詞條，對應新時代政治忠誠話術。", "“两个确立”是中共十九届六中全会后强化习近平核心地位的政治公式。游戏里把它作为口号型词条，对应新时代政治忠诚话术。", "The Two Establishes became a formula after the Sixth Plenum of the 19th CCP Central Committee, reinforcing Xi's core status and ideological authority."),
  entry("兩個維護", "两个维护", "Two Upholds", "忠誠不只要表態，還要押韻成制度。", "忠诚不只要表态，还要押韵成制度。", "Loyalty is not just stated; it is turned into a rhymed formula.", 3, "ccp", "2018", "「兩個維護」要求維護習近平核心地位與中央權威。它代表黨內政治語言從政策討論轉向忠誠排序。", "“两个维护”要求维护习近平核心地位与中央权威。它代表党内政治语言从政策讨论转向忠诚排序。", "The Two Upholds demand loyalty to Xi's core position and central authority. It marks a shift from policy debate toward loyalty ranking inside party language."),
  entry("學習強國", "学习强国", "Study Xi Strong Nation", "學習不一定是求知，也可能是刷分任務。", "学习不一定是求知，也可能是刷分任务。", "Study can mean curiosity, or it can mean points on an app.", 3, "ccpMetaphor", "2019", "「學習強國」是官方推出的政治學習平台，名稱也暗含「學習」與「習」的雙關。網民常用它反諷政治學習打卡化。", "“学习强国”是官方推出的政治学习平台，名称也暗含“学习”与“习”的双关。网民常用它反讽政治学习打卡化。", "Xuexi Qiangguo is an official political-study app, with a pun on study and Xi. It became a meme for point-scoring political compliance."),
  entry("全票當選", "全票当选", "Unanimous Election", "票箱很熱鬧，結果很安靜。", "票箱很热闹，结果很安静。", "The ballot box looks busy; the result stays quiet.", 4, "ccpMetaphor", "2023", "2023 年全國人大上，習近平以全票連任國家主席。網路梗把「全票」當成沒有競爭的象徵，而不是民主競爭的證明。", "2023 年全国人大上，习近平以全票连任国家主席。网络梗把“全票”当成没有竞争的象征，而不是民主竞争的证明。", "In 2023, Xi was unanimously re-elected state president by the National People's Congress. The meme treats unanimity as a symbol of non-competition, not democratic proof."),
  entry("修憲稱帝", "修宪称帝", "Constitutional Emperor", "任期鎖被拆掉後，皇帝梗自己長了腿。", "任期锁被拆掉后，皇帝梗自己长了腿。", "After the term-limit lock was removed, emperor jokes grew legs.", 5, "ccpMetaphor", "2018", "2018 年中國修憲取消國家主席任期限制，引發大量「稱帝」「復辟」類網路諷刺。這個詞條指向制度約束被削弱後的政治想像。", "2018 年中国修宪取消国家主席任期限制，引发大量“称帝”“复辟”类网络讽刺。这个词条指向制度约束被削弱后的政治想象。", "China's 2018 constitutional change removed presidential term limits, triggering emperor and restoration jokes. The entry points to anxiety over weakened institutional restraint."),
  entry("倒車帝", "倒车帝", "Reverse Gear Emperor", "方向盤看似向前，檔位卻常被說成往回拉。", "方向盘看似向前，档位却常被说成往回拉。", "The steering wheel says forward, but the gear looks like reverse.", 5, "ccpMetaphor", "2020s", "「倒車」梗用來形容政治、經濟、社會控制回到更高壓的狀態。它通常和審查加強、國進民退、個人崇拜復燃等觀感相連。", "“倒车”梗用来形容政治、经济、社会控制回到更高压的状态。它通常和审查加强、国进民退、个人崇拜复燃等观感相连。", "Reverse-gear jokes describe perceptions that politics, markets, and social control are moving backward toward tighter rule and personality politics."),
  entry("一尊", "一尊", "The One", "不必點名，量詞已經替名字站崗。", "不必点名，量词已经替名字站岗。", "No name is needed; the measure word stands guard.", 5, "ccpMetaphor", "2010s", "「一尊」是網路上避開直呼習近平姓名的代稱，源自「定於一尊」式政治語言。它常見於審查環境下的暗語表達。", "“一尊”是网络上避开直呼习近平姓名的代称，源自“定于一尊”式政治语言。它常见于审查环境下的暗语表达。", "The One is an oblique nickname for Xi, derived from political language about one supreme figure. It is used as coded speech under censorship."),
  entry("清零宗", "清零宗", "Zero COVID Patriarch", "宗門法號一出，核酸隊伍也有了掌門。", "宗门法号一出，核酸队伍也有了掌门。", "A sect title for the leader of endless testing lines.", 5, "ccpMetaphor", "2022", "這是網民把「動態清零」和個人崇拜語感混合出的諷刺稱呼。它把防疫政策人格化，指向封控時期決策權力與民生代價的落差。", "这是网民把“动态清零”和个人崇拜语感混合出的讽刺称呼。它把防疫政策人格化，指向封控时期决策权力与民生代价的落差。", "This nickname fuses Zero COVID with personality-cult phrasing, turning a policy into a mock title and pointing at the gap between decision power and public cost."),
  entry("核酸盛世", "核酸盛世", "PCR Golden Age", "盛世不看煙火，看棉棒和帳篷。", "盛世不看烟火，看棉棒和帐篷。", "A golden age measured in swabs and tents.", 4, "ccpMetaphor", "2020-2022", "這個反話梗來自常態化核酸時期。官方說治理高效，民間看到的是排隊、封控、轉碼與資源浪費。", "这个反话梗来自常态化核酸时期。官方说治理高效，民间看到的是排队、封控、转码与资源浪费。", "The ironic phrase comes from the routine PCR era: official efficiency claims met public memories of queues, lockdowns, code changes, and waste."),
  entry("白紙革命", "白纸革命", "White Paper Revolution", "紙上沒有字，街上全是答案。", "纸上没有字，街上全是答案。", "The paper had no words; the street had the answer.", 3, "ccp", "2022", "白紙抗議在 2022 年封控末期爆發，白紙象徵被審查到無話可寫。它把疫情治理不滿、言論限制和公共安全事件連在一起。", "白纸抗议在 2022 年封控末期爆发，白纸象征被审查到无话可写。它把疫情治理不满、言论限制和公共安全事件连在一起。", "The 2022 white-paper protests used blank sheets to symbolize censorship. They connected anger over lockdowns, speech control, and public-safety failures."),
  entry("新質生產力", "新质生产力", "New Quality Productive Forces", "詞很新，KPI 很熟。", "词很新，KPI 很熟。", "The term is new; the KPI routine is familiar.", 3, "ccpMetaphor", "2023", "「新質生產力」是近年官方熱詞，指向高科技與產業升級。網路上常把它當成新瓶裝舊 KPI 的口號來調侃。", "“新质生产力”是近年官方热词，指向高科技与产业升级。网络上常把它当成新瓶装旧 KPI 的口号来调侃。", "New quality productive forces is a recent official slogan for high-tech upgrading. Online jokes frame it as old KPI politics in a new bottle."),
  entry("歷史垃圾時間", "历史垃圾时间", "Historical Garbage Time", "比賽還沒吹哨，觀眾已經覺得結局寫好了。", "比赛还没吹哨，观众已经觉得结局写好了。", "The whistle has not blown, but spectators feel the result is written.", 4, "ccpMetaphor", "2024", "這個流行說法借用體育術語，形容很多人對經濟、政治和個人前景的無力感。它不是單一事件，而是當代社會情緒的濃縮。", "这个流行说法借用体育术语，形容很多人对经济、政治和个人前景的无力感。它不是单一事件，而是当代社会情绪的浓缩。", "Borrowed from sports, this phrase captures a feeling that economic, political, and personal outcomes are already locked in. It is more a social mood than one event."),
  entry("遙遙領先", "遥遥领先", "Far Ahead", "口號跑在產品前面，彈幕跑在口號後面。", "口号跑在产品前面，弹幕跑在口号后面。", "The slogan runs ahead of the product, and comments chase the slogan.", 3, "ccpMetaphor", "2020s", "這個熱詞原本常見於科技民族主義語境，後來被網民廣泛二創。它可用來諷刺宣傳語言先於現實指標。", "这个热词原本常见于科技民族主义语境，后来被网民广泛二创。它可用来讽刺宣传语言先于现实指标。", "The phrase became popular in tech-nationalist contexts and then spread as a meme. It satirizes promotional language outrunning measurable reality."),
  entry("東升西降", "东升西降", "East Rises West Falls", "太陽還沒落山，劇本已經安排好方向。", "太阳还没落山，剧本已经安排好方向。", "Before the sun sets, the script has assigned the direction.", 3, "ccp", "2021", "「東升西降」概括官方對國際格局的自信敘事。網路使用時常帶反諷，尤其在經濟壓力或外交受挫時。", "“东升西降”概括官方对国际格局的自信叙事。网络使用时常带反讽，尤其在经济压力或外交受挫时。", "East rises, West falls summarizes official confidence about global change. Online use often becomes ironic during economic or diplomatic stress."),
  entry("中國式現代化", "中国式现代化", "Chinese Style Modernization", "現代化前面加定語，答案就不用和別人一樣。", "现代化前面加定语，答案就不用和别人一样。", "Add an adjective before modernization, and the answer can differ from everyone else's.", 3, "ccp", "2022", "這是中共二十大後高度宣傳的路線詞，強調由黨領導的現代化模型。梗化後常被用來質問口號與民生現實的差距。", "这是中共二十大后高度宣传的路线词，强调由党领导的现代化模型。梗化后常被用来质问口号与民生现实的差距。", "Heavily promoted after the 20th Party Congress, this slogan frames modernization under CCP leadership. Meme use often questions the gap between slogan and daily life."),
  entry("被消失", "被消失", "Made to Disappear", "不是魔術，是公告前的空白期。", "不是魔术，是公告前的空白期。", "Not magic, but the blank period before an announcement.", 4, "ccpMetaphor", "2020s", "近年高官、名人或敏感人物突然淡出公共視野時，網民常說「被消失」。它指向不透明政治處理和資訊管制。", "近年高官、名人或敏感人物突然淡出公共视野时，网民常说“被消失”。它指向不透明政治处理和信息管制。", "When officials, celebrities, or sensitive figures vanish from public view, users say they were made to disappear. The phrase points at opaque political handling and information control."),
  entry("金三胖", "金三胖", "Kim Three Fat", "第三代胖字輩，王朝血統也能變綽號。", "第三代胖字辈，王朝血统也能变绰号。", "The third generation turns dynasty bloodline into a nickname.", 4, "northKorea", "2010s", "這是中文網路對金正恩的嘲諷稱呼，對應金氏家族第三代統治。它把世襲政治和領袖外形一起做成黑色幽默。", "这是中文网络对金正恩的嘲讽称呼，对应金氏家族第三代统治。它把世袭政治和领袖外形一起做成黑色幽默。", "A Chinese internet nickname for Kim Jong Un, pointing at third-generation hereditary rule and using body-image satire as political shorthand."),
  entry("鑫胖", "鑫胖", "Triple Gold Fat", "三個金疊一起，胖字負責收尾。", "三个金叠一起，胖字负责收尾。", "Three gold characters stack up, and fat finishes the joke.", 5, "northKorea", "2010s", "「鑫」由三個金組成，暗指金氏三代。這個黑話是「金三胖」的變體，用文字構形避開直白稱呼。", "“鑫”由三个金组成，暗指金氏三代。这个黑话是“金三胖”的变体，用文字构形避开直白称呼。", "The character Xin contains three gold radicals, hinting at three Kims. It is a coded variant of the Kim Three Fat nickname."),
  entry("白頭山血統", "白头山血统", "Paektu Bloodline", "山名變成王朝血書，繼承就有了神話濾鏡。", "山名变成王朝血书，继承就有了神话滤镜。", "A mountain name becomes dynastic myth and succession filter.", 3, "northKorea", "1940s", "朝鮮官方用「白頭山血統」神化金氏家族統治合法性。它把革命神話、家族繼承與國家宣傳綁在一起。", "朝鲜官方用“白头山血统”神化金氏家族统治合法性。它把革命神话、家族继承与国家宣传绑在一起。", "North Korean propaganda uses the Paektu Bloodline to mythologize Kim family legitimacy, tying revolution myth to hereditary succession."),
  entry("主體思想", "主体思想", "Juche", "說是自主，實際常常是把世界關在門外。", "说是自主，实际常常是把世界关在门外。", "It says self-reliance, while often shutting the world outside.", 2, "northKorea", "1955", "主體思想是朝鮮核心意識形態，強調自主、自立、自衛。現實中它支撐高度封閉的政治控制與對外宣傳。", "主体思想是朝鲜核心意识形态，强调自主、自立、自卫。现实中它支撑高度封闭的政治控制与对外宣传。", "Juche is North Korea's core ideology of self-reliance. In practice, it supports closed political control and external propaganda."),
  entry("先軍政治", "先军政治", "Military First", "飯桌可以晚到，軍裝一定先到。", "饭桌可以晚到，军装一定先到。", "Dinner may arrive late; the uniform arrives first.", 3, "northKorea", "1990s", "金正日時期強化「先軍政治」，把軍隊放在國家資源與政治敘事的中心。它與糧食短缺和社會控制同時存在。", "金正日时期强化“先军政治”，把军队放在国家资源与政治叙事的中心。它与粮食短缺和社会控制同时存在。", "Kim Jong Il elevated military-first politics, putting the army at the center of resources and legitimacy while shortages and control persisted."),
  entry("苦難行軍", "苦难行军", "Arduous March", "饑荒被包裝成行軍，苦難也要聽口號。", "饥荒被包装成行军，苦难也要听口号。", "Famine was packaged as a march, and suffering had to follow slogans.", 2, "northKorea", "1990s", "「苦難行軍」指朝鮮 1990 年代嚴重饑荒與經濟崩潰時期的官方說法。它用革命語言包裝大規模民生災難。", "“苦难行军”指朝鲜 1990 年代严重饥荒与经济崩溃时期的官方说法。它用革命语言包装大规模民生灾难。", "The Arduous March refers to North Korea's severe 1990s famine and economic collapse, framed by the state in revolutionary language."),
  entry("喜悅組", "喜悦组", "Pleasure Squad", "名字像節目單，背後是權力挑人的陰影。", "名字像节目单，背后是权力挑人的阴影。", "The name sounds like a program list; behind it is power selecting people.", 4, "northKorea", "1970s", "「喜悅組」常被用來指朝鮮為高層服務的表演與陪侍群體。這個詞條點出極權體制中個人被權力消費的現實。", "“喜悦组”常被用来指朝鲜为高层服务的表演与陪侍群体。这个词条点出极权体制中个人被权力消费的现实。", "The term refers to groups selected to entertain or serve elites in North Korea, highlighting how authoritarian power can consume individuals."),
  entry("脫北者", "脱北者", "North Korean Defector", "逃離不是旅行，是把出生地變成邊境。", "逃离不是旅行，是把出生地变成边境。", "Leaving is not travel; it turns birthplace into a border.", 2, "northKorea", "1990s", "脫北者是逃離朝鮮的人，很多人經中國或第三國輾轉到韓國。這個詞條連到封閉國家、邊境風險與難民處境。", "脱北者是逃离朝鲜的人，很多人经中国或第三国辗转到韩国。这个词条连到封闭国家、边境风险与难民处境。", "Defectors leave North Korea, often through China or third countries toward South Korea. The term connects closed borders, escape risk, and refugee vulnerability."),
  entry("火箭人", "火箭人", "Rocket Man", "飛彈越飛越高，外號也飛進外交場。", "导弹越飞越高，外号也飞进外交场。", "Missiles flew higher, and the nickname flew into diplomacy.", 3, "northKorea", "2017", "「火箭人」因朝鮮核導與飛彈試射而成為國際政治外號。它把核危機、個人領袖形象和外交嘴仗合在一起。", "“火箭人”因朝鲜核导与导弹试射而成为国际政治外号。它把核危机、个人领袖形象和外交嘴仗合在一起。", "Rocket Man became a diplomatic nickname amid North Korean missile and nuclear tests, merging nuclear risk, leader image, and rhetorical confrontation.")
];

const EXTRA_DECOYS = {
  tw: "忠誠偉大勝利穩定繁榮安全復興口號會議審查宣傳紀律文件紅旗印章報告樣板核心治理秩序榮光",
  cn: "忠诚伟大胜利稳定繁荣安全复兴口号会议审查宣传纪律文件红旗印章报告样板核心治理秩序荣光",
  en: ["Order", "Glory", "Policy", "Report", "Banner", "Signal", "Discipline", "Victory", "Archive", "Quota", "Speech", "Security", "Stability", "Cadre", "Campaign", "Bureau"]
};

const MODE_SEQUENCE = ["blackout", "scramble", "pressure", "echo", "purge"];

const TILE_TYPES = [
  { id: "seal", tw: "印", cn: "印", en: "SEAL" },
  { id: "order", tw: "令", cn: "令", en: "CMD" },
  { id: "wall", tw: "牆", cn: "墙", en: "WALL" },
  { id: "red", tw: "紅", cn: "红", en: "RED" },
  { id: "code", tw: "碼", cn: "码", en: "CODE" },
  { id: "ban", tw: "禁", cn: "禁", en: "BAN" },
  { id: "paper", tw: "紙", cn: "纸", en: "DOC" },
  { id: "zero", tw: "零", cn: "零", en: "ZERO" }
];

const GAME_COPY = {
  tw: {
    progress: "解密進度",
    matrix: "檔案矩陣",
    combo: "連擊",
    moves: "步數",
    scan: "掃描",
    reshuffle: "洗牌",
    skip: "跳過",
    scanEmpty: "無可掃描",
    playHint: "點擊相鄰同類碎片，2 個以上即可消除。消除越大，解密越快。",
    autoReveal: "無需猜詞，矩陣能量滿後自動解密。"
  },
  cn: {
    progress: "解密进度",
    matrix: "档案矩阵",
    combo: "连击",
    moves: "步数",
    scan: "扫描",
    reshuffle: "洗牌",
    skip: "跳过",
    scanEmpty: "无可扫描",
    playHint: "点击相邻同类碎片，2 个以上即可消除。消除越大，解密越快。",
    autoReveal: "无需猜词，矩阵能量满后自动解密。"
  },
  en: {
    progress: "Decode Progress",
    matrix: "Archive Matrix",
    combo: "Combo",
    moves: "Moves",
    scan: "Scan",
    reshuffle: "Reshuffle",
    skip: "Skip",
    scanEmpty: "No scan",
    playHint: "Click adjacent matching fragments. Groups of 2 or more clear.",
    autoReveal: "No guessing. Fill the meter and the archive decrypts itself."
  }
};

const root = document.getElementById("gameRoot");
const titleEl = document.getElementById("appTitle");
const subtitleEl = document.getElementById("appSubtitle");
const soundToggle = document.getElementById("soundToggle");

const state = {
  lang: "tw",
  route: "time",
  level: 0,
  score: 0,
  bestLevel: 0,
  streak: 0,
  started: false,
  entry: null,
  answerUnits: [],
  selected: [],
  tokens: [],
  grid: [],
  gridSize: 7,
  decryptProgress: 0,
  decryptGoal: 100,
  revealedCount: 0,
  combo: 0,
  moves: 0,
  highlightedCellIds: [],
  wrongCellId: null,
  cellSerial: 0,
  maxTime: 90,
  timeLeft: 90,
  mistakes: 0,
  hintsLeft: 3,
  difficulty: 1,
  mode: "blackout",
  timer: null,
  locked: false,
  modal: null,
  muted: false,
  volume: 0.62,
  hintTokenId: null,
  wrongTokenId: null,
  endlessLap: 0
};

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.timer = null;
    this.nextTime = 0;
    this.step = 0;
    this.volume = 0.62;
    this.muted = false;
    this.scale = [146.83, 164.81, 174.61, 196, 220, 246.94, 261.63, 293.66, 329.63, 392];
  }

  async start() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.musicGain = this.ctx.createGain();
      this.padGain = this.ctx.createGain();
      this.percGain = this.ctx.createGain();
      this.padFilter = this.ctx.createBiquadFilter();
      this.padFilter.type = "lowpass";
      this.padFilter.frequency.value = 1180;
      this.musicGain.gain.value = 0.28;
      this.padGain.gain.value = 0.2;
      this.percGain.gain.value = 0.36;
      this.musicGain.connect(this.master);
      this.padGain.connect(this.padFilter).connect(this.master);
      this.percGain.connect(this.master);
      this.master.connect(this.ctx.destination);
      this.setVolume(this.volume);
    }
    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }
    this.startMusic();
  }

  setVolume(value) {
    this.volume = Number(value);
    if (this.master) {
      this.master.gain.value = this.muted ? 0 : this.volume;
    }
  }

  setMuted(muted) {
    this.muted = muted;
    if (this.master) {
      this.master.gain.value = muted ? 0 : this.volume;
    }
  }

  startMusic() {
    if (!this.ctx || this.timer) return;
    this.nextTime = this.ctx.currentTime + 0.08;
    this.step = 0;
    this.timer = window.setInterval(() => this.scheduler(), 120);
  }

  scheduler() {
    if (!this.ctx) return;
    while (this.nextTime < this.ctx.currentTime + 0.55) {
      this.scheduleStep(this.step, this.nextTime);
      this.nextTime += 0.42;
      this.step = (this.step + 1) % 32;
    }
  }

  scheduleStep(step, time) {
    const melody = [4, 5, 7, 6, 4, 2, 1, 0, 2, 4, 6, 5, 3, 2, 1, 0];
    const chords = [
      [0, 2, 4],
      [3, 5, 7],
      [1, 4, 6],
      [0, 3, 5]
    ];
    if (step % 8 === 0) {
      this.chord(chords[(step / 8) % chords.length], time);
      this.drum(time, 58, 0.28, 0.16);
    }
    if (step % 2 === 0) {
      const note = this.scale[melody[(step / 2) % melody.length]];
      this.tone(note, time, 0.34, "triangle", 0.04, this.musicGain, 0.035);
      this.tone(note * 2, time + 0.01, 0.22, "sine", 0.016, this.musicGain, 0.025);
    }
    if (step % 8 === 4) {
      this.snare(time);
    }
    if (step % 16 === 14) {
      this.bell(time, this.scale[8]);
    }
  }

  chord(indexes, time) {
    indexes.forEach((index, offset) => {
      const freq = this.scale[index] / 2;
      this.tone(freq, time + offset * 0.018, 1.45, "sine", 0.035, this.padGain, 0.16);
      this.tone(freq * 2, time + offset * 0.018, 1.15, "triangle", 0.018, this.padGain, 0.14);
    });
  }

  bell(time, freq) {
    this.tone(freq * 2, time, 0.65, "sine", 0.036, this.musicGain, 0.012);
    this.tone(freq * 3, time + 0.012, 0.42, "triangle", 0.018, this.musicGain, 0.018);
  }

  snare(time) {
    this.noise(time, 0.1, 0.052, this.percGain);
    this.tone(170, time, 0.07, "triangle", 0.024, this.percGain, 0.006);
  }

  tone(freq, time, duration, type = "sine", gainValue = 0.08, output = this.master, attack = 0.012) {
    if (!this.ctx || this.muted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(gainValue, time + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(gain).connect(output);
    osc.start(time);
    osc.stop(time + duration + 0.04);
  }

  drum(time, freq, duration, gainValue) {
    if (!this.ctx || this.muted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + duration);
    gain.gain.setValueAtTime(gainValue, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(gain).connect(this.percGain || this.musicGain);
    osc.start(time);
    osc.stop(time + duration + 0.04);
  }

  noise(time, duration, gainValue, output = this.musicGain) {
    if (!this.ctx || this.muted) return;
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * duration, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const source = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    gain.gain.value = gainValue;
    source.buffer = buffer;
    source.connect(gain).connect(output);
    source.start(time);
  }

  correct() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.tone(660, now, 0.08, "triangle", 0.09);
    this.tone(990, now + 0.055, 0.09, "triangle", 0.06);
  }

  wrong() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.tone(110, now, 0.16, "sawtooth", 0.08);
  }

  complete() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.chord([0, 2, 5], now);
    [392, 494, 587, 784].forEach((freq, index) => {
      this.tone(freq, now + index * 0.085, 0.2, "triangle", 0.08 - index * 0.01);
    });
    this.drum(now, 76, 0.24, 0.16);
  }
}

const audio = new AudioEngine();

const TRAD_MAP = {
  "个": "個",
  "与": "與",
  "东": "東",
  "两": "兩",
  "严": "嚴",
  "丧": "喪",
  "丰": "豐",
  "为": "為",
  "举": "舉",
  "么": "麼",
  "义": "義",
  "乌": "烏",
  "乐": "樂",
  "习": "習",
  "乡": "鄉",
  "书": "書",
  "买": "買",
  "乱": "亂",
  "争": "爭",
  "于": "於",
  "亏": "虧",
  "云": "雲",
  "亚": "亞",
  "产": "產",
  "亲": "親",
  "亿": "億",
  "从": "從",
  "仓": "倉",
  "仪": "儀",
  "们": "們",
  "价": "價",
  "众": "眾",
  "优": "優",
  "会": "會",
  "传": "傳",
  "伤": "傷",
  "伦": "倫",
  "体": "體",
  "余": "餘",
  "佛": "佛",
  "作": "作",
  "来": "來",
  "侦": "偵",
  "侧": "側",
  "侨": "僑",
  "侠": "俠",
  "侣": "侶",
  "侥": "僥",
  "侦": "偵",
  "侵": "侵",
  "便": "便",
  "俄": "俄",
  "保": "保",
  "信": "信",
  "俩": "倆",
  "修": "修",
  "债": "債",
  "倾": "傾",
  "假": "假",
  "偕": "偕",
  "做": "做",
  "停": "停",
  "健": "健",
  "儿": "兒",
  "党": "黨",
  "兰": "蘭",
  "关": "關",
  "兴": "興",
  "养": "養",
  "内": "內",
  "冈": "岡",
  "册": "冊",
  "写": "寫",
  "军": "軍",
  "农": "農",
  "冲": "衝",
  "决": "決",
  "况": "況",
  "冻": "凍",
  "净": "淨",
  "准": "準",
  "几": "幾",
  "击": "擊",
  "划": "劃",
  "刘": "劉",
  "则": "則",
  "刚": "剛",
  "创": "創",
  "删": "刪",
  "别": "別",
  "制": "制",
  "剂": "劑",
  "剑": "劍",
  "剧": "劇",
  "办": "辦",
  "务": "務",
  "动": "動",
  "劳": "勞",
  "势": "勢",
  "勋": "勳",
  "区": "區",
  "医": "醫",
  "华": "華",
  "协": "協",
  "单": "單",
  "卖": "賣",
  "卫": "衛",
  "却": "卻",
  "压": "壓",
  "历": "歷",
  "厉": "厲",
  "县": "縣",
  "参": "參",
  "发": "發",
  "变": "變",
  "叙": "敘",
  "只": "只",
  "台": "臺",
  "号": "號",
  "后": "後",
  "向": "向",
  "吗": "嗎",
  "听": "聽",
  "启": "啟",
  "员": "員",
  "呐": "吶",
  "问": "問",
  "间": "間",
  "团": "團",
  "园": "園",
  "国": "國",
  "图": "圖",
  "圆": "圓",
  "圣": "聖",
  "场": "場",
  "坏": "壞",
  "块": "塊",
  "坚": "堅",
  "坛": "壇",
  "坝": "壩",
  "坞": "塢",
  "垄": "壟",
  "垒": "壘",
  "垦": "墾",
  "执": "執",
  "坚": "堅",
  "城": "城",
  "域": "域",
  "基": "基",
  "堂": "堂",
  "堕": "墮",
  "墙": "牆",
  "壮": "壯",
  "声": "聲",
  "处": "處",
  "备": "備",
  "复": "復",
  "够": "夠",
  "头": "頭",
  "夹": "夾",
  "夺": "奪",
  "奖": "獎",
  "奋": "奮",
  "妈": "媽",
  "妇": "婦",
  "委": "委",
  "学": "學",
  "宁": "寧",
  "宝": "寶",
  "实": "實",
  "审": "審",
  "宪": "憲",
  "宫": "宮",
  "家": "家",
  "宽": "寬",
  "宾": "賓",
  "对": "對",
  "导": "導",
  "寿": "壽",
  "将": "將",
  "尔": "爾",
  "尘": "塵",
  "尝": "嘗",
  "层": "層",
  "届": "屆",
  "属": "屬",
  "岁": "歲",
  "岛": "島",
  "峡": "峽",
  "崩": "崩",
  "币": "幣",
  "师": "師",
  "带": "帶",
  "帮": "幫",
  "帐": "帳",
  "帘": "簾",
  "并": "並",
  "广": "廣",
  "庄": "莊",
  "庆": "慶",
  "库": "庫",
  "应": "應",
  "废": "廢",
  "开": "開",
  "异": "異",
  "弃": "棄",
  "张": "張",
  "弥": "彌",
  "强": "強",
  "归": "歸",
  "录": "錄",
  "当": "當",
  "径": "徑",
  "彻": "徹",
  "征": "徵",
  "径": "徑",
  "德": "德",
  "忆": "憶",
  "忧": "憂",
  "态": "態",
  "总": "總",
  "恋": "戀",
  "恶": "惡",
  "惨": "慘",
  "惩": "懲",
  "惯": "慣",
  "战": "戰",
  "户": "戶",
  "扎": "紮",
  "扑": "撲",
  "扫": "掃",
  "扬": "揚",
  "扰": "擾",
  "抚": "撫",
  "报": "報",
  "担": "擔",
  "拟": "擬",
  "拢": "攏",
  "拨": "撥",
  "择": "擇",
  "挂": "掛",
  "挤": "擠",
  "挥": "揮",
  "损": "損",
  "换": "換",
  "据": "據",
  "掩": "掩",
  "揽": "攬",
  "摇": "搖",
  "摄": "攝",
  "摆": "擺",
  "搜": "搜",
  "携": "攜",
  "摄": "攝",
  "支": "支",
  "敌": "敵",
  "数": "數",
  "断": "斷",
  "无": "無",
  "旧": "舊",
  "时": "時",
  "晋": "晉",
  "晓": "曉",
  "暂": "暫",
  "术": "術",
  "机": "機",
  "杀": "殺",
  "杂": "雜",
  "权": "權",
  "条": "條",
  "来": "來",
  "杰": "傑",
  "松": "鬆",
  "极": "極",
  "构": "構",
  "枪": "槍",
  "柜": "櫃",
  "标": "標",
  "样": "樣",
  "核": "核",
  "栈": "棧",
  "档": "檔",
  "桥": "橋",
  "梦": "夢",
  "检": "檢",
  "楼": "樓",
  "权": "權",
  "欢": "歡",
  "欧": "歐",
  "历": "歷",
  "残": "殘",
  "殴": "毆",
  "毁": "毀",
  "毕": "畢",
  "毙": "斃",
  "气": "氣",
  "汉": "漢",
  "汤": "湯",
  "沟": "溝",
  "没": "沒",
  "沪": "滬",
  "沦": "淪",
  "法": "法",
  "泪": "淚",
  "泽": "澤",
  "洁": "潔",
  "测": "測",
  "济": "濟",
  "浏": "瀏",
  "海": "海",
  "涌": "湧",
  "涛": "濤",
  "涨": "漲",
  "涂": "塗",
  "涩": "澀",
  "淀": "澱",
  "渊": "淵",
  "温": "溫",
  "湾": "灣",
  "湿": "濕",
  "满": "滿",
  "滞": "滯",
  "汉": "漢",
  "灭": "滅",
  "灯": "燈",
  "灵": "靈",
  "灾": "災",
  "炉": "爐",
  "点": "點",
  "炼": "煉",
  "热": "熱",
  "爱": "愛",
  "牵": "牽",
  "状": "狀",
  "独": "獨",
  "狱": "獄",
  "猎": "獵",
  "猫": "貓",
  "环": "環",
  "现": "現",
  "琐": "瑣",
  "电": "電",
  "画": "畫",
  "畅": "暢",
  "疗": "療",
  "监": "監",
  "盘": "盤",
  "盖": "蓋",
  "真": "真",
  "码": "碼",
  "砖": "磚",
  "础": "礎",
  "礼": "禮",
  "祸": "禍",
  "离": "離",
  "种": "種",
  "称": "稱",
  "稳": "穩",
  "穷": "窮",
  "窝": "窩",
  "竞": "競",
  "笔": "筆",
  "笼": "籠",
  "签": "簽",
  "简": "簡",
  "粮": "糧",
  "紧": "緊",
  "纠": "糾",
  "红": "紅",
  "约": "約",
  "级": "級",
  "纪": "紀",
  "纯": "純",
  "纱": "紗",
  "纲": "綱",
  "纳": "納",
  "纵": "縱",
  "纷": "紛",
  "纸": "紙",
  "线": "線",
  "组": "組",
  "细": "細",
  "终": "終",
  "经": "經",
  "绑": "綁",
  "统": "統",
  "绳": "繩",
  "维": "維",
  "绿": "綠",
  "网": "網",
  "罗": "羅",
  "罚": "罰",
  "罢": "罷",
  "义": "義",
  "习": "習",
  "翘": "翹",
  "职": "職",
  "联": "聯",
  "肃": "肅",
  "肿": "腫",
  "胜": "勝",
  "胡": "胡",
  "胶": "膠",
  "脑": "腦",
  "脚": "腳",
  "脸": "臉",
  "脱": "脫",
  "卧": "臥",
  "临": "臨",
  "舆": "輿",
  "舰": "艦",
  "节": "節",
  "苏": "蘇",
  "范": "範",
  "荣": "榮",
  "药": "藥",
  "营": "營",
  "萨": "薩",
  "蓝": "藍",
  "虑": "慮",
  "虚": "虛",
  "虫": "蟲",
  "蚀": "蝕",
  "虽": "雖",
  "蛮": "蠻",
  "血": "血",
  "众": "眾",
  "补": "補",
  "袭": "襲",
  "见": "見",
  "观": "觀",
  "规": "規",
  "视": "視",
  "览": "覽",
  "觉": "覺",
  "触": "觸",
  "计": "計",
  "认": "認",
  "讨": "討",
  "让": "讓",
  "训": "訓",
  "议": "議",
  "讯": "訊",
  "记": "記",
  "讲": "講",
  "讳": "諱",
  "讽": "諷",
  "设": "設",
  "访": "訪",
  "证": "證",
  "评": "評",
  "诉": "訴",
  "词": "詞",
  "试": "試",
  "诗": "詩",
  "话": "話",
  "该": "該",
  "详": "詳",
  "语": "語",
  "误": "誤",
  "诱": "誘",
  "说": "說",
  "请": "請",
  "诸": "諸",
  "读": "讀",
  "课": "課",
  "谁": "誰",
  "调": "調",
  "谅": "諒",
  "谎": "謊",
  "谓": "謂",
  "谣": "謠",
  "谋": "謀",
  "谍": "諜",
  "谢": "謝",
  "谭": "譚",
  "贝": "貝",
  "负": "負",
  "财": "財",
  "责": "責",
  "败": "敗",
  "账": "帳",
  "货": "貨",
  "质": "質",
  "贩": "販",
  "贫": "貧",
  "贬": "貶",
  "贵": "貴",
  "贷": "貸",
  "贸": "貿",
  "费": "費",
  "贺": "賀",
  "贼": "賊",
  "资": "資",
  "赋": "賦",
  "赌": "賭",
  "赎": "贖",
  "赖": "賴",
  "赚": "賺",
  "赛": "賽",
  "赞": "讚",
  "赵": "趙",
  "赶": "趕",
  "趋": "趨",
  "跃": "躍",
  "车": "車",
  "轨": "軌",
  "转": "轉",
  "轮": "輪",
  "软": "軟",
  "轰": "轟",
  "轻": "輕",
  "载": "載",
  "较": "較",
  "辅": "輔",
  "辆": "輛",
  "辈": "輩",
  "辉": "輝",
  "辐": "輻",
  "辑": "輯",
  "输": "輸",
  "辖": "轄",
  "辩": "辯",
  "边": "邊",
  "达": "達",
  "迁": "遷",
  "过": "過",
  "运": "運",
  "还": "還",
  "这": "這",
  "进": "進",
  "远": "遠",
  "违": "違",
  "连": "連",
  "迟": "遲",
  "适": "適",
  "选": "選",
  "逊": "遜",
  "递": "遞",
  "遗": "遺",
  "遥": "遙",
  "邮": "郵",
  "邻": "鄰",
  "郑": "鄭",
  "酝": "醞",
  "酿": "釀",
  "释": "釋",
  "里": "裡",
  "鉴": "鑒",
  "针": "針",
  "钉": "釘",
  "钢": "鋼",
  "钥": "鑰",
  "钦": "欽",
  "钩": "鉤",
  "钮": "鈕",
  "钱": "錢",
  "铁": "鐵",
  "铃": "鈴",
  "铜": "銅",
  "铲": "鏟",
  "链": "鏈",
  "销": "銷",
  "锁": "鎖",
  "错": "錯",
  "锅": "鍋",
  "锈": "鏽",
  "锋": "鋒",
  "锐": "銳",
  "错": "錯",
  "锦": "錦",
  "键": "鍵",
  "镇": "鎮",
  "镜": "鏡",
  "长": "長",
  "门": "門",
  "闪": "閃",
  "闭": "閉",
  "问": "問",
  "闲": "閒",
  "间": "間",
  "闷": "悶",
  "闻": "聞",
  "闸": "閘",
  "阀": "閥",
  "阁": "閣",
  "阅": "閱",
  "队": "隊",
  "阳": "陽",
  "阴": "陰",
  "阵": "陣",
  "阶": "階",
  "际": "際",
  "陆": "陸",
  "陈": "陳",
  "降": "降",
  "险": "險",
  "随": "隨",
  "隐": "隱",
  "隔": "隔",
  "难": "難",
  "雏": "雛",
  "离": "離",
  "雾": "霧",
  "静": "靜",
  "顶": "頂",
  "项": "項",
  "顺": "順",
  "须": "須",
  "顾": "顧",
  "顿": "頓",
  "领": "領",
  "颇": "頗",
  "预": "預",
  "颠": "顛",
  "风": "風",
  "飞": "飛",
  "饭": "飯",
  "饥": "飢",
  "饱": "飽",
  "饿": "餓",
  "馆": "館",
  "首": "首",
  "马": "馬",
  "驱": "驅",
  "验": "驗",
  "骂": "罵",
  "骄": "驕",
  "骗": "騙",
  "骤": "驟",
  "体": "體",
  "髓": "髓",
  "鱼": "魚",
  "鲁": "魯",
  "鲜": "鮮",
  "鸟": "鳥",
  "鸡": "雞",
  "鸣": "鳴",
  "麦": "麥",
  "黄": "黃",
  "黑": "黑",
  "点": "點",
  "党": "黨"
};

const CONTEXT_LABELS = {
  tw: {
    event: ["起因", "經過", "結果"],
    meme: ["來源", "傳播", "指向"]
  },
  cn: {
    event: ["起因", "经过", "结果"],
    meme: ["来源", "传播", "指向"]
  },
  en: {
    event: ["Cause", "Course", "Result"],
    meme: ["Origin", "Spread", "Meaning"]
  }
};

function toTraditional(text) {
  return Array.from(text).map((char) => TRAD_MAP[char] || char).join("");
}

function ctx(cnParts, enParts, kind = "event") {
  return {
    kind,
    cn: cnParts,
    tw: cnParts.map(toTraditional),
    en: enParts
  };
}

const CONTEXT_OVERRIDES = {
  "Cultural Revolution": ctx(
    ["毛泽东在大跃进失败后威望受损，又担心党内出现修正主义，于是借群众运动重新夺回政治主导权。", "1966 年起，红卫兵、造反派、批斗、抄家和派系斗争席卷全国，学校停课、干部和知识分子被冲击，军队后来介入维持秩序。", "1976 年毛泽东去世、四人帮被捕后运动结束。它造成大量死亡、迫害和教育经济停摆，后来被中共官方定性为严重内乱。"],
    ["Mao's authority had been damaged after the Great Leap Forward, and he used mass mobilization to regain dominance while warning against revisionism.", "From 1966, Red Guards, rebel factions, denunciations, home raids, and factional violence spread nationwide; schools closed, officials and intellectuals were attacked, and the army later intervened.", "The movement ended after Mao's death and the arrest of the Gang of Four in 1976. It caused mass persecution, deaths, educational collapse, and was later officially condemned as severe turmoil."]
  ),
  "Great Famine": ctx(
    ["大跃进的高指标、人民公社化、虚报产量和强制征粮叠加自然灾害，使农村粮食供应迅速崩溃。", "1959 到 1961 年，多地出现饥荒、逃荒和非正常死亡，但基层仍要完成征购任务，真实灾情长期被压低。", "饥荒造成数千万级人口损失和深远社会创伤，之后中共被迫调整经济政策，部分恢复自留地和务实生产安排。"],
    ["The Great Leap Forward's impossible quotas, commune system, inflated output reports, and grain procurement combined with natural disasters to collapse rural food supply.", "From 1959 to 1961, famine, flight, and excess deaths spread, while local officials still faced procurement targets and the scale of disaster was suppressed.", "The famine caused tens of millions of demographic losses and lasting trauma. The state later retreated to more pragmatic rural policies."]
  ),
  "Great Leap Forward": ctx(
    ["中共试图用政治动员快速超过工业化国家，把农业和钢铁生产变成运动式竞赛。", "地方层层加码，虚报粮食和钢产量，农村劳动力被拉去炼钢，人民公社和公共食堂削弱家庭生产与粮食分配。", "运动导致经济失序并直接推动大饥荒，中央随后收缩政策，毛泽东一度退居二线。"],
    ["The CCP tried to overtake industrial powers through political mobilization, turning agriculture and steel output into campaign targets.", "Local officials inflated grain and steel numbers, rural labor was diverted to backyard furnaces, and communes and canteens disrupted household production and food allocation.", "The campaign caused economic chaos and fed directly into the famine; policy was later rolled back and Mao temporarily stepped back from day-to-day governance."]
  ),
  "People Commune": ctx(
    ["人民公社是大跃进中追求高度集体化和军事化管理的制度安排。", "农户土地、劳动和生活被纳入公社，公共食堂、集体劳动和统一分配削弱了个人激励与真实产量反馈。", "公社制度加剧粮食分配失灵和饥荒风险，改革开放后逐步被家庭联产承包责任制取代。"],
    ["People's communes were a Great Leap Forward institution built around extreme collectivization and quasi-military administration.", "Land, labor, and daily life were absorbed into communes, with canteens, collective labor, and centralized allocation weakening incentives and accurate feedback.", "Communes worsened food-allocation failure and famine risk, and were later dismantled in favor of household responsibility farming."]
  ),
  "Anti Rightist Campaign": ctx(
    ["百花运动中知识分子和干部被鼓励批评党政问题，随后领导层认为批评威胁了统治权威。", "1957 年起，大量发言者被划为右派，遭到降职、劳改、流放或长期政治歧视。", "运动压制了公开批评和制度纠错能力，也让知识界在此后几十年更难独立发声。"],
    ["After the Hundred Flowers invitation to criticize party rule, leaders decided the criticism threatened authority.", "From 1957, many speakers were labeled rightists and faced demotion, labor reform, exile, or long-term discrimination.", "The campaign silenced open criticism and weakened institutional self-correction, leaving intellectual life deeply constrained."]
  ),
  "Hundred Flowers": ctx(
    ["中共在完成社会主义改造后希望释放有限批评，改善官僚主义和党群关系。", "知识分子响应号召提出制度批评，批评范围很快超出领导层预期。", "运动转入反右，许多批评者被打成右派，形成先开放再清算的历史记忆。"],
    ["After socialist transformation, the CCP invited limited criticism to address bureaucracy and party-society tensions.", "Intellectuals responded with deeper institutional criticism than leaders expected.", "The campaign turned into the Anti-Rightist Campaign, making it remembered as an invitation followed by punishment."]
  ),
  "Destroy Four Olds": ctx(
    ["文革发动后，毛泽东号召破除旧思想、旧文化、旧风俗、旧习惯，以制造革命断裂。", "红卫兵砸毁文物、抄家、改名和批斗，许多宗教、家族和地方文化遗产遭破坏。", "它造成不可逆文化损失，也让暴力政治深入日常生活。"],
    ["After the Cultural Revolution began, Mao called for destroying old ideas, culture, customs, and habits to force revolutionary rupture.", "Red Guards destroyed relics, raided homes, renamed places, and staged denunciations, damaging religious, family, and local heritage.", "It caused irreversible cultural loss and brought political violence into everyday life."]
  ),
  "Lin Biao Incident": ctx(
    ["林彪被写入党章为毛泽东接班人，但文革后期最高层权力关系高度紧张。", "1971 年林彪出逃途中飞机在蒙古坠毁，官方随后称其集团策划政变。", "事件重创个人崇拜和接班制度可信度，也改变了文革后期政治格局。"],
    ["Lin Biao had been written into the party constitution as Mao's successor, but elite power relations were highly tense.", "In 1971 his plane crashed in Mongolia during an alleged escape; authorities later accused his group of plotting a coup.", "The incident damaged the credibility of personality worship and succession arrangements, reshaping late Cultural Revolution politics."]
  ),
  "Gang of Four": ctx(
    ["文革后期，江青等人在宣传、文化和政治斗争中掌握巨大影响力。", "毛泽东去世后，华国锋、叶剑英等迅速采取行动逮捕四人帮。", "四人帮被审判后，文革责任被部分集中到他们身上，中共开启拨乱反正和改革前夜的政治重组。"],
    ["In the late Cultural Revolution, Jiang Qing and allies held major influence over propaganda, culture, and political struggle.", "After Mao's death, Hua Guofeng, Ye Jianying, and others moved quickly to arrest them.", "Their trial concentrated part of Cultural Revolution blame on them and opened the way for political reordering before reform."]
  ),
  "One Child Policy": ctx(
    ["改革开放初期，领导层担心人口增长拖累经济发展和资源分配。", "从 1980 年左右开始，地方通过准生证、罚款、强制节育甚至强制堕胎等方式执行一孩政策。", "政策降低了出生率，但也造成性别比失衡、老龄化压力、家庭创伤和基层权力滥用，后来改为二孩、三孩政策。"],
    ["In the early reform era, leaders feared population growth would constrain development and resources.", "From around 1980, local enforcement used birth permits, fines, forced sterilization, and sometimes forced abortions.", "The policy reduced fertility but caused gender imbalance, aging pressure, family trauma, and local abuses; it was later replaced by two-child and three-child policies."]
  ),
  "June Fourth": ctx(
    ["1989 年，通胀、腐败不满、胡耀邦去世和政治改革期待共同引发学生与市民抗议。", "抗议从悼念扩展到反腐和民主诉求，北京进入戒严，军队 6 月 3 日晚至 4 日凌晨武力清场。", "大量平民伤亡，运动被镇压，相关纪念和讨论在中国大陆长期被审查。"],
    ["In 1989, inflation, anger over corruption, Hu Yaobang's death, and hopes for political reform triggered student and citizen protests.", "The mourning expanded into anti-corruption and democratic demands; martial law was declared and troops cleared Beijing by force on the night of June 3-4.", "Many civilians were killed or wounded, the movement was crushed, and discussion or commemoration has long been censored in mainland China."]
  ),
  "Eight Nine Six Four": ctx(
    ["这个数字是 1989 年 6 月 4 日的缩写，源于天安门抗议被镇压的日期。", "在审查环境中，人们用数字、谐音、图片等方式绕过关键词过滤。", "它成为中国互联网记忆政治的核心暗号，也显示国家审查如何改变公共语言。"],
    ["The number abbreviates June 4, 1989, the date associated with the Tiananmen crackdown.", "Under censorship, people use digits, puns, and images to evade keyword filters.", "It became a central code of Chinese internet memory politics and shows how censorship reshapes public language."]
  ),
  "Tank Man": ctx(
    ["天安门清场后，北京街头仍有军队和装甲车辆，社会处于恐惧和混乱中。", "一名男子在长安街挡住坦克纵队，画面被外国记者拍下并传到世界各地。", "他的身份和结局至今不明；照片成为个人抵抗国家暴力的国际象征，在中国大陆则被严格审查。"],
    ["After the Tiananmen clearing, troops and armored vehicles remained in Beijing amid fear and disorder.", "A man blocked a column of tanks on Chang'an Avenue; foreign journalists captured and distributed the image worldwide.", "His identity and fate remain unknown. The image became a global symbol of individual resistance to state violence and is heavily censored in mainland China."]
  ),
  "Tiananmen Clearing": ctx(
    ["持续数周的学生和市民抗议被中央定性为动乱，强硬派决定用军队恢复控制。", "戒严部队从北京多个方向推进，6 月 3 日晚到 4 日凌晨使用实弹并清空广场及周边。", "清场造成严重伤亡和政治震荡，之后中国进入长期稳定优先、记忆封锁的治理模式。"],
    ["After weeks of student and citizen protests, leaders labeled the movement turmoil and hardliners chose military force.", "Martial-law troops advanced from multiple directions and used live fire from the night of June 3 into June 4 while clearing the square and nearby areas.", "The clearing caused severe casualties and political shock, followed by a long period of stability-first governance and memory control."]
  ),
  "Falun Gong Crackdown": ctx(
    ["法轮功在 1990 年代迅速扩张，组织能力和人数规模引起中共高层警惕。", "1999 年中南海上访后，当局将其定为非法组织，展开大规模抓捕、宣传批判和再教育。", "镇压延续多年，形成大量人权争议，也强化了中国对民间组织和信仰团体的控制。"],
    ["Falun Gong expanded rapidly in the 1990s, and its size and organization alarmed CCP leaders.", "After a 1999 appeal near Zhongnanhai, authorities banned it and launched arrests, propaganda attacks, and reeducation.", "The crackdown continued for years, generating major human-rights controversies and tightening control over civil and religious groups."]
  ),
  "Wenchuan Shoddy Schools": ctx(
    ["2008 年汶川地震中，大量校舍倒塌引发家长对工程质量和腐败的质疑。", "遇难学生家长和调查者要求公开名单、设计和施工责任，但维权与独立调查受到压力。", "事件留下豆腐渣工程的公共记忆，也暴露灾难问责在威权体制下的边界。"],
    ["In the 2008 Wenchuan earthquake, many schools collapsed, prompting parents to question construction quality and corruption.", "Parents and investigators demanded student lists and accountability for design and construction, but activism and independent inquiry faced pressure.", "The case left a public memory of shoddy construction and exposed the limits of disaster accountability under authoritarian rule."]
  ),
  "Tainted Milk Powder": ctx(
    ["乳制品企业为提高蛋白检测数值，在奶粉中掺入三聚氰胺，监管长期失灵。", "2008 年大量婴幼儿出现肾结石等问题，三鹿等企业被查处，事件才全面曝光。", "它重创中国食品安全信任，推动监管改革，但公众对企业和地方监管的疑虑长期存在。"],
    ["Dairy producers added melamine to fake protein readings, while regulation failed for a long time.", "In 2008 many infants developed kidney problems; Sanlu and other firms were investigated after the scandal broke.", "It devastated trust in Chinese food safety and prompted regulatory reforms, though public doubts about corporate and local oversight persisted."]
  ),
  "Wenzhou Train Crash": ctx(
    ["中国高铁快速扩张，但安全管理、信号系统和事故预案受到质疑。", "2011 年温州动车追尾后，救援和调查过程中出现掩埋车体等争议操作。", "事故造成重大伤亡，迫使高铁降速和安全整顿，也成为公共问责与舆论审查的标志事件。"],
    ["China's high-speed rail expanded rapidly, while safety management, signaling, and emergency planning were questioned.", "After the 2011 Wenzhou rear-end crash, rescue and investigation were clouded by controversial handling, including burying train cars.", "The crash caused major casualties, forced speed reductions and safety reviews, and became a symbol of accountability and censorship disputes."]
  ),
  "Bo Xilai Case": ctx(
    ["薄熙来在重庆以唱红打黑塑造政治明星形象，同时卷入权力斗争和家族利益争议。", "王立军事件引爆危机，随后薄熙来被免职、调查并受审。", "案件打破十八大前政治平衡，成为习近平上台前后清理高层对手和重塑纪律叙事的关键节点。"],
    ["Bo Xilai built a political brand in Chongqing through red songs and crime crackdowns while being entangled in power struggles and family-interest scandals.", "The Wang Lijun incident triggered the crisis, after which Bo was removed, investigated, and tried.", "The case disrupted pre-18th Party Congress politics and became a key moment in elite purging and discipline narratives around Xi's rise."]
  ),
  "Charter Zero Eight": ctx(
    ["中国改革开放后经济放松但政治改革停滞，知识分子和维权人士希望推动宪政转型。", "2008 年刘晓波等人发起零八宪章，提出分权、选举、人权和司法独立等诉求。", "刘晓波被判刑并获诺贝尔和平奖，宪章在大陆被封禁，却成为中国民主运动的重要文本。"],
    ["After economic reform but stalled political reform, intellectuals and rights advocates sought constitutional transformation.", "In 2008 Liu Xiaobo and others launched Charter 08, calling for separation of powers, elections, human rights, and judicial independence.", "Liu was imprisoned and later awarded the Nobel Peace Prize; the charter was banned in mainland China but became a landmark pro-democracy text."]
  ),
  "Liu Xiaobo": ctx(
    ["刘晓波长期参与中国民主、人权和言论自由活动，并参与起草零八宪章。", "他因煽动颠覆国家政权罪被判 11 年，服刑期间获得诺贝尔和平奖。", "2017 年他在羁押中病逝，引发国际批评，也成为中国政治犯处境的象征。"],
    ["Liu Xiaobo was a long-time advocate for democracy, human rights, and free speech, and helped draft Charter 08.", "He was sentenced to 11 years for inciting subversion and received the Nobel Peace Prize while imprisoned.", "He died in custody in 2017, drawing international criticism and becoming a symbol of China's political prisoners."]
  ),
  "Xinjiang Reeducation Camps": ctx(
    ["新疆发生暴力事件后，当局以反恐、去极端化和维稳为名扩张高压治理。", "2017 年前后，大规模拘押、政治学习、监控和强制同化措施被外界持续曝光。", "它引发国际人权争议、制裁和供应链审查，中国政府则以职业培训和反恐成效辩护。"],
    ["After violence in Xinjiang, authorities expanded high-pressure governance under counterterrorism, deradicalization, and stability slogans.", "Around 2017, mass detention, political study, surveillance, and forced assimilation measures were widely reported.", "The system triggered international human-rights disputes, sanctions, and supply-chain scrutiny, while Beijing defended it as vocational training and counterterrorism."]
  ),
  "Umbrella Movement": ctx(
    ["香港市民要求真普选，反对北京对行政长官候选人设置筛选机制。", "2014 年抗议者占领金钟、旺角等地，用雨伞抵挡催泪弹和胡椒喷雾。", "运动未争取到制度让步，但培养了新一代抗争者，并为 2019 年更大规模抗议埋下伏笔。"],
    ["Hong Kong citizens demanded genuine universal suffrage and opposed Beijing's screening of chief executive candidates.", "In 2014 protesters occupied Admiralty, Mong Kok, and other areas, using umbrellas against tear gas and pepper spray.", "The movement did not win institutional concessions, but shaped a new generation of activists and foreshadowed the 2019 protests."]
  ),
  "Anti Extradition Protests": ctx(
    ["香港政府推动逃犯条例修订，民众担心被引渡到中国大陆并失去司法保障。", "2019 年抗议从反修例扩大到警暴、民主和自治诉求，街头冲突和大规模游行持续数月。", "修例被撤回，但北京随后推动国安法，香港政治空间和公民社会急剧收缩。"],
    ["Hong Kong's government proposed an extradition bill, and citizens feared transfer to mainland China without legal protections.", "In 2019 the protests grew from opposing the bill to demands over police violence, democracy, and autonomy, with months of marches and clashes.", "The bill was withdrawn, but Beijing later imposed the National Security Law, sharply shrinking political space and civil society."]
  ),
  "Hong Kong National Security Law": ctx(
    ["2019 年反送中运动后，北京认为香港失控风险上升，决定直接重塑治理框架。", "2020 年全国人大绕过香港本地立法程序制定国安法，设立国安机构并引入分裂、颠覆等罪名。", "大量民主派人士被捕、媒体停办、组织解散，香港一国两制下的政治自由显著收缩。"],
    ["After the 2019 protests, Beijing concluded Hong Kong posed a control risk and moved to reshape governance directly.", "In 2020 the National People's Congress imposed the law outside Hong Kong's normal local legislative process, creating security bodies and offenses such as secession and subversion.", "Many democrats were arrested, media outlets closed, groups disbanded, and political freedoms under one country, two systems contracted sharply."]
  ),
  "Dynamic Zero COVID": ctx(
    ["中国在疫情初期依靠封控、检测和追踪压低感染，随后把清零上升为政治正确。", "2020 到 2022 年，地方通过封城、核酸、健康码和隔离维持低感染目标，代价是民生、经济和社会信任受损。", "2022 年底白纸抗议和奥密克戎传播压力下政策突然转向，清零结束但医疗挤兑和死亡争议随之而来。"],
    ["China initially suppressed COVID through lockdowns, testing, and tracing, then turned zero-COVID into political orthodoxy.", "From 2020 to 2022, localities used city lockdowns, PCR testing, health codes, and quarantine to maintain low infections, damaging livelihoods, the economy, and trust.", "In late 2022, amid white-paper protests and Omicron pressure, the policy abruptly ended, followed by medical strain and disputes over deaths."]
  ),
  "City Lockdown": ctx(
    ["封城源于防疫清零逻辑，把切断人员流动视为压制传播的最快办法。", "武汉、上海等城市曾出现长时间居家、物资短缺、就医困难和基层执行失控。", "封城短期降低传播，但也造成经济损失、心理创伤和对政府治理能力的质疑。"],
    ["Lockdowns came from the zero-COVID logic that cutting movement was the fastest way to suppress transmission.", "Cities such as Wuhan and Shanghai experienced prolonged home confinement, supply shortages, medical-access problems, and local enforcement chaos.", "Lockdowns reduced transmission in the short term but caused economic losses, psychological trauma, and doubts about governance capacity."]
  ),
  "Health Code": ctx(
    ["疫情治理需要快速判断个人流动风险，健康码把检测、行程和身份数据合成通行权限。", "各地用红黄绿码控制出行、上班和进入公共场所，也出现误赋码、维权者被赋红码等争议。", "健康码提高了管控效率，却让数字治理、隐私和行政权力扩张问题暴露出来。"],
    ["Pandemic control required fast risk judgments, and health codes merged testing, travel, and identity data into mobility permission.", "Localities used red, yellow, and green codes to control travel, work, and public access, with controversies over mistaken codes and red codes assigned to protesters.", "The system improved control efficiency but exposed issues of digital governance, privacy, and administrative power expansion."]
  ),
  "Routine PCR Testing": ctx(
    ["动态清零要求尽早发现感染者，地方把核酸检测常态化并与通行资格绑定。", "城市中出现大量检测亭、排队和财政采购，居民生活被检测节奏支配。", "政策结束后，核酸产业和公共财政浪费受到质疑，常态化检测成为清零时代的代表记忆。"],
    ["Zero-COVID required early case detection, so localities normalized PCR testing and tied it to mobility rights.", "Cities filled with testing booths, queues, and procurement spending, and daily life was organized around test schedules.", "After the policy ended, PCR industry profits and fiscal waste were questioned, making routine testing a defining memory of the zero-COVID era."]
  ),
  "White Paper Protests": ctx(
    ["长期封控、乌鲁木齐火灾争议和社会压抑在 2022 年末集中爆发。", "多地民众举白纸抗议，白纸象征被审查到无法写出诉求，部分现场出现反封控和政治口号。", "抗议后清零政策迅速转向，但参与者遭到追查，白纸成为审查时代公共表达的象征。"],
    ["Long lockdowns, controversy over the Urumqi fire, and social frustration converged in late 2022.", "People in multiple cities held blank sheets, symbolizing censorship that left demands unwritten; some sites voiced anti-lockdown and political slogans.", "Zero-COVID ended soon after, but participants faced investigations, and the blank paper became a symbol of expression under censorship."]
  ),
  "Chained Woman": ctx(
    ["徐州丰县一名被铁链锁住的女性影像曝光，引发对拐卖、婚姻登记和基层治理的质疑。", "官方多次通报前后矛盾，舆论和网民持续追问她的身份、遭遇和责任链。", "事件推动拐卖妇女议题重新进入公共视野，也暴露地方遮掩和女性权利保护不足。"],
    ["Video of a chained woman in Feng County, Xuzhou raised questions about trafficking, marriage registration, and local governance.", "Official statements contradicted each other as public pressure demanded answers about her identity, suffering, and responsibility chain.", "The case revived attention to trafficking of women and exposed local cover-ups and weak protection of women's rights."]
  ),
  "Peng Shuai Case": ctx(
    ["网球运动员彭帅公开指控前高层官员张高丽，引发性侵、权力和审查议题。", "相关内容迅速被删除，彭帅一度从公众视野消失，国际女子网球协会等组织要求确认其安全。", "事件成为中国审查处理高层丑闻的典型案例，也让国际体育组织与中国市场关系受到考验。"],
    ["Tennis player Peng Shuai publicly accused former senior official Zhang Gaoli, raising issues of sexual assault, power, and censorship.", "The post was quickly deleted, Peng disappeared from public view for a period, and groups such as the WTA demanded proof of her safety.", "The case became a key example of censorship around elite scandals and tested the relationship between international sports bodies and the Chinese market."]
  ),
  "Evergrande Crisis": ctx(
    ["中国房地产长期依赖高杠杆、预售和地方土地财政，恒大扩张尤其激进。", "监管收紧和销售下滑后，恒大债务链断裂，大量项目停工、供应商和购房者受损。", "危机拖累房地产信心和地方财政，成为中国增长模式转折的标志事件。"],
    ["China's property sector relied on high leverage, presales, and local land finance, while Evergrande expanded especially aggressively.", "After tighter regulation and falling sales, Evergrande's debt chain broke, projects stalled, and suppliers and homebuyers were hurt.", "The crisis damaged property confidence and local finances, becoming a symbol of China's growth-model turning point."]
  ),
  "Unfinished Homes": ctx(
    ["预售制让购房者先还贷、开发商后交房，一旦资金链断裂就会形成烂尾。", "2020 年后房地产下行，大量项目停工，部分业主发起停贷抗议。", "烂尾楼削弱家庭财富安全感，也迫使政府和银行介入保交楼。"],
    ["The presale system makes buyers pay mortgages before completion, so developers' funding failures can leave homes unfinished.", "After the property downturn from 2020, many projects stopped and some homeowners launched mortgage boycotts.", "Unfinished homes damaged household wealth security and forced governments and banks into delivery-rescue programs."]
  ),
  "Village Bank Scandal": ctx(
    ["河南等地村镇银行通过线上渠道吸收异地存款，背后存在股东控制和资金挪用问题。", "2022 年储户取款困难后赴当地维权，部分人健康码被赋红码引发更大愤怒。", "事件暴露中小金融机构监管漏洞，也让健康码被行政滥用的风险被广泛看见。"],
    ["Village banks in Henan and elsewhere attracted deposits online from outside their regions, with shareholder control and fund misuse behind the scenes.", "In 2022 depositors who could not withdraw money protested locally, and some were assigned red health codes, intensifying outrage.", "The scandal exposed weak regulation of small banks and showed the risk of administrative abuse of health-code systems."]
  ),
  "Common Prosperity": ctx(
    ["贫富差距、平台资本扩张和社会不满促使官方重新强调分配公平。", "2021 年后，共同富裕被用于监管科技、教培、房地产和高收入群体，也伴随企业捐赠与政策表态。", "它提升了再分配话语，但也加剧民营资本对政策不确定性的担忧。"],
    ["Inequality, platform-capital expansion, and social frustration pushed officials to reemphasize distributional fairness.", "After 2021, common prosperity framed regulation of tech, tutoring, property, and high-income groups, alongside corporate donations and policy pledges.", "It raised redistribution rhetoric but also increased private-sector anxiety about policy uncertainty."]
  ),
  "Great Firewall": ctx(
    ["互联网进入中国后，党国体制需要在经济开放和信息控制之间取得平衡。", "政府通过域名封锁、关键词过滤、平台责任和技术审查建立防火长城。", "它塑造了墙内墙外两个信息环境，也催生翻墙、谐音和隐喻表达。"],
    ["As the internet entered China, the party-state sought to balance economic openness with information control.", "Authorities built the Great Firewall through domain blocking, keyword filtering, platform responsibility, and technical censorship.", "It created separate information worlds inside and outside the wall and produced circumvention, puns, and coded speech."]
  ),
  "Social Credit": ctx(
    ["政府希望用数据和惩戒机制提升市场诚信、社会治理和行政执行力。", "各地把失信名单、金融信用、法院执行和公共管理数据接入不同系统，外界常把它概括为社会信用。", "它确实用于惩戒失信行为，但也引发对数据滥用、黑箱评分和社会控制扩张的担忧。"],
    ["The government sought to use data and penalties to improve market trust, social governance, and administrative execution.", "Local systems connected court enforcement, financial credit, public management, and blacklists under the broad label of social credit.", "It is used against dishonest conduct, but also raises concerns about data abuse, opaque scoring, and expanding social control."]
  ),
  "Belt and Road": ctx(
    ["中国在产能过剩、外汇储备和全球影响力扩张背景下提出一带一路。", "政府和国企向亚非欧等地推动港口、铁路、电站和贷款项目。", "它扩大中国影响力和基础设施足迹，也带来债务、腐败、环境和地缘政治争议。"],
    ["China proposed Belt and Road amid excess capacity, large foreign reserves, and ambitions for global influence.", "The state and state firms promoted ports, railways, power plants, and loans across Asia, Africa, Europe, and beyond.", "It expanded China's influence and infrastructure footprint while bringing debt, corruption, environmental, and geopolitical controversies."]
  ),
  "Zero COVID Patriarch": ctx(
    ["这个外号来自动态清零后期，把政策和最高领导人的个人权威绑定起来嘲讽。", "网民用宗派称号包装防疫政策，暗示核酸、封控和健康码像教条一样不能被质疑。", "它指向清零政治化后的责任归属：政策被宣传成英明部署，代价也自然被追问到权力顶端。"],
    ["The nickname emerged in the late zero-COVID period, tying the policy to the top leader's personal authority.", "Users framed testing, lockdowns, and health codes as dogma that could not be questioned.", "It points at responsibility under politicized zero-COVID: if the policy was sold as wise top-level design, its costs also lead back to the top."]
  , "meme"),
  "New Quality Productive Forces": ctx(
    ["这个官方热词出现在经济转型压力、房地产下行和科技竞争加剧的背景下。", "宣传中它被用来指高科技、高效率和产业升级，各地随后把它写进政策文件和招商口号。", "它的现实结果取决于技术创新和制度环境；网民调侃的是口号先行、地方 KPI 化的惯性。"],
    ["The slogan rose amid pressure for economic transition, a property downturn, and intensified technology competition.", "Propaganda uses it to mean high-tech, high-efficiency industrial upgrading, and local governments quickly put it into policy documents and investment pitches.", "Its real effect depends on innovation and institutions; the meme targets slogan-first governance and local KPI routines."]
  , "meme"),
  "Historical Garbage Time": ctx(
    ["这个说法来自经济放缓、青年失业、阶层流动变弱和政治无力感累积。", "网民借体育比赛垃圾时间比喻历史进程：比赛还没结束，但很多人觉得个人努力难以改变结局。", "它成为当代中国社会情绪的缩写，表达的不是单一事件，而是对未来预期下降的集体感受。"],
    ["The phrase grew from slowing growth, youth unemployment, weaker mobility, and political powerlessness.", "Users borrow sports garbage time to describe history: the match is not over, but many feel individual effort can no longer change the result.", "It became shorthand for a social mood in China: not one event, but a collective lowering of expectations about the future."]
  , "meme"),
  "Personally Commanded": ctx(
    ["来源是官方宣传常说最高领导人对重大工作亲自指挥、亲自部署。", "疫情、防灾、扶贫、重大工程等报道反复使用这种句式，网民把它改成责任梗。", "它讽刺权力高度集中：如果功劳都归于亲自部署，失败和代价也难以只推给基层。"],
    ["The origin is official propaganda saying the top leader personally commands and deploys major work.", "Reports on COVID, disaster response, poverty alleviation, and major projects repeated the formula, and users turned it into a responsibility meme.", "It satirizes concentrated power: if credit belongs to personal deployment, failures and costs cannot be blamed only on lower levels."]
  , "meme"),
  "Trade and Undress": ctx(
    ["这个梗来自习近平读稿时把相关措辞读错，引发网民记忆。", "由于直接讨论领导人失误容易被审查，网民用截图、谐音和转述传播。", "它的指向不是单纯口误，而是官方塑造完美领袖形象与真实表达能力之间的反差。"],
    ["The meme came from a Xi speech-reading slip that stuck in online memory.", "Because direct discussion of leader mistakes is sensitive, users spread it through screenshots, puns, and indirect references.", "Its meaning is not just a verbal slip, but the contrast between a flawless official image and visible human error."]
  , "meme"),
  "Constitutional Emperor": ctx(
    ["2018 年修宪取消国家主席任期限制，使最高领导人长期执政的制度障碍被拆除。", "舆论无法公开反对，于是用称帝、登基、复辟等隐喻表达不安。", "这个梗指向任期限制消失后的个人集权风险，也解释了为什么相关词在墙内高度敏感。"],
    ["The 2018 constitutional change removed presidential term limits, weakening a formal barrier to prolonged rule.", "Public opposition was constrained, so users turned to emperor, enthronement, and restoration metaphors.", "The meme points at risks of personal rule after term limits vanish, which explains why related words are highly sensitive inside the firewall."]
  , "meme"),
  "The One": ctx(
    ["来源是定于一尊等政治语言，把最高领导人的核心地位神圣化。", "在审查环境中，网民用一尊这种不点名的称呼代替习近平。", "它指向个人崇拜和避讳文化：名字不能直说，量词反而变成政治暗号。"],
    ["The origin is political language such as one supreme figure, which sacralizes the top leader's core status.", "Under censorship, users use The One as an unnamed reference to Xi.", "It points at personality cult and taboo culture: when the name cannot be said directly, a measure word becomes political code."]
  , "meme"),
  "White Paper Revolution": ctx(
    ["长期封控、公共事件和言论限制积累到 2022 年末，引发多地抗议。", "白纸因为没有文字而难以被定性，却清楚表达了被审查到无法说话的状态。", "它推动清零政策迅速转向，也让白纸成为当代中国抗议和记忆政治的符号。"],
    ["Long lockdowns, public tragedies, and speech restrictions accumulated by late 2022 and triggered protests in multiple cities.", "Blank paper carried no words, making it hard to criminalize while clearly expressing a censored inability to speak.", "It helped accelerate the end of zero-COVID and made blank paper a symbol of protest and memory politics in contemporary China."]
  ),
  "October Revolution": ctx(
    ["一战、沙皇体制崩溃、贫困和临时政府无力退出战争，给布尔什维克夺权创造条件。", "1917 年 11 月，布尔什维克在彼得格勒发动武装起义，推翻临时政府并建立苏维埃政权。", "革命开启苏联建国进程，也把一党专政、红色恐怖和全球共产主义运动推上历史舞台。"],
    ["World War I, the collapse of tsarism, poverty, and the provisional government's failure to exit the war created conditions for Bolshevik seizure of power.", "In November 1917, the Bolsheviks launched an armed uprising in Petrograd, overthrew the provisional government, and built Soviet power.", "The revolution led to the creation of the USSR and brought one-party rule, Red Terror, and global communism onto the world stage."]
  ),
  "Great Purge": ctx(
    ["斯大林为了巩固个人权力，清除党内、军内和社会中真实或想象的敌人。", "1936 到 1938 年，大规模逮捕、逼供、公开审判和处决席卷苏联精英与普通人。", "清洗造成大量死亡和恐惧，削弱军队和社会信任，也强化了斯大林的绝对统治。"],
    ["Stalin sought to consolidate personal power by eliminating real or imagined enemies in the party, army, and society.", "From 1936 to 1938, mass arrests, forced confessions, show trials, and executions struck elites and ordinary people.", "The purge caused mass death and fear, weakened the military and social trust, and strengthened Stalin's absolute rule."]
  ),
  "Gulag": ctx(
    ["苏联把政治镇压、刑事惩罚和经济开发结合起来，形成劳改营体系。", "大量政治犯、普通犯和被集体惩罚的人被送往矿山、森林和极寒地区强制劳动。", "古拉格造成巨大死亡和创伤，成为极权国家用劳动和恐惧治理社会的象征。"],
    ["The USSR combined political repression, criminal punishment, and economic development into a labor-camp system.", "Political prisoners, common criminals, and collectively punished groups were sent to mines, forests, and freezing regions for forced labor.", "The Gulag caused mass death and trauma and became a symbol of totalitarian rule through labor and fear."]
  ),
  "Holodomor": ctx(
    ["斯大林集体化农业和强制征粮在乌克兰遭遇抵抗，中央以高压方式夺取粮食。", "1932 到 1933 年，征粮、封锁村庄和限制流动导致大规模饥饿死亡。", "乌克兰将其视为针对民族的饥荒与种族灭绝，俄罗斯和部分叙事则持续争议其定性。"],
    ["Stalin's collectivization and grain requisition met resistance in Ukraine, and Moscow extracted grain by coercive means.", "In 1932-1933, requisitions, village blockades, and movement restrictions produced mass starvation.", "Ukraine regards it as a national famine and genocide, while Russia and other narratives continue to dispute the classification."]
  ),
  "Prague Spring": ctx(
    ["捷克斯洛伐克改革派试图在社会主义框架内扩大言论自由、经济改革和政治开放。", "1968 年苏联担心改革扩散，率华约军队入侵布拉格，结束改革。", "事件证明苏联不允许东欧卫星国脱离控制，也让改革社会主义的幻想遭到重创。"],
    ["Czechoslovak reformers tried to expand speech, economic reform, and political openness within socialism.", "In 1968 the USSR feared contagion and led Warsaw Pact forces into Prague to end the reforms.", "The event showed Moscow would not allow Eastern European satellites to leave its control and damaged hopes for reform socialism."]
  ),
  "Hungarian Uprising": ctx(
    ["匈牙利社会不满苏联控制、秘密警察和经济困境，改革呼声迅速扩大。", "1956 年布达佩斯爆发起义，纳吉政府宣布改革并试图退出华约，苏军随后大规模镇压。", "起义失败，数千人死亡，许多人流亡，东欧继续处于苏联势力范围。"],
    ["Hungarians were angry at Soviet control, secret police, and economic hardship, and reform demands spread quickly.", "In 1956 Budapest rose up; Imre Nagy's government announced reforms and tried to leave the Warsaw Pact, before Soviet troops crushed the uprising.", "The revolt failed, thousands died, many fled, and Eastern Europe remained under Soviet domination."]
  ),
  "Berlin Wall": ctx(
    ["东德人口持续逃往西柏林，威胁社会主义阵营形象和东德经济。", "1961 年东德在苏联支持下修建柏林墙，切断城市和家庭，边境射杀逃亡者。", "1989 年墙倒塌，成为冷战结束和东欧共产政权崩解的象征。"],
    ["East Germans kept fleeing to West Berlin, damaging the socialist bloc's image and East Germany's economy.", "In 1961 East Germany, backed by the USSR, built the wall, dividing a city and families and shooting escapees at the border.", "Its fall in 1989 became a symbol of the end of the Cold War and the collapse of Eastern European communist regimes."]
  ),
  "Chernobyl": ctx(
    ["苏联核工业存在设计缺陷、安全文化薄弱和官僚隐瞒倾向。", "1986 年切尔诺贝利核电站试验失控爆炸，当局最初延迟通报和疏散。", "事故造成长期健康、环境和信任危机，也被认为加速了苏联体制合法性衰败。"],
    ["Soviet nuclear industry suffered from design flaws, weak safety culture, and bureaucratic concealment.", "In 1986 a test at Chernobyl went out of control and the reactor exploded; authorities initially delayed notification and evacuation.", "The disaster caused long-term health, environmental, and trust crises and is often seen as accelerating the USSR's legitimacy collapse."]
  ),
  "Soviet Collapse": ctx(
    ["长期经济停滞、民族矛盾、军备压力和戈尔巴乔夫改革削弱了苏联控制力。", "1989 后东欧剧变，苏联内部加盟共和国要求主权，1991 年八一九政变失败后联盟迅速瓦解。", "苏联解体为 15 个国家，冷战结束，但也留下经济震荡、身份冲突和后苏联权力重组。"],
    ["Long economic stagnation, national tensions, arms-race pressure, and Gorbachev's reforms weakened Soviet control.", "After Eastern Europe changed in 1989, Soviet republics demanded sovereignty; the failed August 1991 coup accelerated collapse.", "The USSR broke into 15 states and the Cold War ended, leaving economic shock, identity conflicts, and post-Soviet power struggles."]
  ),
  "Sunflower Movement": ctx(
    ["台湾学生和公民团体担心服贸协议审查过快、加深对中国经济依赖。", "2014 年抗议者占领立法院，要求逐条审查和建立两岸协议监督机制。", "运动阻止服贸快速通过，影响台湾青年政治参与，也改变之后两岸政策辩论。"],
    ["Taiwanese students and civic groups feared the services trade pact was being reviewed too quickly and would deepen economic dependence on China.", "In 2014 protesters occupied the legislature, demanding article-by-article review and oversight of cross-strait agreements.", "The movement blocked fast passage of the pact, reshaped youth political participation, and changed later cross-strait debates."]
  ),
  "White Terror": ctx(
    ["国民党迁台后面对内战失败、共产党渗透恐惧和巩固统治需求。", "戒严时期，政府以反共为名逮捕、审判、处决或监禁大量政治异议者。", "白色恐怖造成长期社会创伤，民主化后台湾通过档案开放、平反和转型正义处理其遗产。"],
    ["After the KMT retreated to Taiwan, fear of communist infiltration and the need to consolidate rule drove repression.", "During martial law, the government arrested, tried, executed, or imprisoned many dissidents in the name of anti-communism.", "The White Terror left lasting trauma; after democratization Taiwan addressed it through archives, rehabilitation, and transitional justice."]
  ),
  "Kaohsiung Incident": ctx(
    ["1970 年代台湾党外运动要求民主改革，威权政府仍限制结社和言论。", "1979 年美丽岛杂志社在高雄举办人权日集会，警方与民众冲突后政府大规模逮捕反对派。", "审判反而让反对派理念公开化，许多被告和辩护律师后来成为台湾民主化核心人物。"],
    ["In the 1970s Taiwan's dangwai opposition demanded democratic reform while the authoritarian state restricted association and speech.", "In 1979 Formosa Magazine organized a Human Rights Day rally in Kaohsiung; after clashes, the government arrested opposition figures.", "The trials publicized opposition ideas, and many defendants and lawyers later became central figures in Taiwan's democratization."]
  ),
  "Watergate": ctx(
    ["尼克松政府为了竞选优势和政治控制，形成秘密监听和打击对手的操作网络。", "1972 年民主党总部遭闯入，媒体、法院和国会调查逐步追到白宫录音带。", "尼克松 1974 年辞职，事件强化了美国对总统权力、媒体监督和国会调查的制度警惕。"],
    ["The Nixon administration built a network of surveillance and dirty tricks for electoral advantage and political control.", "After the 1972 break-in at Democratic headquarters, media, courts, and Congress traced the scandal to White House tapes.", "Nixon resigned in 1974, and Watergate strengthened institutional suspicion of presidential power, press oversight, and congressional investigation."]
  ),
  "Patriot Act": ctx(
    ["九一一恐怖袭击后，美国政府急于扩大反恐侦查和情报共享能力。", "国会通过爱国者法案，扩大监听、数据调取、金融追踪和移民执法权限。", "它提升了反恐工具，但也引发长期隐私、正当程序和国家安全权力过度扩张争议。"],
    ["After the September 11 attacks, the U.S. government sought broader counterterrorism investigation and intelligence-sharing powers.", "Congress passed the Patriot Act, expanding surveillance, data access, financial tracking, and immigration enforcement authorities.", "It strengthened counterterrorism tools but triggered long-running disputes over privacy, due process, and excessive national-security power."]
  ),
  "PRISM Program": ctx(
    ["九一一后美国情报体系扩大网络监控，科技平台掌握越来越多通信数据。", "2013 年斯诺登披露 PRISM 等项目，显示国安局可获取大量互联网通信资料。", "事件引发全球隐私和监控争议，推动科技公司加密和透明度报告，也损害美国数字信任。"],
    ["After 9/11, U.S. intelligence expanded online surveillance while tech platforms held growing communication data.", "In 2013 Edward Snowden disclosed PRISM and related programs, showing NSA access to large amounts of internet communications.", "The revelations triggered global privacy debates, pushed tech firms toward encryption and transparency reports, and damaged trust in U.S. digital power."]
  ),
  "Kim Three Fat": ctx(
    ["这个中文外号来自金氏家族第三代世袭统治和金正恩个人形象。", "网民用三胖把金正日、金日成、金正恩的家族延续和身材嘲讽混在一起。", "它是对朝鲜王朝式社会主义的黑色幽默，重点在讽刺世袭极权而不只是外貌。"],
    ["The Chinese nickname comes from third-generation Kim family rule and Kim Jong Un's public image.", "Users mix the idea of the three Kims with body-image mockery in a compressed nickname.", "It is dark humor about dynastic socialism in North Korea, aimed mainly at hereditary dictatorship rather than appearance alone."]
  , "meme"),
  "Juche": ctx(
    ["朝鲜在中苏夹缝和冷战环境中需要一套强调自主的合法性叙事。", "金日成把主体思想塑造成国家意识形态，强调政治自主、经济自立和军事自卫。", "它巩固了朝鲜封闭体制和领袖崇拜，也常被用来解释朝鲜与外部世界的隔绝。"],
    ["North Korea needed a legitimacy narrative of autonomy while balancing China, the USSR, and the Cold War.", "Kim Il Sung made Juche the state ideology, stressing political independence, economic self-reliance, and military self-defense.", "It reinforced North Korea's closed system and leader cult and is often used to explain its isolation from the outside world."]
  ),
  "Arduous March": ctx(
    ["苏联解体后援助减少，朝鲜经济结构僵化，加上灾害和政策失误导致粮食系统崩溃。", "1990 年代中后期，大量民众饥饿、逃荒或依靠黑市生存，官方用苦难行军包装灾难。", "饥荒造成大量死亡和社会结构变化，黑市扩张，脱北潮也明显增加。"],
    ["After the Soviet collapse, aid declined, North Korea's rigid economy struggled, and disasters plus policy failures collapsed food supply.", "In the mid-to-late 1990s, many starved, fled, or survived through markets while the state framed the disaster as the Arduous March.", "The famine caused mass deaths and social change, expanded informal markets, and increased defections."]
  ),
  "North Korean Defector": ctx(
    ["朝鲜长期封闭、粮食短缺、政治压迫和家庭求生压力促使一些人逃离。", "许多人先越过中朝边境，再经第三国辗转前往韩国或其他地区，途中面临遣返、贩卖和剥削风险。", "脱北者证词成为外界理解朝鲜人权状况的重要来源，也让中国遣返政策和难民保护问题持续受关注。"],
    ["North Korea's isolation, food shortages, political repression, and family survival pressures push some people to flee.", "Many first cross into China and then move through third countries toward South Korea or elsewhere, facing repatriation, trafficking, and exploitation risks.", "Defector testimony is a major source on North Korean human rights and keeps attention on China's repatriation policy and refugee protection."]
  )
};

function getCopy() {
  return TEXT[state.lang];
}

function getTerm(item = state.entry) {
  return item[state.lang];
}

function getClue(item = state.entry) {
  const key = state.lang === "tw" ? "clueTw" : state.lang === "cn" ? "clueCn" : "clueEn";
  return item[key];
}

function formatContextRecord(record) {
  const labels = CONTEXT_LABELS[state.lang][record.kind || "event"];
  const parts = record[state.lang] || record.en || record.cn || [];
  const separator = state.lang === "en" ? ": " : "：";
  return parts.map((part, index) => `${labels[index]}${separator}${part}`).join("\n");
}

function getContext(item = state.entry) {
  const override = CONTEXT_OVERRIDES[item.en];
  if (override) return formatContextRecord(override);
  const key = state.lang === "tw" ? "contextTw" : state.lang === "cn" ? "contextCn" : "contextEn";
  const copy = getCopy();
  const category = copy.categories[item.category] || "";
  const clue = getClue(item);
  if (item[key]) {
    const record = item.category === "ccpMetaphor" || item.category === "northKorea"
      ? {
          kind: "meme",
          tw: [`這個詞條來自${category}${item.year ? `（${item.year}）` : ""}的政治語境。`, item[key], "它在遊戲中作為暗語或黑話，幫助辨認權力宣傳、審查或個人崇拜的語感。"],
          cn: [`这个词条来自${category}${item.year ? `（${item.year}）` : ""}的政治语境。`, item[key], "它在游戏中作为暗语或黑话，帮助辨认权力宣传、审查或个人崇拜的语感。"],
          en: [`This entry comes from the political context of ${category}${item.year ? ` (${item.year})` : ""}.`, item[key], "In the game it works as slang or coded speech for recognizing propaganda, censorship, or personality-cult language."]
        }
      : {
          kind: "event",
          tw: [`這個詞條來自${category}${item.year ? `（${item.year}）` : ""}的歷史現場。`, item[key], "具體責任鏈和影響因事件而異；這裡先給出簡介，後續可繼續補更精確的專門檔案。"],
          cn: [`这个词条来自${category}${item.year ? `（${item.year}）` : ""}的历史现场。`, item[key], "具体责任链和影响因事件而异；这里先给出简介，后续可继续补更精确的专门档案。"],
          en: [`This entry comes from the historical context of ${category}${item.year ? ` (${item.year})` : ""}.`, item[key], "The exact responsibility chain and impact vary by case; this is a short note that can be replaced with a more precise dedicated file later."]
        };
    return formatContextRecord(record);
  }
  if (state.lang === "en") {
    return formatContextRecord({
      kind: item.category === "ccpMetaphor" ? "meme" : "event",
      en: [`It belongs to ${category}${item.year ? ` around ${item.year}` : ""}.`, `The clue summarizes the public meaning: ${clue}`, "This entry needs a dedicated cause-course-result note later; for now it is kept as a short factual pointer."]
    });
  }
  if (state.lang === "cn") {
    return formatContextRecord({
      kind: item.category === "ccpMetaphor" ? "meme" : "event",
      cn: [`它属于${category}${item.year ? `，时间约为 ${item.year}` : ""}。`, `线索先概括了它的公共含义：${clue}`, "这个词条之后可以继续补专门的起因、经过、结果；目前先保留为简短事实指针。"]
    });
  }
  return formatContextRecord({
    kind: item.category === "ccpMetaphor" ? "meme" : "event",
    tw: [`它屬於${category}${item.year ? `，時間約為 ${item.year}` : ""}。`, `線索先概括了它的公共含義：${clue}`, "這個詞條之後可以繼續補專門的起因、經過、結果；目前先保留為簡短事實指針。"]
  });
}

function loadSave() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (saved.lang && TEXT[saved.lang]) state.lang = saved.lang;
    if (saved.route === "time" || saved.route === "difficulty") state.route = saved.route;
    if (Number.isFinite(saved.level)) state.level = saved.level;
    if (Number.isFinite(saved.bestLevel)) state.bestLevel = saved.bestLevel;
    if (Number.isFinite(saved.score)) state.score = saved.score;
    if (Number.isFinite(saved.streak)) state.streak = saved.streak;
    if (typeof saved.muted === "boolean") state.muted = saved.muted;
    if (Number.isFinite(saved.volume)) state.volume = saved.volume;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveGame() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      lang: state.lang,
      route: state.route,
      level: state.level,
      bestLevel: state.bestLevel,
      score: state.score,
      streak: state.streak,
      muted: state.muted,
      volume: state.volume
    })
  );
}

function resetProgress() {
  stopTimer();
  state.level = 0;
  state.bestLevel = 0;
  state.score = 0;
  state.streak = 0;
  state.started = false;
  state.modal = null;
  state.locked = false;
  saveGame();
  setupLevel(0);
  render();
}

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(array, seed) {
  const random = mulberry32(seed);
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function tokenize(answer) {
  return tokenizeForLang(answer, state.lang);
}

function tokenizeForLang(answer, lang) {
  if (lang === "en") {
    return answer
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .map((unit) => unit.trim())
      .filter(Boolean);
  }
  return Array.from(answer.replace(/\s+/g, ""));
}

function getDecoyPool(lang) {
  if (lang === "en") {
    const words = WORD_BANK.flatMap((item) => item.en.split(/\s+/));
    return [...new Set([...words, ...EXTRA_DECOYS.en].map((word) => word.replace(/[^\w]/g, "")).filter((word) => word.length > 1))];
  }
  const fromBank = WORD_BANK.map((item) => item[lang]).join("");
  return Array.from(new Set(`${fromBank}${EXTRA_DECOYS[lang]}`.replace(/\s+/g, "")));
}

function makeTokens(item, levelNumber, mode, difficulty) {
  const units = tokenize(getTerm(item));
  const answerSet = new Set(units);
  const seed = hashString(`${item.en}-${state.lang}-${levelNumber}-${mode}`);
  const random = mulberry32(seed);
  const pool = shuffle(getDecoyPool(state.lang), seed + 97).filter((unit) => !answerSet.has(unit));
  const correct = units.map((value, index) => ({
    id: `a-${levelNumber}-${index}-${value}`,
    value,
    answer: true,
    used: false
  }));
  const lengthBoost = state.lang === "en" ? Math.max(2, units.length) : Math.min(8, units.length);
  const modeBoost = mode === "purge" ? 8 : mode === "pressure" ? 5 : mode === "echo" ? 4 : 2;
  const decoyCount = Math.min(pool.length, difficulty * 3 + modeBoost + lengthBoost);
  const decoys = [];
  for (let index = 0; index < decoyCount; index += 1) {
    const value = pool[Math.floor(random() * pool.length)];
    decoys.push({
      id: `d-${levelNumber}-${index}-${value}`,
      value,
      answer: false,
      used: false
    });
  }
  return shuffle([...correct, ...decoys], seed + 193);
}

function getTilePalette(difficulty) {
  const count = Math.min(TILE_TYPES.length, 4 + Math.max(0, difficulty - 1));
  return TILE_TYPES.slice(0, count);
}

function tileLabel(typeId) {
  const tile = TILE_TYPES.find((item) => item.id === typeId) || TILE_TYPES[0];
  return tile[state.lang] || tile.en;
}

function makeCell(random, palette, row, col) {
  const type = palette[Math.floor(random() * palette.length)].id;
  const cell = {
    id: `cell-${state.level}-${state.cellSerial}`,
    type,
    row,
    col
  };
  state.cellSerial += 1;
  return cell;
}

function makeGrid(levelIndex, difficulty) {
  state.cellSerial = 0;
  const size = state.gridSize;
  const palette = getTilePalette(difficulty);
  const random = mulberry32(hashString(`grid-${state.route}-${state.entry.en}-${levelIndex}-${difficulty}`));
  const grid = [];
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      grid.push(makeCell(random, palette, row, col));
    }
  }
  return grid;
}

function computeDecryptGoal(units, difficulty, mode) {
  const unitWeight = state.lang === "en" ? units.length * 10 : units.length * 8;
  const modeBoost = mode === "purge" ? 34 : mode === "pressure" ? 24 : mode === "echo" ? 16 : 8;
  return 72 + difficulty * 24 + unitWeight + modeBoost;
}

function updateRevealCount() {
  const ratio = Math.max(0, Math.min(1, state.decryptProgress / state.decryptGoal));
  state.revealedCount = Math.min(state.answerUnits.length, Math.floor(ratio * state.answerUnits.length));
  if (state.decryptProgress >= state.decryptGoal) {
    state.revealedCount = state.answerUnits.length;
  }
}

function getCellByPosition(row, col) {
  if (row < 0 || col < 0 || row >= state.gridSize || col >= state.gridSize) return null;
  return state.grid[row * state.gridSize + col] || null;
}

function getCellById(id) {
  return state.grid.find((cell) => cell && cell.id === id) || null;
}

function getNeighborCells(cell) {
  return [
    getCellByPosition(cell.row - 1, cell.col),
    getCellByPosition(cell.row + 1, cell.col),
    getCellByPosition(cell.row, cell.col - 1),
    getCellByPosition(cell.row, cell.col + 1)
  ].filter(Boolean);
}

function findGroup(startCell) {
  if (!startCell) return [];
  const visited = new Set([startCell.id]);
  const queue = [startCell];
  for (let index = 0; index < queue.length; index += 1) {
    const cell = queue[index];
    getNeighborCells(cell).forEach((next) => {
      if (next.type === startCell.type && !visited.has(next.id)) {
        visited.add(next.id);
        queue.push(next);
      }
    });
  }
  return queue;
}

function findBestGroup() {
  let best = [];
  const seen = new Set();
  state.grid.forEach((cell) => {
    if (!cell || seen.has(cell.id)) return;
    const group = findGroup(cell);
    group.forEach((item) => seen.add(item.id));
    if (group.length > best.length) best = group;
  });
  return best;
}

function applyGravity() {
  const size = state.gridSize;
  const palette = getTilePalette(state.difficulty);
  const random = Math.random;
  for (let col = 0; col < size; col += 1) {
    const survivors = [];
    for (let row = size - 1; row >= 0; row -= 1) {
      const cell = getCellByPosition(row, col);
      if (cell) survivors.push(cell);
    }
    let targetRow = size - 1;
    survivors.forEach((cell) => {
      cell.row = targetRow;
      cell.col = col;
      state.grid[targetRow * size + col] = cell;
      targetRow -= 1;
    });
    for (let row = targetRow; row >= 0; row -= 1) {
      state.grid[row * size + col] = makeCell(random, palette, row, col);
    }
  }
}

function ensurePlayableGrid() {
  let attempts = 0;
  while (findBestGroup().length < 2 && attempts < 8) {
    state.grid = makeGrid(state.level + attempts + Date.now(), state.difficulty);
    attempts += 1;
  }
}

function addDecryptProgress(amount) {
  state.decryptProgress = Math.min(state.decryptGoal, state.decryptProgress + amount);
  updateRevealCount();
  if (state.decryptProgress >= state.decryptGoal) {
    completeLevel();
  }
}

function parseYear(value) {
  const match = String(value || "").match(/\d{4}/);
  return match ? Number(match[0]) : 9999;
}

function getOrderedBank(route = state.route) {
  return WORD_BANK.map((item, index) => ({ item, index })).sort((a, b) => {
    if (route === "time") {
      return parseYear(a.item.year) - parseYear(b.item.year) || a.item.difficulty - b.item.difficulty || a.index - b.index;
    }
    return a.item.difficulty - b.item.difficulty || parseYear(a.item.year) - parseYear(b.item.year) || a.index - b.index;
  }).map((record) => record.item);
}

function getLevelEntry(levelIndex) {
  const ordered = getOrderedBank();
  return ordered[levelIndex % ordered.length];
}

function getLevelConfig(levelIndex) {
  const item = getLevelEntry(levelIndex);
  const lap = Math.floor(levelIndex / WORD_BANK.length);
  const seed = hashString(`${state.route}-${item.en}-${levelIndex}`);
  const random = mulberry32(seed);
  const randomDifficulty = 1 + Math.floor(random() * 5);
  const difficulty = Math.max(1, Math.min(5, Math.round((randomDifficulty * 2 + item.difficulty) / 3) + Math.min(1, lap)));
  const modePool = difficulty <= 2 ? ["blackout", "scramble", "echo"] : MODE_SEQUENCE;
  const mode = modePool[Math.floor(random() * modePool.length)];
  const units = tokenize(item[state.lang]);
  const unitWeight = state.lang === "en" ? units.length * 4 : units.length * 1.6;
  const timeJitter = Math.floor(random() * 17) - 8;
  const maxTime = Math.max(28, Math.round(106 - difficulty * 12 + unitWeight - lap * 4 + timeJitter));
  const hintJitter = random() > 0.72 ? -1 : random() > 0.28 ? 0 : 1;
  const hints = Math.max(1, Math.min(4, 4 - difficulty + (mode === "blackout" ? 1 : 0) + hintJitter));
  return { item, difficulty, mode, maxTime, hints, lap };
}

function setupLevel(levelIndex) {
  const config = getLevelConfig(levelIndex);
  state.entry = config.item;
  state.answerUnits = tokenize(getTerm(config.item));
  state.selected = [];
  state.revealedCount = 0;
  state.decryptProgress = 0;
  state.decryptGoal = computeDecryptGoal(state.answerUnits, config.difficulty, config.mode);
  state.combo = 0;
  state.moves = 0;
  state.gridSize = 7;
  state.grid = makeGrid(levelIndex, config.difficulty);
  state.tokens = [];
  state.maxTime = config.maxTime;
  state.timeLeft = config.maxTime;
  state.mistakes = 0;
  state.hintsLeft = config.hints;
  state.difficulty = config.difficulty;
  state.mode = config.mode;
  state.locked = false;
  state.modal = null;
  state.hintTokenId = null;
  state.wrongTokenId = null;
  state.highlightedCellIds = [];
  state.wrongCellId = null;
  state.endlessLap = config.lap;
  ensurePlayableGrid();
  updateRevealCount();
}

function startTimer() {
  stopTimer();
  state.timer = window.setInterval(() => {
    if (!state.started || state.locked || state.modal) return;
    state.timeLeft = Math.max(0, state.timeLeft - 0.2);
    if (state.timeLeft <= 0) {
      failLevel();
    } else {
      render();
    }
  }, 200);
}

function stopTimer() {
  if (state.timer) {
    window.clearInterval(state.timer);
    state.timer = null;
  }
}

async function beginGame() {
  state.started = true;
  await audio.start();
  audio.setVolume(state.volume);
  audio.setMuted(state.muted);
  startTimer();
  saveGame();
  render();
}

function handleCellClick(id) {
  if (!state.started || state.locked || state.modal) return;
  const cell = getCellById(id);
  if (!cell) return;
  const group = findGroup(cell);
  if (group.length >= 2) {
    const groupIds = new Set(group.map((item) => item.id));
    state.grid = state.grid.map((item) => (item && groupIds.has(item.id) ? null : item));
    state.moves += 1;
    state.combo += 1;
    state.highlightedCellIds = [];
    const sizeBonus = group.length * group.length;
    const comboBonus = state.combo * (3 + state.difficulty);
    const progressGain = group.length * (5 + state.difficulty) + comboBonus + (group.length >= 5 ? 18 : 0);
    state.score += sizeBonus + comboBonus + Math.max(0, Math.round(state.timeLeft / 12));
    if (group.length >= 6) {
      state.timeLeft = Math.min(state.maxTime, state.timeLeft + 3);
    }
    audio.correct();
    applyGravity();
    ensurePlayableGrid();
    addDecryptProgress(progressGain);
  } else {
    state.mistakes += 1;
    state.combo = 0;
    const penalty = state.mode === "purge" ? 5 : state.mode === "pressure" ? 4 : 3;
    state.timeLeft = Math.max(0, state.timeLeft - penalty);
    state.wrongCellId = id;
    audio.wrong();
    window.setTimeout(() => {
      state.wrongCellId = null;
      render();
    }, 260);
  }
  saveGame();
  render();
}

function useHint() {
  if (!state.started || state.locked || state.modal) return;
  if (state.hintsLeft <= 0) {
    flashNoHints();
    return;
  }
  const group = findBestGroup();
  if (group.length < 2) {
    flashNoHints();
    return;
  }
  state.hintsLeft -= 1;
  state.score = Math.max(0, state.score - 12);
  state.highlightedCellIds = group.map((cell) => cell.id);
  window.setTimeout(() => {
    state.highlightedCellIds = [];
    render();
  }, 1400);
  saveGame();
  render();
}

function flashNoHints() {
  const hintButton = document.querySelector("[data-action='hint']");
  if (!hintButton) return;
  hintButton.textContent = GAME_COPY[state.lang].scanEmpty;
  window.setTimeout(render, 900);
}

function shuffleTokens() {
  if (!state.started || state.locked || state.modal) return;
  state.grid = makeGrid(state.level + Date.now(), state.difficulty);
  state.highlightedCellIds = [];
  state.combo = 0;
  state.score = Math.max(0, state.score - 15);
  ensurePlayableGrid();
  render();
}

function skipLevel() {
  if (!state.started || state.locked || state.modal) return;
  state.score = Math.max(0, state.score - 80);
  state.streak = 0;
  state.level += 1;
  state.bestLevel = Math.max(state.bestLevel, state.level);
  setupLevel(state.level);
  saveGame();
  startTimer();
  render();
}

function calculateStars() {
  const ratio = state.timeLeft / state.maxTime;
  if (state.mistakes === 0 && ratio >= 0.48) return 3;
  if (state.mistakes <= 2 && ratio >= 0.25) return 2;
  return 1;
}

function completeLevel() {
  state.locked = true;
  const stars = calculateStars();
  const bonus = stars * 90 + Math.round(state.timeLeft * 3);
  state.score += bonus;
  state.streak += 1;
  state.level += 1;
  state.bestLevel = Math.max(state.bestLevel, state.level);
  state.modal = {
    type: "complete",
    stars,
    answer: getTerm(),
    clue: getClue(),
    context: getContext(),
    score: bonus
  };
  audio.complete();
  saveGame();
  render();
}

function failLevel() {
  state.locked = true;
  state.streak = 0;
  state.modal = {
    type: "failed",
    answer: getTerm(),
    clue: getClue(),
    context: getContext()
  };
  audio.wrong();
  saveGame();
  render();
}

function nextLevel() {
  setupLevel(state.level);
  state.started = true;
  startTimer();
  saveGame();
  render();
}

function retryLevel() {
  setupLevel(state.level);
  state.started = true;
  startTimer();
  saveGame();
  render();
}

function markSelectedTokensUsed() {
  state.tokens.forEach((token) => {
    token.used = false;
  });
  state.selected.forEach((unit) => {
    const token = state.tokens.find((item) => !item.used && item.answer && item.value === unit);
    if (token) token.used = true;
  });
}

function setRoute(route) {
  if (route !== "time" && route !== "difficulty") return;
  if (state.route === route) return;
  state.route = route;
  if (!state.started) {
    setupLevel(state.level);
  }
  saveGame();
  render();
}

function setLanguage(lang) {
  if (!TEXT[lang]) return;
  const oldProgressRatio = state.decryptGoal > 0 ? state.decryptProgress / state.decryptGoal : 0;
  state.lang = lang;
  document.documentElement.lang = lang === "en" ? "en" : lang === "cn" ? "zh-Hans" : "zh-Hant";
  if (state.entry && state.started) {
    state.answerUnits = tokenize(getTerm(state.entry));
    state.decryptGoal = computeDecryptGoal(state.answerUnits, state.difficulty, state.mode);
    state.decryptProgress = Math.min(state.decryptGoal, Math.round(state.decryptGoal * oldProgressRatio));
    updateRevealCount();
    if (state.modal) {
      state.modal.answer = getTerm();
      state.modal.clue = getClue();
      state.modal.context = getContext();
    }
  } else {
    setupLevel(state.level);
  }
  saveGame();
  render();
}

function setMuted() {
  state.muted = !state.muted;
  audio.setMuted(state.muted);
  saveGame();
  renderTopbar();
}

function setVolume(value) {
  state.volume = Number(value);
  state.muted = state.volume <= 0;
  audio.setVolume(state.volume);
  audio.setMuted(state.muted);
  saveGame();
  renderTopbar();
}

function starText(count) {
  return "★".repeat(count) + "☆".repeat(Math.max(0, 3 - count));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTopbar() {
  const copy = getCopy();
  titleEl.textContent = copy.title;
  subtitleEl.textContent = copy.subtitle;
  soundToggle.textContent = state.muted ? "×" : "♪";
  soundToggle.classList.toggle("muted", state.muted);
  soundToggle.setAttribute("aria-label", state.muted ? copy.muted : copy.sound);
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

function renderRouteSwitch(compact = false) {
  const routeCopy = ROUTE_COPY[state.lang];
  return `
    <div class="route-block ${compact ? "compact" : ""}">
      <div class="panel-kicker">${escapeHtml(routeCopy.route)}</div>
      <div class="route-switch" role="group" aria-label="${escapeHtml(routeCopy.route)}">
        <button class="route-option ${state.route === "time" ? "active" : ""}" type="button" data-route="time">
          <span class="route-title">${escapeHtml(routeCopy.time)}</span>
          ${compact ? "" : `<span class="route-copy">${escapeHtml(routeCopy.timeDesc)}</span>`}
        </button>
        <button class="route-option ${state.route === "difficulty" ? "active" : ""}" type="button" data-route="difficulty">
          <span class="route-title">${escapeHtml(routeCopy.difficulty)}</span>
          ${compact ? "" : `<span class="route-copy">${escapeHtml(routeCopy.difficultyDesc)}</span>`}
        </button>
      </div>
    </div>
  `;
}

function renderStart() {
  const copy = getCopy();
  const hasProgress = state.bestLevel > 0 || state.level > 0;
  root.innerHTML = `
    <section class="empty-state">
      <div class="start-panel">
        <div class="panel-kicker">${escapeHtml(copy.unlocked)} ${WORD_BANK.length}</div>
        <h2 class="start-title">${escapeHtml(copy.startTitle)}</h2>
        <p class="start-copy">${escapeHtml(copy.startCopy)}</p>
        <div class="reward-row">
          <span class="reward-chip">${escapeHtml(copy.level)} ${state.level + 1}</span>
          <span class="reward-chip">${escapeHtml(copy.score)} ${state.score}</span>
          <span class="reward-chip">${escapeHtml(copy.streak)} ${state.streak}</span>
        </div>
        ${renderRouteSwitch(false)}
        <div class="puzzle-actions">
          <button class="primary-button" type="button" data-action="begin">${escapeHtml(hasProgress ? copy.continue : copy.start)}</button>
          <button class="ghost-button" type="button" data-action="reset">${escapeHtml(copy.reset)}</button>
        </div>
      </div>
    </section>
  `;
}

function render() {
  renderTopbar();
  if (!state.started) {
    renderStart();
    bindDynamicEvents();
    return;
  }
  root.innerHTML = `
    <section class="game-grid">
      ${renderStatusPanel()}
      ${renderPuzzlePanel()}
      ${renderQueuePanel()}
    </section>
    ${state.modal ? renderModal() : ""}
  `;
  bindDynamicEvents();
}

function renderStatusPanel() {
  const copy = getCopy();
  const gameCopy = GAME_COPY[state.lang];
  const chapterStart = Math.floor(state.level / 6) * 6;
  const levelInChapter = state.level - chapterStart;
  const timePercent = Math.max(0, Math.min(100, (state.timeLeft / state.maxTime) * 100));
  return `
    <aside class="panel status-panel">
      <div class="panel-kicker">${escapeHtml(copy.chapter)} ${Math.floor(state.level / 6) + 1}</div>
      <h2 class="level-title">${escapeHtml(copy.level)} ${state.level + 1}</h2>
      <div class="meter-row">
        <span class="meter-label">${escapeHtml(copy.time)}</span>
        <span class="meter-time">${Math.ceil(state.timeLeft)}s</span>
      </div>
      <div class="meter-track" aria-hidden="true">
        <div class="meter-fill" style="width: ${timePercent}%"></div>
      </div>
      <div class="stat-grid">
        <div class="stat"><div class="stat-label">${escapeHtml(copy.score)}</div><div class="stat-value">${state.score}</div></div>
        <div class="stat"><div class="stat-label">${escapeHtml(gameCopy.combo)}</div><div class="stat-value">${state.combo}</div></div>
        <div class="stat"><div class="stat-label">${escapeHtml(gameCopy.moves)}</div><div class="stat-value">${state.moves}</div></div>
        <div class="stat"><div class="stat-label">${escapeHtml(gameCopy.scan)}</div><div class="stat-value">${state.hintsLeft}</div></div>
      </div>
      <div class="chapter-row">
        <span class="panel-kicker">${escapeHtml(copy.solved)} ${state.bestLevel}</span>
        <span class="panel-kicker">${escapeHtml(copy.remaining)} ${Math.max(0, WORD_BANK.length - (state.level % WORD_BANK.length))}</span>
      </div>
      <div class="chapter-track" aria-hidden="true">
        ${Array.from({ length: 6 }, (_, index) => {
          const absolute = chapterStart + index;
          const className = absolute < state.level ? "done" : index === levelInChapter ? "current" : "";
          return `<span class="chapter-node ${className}"></span>`;
        }).join("")}
      </div>
      ${renderRouteSwitch(true)}
      <div class="volume-row">
        <span class="stat-label">${escapeHtml(copy.sound)}</span>
        <input type="range" min="0" max="1" step="0.01" value="${state.muted ? 0 : state.volume}" data-action="volume" aria-label="${escapeHtml(copy.sound)}" />
      </div>
    </aside>
  `;
}

function renderPuzzlePanel() {
  const copy = getCopy();
  const gameCopy = GAME_COPY[state.lang];
  const category = copy.categories[state.entry.category];
  const difficulty = "◆".repeat(state.difficulty);
  const isEnglish = state.lang === "en";
  const progressPercent = Math.max(0, Math.min(100, (state.decryptProgress / state.decryptGoal) * 100));
  return `
    <section class="panel puzzle-panel">
      <div class="puzzle-head">
        <div>
          <div class="panel-kicker">${escapeHtml(copy.mode)}</div>
          <h2 class="archive-title">${escapeHtml(copy.modeNames[state.mode])}</h2>
        </div>
        <div class="puzzle-tags">
          <span class="category-pill">${escapeHtml(category)}</span>
          <span class="difficulty-pill">${difficulty}</span>
        </div>
      </div>
      <div class="clue-block">
        <div class="panel-kicker">${escapeHtml(copy.clue)}</div>
        <p class="clue-text">${escapeHtml(getClue())}</p>
        ${state.entry.year ? `<span class="year-chip">${escapeHtml(copy.historyTag)} ${escapeHtml(state.entry.year)}</span>` : ""}
      </div>
      <div class="slot-section">
        <div class="slot-label">${escapeHtml(copy.target)}</div>
        <div class="decrypt-row">
          <span>${escapeHtml(gameCopy.progress)}</span>
          <strong>${Math.floor(progressPercent)}%</strong>
        </div>
        <div class="decrypt-track" aria-hidden="true">
          <div class="decrypt-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="slot-row">
          ${state.answerUnits
            .map((unit, index) => {
              const filled = index < state.revealedCount;
              const next = index === state.revealedCount;
              return `<div class="slot ${isEnglish ? "word-slot" : ""} ${filled ? "filled" : ""} ${next ? "next" : ""}">${escapeHtml(filled ? unit : "?")}</div>`;
            })
            .join("")}
        </div>
      </div>
      <div class="token-section">
        <div class="token-label">${escapeHtml(gameCopy.matrix)}</div>
        <div class="matrix-help">${escapeHtml(gameCopy.playHint)} ${escapeHtml(gameCopy.autoReveal)}</div>
        <div class="matrix-grid" style="grid-template-columns: repeat(${state.gridSize}, minmax(0, 1fr));">
          ${state.grid
            .map((cell) => {
              if (!cell) return `<span class="matrix-cell empty"></span>`;
              const classes = [
                "matrix-cell",
                `tile-${cell.type}`,
                isEnglish ? "word-token" : "",
                state.highlightedCellIds.includes(cell.id) ? "hint" : "",
                cell.id === state.wrongCellId ? "wrong" : ""
              ]
                .filter(Boolean)
                .join(" ");
              return `<button class="${classes}" type="button" data-cell="${escapeHtml(cell.id)}">${escapeHtml(tileLabel(cell.type))}</button>`;
            })
            .join("")}
        </div>
      </div>
      <div class="puzzle-actions">
        <button class="primary-button" type="button" data-action="hint">${escapeHtml(gameCopy.scan)} ${state.hintsLeft}</button>
        <button class="ghost-button" type="button" data-action="shuffle">${escapeHtml(gameCopy.reshuffle)}</button>
        <button class="danger-button" type="button" data-action="skip">${escapeHtml(gameCopy.skip)}</button>
      </div>
      <div class="level-footer">
        <span>${escapeHtml(copy.unlocked)} ${WORD_BANK.length}</span>
        <span>${state.endlessLap > 0 ? escapeHtml(copy.campaignDone) : ""}</span>
      </div>
    </section>
  `;
}

function renderQueuePanel() {
  const copy = getCopy();
  const rows = Array.from({ length: 8 }, (_, index) => {
    const levelNumber = state.level + index;
    const item = index === 0 ? state.entry : getLevelEntry(levelNumber);
    const config = index === 0 ? { difficulty: state.difficulty, mode: state.mode } : getLevelConfig(levelNumber);
    const current = index === 0 ? "current" : "";
    const term = "????";
    return `
      <div class="archive-row ${current}">
        <div>
          <div class="archive-label">${escapeHtml(copy.level)} ${levelNumber + 1}</div>
          <div class="archive-term">${escapeHtml(term)}</div>
          <div class="archive-meta">${escapeHtml(copy.categories[item.category])} · ${escapeHtml(copy.modeNames[config.mode])}</div>
        </div>
        <div class="star-line">${"◆".repeat(config.difficulty)}</div>
      </div>
    `;
  }).join("");
  return `
    <aside class="panel queue-panel">
      <h2 class="archive-title">${escapeHtml(copy.archive)}</h2>
      <div class="archive-list">${rows}</div>
    </aside>
  `;
}

function renderModal() {
  const copy = getCopy();
  const isComplete = state.modal.type === "complete";
  return `
    <div class="modal-backdrop">
      <section class="modal" role="dialog" aria-modal="true">
        <div class="modal-kicker">${escapeHtml(isComplete ? copy.complete : copy.failed)}</div>
        <h2>${escapeHtml(isComplete ? copy.complete : copy.failed)}</h2>
        <div class="modal-answer">${escapeHtml(copy.answer)}: ${escapeHtml(state.modal.answer)}</div>
        ${isComplete ? `<div class="reward-row"><span class="reward-chip">${escapeHtml(copy.stars)} ${starText(state.modal.stars)}</span><span class="reward-chip">+${state.modal.score}</span></div>` : ""}
        <p class="modal-copy">${escapeHtml(isComplete ? state.modal.clue : copy.failedCopy)}</p>
        ${isComplete ? `<div class="context-block"><div class="modal-kicker">${escapeHtml(copy.contextLabel)}</div><p>${escapeHtml(state.modal.context)}</p></div>` : ""}
        <div class="modal-actions">
          <button class="primary-button" type="button" data-action="${isComplete ? "next" : "retry"}">${escapeHtml(isComplete ? copy.next : copy.retry)}</button>
        </div>
      </section>
    </div>
  `;
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-cell]").forEach((button) => {
    button.addEventListener("click", () => handleCellClick(button.dataset.cell));
  });
  document.querySelectorAll("[data-action]").forEach((button) => {
    const action = button.dataset.action;
    if (action === "begin") button.addEventListener("click", beginGame);
    if (action === "reset") button.addEventListener("click", resetProgress);
    if (action === "hint") button.addEventListener("click", useHint);
    if (action === "shuffle") button.addEventListener("click", shuffleTokens);
    if (action === "skip") button.addEventListener("click", skipLevel);
    if (action === "next") button.addEventListener("click", nextLevel);
    if (action === "retry") button.addEventListener("click", retryLevel);
  });
  const volume = document.querySelector("[data-action='volume']");
  if (volume) {
    volume.addEventListener("input", (event) => setVolume(event.target.value));
  }
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

soundToggle.addEventListener("click", async () => {
  await audio.start();
  setMuted();
});

function drawBackground() {
  const canvas = document.getElementById("archiveCanvas");
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  const glyphs = ["密", "史", "零", "牆", "禁", "檔", "64", "PRISM", "KGB", "1989"];

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function frame(time) {
    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = 0.16;
    ctx.strokeStyle = "#d4a34f";
    ctx.lineWidth = 1;
    for (let y = -40; y < height + 80; y += 58) {
      ctx.beginPath();
      ctx.moveTo(0, y + Math.sin(time / 900 + y) * 8);
      ctx.lineTo(width, y + Math.cos(time / 1100 + y) * 8);
      ctx.stroke();
    }
    ctx.globalAlpha = 0.11;
    ctx.fillStyle = "#f3ecd9";
    ctx.font = "700 18px 'Segoe UI', sans-serif";
    for (let i = 0; i < 42; i += 1) {
      const x = (i * 157 + time * 0.018) % (width + 180) - 90;
      const y = (i * 89 + Math.sin(time / 1300 + i) * 44) % (height + 120) - 60;
      ctx.fillText(glyphs[i % glyphs.length], x, y);
    }
    ctx.globalAlpha = 0.12;
    ctx.fillStyle = "#a83232";
    for (let i = 0; i < 12; i += 1) {
      const x = (i * 233 - time * 0.025) % (width + 260) - 130;
      const y = 70 + ((i * 97) % Math.max(120, height - 120));
      ctx.fillRect(x, y, 160 + (i % 4) * 30, 16);
    }
    window.requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  resize();
  window.requestAnimationFrame(frame);
}

loadSave();
audio.setVolume(state.volume);
audio.setMuted(state.muted);
setupLevel(state.level);
render();
drawBackground();
