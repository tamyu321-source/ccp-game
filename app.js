const STORAGE_KEY = "archive-fog-save-v1";
const RANKING_LIMIT = 20;

const TEXT = {
  tw: {
    title: "檔案迷霧",
    subtitle: "解密詞條，連破關卡",
    startTitle: "檔案迷霧",
    startCopy: "黑歷史開局，逐步進入諧音、隱喻與高干擾檔案。",
    start: "開始",
    continue: "繼續",
    reset: "重置進度",
    level: "關卡",
    chapter: "章節",
    time: "時間",
    score: "分數",
    leaderboard: "積分排行",
    rankEmpty: "尚無紀錄",
    modeRecord: "模式紀錄",
    streak: "連破",
    mistakes: "失誤",
    clue: "線索",
    target: "復原詞條",
    tokens: "檔案碎片",
    evidence: "消除規則",
    evidenceHint: "只能拿未被蓋住的牌；三張同牌進槽後自動消除。",
    currentLead: "檔案牌堆",
    traceHint: "點選未被上層遮住的文字牌，湊齊三張同牌消除；槽位滿就封存。",
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
      kmtCcp: "國共時期",
      ww2: "二戰中國",
      hongKong: "香港檔案",
      current: "當下時事",
      us: "美國政治"
    },
    contextLabel: "背景脈絡"
  },
  cn: {
    title: "档案迷雾",
    subtitle: "解密词条，连破关卡",
    startTitle: "档案迷雾",
    startCopy: "黑历史开局，逐步进入谐音、隐喻与高干扰档案。",
    start: "开始",
    continue: "继续",
    reset: "重置进度",
    level: "关卡",
    chapter: "章节",
    time: "时间",
    score: "分数",
    leaderboard: "积分排行",
    rankEmpty: "暂无记录",
    modeRecord: "模式记录",
    streak: "连破",
    mistakes: "失误",
    clue: "线索",
    target: "复原词条",
    tokens: "档案碎片",
    evidence: "消除规则",
    evidenceHint: "只能拿未被盖住的牌；三张同牌进槽后自动消除。",
    currentLead: "档案牌堆",
    traceHint: "点击未被上层遮住的文字牌，凑齐三张同牌消除；槽位满就封存。",
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
      kmtCcp: "国共时期",
      ww2: "二战中国",
      hongKong: "香港档案",
      current: "当下时事",
      us: "美国政治"
    },
    contextLabel: "背景脉络"
  },
  en: {
    title: "Archive Fog",
    subtitle: "Restore entries, break levels",
    startTitle: "Archive Fog",
    startCopy: "Start with history, then move into puns, metaphors, and dense decoys.",
    start: "Start",
    continue: "Continue",
    reset: "Reset",
    level: "Level",
    chapter: "Chapter",
    time: "Time",
    score: "Score",
    leaderboard: "Leaderboard",
    rankEmpty: "No records",
    modeRecord: "Mode Record",
    streak: "Streak",
    mistakes: "Misses",
    clue: "Clue",
    target: "Restored Entry",
    tokens: "Fragments",
    evidence: "Match Rule",
    evidenceHint: "Pick only uncovered tiles. Three matching tiles clear from the tray.",
    currentLead: "Tile Stack",
    traceHint: "Pick uncovered text tiles and clear triples. If the tray fills, the file is sealed.",
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
      kmtCcp: "KMT-CCP Era",
      ww2: "WWII China",
      hongKong: "Hong Kong Archive",
      current: "Current Affairs",
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
    random: "\u96a8\u6a5f\u6a94\u6848",
    timeDesc: "\u6309\u5e74\u4ee3\u63a8\u9032\uff0c\u95dc\u5361\u58d3\u529b\u96a8\u6a5f",
    difficultyDesc: "\u6309\u8a5e\u689d\u96e3\u5ea6\u63a8\u9032\uff0c\u95dc\u5361\u58d3\u529b\u96a8\u6a5f",
    randomDesc: "\u8a5e\u689d\u9806\u5e8f\u548c\u724c\u7d44\u96e3\u5ea6\u90fd\u91cd\u65b0\u62bd\u724c"
  },
  cn: {
    route: "\u8def\u7ebf",
    time: "\u65f6\u95f4\u987a\u5e8f",
    difficulty: "\u96be\u5ea6\u987a\u5e8f",
    random: "\u968f\u673a\u6863\u6848",
    timeDesc: "\u6309\u5e74\u4ee3\u63a8\u8fdb\uff0c\u5173\u5361\u538b\u529b\u968f\u673a",
    difficultyDesc: "\u6309\u8bcd\u6761\u96be\u5ea6\u63a8\u8fdb\uff0c\u5173\u5361\u538b\u529b\u968f\u673a",
    randomDesc: "\u8bcd\u6761\u987a\u5e8f\u548c\u724c\u7ec4\u96be\u5ea6\u90fd\u91cd\u65b0\u62bd\u724c"
  },
  en: {
    route: "Route",
    time: "Timeline",
    difficulty: "Difficulty",
    random: "Random",
    timeDesc: "Entries follow eras; challenge pressure is randomized",
    difficultyDesc: "Entries follow base difficulty; challenge pressure is randomized",
    randomDesc: "Entry order and deck difficulty are both reshuffled"
  }
};

const ROUTE_IDS = ["time", "difficulty", "random"];

function isRoute(route) {
  return ROUTE_IDS.includes(route);
}

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
  entry("習包子", "习包子", "Xi Baozi", "一頓包子被拍成親民，後來連餐桌都變成暗號。", "一顿包子被拍成亲民，后来连餐桌都变成暗号。", "A bun-shop photo op turned a lunch counter into coded speech.", 4, "ccpMetaphor", "2013"),
  entry("扛麥郎", "扛麦郎", "Wheat Shoulder Xi", "兩百斤傳說扛在肩上，不換肩也不換敘事。", "两百斤传说扛在肩上，不换肩也不换叙事。", "The two-hundred-jin legend stays on one shoulder and one script.", 4, "ccpMetaphor", "2010s"),
  entry("二百斤不換肩", "二百斤不换肩", "Two Hundred Jin No Shoulder Switch", "體能梗被講成苦難勳章，網民拿秤和山路來拆台。", "体能梗被讲成苦难勋章，网民拿秤和山路来拆台。", "A hardship medal becomes a physics problem for the internet.", 5, "ccpMetaphor", "2010s"),
  entry("薩格爾王", "萨格尔王", "Sager King", "格薩爾被讀歪後，剪輯刀比史詩更忙。", "格萨尔被读歪后，剪辑刀比史诗更忙。", "After Gesar came out wrong, the edit room worked harder than the epic.", 5, "ccpMetaphor", "2018"),
  entry("慶豐帝", "庆丰帝", "Qingfeng Emperor", "包子鋪的招牌被戴上年號，親民照長出帝王梗。", "包子铺的招牌被戴上年号，亲民照长出帝王梗。", "A bun-shop sign becomes a reign title.", 5, "ccpMetaphor", "2013"),
  entry("小學生博士", "小学生博士", "Primary School Doctor", "學歷光環太亮時，錯字和注音都會投下影子。", "学历光环太亮时，错字和注音都会投下影子。", "When the credential halo is too bright, typos and phonetics cast shadows.", 5, "ccpMetaphor", "2010s"),
  entry("大撒幣", "大撒币", "Big Spender", "外援像灑水車，民生帳本卻還在找零。", "外援像洒水车，民生账本却还在找零。", "Foreign spending looks generous while domestic ledgers hunt for change.", 4, "ccpMetaphor", "2010s"),
  entry("頤使氣指", "颐使气指", "Chin Commanding", "成語被念出新版本，表情包替字典更新注音。", "成语被念出新版本，表情包替字典更新注音。", "A misread idiom lets memes annotate the dictionary.", 5, "ccpMetaphor", "2020s"),
  entry("習奧塞斯庫", "习奥塞斯库", "Xi Ceausescu", "把東歐倒台陰影貼上去，提醒個人崇拜也有結局。", "把东欧倒台阴影贴上去，提醒个人崇拜也有结局。", "A Ceausescu shadow pasted onto Xi-era personality politics.", 5, "ccpMetaphor", "2020s"),
  entry("臘肉", "腊肉", "Cured Meat", "遺體被保存成政治聖物，網民把神壇拆成冷笑話。", "遗体被保存成政治圣物，网民把神坛拆成冷笑话。", "A preserved body becomes a cold joke about political sainthood.", 5, "ccpMetaphor", "1976"),
  entry("毛臘肉", "毛腊肉", "Mao Cured Meat", "名字一接上冷藏櫃，個人崇拜就失去神光。", "名字一接上冷藏柜，个人崇拜就失去神光。", "Attach the name to a cold display case and the aura leaks out.", 5, "ccpMetaphor", "1976"),
  entry("紅太陽", "红太阳", "Red Sun", "領袖被唱成太陽，陰影也就跟著變長。", "领袖被唱成太阳，阴影也就跟着变长。", "When a leader is sung as the sun, the shadows grow too.", 4, "ccpMetaphor", "1960s"),
  entry("毛語錄", "毛语录", "Little Red Book", "小紅書被舉過頭頂，句子成了通行證和護身符。", "小红书被举过头顶，句子成了通行证和护身符。", "A little red book turns sentences into passes and amulets.", 2, "ccp", "1964"),
  entry("偉大舵手", "伟大舵手", "Great Helmsman", "船往哪裡開不准問，舵手永遠正確。", "船往哪里开不准问，舵手永远正确。", "Do not ask where the ship is going; the helmsman is always right.", 4, "ccpMetaphor", "1960s"),
  entry("畝產萬斤", "亩产万斤", "Ten Thousand Jin Per Mu", "田地沒長那麼快，報紙和算盤先高產了。", "田地没长那么快，报纸和算盘先高产了。", "The fields did not grow that fast; newspapers and abacuses did.", 2, "ccp", "1958"),
  entry("忠字舞", "忠字舞", "Loyalty Dance", "身體也要排隊表忠，廣場變成政治課堂。", "身体也要排队表忠，广场变成政治课堂。", "Even bodies lined up to perform loyalty.", 3, "ccp", "1966-1968"),
  entry("早請示晚匯報", "早请示晚汇报", "Morning Request Evening Report", "一天兩次向語錄報到，生活被做成儀式。", "一天两次向语录报到，生活被做成仪式。", "Twice a day, daily life reported to the quotations.", 3, "ccp", "1960s"),
  entry("碾平", "碾平", "Crusher Deng", "改革的招牌很亮，履帶的陰影也很長。", "改革的招牌很亮，履带的阴影也很长。", "The reform sign shines, but the tank-tread shadow is long.", 5, "ccpMetaphor", "1989"),
  entry("黑貓白貓", "黑猫白猫", "Black Cat White Cat", "抓到老鼠就是好貓，於是原則讓位給結果。", "抓到老鼠就是好猫，于是原则让位给结果。", "If it catches mice, principle bows to results.", 3, "ccpMetaphor", "1962"),
  entry("摸石頭過河", "摸石头过河", "Crossing River By Stones", "改革沒有地圖，腳下的石頭就是臨時憲法。", "改革没有地图，脚下的石头就是临时宪法。", "Reform has no map; the stone underfoot becomes a temporary constitution.", 3, "ccpMetaphor", "1980s"),
  entry("讓一部分人先富", "让一部分人先富", "Some Get Rich First", "有人先過河，有人後來發現自己成了石頭。", "有人先过河，有人后来发现自己成了石头。", "Some crossed first; others later found they were the stones.", 4, "ccpMetaphor", "1980s"),
  entry("穩定壓倒一切", "稳定压倒一切", "Stability Above All", "穩定一抬頭，權利和追問就被壓低。", "稳定一抬头，权利和追问就被压低。", "When stability rises, rights and questions are pressed down.", 4, "ccpMetaphor", "1989-1990"),
  entry("長者", "长者", "Elder", "一句長者訓話，後來長成整套亞文化。", "一句长者训话，后来长成整套亚文化。", "One elder's scolding grew into a subculture.", 4, "ccpMetaphor", "2000s"),
  entry("膜蛤", "膜蛤", "Toad Worship", "像膜拜也像解構，前任領袖被玩成反諷偶像。", "像膜拜也像解构，前任领袖被玩成反讽偶像。", "Worship and parody fuse into a political meme.", 4, "ccpMetaphor", "2010s"),
  entry("蛤蛤", "蛤蛤", "Haha Toad", "眼鏡、肚皮和口音一起變成互聯網圖騰。", "眼镜、肚皮和口音一起变成互联网图腾。", "Glasses, belly, and accent become an internet totem.", 4, "ccpMetaphor", "2010s"),
  entry("悶聲大發財", "闷声大发财", "Make Fortune Quietly", "不要總想搞大新聞，先把財發在靜音模式。", "不要总想搞大新闻，先把财发在静音模式。", "Do not always chase big news; get rich in silent mode.", 4, "ccpMetaphor", "2000"),
  entry("談笑風生", "谈笑风生", "Talking and Laughing", "專訪被拿來證明見過世面，網民拿來配音。", "专访被拿来证明见过世面，网民拿来配音。", "A foreign interview becomes proof of worldliness and meme material.", 3, "ccpMetaphor", "2000"),
  entry("圖樣圖森破", "图样图森破", "Too Young Too Simple", "英文訓話被音譯成咒語，記者會變成梗庫。", "英文训话被音译成咒语，记者会变成梗库。", "An English scolding becomes a phonetic spell.", 4, "ccpMetaphor", "2000"),
  entry("亦可賽艇", "亦可赛艇", "Excited", "一句 excited 被拆成諧音，快樂也有政治口音。", "一句 excited 被拆成谐音，快乐也有政治口音。", "One excited turns into a homophone with a political accent.", 3, "ccpMetaphor", "2000s"),
  entry("苟利國家生死以", "苟利国家生死以", "For Country Life And Death", "古詩被長者念熟，後來成了續命與表情包素材。", "古诗被长者念熟，后来成了续命与表情包素材。", "A quoted poem becomes longevity lore and meme fuel.", 3, "ccpMetaphor", "2000s"),
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

WORD_BANK.push(
  entry("梁家河聖地巡禮", "梁家河圣地巡礼", "Liangjiahe Pilgrimage", "插隊村被包裝成政治原點，苦難敘事長成打卡景點。", "插队村被包装成政治原点，苦难叙事长成打卡景点。", "A rustication village is packaged as a political origin story.", 4, "ccpMetaphor", "2010s", "梁家河是習近平知青經歷的核心宣傳地，官方用它塑造吃苦、親民和基層淬煉形象。", "梁家河是习近平知青经历的核心宣传地，官方用它塑造吃苦、亲民和基层淬炼形象。", "Liangjiahe is central to official storytelling about Xi's rustication years, hardship, and grassroots legitimacy."),
  entry("梁家河大學問", "梁家河大学问", "Liangjiahe Great Learning", "山溝裡長出政治課本，答案早已寫在宣傳板上。", "山沟里长出政治课本，答案早已写在宣传板上。", "A village story becomes a political textbook.", 4, "ccpMetaphor", "2010s", "這個梗諷刺把梁家河經歷過度理論化、神聖化，讓個人履歷變成政治學習材料。", "这个梗讽刺把梁家河经历过度理论化、神圣化，让个人履历变成政治学习材料。", "The meme satirizes turning Xi's Liangjiahe biography into quasi-theory and political-study material."),
  entry("雄安千年大計", "雄安千年大计", "Xiongan Millennium Plan", "新城被說成千年，房價和政績先聽懂了。", "新城被说成千年，房价和政绩先听懂了。", "A new area is named a millennium plan before daily life catches up.", 3, "ccp", "2017", "雄安新區被官方定位為疏解北京非首都功能和新發展樣板，網路常用千年大計反諷宏大敘事。", "雄安新区被官方定位为疏解北京非首都功能和新发展样板，网络常用千年大计反讽宏大叙事。", "Xiongan was framed as a major new area and model project; online use often mocks the grand timescale."),
  entry("二十大連任", "二十大连任", "Twentieth Congress Third Term", "任期鐘聲沒有響，核心故事繼續翻頁。", "任期钟声没有响，核心故事继续翻页。", "The term-limit clock did not ring; the core story kept going.", 3, "ccp", "2022", "中共二十大後習近平進入第三個總書記任期，標誌最高權力連任格局正式化。", "中共二十大后习近平进入第三个总书记任期，标志最高权力连任格局正式化。", "After the 20th Party Congress, Xi entered a third term as CCP general secretary, formalizing extended top rule."),
  entry("忠誠不絕對", "忠诚不绝对", "Absolute Loyalty Test", "忠誠還要加形容詞，考卷就沒有及格線。", "忠诚还要加形容词，考卷就没有及格线。", "When loyalty needs adjectives, there is no passing line.", 4, "ccpMetaphor", "2010s", "黨內政治語言常把絕對忠誠放在突出位置，網民用它諷刺忠誠表態層層加碼。", "党内政治语言常把绝对忠诚放在突出位置，网民用它讽刺忠诚表态层层加码。", "Party language emphasizes absolute loyalty; users mock escalating loyalty performances."),
  entry("全過程民主", "全过程民主", "Whole Process Democracy", "投票不一定多，形容詞一定夠長。", "投票不一定多，形容词一定够长。", "The adjective grows longer than the ballot.", 3, "ccpMetaphor", "2021", "官方用全過程民主回應西式民主比較，網民常用它反諷形式化政治參與。", "官方用全过程民主回应西式民主比较，网民常用它反讽形式化政治参与。", "The official phrase answers comparisons with liberal democracy; online jokes question whether participation is substantive."),
  entry("清零轉向", "清零转向", "Zero COVID U Turn", "前一天還是國策，下一秒變成個人責任。", "前一天还是国策，下一秒变成个人责任。", "Yesterday it was national policy; suddenly it became personal responsibility.", 3, "current", "2022", "2022 年底中國快速放開清零管控，長期封控與突然轉向之間缺少充分準備，引發醫療擠兌和公共記憶衝突。", "2022 年底中国快速放开清零管控，长期封控与突然转向之间缺少充分准备，引发医疗挤兑和公共记忆冲突。", "China rapidly exited Zero COVID in late 2022, leaving a sharp contrast between long controls and sudden reopening."),
  entry("青年失業率暫停發布", "青年失业率暂停发布", "Youth Jobless Data Pause", "數字不好看時，統計表先去休息。", "数字不好看时，统计表先去休息。", "When the number looks bad, the table takes a break.", 3, "current", "2023", "中國在 2023 年暫停發布青年失業率，之後改用調整後口徑恢復，網民把它視為數據治理與輿論壓力的案例。", "中国在 2023 年暂停发布青年失业率，之后改用调整后口径恢复，网民把它视为数据治理与舆论压力的案例。", "China paused youth unemployment publication in 2023 and later resumed with a revised measure, becoming a data-politics meme."),
  entry("孔乙己文學", "孔乙己文学", "Kong Yiji Literature", "長衫脫不下，工作也找不到。", "长衫脱不下，工作也找不到。", "The scholar's gown will not come off, and the job will not arrive.", 3, "current", "2023", "孔乙己文學借魯迅人物形容高學歷青年就業困境，反映學歷、階層期待和現實機會錯位。", "孔乙己文学借鲁迅人物形容高学历青年就业困境，反映学历、阶层期待和现实机会错位。", "Kong Yiji literature uses Lu Xun's character to describe educated youth facing poor job prospects."),
  entry("潤學", "润学", "Runology", "不是地理題，是把出口當成答案。", "不是地理题，是把出口当成答案。", "It is not geography; the exit becomes the answer.", 3, "current", "2020s", "潤學指討論移民、出走和尋找外部生活路徑的網路話題，常與壓力、審查和前景焦慮相連。", "润学指讨论移民、出走和寻找外部生活路径的网络话题，常与压力、审查和前景焦虑相连。", "Runology refers to online talk about emigrating or exiting a pressured social environment."),
  entry("躺平", "躺平", "Tang Ping", "不再衝刺，也是一種無聲投票。", "不再冲刺，也是一种无声投票。", "Refusing the sprint becomes a silent vote.", 2, "current", "2021", "躺平是對高壓競爭、低回報和階層焦慮的消極抵抗語言。", "躺平是对高压竞争、低回报和阶层焦虑的消极抵抗语言。", "Tang ping describes passive resistance to intense competition and low returns."),
  entry("內卷", "内卷", "Involution", "大家都更努力，出口卻沒有變大。", "大家都更努力，出口却没有变大。", "Everyone works harder, but the exit does not widen.", 2, "current", "2020s", "內卷形容競爭投入增加但總體收益不變，常用於教育、職場和平台經濟。", "内卷形容竞争投入增加但总体收益不变，常用于教育、职场和平台经济。", "Involution describes rising effort in zero-sum competition, often in education and work."),
  entry("爛尾樓停貸潮", "烂尾楼停贷潮", "Mortgage Boycott", "房子停在半空，月供還在地上追人。", "房子停在半空，月供还在地上追人。", "The home is unfinished, but the mortgage keeps chasing.", 2, "current", "2022", "多地爛尾樓業主曾以停貸維權，暴露預售制、房企債務和地方監管問題。", "多地烂尾楼业主曾以停贷维权，暴露预售制、房企债务和地方监管问题。", "Mortgage boycotts over unfinished homes exposed pre-sale, developer debt, and regulatory problems."),
  entry("走線", "走线", "Walking the Line", "南方雨林和邊境牆，變成另一種出路。", "南方雨林和边境墙，变成另一种出路。", "Jungles and borders become another exit route.", 3, "current", "2020s", "走線指經拉美等路線赴美尋求庇護或移民的現象，反映經濟與政治壓力下的出走選擇。", "走线指经拉美等路线赴美寻求庇护或移民的现象，反映经济与政治压力下的出走选择。", "Walking the line refers to migration routes through Latin America toward the United States under social pressure."),
  entry("地方債黑洞", "地方债黑洞", "Local Debt Hole", "基建寫在政績裡，利息寫在未來裡。", "基建写在政绩里，利息写在未来里。", "Infrastructure goes into the achievement book; interest goes into the future.", 3, "current", "2020s", "地方融資平台和基建債務長期支撐增長，也累積財政風險與公共服務壓力。", "地方融资平台和基建债务长期支撑增长，也累积财政风险与公共服务压力。", "Local financing vehicles supported growth through infrastructure while accumulating fiscal risk."),
  entry("人口負增長", "人口负增长", "Population Decline", "計劃過的人口，終於反過來計劃未來。", "计划过的人口，终于反过来计划未来。", "A planned population starts planning the future back.", 2, "current", "2022", "中國近年進入人口負增長，少子化和老齡化加重養老、房地產和地方財政壓力。", "中国近年进入人口负增长，少子化和老龄化加重养老、房地产和地方财政压力。", "China's recent population decline intensifies aging, pension, housing, and fiscal pressures."),
  entry("文攻武衛", "文攻武卫", "Attack With Words Defend With Force", "先用標語開火，再用棍棒保衛正確。", "先用标语开火，再用棍棒保卫正确。", "Slogans attack first; force defends correctness.", 3, "ccp", "1967", "文革派性鬥爭中，文攻武衛成為群眾組織武鬥與政治暴力的口號之一。", "文革派性斗争中，文攻武卫成为群众组织武斗与政治暴力的口号之一。", "During Cultural Revolution factional struggles, the slogan justified political confrontation and violence."),
  entry("武鬥", "武斗", "Factional Armed Struggle", "革命隊伍互相開火，城市也能變戰場。", "革命队伍互相开火，城市也能变战场。", "Revolutionary factions fire at each other and cities become battlefields.", 2, "ccp", "1967-1968", "文革武鬥是造反派和群眾組織之間的暴力衝突，部分地區動用槍械和軍火。", "文革武斗是造反派和群众组织之间的暴力冲突，部分地区动用枪械和军火。", "Factional violence during the Cultural Revolution involved mass organizations and sometimes weapons."),
  entry("清理階級隊伍", "清理阶级队伍", "Cleansing Class Ranks", "隊伍越清，冤案越多。", "队伍越清，冤案越多。", "The cleaner the ranks, the more wrongful cases appeared.", 3, "ccp", "1968", "清理階級隊伍運動在文革中造成大規模審查、迫害和冤案。", "清理阶级队伍运动在文革中造成大规模审查、迫害和冤案。", "The campaign produced mass investigations, persecution, and wrongful cases during the Cultural Revolution."),
  entry("鬥私批修", "斗私批修", "Fight Self Criticize Revisionism", "連私心都要交代，生活被拉進批判會。", "连私心都要交代，生活被拉进批判会。", "Even private motives had to report to criticism sessions.", 3, "ccp", "1960s", "鬥私批修是文革政治口號，把個人思想改造和反修正主義綁在一起。", "斗私批修是文革政治口号，把个人思想改造和反修正主义绑在一起。", "The slogan tied personal thought remolding to anti-revisionist politics."),
  entry("大煉鋼鐵", "大炼钢铁", "Backyard Steel Drive", "鍋碗瓢盆進爐，鋼鐵神話出爐。", "锅碗瓢盆进炉，钢铁神话出炉。", "Pots entered furnaces and a steel myth came out.", 1, "ccp", "1958", "大躍進期間大量群眾投入土法煉鋼，浪費資源並擾亂農業生產。", "大跃进期间大量群众投入土法炼钢，浪费资源并扰乱农业生产。", "The backyard steel drive wasted resources and disrupted agriculture during the Great Leap Forward."),
  entry("浮誇風", "浮夸风", "Exaggeration Wind", "產量吹上天，糧食卻不會跟著落地。", "产量吹上天，粮食却不会跟着落地。", "Yields were blown into the sky; food did not fall back down.", 1, "ccp", "1958", "浮誇風指大躍進中虛報產量和政績，直接扭曲徵糧與政策判斷。", "浮夸风指大跃进中虚报产量和政绩，直接扭曲征粮与政策判断。", "Exaggerated output reports distorted procurement and policy decisions during the Great Leap Forward."),
  entry("公共食堂", "公共食堂", "Commune Canteens", "飯桌集中起來，飢餓也集中起來。", "饭桌集中起来，饥饿也集中起来。", "Dining tables were centralized, and hunger followed.", 1, "ccp", "1958", "人民公社公共食堂削弱家庭儲糧與分配彈性，是饑荒記憶中的重要制度環節。", "人民公社公共食堂削弱家庭储粮与分配弹性，是饥荒记忆中的重要制度环节。", "Commune canteens weakened household food control and flexibility during the famine era."),
  entry("深圳特區", "深圳特区", "Shenzhen SEZ", "邊境小城成了市場實驗室。", "边境小城成了市场实验室。", "A border town became a market laboratory.", 1, "ccp", "1980", "深圳經濟特區是改革開放的代表試點，承載市場化、外資和城市化實驗。", "深圳经济特区是改革开放的代表试点，承载市场化、外资和城市化实验。", "Shenzhen became a flagship Special Economic Zone for market reform and foreign investment."),
  entry("價格闖關", "价格闯关", "Price Reform Shock", "市場化一步太急，錢包先喊疼。", "市场化一步太急，钱包先喊疼。", "The wallet felt the shock before reform found its balance.", 3, "ccp", "1988", "1988 年價格改革預期引發搶購與通脹焦慮，成為改革風險的重要記憶。", "1988 年价格改革预期引发抢购与通胀焦虑，成为改革风险的重要记忆。", "The 1988 price reform push triggered panic buying and inflation fears."),
  entry("不爭論", "不争论", "No Debate", "路線先走，問題先不要問。", "路线先走，问题先不要问。", "The route moves first; questions wait outside.", 3, "ccpMetaphor", "1990s", "不爭論常被用來概括鄧小平推進市場化改革時壓低意識形態爭論的策略。", "不争论常被用来概括邓小平推进市场化改革时压低意识形态争论的策略。", "No debate is associated with Deng's strategy of pushing reform while suppressing ideological disputes."),
  entry("韜光養晦", "韬光养晦", "Hide Brightness Bide Time", "外交先低頭走路，等風向再抬頭。", "外交先低头走路，等风向再抬头。", "Foreign policy walks low and waits for the wind.", 3, "ccpMetaphor", "1990s", "韜光養晦被視為鄧小平時期外交策略概括，後來常被拿來對比更高調的國際姿態。", "韬光养晦被视为邓小平时期外交策略概括，后来常被拿来对比更高调的国际姿态。", "The phrase is associated with Deng-era caution in foreign policy and later contrasts with assertive diplomacy."),
  entry("三個代表", "三个代表", "Three Represents", "老黨章打開一扇給企業家的門。", "老党章打开一扇给企业家的门。", "An old party charter opened a door for entrepreneurs.", 2, "ccp", "2000", "三個代表是江澤民提出的理論，為私營企業主入黨和黨的階層調整提供話語。", "三个代表是江泽民提出的理论，为私营企业主入党和党的阶层调整提供话语。", "Jiang's Three Represents helped justify admitting private entrepreneurs into the CCP."),
  entry("上海幫", "上海帮", "Shanghai Clique", "一座城市的人脈，被看成一張權力網。", "一座城市的人脉，被看成一张权力网。", "A city's networks become a map of power.", 3, "ccpMetaphor", "1990s", "上海幫常指江澤民時期與上海經歷相關的政治人脈，被用來討論派系政治。", "上海帮常指江泽民时期与上海经历相关的政治人脉，被用来讨论派系政治。", "Shanghai Clique refers to networks linked to Jiang's Shanghai background and factional politics."),
  entry("加入世貿", "加入世贸", "WTO Accession", "世界市場開門，中國工廠開始加班。", "世界市场开门，中国工厂开始加班。", "The world market opened and Chinese factories worked overtime.", 1, "ccp", "2001", "中國加入 WTO 推動出口、外資和產業升級，也加深全球供應鏈依賴。", "中国加入 WTO 推动出口、外资和产业升级，也加深全球供应链依赖。", "China's WTO accession accelerated exports, foreign investment, and supply-chain integration."),
  entry("三講教育", "三讲教育", "Three Stresses Campaign", "講學習、講政治、講正氣，幹部考卷又多一張。", "讲学习、讲政治、讲正气，干部考卷又多一张。", "Study, politics, rectitude: another cadre exam sheet.", 3, "ccp", "1998", "三講教育是江澤民時期黨內整風式教育，強調幹部政治忠誠與作風。", "三讲教育是江泽民时期党内整风式教育，强调干部政治忠诚与作风。", "The campaign stressed cadre study, politics, and rectitude under Jiang."),
  entry("二二八事件", "二二八事件", "February Twenty Eight", "查緝煙販點燃怒火，鎮壓把島嶼記憶撕開。", "查缉烟贩点燃怒火，镇压把岛屿记忆撕开。", "A tobacco dispute ignited anger; repression tore open island memory.", 1, "taiwan", "1947", "二二八事件由官民衝突擴大為全台抗爭與鎮壓，成為台灣轉型正義核心記憶。", "二二八事件由官民冲突扩大为全台抗争与镇压，成为台湾转型正义核心记忆。", "The 1947 incident escalated from official-civilian conflict into island-wide repression and transitional-justice memory."),
  entry("白色恐怖", "白色恐怖", "White Terror Taiwan", "戒嚴的陰影裡，思想也會被判刑。", "戒严的阴影里，思想也会被判刑。", "Under martial law, thought itself could be sentenced.", 1, "taiwan", "1949-1987", "白色恐怖指國民黨威權統治下的政治偵防、審判、監禁與處決。", "白色恐怖指国民党威权统治下的政治侦防、审判、监禁与处决。", "Taiwan's White Terror involved surveillance, political trials, imprisonment, and executions under KMT authoritarian rule."),
  entry("台灣戒嚴", "台湾戒严", "Taiwan Martial Law", "一張戒嚴令，鎖住四十年政治空氣。", "一张戒严令，锁住四十年政治空气。", "One martial-law order locked political air for decades.", 1, "taiwan", "1949-1987", "台灣長期戒嚴限制組黨、集會、言論和出版，直到 1987 年解除。", "台湾长期戒严限制组党、集会、言论和出版，直到 1987 年解除。", "Taiwan's martial law restricted parties, assembly, speech, and publishing until 1987."),
  entry("黨外運動", "党外运动", "Dangwai Movement", "不能組黨，就把反對派寫在黨外。", "不能组党，就把反对派写在党外。", "If parties are banned, opposition lives outside the party.", 2, "taiwan", "1970s-1980s", "黨外運動是在戒嚴限制下形成的民主反對力量，推動台灣政治轉型。", "党外运动是在戒严限制下形成的民主反对力量，推动台湾政治转型。", "The dangwai movement formed democratic opposition under martial-law limits."),
  entry("野百合學運", "野百合学运", "Wild Lily Movement", "學生坐進廣場，老國會開始鬆動。", "学生坐进广场，老国会开始松动。", "Students sat in the square and the old legislature began to loosen.", 1, "taiwan", "1990", "野百合學運推動國會全面改選與政治改革，是台灣民主化關鍵節點。", "野百合学运推动国会全面改选与政治改革，是台湾民主化关键节点。", "The Wild Lily student movement pushed parliamentary reform and democratization."),
  entry("黑金政治", "黑金政治", "Black Gold Politics", "選票、地方派系和利益，把民主染成油墨色。", "选票、地方派系和利益，把民主染成油墨色。", "Votes, factions, and money stain democracy dark.", 3, "taiwan", "1990s", "黑金政治形容台灣地方派系、金錢與組織犯罪介入政治的問題。", "黑金政治形容台湾地方派系、金钱与组织犯罪介入政治的问题。", "Black gold politics refers to money, local factions, and organized crime in Taiwan politics."),
  entry("太陽花學運", "太阳花学运", "Sunflower Movement", "議場被學生佔領，服貿審查變成世代政治。", "议场被学生占领，服贸审查变成世代政治。", "Students occupied the legislature and a trade pact became generational politics.", 1, "taiwan", "2014", "太陽花學運反對服貿協議快速審查，重塑台灣青年政治參與和兩岸議題。", "太阳花学运反对服贸协议快速审查，重塑台湾青年政治参与和两岸议题。", "The movement opposed fast review of the services trade pact and reshaped youth politics."),
  entry("罷韓", "罢韩", "Han Kuo Yu Recall", "造勢像海浪，罷免票像退潮。", "造势像海浪，罢免票像退潮。", "Campaign waves met recall tides.", 2, "taiwan", "2020", "高雄市長韓國瑜被罷免，成為台灣地方政治與民粹動員的重要案例。", "高雄市长韩国瑜被罢免，成为台湾地方政治与民粹动员的重要案例。", "Han Kuo-yu's recall became a major case of local politics and populist mobilization in Taiwan."),
  entry("藍白合破局", "蓝白合破局", "Blue White Deal Collapse", "談判桌坐滿了，總統票只剩各走各路。", "谈判桌坐满了，总统票只剩各走各路。", "The negotiation table filled up; the presidential race split apart.", 2, "taiwan", "2023", "國民黨與民眾黨總統合作談判破局，影響 2024 台灣選舉格局。", "国民党与民众党总统合作谈判破局，影响 2024 台湾选举格局。", "The KMT-TPP presidential cooperation talks collapsed before Taiwan's 2024 election."),
  entry("國會改革爭議", "国会改革争议", "Taiwan Legislature Reform Dispute", "程序槌敲太快，街頭又坐滿人。", "程序槌敲太快，街头又坐满人。", "The gavel moved fast and the street filled again.", 3, "taiwan", "2024", "2024 年台灣立法院改革法案引發程序、權力分立與街頭抗議爭議。", "2024 年台湾立法院改革法案引发程序、权力分立与街头抗议争议。", "Taiwan's 2024 legislature reform bills triggered disputes over procedure, separation of powers, and protests."),
  entry("國共合作", "国共合作", "KMT CCP United Front", "同一面旗暫時合影，裂痕一直在旁邊等。", "同一面旗暂时合影，裂痕一直在旁边等。", "A temporary group photo hid a waiting crack.", 1, "kmtCcp", "1924", "第一次國共合作促成北伐和革命動員，也埋下日後分裂衝突。", "第一次国共合作促成北伐和革命动员，也埋下日后分裂冲突。", "The First United Front enabled mobilization and the Northern Expedition but led toward rupture."),
  entry("四一二清黨", "四一二清党", "Shanghai Purge", "合作的門突然關上，街頭成了清算現場。", "合作的门突然关上，街头成了清算现场。", "The alliance door shut and streets became purge sites.", 2, "kmtCcp", "1927", "蔣介石在上海清共，國共合作破裂，國共內戰格局開始形成。", "蒋介石在上海清共，国共合作破裂，国共内战格局开始形成。", "Chiang Kai-shek's purge of communists in Shanghai broke the United Front and shaped civil war."),
  entry("北伐", "北伐", "Northern Expedition", "軍隊北上統一，盟友也在路上變敵人。", "军队北上统一，盟友也在路上变敌人。", "An army marched north for unity while allies became enemies.", 1, "kmtCcp", "1926-1928", "北伐推翻北洋軍閥格局，國民黨建立南京政權，也伴隨國共分裂。", "北伐推翻北洋军阀格局，国民党建立南京政权，也伴随国共分裂。", "The Northern Expedition broke warlord rule and led to the Nanjing government amid KMT-CCP rupture."),
  entry("西安事變", "西安事变", "Xi'an Incident", "槍口逼出抗日合作，領袖被迫改劇本。", "枪口逼出抗日合作，领袖被迫改剧本。", "A kidnapping forced the anti-Japan script to change.", 1, "kmtCcp", "1936", "張學良、楊虎城扣押蔣介石，促成停止內戰、共同抗日的政治轉向。", "张学良、杨虎城扣押蒋介石，促成停止内战、共同抗日的政治转向。", "The Xi'an Incident pressured Chiang into a united front against Japan."),
  entry("重慶談判", "重庆谈判", "Chongqing Negotiations", "握手照拍好了，內戰火種還沒熄。", "握手照拍好了，内战火种还没熄。", "The handshake was photographed before the civil-war embers died.", 2, "kmtCcp", "1945", "抗戰勝利後國共在重慶談判，簽署雙十協定但未能阻止全面內戰。", "抗战胜利后国共在重庆谈判，签署双十协定但未能阻止全面内战。", "Postwar KMT-CCP negotiations produced the Double Tenth Agreement but failed to stop civil war."),
  entry("雙十協定", "双十协定", "Double Tenth Agreement", "紙上寫和平，槍口還在校準。", "纸上写和平，枪口还在校准。", "Peace was written on paper while guns were still sighted.", 2, "kmtCcp", "1945", "雙十協定承諾和平建國和政治協商，但很快被軍事衝突吞沒。", "双十协定承诺和平建国和政治协商，但很快被军事冲突吞没。", "The agreement promised peace and consultation but was overtaken by renewed conflict."),
  entry("三大戰役", "三大战役", "Three Campaigns", "遼瀋、淮海、平津，把政權天平推倒。", "辽沈、淮海、平津，把政权天平推倒。", "Liaoshen, Huaihai, and Pingjin tipped the regime balance.", 1, "kmtCcp", "1948-1949", "三大戰役決定國共內戰後期走向，中共取得軍事優勢並建立政權基礎。", "三大战役决定国共内战后期走向，中共取得军事优势并建立政权基础。", "The three campaigns decisively shifted the Chinese Civil War toward CCP victory."),
  entry("國府遷台", "国府迁台", "ROC Retreat to Taiwan", "南京的政權帶著印信渡海，海峽變成邊界。", "南京的政权带着印信渡海，海峡变成边界。", "A government crossed the sea and the strait became a border.", 1, "kmtCcp", "1949", "國民政府在內戰失利後遷往台灣，形成兩岸分治格局。", "国民政府在内战失利后迁往台湾，形成两岸分治格局。", "The Republic of China government retreated to Taiwan after losing the civil war, creating cross-strait division."),
  entry("九一八事變", "九一八事变", "Mukden Incident", "一段鐵軌爆炸，東北命運被改寫。", "一段铁轨爆炸，东北命运被改写。", "A railway blast rewrote Manchuria's fate.", 1, "ww2", "1931", "九一八事變後日本佔領東北，建立滿洲國，成為中日戰爭前奏。", "九一八事变后日本占领东北，建立满洲国，成为中日战争前奏。", "The Mukden Incident led to Japan's occupation of Manchuria and the puppet state Manchukuo."),
  entry("七七事變", "七七事变", "Marco Polo Bridge Incident", "橋邊槍聲響起，全面戰爭拉開。", "桥边枪声响起，全面战争拉开。", "Shots near a bridge opened full-scale war.", 1, "ww2", "1937", "七七事變後中日全面戰爭爆發，華北衝突迅速擴大。", "七七事变后中日全面战争爆发，华北冲突迅速扩大。", "The Marco Polo Bridge Incident triggered full-scale war between China and Japan."),
  entry("南京大屠殺", "南京大屠杀", "Nanjing Massacre", "城破之後，平民和戰俘成了暴行目標。", "城破之后，平民和战俘成了暴行目标。", "After the city fell, civilians and POWs became targets.", 1, "ww2", "1937", "日軍佔領南京後發生大規模屠殺、強姦和掠奪，是二戰東亞暴行核心記憶。", "日军占领南京后发生大规模屠杀、强奸和掠夺，是二战东亚暴行核心记忆。", "After Japanese forces captured Nanjing, mass killing, rape, and looting became central wartime memory."),
  entry("重慶大轟炸", "重庆大轰炸", "Chongqing Bombing", "陪都天空反覆燃燒，防空洞記住平民代價。", "陪都天空反复燃烧，防空洞记住平民代价。", "The wartime capital burned from the air, and shelters remembered civilians.", 2, "ww2", "1938-1943", "日本對重慶長期空襲，造成大量平民傷亡並考驗戰時政府與社會韌性。", "日本对重庆长期空袭，造成大量平民伤亡并考验战时政府与社会韧性。", "Japan's sustained bombing of Chongqing caused civilian casualties and tested wartime resilience."),
  entry("八百壯士", "八百壮士", "Eight Hundred Heroes", "倉庫守軍被拍成民族記憶，也被政治敘事反覆重剪。", "仓库守军被拍成民族记忆，也被政治叙事反复重剪。", "Warehouse defenders became national memory and political editing material.", 2, "ww2", "1937", "四行倉庫守軍抗戰事跡被國民政府宣傳為士氣象徵，後來成為兩岸抗戰敘事素材。", "四行仓库守军抗战事迹被国民政府宣传为士气象征，后来成为两岸抗战叙事素材。", "The Sihang Warehouse defense became a morale symbol and later a contested memory source."),
  entry("滇緬公路", "滇缅公路", "Burma Road", "山路運來補給，也運來戰爭的喘息。", "山路运来补给，也运来战争的喘息。", "A mountain road carried supplies and wartime breathing space.", 2, "ww2", "1938", "滇緬公路是抗戰時期中國重要國際補給線，連接雲南與緬甸。", "滇缅公路是抗战时期中国重要国际补给线，连接云南与缅甸。", "The Burma Road was a key supply route linking Yunnan and Burma during the war."),
  entry("中國遠征軍", "中国远征军", "Chinese Expeditionary Force", "士兵走進緬甸雨林，補給線寫進墓碑。", "士兵走进缅甸雨林，补给线写进墓碑。", "Soldiers entered Burma's jungles and supply lines entered tombstones.", 2, "ww2", "1942-1945", "中國遠征軍赴緬作戰，保衛和恢復盟軍對華補給通道，付出巨大傷亡。", "中国远征军赴缅作战，保卫和恢复盟军对华补给通道，付出巨大伤亡。", "Chinese forces fought in Burma to protect and restore Allied supply routes to China."),
  entry("七三一部隊", "七三一部队", "Unit Seven Three One", "實驗室穿上軍裝，人命被降格成材料。", "实验室穿上军装，人命被降格成材料。", "A laboratory wore a uniform and people became material.", 3, "ww2", "1930s-1945", "七三一部隊進行細菌戰和人體實驗，是日本侵華戰爭暴行之一。", "七三一部队进行细菌战和人体实验，是日本侵华战争暴行之一。", "Unit 731 conducted biological warfare and human experimentation during Japan's war in China."),
  entry("八三一太子站", "八三一太子站", "Prince Edward Eight Three One", "地鐵門關上後，謠言和恐懼一起擴散。", "地铁门关上后，谣言和恐惧一起扩散。", "After the subway doors closed, fear and rumors spread.", 3, "hongKong", "2019", "2019 年 8 月 31 日香港警方在太子站執法引發傷亡傳聞、監控透明度和警民信任爭議。", "2019 年 8 月 31 日香港警方在太子站执法引发伤亡传闻、监控透明度和警民信任争议。", "Police action at Prince Edward station sparked rumors, transparency disputes, and distrust during 2019 protests."),
  entry("七二一元朗", "七二一元朗", "Yuen Long Seven Two One", "白衣人走進車站，警民信任走出裂縫。", "白衣人走进车站，警民信任走出裂缝。", "White-clad attackers entered a station and trust cracked.", 2, "hongKong", "2019", "2019 年元朗襲擊事件中白衣人攻擊市民和示威者，警方反應引發重大爭議。", "2019 年元朗袭击事件中白衣人攻击市民和示威者，警方反应引发重大争议。", "The Yuen Long attack by white-clad men and police response became a major 2019 Hong Kong controversy."),
  entry("光復香港", "光复香港", "Liberate Hong Kong", "一句口號被寫進街頭，也被寫進罪名。", "一句口号被写进街头，也被写进罪名。", "A slogan entered the streets and then the charge sheet.", 3, "hongKong", "2019", "光復香港時代革命是反送中運動口號，國安法後被當局視為敏感甚至違法表述。", "光复香港时代革命是反送中运动口号，国安法后被当局视为敏感甚至违法表述。", "The protest slogan became legally sensitive after Hong Kong's national security law."),
  entry("連登", "连登", "LIHKG", "論壇像指揮部，也像情緒廣場。", "论坛像指挥部，也像情绪广场。", "A forum became both command room and emotional square.", 2, "hongKong", "2019", "連登在香港反送中運動中承擔資訊流通、動員和迷因生產角色。", "连登在香港反送中运动中承担信息流通、动员和迷因生产角色。", "LIHKG helped circulate information, mobilize action, and produce memes during the protests."),
  entry("蘋果日報停刊", "苹果日报停刊", "Apple Daily Closure", "報紙停印，新聞自由少了一盞燈。", "报纸停印，新闻自由少了一盏灯。", "A newspaper stopped printing and press freedom lost a lamp.", 2, "hongKong", "2021", "蘋果日報在國安法壓力與資產凍結後停刊，象徵香港媒體環境急劇收縮。", "苹果日报在国安法压力与资产冻结后停刊，象征香港媒体环境急剧收缩。", "Apple Daily closed after national-security pressure and asset freezes, symbolizing a sharp media contraction."),
  entry("立場新聞案", "立场新闻案", "Stand News Case", "新聞室被控煽動，採訪本身也變成風險。", "新闻室被控煽动，采访本身也变成风险。", "A newsroom was accused of sedition, and reporting became risk.", 3, "hongKong", "2021", "立場新聞被搜查和停運，相關案件反映香港新聞自由與煽動罪爭議。", "立场新闻被搜查和停运，相关案件反映香港新闻自由与煽动罪争议。", "The Stand News case reflected disputes over press freedom and sedition law in Hong Kong."),
  entry("初選四十七人", "初选四十七人", "Hong Kong Forty Seven", "一次初選，被放進顛覆敘事。", "一次初选，被放进颠覆叙事。", "A primary election was placed into a subversion narrative.", 3, "hongKong", "2021", "香港民主派初選 47 人案是國安法下最大規模案件之一，涉及顛覆國家政權指控。", "香港民主派初选 47 人案是国安法下最大规模案件之一，涉及颠覆国家政权指控。", "The Hong Kong 47 case is one of the largest national-security prosecutions involving opposition primaries."),
  entry("基本法二十三條", "基本法二十三条", "Article Twenty Three", "本地立法落下，紅線又往日常靠近。", "本地立法落下，红线又往日常靠近。", "Local security legislation brought red lines closer to daily life.", 3, "hongKong", "2024", "香港 2024 年完成二十三條本地國安立法，擴大叛國、間諜、外部干預等罪名框架。", "香港 2024 年完成二十三条本地国安立法，扩大叛国、间谍、外部干预等罪名框架。", "Hong Kong enacted Article 23 security legislation in 2024, expanding local national-security offenses.")
);

WORD_BANK.push(
  entry("怒斥香港記者", "怒斥香港记者", "Jiang Scolds Hong Kong Reporter", "不要總想搞大新聞，這句話自己成了大新聞。", "不要总想搞大新闻，这句话自己成了大新闻。", "Do not always chase big news, said the clip that became big news.", 4, "ccpMetaphor", "2000", "江澤民 2000 年會見香港記者時的訓話片段後來被網民反覆剪輯，成為膜蛤文化核心素材。", "江泽民 2000 年会见香港记者时的训话片段后来被网民反复剪辑，成为膜蛤文化核心素材。", "Jiang's 2000 scolding of Hong Kong reporters became a core source for toad-worship remixes."),
  entry("華萊士訪談", "华莱士访谈", "Wallace Interview", "英文、背詩和手勢，被剪成長者素材庫。", "英文、背诗和手势，被剪成长者素材库。", "English, poetry, and gestures became elder meme material.", 3, "ccpMetaphor", "2000", "江澤民接受美國記者華萊士訪談的片段常被網民拿來對比不同時期領導人風格。", "江泽民接受美国记者华莱士访谈的片段常被网民拿来对比不同时期领导人风格。", "Jiang's interview with Mike Wallace is often remixed and contrasted with later leadership styles."),
  entry("申奧成功", "申奥成功", "Beijing Olympic Bid Success", "廣場歡呼很響，國家形象工程也正式起跑。", "广场欢呼很响，国家形象工程也正式起跑。", "The cheers were loud, and the image project began running.", 2, "ccp", "2001", "北京 2001 年申奧成功發生在江澤民時期，後來成為中國崛起敘事和大型國家形象工程的一部分。", "北京 2001 年申奥成功发生在江泽民时期，后来成为中国崛起叙事和大型国家形象工程的一部分。", "Beijing's successful 2001 Olympic bid became part of China's rise narrative and state image-building."),
  entry("香港回歸交接", "香港回归交接", "Hong Kong Handover", "一國兩制登場，倒計時牌換成新劇本。", "一国两制登场，倒计时牌换成新剧本。", "One country, two systems entered the stage as the countdown changed scripts.", 2, "hongKong", "1997", "1997 年香港主權移交發生在江澤民任內，一國兩制承諾後來成為香港政治爭議核心背景。", "1997 年香港主权移交发生在江泽民任内，一国两制承诺后来成为香港政治争议核心背景。", "The 1997 handover under Jiang became the backdrop for later debates over one country, two systems."),
  entry("社會主義市場經濟", "社会主义市场经济", "Socialist Market Economy", "市場被請進門，姓社姓資先放一邊。", "市场被请进门，姓社姓资先放一边。", "The market was invited in while ideological labels waited outside.", 2, "ccp", "1992", "中共十四大確立社會主義市場經濟目標，承接鄧小平南方談話後的改革方向。", "中共十四大确立社会主义市场经济目标，承接邓小平南方谈话后的改革方向。", "The CCP's 14th Congress set the socialist market economy goal after Deng's southern tour.")
);

WORD_BANK.push(
  entry("依法治你", "依法治你", "Rule By Law On You", "法律像方向盤，轉向時才知道誰坐在駕駛座。", "法律像方向盘，转向时才知道谁坐在驾驶座。", "The law is the steering wheel; the driver appears when it turns.", 5, "ccpMetaphor", "2010s", "這個黑話反諷依法治國與選擇性執法之間的落差。", "这个黑话反讽依法治国与选择性执法之间的落差。", "The phrase mocks the gap between rule-of-law slogans and selective enforcement."),
  entry("口袋罪", "口袋罪", "Pocket Crime", "罪名像口袋，裝得下所有不方便。", "罪名像口袋，装得下所有不方便。", "A charge like a pocket can hold every inconvenience.", 4, "ccpMetaphor", "2000s", "尋釁滋事等彈性罪名常被批評為口袋罪，因為邊界模糊、適用空間大。", "寻衅滋事等弹性罪名常被批评为口袋罪，因为边界模糊、适用空间大。", "Flexible offenses such as picking quarrels are criticized as pocket crimes because their boundaries are broad."),
  entry("被自願", "被自愿", "Voluntold", "同意書寫得很客氣，旁邊站得很整齊。", "同意书写得很客气，旁边站得很整齐。", "The consent form sounds polite; the people beside it stand very straight.", 4, "ccpMetaphor", "2020s", "網民用被自願形容在行政壓力下形式上自願、實際上難以拒絕的場景。", "网民用被自愿形容在行政压力下形式上自愿、实际上难以拒绝的场景。", "Users say voluntold when administrative pressure turns formal consent into practical compulsion."),
  entry("熱搜蒸發", "热搜蒸发", "Hot Search Evaporation", "話題剛燒開，水壺就被端走。", "话题刚烧开，水壶就被端走。", "The topic starts boiling, then the kettle is removed.", 3, "ccpMetaphor", "2010s", "社群平台上的敏感話題會突然降溫、下榜或消失，形成熱搜蒸發的說法。", "社群平台上的敏感话题会突然降温、下榜或消失，形成热搜蒸发的说法。", "Sensitive social-media topics can abruptly cool, drop, or vanish, creating the hot-search evaporation meme."),
  entry("評論精選", "评论精选", "Curated Comments", "評論區還在，只是觀眾席被換成合唱團。", "评论区还在，只是观众席被换成合唱团。", "The comment section remains; the audience has been replaced by a choir.", 3, "ccpMetaphor", "2010s", "評論精選本是平台功能，黑色幽默裡常指只留下安全、順風或官方需要的聲音。", "评论精选本是平台功能，黑色幽默里常指只留下安全、顺风或官方需要的声音。", "Curated comments became a joke about leaving only safe, supportive, or officially convenient voices."),
  entry("全網下架", "全网下架", "Whole Web Takedown", "作品還沒老，連影子先退休。", "作品还没老，连影子先退休。", "The work has not aged; even its shadow retires first.", 4, "ccpMetaphor", "2010s", "當人、作品或話題突然在多平台消失時，網民用全網下架概括平台審查與風險切割。", "当人、作品或话题突然在多平台消失时，网民用全网下架概括平台审查与风险切割。", "When people, works, or topics disappear across platforms, users describe it as a whole-web takedown."),
  entry("不明原因", "不明原因", "Cause Unknown", "答案不是沒有，只是還沒批准出場。", "答案不是没有，只是还没批准出场。", "The answer exists; it just has not been approved to appear.", 3, "ccpMetaphor", "2020s", "官方通報常用不明原因處理敏感傷亡、事故或公共事件，網民把它變成遮蔽資訊的笑點。", "官方通报常用不明原因处理敏感伤亡、事故或公共事件，网民把它变成遮蔽信息的笑点。", "Cause unknown is mocked when official notices avoid detail on sensitive deaths, accidents, or public incidents."),
  entry("官方通報文學", "官方通报文学", "Official Notice Literature", "每個字都很準確，準確到避開重點。", "每个字都很准确，准确到避开重点。", "Every word is precise, precisely away from the point.", 3, "ccpMetaphor", "2020s", "通報模板化、被動語態和避重就輕的寫法常被網民戲稱為官方通報文學。", "通报模板化、被动语态和避重就轻的写法常被网民戏称为官方通报文学。", "Formulaic notices with passive phrasing and evasive emphasis are mocked as official-notice literature."),
  entry("睡前辟謠", "睡前辟谣", "Bedtime Rumor Refutation", "晚上說是假，早上發公告。", "晚上说是假，早上发公告。", "At night it is false; by morning it is an announcement.", 4, "ccpMetaphor", "2020s", "一些公共事件中，先被闢謠後被證實或部分證實的反差，催生了睡前闢謠式調侃。", "一些公共事件中，先被辟谣后被证实或部分证实的反差，催生了睡前辟谣式调侃。", "The meme comes from incidents where claims are denied first and later confirmed or partly confirmed."),
  entry("不信謠不傳謠", "不信谣不传谣", "Do Not Believe Rumors", "標語先把嘴封好，真相慢慢排隊。", "标语先把嘴封好，真相慢慢排队。", "The slogan seals mouths first while facts queue slowly.", 3, "ccpMetaphor", "2000s", "這句公共宣傳語在災難和突發事件中常被反諷，因為它有時先壓制討論再等正式版本。", "这句公共宣传语在灾难和突发事件中常被反讽，因为它有时先压制讨论再等正式版本。", "The public-safety slogan is mocked when it suppresses discussion before a full official account appears."),
  entry("健康碼治國", "健康码治国", "Health Code Governance", "紅黃綠三色，比戶口本還會說話。", "红黄绿三色，比户口本还会说话。", "Three colors can speak louder than a household register.", 4, "ccpMetaphor", "2020-2022", "健康碼在疫情中從防疫工具擴張為通行、隔離和社會控制的日常介面。", "健康码在疫情中从防疫工具扩张为通行、隔离和社会控制的日常界面。", "Health codes expanded from pandemic tools into everyday interfaces for movement, quarantine, and control."),
  entry("紅碼旅行團", "红码旅行团", "Red Code Tour Group", "不是旅遊套餐，是一鍵原地封印。", "不是旅游套餐，是一键原地封印。", "Not a travel package, but one-click immobilization.", 4, "ccpMetaphor", "2022", "河南村鎮銀行等事件後，賦紅碼爭議讓健康碼被視為可被行政目的挪用的工具。", "河南村镇银行等事件后，赋红码争议让健康码被视为可被行政目的挪用的工具。", "Red-code controversies, including around Henan bank depositors, made health codes look usable for administrative control beyond health."),
  entry("核酸經濟", "核酸经济", "PCR Economy", "棉棒一伸，GDP 也要張嘴。", "棉棒一伸，GDP 也要张嘴。", "When the swab goes in, GDP opens its mouth too.", 3, "current", "2020-2022", "常態化核酸催生檢測公司、採樣亭和地方財政支出，也留下利益鏈質疑。", "常态化核酸催生检测公司、采样亭和地方财政支出，也留下利益链质疑。", "Routine PCR testing created testing firms, booths, and fiscal spending while raising questions about vested interests."),
  entry("方艙文學", "方舱文学", "Fangcang Literature", "隔離床位很多，故事比插座還缺。", "隔离床位很多，故事比插座还缺。", "There are many quarantine beds; stories are scarcer than outlets.", 3, "ccpMetaphor", "2020-2022", "方艙隔離中的日記、吐槽和求助貼形成特殊記憶，反映集體隔離的荒誕和不便。", "方舱隔离中的日记、吐槽和求助帖形成特殊记忆，反映集体隔离的荒诞和不便。", "Diaries, complaints, and pleas from fangcang quarantine sites formed a memory of mass isolation's absurdity."),
  entry("層層加碼", "层层加码", "Layered Overreach", "上面說一寸，下面量出一公里。", "上面说一寸，下面量出一公里。", "The top says one inch; below it becomes a kilometer.", 3, "ccpMetaphor", "2020s", "層層加碼形容地方為避責把政策執行得更嚴，尤其在防疫和維穩中常見。", "层层加码形容地方为避责把政策执行得更严，尤其在防疫和维稳中常见。", "Layered overreach describes local officials enforcing policy more harshly to avoid responsibility, especially in pandemic and stability work."),
  entry("臨時工背鍋", "临时工背锅", "Temporary Worker Takes Blame", "鍋很重，編制很輕。", "锅很重，编制很轻。", "The blame is heavy; the employment status is light.", 3, "ccpMetaphor", "2000s", "出事後責任常被推給臨時工、外包或基層個人，網民用它諷刺問責切割。", "出事后责任常被推给临时工、外包或基层个人，网民用它讽刺问责切割。", "When responsibility is shifted to temps, contractors, or low-level staff, users mock it as blame outsourcing."),
  entry("鐵拳砸醒", "铁拳砸醒", "Iron Fist Awakening", "拳頭落下之前，大家都以為自己是觀眾。", "拳头落下之前，大家都以为自己是观众。", "Before the fist lands, everyone thinks they are just spectators.", 4, "ccpMetaphor", "2020s", "鐵拳梗常用於形容原本支持體制的人在自身利益受損後突然理解壓力。", "铁拳梗常用于形容原本支持体制的人在自身利益受损后突然理解压力。", "The iron-fist meme describes people who supported the system until policy pressure hit them personally."),
  entry("共同貧窮", "共同贫穷", "Common Poverty", "共同富裕的反義詞，總是先在錢包裡完成試點。", "共同富裕的反义词，总是先在钱包里完成试点。", "The antonym of common prosperity pilots itself in wallets first.", 4, "ccpMetaphor", "2020s", "這個反諷詞把共同富裕口號與收入壓力、就業焦慮和民營經濟不確定性放在一起。", "这个反讽词把共同富裕口号与收入压力、就业焦虑和民营经济不确定性放在一起。", "The phrase contrasts common-prosperity rhetoric with income pressure, job anxiety, and private-sector uncertainty."),
  entry("爛尾樓共和國", "烂尾楼共和国", "Unfinished Tower Republic", "房子沒交付，人生先停工。", "房子没交付，人生先停工。", "The apartment is unfinished; life stops construction first.", 4, "current", "2020s", "房企債務危機導致多地爛尾與停貸風波，購房者承擔交付和金融風險。", "房企债务危机导致多地烂尾与停贷风波，购房者承担交付和金融风险。", "Developer debt crises left unfinished projects and mortgage boycotts, pushing delivery and financial risk onto buyers."),
  entry("保交樓", "保交楼", "Guarantee Delivery", "先把夢賣出去，再搶救鋼筋水泥。", "先把梦卖出去，再抢救钢筋水泥。", "Sell the dream first, rescue the concrete later.", 3, "current", "2022", "保交樓是房地產風險外溢後的政策任務，重點從賣地增長轉向避免購房者損失擴大。", "保交楼是房地产风险外溢后的政策任务，重点从卖地增长转向避免购房者损失扩大。", "Guaranteeing delivery became a policy priority after property risks spilled over to homebuyers."),
  entry("土地財政成精", "土地财政成精", "Land Finance Monster", "地皮會說話，說的都是地方債。", "地皮会说话，说的都是地方债。", "The land speaks, and everything it says is local debt.", 4, "ccpMetaphor", "2000s-2020s", "地方政府長期依賴土地出讓收入，房地產降溫後財政壓力和債務問題集中浮現。", "地方政府长期依赖土地出让收入，房地产降温后财政压力和债务问题集中浮现。", "Local reliance on land-sale revenue made property slowdown expose fiscal and debt pressure."),
  entry("房住不炒不交房", "房住不炒不交房", "Homes For Living Not Delivering", "不炒很正確，不交更安靜。", "不炒很正确，不交更安静。", "No speculation sounds right; no delivery sounds quieter.", 4, "ccpMetaphor", "2020s", "這個黑色幽默把房住不炒口號和爛尾樓、交付困難並置，嘲諷政策語言與購房現實落差。", "这个黑色幽默把房住不炒口号和烂尾楼、交付困难并置，嘲讽政策语言与购房现实落差。", "The phrase pits the homes-not-speculation slogan against unfinished projects and delivery failures."),
  entry("孔乙己長衫", "孔乙己长衫", "Kong Yiji Gown", "讀書改變命運，先改成脫不下的長衫。", "读书改变命运，先改成脱不下的长衫。", "Education changes fate, first into a gown you cannot remove.", 3, "current", "2023", "孔乙己長衫借魯迅人物諷刺學歷貶值、青年就業困境和向下流動焦慮。", "孔乙己长衫借鲁迅人物讽刺学历贬值、青年就业困境和向下流动焦虑。", "The Kong Yiji gown meme uses Lu Xun's character to mock credential devaluation and youth job anxiety."),
  entry("青年失業率休假", "青年失业率休假", "Youth Jobless Rate Vacation", "數字太累了，先放個長假。", "数字太累了，先放个长假。", "The number got tired, so it took a long vacation.", 4, "current", "2023", "中國一度暫停發布青年失業率，後來調整統計口徑，網民把它視為數據管理笑話。", "中国一度暂停发布青年失业率，后来调整统计口径，网民把它视为数据管理笑话。", "China paused youth-unemployment publication and later changed methodology, turning the data gap into a meme."),
  entry("三十五歲優化", "三十五岁优化", "Optimized At Thirty Five", "年齡不是履歷，是倒計時。", "年龄不是履历，是倒计时。", "Age is not a resume line; it is a countdown.", 3, "current", "2020s", "35 歲危機來自職場招聘、裁員和中年再就業壓力，常被用來嘲諷用人成本邏輯。", "35 岁危机来自职场招聘、裁员和中年再就业压力，常被用来嘲讽用人成本逻辑。", "The thirty-five crisis reflects hiring bias, layoffs, and mid-career pressure in a cost-focused labor market."),
  entry("靈活畢業", "灵活毕业", "Flexible Graduation", "畢業證很硬，工作崗位很靈活。", "毕业证很硬，工作岗位很灵活。", "The diploma is firm; the job is flexible.", 3, "ccpMetaphor", "2020s", "這個詞把靈活就業與高校畢業生壓力連在一起，嘲諷就業統計和現實落差。", "这个词把灵活就业与高校毕业生压力连在一起，嘲讽就业统计和现实落差。", "The term links flexible employment with graduate pressure and mocks gaps between job statistics and reality."),
  entry("外賣算法爹", "外卖算法爹", "Delivery Algorithm Dad", "老闆不一定見得到，算法一定會催單。", "老板不一定见得到，算法一定会催单。", "You may never see the boss, but the algorithm always rushes you.", 3, "current", "2020s", "外賣平台用算法分配訂單、時間和評價，騎手承擔交通與收入壓力。", "外卖平台用算法分配订单、时间和评价，骑手承担交通与收入压力。", "Food-delivery platforms use algorithms for orders, timing, and ratings, putting risk and pressure on riders."),
  entry("九九六福報", "九九六福报", "Nine Nine Six Blessing", "加班像香火，燒完才算虔誠。", "加班像香火，烧完才算虔诚。", "Overtime is incense; only burnout proves devotion.", 3, "ccpMetaphor", "2010s", "996 福報來自互聯網加班文化爭議，網民用它反諷把剝削包裝成奮鬥。", "996 福报来自互联网加班文化争议，网民用它反讽把剥削包装成奋斗。", "The 996 blessing meme comes from tech overtime disputes and mocks exploitation packaged as奋斗."),
  entry("一鍵辱華", "一键辱华", "One Click Insult China", "按鈕還沒按下，帽子已經戴好。", "按钮还没按下，帽子已经戴好。", "Before the button is clicked, the accusation is already fitted.", 4, "ccpMetaphor", "2020s", "辱華指控常在品牌、影視、體育和外交爭議中快速擴散，網民用一鍵辱華嘲諷敏感度過高。", "辱华指控常在品牌、影视、体育和外交争议中快速扩散，网民用一键辱华嘲讽敏感度过高。", "Insult-China accusations spread quickly in brand, media, sports, and diplomatic controversies, inspiring the one-click meme."),
  entry("辱華檢測儀", "辱华检测仪", "Insult China Detector", "靈敏度拉滿，連空氣都可能不友好。", "灵敏度拉满，连空气都可能不友好。", "Sensitivity is maxed; even the air may be unfriendly.", 4, "ccpMetaphor", "2020s", "這個詞嘲諷民族主義審查和網路出征把普通符號解讀成政治冒犯。", "这个词嘲讽民族主义审查和网络出征把普通符号解读成政治冒犯。", "The detector meme mocks nationalist policing that turns ordinary symbols into political offense."),
  entry("戰狼回旋鏢", "战狼回旋镖", "Wolf Warrior Boomerang", "話說得越滿，回來時越疼。", "话说得越满，回来时越疼。", "The harder the line, the harder it returns.", 4, "ccpMetaphor", "2020s", "戰狼式表態在外交、商業或輿論中有時引發反作用，網民稱之為回旋鏢。", "战狼式表态在外交、商业或舆论中有时引发反作用，网民称之为回旋镖。", "Wolf-warrior rhetoric can backfire in diplomacy, business, or public opinion, hence the boomerang joke."),
  entry("贏麻了", "赢麻了", "Won Numb", "每天都贏，贏到臉上沒有知覺。", "每天都赢，赢到脸上没有知觉。", "Winning every day until your face goes numb.", 3, "ccpMetaphor", "2020s", "贏麻了常用來反諷宣傳口徑永遠勝利，現實壓力卻沒有被解決。", "赢麻了常用来反讽宣传口径永远胜利，现实压力却没有被解决。", "Won numb mocks propaganda that always claims victory while real problems remain."),
  entry("又贏一次", "又赢一次", "Won Again", "比分不知道，掌聲先到位。", "比分不知道，掌声先到位。", "No one knows the score, but applause arrives first.", 3, "ccpMetaphor", "2020s", "又贏是對民族主義敘事和媒體勝利口吻的壓縮嘲諷。", "又赢是对民族主义叙事和媒体胜利口吻的压缩嘲讽。", "Won again is a compact jab at nationalist narratives and victory-toned media framing."),
  entry("統計局美容院", "统计局美容院", "Statistics Beauty Salon", "數字進去洗個臉，出來就精神多了。", "数字进去洗个脸，出来就精神多了。", "Numbers get a facial and come out refreshed.", 4, "ccpMetaphor", "2020s", "這個梗嘲諷經濟和就業數據口徑調整、選擇發布或過度修飾。", "这个梗嘲讽经济和就业数据口径调整、选择发布或过度修饰。", "The meme mocks statistical methodology changes, selective publication, or cosmetic presentation of economic data."),
  entry("數據休假", "数据休假", "Data On Leave", "人會失業，數據會休假。", "人会失业，数据会休假。", "People may lose jobs; data takes leave.", 4, "ccpMetaphor", "2023", "當敏感數據暫停發布或改口徑時，網民用數據休假嘲諷透明度不足。", "当敏感数据暂停发布或改口径时，网民用数据休假嘲讽透明度不足。", "When sensitive data pauses or changes methodology, users joke that the data went on leave."),
  entry("網信辦宇宙", "网信办宇宙", "Cyberspace Office Universe", "每個星球都有評論區，每個評論區都有紅線。", "每个星球都有评论区，每个评论区都有红线。", "Every planet has comments; every comment section has red lines.", 4, "ccpMetaphor", "2010s", "網信辦代表中國網路治理和內容管控體系，網民用宇宙梗形容紅線無處不在。", "网信办代表中国网络治理和内容管控体系，网民用宇宙梗形容红线无处不在。", "The Cyberspace Administration symbolizes content control; the universe joke says red lines are everywhere."),
  entry("學習強國刷分", "学习强国刷分", "Study Xi Score Farming", "思想也有日活，忠誠也有積分。", "思想也有日活，忠诚也有积分。", "Ideology has daily active users; loyalty has points.", 3, "ccpMetaphor", "2019", "學習強國 app 推出後，部分單位把學習積分變成考核任務，形成刷分黑色幽默。", "学习强国 app 推出后，部分单位把学习积分变成考核任务，形成刷分黑色幽默。", "After the Study Xi app launched, some workplaces treated points as assessment tasks, creating score-farming jokes."),
  entry("忠誠競賽", "忠诚竞赛", "Loyalty Contest", "表態不是終點，是下一輪起跑線。", "表态不是终点，是下一轮起跑线。", "A loyalty statement is not the finish line; it starts the next round.", 4, "ccpMetaphor", "2010s", "黨內政治中忠誠表態層層加碼，網民用競賽形容互相比誰更正確。", "党内政治中忠诚表态层层加码，网民用竞赛形容互相比谁更正确。", "Escalating loyalty declarations become a contest over who sounds most correct."),
  entry("親自背鍋", "亲自背锅", "Personally Takes The Blame", "親自指揮很風光，親自背鍋很科幻。", "亲自指挥很风光，亲自背锅很科幻。", "Personally commanding is glorious; personally taking blame is science fiction.", 4, "ccpMetaphor", "2020s", "它反諷重大政策被塑造成最高領導親自部署，但出問題時責任往往下沉。", "它反讽重大政策被塑造成最高领导亲自部署，但出问题时责任往往下沉。", "The joke contrasts top-level credit for personal command with blame that usually flows downward."),
  entry("一尊模式", "一尊模式", "One Man Mode", "多人遊戲被更新成單人劇情。", "多人游戏被更新成单人剧情。", "A multiplayer game is patched into a single-player storyline.", 5, "ccpMetaphor", "2010s", "一尊模式諷刺權力集中、集體領導弱化和個人核心化。", "一尊模式讽刺权力集中、集体领导弱化和个人核心化。", "One-man mode satirizes concentrated power, weaker collective leadership, and personal core politics."),
  entry("梁家河濾鏡", "梁家河滤镜", "Liangjiahe Filter", "一開濾鏡，土窯洞也能發光。", "一开滤镜，土窑洞也能发光。", "Turn on the filter and even a cave dwelling glows.", 4, "ccpMetaphor", "2010s", "梁家河敘事被用來塑造領袖吃苦和基層經歷，網民用濾鏡諷刺履歷神聖化。", "梁家河叙事被用来塑造领袖吃苦和基层经历，网民用滤镜讽刺履历神圣化。", "The Liangjiahe story is used to craft a hardship biography; the filter meme mocks sanctified biography."),
  entry("雄安空城計", "雄安空城计", "Xiongan Empty City Stratagem", "千年大計先上牆，人氣慢慢等通知。", "千年大计先上墙，人气慢慢等通知。", "The millennium plan goes on the wall first; population waits for notice.", 4, "ccpMetaphor", "2017", "雄安宏大規劃引發對政績工程、新城建設和人口產業導入速度的網路質疑。", "雄安宏大规划引发对政绩工程、新城建设和人口产业导入速度的网络质疑。", "Xiongan's grand planning produced online skepticism about prestige projects and the speed of population and industry arrival."),
  entry("千年大餅", "千年大饼", "Millennium Pie", "餅畫得越圓，肚子越容易餓。", "饼画得越圆，肚子越容易饿。", "The rounder the promised pie, the hungrier the stomach.", 4, "ccpMetaphor", "2017", "千年大餅把千年大計和畫餅充飢合在一起，嘲諷宏大規劃與現實落差。", "千年大饼把千年大计和画饼充饥合在一起，嘲讽宏大规划与现实落差。", "The meme fuses millennium plan with empty promise, mocking gaps between grand planning and lived reality."),
  entry("維穩KPI", "维稳KPI", "Stability KPI", "社會很穩，因為表格不能抖。", "社会很稳，因为表格不能抖。", "Society is stable because the spreadsheet must not shake.", 4, "ccpMetaphor", "2000s", "地方治理常把穩定作為硬指標，維權、上訪和抗議被納入考核壓力。", "地方治理常把稳定作为硬指标，维权、上访和抗议被纳入考核压力。", "Local governance often treats stability as a hard metric, turning petitions and protests into assessment pressure."),
  entry("茶喝明白", "茶喝明白", "Tea Talk Understood", "一杯茶下去，話就知道該怎麼說。", "一杯茶下去，话就知道该怎么说。", "After a cup of tea, you know what to say.", 3, "ccpMetaphor", "2000s", "喝茶是網路黑話，指被警方或有關部門約談提醒。", "喝茶是网络黑话，指被警方或有关部门约谈提醒。", "Tea drinking is online slang for being summoned or warned by police or authorities."),
  entry("指定居所", "指定居所", "Designated Residence", "地址很指定，自由很抽象。", "地址很指定，自由很抽象。", "The address is designated; freedom is abstract.", 4, "ccpMetaphor", "2010s", "指定居所監視居住是刑事程序中的強制措施，常因秘密羈押和律師會見受限引發爭議。", "指定居所监视居住是刑事程序中的强制措施，常因秘密羁押和律师会见受限引发争议。", "Residential surveillance at a designated location is controversial because it can involve secret detention and restricted legal access."),
  entry("電視認罪", "电视认罪", "Televised Confession", "審判還沒開播，懺悔先上黃金檔。", "审判还没开播，忏悔先上黄金档。", "The trial has not aired; repentance gets prime time first.", 4, "ccpMetaphor", "2010s", "被拘押者在媒體上認罪的做法被批評為未審先判和輿論審判。", "被拘押者在媒体上认罪的做法被批评为未审先判和舆论审判。", "Televised confessions are criticized as trial by media before due process."),
  entry("境外敵對勢力", "境外敌对势力", "Hostile Foreign Forces", "鍋太大，國界外比較好放。", "锅太大，国界外比较好放。", "When the blame is too large, it fits better outside the border.", 4, "ccpMetaphor", "2000s", "境外勢力敘事常用於解釋抗議、維權或輿論壓力，網民用它嘲諷外部歸因。", "境外势力叙事常用于解释抗议、维权或舆论压力，网民用它嘲讽外部归因。", "Hostile-foreign-force narratives explain protests or rights pressure through external blame and are widely mocked."),
  entry("檔案不存在", "档案不存在", "File Does Not Exist", "查無此人，查無此事，查無此記憶。", "查无此人，查无此事，查无此记忆。", "No such person, no such event, no such memory.", 4, "ccpMetaphor", "2020s", "這個詞形容敏感事件、人物或報導在公開資料中突然消失。", "这个词形容敏感事件、人物或报道在公开资料中突然消失。", "The phrase describes sensitive events, people, or reports disappearing from public records."),
  entry("冷處理", "冷处理", "Cold Treatment", "火不能撲，就把溫度計拿走。", "火不能扑，就把温度计拿走。", "If the fire cannot be put out, remove the thermometer.", 3, "ccpMetaphor", "2000s", "冷處理指用拖延、沉默、降熱搜和不回應讓公共事件自然退潮。", "冷处理指用拖延、沉默、降热搜和不回应让公共事件自然退潮。", "Cold treatment uses delay, silence, lowered visibility, and non-response to let public anger fade."),
  entry("胡錦濤", "胡锦涛", "Hu Jintao", "一位看似低音量的總書記，最後在高音量年代被鏡頭記住。", "一位看似低音量的总书记，最后在高音量年代被镜头记住。", "A low-volume party chief remembered most sharply by a loud later scene.", 2, "ccp", "2002-2012", "起因是江澤民之後的接班安排需要平穩過渡；經過是胡錦濤以總書記和國家主席身份執政十年，強調集體領導、發展與穩定；結果是他裸退後影響力迅速淡出，後來常被拿來和習近平時代的權力集中對照。", "起因是江泽民之后的接班安排需要平稳过渡；经过是胡锦涛以总书记和国家主席身份执政十年，强调集体领导、发展与稳定；结果是他裸退后影响力迅速淡出，后来常被拿来和习近平时代的权力集中对照。", "Hu's rise came from the post-Jiang succession plan; he governed for a decade with collective leadership, development, and stability as themes; after fully retiring, his influence faded and became a contrast with Xi-era centralization."),
  entry("科學發展觀", "科学发展观", "Scientific Outlook On Development", "聽起來像政策白皮書，也像幹部考試必背題。", "听起来像政策白皮书，也像干部考试必背题。", "It sounds like a white paper and a cadre exam question at once.", 2, "ccp", "2003", "起因是粗放增長造成貧富差距、環境和地方債等壓力；經過是胡錦濤提出以人為本、全面協調可持續的發展口號；結果是它進入黨章和官方教材，但在權力邏輯上仍難約束地方 GDP 衝動。", "起因是粗放增长造成贫富差距、环境和地方债等压力；经过是胡锦涛提出以人为本、全面协调可持续的发展口号；结果是它进入党章和官方教材，但在权力逻辑上仍难约束地方 GDP 冲动。", "The slogan responded to inequality, environmental damage, and debt from growth-at-all-costs; Hu promoted people-centered and sustainable development; it entered party doctrine but did not fully restrain GDP-driven governance."),
  entry("和諧社會", "和谐社会", "Harmonious Society", "所有矛盾都叫不和諧，所有刪帖都叫調音。", "所有矛盾都叫不和谐，所有删帖都叫调音。", "Every conflict is disharmony; every deletion is sound mixing.", 2, "ccpMetaphor", "2005", "起因是改革後社會衝突、維權和貧富差距增多；經過是胡溫時期用和諧社會包裝治理目標，也讓和諧變成網路審查代稱；結果是口號留下，網民則把被刪帖稱為被和諧。", "起因是改革后社会冲突、维权和贫富差距增多；经过是胡温时期用和谐社会包装治理目标，也让和谐变成网络审查代称；结果是口号留下，网民则把被删帖称为被和谐。", "The slogan answered rising disputes and inequality; Hu-Wen governance framed order as harmony, while users turned harmonized into a censorship joke; the word became both doctrine and meme."),
  entry("被和諧", "被和谐", "Harmonized Away", "帖子不是沒了，是去參加合唱團了。", "帖子不是没了，是去参加合唱团了。", "The post did not vanish; it joined the harmony choir.", 3, "ccpMetaphor", "2000s", "起因是胡錦濤時代和諧社會口號與網路審查同時升溫；經過是敏感文章、評論和帳號被刪除或限制；結果是被和諧成為中文網路最經典的審查黑話之一。", "起因是胡锦涛时代和谐社会口号与网络审查同时升温；经过是敏感文章、评论和账号被删除或限制；结果是被和谐成为中文网络最经典的审查黑话之一。", "The meme came from harmony rhetoric meeting internet censorship; sensitive posts and accounts were removed or limited; harmonized away became a classic Chinese censorship euphemism."),
  entry("不折騰", "不折腾", "No Tossing Around", "最高級的政治願望，竟然是別再亂按按鈕。", "最高级的政治愿望，竟然是别再乱按按钮。", "The highest political wish is simply: stop pressing random buttons.", 3, "ccpMetaphor", "2008", "起因是改革三十年後社會期待穩定路線；經過是胡錦濤在紀念改革開放講話中提出不動搖、不懈怠、不折騰；結果是不折騰被網民記住，後來常用來反諷政策急轉彎。", "起因是改革三十年后社会期待稳定路线；经过是胡锦涛在纪念改革开放讲话中提出不动摇、不懈怠、不折腾；结果是不折腾被网民记住，后来常用来反讽政策急转弯。", "Hu used no tossing around during reform-anniversary rhetoric; users remembered it as a plea for policy restraint; it later became satire when policy swings returned."),
  entry("團派時代", "团派时代", "Tuanpai Era", "共青團履歷像政治簡歷模板，填滿了溫和中層感。", "共青团履历像政治简历模板，填满了温和中层感。", "The Youth League resume looked like a political template with cautious-manager energy.", 3, "ccp", "2000s", "起因是胡錦濤早年在共青團系統上升；經過是許多團派幹部在胡時期進入地方和中央職位；結果是團派被視為一股技術官僚力量，但在習近平時代遭到邊緣化。", "起因是胡锦涛早年在共青团系统上升；经过是许多团派干部在胡时期进入地方和中央职位；结果是团派被视为一股技术官僚力量，但在习近平时代遭到边缘化。", "Hu rose through the Youth League; many officials with similar backgrounds advanced during his era; Tuanpai became a technocratic factional label and later lost ground under Xi."),
  entry("胡溫新政", "胡温新政", "Hu Wen New Deal", "看起來像補課型政府，哪裡破了就貼一塊膠布。", "看起来像补课型政府，哪里破了就贴一块胶布。", "A make-up-class government, patching each leak with policy tape.", 2, "ccp", "2000s", "起因是九十年代改革留下農村、民生和社保壓力；經過是胡錦濤與溫家寶推動免農業稅、新農合、低保和西部政策等調整；結果是民生補丁增加，但政治改革和權力約束仍停滯。", "起因是九十年代改革留下农村、民生和社保压力；经过是胡锦涛与温家宝推动免农业税、新农合、低保和西部政策等调整；结果是民生补丁增加，但政治改革和权力约束仍停滞。", "Hu and Wen responded to rural and welfare pressures with tax relief and social-policy programs; the state patched many livelihood gaps; political reform and power constraints remained stalled."),
  entry("九常委九龍治水", "九常委九龙治水", "Nine Dragons Governing Water", "水龍頭很多，誰都能開，誰都不想關。", "水龙头很多，谁都能开，谁都不想关。", "Many faucets, many hands, not much accountability.", 4, "ccpMetaphor", "2002-2012", "起因是胡時期政治局常委分工龐雜、權力分散；經過是政法、宣傳、軍隊和經濟等系統各自形成山頭；結果是集體領導降低個人獨裁風險，也造成決策慢和部門坐大。", "起因是胡时期政治局常委分工庞杂、权力分散；经过是政法、宣传、军队和经济等系统各自形成山头；结果是集体领导降低个人独裁风险，也造成决策慢和部门坐大。", "Hu-era top power was dispersed among many Standing Committee portfolios; security, propaganda, military, and economic systems built their own turf; it reduced one-man rule but created fragmentation."),
  entry("集體領導", "集体领导", "Collective Leadership", "會議桌很長，責任書很短。", "会议桌很长，责任书很短。", "A long conference table and a short accountability sheet.", 3, "ccp", "2000s", "起因是中共在毛時代後嘗試避免個人獨裁重演；經過是胡錦濤時期延續常委分權、退休年齡和接班梯隊慣例；結果是制度化表面更強，但派系平衡也讓改革難以推進。", "起因是中共在毛时代后尝试避免个人独裁重演；经过是胡锦涛时期延续常委分权、退休年龄和接班梯队惯例；结果是制度化表面更强，但派系平衡也让改革难以推进。", "The CCP tried to avoid Mao-style personal rule; Hu's era kept norms around retirement, succession, and divided portfolios; institutional appearance strengthened but reform became harder."),
  entry("悶聲治國", "闷声治国", "Quiet Governance", "不是沒有聲音，是麥克風被放在文件櫃裡。", "不是没有声音，是麦克风被放在文件柜里。", "There is sound; the microphone is just inside a filing cabinet.", 3, "ccpMetaphor", "2000s", "起因是胡錦濤個人風格低調、語言高度官樣；經過是重大政策多以文件、會議和集體名義推出；結果是他被網民塑造成悶聲領導，和後來強烈個人化宣傳形成反差。", "起因是胡锦涛个人风格低调、语言高度官样；经过是重大政策多以文件、会议和集体名义推出；结果是他被网民塑造成闷声领导，和后来强烈个人化宣传形成反差。", "Hu's style was restrained and bureaucratic; policy came through documents and collective procedure; online memory frames him as quiet, especially beside Xi-era personalization."),
  entry("裸退樣板", "裸退样板", "Full Retirement Model", "退得乾淨到像交接文件被消毒。", "退得干净到像交接文件被消毒。", "He retired so fully it looked like the handover file had been sterilized.", 3, "ccp", "2012-2013", "起因是中共高層交接需要處理老領導留任軍權的慣例；經過是胡錦濤在十八大後交出總書記和軍委主席，次年卸任國家主席；結果是裸退被視為少見的完整交權，後來更顯突兀。", "起因是中共高层交接需要处理老领导留任军权的惯例；经过是胡锦涛在十八大后交出总书记和军委主席，次年卸任国家主席；结果是裸退被视为少见的完整交权，后来更显突兀。", "Hu fully handed over party and military posts after the 18th Congress and the presidency the next year; the clean retirement contrasted with earlier elders retaining influence and later centralized rule."),
  entry("二十大架走", "二十大架走", "Twentieth Congress Escort Out", "前任坐在台上，現任年代把他請成了世界名場面。", "前任坐在台上，现任年代把他请成了世界名场面。", "A former leader sat on stage; the new era turned his exit into a global scene.", 4, "ccp", "2022", "起因是二十大閉幕會上胡錦濤坐在主席台習近平身旁；經過是工作人員在鏡頭前將他扶起並帶離會場，官方媒體後稱他身體不適；結果是畫面引發外界對健康、權力象徵和高層政治的各種解讀。", "起因是二十大闭幕会上胡锦涛坐在主席台习近平身旁；经过是工作人员在镜头前将他扶起并带离会场，官方媒体后称他身体不适；结果是画面引发外界对健康、权力象征和高层政治的各种解读。", "At the 20th Party Congress closing session, Hu was seated beside Xi; staff lifted and escorted him out on camera, while official media later cited health; the scene sparked debate over health, symbolism, and elite politics."),
  entry("退休被請出", "退休被请出", "Retired And Removed", "退休不是終點，還可能有臨時退場動畫。", "退休不是终点，还可能有临时退场动画。", "Retirement is not the end; it may include an exit animation.", 4, "ccpMetaphor", "2022", "起因是胡錦濤早已裸退卻仍以元老身份出席二十大；經過是他被帶離主席台的影像在海外迅速傳播；結果是退休被請出成為網民嘲諷權力無情和元老失勢的短語。", "起因是胡锦涛早已裸退却仍以元老身份出席二十大；经过是他被带离主席台的影像在海外迅速传播；结果是退休被请出成为网民嘲讽权力无情和元老失势的短语。", "Hu had fully retired but attended as an elder; the exit video spread widely abroad; the phrase jokes about the vulnerability of retired elders under concentrated power."),
  entry("胡不開口", "胡不开口", "Hu Does Not Speak", "嘴巴還在，麥克風已經移除權限。", "嘴巴还在，麦克风已经移除权限。", "The mouth remains; microphone permission has been revoked.", 4, "ccpMetaphor", "2022", "起因是胡錦濤二十大退場後沒有公開完整說明；經過是相關討論在中國大陸被高度限制；結果是胡不開口成為網民形容前任沉默和政治謎語的黑色幽默。", "起因是胡锦涛二十大退场后没有公开完整说明；经过是相关讨论在中国大陆被高度限制；结果是胡不开口成为网民形容前任沉默和政治谜语的黑色幽默。", "After the 20th Congress exit, Hu did not give a public explanation and domestic discussion was restricted; the meme frames silence as political riddle."),
  entry("河蟹上岸", "河蟹上岸", "River Crab Ashore", "和諧變河蟹，螃蟹爬過來就知道帖子要沒了。", "和谐变河蟹，螃蟹爬过来就知道帖子要没了。", "Harmony became a river crab; when it crawls over, the post is gone.", 4, "ccpMetaphor", "2000s", "起因是和諧與河蟹諧音；經過是網民用河蟹圖像和文字躲避審查；結果是河蟹成為胡時代審查文化的代表性吉祥物。", "起因是和谐与河蟹谐音；经过是网民用河蟹图像和文字躲避审查；结果是河蟹成为胡时代审查文化的代表性吉祥物。", "The pun turns harmony into river crab; users used the crab to mock and evade censorship; it became a mascot of Hu-era internet control."),
  entry("草泥馬衝塔", "草泥马冲塔", "Grass Mud Horse Charge", "神獸不住動物園，住在敏感詞邊界。", "神兽不住动物园，住在敏感词边界。", "The mythical beast lives not in a zoo but on the edge of blocked words.", 4, "ccpMetaphor", "2009", "起因是網路審查催生大量諧音暗語；經過是草泥馬以歌曲、影片和表情包形式走紅，用低俗諧音對抗河蟹；結果是它成為中文互聯網反審查文化的標誌。", "起因是网络审查催生大量谐音暗语；经过是草泥马以歌曲、视频和表情包形式走红，用低俗谐音对抗河蟹；结果是它成为中文互联网反审查文化的标志。", "Censorship produced coded puns; Grass Mud Horse spread through songs and memes as a vulgar anti-harmony joke; it became a symbol of Chinese anti-censorship culture."),
  entry("SARS瞞報", "SARS瞒报", "SARS Cover Up", "病毒先跑，通報後到，公信力被隔離。", "病毒先跑，通报后到，公信力被隔离。", "The virus moved first, notices arrived later, and credibility went into quarantine.", 2, "ccp", "2003", "起因是非典疫情早期地方和部門隱瞞或低估資訊；經過是疫情擴散到北京、香港和海外後中央撤換官員並加強通報；結果是公共衛生體系受到衝擊，也暴露威權體制下資訊延遲的風險。", "起因是非典疫情早期地方和部门隐瞒或低估信息；经过是疫情扩散到北京、香港和海外后中央撤换官员并加强通报；结果是公共卫生体系受到冲击，也暴露威权体制下信息延迟的风险。", "Early SARS reporting was concealed or minimized; after spread to Beijing, Hong Kong, and abroad, officials were removed and reporting tightened; the crisis exposed the danger of delayed information."),
  entry("奧運維穩", "奥运维稳", "Olympic Stability Maintenance", "鳥巢很亮，周邊的紅線更亮。", "鸟巢很亮，周边的红线更亮。", "The Bird's Nest shone brightly, and so did the red lines around it.", 3, "ccp", "2008", "起因是北京奧運承載國家形象工程；經過是安保、上訪管控、異議壓制和城市治理一起加碼；結果是奧運展示了國力，也讓大型活動維穩模式更制度化。", "起因是北京奥运承载国家形象工程；经过是安保、上访管控、异议压制和城市治理一起加码；结果是奥运展示了国力，也让大型活动维稳模式更制度化。", "The Beijing Olympics carried national-image goals; security, petition control, dissent pressure, and urban management intensified; the event showcased power and normalized mega-event stability control."),
  entry("西藏三一四", "西藏三一四", "Tibet March Fourteenth", "火炬還沒到，邊疆治理已經起火。", "火炬还没到，边疆治理已经起火。", "Before the Olympic torch arrived, frontier governance was already on fire.", 3, "ccp", "2008", "起因是西藏長期宗教、民族和政治控制矛盾累積；經過是 2008 年拉薩抗議和騷亂後當局大規模鎮壓並強化管控；結果是西藏議題在北京奧運前國際化，也讓民族地區高壓治理升級。", "起因是西藏长期宗教、民族和政治控制矛盾累积；经过是 2008 年拉萨抗议和骚乱后当局大规模镇压并强化管控；结果是西藏议题在北京奥运前国际化，也让民族地区高压治理升级。", "Long-running tensions over religion, ethnicity, and control fed the 2008 Lhasa unrest; authorities cracked down and tightened control; the Tibet issue internationalized before the Olympics."),
  entry("七五事件", "七五事件", "Urumqi July Fifth", "民族矛盾被拖到街頭，後來被拖進更大的監控網。", "民族矛盾被拖到街头，后来被拖进更大的监控网。", "Ethnic tension reached the streets, then entered a larger surveillance net.", 3, "ccp", "2009", "起因是新疆民族矛盾、治安壓力和韶關事件後的抗議情緒疊加；經過是烏魯木齊發生大規模暴力衝突與鎮壓；結果是新疆治理轉向更高壓的維穩與監控路線。", "起因是新疆民族矛盾、治安压力和韶关事件后的抗议情绪叠加；经过是乌鲁木齐发生大规模暴力冲突与镇压；结果是新疆治理转向更高压的维稳与监控路线。", "Ethnic tensions, security pressure, and anger after the Shaoguan incident fed unrest in Urumqi; violence and crackdown followed; Xinjiang governance moved toward harsher stability and surveillance."),
  entry("微博元年", "微博元年", "Weibo First Year", "廣場搬到手機裡，河蟹也學會了滑螢幕。", "广场搬到手机里，河蟹也学会了滑屏幕。", "The square moved into phones, and the river crab learned to swipe.", 2, "current", "2009-2011", "起因是微博等社交媒體在胡時代後期快速普及；經過是公共事件、維權和爆料在網路上高速擴散；結果是輿論空間短暫活躍，也迫使審查和實名管理升級。", "起因是微博等社交媒体在胡时代后期快速普及；经过是公共事件、维权和爆料在网络上高速扩散；结果是舆论空间短暂活跃，也迫使审查和实名管理升级。", "Microblogging spread quickly late in Hu's era; public incidents and exposés traveled fast; a brief online public sphere emerged while censorship and real-name controls tightened."),
  entry("維穩預算", "维稳预算", "Stability Budget", "穩定不是形容詞，是可以報銷的名詞。", "稳定不是形容词，是可以报销的名词。", "Stability is not an adjective; it is a reimbursable noun.", 3, "ccpMetaphor", "2000s", "起因是群體事件、上訪和網路輿情讓地方治理壓力上升；經過是維穩系統擴張，投入警力、監控和基層管控；結果是維穩成為制度化支出，也把社會矛盾轉化為安保成本。", "起因是群体事件、上访和网络舆情让地方治理压力上升；经过是维稳系统扩张，投入警力、监控和基层管控；结果是维稳成为制度化支出，也把社会矛盾转化为安保成本。", "Rising petitions, protests, and online opinion pushed local control spending; stability maintenance expanded through police, monitoring, and grassroots control; social conflict became a security budget line."),
  entry("聯合利劍外送", "联合利剑外送", "Joint Sword Delivery", "解放軍的外送範圍很大，餐點叫威嚇，運費叫軍演。", "解放军的外送范围很大，餐点叫威吓，运费叫军演。", "A delivery zone around Taiwan where the meal is intimidation and the fee is a drill.", 4, "current", "2024", "起因是北京反對賴清德就職後的兩岸表述；經過是解放軍在台灣周邊發動聯合利劍系列軍演；結果是軍演成為台海政治訊號和網路梗，被嘲諷成定期外送。", "起因是北京反对赖清德就职后的两岸表述；经过是解放军在台湾周边发动联合利剑系列军演；结果是军演成为台海政治信号和网络梗，被嘲讽成定期外送。", "After Beijing objected to Lai Ching-te's cross-strait framing, the PLA held Joint Sword drills around Taiwan; the exercises became both coercive signal and delivery-style meme."),
  entry("圍台直播間", "围台直播间", "Taiwan Encirclement Livestream", "每次畫箭頭都像開台，觀眾負責刷緊張。", "每次画箭头都像开播，观众负责刷紧张。", "Each arrow map feels like a livestream; viewers supply the panic comments.", 4, "current", "2024", "起因是台海軍演常伴隨路線圖和官方宣傳；經過是媒體用箭頭、包圍圈和即時戰報呈現；結果是網民把它戲稱為圍台直播間，嘲諷軍事威嚇的媒體化。", "起因是台海军演常伴随路线图和官方宣传；经过是媒体用箭头、包围圈和即时战报呈现；结果是网民把它戏称为围台直播间，嘲讽军事威吓的媒体化。", "PLA drills are packaged with maps, arrows, and real-time messaging; users joke about an encirclement livestream, mocking the media spectacle around coercion."),
  entry("懲獨套餐", "惩独套餐", "Punish Independence Combo", "刑法、軍機、通稿一起上桌，套餐名叫震懾。", "刑法、军机、通稿一起上桌，套餐名叫震慑。", "Criminal law, aircraft, and press releases served as one intimidation combo meal.", 4, "current", "2024", "起因是北京強化對台獨的法律和政治壓力；經過是 2024 年發布懲治台獨頑固分子意見，並與軍演和輿論戰並行；結果是它成為兩岸威嚇語言，也被網民戲稱套餐。", "起因是北京强化对台独的法律和政治压力；经过是 2024 年发布惩治台独顽固分子意见，并与军演和舆论战并行；结果是它成为两岸威吓语言，也被网民戏称套餐。", "Beijing tightened legal and political pressure on Taiwan independence advocacy, issuing punishment guidelines in 2024 alongside drills and messaging; users compress it into a combo-meal joke."),
  entry("橙色旅遊燈", "橙色旅游灯", "Orange Travel Light", "旅遊攻略忽然變成政治紅綠燈，顏色越暖越不想出門。", "旅游攻略忽然变成政治红绿灯，颜色越暖越不想出门。", "Travel advice became a political traffic light: the warmer the color, the colder the trip.", 3, "taiwan", "2024", "起因是中國公布懲治台獨文件後，台灣擔心赴陸、港、澳風險上升；經過是陸委會把相關旅遊警示調高；結果是顏色警示成為兩岸政治溫度計。", "起因是中国公布惩治台独文件后，台湾担心赴陆、港、澳风险上升；经过是陆委会把相关旅游警示调高；结果是颜色警示成为两岸政治温度计。", "After China's punishment guidelines, Taiwan warned travel to China, Hong Kong, and Macau carried higher risk; the warning color became a cross-strait political thermometer."),
  entry("互不隸屬復讀機", "互不隶属复读机", "Mutual Non Subordination Repeater", "一句話講完，北京血壓機就開始自動加壓。", "一句话讲完，北京血压计就开始自动加压。", "One phrase is enough to make Beijing's pressure gauge pump itself.", 4, "taiwan", "2024", "起因是賴清德就任後延續中華民國與中華人民共和國互不隸屬表述；經過是北京批評其台獨立場並加大軍政壓力；結果是這句話成為兩岸論述戰的高頻按鈕。", "起因是赖清德就任后延续中华民国与中华人民共和国互不隶属表述；经过是北京批评其台独立场并加大军政压力；结果是这句话成为两岸论述战的高频按钮。", "Lai continued the line that the ROC and PRC are not subordinate to each other; Beijing condemned it and raised pressure; the phrase became a hot button in narrative warfare."),
  entry("青鳥露營區", "青鸟露营区", "Bluebird Camp", "民主夜市開在立院外，帳篷比議程還準時。", "民主夜市开在立院外，帐篷比议程还准时。", "A democracy night market outside parliament, with tents more punctual than agendas.", 3, "taiwan", "2024", "起因是台灣立法院改革法案引發程序和權力爭議；經過是大批民眾在立院外集會，青鳥成為抗議符號；結果是它成為台灣年輕政治參與和藍白綠對抗的新梗。", "起因是台湾立法院改革法案引发程序和权力争议；经过是大批民众在立院外集会，青鸟成为抗议符号；结果是它成为台湾年轻政治参与和蓝白绿对抗的新梗。", "Legislative reform disputes over procedure and power triggered large protests outside Taiwan's legislature; Bluebird became a symbol of youth civic action and partisan confrontation."),
  entry("立院功夫片", "立院功夫片", "Legislature Kung Fu Film", "法案還沒三讀，武打指導先上班。", "法案还没三读，武术指导先上班。", "Before the bill finishes readings, the fight choreographer clocks in.", 3, "taiwan", "2024", "起因是台灣國會改革、朝野席次和程序衝突加劇；經過是立法院爆發推擠、搶案和肢體衝突；結果是民主程序被網民剪成動作片梗，也反映制度信任危機。", "起因是台湾国会改革、朝野席次和程序冲突加剧；经过是立法院爆发推挤、抢案和肢体冲突；结果是民主程序被网民剪成动作片梗，也反映制度信任危机。", "Taiwan's parliamentary reform fight produced physical clashes and procedural battles; users edited the legislature into action-film memes while trust in procedure suffered."),
  entry("藍白便當會", "蓝白便当会", "Blue White Bento Caucus", "合作像便當，菜色很多，帳單常常各付。", "合作像盒饭，菜色很多，账单常常各付。", "A coalition lunchbox with many dishes and separate checks.", 3, "taiwan", "2024", "起因是國民黨和民眾黨在立法院形成多數合作空間；經過是兩黨在國會改革、預算和監督上多次合流；結果是藍白合作被支持者視為制衡，也被反對者嘲笑成政治便當拼盤。", "起因是国民党和民众党在立法院形成多数合作空间；经过是两党在国会改革、预算和监督上多次合流；结果是蓝白合作被支持者视为制衡，也被反对者嘲笑成政治盒饭拼盘。", "The KMT and TPP gained room to cooperate as a legislative majority; they aligned on reforms and oversight; supporters call it checks and balances, critics call it a bento coalition."),
  entry("芒果乾續杯", "芒果干续杯", "Mango Dried Refill", "亡國感喝完一杯，選舉店員自動續杯。", "亡国感喝完一杯，选举店员自动续杯。", "Finish one glass of national-doom anxiety and election staff refill it.", 4, "taiwan", "2020s", "起因是台灣選舉常把中國威脅和國家認同動員在一起；經過是芒果乾以亡國感諧音流行；結果是它既描述真實安全焦慮，也嘲諷政黨動員恐懼。", "起因是台湾选举常把中国威胁和国家认同动员在一起；经过是芒果干以亡国感谐音流行；结果是它既描述真实安全焦虑，也嘲讽政党动员恐惧。", "Taiwan campaigns often mobilize identity and China threat; mango dried puns on national-doom feeling; it captures real security anxiety and mocks fear-based campaigning."),
  entry("九二共識貼紙", "九二共识贴纸", "Consensus Sticker", "萬物都能貼，貼完就假裝規格相容。", "万物都能贴，贴完就假装规格兼容。", "Stick it on anything and pretend the systems are compatible.", 3, "taiwan", "1992-2020s", "起因是兩岸對九二共識含義長期各說各話；經過是不同政黨把它當成交流通行證或政治緊箍咒；結果是貼紙梗嘲諷一個標籤承載太多互不相容的期待。", "起因是两岸对九二共识含义长期各说各话；经过是不同政党把它当成交流通行证或政治紧箍咒；结果是贴纸梗嘲讽一个标签承载太多互不兼容的期待。", "Both sides and parties define the 1992 Consensus differently; it works as both pass and shackle; the sticker joke mocks a label asked to solve incompatible politics."),
  entry("國台辦鬧鐘", "国台办闹钟", "Taiwan Affairs Alarm Clock", "每天準點提醒你：又有人傷害了感情。", "每天准点提醒你：又有人伤害了感情。", "A daily alarm reminding you that feelings were harmed again.", 4, "current", "2020s", "起因是國台辦定期回應台灣政治和國際互動；經過是譴責、警告和反對措辭高度模板化；結果是網民把它形容成準點響起的政治鬧鐘。", "起因是国台办定期回应台湾政治和国际互动；经过是谴责、警告和反对措辞高度模板化；结果是网民把它形容成准点响起的政治闹钟。", "China's Taiwan Affairs Office responds regularly to Taiwan politics and foreign contacts with formulaic warnings; users joke it functions like a punctual political alarm."),
  entry("金門快艇劇本殺", "金门快艇剧本杀", "Kinmen Boat Script Game", "一艘快艇翻出多套劇本，海風都看不完聲明。", "一艘快艇翻出多套剧本，海风都看不完声明。", "One boat produced so many scripts even the sea breeze could not read them all.", 4, "current", "2024", "起因是金門附近執法追逐導致中國快艇翻覆和人員死亡；經過是兩岸就責任、執法和海域管理互相指責；結果是事件升高前線摩擦，也被網民嘲諷成各方搶劇本。", "起因是金门附近执法追逐导致中国快艇翻覆和人员死亡；经过是两岸就责任、执法和海域管理互相指责；结果是事件升高前线摩擦，也被网民嘲讽成各方抢剧本。", "A Chinese boat capsized during a chase near Kinmen, causing deaths; both sides disputed responsibility and maritime enforcement; the incident raised frontline tensions and spawned script-game jokes."),
  entry("海峽天氣預報", "海峡天气预报", "Strait Weather Forecast", "今日多雲，局部軍演，晚間可能有譴責。", "今日多云，局部军演，晚间可能有谴责。", "Today's forecast: cloudy, local drills, possible condemnations by evening.", 4, "current", "2020s", "起因是台海周邊軍機、軍艦和政治警告常態化；經過是媒體每天統計架次、航跡和聲明；結果是網民把緊張局勢寫成天氣預報，嘲諷危機日常化。", "起因是台海周边军机、军舰和政治警告常态化；经过是媒体每天统计架次、航迹和声明；结果是网民把紧张局势写成天气预报，嘲讽危机日常化。", "Military aircraft, ships, and warnings around Taiwan became routine; media count sorties and statements daily; users turn the tension into a weather forecast meme."),
  entry("抗中保台健身環", "抗中保台健身环", "Resist China Fitness Ring", "口號每天拉伸，選票肌肉才不會萎縮。", "口号每天拉伸，选票肌肉才不会萎缩。", "Stretch the slogan daily so electoral muscles do not atrophy.", 4, "taiwan", "2020s", "起因是中國威脅成為台灣選舉和身份政治的重要議題；經過是各黨圍繞抗中、和平、交流和國防互相攻防；結果是口號被支持者視為安全動員，也被嘲諷成選舉健身器材。", "起因是中国威胁成为台湾选举和身份政治的重要议题；经过是各党围绕抗中、和平、交流和国防互相攻防；结果是口号被支持者视为安全动员，也被嘲讽成选举健身器材。", "China threat is central to Taiwan elections and identity politics; parties fight over resistance, peace, exchange, and defense; the slogan is both security mobilization and campaign-workout satire.")
);

const EXTRA_DECOYS = {
  tw: "忠誠偉大勝利穩定繁榮安全復興口號會議審查宣傳紀律文件紅旗印章報告樣板核心治理秩序榮光",
  cn: "忠诚伟大胜利稳定繁荣安全复兴口号会议审查宣传纪律文件红旗印章报告样板核心治理秩序荣光",
  en: ["Order", "Glory", "Policy", "Report", "Banner", "Signal", "Discipline", "Victory", "Archive", "Quota", "Speech", "Security", "Stability", "Cadre", "Campaign", "Bureau"]
};

const MODE_SEQUENCE = ["blackout", "scramble", "pressure", "echo", "purge"];

const MERGE_TILE_SETS = {
  all: [
    { tw: "口號", cn: "口号", en: "Slogan" },
    { tw: "通稿", cn: "通稿", en: "Copy" },
    { tw: "會議", cn: "会议", en: "Meeting" },
    { tw: "指示", cn: "指示", en: "Order" },
    { tw: "專班", cn: "专班", en: "Taskforce" },
    { tw: "整風", cn: "整风", en: "Rectify" },
    { tw: "封控", cn: "封控", en: "Control" },
    { tw: "清場", cn: "清场", en: "Clearance" },
    { tw: "核心", cn: "核心", en: "Core" },
    { tw: "一尊", cn: "一尊", en: "One" },
    { tw: "禁書", cn: "禁书", en: "Banned" },
    { tw: "檔案", cn: "档案", en: "Archive" }
  ],
  xi: [
    { tw: "包子", cn: "包子", en: "Bun" },
    { tw: "扛麥", cn: "扛麦", en: "Wheat" },
    { tw: "親自", cn: "亲自", en: "Personal" },
    { tw: "清零", cn: "清零", en: "Zero" },
    { tw: "學習", cn: "学习", en: "Study" },
    { tw: "核心", cn: "核心", en: "Core" },
    { tw: "一尊", cn: "一尊", en: "One" },
    { tw: "修憲", cn: "修宪", en: "Termless" },
    { tw: "倒車", cn: "倒车", en: "Reverse" },
    { tw: "刁邁", cn: "刁迈", en: "Diao" },
    { tw: "皇袍", cn: "皇袍", en: "Robe" },
    { tw: "禁評", cn: "禁评", en: "Muted" }
  ],
  mao: [
    { tw: "語錄", cn: "语录", en: "Quote" },
    { tw: "紅袖", cn: "红袖", en: "Armband" },
    { tw: "公社", cn: "公社", en: "Commune" },
    { tw: "高產", cn: "高产", en: "Quota" },
    { tw: "忠舞", cn: "忠舞", en: "Loyalty" },
    { tw: "批鬥", cn: "批斗", en: "Denounce" },
    { tw: "下鄉", cn: "下乡", en: "Sent Down" },
    { tw: "破四", cn: "破四", en: "Smash" },
    { tw: "饑荒", cn: "饥荒", en: "Famine" },
    { tw: "太陽", cn: "太阳", en: "Sun" },
    { tw: "舵手", cn: "舵手", en: "Helm" },
    { tw: "臘肉", cn: "腊肉", en: "Cured" }
  ],
  deng: [
    { tw: "黑貓", cn: "黑猫", en: "Black Cat" },
    { tw: "白貓", cn: "白猫", en: "White Cat" },
    { tw: "石頭", cn: "石头", en: "Stone" },
    { tw: "先富", cn: "先富", en: "First Rich" },
    { tw: "特區", cn: "特区", en: "SEZ" },
    { tw: "南巡", cn: "南巡", en: "South Tour" },
    { tw: "穩定", cn: "稳定", en: "Stability" },
    { tw: "戒嚴", cn: "戒严", en: "Martial" },
    { tw: "履帶", cn: "履带", en: "Treads" },
    { tw: "廣場", cn: "广场", en: "Square" },
    { tw: "碾平", cn: "碾平", en: "Crusher" },
    { tw: "清場", cn: "清场", en: "Clear" }
  ],
  jiang: [
    { tw: "長者", cn: "长者", en: "Elder" },
    { tw: "眼鏡", cn: "眼镜", en: "Glasses" },
    { tw: "蛤蛤", cn: "蛤蛤", en: "Toad" },
    { tw: "談笑", cn: "谈笑", en: "Laughing" },
    { tw: "悶聲", cn: "闷声", en: "Quiet" },
    { tw: "賽艇", cn: "赛艇", en: "Excited" },
    { tw: "圖樣", cn: "图样", en: "Young" },
    { tw: "核心", cn: "核心", en: "Core" },
    { tw: "續命", cn: "续命", en: "Life" },
    { tw: "詩句", cn: "诗句", en: "Poem" },
    { tw: "大新聞", cn: "大新闻", en: "Big News" },
    { tw: "膜蛤", cn: "膜蛤", en: "Worship" }
  ]
};

const ENTRY_TAGS = {
  "Cultural Revolution": ["mao"],
  "Great Famine": ["mao"],
  "Great Leap Forward": ["mao"],
  "People Commune": ["mao"],
  "Anti Rightist Campaign": ["mao"],
  "Hundred Flowers": ["mao"],
  "Destroy Four Olds": ["mao"],
  "Big Character Posters": ["mao"],
  "Down to the Countryside": ["mao"],
  "Educated Youth": ["mao"],
  "Lin Biao Incident": ["mao"],
  "Gang of Four": ["mao"],
  "Criticize Lin and Confucius": ["mao"],
  "Model Operas": ["mao"],
  "Little Red Book": ["mao"],
  "Ten Thousand Jin Per Mu": ["mao"],
  "Loyalty Dance": ["mao"],
  "Morning Request Evening Report": ["mao"],
  "Red Sun": ["mao"],
  "Great Helmsman": ["mao"],
  "Cured Meat": ["mao"],
  "Mao Cured Meat": ["mao"],
  "Reform and Opening": ["deng"],
  "Southern Tour": ["deng"],
  "June Fourth": ["deng"],
  "Eight Nine Six Four": ["deng"],
  "Tank Man": ["deng"],
  "Tiananmen Clearing": ["deng"],
  "Deng the Crusher": ["deng"],
  "Crusher Deng": ["deng"],
  "Black Cat White Cat": ["deng"],
  "Crossing River By Stones": ["deng"],
  "Some Get Rich First": ["deng"],
  "Stability Above All": ["deng"],
  "Jiang Core": ["jiang"],
  "Elder": ["jiang"],
  "Toad Worship": ["jiang"],
  "Haha Toad": ["jiang"],
  "Make Fortune Quietly": ["jiang"],
  "Talking and Laughing": ["jiang"],
  "Too Young Too Simple": ["jiang"],
  "Excited": ["jiang"],
  "For Country Life And Death": ["jiang"],
  "Xi Ban Comments": ["xi"],
  "Diao May Care": ["xi"],
  "Chief Accelerator": ["xi"],
  "Liangjiahe University": ["xi"],
  "Qingfeng Bun Shop": ["xi"],
  "Winnie Removed": ["xi"],
  "Ten Years of Great Health": ["xi"],
  "Personally Commanded": ["xi"],
  "Personally Deployed": ["xi"],
  "Trade and Undress": ["xi"],
  "One Supreme Figure": ["xi"],
  "Two Establishes": ["xi"],
  "Two Upholds": ["xi"],
  "Study Xi Strong Nation": ["xi"],
  "Unanimous Election": ["xi"],
  "Constitutional Emperor": ["xi"],
  "Reverse Gear Emperor": ["xi"],
  "The One": ["xi"],
  "Zero COVID Patriarch": ["xi"],
  "PCR Golden Age": ["xi"],
  "White Paper Revolution": ["xi"],
  "New Quality Productive Forces": ["xi"],
  "Historical Garbage Time": ["xi"],
  "Far Ahead": ["xi"],
  "East Rises West Falls": ["xi"],
  "Chinese Style Modernization": ["xi"],
  "Made to Disappear": ["xi"],
  "Xi Baozi": ["xi"],
  "Wheat Shoulder Xi": ["xi"],
  "Two Hundred Jin No Shoulder Switch": ["xi"],
  "Sager King": ["xi"],
  "Qingfeng Emperor": ["xi"],
  "Primary School Doctor": ["xi"],
  "Big Spender": ["xi"],
  "Chin Commanding": ["xi"],
  "Xi Ceausescu": ["xi"]
};

Object.assign(ENTRY_TAGS, {
  "Liangjiahe Pilgrimage": ["xi"],
  "Liangjiahe Great Learning": ["xi"],
  "Xiongan Millennium Plan": ["xi"],
  "Twentieth Congress Third Term": ["xi"],
  "Absolute Loyalty Test": ["xi"],
  "Whole Process Democracy": ["xi"],
  "Zero COVID U Turn": ["xi"],
  "Attack With Words Defend With Force": ["mao"],
  "Factional Armed Struggle": ["mao"],
  "Cleansing Class Ranks": ["mao"],
  "Fight Self Criticize Revisionism": ["mao"],
  "Backyard Steel Drive": ["mao"],
  "Exaggeration Wind": ["mao"],
  "Commune Canteens": ["mao"],
  "Shenzhen SEZ": ["deng"],
  "Price Reform Shock": ["deng"],
  "No Debate": ["deng"],
  "Hide Brightness Bide Time": ["deng"],
  "Three Represents": ["jiang"],
  "Shanghai Clique": ["jiang"],
  "WTO Accession": ["jiang"],
  "Three Stresses Campaign": ["jiang"],
  "Jiang Scolds Hong Kong Reporter": ["jiang"],
  "Wallace Interview": ["jiang"],
  "Beijing Olympic Bid Success": ["jiang"],
  "Hong Kong Handover": ["jiang"],
  "Socialist Market Economy": ["deng"],
  "Health Code Governance": ["xi"],
  "Red Code Tour Group": ["xi"],
  "PCR Economy": ["xi"],
  "Fangcang Literature": ["xi"],
  "Layered Overreach": ["xi"],
  "Common Poverty": ["xi"],
  "Youth Jobless Rate Vacation": ["xi"],
  "Flexible Graduation": ["xi"],
  "Won Numb": ["xi"],
  "Won Again": ["xi"],
  "Statistics Beauty Salon": ["xi"],
  "Data On Leave": ["xi"],
  "Cyberspace Office Universe": ["xi"],
  "Study Xi Score Farming": ["xi"],
  "Loyalty Contest": ["xi"],
  "Personally Takes The Blame": ["xi"],
  "One Man Mode": ["xi"],
  "Liangjiahe Filter": ["xi"],
  "Xiongan Empty City Stratagem": ["xi"],
  "Millennium Pie": ["xi"]
});

[
  "Hu Jintao",
  "Scientific Outlook On Development",
  "Harmonious Society",
  "Harmonized Away",
  "No Tossing Around",
  "Tuanpai Era",
  "Hu Wen New Deal",
  "Nine Dragons Governing Water",
  "Collective Leadership",
  "Quiet Governance",
  "Full Retirement Model",
  "Twentieth Congress Escort Out",
  "Retired And Removed",
  "Hu Does Not Speak",
  "River Crab Ashore",
  "Grass Mud Horse Charge",
  "SARS Cover Up",
  "Olympic Stability Maintenance",
  "Tibet March Fourteenth",
  "Urumqi July Fifth",
  "Weibo First Year",
  "Stability Budget",
  "Joint Sword Delivery",
  "Taiwan Encirclement Livestream",
  "Punish Independence Combo",
  "Orange Travel Light",
  "Mutual Non Subordination Repeater",
  "Bluebird Camp",
  "Legislature Kung Fu Film",
  "Blue White Bento Caucus",
  "Mango Dried Refill",
  "Consensus Sticker",
  "Taiwan Affairs Alarm Clock",
  "Kinmen Boat Script Game",
  "Strait Weather Forecast",
  "Resist China Fitness Ring"
].forEach((key) => {
  ENTRY_TAGS[key] = [...(ENTRY_TAGS[key] || []), "global"];
});

const GAME_COPY = {
  tw: {
    progress: "解密進度",
    matrix: "文字牌堆",
    combo: "連擊",
    moves: "步數",
    scan: "提示",
    reshuffle: "重洗",
    skip: "跳過",
    scanEmpty: "暫無提示",
    playHint: "未被上層牌遮住的文字牌才可拿取。",
    autoReveal: "答案關鍵牌消除後逐步解密。",
    evidence: "牌",
    evidenceBoost: "三消",
    chain: "槽位",
    next: "關鍵",
    adjacent: "可拿",
    order: "三張",
    up: "上",
    down: "下",
    left: "左",
    right: "右",
    best: "建議",
    highest: "最高"
  },
  cn: {
    progress: "解密进度",
    matrix: "文字牌堆",
    combo: "连击",
    moves: "步数",
    scan: "提示",
    reshuffle: "重洗",
    skip: "跳过",
    scanEmpty: "暂无提示",
    playHint: "未被上层牌遮住的文字牌才可拿取。",
    autoReveal: "答案关键牌消除后逐步解密。",
    evidence: "牌",
    evidenceBoost: "三消",
    chain: "槽位",
    next: "关键",
    adjacent: "可拿",
    order: "三张",
    up: "上",
    down: "下",
    left: "左",
    right: "右",
    best: "建议",
    highest: "最高"
  },
  en: {
    progress: "Decode Progress",
    matrix: "Text Tile Stack",
    combo: "Combo",
    moves: "Moves",
    scan: "Hint",
    reshuffle: "Shuffle",
    skip: "Skip",
    scanEmpty: "No hint",
    playHint: "Only uncovered tiles can be picked.",
    autoReveal: "Key archive triples reveal the term step by step.",
    evidence: "Tile",
    evidenceBoost: "Triple",
    chain: "Tray",
    next: "Key",
    adjacent: "Open",
    order: "Three",
    up: "Up",
    down: "Down",
    left: "Left",
    right: "Right",
    best: "Best",
    highest: "Top"
  }
};

const LEADER_MODE_COPY = {
  tw: {
    all: { name: "通用檔案", desc: "全詞庫輪替，標準三消牌堆規則。" },
    xi: { name: "刁邁乎模式", desc: "習近平相關詞條優先；每隔數步會壓縮時間，槽位壓力更大。" },
    mao: { name: "臘肉模式", desc: "毛澤東相關詞條優先；消掉關鍵牌加分更多，但時間代價更高。" },
    deng: { name: "碾平模式", desc: "鄧小平相關詞條優先；低槽位操作有額外分數。" },
    jiang: { name: "長者模式", desc: "江澤民相關詞條優先；連續三消會悶聲加時加分。" }
  },
  cn: {
    all: { name: "通用档案", desc: "全词库轮替，标准三消牌堆规则。" },
    xi: { name: "刁迈乎模式", desc: "习近平相关词条优先；每隔数步会压缩时间，槽位压力更大。" },
    mao: { name: "腊肉模式", desc: "毛泽东相关词条优先；消掉关键牌加分更多，但时间代价更高。" },
    deng: { name: "碾平模式", desc: "邓小平相关词条优先；低槽位操作有额外分数。" },
    jiang: { name: "长者模式", desc: "江泽民相关词条优先；连续三消会闷声加时加分。" }
  },
  en: {
    all: { name: "General Archive", desc: "Full word bank with standard triple-match stack rules." },
    xi: { name: "Diao Mai Hu", desc: "Xi-focused entries. The clock tightens every few picks." },
    mao: { name: "Cured Meat", desc: "Mao-focused entries. Key triples pay more but cost time." },
    deng: { name: "Crusher", desc: "Deng-focused entries. Low-tray play earns extra score." },
    jiang: { name: "Elder", desc: "Jiang-focused entries. Combo triples quietly add time and score." }
  }
};

const MUSIC_TRACK_IDS = ["flag", "gospel", "procession", "memorial", "recessional"];

const MUSIC_TRACK_COPY = {
  tw: {
    label: "配樂",
    flag: { name: "旗歌行進", desc: "莊重行進與鐘聲主題。" },
    gospel: { name: "聖歌合唱", desc: "柔和合唱與管風琴感。" },
    procession: { name: "典禮銅管", desc: "更明亮的儀式行進。" },
    memorial: { name: "追思鐘聲", desc: "慢速、肅穆、低鼓。" },
    recessional: { name: "凱旋終章", desc: "較快的終章式主題。" }
  },
  cn: {
    label: "配乐",
    flag: { name: "旗歌行进", desc: "庄重行进与钟声主题。" },
    gospel: { name: "圣歌合唱", desc: "柔和合唱与管风琴感。" },
    procession: { name: "典礼铜管", desc: "更明亮的仪式行进。" },
    memorial: { name: "追思钟声", desc: "慢速、肃穆、低鼓。" },
    recessional: { name: "凯旋终章", desc: "较快的终章式主题。" }
  },
  en: {
    label: "Music",
    flag: { name: "Flag March", desc: "Solemn march with bells." },
    gospel: { name: "Gospel Choir", desc: "Soft choir and organ feel." },
    procession: { name: "Procession", desc: "Brighter ceremonial pulse." },
    memorial: { name: "Memorial Bells", desc: "Slow, solemn, low drums." },
    recessional: { name: "Recessional", desc: "Faster closing hymn theme." }
  }
};

const PAUSE_COPY = {
  tw: {
    pause: "\u66ab\u505c",
    resume: "\u7e7c\u7e8c",
    menu: "\u8fd4\u56de\u9078\u64c7",
    title: "\u66ab\u505c\u89e3\u5bc6",
    kicker: "\u96a8\u6a5f\u65c1\u767d",
    note: "\u8a08\u6642\u5df2\u505c\u6b62\uff0c\u9019\u6bb5\u65c1\u767d\u62bd\u81ea\u904a\u6232\u5167\u8a5e\u5eab\u3002"
  },
  cn: {
    pause: "\u6682\u505c",
    resume: "\u7ee7\u7eed",
    menu: "\u8fd4\u56de\u9009\u62e9",
    title: "\u6682\u505c\u89e3\u5bc6",
    kicker: "\u968f\u673a\u65c1\u767d",
    note: "\u8ba1\u65f6\u5df2\u505c\u6b62\uff0c\u8fd9\u6bb5\u65c1\u767d\u62bd\u81ea\u6e38\u620f\u5185\u8bcd\u5e93\u3002"
  },
  en: {
    pause: "Pause",
    resume: "Resume",
    menu: "Back to Menu",
    title: "Paused",
    kicker: "Random Archive Note",
    note: "The timer is stopped. This note is sampled from the in-game archive."
  }
};

const root = document.getElementById("gameRoot");
const titleEl = document.getElementById("appTitle");
const subtitleEl = document.getElementById("appSubtitle");
const soundToggle = document.getElementById("soundToggle");

const state = {
  lang: "tw",
  route: "time",
  leaderMode: "all",
  level: 0,
  score: 0,
  bestLevel: 0,
  streak: 0,
  started: false,
  entry: null,
  answerUnits: [],
  grid: [],
  gridSize: 5,
  decryptProgress: 0,
  decryptGoal: 100,
  revealedCount: 0,
  combo: 0,
  moves: 0,
  lastEvidenceHits: [],
  matchBursts: [],
  matchBurstSerial: 0,
  tray: [],
  trayLimit: 7,
  tileGroupCount: 0,
  clearedAnswerCounts: {},
  clearedAnswerTotal: 0,
  hintCellId: null,
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
  paused: false,
  pauseFact: null,
  muted: false,
  volume: 0.62,
  musicTrack: "flag",
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
    this.stepDuration = 0.18;
    this.patternLength = 384;
    this.scale = [196, 220, 246.94, 261.63, 293.66, 329.63, 369.99, 392, 440, 493.88, 523.25, 587.33, 659.25, 739.99, 783.99];
    this.anthemMelody = [
      [0, 7, 3], [3, 8, 1], [4, 9, 4], [8, 11, 4], [12, 9, 4],
      [16, 10, 3], [19, 9, 1], [20, 8, 4], [24, 7, 4], [28, 4, 4],
      [32, 5, 3], [35, 7, 1], [36, 8, 4], [40, 9, 4], [44, 8, 4],
      [48, 7, 6], [54, 4, 2], [56, 5, 2], [58, 6, 2], [60, 7, 4],
      [64, 9, 3], [67, 10, 1], [68, 11, 4], [72, 12, 4], [76, 11, 4],
      [80, 10, 3], [83, 9, 1], [84, 8, 4], [88, 9, 4], [92, 7, 4],
      [96, 5, 3], [99, 7, 1], [100, 9, 4], [104, 11, 4], [108, 10, 4],
      [112, 9, 6], [118, 8, 2], [120, 7, 2], [122, 5, 2], [124, 7, 4],
      [128, 11, 3], [131, 12, 1], [132, 14, 4], [136, 13, 4], [140, 12, 4],
      [144, 11, 3], [147, 10, 1], [148, 9, 4], [152, 8, 4], [156, 7, 4],
      [160, 9, 3], [163, 10, 1], [164, 11, 4], [168, 12, 4], [172, 10, 4],
      [176, 9, 4], [180, 8, 4], [184, 7, 4], [188, 6, 4],
      [192, 7, 3], [195, 8, 1], [196, 9, 4], [200, 11, 4], [204, 12, 4],
      [208, 14, 6], [214, 12, 2], [216, 11, 4], [220, 9, 4],
      [224, 10, 3], [227, 11, 1], [228, 12, 4], [232, 9, 4], [236, 7, 4],
      [240, 5, 4], [244, 7, 4], [248, 11, 4], [252, 7, 4]
    ];
    this.anthemChords = [
      [0, 2, 4], [4, 6, 8], [5, 7, 9], [3, 5, 7],
      [0, 2, 4], [4, 7, 9], [5, 8, 10], [0, 4, 7],
      [4, 6, 8], [5, 7, 9], [2, 4, 7], [4, 6, 9],
      [0, 2, 4], [5, 7, 9], [3, 5, 8], [0, 4, 7]
    ];
    this.anthemBass = [0, 4, 5, 3, 0, 4, 5, 0, 4, 5, 2, 4, 0, 5, 3, 0];
    this.trackId = "flag";
    this.trackScores = this.createTrackScores();
    this.musicTracks = this.createMusicTracks();
    this.applyTrack(this.trackId);
  }

  clampScaleIndex(index) {
    return Math.max(0, Math.min(this.scale.length - 1, index));
  }

  shiftEvents(events, shift = 0, stepOffset = 0, durationScale = 1) {
    return events
      .map(([position, index, duration]) => [
        (position + stepOffset + this.patternLength) % this.patternLength,
        this.clampScaleIndex(index + shift),
        Math.max(1, Math.round(duration * durationScale))
      ])
      .sort((a, b) => a[0] - b[0]);
  }

  shiftIndexes(values, shift = 0, rotate = 0) {
    const shifted = values.map((index) => this.clampScaleIndex(index + shift));
    return shifted.map((_, index) => shifted[(index + rotate + shifted.length) % shifted.length]);
  }

  shiftChords(chords, shift = 0, rotate = 0) {
    const shifted = chords.map((indexes) => indexes.map((index) => this.clampScaleIndex(index + shift)));
    return shifted.map((_, index) => shifted[(index + rotate + shifted.length) % shifted.length]);
  }

  expandMelody(phrases, phraseLength = 64) {
    return phrases
      .flatMap((phrase, phraseIndex) => phrase.map(([position, index, duration]) => [
        phraseIndex * phraseLength + position,
        this.clampScaleIndex(index),
        duration
      ]))
      .sort((a, b) => a[0] - b[0]);
  }

  repeatProgression(progression, repeats = 2) {
    return Array.from({ length: repeats }, () => progression)
      .flat()
      .map((indexes) => indexes.map((index) => this.clampScaleIndex(index)));
  }

  repeatBass(values, repeats = 2) {
    return Array.from({ length: repeats }, () => values).flat().map((index) => this.clampScaleIndex(index));
  }

  createTrackScores() {
    const flagPhrases = [
      [[0, 7, 4], [4, 9, 4], [8, 11, 4], [12, 12, 4], [16, 11, 4], [20, 9, 4], [24, 7, 8], [32, 8, 4], [36, 10, 4], [40, 12, 8], [48, 11, 4], [52, 9, 4], [56, 7, 8]],
      [[0, 9, 4], [4, 11, 4], [8, 12, 4], [12, 14, 4], [16, 12, 6], [22, 11, 2], [24, 9, 8], [32, 10, 4], [36, 12, 4], [40, 11, 8], [48, 9, 4], [52, 8, 4], [56, 7, 8]],
      [[0, 7, 3], [3, 8, 1], [4, 9, 4], [8, 10, 4], [12, 12, 8], [20, 11, 4], [24, 9, 8], [32, 8, 4], [36, 9, 4], [40, 11, 4], [44, 12, 4], [48, 14, 8], [56, 12, 8]],
      [[0, 11, 4], [4, 12, 4], [8, 14, 8], [16, 12, 4], [20, 11, 4], [24, 9, 8], [32, 10, 4], [36, 12, 4], [40, 11, 4], [44, 9, 4], [48, 8, 8], [56, 7, 8]],
      [[0, 7, 4], [4, 10, 4], [8, 12, 4], [12, 11, 4], [16, 9, 6], [22, 8, 2], [24, 7, 8], [32, 9, 4], [36, 12, 4], [40, 14, 8], [48, 12, 4], [52, 11, 4], [56, 9, 8]],
      [[0, 10, 4], [4, 12, 4], [8, 14, 8], [16, 13, 4], [20, 12, 4], [24, 11, 8], [32, 12, 4], [36, 11, 4], [40, 9, 8], [48, 7, 4], [52, 9, 4], [56, 7, 8]]
    ];
    const gospelPhrases = [
      [[0, 5, 8], [8, 7, 6], [14, 8, 2], [16, 9, 8], [24, 7, 8], [32, 5, 6], [38, 7, 2], [40, 9, 8], [48, 10, 6], [54, 9, 2], [56, 7, 8]],
      [[0, 4, 8], [8, 5, 8], [16, 7, 6], [22, 9, 2], [24, 10, 8], [32, 9, 8], [40, 7, 8], [48, 5, 6], [54, 4, 2], [56, 5, 8]],
      [[0, 7, 8], [8, 9, 8], [16, 12, 10], [28, 10, 4], [32, 9, 8], [40, 7, 8], [48, 5, 8], [56, 7, 8]],
      [[0, 8, 8], [8, 10, 8], [16, 12, 8], [24, 13, 8], [32, 12, 8], [40, 10, 8], [48, 9, 8], [56, 7, 8]],
      [[0, 5, 8], [8, 8, 8], [16, 10, 8], [24, 9, 8], [32, 7, 8], [40, 5, 8], [48, 4, 8], [56, 5, 8]],
      [[0, 7, 8], [8, 9, 8], [16, 10, 10], [28, 12, 4], [32, 10, 8], [40, 9, 8], [48, 7, 8], [56, 5, 8]]
    ];
    const processionPhrases = [
      [[0, 8, 2], [2, 9, 2], [4, 10, 4], [8, 12, 2], [10, 10, 2], [12, 9, 4], [16, 8, 2], [18, 10, 2], [20, 12, 4], [24, 13, 4], [28, 12, 4], [32, 10, 2], [34, 12, 2], [36, 14, 4], [40, 12, 4], [44, 10, 4], [48, 9, 4], [52, 10, 4], [56, 12, 8]],
      [[0, 12, 2], [2, 13, 2], [4, 14, 4], [8, 12, 4], [12, 10, 4], [16, 9, 2], [18, 10, 2], [20, 12, 4], [24, 10, 4], [28, 8, 4], [32, 7, 4], [36, 9, 4], [40, 10, 4], [44, 12, 4], [48, 11, 4], [52, 9, 4], [56, 8, 8]],
      [[0, 8, 2], [2, 11, 2], [4, 12, 4], [8, 14, 4], [12, 12, 4], [16, 11, 2], [18, 12, 2], [20, 14, 4], [24, 13, 4], [28, 12, 4], [32, 10, 4], [36, 11, 4], [40, 12, 4], [44, 10, 4], [48, 9, 4], [52, 8, 4], [56, 7, 8]],
      [[0, 7, 2], [2, 8, 2], [4, 10, 4], [8, 11, 4], [12, 12, 4], [16, 14, 4], [20, 12, 4], [24, 10, 4], [28, 9, 4], [32, 8, 2], [34, 10, 2], [36, 12, 4], [40, 13, 4], [44, 12, 4], [48, 10, 4], [52, 9, 4], [56, 8, 8]],
      [[0, 9, 2], [2, 10, 2], [4, 12, 4], [8, 14, 4], [12, 13, 4], [16, 12, 2], [18, 10, 2], [20, 9, 4], [24, 10, 4], [28, 12, 4], [32, 14, 4], [36, 12, 4], [40, 10, 4], [44, 9, 4], [48, 8, 4], [52, 10, 4], [56, 12, 8]],
      [[0, 14, 4], [4, 13, 4], [8, 12, 4], [12, 10, 4], [16, 9, 4], [20, 8, 4], [24, 7, 8], [32, 8, 4], [36, 10, 4], [40, 12, 8], [48, 10, 4], [52, 9, 4], [56, 8, 8]]
    ];
    const memorialPhrases = [
      [[0, 8, 12], [16, 7, 8], [28, 5, 4], [32, 4, 12], [48, 5, 8], [56, 7, 8]],
      [[0, 9, 12], [16, 8, 8], [28, 7, 4], [32, 5, 12], [48, 4, 8], [56, 5, 8]],
      [[0, 10, 12], [16, 8, 8], [28, 7, 4], [32, 6, 12], [48, 5, 8], [56, 4, 8]],
      [[0, 7, 12], [16, 5, 8], [28, 4, 4], [32, 3, 12], [48, 4, 8], [56, 5, 8]],
      [[0, 8, 16], [20, 10, 6], [28, 9, 4], [32, 7, 12], [48, 5, 8], [56, 7, 8]],
      [[0, 9, 12], [16, 7, 8], [28, 5, 4], [32, 4, 12], [48, 5, 8], [56, 7, 8]]
    ];
    const recessionalPhrases = [
      [[0, 7, 3], [3, 11, 3], [6, 12, 4], [12, 11, 4], [16, 9, 3], [19, 12, 3], [22, 14, 6], [32, 12, 4], [36, 11, 4], [40, 9, 8], [48, 8, 4], [52, 9, 4], [56, 11, 8]],
      [[0, 9, 3], [3, 12, 3], [6, 13, 4], [12, 12, 4], [16, 10, 3], [19, 13, 3], [22, 14, 6], [32, 13, 4], [36, 12, 4], [40, 10, 8], [48, 9, 4], [52, 10, 4], [56, 12, 8]],
      [[0, 11, 3], [3, 12, 3], [6, 14, 6], [16, 13, 4], [20, 12, 4], [24, 11, 8], [32, 9, 3], [35, 11, 3], [38, 12, 6], [48, 11, 4], [52, 9, 4], [56, 7, 8]],
      [[0, 8, 3], [3, 10, 3], [6, 12, 6], [16, 11, 4], [20, 10, 4], [24, 8, 8], [32, 10, 3], [35, 12, 3], [38, 14, 6], [48, 12, 4], [52, 10, 4], [56, 8, 8]],
      [[0, 9, 3], [3, 12, 3], [6, 14, 6], [16, 12, 4], [20, 11, 4], [24, 9, 8], [32, 8, 3], [35, 11, 3], [38, 13, 6], [48, 11, 4], [52, 9, 4], [56, 8, 8]],
      [[0, 12, 4], [4, 14, 4], [8, 13, 4], [12, 12, 4], [16, 11, 4], [20, 9, 4], [24, 7, 8], [32, 9, 4], [36, 11, 4], [40, 12, 8], [48, 11, 4], [52, 9, 4], [56, 7, 8]]
    ];
    return {
      flag: {
        melody: this.expandMelody(flagPhrases),
        chords: this.repeatProgression([[0, 2, 4], [4, 6, 8], [5, 7, 9], [3, 5, 7], [0, 4, 7], [5, 8, 10], [4, 6, 9], [0, 2, 7], [2, 5, 9], [5, 7, 10], [4, 7, 11], [0, 4, 7]], 2),
        bass: this.repeatBass([0, 4, 5, 3, 0, 5, 4, 0, 2, 5, 4, 0], 2)
      },
      gospel: {
        melody: this.expandMelody(gospelPhrases),
        chords: this.repeatProgression([[0, 3, 7], [5, 7, 10], [2, 5, 9], [4, 7, 11], [0, 4, 9], [5, 8, 12], [3, 7, 10], [0, 5, 9], [2, 5, 8], [5, 9, 12], [4, 7, 10], [0, 3, 7]], 2),
        bass: this.repeatBass([0, 5, 2, 4, 0, 5, 3, 0, 2, 5, 4, 0], 2)
      },
      procession: {
        melody: this.expandMelody(processionPhrases),
        chords: this.repeatProgression([[1, 5, 8], [1, 6, 10], [4, 7, 11], [5, 8, 12], [3, 7, 10], [1, 5, 8], [6, 9, 12], [4, 8, 11], [2, 6, 9], [5, 8, 12], [4, 7, 10], [1, 5, 8]], 2),
        bass: this.repeatBass([1, 1, 4, 5, 3, 1, 6, 4, 2, 5, 4, 1], 2)
      },
      memorial: {
        melody: this.expandMelody(memorialPhrases),
        chords: this.repeatProgression([[0, 3, 7], [0, 4, 8], [5, 8, 10], [3, 5, 8], [1, 4, 7], [5, 7, 10], [0, 3, 7], [2, 5, 9], [4, 7, 10], [3, 5, 8], [1, 4, 7], [0, 3, 7]], 2),
        bass: this.repeatBass([0, 0, 5, 3, 1, 5, 0, 2, 4, 3, 1, 0], 2)
      },
      recessional: {
        melody: this.expandMelody(recessionalPhrases),
        chords: this.repeatProgression([[0, 4, 7], [2, 5, 9], [4, 7, 11], [5, 9, 12], [0, 4, 9], [4, 8, 12], [2, 6, 10], [5, 7, 11], [0, 5, 9], [3, 7, 10], [5, 8, 12], [0, 4, 7]], 2),
        bass: this.repeatBass([0, 2, 4, 5, 0, 4, 2, 5, 0, 3, 5, 0], 2)
      }
    };
  }

  createMusicTracks() {
    const score = this.trackScores;
    return {
      flag: {
        stepDuration: 0.19,
        patternLength: 384,
        melody: score.flag.melody,
        chords: score.flag.chords,
        bass: score.flag.bass,
        leadWave: "triangle",
        leadGain: 0.028,
        upperGain: 0.016,
        padGain: 0.034,
        bassGain: 0.058,
        choirGain: 0.008,
        bellGain: 0.032,
        bellEvery: 4,
        percussion: 0.58,
        choir: true
      },
      gospel: {
        stepDuration: 0.245,
        patternLength: 384,
        melody: score.gospel.melody,
        chords: score.gospel.chords,
        bass: score.gospel.bass,
        leadWave: "sine",
        leadGain: 0.021,
        upperGain: 0.014,
        padGain: 0.058,
        bassGain: 0.046,
        choirGain: 0.017,
        bellGain: 0.026,
        bellEvery: 2,
        percussion: 0.08,
        choir: true
      },
      procession: {
        stepDuration: 0.155,
        patternLength: 384,
        melody: score.procession.melody,
        chords: score.procession.chords,
        bass: score.procession.bass,
        leadWave: "triangle",
        leadGain: 0.038,
        upperGain: 0.014,
        padGain: 0.03,
        bassGain: 0.064,
        choirGain: 0.009,
        bellGain: 0.034,
        bellEvery: 4,
        percussion: 0.88,
        choir: false
      },
      memorial: {
        stepDuration: 0.285,
        patternLength: 384,
        melody: score.memorial.melody,
        chords: score.memorial.chords,
        bass: score.memorial.bass,
        leadWave: "sine",
        leadGain: 0.018,
        upperGain: 0.012,
        padGain: 0.052,
        bassGain: 0.04,
        choirGain: 0.019,
        bellGain: 0.038,
        bellEvery: 2,
        percussion: 0.04,
        choir: true
      },
      recessional: {
        stepDuration: 0.165,
        patternLength: 384,
        melody: score.recessional.melody,
        chords: score.recessional.chords,
        bass: score.recessional.bass,
        leadWave: "triangle",
        leadGain: 0.036,
        upperGain: 0.019,
        padGain: 0.034,
        bassGain: 0.056,
        choirGain: 0.014,
        bellGain: 0.04,
        bellEvery: 4,
        percussion: 0.62,
        choir: true
      }
    };
  }

  getTrack() {
    return this.musicTracks[this.trackId] || this.musicTracks.flag;
  }

  hasTrack(trackId) {
    return Boolean(this.musicTracks[trackId]);
  }

  applyTrack(trackId) {
    const nextId = this.hasTrack(trackId) ? trackId : "flag";
    this.trackId = nextId;
    const track = this.getTrack();
    this.stepDuration = track.stepDuration;
    this.patternLength = track.patternLength;
    if (this.ctx && this.timer) {
      this.nextTime = this.ctx.currentTime + 0.04;
      this.step = 0;
    }
  }

  setTrack(trackId, playCue = true) {
    if (!this.hasTrack(trackId)) return false;
    this.applyTrack(trackId);
    if (playCue) this.trackCue();
    return true;
  }

  trackCue() {
    if (!this.ctx || this.muted) return;
    const track = this.getTrack();
    const now = this.ctx.currentTime + 0.018;
    const cue = {
      flag: [7, 9, 11, 12],
      gospel: [5, 7, 9, 12],
      procession: [8, 11, 12, 14],
      memorial: [4, 7, 9, 7],
      recessional: [9, 11, 14, 12]
    }[this.trackId] || [7, 9, 11, 12];
    this.chord(track.chords[0], now, 0.82, track);
    cue.forEach((index, offset) => {
      this.lead(index, now + offset * 0.115, 0.18 + offset * 0.018, track);
    });
    this.bell(now + 0.48, this.scale[cue[cue.length - 1]], track.bellGain * 1.25);
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
      this.nextTime += this.stepDuration;
      this.step = (this.step + 1) % this.patternLength;
    }
  }

  scheduleStep(step, time) {
    const track = this.getTrack();
    const bar = Math.floor(step / 16) % track.chords.length;
    const beat = step % 16;
    if (beat === 0) {
      this.chord(track.chords[bar], time, this.stepDuration * 15.5, track);
      this.tone(this.scale[track.bass[bar]] / 2, time, this.stepDuration * 13.5, "sine", track.bassGain, this.padGain, 0.09);
      this.drum(time, 72, 0.24, 0.16 * track.percussion);
      if (track.choir) this.choirChord(track.chords[bar], time + this.stepDuration * 0.7, this.stepDuration * 9.5, track);
    }
    if (beat === 8) {
      this.drum(time, 66, 0.2, 0.1 * track.percussion);
      this.tone(this.scale[track.bass[bar]] / 1.5, time, this.stepDuration * 5.8, "triangle", 0.028 * track.percussion, this.padGain, 0.05);
    }
    if ((beat === 4 || beat === 12) && track.percussion >= 0.22) {
      this.snare(time);
    }
    if ((beat === 2 || beat === 6 || beat === 10 || beat === 14) && track.percussion >= 0.42) {
      this.noise(time, 0.04, 0.008 * track.percussion, this.percGain);
    }
    track.melody
      .filter(([position]) => position === step)
      .forEach(([, index, durationSteps]) => {
        const duration = Math.max(0.24, durationSteps * this.stepDuration * 0.92);
        this.lead(index, time, duration, track);
      });
    if (beat === 15 && (bar + 1) % track.bellEvery === 0) {
      this.bell(time, this.scale[bar === 15 ? 14 : 11], track.bellGain);
      if (track.percussion >= 0.42) this.noise(time, 0.26, 0.012 * track.percussion, this.percGain);
    }
  }

  choirChord(indexes, time, duration, track = this.getTrack()) {
    indexes.forEach((index, offset) => {
      const freq = this.scale[this.clampScaleIndex(index + 7)];
      this.tone(freq, time + offset * 0.034, duration, "sine", track.choirGain, this.musicGain, 0.12);
      this.tone(freq * 1.5, time + offset * 0.038, duration * 0.72, "triangle", track.choirGain * 0.55, this.musicGain, 0.14);
    });
  }

  chord(indexes, time, duration = 1.45, track = this.getTrack()) {
    indexes.forEach((index, offset) => {
      const freq = this.scale[index] / 2;
      this.tone(freq, time + offset * 0.018, duration, "sine", track.padGain, this.padGain, 0.16);
      this.tone(freq * 2, time + offset * 0.018, duration * 0.78, "triangle", track.padGain * 0.42, this.padGain, 0.14);
    });
  }

  lead(index, time, duration, track = this.getTrack()) {
    const freq = this.scale[index];
    this.tone(freq, time, duration, track.leadWave, track.leadGain, this.musicGain, 0.04);
    this.tone(freq * 2, time + 0.012, duration * 0.72, "triangle", track.upperGain, this.musicGain, 0.035);
    if (index >= 11) {
      this.tone(freq / 2, time + 0.006, duration * 0.8, "sine", track.upperGain * 0.55, this.musicGain, 0.05);
    }
  }

  bell(time, freq, gainValue = 0.03) {
    this.tone(freq * 2, time, 0.68, "sine", gainValue, this.musicGain, 0.012);
    this.tone(freq * 3, time + 0.012, 0.42, "triangle", gainValue * 0.45, this.musicGain, 0.018);
  }

  snare(time) {
    this.noise(time, 0.08, 0.045, this.percGain);
    this.tone(188, time, 0.06, "triangle", 0.02, this.percGain, 0.006);
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
  ),
  "Xi Baozi": ctx(
    ["2013 年习近平到北京庆丰包子铺用餐，官方媒体把它包装为亲民形象展示。", "照片和报道广泛传播后，网民把包子与领导人形象绑定，衍生出习包子、庆丰帝等称呼。", "这些梗后来成为审查敏感词的一部分，反映个人形象工程和网络暗语之间的拉扯。"],
    ["In 2013 Xi Jinping ate at Beijing's Qingfeng bun shop, and state media framed it as a folksy image event.", "After photos and reports spread, users tied buns to Xi's public image and created nicknames such as Xi Baozi and Qingfeng Emperor.", "The memes later became censorship-sensitive, showing the tension between image management and coded internet speech."]
  , "meme"),
  "Wheat Shoulder Xi": ctx(
    ["这个梗来自习近平早年梁家河经历叙事，尤其是背二百斤麦子十里山路不换肩的说法。", "网民把它和现实体力常识、宣传夸张、领袖苦难叙事放在一起调侃。", "它指向官方塑造吃苦领袖形象时，夸张细节反而变成网络反讽素材。"],
    ["This meme comes from Xi's Liangjiahe hardship narrative, especially the claim of carrying two hundred jin of wheat for a long distance without switching shoulders.", "Users compare the story with physical plausibility, propaganda exaggeration, and leader-hardship storytelling.", "It points at how exaggerated image-building details can become satire rather than persuasion."]
  , "meme"),
  "Two Hundred Jin No Shoulder Switch": ctx(
    ["来源同样是梁家河叙事中的体力故事，被用来证明领袖年轻时吃苦耐劳。", "因为数字和动作都非常具体，网民容易把它改编成物理题、表情包和暗号。", "结果是官方英雄叙事被拆解成可笑的细节，成为习近平相关高频梗。"],
    ["The origin is the same Liangjiahe physical-labor story used to show Xi's youthful endurance.", "Because the number and action are so concrete, users easily turn it into physics jokes, memes, and coded references.", "The result is that a heroic narrative is reduced to a comic detail and becomes a frequent Xi-related meme."]
  , "meme"),
  "Sager King": ctx(
    ["这个梗来自习近平公开讲话中把《格萨尔王》读错的片段。", "在审查环境中，网民用错读版本、谐音和截图传播，借口误调侃官方完美领袖形象。", "它的重点不只是读错字，而是高压宣传下小错误被放大成政治笑点。"],
    ["The meme comes from a public Xi speech in which Gesar was read incorrectly.", "Under censorship, users spread the misread version, puns, and screenshots to mock the flawless-leader image.", "Its point is not only the misreading, but how small errors become political comedy under heavy propaganda."]
  , "meme"),
  "Qingfeng Emperor": ctx(
    ["庆丰包子铺事件本是一次亲民宣传，后来与修宪、个人崇拜和皇帝梗叠加。", "网民把店名当成类似年号的称呼，形成庆丰帝等变体。", "它把日常消费场景转化为对权力集中和政治造神的讽刺。"],
    ["The Qingfeng bun-shop visit began as a folksy publicity event and later fused with emperor jokes, term-limit concerns, and personality politics.", "Users treated the shop name like a reign title, creating variants such as Qingfeng Emperor.", "It turns an everyday food scene into satire of concentrated power and political image-making."]
  , "meme"),
  "Primary School Doctor": ctx(
    ["这个梗来自习近平早年教育经历、博士头衔和公开读错字争议之间的反差。", "网民用小学生博士调侃学历光环与实际表达能力之间的落差。", "它指向官方履历叙事、领袖不可质疑形象和网络反讽之间的冲突。"],
    ["This meme comes from the contrast between Xi's early education history, doctoral title, and controversies over public misreadings.", "Users use Primary School Doctor to mock the gap between credential aura and perceived expression ability.", "It points at conflict between official biography, untouchable leader image, and online satire."]
  , "meme"),
  "Big Spender": ctx(
    ["大撒币是对中国对外援助、投资和一带一路支出的一种网络讽刺。", "当国内民生、债务或就业压力上升时，网民常用它批评外部支出显得过度慷慨。", "它反映的是外交宣传、财政优先级和普通人生活感受之间的冲突。"],
    ["Big Spender is online satire of China's foreign aid, investment, and Belt and Road spending.", "When domestic livelihood, debt, or employment pressure rises, users deploy it to criticize apparently generous external spending.", "It reflects tension between diplomatic publicity, fiscal priorities, and ordinary people's lived experience."]
  , "meme"),
  "Chin Commanding": ctx(
    ["颐使气指本是成语，梗来自公开场合疑似误读或错写引发的二创。", "网民用错版成语调侃高层讲话和文化水平，也借此绕过直接点名。", "它成为习近平相关暗语之一，重点在讽刺权威话语里的低级错误。"],
    ["The idiom meme comes from perceived misreading or misuse in a public context.", "Users turn the altered idiom into jokes about elite speech and cultural polish while avoiding direct naming.", "It became a Xi-related coded phrase aimed at basic errors inside authoritative language."]
  , "meme"),
  "Xi Ceausescu": ctx(
    ["这个称呼把习近平与罗马尼亚独裁者齐奥塞斯库类比，来源于对个人崇拜和长期执政的担忧。", "在网络讨论中，它常与修宪、忠诚表态、经济压力和社会控制并列出现。", "它不是具体事件，而是一种历史类比：提醒高度个人化统治可能面对的政治风险。"],
    ["The nickname compares Xi with Romanian dictator Nicolae Ceausescu, arising from fears about personality cult and indefinite rule.", "Online discussion often links it with term-limit removal, loyalty rituals, economic stress, and social control.", "It is a historical analogy rather than one event, warning about risks of highly personalized rule."]
  , "meme"),
  "Cured Meat": ctx(
    ["毛泽东去世后遗体被保存并安放在纪念堂，官方继续维持领袖象征。", "反讽语境中，网民用腊肉削弱神圣化叙事，把政治圣物拉回物质层面。", "这个梗指向个人崇拜、遗体政治和历史责任讨论中的禁忌感。"],
    ["After Mao's death, his body was preserved and placed in a memorial hall, maintaining leader symbolism.", "In satirical contexts, Cured Meat strips away sacred aura by pulling the political relic back to the material level.", "The meme points at personality cult, body politics, and taboo around discussing historical responsibility."]
  , "meme"),
  "Mao Cured Meat": ctx(
    ["毛腊肉是腊肉梗的直白变体，把毛泽东姓名和保存遗体联系起来。", "它常在讨论文革、大饥荒和个人崇拜时出现，用冷幽默对抗神圣化。", "它的意义在于把领袖崇拜降格为身体与展陈问题，迫使玩家想到历史代价。"],
    ["Mao Cured Meat is a direct variant linking Mao's name to the preserved body.", "It appears in discussion of the Cultural Revolution, famine, and personality cult as dark humor against sanctification.", "Its meaning is to reduce leader worship to body and display, forcing attention back to historical costs."]
  , "meme"),
  "Red Sun": ctx(
    ["文革时期，宣传系统把毛泽东塑造成红太阳，强调他像太阳一样照耀人民。", "歌曲、语录、画像和忠诚仪式共同强化这种超常领袖形象。", "它加深了个人崇拜，使政治判断让位于对领袖的情感服从。"],
    ["During the Cultural Revolution, propaganda portrayed Mao as the red sun shining over the people.", "Songs, quotations, portraits, and loyalty rituals reinforced the superhuman leader image.", "It deepened personality worship and pushed political judgment toward emotional obedience to the leader."]
  , "meme"),
  "Little Red Book": ctx(
    ["毛语录在文革前后被大量印发，用来统一思想和展示忠诚。", "群众在集会、工作和日常生活中背诵、挥舞和引用语录，许多政治判断被简化成引用。", "它成为文革个人崇拜的标志，也显示政治语言如何进入身体动作和生活秩序。"],
    ["Mao's quotations were mass-printed before and during the Cultural Revolution to unify thought and display loyalty.", "People recited, waved, and quoted the book in rallies, work, and daily life, reducing many judgments to quotation.", "It became a symbol of Cultural Revolution personality worship and shows how political language entered bodily ritual and daily order."]
  ),
  "Ten Thousand Jin Per Mu": ctx(
    ["大跃进要求农业产量高速增长，地方干部在政治压力下竞相放卫星。", "亩产万斤等夸张报道登上媒体，虚报产量又反过来支撑过高征粮。", "浮夸风破坏真实决策，成为大饥荒的重要制度因素之一。"],
    ["The Great Leap Forward demanded rapid agricultural growth, and local cadres competed to report miracle yields under political pressure.", "Claims such as ten thousand jin per mu appeared in media, and inflated reports supported excessive grain procurement.", "The exaggeration destroyed accurate decision-making and became one institutional factor behind the famine."]
  ),
  "Loyalty Dance": ctx(
    ["文革中个人崇拜要求群众用可见仪式证明对毛泽东的忠诚。", "忠字舞在学校、工厂和广场流行，动作、队形和口号一起服务政治表态。", "它把政治服从变成身体表演，显示运动政治如何侵入日常生活。"],
    ["During the Cultural Revolution, personality worship demanded visible rituals proving loyalty to Mao.", "Loyalty dances spread through schools, factories, and squares, combining movement, formation, and slogans into political display.", "They turned political obedience into bodily performance and show how campaign politics invaded daily life."]
  ),
  "Morning Request Evening Report": ctx(
    ["文革中毛泽东崇拜被制度化，很多单位要求每天向毛像和语录表忠。", "早请示晚汇报把个人生活纳入政治仪式，早晚报告思想和行动。", "这种仪式加强了恐惧和从众，也让政治表演成为社会安全感的一部分。"],
    ["During the Cultural Revolution, Mao worship was institutionalized and many units required daily loyalty rituals around portraits and quotations.", "Morning request and evening report folded private life into political ritual through daily ideological reporting.", "The ritual strengthened fear and conformity, making political performance part of social safety."]
  ),
  "Black Cat White Cat": ctx(
    ["邓小平在社会主义路线争论中强调实际效果，淡化意识形态标签。", "黑猫白猫的说法被用来概括只要能发展生产、解决问题就可采用的方法。", "它为改革开放的务实转向提供了口号，但也留下结果主义与权利保障之间的张力。"],
    ["Deng Xiaoping stressed practical results amid socialist policy debates, downplaying ideological labels.", "Black cat, white cat summarized using whatever method solved production and development problems.", "It gave reform a pragmatic slogan while leaving tension between result-first politics and rights protections."]
  , "meme"),
  "Crossing River By Stones": ctx(
    ["改革开放初期缺少现成制度路线，领导层选择试点和渐进调整。", "摸石头过河形容先在局部地区尝试，再把有效做法扩大。", "它解释了中国市场化改革的弹性，也意味着许多社会成本和规则空白由普通人承担。"],
    ["Early reform lacked a ready institutional map, so leaders chose pilots and gradual adjustment.", "Crossing the river by feeling stones described trying policies locally before scaling them up.", "It explains reform flexibility while also implying that ordinary people bore many social costs and rule gaps."]
  , "meme"),
  "Some Get Rich First": ctx(
    ["改革开放打破平均主义，邓小平允许地区和个人先通过市场机会致富。", "沿海、城市和有资源关系的人更早受益，贫富差距和地区差距扩大。", "这个口号推动增长，也成为后来追问共同富裕、阶层固化和分配不公的起点。"],
    ["Reform broke with egalitarianism, allowing some regions and individuals to get rich first through market opportunities.", "Coastal regions, cities, and people with access to resources benefited earlier, expanding inequality.", "The slogan helped drive growth but became a starting point for later questions about common prosperity, class rigidity, and unfair distribution."]
  , "meme"),
  "Stability Above All": ctx(
    ["1989 年后，中共领导层把政权安全和社会控制置于政治改革之前。", "稳定压倒一切成为处理抗议、异议和社会矛盾的核心逻辑。", "它帮助维持秩序和发展环境，但也压低了权利表达、历史追问和制度改革空间。"],
    ["After 1989, CCP leaders put regime security and social control ahead of political reform.", "Stability above all became a core logic for handling protests, dissent, and social conflict.", "It helped maintain order and a development environment while suppressing rights expression, historical inquiry, and institutional reform."]
  , "meme"),
  "Elder": ctx(
    ["长者梗主要来自江泽民 2000 年训斥香港记者的片段和后来网络重看。", "年轻网民把训话中的语气、英文和姿态做成表情包与二创，形成膜蛤文化。", "它既是对前领导人的戏仿，也常被用来反衬后来更严厉的审查环境。"],
    ["The Elder meme mainly comes from Jiang Zemin's 2000 scolding of Hong Kong reporters and later online rediscovery.", "Younger users turned the tone, English phrases, and gestures into memes and remixes, forming toad-worship culture.", "It is parody of a former leader and often contrasts with later, harsher censorship conditions."]
  , "meme"),
  "Toad Worship": ctx(
    ["膜蛤由江泽民外形绰号、长者训话和网民二创共同形成。", "它表面像膜拜，实际常带戏仿、怀旧和对当下政治气氛的间接比较。", "这个亚文化显示中国网民会把政治人物改造成绕开审查的娱乐符号。"],
    ["Toad worship grew from Jiang's nickname, elder-scolding clips, and user remixes.", "It looks like worship but often carries parody, nostalgia, and indirect comparison with current politics.", "The subculture shows how Chinese users turn political figures into entertainment symbols that can route around censorship."]
  , "meme"),
  "Haha Toad": ctx(
    ["蛤蛤是膜蛤文化中的轻量称呼，来自江泽民外形绰号和笑声式表达。", "它常和眼镜、谈笑风生、续命等元素一起出现。", "它把政治人物转化为低风险的玩梗符号，同时保留对权力的讽刺距离。"],
    ["Haha Toad is a lighter label inside toad-worship culture, tied to Jiang's nickname and laughter-like expression.", "It appears with glasses, talking-and-laughing clips, and longevity jokes.", "It turns a political figure into a lower-risk meme symbol while preserving satirical distance from power."]
  , "meme"),
  "Make Fortune Quietly": ctx(
    ["这个梗来自江泽民训斥记者时关于不要总想搞大新闻的表达。", "网民把闷声大发财单独截出，变成劝人低调、也讽刺权力黑箱的常用语。", "它的流行说明政治语录会脱离原场景，变成日常幽默和时代比较工具。"],
    ["The phrase comes from Jiang's scolding of reporters about not always trying to make big news.", "Users extracted make fortune quietly as advice to keep a low profile and as satire of opaque power.", "Its popularity shows how political quotes detach from context and become daily humor and tools for comparing eras."]
  , "meme"),
  "Talking and Laughing": ctx(
    ["谈笑风生来自江泽民在公开场合展示见识、英文和外交阅历的形象。", "膜蛤二创把它做成一种长者自信姿态，与记者训话片段反复混剪。", "它成为江泽民网络形象的重要组成，既有戏仿也有对旧时代政治松动的怀旧。"],
    ["Talking and laughing comes from Jiang's public image of worldliness, English, and diplomatic experience.", "Toad-worship remixes turn it into an elder-confidence pose alongside the reporter-scolding clips.", "It became part of Jiang's online image, combining parody with nostalgia for a looser political era."]
  , "meme"),
  "Too Young Too Simple": ctx(
    ["这句话来自江泽民用英文训斥记者时的 famous 片段。", "网民把发音音译成图样图森破，并不断用于评论天真、鲁莽或不懂权力规则的人。", "它的生命力来自强烈口音、权力现场和可复制的网络音译。"],
    ["The phrase comes from Jiang scolding reporters in English in a famous clip.", "Users rendered it phonetically as tu yang tu sen po and use it to mock naivety or ignorance of power rules.", "Its durability comes from the accent, power setting, and highly reusable phonetic meme form."]
  , "meme"),
  "Excited": ctx(
    ["亦可赛艇来自江泽民英文 excited 的谐音二创。", "它在膜蛤文化中常用来表达夸张兴奋或配合长者视频素材。", "这个梗把外语口音转成中文谐音，成为政治娱乐化的典型例子。"],
    ["Excited became a homophone meme rendered as yi ke sai ting.", "Inside toad-worship culture it signals exaggerated excitement and pairs with elder video clips.", "The meme turns foreign-language accent into Chinese phonetic play, a typical case of politicized entertainment."]
  , "meme"),
  "For Country Life And Death": ctx(
    ["苟利国家生死以出自林则徐诗句，江泽民在多个场合引用后被膜蛤文化反复截取。", "网民把它和长者续命、背诗、见多识广等形象结合。", "它既保留古典政治修辞，也被改造成对前领导人形象的戏仿道具。"],
    ["The line comes from Lin Zexu's poem and was repeatedly quoted by Jiang, later clipped in toad-worship culture.", "Users combine it with longevity jokes, poem recitation, and Jiang's worldly persona.", "It preserves classical political rhetoric while becoming a parody prop for a former leader's image."]
  , "meme")
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

function getContextKind(item) {
  return item.category === "ccpMetaphor" || item.category === "northKorea" ? "meme" : "event";
}

function buildContextFromSummary(item, summary = "") {
  const copy = getCopy();
  const term = getTerm(item);
  const clue = getClue(item);
  const category = copy.categories[item.category] || "";
  const era = item.year ? (state.lang === "en" ? ` around ${item.year}` : `（${item.year}）`) : "";
  const kind = getContextKind(item);
  if (state.lang === "en") {
    if (kind === "meme") {
      return {
        kind,
        en: [
          summary || `${term} comes from ${category}${era} as coded political satire.`,
          `It spread because the surface joke is simple: ${clue}`,
          `It points to the way censorship, propaganda, or power worship turns daily speech into coded dark humor around "${term}".`
        ]
      };
    }
    return {
      kind,
      en: [
        summary || `${term} belongs to ${category}${era}, where policy pressure or institutional incentives shaped the event.`,
        `The public-facing memory is compressed by the clue: ${clue}`,
        `The result is that "${term}" remains a shorthand for its specific damage, accountability gap, and later political memory.`
      ]
    };
  }
  if (state.lang === "cn") {
    if (kind === "meme") {
      return {
        kind,
        cn: [
          summary || `${term}来自${category}${era}里的政治黑话和网络反讽。`,
          `它能传播，是因为表层笑点很短：${clue}`,
          `它指向的是审查、宣传或个人崇拜如何把日常语言逼成围绕“${term}”的黑色幽默。`
        ]
      };
    }
    return {
      kind,
      cn: [
        summary || `${term}属于${category}${era}，背后有具体政策压力、制度激励或权力运作。`,
        `公共记忆被浓缩在线索里：${clue}`,
        `结果是“${term}”不只是名词，而是保留了这件事的具体代价、问责缺口和后续政治记忆。`
      ]
    };
  }
  if (kind === "meme") {
    return {
      kind,
      tw: [
        summary || `${term}來自${category}${era}裡的政治黑話和網路反諷。`,
        `它能傳播，是因為表層笑點很短：${clue}`,
        `它指向的是審查、宣傳或個人崇拜如何把日常語言逼成圍繞「${term}」的黑色幽默。`
      ]
    };
  }
  return {
    kind,
    tw: [
      summary || `${term}屬於${category}${era}，背後有具體政策壓力、制度激勵或權力運作。`,
      `公共記憶被濃縮在線索裡：${clue}`,
      `結果是「${term}」不只是名詞，而是保留了這件事的具體代價、問責缺口和後續政治記憶。`
    ]
  };
}

function getContext(item = state.entry) {
  const override = CONTEXT_OVERRIDES[item.en];
  if (override) return formatContextRecord(override);
  const key = state.lang === "tw" ? "contextTw" : state.lang === "cn" ? "contextCn" : "contextEn";
  if (item[key]) {
    return formatContextRecord(buildContextFromSummary(item, item[key]));
  }
  return formatContextRecord(buildContextFromSummary(item));
}

function getProfileKey(route = state.route, leaderMode = state.leaderMode) {
  return `${route}:${leaderMode}`;
}

function defaultProfile() {
  return { level: 0, bestLevel: 0, score: 0, streak: 0 };
}

function profileSnapshot() {
  return {
    level: state.level,
    bestLevel: state.bestLevel,
    score: state.score,
    streak: state.streak
  };
}

function normalizeProfile(profile = {}) {
  return {
    level: Number.isFinite(profile.level) ? profile.level : 0,
    bestLevel: Number.isFinite(profile.bestLevel) ? profile.bestLevel : 0,
    score: Number.isFinite(profile.score) ? profile.score : 0,
    streak: Number.isFinite(profile.streak) ? profile.streak : 0
  };
}

function applyProfile(profile = {}) {
  const clean = normalizeProfile(profile);
  state.level = clean.level;
  state.bestLevel = clean.bestLevel;
  state.score = clean.score;
  state.streak = clean.streak;
}

function blankSaveRoot() {
  return { profiles: {}, rankings: [] };
}

function readSaveRoot() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const root = saved && typeof saved === "object" ? saved : blankSaveRoot();
    if (!root.profiles || typeof root.profiles !== "object") {
      const route = isRoute(root.route) ? root.route : state.route;
      const leaderMode = root.leaderMode && LEADER_MODE_COPY.en[root.leaderMode] ? root.leaderMode : state.leaderMode;
      root.profiles = {};
      root.profiles[getProfileKey(route, leaderMode)] = normalizeProfile(root);
    }
    if (!Array.isArray(root.rankings)) root.rankings = [];
    return root;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return blankSaveRoot();
  }
}

function writeSaveRoot(root) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(root));
}

function loadSave() {
  const saved = readSaveRoot();
  if (saved.lang && TEXT[saved.lang]) state.lang = saved.lang;
  if (isRoute(saved.route)) state.route = saved.route;
  if (saved.leaderMode && LEADER_MODE_COPY.en[saved.leaderMode]) state.leaderMode = saved.leaderMode;
  if (typeof saved.muted === "boolean") state.muted = saved.muted;
  if (Number.isFinite(saved.volume)) state.volume = saved.volume;
  if (saved.musicTrack && MUSIC_TRACK_IDS.includes(saved.musicTrack)) state.musicTrack = saved.musicTrack;
  applyProfile(saved.profiles[getProfileKey()] || defaultProfile());
}

function saveGame() {
  const root = readSaveRoot();
  root.lang = state.lang;
  root.route = state.route;
  root.leaderMode = state.leaderMode;
  root.muted = state.muted;
  root.volume = state.volume;
  root.musicTrack = state.musicTrack;
  root.profiles[getProfileKey()] = profileSnapshot();
  writeSaveRoot(root);
}

function getRankings() {
  return readSaveRoot().rankings || [];
}

function modeLabel(route = state.route, leaderMode = state.leaderMode, lang = state.lang) {
  const routeCopy = ROUTE_COPY[lang] || ROUTE_COPY.en;
  const leaderCopy = LEADER_MODE_COPY[lang] || LEADER_MODE_COPY.en;
  const routeName = routeCopy[route] || route;
  const modeName = leaderCopy[leaderMode]?.name || leaderMode;
  return `${routeName} / ${modeName}`;
}

function recordRanking(stars, bonus) {
  const root = readSaveRoot();
  const item = {
    id: `${Date.now()}-${state.score}-${state.level}`,
    score: state.score,
    level: state.level,
    bestLevel: state.bestLevel,
    streak: state.streak,
    stars,
    bonus,
    route: state.route,
    leaderMode: state.leaderMode,
    lang: state.lang,
    term: getTerm(),
    at: new Date().toISOString()
  };
  root.rankings = [...(root.rankings || []), item]
    .sort((a, b) => (b.score - a.score) || (b.level - a.level) || String(b.at).localeCompare(String(a.at)))
    .slice(0, RANKING_LIMIT);
  writeSaveRoot(root);
}

function resetProgress() {
  stopTimer();
  applyProfile(defaultProfile());
  state.started = false;
  state.modal = null;
  state.paused = false;
  state.pauseFact = null;
  state.locked = false;
  state.tray = [];
  state.matchBursts = [];
  saveGame();
  setupLevel(0);
  render();
}

function loadCurrentModeProfile() {
  const root = readSaveRoot();
  applyProfile(root.profiles[getProfileKey()] || defaultProfile());
  stopTimer();
  state.started = false;
  state.modal = null;
  state.paused = false;
  state.pauseFact = null;
  state.locked = false;
  state.tray = [];
  state.matchBursts = [];
  setupLevel(state.level);
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

function tokenize(answer) {
  return tokenizeForLang(answer, state.lang);
}

function tokenizeForLang(answer, lang) {
  if (lang === "en") {
    return Array.from(answer.replace(/[^A-Za-z0-9]/g, "").toUpperCase());
  }
  return Array.from(answer.replace(/\s+/g, ""));
}

function getMergeTileSet() {
  return MERGE_TILE_SETS[state.leaderMode] || MERGE_TILE_SETS.all;
}

const EN_STOP_WORDS = new Set([
  "about", "after", "again", "against", "along", "also", "became", "because", "before", "between", "could", "during",
  "from", "have", "into", "more", "over", "that", "their", "then", "there", "these", "this", "through", "under",
  "when", "where", "while", "with", "without", "would", "political", "public", "official"
]);

const CJK_STOP_CHARS = /[的一是在和與与及把被將将為为後后中上下一個个這这那其而也就都很更最常用來来说成於于]/g;

const TRACE_DECOYS = {
  tw: ["封存", "口號", "會議", "文件", "廣播", "審查", "沉默", "改寫", "指令", "名單", "邊界", "統計", "公報", "風向", "禁區"],
  cn: ["封存", "口号", "会议", "文件", "广播", "审查", "沉默", "改写", "指令", "名单", "边界", "统计", "公报", "风向", "禁区"],
  en: ["sealed", "slogan", "meeting", "file", "broadcast", "censor", "silence", "rewrite", "order", "registry", "border", "statistic", "bulletin", "signal", "taboo"]
};

const CARD_ART_PROFILES = {
  ccp: { glyph: "檔", a: "#6f1f24", b: "#d2a44d" },
  ccpMetaphor: { glyph: "禁", a: "#77244d", b: "#7db0c2" },
  soviet: { glyph: "蘇", a: "#6d1c22", b: "#c6a04c" },
  northKorea: { glyph: "朝", a: "#1f4d78", b: "#c94c4c" },
  taiwan: { glyph: "台", a: "#254f8a", b: "#7ebd8a" },
  kmtCcp: { glyph: "國", a: "#273f7a", b: "#b94b43" },
  ww2: { glyph: "戰", a: "#4b4f55", b: "#c08a43" },
  hongKong: { glyph: "港", a: "#43306f", b: "#d05b70" },
  current: { glyph: "今", a: "#29566a", b: "#d9b35d" },
  us: { glyph: "美", a: "#263f7a", b: "#b64747" }
};

const LEADER_ART_PROFILES = {
  xi: { glyph: "習", a: "#743037", b: "#d4a34f" },
  mao: { glyph: "毛", a: "#7b1e24", b: "#c6473d" },
  deng: { glyph: "鄧", a: "#315e55", b: "#d4a34f" },
  jiang: { glyph: "江", a: "#2f596d", b: "#8fc0cf" }
};

const REAL_CARD_ASSETS = {
  mao: "assets/cards/mao.jpg",
  deng: "assets/cards/deng.jpg",
  jiang: "assets/cards/jiang.jpg",
  xi: "assets/cards/xi.jpg",
  "cultural-revolution": "assets/cards/cultural-revolution.jpg",
  "hong-kong-protest": "assets/cards/hong-kong-protest.jpg",
  "covid-booth": "assets/cards/covid-booth.jpg",
  "legislative-yuan": "assets/cards/legislative-yuan.jpg",
  nanjing: "assets/cards/nanjing.jpg",
  chernobyl: "assets/cards/chernobyl.jpg",
  "north-korea": "assets/cards/north-korea.jpg",
  kim: "assets/cards/kim.jpg",
  guantanamo: "assets/cards/guantanamo.jpg",
  surveillance: "assets/cards/surveillance.jpg",
  "ccp-flag": "assets/cards/ccp-flag.png",
  "china-flag": "assets/cards/china-flag.png",
  "prc-emblem": "assets/cards/prc-emblem.png",
  "tiananmen-gate": "assets/cards/tiananmen-gate.jpg",
  "red-guards-rally": "assets/cards/red-guards-rally.jpg",
  "bo-xilai": "assets/cards/bo-xilai.jpg",
  "taiwan-flag": "assets/cards/taiwan-flag.png",
  "roc-emblem": "assets/cards/roc-emblem.png",
  chiang: "assets/cards/chiang.png",
  "sun-yat-sen": "assets/cards/sun-yat-sen.jpg",
  "us-capitol": "assets/cards/us-capitol.jpg",
  trump: "assets/cards/trump.jpg",
  stalin: "assets/cards/stalin.jpg",
  "berlin-wall": "assets/cards/berlin-wall.jpg",
  "kim-jong-il": "assets/cards/kim-jong-il.jpg"
};

const ASSET_VISUAL_TUNING = {
  xi: { focus: "50% 22%", zoom: "158%", shade: "rgba(5, 6, 6, 0.62)" },
  mao: { focus: "50% 24%", zoom: "150%", shade: "rgba(24, 8, 8, 0.62)" },
  deng: { focus: "52% 24%", zoom: "152%", shade: "rgba(6, 14, 12, 0.62)" },
  jiang: { focus: "50% 22%", zoom: "154%", shade: "rgba(5, 12, 16, 0.62)" },
  "tiananmen-gate": { focus: "50% 43%", zoom: "184%", shade: "rgba(20, 8, 7, 0.62)" },
  "cultural-revolution": { focus: "48% 36%", zoom: "172%", shade: "rgba(26, 8, 8, 0.64)" },
  "red-guards-rally": { focus: "48% 34%", zoom: "178%", shade: "rgba(23, 6, 6, 0.66)" },
  "hong-kong-protest": { focus: "50% 54%", zoom: "170%", shade: "rgba(6, 9, 13, 0.66)" },
  "covid-booth": { focus: "46% 46%", zoom: "176%", shade: "rgba(7, 12, 13, 0.64)" },
  "legislative-yuan": { focus: "50% 42%", zoom: "166%", shade: "rgba(5, 8, 10, 0.64)" },
  nanjing: { focus: "50% 44%", zoom: "172%", shade: "rgba(12, 10, 8, 0.68)" },
  chernobyl: { focus: "52% 40%", zoom: "168%", shade: "rgba(10, 14, 12, 0.68)" },
  "north-korea": { focus: "52% 40%", zoom: "166%", shade: "rgba(6, 10, 17, 0.64)" },
  guantanamo: { focus: "45% 44%", zoom: "174%", shade: "rgba(8, 10, 12, 0.66)" },
  surveillance: { focus: "50% 42%", zoom: "180%", shade: "rgba(5, 8, 9, 0.66)" },
  "ccp-flag": { focus: "50% 50%", zoom: "188%", shade: "rgba(28, 4, 4, 0.58)" },
  "china-flag": { focus: "40% 34%", zoom: "182%", shade: "rgba(26, 3, 3, 0.58)" },
  "prc-emblem": { focus: "50% 50%", zoom: "172%", shade: "rgba(18, 5, 4, 0.58)" },
  "taiwan-flag": { focus: "36% 34%", zoom: "182%", shade: "rgba(5, 8, 20, 0.58)" },
  "roc-emblem": { focus: "50% 50%", zoom: "170%", shade: "rgba(5, 9, 18, 0.58)" },
  "us-capitol": { focus: "50% 40%", zoom: "164%", shade: "rgba(5, 8, 13, 0.62)" },
  "berlin-wall": { focus: "52% 44%", zoom: "176%", shade: "rgba(9, 10, 11, 0.66)" },
  stalin: { focus: "50% 22%", zoom: "150%", shade: "rgba(15, 9, 8, 0.66)" },
  trump: { focus: "50% 22%", zoom: "150%", shade: "rgba(6, 8, 13, 0.62)" },
  kim: { focus: "50% 22%", zoom: "156%", shade: "rgba(5, 8, 13, 0.64)" },
  "kim-jong-il": { focus: "50% 24%", zoom: "152%", shade: "rgba(6, 8, 13, 0.64)" }
};

const SCENE_VISUAL_TUNING = {
  assembly: { focus: "50% 44%", zoom: "152%", shade: "rgba(8, 6, 5, 0.62)" },
  gatehouse: { focus: "50% 38%", zoom: "164%", shade: "rgba(22, 6, 5, 0.62)" },
  monument: { focus: "50% 35%", zoom: "168%", shade: "rgba(10, 8, 7, 0.64)" },
  museum: { focus: "50% 48%", zoom: "154%", shade: "rgba(8, 9, 10, 0.62)" },
  court: { focus: "50% 45%", zoom: "150%", shade: "rgba(5, 7, 11, 0.62)" },
  memorial: { focus: "50% 42%", zoom: "166%", shade: "rgba(10, 8, 7, 0.66)" },
  towerClose: { focus: "50% 28%", zoom: "174%", shade: "rgba(4, 8, 13, 0.64)" },
  mausoleum: { focus: "50% 42%", zoom: "160%", shade: "rgba(10, 6, 6, 0.66)" },
  redWall: { focus: "50% 48%", zoom: "184%", shade: "rgba(24, 5, 5, 0.64)" },
  glassHall: { focus: "50% 44%", zoom: "162%", shade: "rgba(4, 9, 13, 0.62)" },
  dataCenter: { focus: "50% 42%", zoom: "170%", shade: "rgba(3, 8, 10, 0.66)" },
  checkpoint: { focus: "50% 44%", zoom: "170%", shade: "rgba(7, 9, 10, 0.66)" },
  streetBlock: { focus: "50% 52%", zoom: "178%", shade: "rgba(6, 8, 10, 0.66)" },
  factoryStack: { focus: "50% 36%", zoom: "164%", shade: "rgba(8, 10, 9, 0.66)" },
  island: { focus: "50% 48%", zoom: "160%", shade: "rgba(4, 9, 14, 0.62)" },
  bridgeDetail: { focus: "50% 46%", zoom: "172%", shade: "rgba(12, 10, 8, 0.64)" },
  skyline: { focus: "50% 44%", zoom: "158%", shade: "rgba(4, 8, 12, 0.64)" },
  rostrum: { focus: "50% 36%", zoom: "166%", shade: "rgba(24, 6, 5, 0.62)" }
};

const CATEGORY_ASSET_KEYS = {
  ccp: "tiananmen-gate",
  ccpMetaphor: "ccp-flag",
  hongKong: "hong-kong-protest",
  taiwan: "taiwan-flag",
  kmtCcp: "chiang",
  ww2: "nanjing",
  northKorea: "north-korea",
  soviet: "stalin",
  us: "us-capitol",
  current: "surveillance"
};

const ENTRY_ASSET_KEYS = {
  "Cultural Revolution": "cultural-revolution",
  "Destroy Four Olds": "cultural-revolution",
  "Little Red Book": "cultural-revolution",
  "Loyalty Dance": "cultural-revolution",
  "Factional Armed Struggle": "red-guards-rally",
  "Lin Biao Incident": "red-guards-rally",
  "Great Famine": "mao",
  "Great Leap Forward": "mao",
  "Ten Thousand Jin Per Mu": "mao",
  "Mao Cured Meat": "mao",
  "Tank Man": "deng",
  "Tiananmen Clearing": "tiananmen-gate",
  "June Fourth": "tiananmen-gate",
  "Deng the Crusher": "deng",
  "Crusher Deng": "deng",
  "Bo Xilai Case": "bo-xilai",
  "Dynamic Zero COVID": "covid-booth",
  "Routine PCR": "covid-booth",
  "Zero COVID Patriarch": "covid-booth",
  "Zero COVID U Turn": "covid-booth",
  "Blank Paper": "hong-kong-protest",
  "Umbrella Movement": "hong-kong-protest",
  "Hong Kong National Security Law": "hong-kong-protest",
  "Hong Kong Handover": "hong-kong-protest",
  "Apple Daily Closure": "hong-kong-protest",
  "Sunflower Movement": "legislative-yuan",
  "White Terror Taiwan": "chiang",
  "Taiwan Legislature Reform Dispute": "legislative-yuan",
  "Blue White Deal Collapse": "taiwan-flag",
  "Double Tenth Agreement": "chiang",
  "KMT Retreat To Taiwan": "chiang",
  "Sun Yat Sen": "sun-yat-sen",
  "Chernobyl": "chernobyl",
  "Berlin Wall": "berlin-wall",
  "Soviet Collapse": "berlin-wall",
  "Stalin Purges": "stalin",
  "Gulag": "stalin",
  "October Revolution": "stalin",
  "Kim Three Fat": "kim",
  "Triple Gold Fat": "kim",
  "Paektu Bloodline": "kim",
  "Kim Jong Il": "kim-jong-il",
  "Rocket Man": "north-korea",
  "Juche": "north-korea",
  "Military First": "north-korea",
  "Arduous March": "north-korea",
  "Guantanamo": "guantanamo",
  "Watergate": "us-capitol",
  "Capitol Riot": "us-capitol",
  "Patriot Act": "us-capitol",
  "Trump Trade War": "trump",
  "Xinjiang Reeducation Camps": "surveillance",
  "Social Credit": "surveillance",
  "Skynet Project": "surveillance",
  "Unanimous Election": "xi",
  "Two Establishes": "xi",
  "Two Upholds": "xi",
  "Xi Ban Comments": "xi",
  "Diao May Care": "xi",
  "Xi Baozi": "xi",
  "Wheat Shoulder Xi": "xi",
  "Liangjiahe Pilgrimage": "xi",
  "Liangjiahe Great Learning": "xi",
  "Jiang Core": "jiang",
  "Jiang Scolds Hong Kong Reporter": "jiang",
  "Too Young Too Simple": "jiang"
};

const CARD_IMAGE_LIBRARY = [
  { key: "red-code", scene: "qr", asset: "covid-booth", glyph: "碼", tw: "紅碼", cn: "红码", en: "Red Code" },
  { key: "pcr", scene: "swab", asset: "covid-booth", glyph: "酸", tw: "核酸", cn: "核酸", en: "PCR" },
  { key: "bun", scene: "bun", asset: "xi", glyph: "包", tw: "包子", cn: "包子", en: "Bun" },
  { key: "crown", scene: "crown", asset: "xi", glyph: "尊", tw: "一尊", cn: "一尊", en: "One" },
  { key: "wheat", scene: "wheat", asset: "xi", glyph: "麥", tw: "麥山", cn: "麦山", en: "Wheat" },
  { key: "tank", scene: "tank", asset: "deng", glyph: "履", tw: "履帶", cn: "履带", en: "Tread" },
  { key: "square", scene: "square", asset: "deng", glyph: "場", tw: "廣場", cn: "广场", en: "Square" },
  { key: "red-book", scene: "book", asset: "cultural-revolution", glyph: "語", tw: "語錄", cn: "语录", en: "Quote" },
  { key: "sun", scene: "sun", asset: "mao", glyph: "日", tw: "紅日", cn: "红日", en: "Sun" },
  { key: "fist", scene: "fist", asset: "cultural-revolution", glyph: "拳", tw: "鐵拳", cn: "铁拳", en: "Fist" },
  { key: "wall", scene: "wall", asset: "surveillance", glyph: "牆", tw: "高牆", cn: "高墙", en: "Wall" },
  { key: "hot-search", scene: "screen", asset: "surveillance", glyph: "搜", tw: "熱搜", cn: "热搜", en: "Trend" },
  { key: "deleted", scene: "shred", asset: "hong-kong-protest", glyph: "刪", tw: "刪帖", cn: "删帖", en: "Delete" },
  { key: "tea", scene: "tea", glyph: "茶", tw: "喝茶", cn: "喝茶", en: "Tea" },
  { key: "tv", scene: "tv", asset: "surveillance", glyph: "認", tw: "認罪", cn: "认罪", en: "Confess" },
  { key: "data", scene: "chart", asset: "surveillance", glyph: "數", tw: "數據", cn: "数据", en: "Data" },
  { key: "tower", scene: "tower", asset: "surveillance", glyph: "樓", tw: "爛尾", cn: "烂尾", en: "Tower" },
  { key: "land", scene: "land", glyph: "地", tw: "賣地", cn: "卖地", en: "Land" },
  { key: "delivery", scene: "scooter", glyph: "算", tw: "算法", cn: "算法", en: "Algo" },
  { key: "996", scene: "clock", glyph: "996", tw: "加班", cn: "加班", en: "996" },
  { key: "umbrella", scene: "umbrella", asset: "hong-kong-protest", glyph: "傘", tw: "雨傘", cn: "雨伞", en: "Umbrella" },
  { key: "apple", scene: "paper", asset: "hong-kong-protest", glyph: "報", tw: "停刊", cn: "停刊", en: "Press" },
  { key: "ballot", scene: "ballot", asset: "legislative-yuan", glyph: "票", tw: "選票", cn: "选票", en: "Ballot" },
  { key: "brawl", scene: "gavel", asset: "legislative-yuan", glyph: "槌", tw: "議場", cn: "议场", en: "Gavel" },
  { key: "kmt-ccp", scene: "split", glyph: "裂", tw: "裂縫", cn: "裂缝", en: "Split" },
  { key: "bridge", scene: "bridge", asset: "nanjing", glyph: "橋", tw: "橋邊", cn: "桥边", en: "Bridge" },
  { key: "bombing", scene: "fire", asset: "nanjing", glyph: "火", tw: "轟炸", cn: "轰炸", en: "Fire" },
  { key: "rocket", scene: "rocket", asset: "north-korea", glyph: "箭", tw: "火箭", cn: "火箭", en: "Rocket" },
  { key: "bread", scene: "queue", glyph: "麵", tw: "排隊", cn: "排队", en: "Queue" },
  { key: "hammer", scene: "hammer", asset: "chernobyl", glyph: "鐮", tw: "鐮錘", cn: "镰锤", en: "Hammer" },
  { key: "gulag", scene: "barbed", asset: "chernobyl", glyph: "寒", tw: "古拉", cn: "古拉", en: "Gulag" },
  { key: "capitol", scene: "capitol", asset: "guantanamo", glyph: "會", tw: "國會", cn: "国会", en: "Capitol" },
  { key: "dollar", scene: "money", glyph: "$", tw: "黑錢", cn: "黑钱", en: "Money" },
  { key: "map", scene: "map", glyph: "區", tw: "選區", cn: "选区", en: "Map" },
  { key: "seal", scene: "seal", glyph: "封", tw: "封條", cn: "封条", en: "Seal" },
  { key: "file", scene: "file", glyph: "檔", tw: "檔案", cn: "档案", en: "File" },
  { key: "blackbox", scene: "box", glyph: "箱", tw: "黑箱", cn: "黑箱", en: "Box" },
  { key: "megaphone", scene: "horn", glyph: "宣", tw: "口號", cn: "口号", en: "Slogan" },
  { key: "camera", scene: "camera", asset: "surveillance", glyph: "眼", tw: "監控", cn: "监控", en: "Camera" },
  { key: "mask", scene: "mask", asset: "covid-booth", glyph: "罩", tw: "口罩", cn: "口罩", en: "Mask" },
  { key: "chives", scene: "chives", glyph: "韭", tw: "韭菜", cn: "韭菜", en: "Chives" },
  { key: "ship", scene: "ship", asset: "jiang", glyph: "舵", tw: "舵手", cn: "舵手", en: "Helm" },
  { key: "glasses", scene: "glasses", asset: "jiang", glyph: "蛤", tw: "眼鏡", cn: "眼镜", en: "Glasses" },
  { key: "microphone", scene: "mic", asset: "jiang", glyph: "麥", tw: "記者", cn: "记者", en: "Press" },
  { key: "party-badge", scene: "seal", asset: "ccp-flag", glyph: "黨", tw: "黨徽", cn: "党徽", en: "Badge" },
  { key: "red-flag", scene: "seal", asset: "china-flag", glyph: "旗", tw: "紅旗", cn: "红旗", en: "Flag" },
  { key: "prc-emblem", scene: "seal", asset: "prc-emblem", glyph: "徽", tw: "國徽", cn: "国徽", en: "Emblem" },
  { key: "tiananmen-gate", scene: "square", asset: "tiananmen-gate", glyph: "門", tw: "城樓", cn: "城楼", en: "Gate" },
  { key: "red-guards-rally", scene: "fist", asset: "red-guards-rally", glyph: "兵", tw: "紅衛兵", cn: "红卫兵", en: "Guards" },
  { key: "bo-card", scene: "file", asset: "bo-xilai", glyph: "薄", tw: "薄案", cn: "薄案", en: "Bo" },
  { key: "roc-flag", scene: "seal", asset: "taiwan-flag", glyph: "青", tw: "青天", cn: "青天", en: "ROC" },
  { key: "roc-emblem", scene: "seal", asset: "roc-emblem", glyph: "徽", tw: "黨國", cn: "党国", en: "KMT" },
  { key: "chiang-card", scene: "file", asset: "chiang", glyph: "蔣", tw: "蔣像", cn: "蒋像", en: "Chiang" },
  { key: "sun-card", scene: "file", asset: "sun-yat-sen", glyph: "孫", tw: "國父", cn: "国父", en: "Sun" },
  { key: "capitol-card", scene: "capitol", asset: "us-capitol", glyph: "會", tw: "國會山", cn: "国会山", en: "Capitol" },
  { key: "trump-card", scene: "file", asset: "trump", glyph: "川", tw: "川普", cn: "特朗普", en: "Trump" },
  { key: "stalin-card", scene: "file", asset: "stalin", glyph: "史", tw: "史達林", cn: "斯大林", en: "Stalin" },
  { key: "wall-card", scene: "wall", asset: "berlin-wall", glyph: "牆", tw: "柏林牆", cn: "柏林墙", en: "Wall" },
  { key: "kim-jong-il-card", scene: "file", asset: "kim-jong-il", glyph: "金", tw: "將軍", cn: "将军", en: "Kim II" },
  { key: "kim", scene: "seal", asset: "kim", glyph: "金", tw: "三胖", cn: "三胖", en: "Kim" },
  { key: "detention", scene: "barbed", asset: "guantanamo", glyph: "押", tw: "拘押", cn: "拘押", en: "Detain" }
];

const ARCHITECTURE_CARD_LIBRARY = [
  { key: "great-hall-close", scene: "assembly", glyph: "堂", tw: "大會堂", cn: "大会堂", en: "Great Hall" },
  { key: "xinhuamen-close", scene: "gatehouse", glyph: "門", tw: "新華門", cn: "新华门", en: "Xinhuamen" },
  { key: "monument-close", scene: "monument", glyph: "碑", tw: "紀念碑", cn: "纪念碑", en: "Monument" },
  { key: "cpc-museum-model", scene: "museum", glyph: "館", tw: "黨史館", cn: "党史馆", en: "Party Museum" },
  { key: "rostrum-close", scene: "rostrum", glyph: "樓", tw: "城樓", cn: "城楼", en: "Rostrum" },
  { key: "red-wall-maze", scene: "redWall", glyph: "牆", tw: "紅牆", cn: "红墙", en: "Red Wall" },
  { key: "podium-hall", scene: "assembly", glyph: "席", tw: "主席台", cn: "主席台", en: "Podium" },
  { key: "commune-granary", scene: "factoryStack", glyph: "倉", tw: "公社倉", cn: "公社仓", en: "Granary" },
  { key: "square-paving", scene: "monument", glyph: "場", tw: "廣場磚", cn: "广场砖", en: "Square" },
  { key: "checkpoint-gate", scene: "checkpoint", glyph: "卡", tw: "檢查口", cn: "检查口", en: "Checkpoint" },
  { key: "press-hall", scene: "glassHall", glyph: "記", tw: "記者廳", cn: "记者厅", en: "Press Hall" },
  { key: "glass-tower", scene: "skyline", glyph: "樓", tw: "玻璃樓", cn: "玻璃楼", en: "Glass Tower" },
  { key: "hk-legco-model", scene: "glassHall", glyph: "會", tw: "立會樓", cn: "立会楼", en: "LegCo" },
  { key: "hk-court-model", scene: "court", glyph: "審", tw: "終院", cn: "终院", en: "Final Court" },
  { key: "harbor-front", scene: "skyline", glyph: "港", tw: "海港線", cn: "海港线", en: "Harbor" },
  { key: "barricade-street", scene: "streetBlock", glyph: "欄", tw: "路障街", cn: "路障街", en: "Barricade" },
  { key: "presidential-office-model", scene: "gatehouse", glyph: "府", tw: "總統府", cn: "总统府", en: "Presidential" },
  { key: "memorial-arch", scene: "memorial", glyph: "牌", tw: "紀念堂", cn: "纪念堂", en: "Memorial" },
  { key: "assembly-floor", scene: "assembly", glyph: "議", tw: "議場", cn: "议场", en: "Chamber" },
  { key: "island-map", scene: "island", glyph: "島", tw: "島線", cn: "岛线", en: "Island" },
  { key: "kremlin-wall-model", scene: "redWall", glyph: "克", tw: "克宮牆", cn: "克宫墙", en: "Kremlin Wall" },
  { key: "mausoleum-model", scene: "mausoleum", glyph: "墓", tw: "陵墓", cn: "陵墓", en: "Mausoleum" },
  { key: "lubyanka-model", scene: "court", glyph: "局", tw: "盧比揚卡", cn: "卢比扬卡", en: "Lubyanka" },
  { key: "factory-stack", scene: "factoryStack", glyph: "煙", tw: "煙囪", cn: "烟囱", en: "Stacks" },
  { key: "juche-tower-model", scene: "towerClose", glyph: "塔", tw: "主體塔", cn: "主体塔", en: "Juche Tower" },
  { key: "kumsusan-model", scene: "mausoleum", glyph: "宮", tw: "錦繡山", cn: "锦绣山", en: "Kumsusan" },
  { key: "parade-square", scene: "assembly", glyph: "閱", tw: "閱兵場", cn: "阅兵场", en: "Parade" },
  { key: "watchtower", scene: "towerClose", glyph: "哨", tw: "哨塔", cn: "哨塔", en: "Watchtower" },
  { key: "supreme-court-model", scene: "court", glyph: "法", tw: "最高院", cn: "最高院", en: "Supreme Court" },
  { key: "white-house-model", scene: "gatehouse", glyph: "府", tw: "白宮", cn: "白宫", en: "White House" },
  { key: "capitol-dome-model", scene: "assembly", glyph: "會", tw: "國會穹", cn: "国会穹", en: "Capitol Dome" },
  { key: "nanjing-memorial-model", scene: "memorial", glyph: "祭", tw: "遇難館", cn: "遇难馆", en: "Nanjing Memorial" },
  { key: "bridge-detail", scene: "bridgeDetail", glyph: "橋", tw: "橋洞", cn: "桥洞", en: "Bridge Detail" },
  { key: "ruin-wall", scene: "redWall", glyph: "墟", tw: "殘牆", cn: "残墙", en: "Ruin Wall" },
  { key: "memorial-flame", scene: "monument", glyph: "火", tw: "紀念火", cn: "纪念火", en: "Memorial Flame" },
  { key: "ghost-city", scene: "skyline", glyph: "空", tw: "空城樓", cn: "空城楼", en: "Ghost City" },
  { key: "camera-grid", scene: "dataCenter", glyph: "眼", tw: "天眼格", cn: "天眼格", en: "Camera Grid" },
  { key: "delivery-block", scene: "streetBlock", glyph: "困", tw: "外賣格", cn: "外卖格", en: "Delivery Block" },
  { key: "data-center", scene: "dataCenter", glyph: "數", tw: "資料庫", cn: "数据库", en: "Data Center" },
  { key: "debt-tower", scene: "skyline", glyph: "債", tw: "債樓", cn: "债楼", en: "Debt Tower" }
];

const ARCHITECTURE_ASSET_KEYS = {
  "great-hall-close": "tiananmen-gate",
  "xinhuamen-close": "tiananmen-gate",
  "monument-close": "tiananmen-gate",
  "cpc-museum-model": "ccp-flag",
  "rostrum-close": "tiananmen-gate",
  "red-wall-maze": "tiananmen-gate",
  "podium-hall": "tiananmen-gate",
  "commune-granary": "cultural-revolution",
  "square-paving": "tiananmen-gate",
  "checkpoint-gate": "surveillance",
  "press-hall": "tiananmen-gate",
  "glass-tower": "surveillance",
  "hk-legco-model": "legislative-yuan",
  "hk-court-model": "hong-kong-protest",
  "harbor-front": "hong-kong-protest",
  "barricade-street": "hong-kong-protest",
  "presidential-office-model": "taiwan-flag",
  "memorial-arch": "chiang",
  "assembly-floor": "legislative-yuan",
  "island-map": "taiwan-flag",
  "kremlin-wall-model": "stalin",
  "mausoleum-model": "stalin",
  "lubyanka-model": "stalin",
  "factory-stack": "chernobyl",
  "juche-tower-model": "north-korea",
  "kumsusan-model": "kim",
  "parade-square": "north-korea",
  watchtower: "north-korea",
  "supreme-court-model": "us-capitol",
  "white-house-model": "us-capitol",
  "capitol-dome-model": "us-capitol",
  "nanjing-memorial-model": "nanjing",
  "bridge-detail": "nanjing",
  "ruin-wall": "berlin-wall",
  "memorial-flame": "nanjing",
  "ghost-city": "surveillance",
  "camera-grid": "surveillance",
  "delivery-block": "surveillance",
  "data-center": "surveillance",
  "debt-tower": "surveillance"
};

ARCHITECTURE_CARD_LIBRARY.forEach((card) => {
  card.asset = ARCHITECTURE_ASSET_KEYS[card.key] || card.asset;
});

CARD_IMAGE_LIBRARY.push(...ARCHITECTURE_CARD_LIBRARY);

const ARCHITECTURE_CARD_KEYS = {
  all: ["great-hall-close", "monument-close", "red-wall-maze", "data-center", "checkpoint-gate"],
  xi: ["great-hall-close", "xinhuamen-close", "podium-hall", "red-wall-maze", "ghost-city", "camera-grid", "data-center"],
  mao: ["rostrum-close", "monument-close", "commune-granary", "cpc-museum-model", "red-wall-maze", "factory-stack"],
  deng: ["square-paving", "checkpoint-gate", "rostrum-close", "hk-court-model", "bridge-detail", "great-hall-close"],
  jiang: ["press-hall", "glass-tower", "harbor-front", "hk-legco-model", "great-hall-close"],
  ccp: ["great-hall-close", "xinhuamen-close", "monument-close", "cpc-museum-model", "rostrum-close", "red-wall-maze", "podium-hall"],
  ccpMetaphor: ["red-wall-maze", "camera-grid", "checkpoint-gate", "ghost-city", "data-center", "debt-tower"],
  current: ["ghost-city", "camera-grid", "delivery-block", "data-center", "debt-tower", "glass-tower"],
  hongKong: ["hk-legco-model", "hk-court-model", "harbor-front", "barricade-street", "glass-tower"],
  taiwan: ["presidential-office-model", "memorial-arch", "assembly-floor", "island-map", "hk-court-model"],
  kmtCcp: ["memorial-arch", "red-wall-maze", "checkpoint-gate", "presidential-office-model", "bridge-detail"],
  soviet: ["kremlin-wall-model", "mausoleum-model", "lubyanka-model", "factory-stack", "ruin-wall"],
  northKorea: ["juche-tower-model", "kumsusan-model", "parade-square", "watchtower", "mausoleum-model"],
  us: ["supreme-court-model", "white-house-model", "capitol-dome-model", "hk-court-model", "data-center"],
  ww2: ["nanjing-memorial-model", "bridge-detail", "ruin-wall", "memorial-flame", "factory-stack"]
};

const CATEGORY_ASSET_POOLS = {
  ccp: ["tiananmen-gate", "ccp-flag", "china-flag", "prc-emblem", "cultural-revolution", "red-guards-rally", "mao", "deng", "xi", "surveillance", "covid-booth", "bo-xilai"],
  ccpMetaphor: ["ccp-flag", "china-flag", "prc-emblem", "tiananmen-gate", "surveillance", "covid-booth", "xi", "mao", "deng"],
  current: ["surveillance", "covid-booth", "xi", "tiananmen-gate", "china-flag", "bo-xilai"],
  hongKong: ["hong-kong-protest", "legislative-yuan", "surveillance", "china-flag", "taiwan-flag"],
  taiwan: ["taiwan-flag", "roc-emblem", "legislative-yuan", "chiang", "sun-yat-sen", "us-capitol"],
  kmtCcp: ["chiang", "sun-yat-sen", "taiwan-flag", "roc-emblem", "china-flag", "tiananmen-gate"],
  ww2: ["nanjing", "china-flag", "tiananmen-gate", "chiang", "sun-yat-sen"],
  soviet: ["stalin", "berlin-wall", "chernobyl", "ccp-flag", "red-guards-rally"],
  northKorea: ["north-korea", "kim", "kim-jong-il", "stalin", "china-flag"],
  us: ["us-capitol", "trump", "guantanamo", "berlin-wall", "taiwan-flag"]
};

const LEADER_ASSET_POOLS = {
  xi: ["xi", "covid-booth", "surveillance", "tiananmen-gate", "china-flag", "prc-emblem"],
  mao: ["mao", "cultural-revolution", "red-guards-rally", "ccp-flag", "china-flag", "tiananmen-gate"],
  deng: ["deng", "tiananmen-gate", "china-flag", "hong-kong-protest", "surveillance"],
  jiang: ["jiang", "hong-kong-protest", "tiananmen-gate", "china-flag", "surveillance"]
};

function getArchitectureCardKeys(tags, category) {
  const keys = new Set(ARCHITECTURE_CARD_KEYS.all);
  (ARCHITECTURE_CARD_KEYS[category] || []).forEach((key) => keys.add(key));
  tags.forEach((tag) => (ARCHITECTURE_CARD_KEYS[tag] || []).forEach((key) => keys.add(key)));
  return keys;
}

function uniqueAssetKeys(values) {
  const seen = new Set();
  return values.filter((value) => {
    const key = String(value || "");
    if (!key || seen.has(key) || !REAL_CARD_ASSETS[key]) return false;
    seen.add(key);
    return true;
  });
}

function limitAssetPool(pool, limit = 14) {
  return uniqueAssetKeys(pool).slice(0, limit);
}

function getRelatedPhotoAssets(item = state.entry, extra = []) {
  const tags = ENTRY_TAGS[item?.en] || [];
  const architectureAssets = Array.from(getArchitectureCardKeys(tags, item?.category))
    .map((key) => ARCHITECTURE_ASSET_KEYS[key]);
  const leaderAssets = tags.flatMap((tag) => LEADER_ASSET_POOLS[tag] || []);
  const pool = uniqueAssetKeys([
    ENTRY_ASSET_KEYS[item?.en],
    ...extra,
    ...leaderAssets,
    ...(CATEGORY_ASSET_POOLS[item?.category] || []),
    CATEGORY_ASSET_KEYS[item?.category],
    ...architectureAssets
  ]);
  return limitAssetPool(pool);
}

function getCardAssetCandidates(card, item = state.entry) {
  return limitAssetPool([card?.asset, ARCHITECTURE_ASSET_KEYS[card?.key]]);
}

const LABEL_ASSET_RULES = [
  { asset: "xi", keywords: ["\u4e60", "\u7fd2", "\u5305", "\u9ea6", "\u9eb5", "xi", "bun", "wheat"] },
  { asset: "mao", keywords: ["\u6bdb", "\u814a", "\u7ea2\u65e5", "\u7d05\u65e5", "mao"] },
  { asset: "deng", keywords: ["\u9093", "\u9127", "\u78be", "\u5766\u514b", "tank", "deng"] },
  { asset: "jiang", keywords: ["\u6c5f", "\u957f\u8005", "\u9577\u8005", "\u773c\u955c", "\u773c\u93e1", "jiang"] },
  { asset: "stalin", keywords: ["\u65af\u5927\u6797", "\u53f2\u9054\u6797", "\u5362\u6bd4", "\u76e7\u6bd4", "\u514b\u5bab", "\u514b\u5bae", "\u82cf", "\u8607", "\u53e4\u62c9\u683c", "stalin", "gulag", "kremlin", "lubyanka"] },
  { asset: "berlin-wall", keywords: ["\u67cf\u6797", "\u5899", "\u7246", "\u6b8b\u5899", "\u6b98\u7246", "wall", "ruin"] },
  { asset: "chernobyl", keywords: ["\u5207\u5c14\u8bfa\u8d1d\u5229", "\u5207\u723e\u8afe\u8c9d\u5229", "\u6838\u707e", "\u70df\u56f1", "\u7159\u56ea", "chernobyl", "stack"] },
  { asset: "north-korea", keywords: ["\u671d\u9c9c", "\u671d\u9bae", "\u4e3b\u4f53", "\u4e3b\u9ad4", "\u706b\u7bad", "\u961f\u5217", "\u968a\u5217", "north", "juche", "rocket"] },
  { asset: "kim", keywords: ["\u91d1", "\u4e09\u80d6", "\u4e09\u80a5", "kim"] },
  { asset: "kim-jong-il", keywords: ["\u5c06\u519b", "\u5c07\u8ecd", "jong il"] },
  { asset: "tiananmen-gate", keywords: ["\u5929\u5b89\u95e8", "\u5929\u5b89\u9580", "\u5927\u4f1a\u5802", "\u5927\u6703\u5802", "\u65b0\u534e\u95e8", "\u65b0\u83ef\u9580", "\u57ce\u697c", "\u5e7f\u573a", "\u5ee3\u5834", "\u7ea2\u5899", "\u7d05\u7246", "gate", "hall", "square"] },
  { asset: "ccp-flag", keywords: ["\u515a", "\u65d7", "\u5fbd", "\u53e3\u53f7", "\u53e3\u865f", "party", "flag", "slogan"] },
  { asset: "china-flag", keywords: ["\u7ea2\u65d7", "\u7d05\u65d7", "\u4e2d\u56fd", "\u4e2d\u570b", "china"] },
  { asset: "prc-emblem", keywords: ["\u56fd\u5fbd", "\u570b\u5fbd", "\u5c01\u6761", "\u5c01\u689d", "emblem", "seal"] },
  { asset: "cultural-revolution", keywords: ["\u6587\u9769", "\u9769\u547d", "\u8bed\u5f55", "\u8a9e\u9304", "\u7ea2\u5b9d\u4e66", "\u7d05\u5bf6\u66f8", "\u62f3", "revolution", "quote", "fist"] },
  { asset: "red-guards-rally", keywords: ["\u7ea2\u536b\u5175", "\u7d05\u885b\u5175", "\u6279\u6597", "\u6279\u9b25", "guards"] },
  { asset: "covid-booth", keywords: ["\u6838\u9178", "\u5065\u5eb7\u7801", "\u5065\u5eb7\u78bc", "\u53e3\u7f69", "\u7ea2\u7801", "\u7d05\u78bc", "pcr", "mask", "code"] },
  { asset: "surveillance", keywords: ["\u76d1\u63a7", "\u76e3\u63a7", "\u6444\u50cf", "\u651d\u50cf", "\u6570\u636e", "\u8cc7\u6599", "\u6578\u64da", "\u6570\u636e\u5e93", "\u6578\u64da\u5eab", "\u6570\u636e\u5eab", "\u5929\u773c", "\u70ed\u641c", "\u71b1\u641c", "camera", "data", "database", "surveillance"] },
  { asset: "hong-kong-protest", keywords: ["\u9999\u6e2f", "\u96e8\u4f1e", "\u96e8\u5098", "\u6e2f", "\u8def\u969c", "\u5220", "\u524a", "\u522a", "hong kong", "umbrella"] },
  { asset: "legislative-yuan", keywords: ["\u7acb\u6cd5", "\u7acb\u9662", "\u8bae\u573a", "\u8b70\u5834", "\u9009\u7968", "\u9078\u7968", "\u5ba4", "legco", "legislature", "ballot"] },
  { asset: "taiwan-flag", keywords: ["\u53f0\u6e7e", "\u53f0\u7063", "\u9752\u5929", "\u5c9b", "\u5cf6", "taiwan", "roc flag"] },
  { asset: "roc-emblem", keywords: ["\u515a\u56fd", "\u9ee8\u570b", "\u56fd\u6c11\u515a", "\u570b\u6c11\u9ee8", "kmt"] },
  { asset: "chiang", keywords: ["\u848b", "\u767d\u8272\u6050\u6016", "\u767d\u8272\u6050\u61fc", "chiang"] },
  { asset: "sun-yat-sen", keywords: ["\u5b59", "\u56fd\u7236", "\u570b\u7236", "sun yat"] },
  { asset: "nanjing", keywords: ["\u5357\u4eac", "\u8f70\u70b8", "\u8f5f\u70b8", "\u6865", "\u6a4b", "\u7eaa\u5ff5", "\u7d00\u5ff5", "nanjing", "bridge"] },
  { asset: "us-capitol", keywords: ["\u56fd\u4f1a", "\u570b\u6703", "\u767d\u5bab", "\u767d\u5bae", "\u6700\u9ad8\u9662", "\u56fd\u4f1a\u5c71", "\u570b\u6703\u5c71", "capitol", "white house", "court"] },
  { asset: "trump", keywords: ["\u5ddd\u666e", "\u7279\u6717\u666e", "trump"] },
  { asset: "guantanamo", keywords: ["\u5173\u5854", "\u95dc\u5854", "\u62d8\u62bc", "\u62d8\u62bc", "guantanamo", "detain"] },
  { asset: "bo-xilai", keywords: ["\u8584", "\u5531\u7ea2", "\u5531\u7d05", "bo"] }
];

function getLabelPhotoAssets(label) {
  const text = String(label || "").toLowerCase();
  if (!text) return [];
  return uniqueAssetKeys(LABEL_ASSET_RULES
    .filter((rule) => rule.keywords.some((keyword) => text.includes(String(keyword).toLowerCase())))
    .map((rule) => rule.asset));
}

function pickAssetCandidate(candidates, seed, fallback = "") {
  const pool = uniqueAssetKeys([...(candidates || []), fallback]);
  if (!pool.length) return "";
  return pool[Math.abs(hashString(seed || fallback || pool[0])) % pool.length];
}

const CARD_ART_CACHE = new Map();
const CARD_VARIANT_PALETTES = [
  ["#6f1f24", "#d2a44d"],
  ["#293f61", "#b84a42"],
  ["#315e55", "#d4a34f"],
  ["#43306f", "#d05b70"],
  ["#4b4f55", "#c08a43"],
  ["#1f4d78", "#c94c4c"],
  ["#29566a", "#d9b35d"],
  ["#77244d", "#7db0c2"],
  ["#2f596d", "#8fc0cf"],
  ["#4e342d", "#c7a15d"],
  ["#243d35", "#b14b57"],
  ["#3f335c", "#d4a34f"]
];

function svgEscape(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getCardVariantSeed(art) {
  return String(art?.variantKey || art?.key || `${art?.scene || "file"}-${art?.glyph || ""}`);
}

function getCardVariantMeta(art) {
  const seed = getCardVariantSeed(art);
  const random = mulberry32(hashString(seed));
  const palette = CARD_VARIANT_PALETTES[Math.floor(random() * CARD_VARIANT_PALETTES.length)] || CARD_VARIANT_PALETTES[0];
  const angle = 18 + Math.round(random() * 124);
  const grid = 6 + Math.floor(random() * 8);
  const stampX = 18 + Math.round(random() * 62);
  const stampY = 18 + Math.round(random() * 42);
  const stampRot = -24 + Math.round(random() * 48);
  const stripe = 10 + Math.round(random() * 18);
  const cutX = 12 + Math.round(random() * 70);
  const cutY = 10 + Math.round(random() * 52);
  const opacity = (0.08 + random() * 0.12).toFixed(3);
  const plate = Math.floor(random() * 997).toString().padStart(3, "0");
  return { seed, palette, angle, grid, stampX, stampY, stampRot, stripe, cutX, cutY, opacity, plate };
}

function getTileIdentityMeta(art) {
  const meta = getCardVariantMeta(art);
  const random = mulberry32(hashString(`${meta.seed}|identity`));
  const marker = 1 + Math.floor(random() * 4);
  const glow = 0.26 + random() * 0.16;
  return {
    accent: meta.palette[1] || "#d4a34f",
    accent2: meta.palette[0] || "#6f1f24",
    marker,
    glow: glow.toFixed(2)
  };
}

function variantSvgLayer(meta, glyph) {
  const g = svgEscape(glyph);
  const plate = svgEscape(meta.plate);
  return `
    <g opacity="${meta.opacity}">
      <path d="M0 ${meta.stripe}H100M0 ${meta.stripe + 21}H100M0 ${meta.stripe + 42}H100" stroke="rgba(255,255,255,.55)" stroke-width="1"/>
      <path d="M${meta.grid} 0v76M${meta.grid + 18} 0v76M${meta.grid + 39} 0v76M${meta.grid + 63} 0v76" stroke="rgba(255,255,255,.42)" stroke-width="1"/>
      <path d="M${meta.cutX} 6l18 0 0 12M${meta.cutX - 8} 69l22 0M8 ${meta.cutY}l16 0" stroke="rgba(255,255,255,.7)" stroke-width="2" fill="none"/>
    </g>
    <g transform="translate(${meta.stampX} ${meta.stampY}) rotate(${meta.stampRot})" opacity=".22">
      <rect x="-19" y="-11" width="38" height="22" rx="4" fill="none" stroke="rgba(255,255,255,.78)" stroke-width="2"/>
      <text x="0" y="5" text-anchor="middle" font-size="9" font-weight="900" fill="rgba(255,255,255,.82)" font-family="Arial, sans-serif">${g || plate}</text>
    </g>
    <text x="6" y="70" font-size="7" font-weight="800" fill="rgba(255,255,255,.24)" font-family="Arial, sans-serif">AF-${plate}</text>
  `;
}

function sceneSvg(scene, glyph) {
  const g = svgEscape(glyph);
  const commonText = `<text x="50" y="50" text-anchor="middle" font-size="30" font-weight="900" fill="rgba(255,255,255,.72)" font-family="Arial, sans-serif">${g}</text>`;
  const scenes = {
    qr: `<rect x="18" y="12" width="64" height="52" rx="8" fill="rgba(255,255,255,.18)"/><path d="M26 21h12v12H26zM62 21h12v12H62zM26 43h12v12H26zM45 23h7v7h-7zM55 37h7v7h-7zM45 49h22v6H45z" fill="rgba(255,255,255,.72)"/>`,
    swab: `<path d="M21 55 72 14" stroke="rgba(255,255,255,.78)" stroke-width="5" stroke-linecap="round"/><circle cx="26" cy="52" r="10" fill="rgba(255,255,255,.18)"/><path d="M58 28c12 2 18 9 18 20" stroke="rgba(255,255,255,.42)" stroke-width="4" fill="none"/>`,
    bun: `<ellipse cx="50" cy="43" rx="32" ry="19" fill="rgba(255,255,255,.3)"/><path d="M27 40c7-13 38-13 46 0" stroke="rgba(255,255,255,.76)" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    crown: `<path d="M21 52 29 25l17 18 14-23 15 23 16-18 8 27z" fill="rgba(255,255,255,.28)" stroke="rgba(255,255,255,.62)" stroke-width="3"/>`,
    wheat: `<path d="M51 62V18" stroke="rgba(255,255,255,.72)" stroke-width="4"/><path d="M48 24c-18 6-19 17-1 16M54 31c18 6 19 17 1 16M47 41c-16 5-18 16-1 15" stroke="rgba(255,255,255,.62)" stroke-width="3" fill="none"/>`,
    tank: `<rect x="23" y="42" width="48" height="13" rx="5" fill="rgba(255,255,255,.28)"/><rect x="36" y="31" width="24" height="12" rx="3" fill="rgba(255,255,255,.38)"/><path d="M58 35h23" stroke="rgba(255,255,255,.68)" stroke-width="4"/><path d="M24 58h48" stroke="rgba(255,255,255,.56)" stroke-width="5" stroke-dasharray="4 4"/>`,
    square: `<path d="M19 55h62M27 55V27h46v28" stroke="rgba(255,255,255,.62)" stroke-width="4" fill="none"/><circle cx="50" cy="21" r="8" fill="rgba(255,255,255,.3)"/>`,
    book: `<path d="M22 18h26c7 0 11 4 11 11v34H31c-5 0-9-4-9-9zM59 29c0-7 4-11 11-11h8v45H59z" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.58)" stroke-width="3"/>`,
    sun: `<circle cx="50" cy="38" r="16" fill="rgba(255,255,255,.26)"/><path d="M50 12v12M50 52v12M24 38H12M88 38H76M31 19l8 8M69 57l-8-8M69 19l-8 8M31 57l8-8" stroke="rgba(255,255,255,.65)" stroke-width="4" stroke-linecap="round"/>`,
    fist: `<path d="M28 36h10V20h11v16h6V18h11v18h7v13c0 11-9 19-21 19H38c-8 0-15-7-15-15V42c0-4 2-6 5-6z" fill="rgba(255,255,255,.28)" stroke="rgba(255,255,255,.62)" stroke-width="3"/>`,
    wall: `<path d="M16 58h70V24H16z" fill="rgba(255,255,255,.18)"/><path d="M16 34h70M16 46h70M29 24v10M52 24v10M75 24v10M40 34v12M64 34v12M29 46v12M52 46v12M75 46v12" stroke="rgba(255,255,255,.52)" stroke-width="3"/>`,
    screen: `<rect x="18" y="16" width="64" height="42" rx="6" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.55)" stroke-width="3"/><path d="M30 30h36M30 42h22" stroke="rgba(255,255,255,.7)" stroke-width="4" stroke-linecap="round"/>`,
    shred: `<path d="M28 16h38l8 9v36H28z" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.56)" stroke-width="3"/><path d="M31 44l10 17 8-17 8 17 8-17" stroke="rgba(255,255,255,.72)" stroke-width="4" fill="none"/>`,
    tea: `<path d="M30 35h34v11c0 9-7 16-17 16s-17-7-17-16z" fill="rgba(255,255,255,.22)" stroke="rgba(255,255,255,.6)" stroke-width="3"/><path d="M64 38h8c8 0 8 13-1 13h-7M38 22c-4 4 4 6 0 10M51 20c-4 5 5 7 0 12" stroke="rgba(255,255,255,.62)" stroke-width="3" fill="none"/>`,
    tv: `<rect x="20" y="20" width="60" height="38" rx="6" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><path d="M39 34h22M33 46h34" stroke="rgba(255,255,255,.66)" stroke-width="4"/><path d="M40 20 30 10M60 20l10-10" stroke="rgba(255,255,255,.5)" stroke-width="3"/>`,
    chart: `<path d="M20 58h60" stroke="rgba(255,255,255,.5)" stroke-width="4"/><rect x="27" y="38" width="10" height="20" fill="rgba(255,255,255,.26)"/><rect x="45" y="26" width="10" height="32" fill="rgba(255,255,255,.34)"/><rect x="63" y="18" width="10" height="40" fill="rgba(255,255,255,.42)"/>`,
    tower: `<path d="M30 62V20h38v42" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><path d="M39 30h6M55 30h6M39 43h6M55 43h6M26 62h48" stroke="rgba(255,255,255,.65)" stroke-width="3"/><path d="M68 20l13-9" stroke="rgba(255,255,255,.54)" stroke-width="4"/>`,
    land: `<path d="M20 58c12-14 24-16 38-8 10 6 18 3 25-6v18H20z" fill="rgba(255,255,255,.2)"/><path d="M31 39h22v19H31zM42 27v31" stroke="rgba(255,255,255,.56)" stroke-width="3" fill="none"/>`,
    scooter: `<circle cx="33" cy="56" r="8" fill="rgba(255,255,255,.22)"/><circle cx="69" cy="56" r="8" fill="rgba(255,255,255,.22)"/><path d="M32 56h23l12-18h10M42 37h22l-7 19" stroke="rgba(255,255,255,.68)" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    clock: `<circle cx="50" cy="39" r="24" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.58)" stroke-width="4"/><path d="M50 24v16l12 8" stroke="rgba(255,255,255,.72)" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    umbrella: `<path d="M18 40c10-23 54-23 64 0z" fill="rgba(255,255,255,.24)" stroke="rgba(255,255,255,.62)" stroke-width="3"/><path d="M50 40v21c0 8 12 8 12 0" stroke="rgba(255,255,255,.68)" stroke-width="4" fill="none"/>`,
    paper: `<path d="M24 16h45l8 10v38H24z" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><path d="M34 32h30M34 43h24M34 54h32" stroke="rgba(255,255,255,.64)" stroke-width="4"/>`,
    ballot: `<rect x="22" y="34" width="56" height="29" rx="5" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><path d="M39 34l22-18 11 13-21 17zM37 47h26" stroke="rgba(255,255,255,.7)" stroke-width="4" fill="none"/>`,
    gavel: `<path d="M34 23l15-10 22 28-15 10zM25 54l23-18M55 58h28" stroke="rgba(255,255,255,.68)" stroke-width="6" stroke-linecap="round" fill="none"/>`,
    split: `<path d="M50 12v52" stroke="rgba(255,255,255,.58)" stroke-width="4" stroke-dasharray="6 5"/><path d="M23 45c10-18 24-19 31-2M46 45c10-18 24-19 31-2" stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none"/>`,
    bridge: `<path d="M14 55h72M20 55c10-28 50-28 60 0" stroke="rgba(255,255,255,.64)" stroke-width="4" fill="none"/><path d="M32 42h36" stroke="rgba(255,255,255,.44)" stroke-width="4"/>`,
    fire: `<path d="M50 62c-17-9-8-24 0-34 4 10 16 12 12 27 8-6 9-15 5-24 18 18 9 34-17 31z" fill="rgba(255,255,255,.28)" stroke="rgba(255,255,255,.62)" stroke-width="3"/>`,
    rocket: `<path d="M52 12c16 12 17 31 5 48H43c-12-17-11-36 5-48z" fill="rgba(255,255,255,.22)" stroke="rgba(255,255,255,.62)" stroke-width="3"/><circle cx="50" cy="31" r="6" fill="rgba(255,255,255,.5)"/><path d="M43 60l-9 8M57 60l9 8" stroke="rgba(255,255,255,.58)" stroke-width="4"/>`,
    queue: `<path d="M23 56h54" stroke="rgba(255,255,255,.58)" stroke-width="4"/><circle cx="30" cy="31" r="7" fill="rgba(255,255,255,.3)"/><circle cx="50" cy="31" r="7" fill="rgba(255,255,255,.3)"/><circle cx="70" cy="31" r="7" fill="rgba(255,255,255,.3)"/><path d="M30 38v17M50 38v17M70 38v17" stroke="rgba(255,255,255,.56)" stroke-width="4"/>`,
    hammer: `<path d="M30 22h34l9 10H38zM52 31l-25 31" stroke="rgba(255,255,255,.68)" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M69 50c-12 12-31 8-37-7 12 7 25 5 37-7" fill="rgba(255,255,255,.2)"/>`,
    barbed: `<path d="M18 32h64M18 48h64" stroke="rgba(255,255,255,.56)" stroke-width="4"/><path d="M28 24v32M50 24v32M72 24v32" stroke="rgba(255,255,255,.34)" stroke-width="3"/><path d="M22 28l8 8M43 44l8 8M66 28l8 8" stroke="rgba(255,255,255,.66)" stroke-width="3"/>`,
    capitol: `<path d="M20 61h60M27 55h46M31 55V35h38v20M37 35c4-14 22-14 26 0" stroke="rgba(255,255,255,.66)" stroke-width="4" fill="none"/><path d="M28 35h44" stroke="rgba(255,255,255,.46)" stroke-width="5"/>`,
    money: `<rect x="20" y="24" width="60" height="34" rx="6" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><circle cx="50" cy="41" r="10" fill="rgba(255,255,255,.24)"/>${commonText}`,
    map: `<path d="M21 22l18-6 21 8 19-6v40l-19 6-21-8-18 6z" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><path d="M39 16v40M60 24v40" stroke="rgba(255,255,255,.42)" stroke-width="3"/>`,
    seal: `<rect x="24" y="20" width="52" height="38" rx="8" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.6)" stroke-width="3"/><path d="M25 29h50M25 49h50" stroke="rgba(255,255,255,.55)" stroke-width="4"/>${commonText}`,
    file: `<path d="M26 14h34l14 14v38H26z" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><path d="M60 14v15h14M36 38h28M36 50h22" stroke="rgba(255,255,255,.58)" stroke-width="4"/>`,
    box: `<path d="M22 26h56v37H22zM30 18h40l8 8H22z" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><path d="M38 42h24" stroke="rgba(255,255,255,.62)" stroke-width="5"/>`,
    horn: `<path d="M23 44h13l29-17v34L36 44M23 44v10h13" fill="rgba(255,255,255,.22)" stroke="rgba(255,255,255,.62)" stroke-width="3"/><path d="M70 33c7 5 7 17 0 22" stroke="rgba(255,255,255,.56)" stroke-width="4" fill="none"/>`,
    camera: `<rect x="21" y="25" width="58" height="36" rx="7" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><circle cx="50" cy="43" r="11" fill="rgba(255,255,255,.26)" stroke="rgba(255,255,255,.62)" stroke-width="3"/><path d="M35 25l6-8h18l6 8" stroke="rgba(255,255,255,.58)" stroke-width="4" fill="none"/>`,
    mask: `<path d="M22 34c13-13 43-13 56 0v13c-13 13-43 13-56 0z" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><path d="M34 42h32M34 50h32" stroke="rgba(255,255,255,.58)" stroke-width="3"/>`,
    chives: `<path d="M30 62c2-23 0-33-8-48M43 62c1-25 5-36 1-50M57 62c-1-22 4-34 14-47M70 62c-1-18 5-27 14-36" stroke="rgba(255,255,255,.68)" stroke-width="4" fill="none"/>`,
    ship: `<path d="M20 47h60l-9 15H30z" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.58)" stroke-width="3"/><path d="M50 18v29M50 20l24 19H50z" stroke="rgba(255,255,255,.62)" stroke-width="4" fill="none"/>`,
    glasses: `<circle cx="36" cy="39" r="13" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.68)" stroke-width="4"/><circle cx="64" cy="39" r="13" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.68)" stroke-width="4"/><path d="M49 39h2" stroke="rgba(255,255,255,.7)" stroke-width="5"/>`,
    mic: `<rect x="41" y="15" width="18" height="31" rx="9" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.62)" stroke-width="3"/><path d="M32 36c0 14 36 14 36 0M50 50v13M38 63h24" stroke="rgba(255,255,255,.62)" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    assembly: `<path d="M16 62h68M23 55h54M28 55V31h44v24M20 31h60l-7-10H27z" stroke="rgba(255,255,255,.62)" stroke-width="4" fill="rgba(255,255,255,.14)"/><path d="M36 36v18M48 36v18M60 36v18" stroke="rgba(255,255,255,.5)" stroke-width="3"/><path d="M34 21c8-9 24-9 32 0" stroke="rgba(255,255,255,.5)" stroke-width="3" fill="none"/>`,
    gatehouse: `<path d="M18 62h64M24 55V33h52v22M28 33l8-14h28l8 14" stroke="rgba(255,255,255,.64)" stroke-width="4" fill="rgba(255,255,255,.14)"/><path d="M34 55V42h10v13M56 55V42h10v13M42 28h16" stroke="rgba(255,255,255,.56)" stroke-width="3"/><circle cx="50" cy="24" r="4" fill="rgba(255,255,255,.5)"/>`,
    monument: `<path d="M50 14l11 16H39zM43 30h14l5 24H38zM30 62h40M35 54h30" stroke="rgba(255,255,255,.64)" stroke-width="4" fill="rgba(255,255,255,.14)"/><path d="M50 34v16" stroke="rgba(255,255,255,.55)" stroke-width="3"/>`,
    museum: `<path d="M17 61h66M24 53h52M28 53V29h44v24M22 29l28-13 28 13" stroke="rgba(255,255,255,.64)" stroke-width="4" fill="rgba(255,255,255,.13)"/><path d="M36 35v17M47 35v17M58 35v17M33 24h34" stroke="rgba(255,255,255,.52)" stroke-width="3"/>`,
    court: `<path d="M16 62h68M23 55h54M27 55V35h46v20M19 35l31-17 31 17" stroke="rgba(255,255,255,.65)" stroke-width="4" fill="rgba(255,255,255,.12)"/><path d="M35 38v16M45 38v16M55 38v16M65 38v16" stroke="rgba(255,255,255,.55)" stroke-width="3"/>`,
    memorial: `<path d="M21 62h58M27 55h46M31 55V34h38v21M50 16c14 9 18 17 18 18H32c0-1 4-9 18-18z" stroke="rgba(255,255,255,.63)" stroke-width="4" fill="rgba(255,255,255,.13)"/><path d="M38 44h24M50 34v21" stroke="rgba(255,255,255,.52)" stroke-width="3"/>`,
    towerClose: `<path d="M47 14h6l9 48H38z" stroke="rgba(255,255,255,.64)" stroke-width="4" fill="rgba(255,255,255,.14)"/><path d="M35 33h30M32 47h36M27 62h46" stroke="rgba(255,255,255,.54)" stroke-width="3"/><circle cx="50" cy="25" r="5" fill="rgba(255,255,255,.34)"/>`,
    mausoleum: `<path d="M18 60h64M26 52h48M31 52V35h38v17M24 35h52l-8-12H32z" stroke="rgba(255,255,255,.63)" stroke-width="4" fill="rgba(255,255,255,.13)"/><path d="M38 40h24M43 23v-8h14v8" stroke="rgba(255,255,255,.52)" stroke-width="3"/>`,
    redWall: `<path d="M15 60h70V24H15z" fill="rgba(255,255,255,.13)" stroke="rgba(255,255,255,.6)" stroke-width="4"/><path d="M15 36h70M15 48h70M27 24v12M50 24v12M73 24v12M38 36v12M62 36v12M27 48v12M50 48v12M73 48v12" stroke="rgba(255,255,255,.42)" stroke-width="3"/><path d="M19 24c11-11 51-11 62 0" stroke="rgba(255,255,255,.52)" stroke-width="4" fill="none"/>`,
    glassHall: `<path d="M19 61h62M25 55V25h50v30" stroke="rgba(255,255,255,.62)" stroke-width="4" fill="rgba(255,255,255,.1)"/><path d="M25 36h50M25 47h50M37 25v30M50 25v30M63 25v30" stroke="rgba(255,255,255,.36)" stroke-width="3"/><path d="M25 25l25-10 25 10" stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none"/>`,
    dataCenter: `<rect x="22" y="18" width="56" height="44" rx="4" fill="rgba(255,255,255,.13)" stroke="rgba(255,255,255,.6)" stroke-width="4"/><path d="M33 28h34M33 39h34M33 50h34" stroke="rgba(255,255,255,.54)" stroke-width="3"/><circle cx="36" cy="28" r="2" fill="rgba(255,255,255,.8)"/><circle cx="36" cy="39" r="2" fill="rgba(255,255,255,.8)"/><circle cx="36" cy="50" r="2" fill="rgba(255,255,255,.8)"/>`,
    checkpoint: `<path d="M18 58h64M24 58V31h52v27M24 31l26-14 26 14" stroke="rgba(255,255,255,.63)" stroke-width="4" fill="rgba(255,255,255,.13)"/><path d="M35 58V42h30v16M39 42l22 16M61 42 39 58" stroke="rgba(255,255,255,.5)" stroke-width="3"/>`,
    streetBlock: `<path d="M17 58h66M23 49h54M27 49V31h18v18M55 49V25h18v24" stroke="rgba(255,255,255,.58)" stroke-width="4" fill="rgba(255,255,255,.12)"/><path d="M20 38h60M32 31v18M64 25v24" stroke="rgba(255,255,255,.38)" stroke-width="3"/><path d="M28 60l48-34" stroke="rgba(255,255,255,.34)" stroke-width="5"/>`,
    factoryStack: `<path d="M18 60h64M24 60V39l16 8V35l17 9V27h15v33" stroke="rgba(255,255,255,.62)" stroke-width="4" fill="rgba(255,255,255,.13)"/><path d="M63 18c5-5 13-1 13 6M47 26c4-5 11-2 12 4" stroke="rgba(255,255,255,.42)" stroke-width="3" fill="none"/>`,
    island: `<path d="M22 52c10-20 44-28 58-7-10 18-39 23-58 7z" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.62)" stroke-width="4"/><path d="M36 45c9-7 20-9 31-4M50 29v31" stroke="rgba(255,255,255,.48)" stroke-width="3" fill="none"/><circle cx="34" cy="28" r="5" fill="rgba(255,255,255,.28)"/>`,
    bridgeDetail: `<path d="M14 58h72M19 58c9-28 53-28 62 0M28 46h44M35 36h30" stroke="rgba(255,255,255,.63)" stroke-width="4" fill="none"/><path d="M28 58V46M72 58V46M50 58V36" stroke="rgba(255,255,255,.46)" stroke-width="3"/>`,
    skyline: `<path d="M15 60h70M22 60V33h12v27M40 60V22h14v38M61 60V29h17v31" stroke="rgba(255,255,255,.6)" stroke-width="4" fill="rgba(255,255,255,.12)"/><path d="M27 40h4M45 31h4M66 38h7M45 43h4M66 49h7" stroke="rgba(255,255,255,.48)" stroke-width="3"/>`,
    rostrum: `<path d="M17 61h66M24 55V34h52v21M29 34l10-15h22l10 15" stroke="rgba(255,255,255,.64)" stroke-width="4" fill="rgba(255,255,255,.13)"/><path d="M34 55V43h9v12M57 55V43h9v12M40 28h20" stroke="rgba(255,255,255,.52)" stroke-width="3"/><circle cx="50" cy="25" r="4" fill="rgba(255,255,255,.34)"/>`
  };
  return scenes[scene] || `${commonText}<circle cx="50" cy="38" r="26" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.48)" stroke-width="4"/>`;
}

function cardImageUrl(art) {
  const meta = getCardVariantMeta(art);
  const variantA = art.variantA || meta.palette[0];
  const variantB = art.variantB || meta.palette[1];
  const key = `${art.scene}|${art.glyph}|${art.a}|${art.b}|${meta.seed}`;
  if (CARD_ART_CACHE.has(key)) return CARD_ART_CACHE.get(key);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 76"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${svgEscape(art.a)}"/><stop offset="1" stop-color="${svgEscape(art.b)}"/></linearGradient><linearGradient id="v" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(${meta.angle} .5 .5)"><stop offset="0" stop-color="${svgEscape(variantA)}" stop-opacity=".7"/><stop offset="1" stop-color="${svgEscape(variantB)}" stop-opacity=".48"/></linearGradient><radialGradient id="r" cx=".22" cy=".18" r=".7"><stop offset="0" stop-color="rgba(255,255,255,.32)"/><stop offset="1" stop-color="rgba(255,255,255,0)"/></radialGradient></defs><rect width="100" height="76" rx="10" fill="url(#g)"/><rect width="100" height="76" rx="10" fill="url(#v)" opacity=".34"/><rect width="100" height="76" rx="10" fill="url(#r)"/><path d="M4 8c22 10 46 10 92 0M7 68c28-8 57-8 86 0" stroke="rgba(255,255,255,.14)" stroke-width="3" fill="none"/>${variantSvgLayer(meta, art.glyph)}${sceneSvg(art.scene, art.glyph)}</svg>`;
  const value = `url(data:image/svg+xml,${encodeURIComponent(svg)})`;
  CARD_ART_CACHE.set(key, value);
  return value;
}

function cardVariantOverlayUrl(art) {
  const meta = getCardVariantMeta(art);
  const key = `overlay|${meta.seed}|${art?.glyph || ""}`;
  if (CARD_ART_CACHE.has(key)) return CARD_ART_CACHE.get(key);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 76"><rect width="100" height="76" fill="rgba(0,0,0,0)"/>${variantSvgLayer(meta, art?.glyph || "")}<path d="M0 0h100v76H0z" fill="none" stroke="rgba(255,255,255,.16)" stroke-width="2"/></svg>`;
  const value = `url(data:image/svg+xml,${encodeURIComponent(svg)})`;
  CARD_ART_CACHE.set(key, value);
  return value;
}

function compactLabel(value, limit = state.lang === "en" ? 14 : 6) {
  const text = String(value || "").replace(/\s+/g, state.lang === "en" ? " " : "").trim();
  if (!text) return "";
  return text.length > limit ? text.slice(0, limit) : text;
}

function pushUnique(list, value, limit = 28) {
  const clean = String(value || "").replace(/[“”"'\[\]{}()（）:：;；,.，。!?！？、]/g, " ").replace(/\s+/g, " ").trim();
  const label = compactLabel(clean);
  if (!label || label.length < 2) return;
  if (!list.includes(label)) list.push(label);
  if (list.length > limit) list.length = limit;
}

function collectContextParts(item) {
  const override = CONTEXT_OVERRIDES[item.en];
  const lang = state.lang;
  if (override) return override[lang] || override.en || override.cn || [];
  const context = lang === "tw" ? item.contextTw : lang === "cn" ? item.contextCn : item.contextEn;
  return context ? [context] : [];
}

function getForbiddenAnswerParts(item = state.entry) {
  const values = new Set();
  [item.tw, item.cn, item.en].forEach((term) => {
    const compact = String(term || "").replace(/\s+/g, "");
    String(term || "")
      .split(/[\s/-]+/)
      .filter(Boolean)
      .forEach((part) => values.add(part.toLowerCase()));
    tokenize(term).forEach((part) => values.add(String(part).toLowerCase()));
    values.add(compact.toLowerCase());
    for (let size = 2; size <= Math.min(4, compact.length); size += 1) {
      for (let index = 0; index <= compact.length - size; index += 1) {
        values.add(compact.slice(index, index + size).toLowerCase());
      }
    }
  });
  return [...values].filter((part) => part.length >= 2);
}

function containsForbiddenAnswer(label, forbidden) {
  const normalized = String(label || "").replace(/\s+/g, "").toLowerCase();
  return forbidden.some((part) => normalized.includes(part.replace(/\s+/g, "").toLowerCase()));
}

function extractEvidenceLabels(item = state.entry) {
  const labels = [];
  const lang = state.lang;
  const forbidden = getForbiddenAnswerParts(item);
  const clue = getClue(item);
  const contextParts = collectContextParts(item);
  const year = item.year ? String(item.year).match(/\d{4}/)?.[0] : "";
  if (year) pushUnique(labels, year, 16);
  if (lang === "en") {
    [clue, ...contextParts].join(" ").match(/[A-Za-z][A-Za-z-]{3,}/g)?.forEach((word) => {
      const lower = word.toLowerCase();
      if (!EN_STOP_WORDS.has(lower) && !containsForbiddenAnswer(word, forbidden)) pushUnique(labels, word, 24);
    });
  } else {
    const quoted = [clue, ...contextParts].join(" ").match(/[「“][^」”]{2,8}[」”]/g) || [];
    quoted.forEach((text) => {
      const label = text.replace(/[「」“”]/g, "");
      if (!containsForbiddenAnswer(label, forbidden)) pushUnique(labels, label, 24);
    });
    [clue, ...contextParts].forEach((part) => {
      String(part)
        .split(/[，。；：、,.!?！？\s]/)
        .map((piece) => piece.replace(CJK_STOP_CHARS, "").trim())
        .filter((piece) => piece.length >= 2)
        .forEach((piece) => {
          const head = piece.slice(0, piece.length > 6 ? 6 : piece.length);
          const tail = piece.slice(-6);
          if (!containsForbiddenAnswer(head, forbidden)) pushUnique(labels, head, 24);
          if (piece.length > 6 && !containsForbiddenAnswer(tail, forbidden)) pushUnique(labels, tail, 24);
        });
    });
  }
  const fallback = getMergeTileSet().map((tile) => tile[lang] || tile.en);
  fallback.forEach((label) => pushUnique(labels, label, 24));
  return labels;
}

function labelsFromText(text, forbidden, limit = 5) {
  const labels = [];
  const lang = state.lang;
  if (lang === "en") {
    String(text || "").match(/[A-Za-z][A-Za-z-]{3,}/g)?.forEach((word) => {
      const lower = word.toLowerCase();
      if (!EN_STOP_WORDS.has(lower) && !containsForbiddenAnswer(word, forbidden)) pushUnique(labels, word, limit);
    });
  } else {
    String(text || "")
      .split(/[，。；：、,.!?！？\s]/)
      .map((piece) => piece.replace(CJK_STOP_CHARS, "").trim())
      .filter((piece) => piece.length >= 2)
      .forEach((piece) => {
        const label = compactLabel(piece, piece.length > 5 ? 5 : piece.length);
        if (!containsForbiddenAnswer(label, forbidden)) pushUnique(labels, label, limit);
      });
  }
  return labels;
}

function makeCell(rank, row, col, id = "", extra = {}) {
  const cell = {
    id: id || `cell-${state.level}-${state.cellSerial}`,
    rank,
    row,
    col,
    ...extra
  };
  if (!id) state.cellSerial += 1;
  return cell;
}

function getUnitPoolFromText(text) {
  if (state.lang === "en") {
    return Array.from(String(text || "").replace(/[^A-Za-z0-9]/g, "").toUpperCase());
  }
  return Array.from(String(text || "").replace(/[^\u3400-\u9fffA-Za-z0-9]/g, ""));
}

function buildSheepDecoys(item = state.entry) {
  const sourceText = [
    getClue(item),
    ...collectContextParts(item),
    ...getMergeTileSet().map((tile) => tile[state.lang] || tile.en),
    ...(TRACE_DECOYS[state.lang] || TRACE_DECOYS.en)
  ].join(" ");
  const answerSet = new Set(state.answerUnits);
  const pool = getUnitPoolFromText(sourceText).filter(Boolean);
  const fallback = state.lang === "en"
    ? Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    : Array.from(`${EXTRA_DECOYS[state.lang]}${(TRACE_DECOYS[state.lang] || []).join("")}`);
  const unique = [...new Set((pool.length ? pool : fallback).concat(fallback))].filter((unit) => !answerSet.has(unit));
  return unique.length ? unique : fallback.filter((unit) => !answerSet.has(unit));
}

function getTargetTileGroupCount(unitCount, pressure) {
  const answerGroups = Math.max(1, unitCount);
  const decoyGroups = Math.max(7, Math.min(26, 5 + pressure * 4 + Math.ceil(unitCount / 2)));
  return Math.max(answerGroups + 3, Math.min(39, answerGroups + decoyGroups));
}

function difficultyFromTileGroups(groupCount) {
  if (groupCount <= 17) return 1;
  if (groupCount <= 23) return 2;
  if (groupCount <= 30) return 3;
  if (groupCount <= 38) return 4;
  return 5;
}

function computeTimeFromTileGroups(groupCount, difficulty, mode, lap, random) {
  const tileCount = groupCount * 3;
  const modePressure = mode === "purge" ? 18 : mode === "pressure" ? 12 : mode === "echo" ? 6 : 0;
  const lapPressure = Math.min(28, lap * 6);
  const jitter = Math.floor(random() * 19) - 9;
  return Math.max(120, Math.round(72 + tileCount * 3.2 + difficulty * 16 - modePressure - lapPressure + jitter));
}

function countAnswerUnits(units = state.answerUnits) {
  return units.reduce((map, unit) => {
    map[unit] = (map[unit] || 0) + 1;
    return map;
  }, {});
}

function getAnswerClearCount(unit) {
  return state.clearedAnswerCounts[unit] || 0;
}

function getClearedAnswerTotal() {
  return Object.values(state.clearedAnswerCounts).reduce((sum, value) => sum + value, 0);
}

function isAnswerUnitRevealed(index) {
  const unit = state.answerUnits[index];
  const occurrence = state.answerUnits.slice(0, index + 1).filter((value) => value === unit).length;
  return getAnswerClearCount(unit) >= occurrence;
}

function makeSheepTile(group, layer, x, y) {
  const row = Math.round(y * 2);
  const col = Math.round(x * 2);
  const visualArt = group.visualArt ? { ...group.visualArt } : null;
  return makeCell(0, row, col, "", {
    label: group.label,
    displayLabel: group.displayLabel || group.label,
    groupKey: group.groupKey,
    groupIndex: group.groupIndex,
    answer: group.answer,
    visualArt,
    layer,
    x,
    y,
    status: "board",
    removed: false
  });
}

function resolveCardAsset(assetKey) {
  if (!assetKey) return "";
  return REAL_CARD_ASSETS[assetKey] || assetKey;
}

function cardArtImageUrl(art) {
  const asset = resolveCardAsset(art?.asset);
  if (asset) return `url(${asset})`;
  return cardImageUrl(art);
}

function getEntryPhotoAsset(item = state.entry) {
  const direct = ENTRY_ASSET_KEYS[item?.en];
  if (direct) return direct;
  const categoryAsset = CATEGORY_ASSET_KEYS[item?.category];
  if (categoryAsset) return categoryAsset;
  const tags = ENTRY_TAGS[item?.en] || [];
  return ["xi", "mao", "deng", "jiang"].find((tag) => tags.includes(tag)) || "";
}

function getEntryArtProfile(item = state.entry) {
  const tags = ENTRY_TAGS[item?.en] || [];
  const leaderTag = ["xi", "mao", "deng", "jiang"].find((tag) => tags.includes(tag));
  if (leaderTag) return LEADER_ART_PROFILES[leaderTag];
  return CARD_ART_PROFILES[item?.category] || CARD_ART_PROFILES.ccp;
}

function getTileArtProfile(tile) {
  const entryAsset = getEntryPhotoAsset();
  if (tile?.visualArt) {
    const base = getEntryArtProfile();
    const variantKey = tile.visualArt.variantKey || `${state.entry?.en || "entry"}-${tile.groupKey || tile.label}`;
    const explicitAsset = Object.prototype.hasOwnProperty.call(tile.visualArt, "asset") ? tile.visualArt.asset : entryAsset;
    return {
      scene: "file",
      ...base,
      ...tile.visualArt,
      a: tile.visualArt.a || base.a,
      b: tile.visualArt.b || base.b,
      variantKey,
      asset: pickAssetCandidate(tile.visualArt.assetCandidates, variantKey, explicitAsset)
    };
  }
  const variantKey = `${state.entry?.en || "entry"}-${tile?.groupKey || tile?.label || "plain"}`;
  return {
    scene: "file",
    ...getEntryArtProfile(),
    glyph: getTileDisplayLabel(tile).slice(0, 1) || getEntryArtProfile().glyph,
    variantKey,
    asset: pickAssetCandidate(getRelatedPhotoAssets(state.entry), variantKey, entryAsset)
  };
}

function getTileDisplayLabel(tile) {
  return tile?.displayLabel || tile?.label || "";
}

function getArtVisualTuning(art) {
  const assetKey = art?.asset && REAL_CARD_ASSETS[art.asset] ? art.asset : "";
  const sceneKey = art?.scene || "";
  const exact = ASSET_VISUAL_TUNING[assetKey] || SCENE_VISUAL_TUNING[sceneKey];
  const random = mulberry32(hashString(`${assetKey}-${sceneKey}-${getCardVariantSeed(art)}-${art?.glyph || ""}`));
  const baseFocus = exact?.focus?.match(/(\d+)%\s+(\d+)%/);
  const baseX = baseFocus ? Number(baseFocus[1]) : 50;
  const baseY = baseFocus ? Number(baseFocus[2]) : 42;
  const baseZoom = Number(String(exact?.zoom || "").match(/\d+/)?.[0]) || 158;
  const focusX = Math.max(24, Math.min(76, baseX + Math.round(random() * 22 - 11)));
  const focusY = Math.max(18, Math.min(74, baseY + Math.round(random() * 22 - 11)));
  const zoom = Math.max(136, Math.min(206, baseZoom + Math.round(random() * 28 - 10)));
  const shade = exact?.shade || (random() > 0.5 ? "rgba(5, 6, 6, 0.64)" : "rgba(10, 8, 7, 0.64)");
  return {
    focus: `${focusX}% ${focusY}%`,
    zoom: `${zoom}%`,
    shade
  };
}

function tileStyle(tile) {
  const art = getTileArtProfile(tile);
  const tuning = getArtVisualTuning(art);
  const identity = getTileIdentityMeta(art);
  const random = mulberry32(hashString(`${tile.id}-${tile.groupIndex}-${tile.x}-${tile.y}-${tile.layer}`));
  const jitterX = (random() - 0.5) * (tile.layer >= 2 ? 3.2 : 4.8);
  const jitterY = (random() - 0.5) * (tile.layer >= 2 ? 3.6 : 5.2);
  const left = Math.max(2, Math.min(88, 4 + tile.x * 12.5 + jitterX));
  const top = Math.max(3, Math.min(86, 5 + tile.y * 13.5 + jitterY));
  const rot = (random() * 12 - 6).toFixed(2);
  const tiltX = (3 + random() * 5).toFixed(2);
  const tiltY = (-5 + random() * 4).toFixed(2);
  const scale = (0.96 + random() * 0.08).toFixed(3);
  const depth = tile.layer * 14;
  const lockedDepth = tile.layer * 9;
  const shadowLift = 4 + tile.layer * 3;
  const shadowDrop = 12 + tile.layer * 5;
  return `--left:${left}%;--top:${top}%;--depth:${depth}px;--locked-depth:${lockedDepth}px;--shadow-lift:${shadowLift}px;--shadow-drop:${shadowDrop}px;--rot:${rot}deg;--tilt-x:${tiltX}deg;--tilt-y:${tiltY}deg;--tile-scale:${scale};--art-a:${art.a};--art-b:${art.b};--art-img:${cardArtImageUrl(art)};--art-overlay:${cardVariantOverlayUrl(art)};--art-focus:${tuning.focus};--art-zoom:${tuning.zoom};--art-shade:${tuning.shade};--tile-accent:${identity.accent};--tile-accent-2:${identity.accent2};--tile-marker:${identity.marker};--tile-glow:${identity.glow};z-index:${10 + tile.layer};`;
}

function getLayerPositions(layer) {
  const start = layer * 0.5;
  const endX = 6 - layer * 0.5;
  const endY = 5 - layer * 0.5;
  const positions = [];
  for (let y = start; y <= endY; y += 1) {
    for (let x = start; x <= endX; x += 1) {
      positions.push({ x, y, layer });
    }
  }
  return positions;
}

function rectanglesOverlap(a, b) {
  const size = 1.05;
  return Math.abs(a.x - b.x) < size && Math.abs(a.y - b.y) < size;
}

function isTileAvailable(tile) {
  if (!tile || tile.status !== "board") return false;
  return !state.grid.some((other) => other.status === "board" && other.layer > tile.layer && rectanglesOverlap(tile, other));
}

function getGeneratedCardScene(seed, answer = false) {
  const answerScenes = ["file", "seal", "gatehouse", "monument", "rostrum", "assembly", "museum", "redWall"];
  const decoyScenes = [
    "file", "seal", "box", "map", "screen", "paper", "camera", "wall", "dataCenter", "checkpoint",
    "streetBlock", "glassHall", "skyline", "bridgeDetail", "court", "memorial", "towerClose"
  ];
  const pool = answer ? answerScenes : decoyScenes;
  return pool[Math.abs(hashString(seed)) % pool.length];
}

function makeGroupVisualArt(label, groupKey, groupIndex, answer = false, sourceCard = null) {
  const seed = `${state.entry?.en || "entry"}|${state.lang}|${groupKey}|${groupIndex}|${answer ? "answer" : "decoy"}`;
  const random = mulberry32(hashString(seed));
  const palette = CARD_VARIANT_PALETTES[Math.floor(random() * CARD_VARIANT_PALETTES.length)] || CARD_VARIANT_PALETTES[0];
  const base = getEntryArtProfile();
  const glyph = String(label || sourceCard?.glyph || base.glyph || "檔").slice(0, state.lang === "en" ? 2 : 1).toUpperCase();
  const entryCandidates = getRelatedPhotoAssets(state.entry);
  const labelCandidates = getLabelPhotoAssets(label || sourceCard?.label || sourceCard?.en);
  const generatedCandidates = answer ? entryCandidates : (labelCandidates.length ? labelCandidates : entryCandidates);
  const generated = {
    key: `${answer ? "answer" : "text"}-${groupIndex}`,
    scene: getGeneratedCardScene(seed, answer),
    glyph,
    a: palette[0] || base.a,
    b: palette[1] || base.b,
    variantA: palette[0] || base.a,
    variantB: palette[1] || base.b,
    variantKey: seed,
    asset: answer ? getEntryPhotoAsset() : (random() > 0.72 ? getEntryPhotoAsset() : ""),
    assetCandidates: generatedCandidates
  };
  if (!sourceCard) return generated;
  const sourceAsset = sourceCard.asset || getEntryPhotoAsset();
  const sourceCandidates = uniqueAssetKeys([sourceAsset, ...(sourceCard.assetCandidates || []), ...labelCandidates]);
  return {
    ...generated,
    ...sourceCard,
    glyph: sourceCard.glyph || generated.glyph,
    a: sourceCard.a || generated.a,
    b: sourceCard.b || generated.b,
    variantA: generated.variantA,
    variantB: generated.variantB,
    variantKey: seed,
    asset: sourceAsset,
    assetCandidates: sourceCandidates
  };
}

function getDecoyImageCard(index) {
  const tags = ENTRY_TAGS[state.entry?.en] || [];
  const architectureKeys = getArchitectureCardKeys(tags, state.entry?.category);
  const preferred = CARD_IMAGE_LIBRARY.filter((card) => {
    if (architectureKeys.has(card.key)) return true;
    if (tags.includes("xi")) return ["red-code", "pcr", "bun", "crown", "wheat", "wall", "hot-search", "data", "fist", "tower", "seal", "camera", "mask", "party-badge", "red-flag", "prc-emblem", "tiananmen-gate"].includes(card.key);
    if (tags.includes("mao")) return ["red-book", "sun", "wheat", "fist", "bread", "ship", "seal", "file", "party-badge", "red-flag", "red-guards-rally", "prc-emblem"].includes(card.key);
    if (tags.includes("deng")) return ["tank", "square", "ship", "land", "data", "seal", "file", "tiananmen-gate"].includes(card.key);
    if (tags.includes("jiang")) return ["glasses", "microphone", "tea", "apple", "ship", "seal", "file"].includes(card.key);
    if (state.entry?.category === "hongKong") return ["umbrella", "apple", "hot-search", "deleted", "camera", "seal"].includes(card.key);
    if (state.entry?.category === "taiwan") return ["ballot", "brawl", "map", "apple", "microphone", "kmt-ccp", "roc-flag", "roc-emblem", "chiang-card", "sun-card"].includes(card.key);
    if (state.entry?.category === "kmtCcp") return ["kmt-ccp", "chiang-card", "sun-card", "roc-flag", "roc-emblem", "red-flag", "tiananmen-gate"].includes(card.key);
    if (state.entry?.category === "soviet") return ["hammer", "bread", "gulag", "capitol", "sun", "stalin-card", "wall-card"].includes(card.key);
    if (state.entry?.category === "northKorea") return ["kim", "kim-jong-il-card", "rocket", "bread", "seal", "camera", "sun"].includes(card.key);
    if (state.entry?.category === "us") return ["detention", "capitol-card", "trump-card", "capitol", "dollar", "map", "brawl", "tv", "apple"].includes(card.key);
    if (state.entry?.category === "ww2") return ["bridge", "bombing", "apple", "camera"].includes(card.key);
    if (state.entry?.category === "current") return ["tower", "data", "delivery", "996", "red-code", "pcr", "mask", "camera"].includes(card.key);
    if (state.entry?.category === "ccp") return ["party-badge", "red-flag", "prc-emblem", "tiananmen-gate", "red-code", "pcr", "camera", "seal", "file"].includes(card.key);
    if (state.entry?.category === "ccpMetaphor") return ["party-badge", "red-flag", "prc-emblem", "tiananmen-gate", "hot-search", "deleted", "camera", "tea", "file"].includes(card.key);
    return false;
  });
  const architecturePreferred = CARD_IMAGE_LIBRARY.filter((card) => architectureKeys.has(card.key));
  const pool = [
    ...architecturePreferred,
    ...preferred.filter((card) => !architectureKeys.has(card.key)),
    ...CARD_IMAGE_LIBRARY.filter((card) => !architecturePreferred.includes(card) && !preferred.includes(card))
  ];
  const raw = pool[index % pool.length];
  const base = getEntryArtProfile();
  return {
    ...raw,
    label: raw[state.lang] || raw.en,
    a: index % 2 ? base.b : base.a,
    b: index % 2 ? base.a : base.b,
    asset: raw.asset || getEntryPhotoAsset(),
    assetCandidates: getCardAssetCandidates(raw, state.entry)
  };
}

function buildTileGroups(difficulty) {
  const answerCounts = countAnswerUnits();
  const groups = [];
  Object.entries(answerCounts).forEach(([unit, count], unitIndex) => {
    const visualArt = makeGroupVisualArt(unit, `answer-${unit}`, unitIndex, true);
    for (let index = 0; index < count; index += 1) {
      groups.push({ label: unit, displayLabel: unit, groupKey: unit, answer: true, visualArt });
    }
  });
  const decoys = buildSheepDecoys(state.entry);
  const targetGroupCount = state.tileGroupCount || getTargetTileGroupCount(state.answerUnits.length, difficulty);
  const decoyGroupCount = Math.max(3, targetGroupCount - groups.length);
  for (let index = 0; index < decoyGroupCount; index += 1) {
    const useImageCard = index % 3 !== 1;
    if (useImageCard) {
      const card = getDecoyImageCard(index);
      const groupKey = `image-${card.key}-${index}`;
      groups.push({
        label: card.label,
        displayLabel: card.label,
        groupKey,
        answer: false,
        visualArt: makeGroupVisualArt(card.label, groupKey, groups.length, false, card)
      });
    } else {
      const label = decoys[index % decoys.length] || (state.lang === "en" ? "X" : "檔");
      const groupKey = `decoy-${label}-${index}`;
      groups.push({
        label,
        displayLabel: label,
        groupKey,
        answer: false,
        visualArt: makeGroupVisualArt(label, groupKey, groups.length, false)
      });
    }
  }
  return groups.map((group, groupIndex) => ({
    ...group,
    groupIndex
  }));
}

function makeGrid(levelIndex, difficulty) {
  state.cellSerial = 0;
  const random = mulberry32(hashString(`sheep-${state.route}-${state.leaderMode}-${state.lang}-${state.entry.en}-${levelIndex}-${difficulty}`));
  const groups = buildTileGroups(difficulty).sort(() => random() - 0.5);
  const positionsByLayer = [0, 1, 2, 3].reduce((map, layer) => {
    map[layer] = getLayerPositions(layer).sort(() => random() - 0.5);
    return map;
  }, {});
  const layerSlots = [
    { layer: 3, groups: Math.min(5, groups.length) },
    { layer: 2, groups: Math.min(8, Math.max(0, groups.length - 5)) },
    { layer: 1, groups: Math.min(12, Math.max(0, groups.length - 13)) },
    { layer: 0, groups: Math.max(0, groups.length - 25) }
  ];
  const tiles = [];
  let groupCursor = 0;
  layerSlots.forEach(({ layer, groups: groupCount }) => {
    for (let count = 0; count < groupCount && groupCursor < groups.length; count += 1) {
      const group = groups[groupCursor];
      groupCursor += 1;
      for (let copy = 0; copy < 3; copy += 1) {
        const position = positionsByLayer[layer].shift() || getLayerPositions(layer)[copy];
        tiles.push(makeSheepTile(group, layer, position.x, position.y));
      }
    }
  });
  return tiles;
}

function computeDecryptGoal(units, difficulty, mode) {
  const unitWeight = state.lang === "en" ? units.length * 9 : units.length * 7;
  const modeBoost = mode === "purge" ? 38 : mode === "pressure" ? 28 : mode === "echo" ? 18 : 10;
  const leaderBoost = state.leaderMode === "all" ? 0 : 18;
  return 92 + difficulty * 25 + unitWeight + modeBoost + leaderBoost;
}

function updateRevealCount() {
  state.clearedAnswerTotal = getClearedAnswerTotal();
  state.revealedCount = Math.min(state.answerUnits.length, state.clearedAnswerTotal);
  state.decryptProgress = Math.round((state.revealedCount / Math.max(1, state.answerUnits.length)) * state.decryptGoal);
}

function allEvidenceComplete() {
  return state.grid.length > 0 && state.grid.every((tile) => tile.status === "cleared");
}

function getTrayTiles() {
  return state.tray.map((id) => getCellById(id)).filter(Boolean);
}

function getAvailableTiles() {
  return state.grid.filter((tile) => isTileAvailable(tile));
}

function findHintCell() {
  const available = getAvailableTiles();
  if (!available.length) return null;
  const trayCounts = getTrayTiles().reduce((map, tile) => {
    map[tile.groupKey] = (map[tile.groupKey] || 0) + 1;
    return map;
  }, {});
  const availableCounts = available.reduce((map, tile) => {
    map[tile.groupKey] = (map[tile.groupKey] || 0) + 1;
    return map;
  }, {});
  const readyGroup = Object.entries(availableCounts)
    .filter(([, count]) => count >= 3)
    .map(([groupKey]) => groupKey)
    .sort((a, b) => {
      const tileA = available.find((tile) => tile.groupKey === a);
      const tileB = available.find((tile) => tile.groupKey === b);
      return Number(tileB?.answer || false) - Number(tileA?.answer || false);
    })[0];
  return available.find((tile) => trayCounts[tile.groupKey] >= 2)
    || available.find((tile) => trayCounts[tile.groupKey] >= 1 && trayCounts[tile.groupKey] + availableCounts[tile.groupKey] >= 3)
    || available.find((tile) => tile.groupKey === readyGroup)
    || available
      .slice()
      .sort((a, b) => (availableCounts[b.groupKey] - availableCounts[a.groupKey]) || Number(b.answer) - Number(a.answer))[0]
    || available[0];
}

function getCellById(id) {
  return state.grid.find((cell) => cell && cell.id === id) || null;
}

function pushMatchBurst(matching, representative) {
  const averageX = matching.reduce((sum, tile) => sum + tile.x, 0) / matching.length;
  const averageY = matching.reduce((sum, tile) => sum + tile.y, 0) / matching.length;
  const art = getTileArtProfile(representative);
  const tuning = getArtVisualTuning(art);
  const id = `burst-${state.matchBurstSerial}`;
  state.matchBurstSerial += 1;
  state.matchBursts = state.matchBursts.slice(-2).concat({
    id,
    label: getTileDisplayLabel(representative),
    glyph: art.glyph,
    image: cardArtImageUrl(art),
    x: Math.max(8, Math.min(88, 4 + averageX * 12.5)),
    y: Math.max(8, Math.min(82, 5 + averageY * 13.5)),
    a: art.a,
    b: art.b,
    focus: tuning.focus,
    zoom: tuning.zoom
  });
  window.setTimeout(() => {
    state.matchBursts = state.matchBursts.filter((burst) => burst.id !== id);
    if (state.started && !state.modal) render();
  }, 1040);
}

function ensurePlayableGrid() {
  const broken = state.grid.some((tile) => !tile.groupKey || !tile.label);
  if (broken) {
    state.grid = makeGrid(state.level + Date.now(), state.difficulty);
    state.tray = [];
  }
}

function clearTrayTriple(groupKey) {
  const matching = getTrayTiles().filter((tile) => tile.groupKey === groupKey).slice(0, 3);
  if (matching.length < 3) return false;
  matching.forEach((tile) => {
    tile.status = "cleared";
  });
  const removed = new Set(matching.map((tile) => tile.id));
  state.tray = state.tray.filter((id) => !removed.has(id));
  const representative = matching[0];
  if (representative.answer) {
    const limits = countAnswerUnits();
    state.clearedAnswerCounts[representative.label] = Math.min(
      limits[representative.label] || 0,
      (state.clearedAnswerCounts[representative.label] || 0) + 1
    );
  }
  state.combo += 1;
  const displayLabel = getTileDisplayLabel(representative);
  state.lastEvidenceHits = [{ rank: state.combo, label: displayLabel }];
  pushMatchBurst(matching, representative);
  const answerBonus = representative.answer ? 38 : 0;
  state.score += 42 + state.combo * 8 + answerBonus;
  if (state.leaderMode === "jiang" && state.combo % 4 === 0) {
    state.timeLeft = Math.min(state.maxTime, state.timeLeft + 1.2);
  }
  if (state.leaderMode === "mao" && representative.answer) {
    state.timeLeft = Math.max(0, state.timeLeft - 0.8);
    state.score += 20;
  }
  updateRevealCount();
  return true;
}

function countsFromClearedTotal(total) {
  const counts = {};
  for (let index = 0; index < Math.min(total, state.answerUnits.length); index += 1) {
    const unit = state.answerUnits[index];
    counts[unit] = (counts[unit] || 0) + 1;
  }
  return counts;
}

function applyClearedAnswerCounts(counts) {
  state.clearedAnswerCounts = { ...counts };
  Object.entries(state.clearedAnswerCounts).forEach(([unit, count]) => {
    state.grid
      .filter((tile) => tile.answer && tile.label === unit)
      .slice(0, count * 3)
      .forEach((tile) => {
        tile.status = "cleared";
      });
  });
  updateRevealCount();
}

function rebuildSheepGridPreservingProgress(counts = state.clearedAnswerCounts) {
  state.tray = [];
  state.grid = makeGrid(state.level + Date.now(), state.difficulty);
  state.hintCellId = null;
  state.wrongCellId = null;
  applyClearedAnswerCounts(counts);
}

function parseYear(value) {
  const match = String(value || "").match(/\d{4}/);
  return match ? Number(match[0]) : 9999;
}

function getScopedBank() {
  const scoped = state.leaderMode === "all"
    ? WORD_BANK
    : WORD_BANK.filter((item) => {
      const tags = ENTRY_TAGS[item.en] || [];
      return tags.includes(state.leaderMode) || tags.includes("global");
    });
  return scoped.length ? scoped : WORD_BANK;
}

function getOrderedBank(route = state.route, lap = 0) {
  const bank = getScopedBank();
  return bank.map((item, index) => ({ item, index })).sort((a, b) => {
    if (route === "time") {
      return parseYear(a.item.year) - parseYear(b.item.year) || a.item.difficulty - b.item.difficulty || a.index - b.index;
    }
    if (route === "random") {
      return hashString(`${state.leaderMode}-${lap}-${a.item.en}`) - hashString(`${state.leaderMode}-${lap}-${b.item.en}`) || a.index - b.index;
    }
    return a.item.difficulty - b.item.difficulty || parseYear(a.item.year) - parseYear(b.item.year) || a.index - b.index;
  }).map((record) => record.item);
}

function getLevelEntry(levelIndex) {
  const bankSize = getScopedBank().length;
  const lap = Math.floor(levelIndex / Math.max(1, bankSize));
  const ordered = getOrderedBank(state.route, lap);
  return ordered[levelIndex % ordered.length];
}

function getActiveBankSize() {
  return getScopedBank().length;
}

function getLevelConfig(levelIndex) {
  const bankSize = getScopedBank().length;
  const lap = Math.floor(levelIndex / Math.max(1, bankSize));
  const ordered = getOrderedBank(state.route, lap);
  const item = ordered[levelIndex % ordered.length];
  const seed = hashString(`${state.route}-${item.en}-${levelIndex}`);
  const random = mulberry32(seed);
  const randomDifficulty = 1 + Math.floor(random() * 5);
  const pressureBase = state.route === "random"
    ? randomDifficulty
    : Math.round((randomDifficulty * 2 + item.difficulty) / 3);
  const pressure = Math.max(1, Math.min(5, pressureBase + Math.min(1, lap)));
  const units = tokenize(item[state.lang]);
  const groupCount = getTargetTileGroupCount(units.length, pressure);
  const difficulty = difficultyFromTileGroups(groupCount);
  const modePool = difficulty <= 2 ? ["blackout", "scramble", "echo"] : MODE_SEQUENCE;
  const mode = modePool[Math.floor(random() * modePool.length)];
  const maxTime = computeTimeFromTileGroups(groupCount, difficulty, mode, lap, random);
  const hintJitter = random() > 0.72 ? -1 : random() > 0.28 ? 0 : 1;
  const hints = Math.max(1, Math.min(5, 5 - difficulty + (mode === "blackout" ? 1 : 0) + hintJitter));
  return { item, difficulty, mode, maxTime, hints, lap, groupCount };
}

function setupLevel(levelIndex) {
  const config = getLevelConfig(levelIndex);
  state.entry = config.item;
  state.answerUnits = tokenize(getTerm(config.item));
  state.lastEvidenceHits = [];
  state.matchBursts = [];
  state.revealedCount = 0;
  state.decryptProgress = 0;
  state.difficulty = config.difficulty;
  state.mode = config.mode;
  state.decryptGoal = computeDecryptGoal(state.answerUnits, config.difficulty, config.mode);
  state.combo = 0;
  state.moves = 0;
  state.gridSize = 0;
  state.tray = [];
  state.tileGroupCount = config.groupCount;
  state.clearedAnswerCounts = {};
  state.clearedAnswerTotal = 0;
  state.grid = makeGrid(levelIndex, config.difficulty);
  state.maxTime = config.maxTime;
  state.timeLeft = config.maxTime;
  state.mistakes = 0;
  state.hintsLeft = config.hints;
  state.locked = false;
  state.modal = null;
  state.paused = false;
  state.pauseFact = null;
  state.wrongCellId = null;
  state.hintCellId = null;
  state.endlessLap = config.lap;
  ensurePlayableGrid();
  updateRevealCount();
}

function makePauseFact(item = state.entry) {
  const copy = getCopy();
  return {
    item,
    term: getTerm(item),
    clue: getClue(item),
    context: getContext(item),
    category: copy.categories[item.category] || "",
    year: item.year || ""
  };
}

function pickPauseFactItem() {
  const scoped = getScopedBank();
  const currentKey = state.entry?.en || "";
  const upcoming = Array.from({ length: Math.min(12, scoped.length) }, (_, index) => getLevelEntry(state.level + index + 1));
  const seen = new Set();
  const pool = [...upcoming, ...scoped].filter((item) => {
    if (!item || item.en === currentKey || seen.has(item.en)) return false;
    seen.add(item.en);
    return true;
  });
  if (!pool.length) return state.entry;
  return pool[Math.floor(Math.random() * pool.length)] || state.entry;
}

function createPauseFact() {
  return makePauseFact(pickPauseFactItem());
}

function pauseGame() {
  if (!state.started || state.locked || state.modal || state.paused) return;
  state.paused = true;
  state.pauseFact = createPauseFact();
  render();
}

function resumeGame() {
  if (!state.paused) return;
  state.paused = false;
  state.pauseFact = null;
  render();
}

function returnToStartMenu() {
  if (!state.started && !state.paused) return;
  stopTimer();
  state.started = false;
  state.paused = false;
  state.pauseFact = null;
  state.modal = null;
  state.locked = false;
  saveGame();
  render();
}

function refreshPauseFactLanguage() {
  if (state.paused && state.pauseFact?.item) {
    state.pauseFact = makePauseFact(state.pauseFact.item);
  }
}

function startTimer() {
  stopTimer();
  state.timer = window.setInterval(() => {
    if (!state.started || state.locked || state.modal || state.paused) return;
    state.timeLeft = Math.max(0, state.timeLeft - 0.2);
    if (state.timeLeft <= 0) {
      failLevel();
    } else {
      updateTimerDisplay();
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
  state.paused = false;
  state.pauseFact = null;
  await audio.start();
  audio.setTrack(state.musicTrack, false);
  audio.setVolume(state.volume);
  audio.setMuted(state.muted);
  startTimer();
  saveGame();
  render();
}

function registerTraceMistake(cellId) {
  state.mistakes += 1;
  state.combo = 0;
  state.lastEvidenceHits = [];
  const penalty = state.mode === "purge" ? 6 : state.mode === "pressure" ? 5 : 3.5;
  state.timeLeft = Math.max(0, state.timeLeft - penalty);
  state.wrongCellId = cellId;
  audio.wrong();
  window.setTimeout(() => {
    if (state.wrongCellId === cellId) {
      state.wrongCellId = null;
      render();
    }
  }, 320);
  if (state.timeLeft <= 0) failLevel();
}

function handleCellClick(id) {
  if (!state.started || state.locked || state.modal || state.paused) return;
  const cell = getCellById(id);
  if (!cell || cell.status !== "board") return;
  if (!isTileAvailable(cell)) {
    registerTraceMistake(cell?.id || id);
    saveGame();
    render();
    return;
  }

  cell.status = "tray";
  state.tray.push(cell.id);
  state.moves += 1;
  state.hintCellId = null;
  state.lastEvidenceHits = [];
  state.score += 6 + Math.max(0, Math.round(state.timeLeft / 35));
  if (state.leaderMode === "xi" && state.moves % 4 === 0) {
    state.timeLeft = Math.max(0, state.timeLeft - 0.8);
  }
  if (state.leaderMode === "deng" && state.tray.length <= 3) {
    state.score += 6;
  }

  const matched = clearTrayTriple(cell.groupKey);
  if (matched) {
    audio.correct();
  } else {
    state.combo = 0;
    audio.correct();
  }
  if (allEvidenceComplete()) {
    state.decryptProgress = state.decryptGoal;
    updateRevealCount();
    completeLevel();
    return;
  }
  if (state.tray.length >= state.trayLimit) {
    failLevel();
    return;
  }
  saveGame();
  render();
}

function useHint() {
  if (!state.started || state.locked || state.modal || state.paused) return;
  if (state.hintsLeft <= 0) {
    flashNoHints();
    return;
  }
  const cell = findHintCell();
  if (!cell) {
    flashNoHints();
    return;
  }
  state.hintsLeft -= 1;
  state.score = Math.max(0, state.score - 10);
  state.hintCellId = cell.id;
  state.lastEvidenceHits = [];
  saveGame();
  render();
  window.setTimeout(() => {
    if (state.hintCellId === cell.id) {
      state.hintCellId = null;
      render();
    }
  }, 1400);
}

function flashNoHints() {
  const hintButton = document.querySelector("[data-action='hint']");
  if (!hintButton) return;
  hintButton.textContent = GAME_COPY[state.lang].scanEmpty;
  window.setTimeout(render, 900);
}

function shuffleTokens() {
  if (!state.started || state.locked || state.modal || state.paused) return;
  state.tray = [];
  state.clearedAnswerCounts = {};
  state.clearedAnswerTotal = 0;
  state.lastEvidenceHits = [];
  state.matchBursts = [];
  state.decryptProgress = 0;
  state.revealedCount = 0;
  state.grid = makeGrid(state.level + Date.now(), state.difficulty);
  state.hintCellId = null;
  state.wrongCellId = null;
  state.combo = 0;
  state.score = Math.max(0, state.score - 25);
  ensurePlayableGrid();
  updateRevealCount();
  saveGame();
  render();
}

function skipLevel() {
  if (!state.started || state.locked || state.modal || state.paused) return;
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
  state.paused = false;
  state.pauseFact = null;
  state.revealedCount = state.answerUnits.length;
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
  recordRanking(stars, bonus);
  audio.complete();
  saveGame();
  render();
}

function failLevel() {
  state.locked = true;
  state.paused = false;
  state.pauseFact = null;
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

function setRoute(route) {
  if (!isRoute(route)) return;
  if (state.route === route) return;
  saveGame();
  state.route = route;
  loadCurrentModeProfile();
  saveGame();
  render();
}

function setLeaderMode(mode) {
  if (!LEADER_MODE_COPY.en[mode]) return;
  if (state.leaderMode === mode) return;
  saveGame();
  state.leaderMode = mode;
  loadCurrentModeProfile();
  saveGame();
  render();
}

function setLanguage(lang) {
  if (!TEXT[lang]) return;
  state.lang = lang;
  document.documentElement.lang = lang === "en" ? "en" : lang === "cn" ? "zh-Hans" : "zh-Hant";
  if (state.entry && state.started) {
    const clearedTotal = state.clearedAnswerTotal;
    const remainingRatio = state.maxTime > 0 ? state.timeLeft / state.maxTime : 1;
    state.answerUnits = tokenize(getTerm(state.entry));
    state.tileGroupCount = getTargetTileGroupCount(state.answerUnits.length, state.difficulty);
    state.difficulty = difficultyFromTileGroups(state.tileGroupCount);
    state.maxTime = computeTimeFromTileGroups(
      state.tileGroupCount,
      state.difficulty,
      state.mode,
      state.endlessLap,
      mulberry32(hashString(`lang-time-${state.route}-${state.lang}-${state.entry.en}-${state.level}`))
    );
    state.timeLeft = Math.max(20, Math.min(state.maxTime, Math.round(state.maxTime * remainingRatio)));
    state.decryptGoal = computeDecryptGoal(state.answerUnits, state.difficulty, state.mode);
    rebuildSheepGridPreservingProgress(countsFromClearedTotal(clearedTotal));
    updateRevealCount();
    if (state.modal) {
      state.modal.answer = getTerm();
      state.modal.clue = getClue();
      state.modal.context = getContext();
    }
    refreshPauseFactLanguage();
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

async function setMusicTrack(trackId) {
  if (!MUSIC_TRACK_IDS.includes(trackId)) return;
  state.musicTrack = trackId;
  if (!state.muted) {
    await audio.start();
  }
  audio.setTrack(trackId, !state.muted);
  saveGame();
  render();
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
  document.body.classList.toggle("game-active", state.started);
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

function updateTimerDisplay() {
  const timePercent = Math.max(0, Math.min(100, (state.timeLeft / state.maxTime) * 100));
  document.querySelectorAll(".meter-time").forEach((timeNode) => {
    timeNode.textContent = `${Math.ceil(state.timeLeft)}s`;
  });
  document.querySelectorAll(".meter-fill").forEach((fillNode) => {
    fillNode.style.width = `${timePercent}%`;
  });
}

function renderRouteSwitch(compact = false) {
  const routeCopy = ROUTE_COPY[state.lang];
  return `
    <div class="route-block ${compact ? "compact" : ""}">
      <div class="panel-kicker">${escapeHtml(routeCopy.route)}</div>
      <div class="route-switch" role="group" aria-label="${escapeHtml(routeCopy.route)}">
        ${ROUTE_IDS
          .map((route) => `
            <button class="route-option ${state.route === route ? "active" : ""}" type="button" data-route="${route}">
              <span class="route-title">${escapeHtml(routeCopy[route])}</span>
              ${compact ? "" : `<span class="route-copy">${escapeHtml(routeCopy[`${route}Desc`])}</span>`}
            </button>
          `)
          .join("")}
      </div>
    </div>
  `;
}

function renderLeaderModeSwitch(compact = false) {
  const modeCopy = LEADER_MODE_COPY[state.lang];
  const entries = ["all", "xi", "mao", "deng", "jiang"];
  return `
    <div class="route-block leader-block ${compact ? "compact" : ""}">
      <div class="panel-kicker">${escapeHtml(modeCopy[state.leaderMode].name)}</div>
      <div class="leader-switch" role="group" aria-label="${escapeHtml(modeCopy[state.leaderMode].name)}">
        ${entries
          .map((mode) => `
            <button class="leader-option ${state.leaderMode === mode ? "active" : ""}" type="button" data-leader-mode="${mode}">
              <span class="route-title">${escapeHtml(modeCopy[mode].name)}</span>
              ${compact ? "" : `<span class="route-copy">${escapeHtml(modeCopy[mode].desc)}</span>`}
            </button>
          `)
          .join("")}
      </div>
    </div>
  `;
}

function renderMusicSwitch(compact = false) {
  const musicCopy = MUSIC_TRACK_COPY[state.lang];
  return `
    <div class="route-block music-block ${compact ? "compact" : ""}">
      <div class="panel-kicker">${escapeHtml(musicCopy.label)}</div>
      <div class="music-switch" role="group" aria-label="${escapeHtml(musicCopy.label)}">
        ${MUSIC_TRACK_IDS
          .map((trackId) => {
            const track = musicCopy[trackId];
            return `
              <button class="music-option ${state.musicTrack === trackId ? "active" : ""}" type="button" data-music-track="${trackId}">
                <span class="route-title">${escapeHtml(track.name)}</span>
                ${compact ? "" : `<span class="route-copy">${escapeHtml(track.desc)}</span>`}
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderStart() {
  const copy = getCopy();
  const hasProgress = state.bestLevel > 0 || state.level > 0;
  const activeBankSize = getActiveBankSize();
  root.innerHTML = `
    <section class="empty-state">
      <div class="start-panel">
        <div class="panel-kicker">${escapeHtml(copy.unlocked)} ${activeBankSize} / ${WORD_BANK.length}</div>
        <h2 class="start-title">${escapeHtml(copy.startTitle)}</h2>
        <p class="start-copy">${escapeHtml(copy.startCopy)}</p>
        <div class="reward-row">
          <span class="reward-chip">${escapeHtml(copy.level)} ${state.level + 1}</span>
          <span class="reward-chip">${escapeHtml(copy.score)} ${state.score}</span>
          <span class="reward-chip">${escapeHtml(copy.streak)} ${state.streak}</span>
          <span class="reward-chip">${escapeHtml(copy.modeRecord)} ${escapeHtml(modeLabel())}</span>
        </div>
        ${renderRouteSwitch(false)}
        ${renderLeaderModeSwitch(false)}
        ${renderMusicSwitch(false)}
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
    ${state.paused ? renderPauseOverlay() : ""}
  `;
  bindDynamicEvents();
}

function renderStatusPanel() {
  const copy = getCopy();
  const gameCopy = GAME_COPY[state.lang];
  const chapterStart = Math.floor(state.level / 6) * 6;
  const levelInChapter = state.level - chapterStart;
  const timePercent = Math.max(0, Math.min(100, (state.timeLeft / state.maxTime) * 100));
  const activeBankSize = getActiveBankSize();
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
        <span class="panel-kicker">${escapeHtml(copy.remaining)} ${Math.max(0, activeBankSize - (state.level % activeBankSize))}</span>
      </div>
      <div class="chapter-track" aria-hidden="true">
        ${Array.from({ length: 6 }, (_, index) => {
          const absolute = chapterStart + index;
          const className = absolute < state.level ? "done" : index === levelInChapter ? "current" : "";
          return `<span class="chapter-node ${className}"></span>`;
        }).join("")}
      </div>
      ${renderRouteSwitch(true)}
      ${renderLeaderModeSwitch(true)}
      <div class="volume-row">
        <span class="stat-label">${escapeHtml(copy.sound)}</span>
        <input type="range" min="0" max="1" step="0.01" value="${state.muted ? 0 : state.volume}" data-action="volume" aria-label="${escapeHtml(copy.sound)}" />
      </div>
      ${renderMusicSwitch(true)}
    </aside>
  `;
}

function renderMatchBurst(burst) {
  const style = `--burst-x:${burst.x}%;--burst-y:${burst.y}%;--burst-a:${burst.a};--burst-b:${burst.b};--burst-img:${burst.image};--burst-focus:${burst.focus || "center"};--burst-zoom:${burst.zoom || "cover"};`;
  return `
    <div class="match-burst-3d" style="${style}" aria-hidden="true">
      <span class="burst-wave wave-a"></span>
      <span class="burst-wave wave-b"></span>
      <span class="burst-ring"></span>
      <span class="burst-core">${escapeHtml(burst.label)}</span>
      <span class="burst-shard shard-a">${escapeHtml(burst.label)}</span>
      <span class="burst-shard shard-b">${escapeHtml(burst.glyph)}</span>
      <span class="burst-shard shard-c"></span>
      <span class="burst-spark spark-a"></span>
      <span class="burst-spark spark-b"></span>
      <span class="burst-spark spark-c"></span>
      <span class="burst-spark spark-d"></span>
      <span class="burst-spark spark-e"></span>
    </div>
  `;
}

function renderPuzzlePanel() {
  const copy = getCopy();
  const gameCopy = GAME_COPY[state.lang];
  const leaderCopy = LEADER_MODE_COPY[state.lang][state.leaderMode];
  const category = copy.categories[state.entry.category];
  const difficulty = "◆".repeat(state.difficulty);
  const isEnglish = state.lang === "en";
  const progressPercent = Math.max(0, Math.min(100, (state.decryptProgress / state.decryptGoal) * 100));
  const trayTiles = getTrayTiles();
  const openTiles = getAvailableTiles().length;
  const boardLeft = state.grid.filter((tile) => tile.status === "board").length;
  const firstHiddenIndex = state.answerUnits.findIndex((_, index) => !isAnswerUnitRevealed(index));
  return `
    <section class="panel puzzle-panel">
      <div class="puzzle-head">
        <div>
          <div class="panel-kicker">${escapeHtml(copy.mode)}</div>
          <h2 class="archive-title">${escapeHtml(leaderCopy.name)} · ${escapeHtml(copy.modeNames[state.mode])}</h2>
        </div>
        <div class="puzzle-tags">
          <span class="category-pill">${escapeHtml(category)}</span>
          <span class="difficulty-pill">${difficulty}</span>
        </div>
      </div>
      <div class="mobile-game-hud">
        <span><small>${escapeHtml(copy.time)}</small><strong class="meter-time">${Math.ceil(state.timeLeft)}s</strong></span>
        <span><small>${escapeHtml(copy.score)}</small><strong>${state.score}</strong></span>
        <span><small>${escapeHtml(gameCopy.scan)}</small><strong>${state.hintsLeft}</strong></span>
        <button class="ghost-button pause-button" type="button" data-action="pause">${escapeHtml(PAUSE_COPY[state.lang].pause)}</button>
      </div>
      <div class="clue-block">
        <div class="panel-kicker">${escapeHtml(copy.clue)}</div>
        <p class="clue-text">${escapeHtml(getClue())}</p>
        ${state.entry.year ? `<span class="year-chip">${escapeHtml(copy.historyTag)} ${escapeHtml(state.entry.year)}</span>` : ""}
      </div>
      <div class="evidence-section">
        <div class="evidence-head">
          <span class="token-label">${escapeHtml(copy.currentLead)}</span>
          <span>${escapeHtml(copy.traceHint)}</span>
        </div>
        <div class="evidence-row">
          <span class="evidence-chip current"><small>${trayTiles.length}/${state.trayLimit}</small>${escapeHtml(gameCopy.chain)}</span>
          <span class="evidence-chip"><small>${state.clearedAnswerTotal}/${state.answerUnits.length}</small>${escapeHtml(gameCopy.next)}</span>
          <span class="evidence-chip"><small>${openTiles}</small>${escapeHtml(gameCopy.adjacent)}</span>
        </div>
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
              const filled = isAnswerUnitRevealed(index);
              const next = index === firstHiddenIndex;
              return `<div class="slot ${isEnglish ? "word-slot" : ""} ${filled ? "filled" : ""} ${next ? "next" : ""}">${escapeHtml(filled ? unit : "?")}</div>`;
            })
            .join("")}
        </div>
      </div>
      <div class="token-section">
        <div class="token-label">${escapeHtml(gameCopy.matrix)}</div>
        <div class="merge-summary">
          <span>${escapeHtml(copy.currentLead)} ${boardLeft}</span>
          <span>${state.lastEvidenceHits.length ? `${escapeHtml(gameCopy.evidenceBoost)} ${escapeHtml(state.lastEvidenceHits.map((hit) => hit.label).join(" / "))}` : escapeHtml(leaderCopy.desc)}</span>
        </div>
        <div class="sheep-board">
          ${state.grid
            .map((cell) => {
              if (!cell || cell.status !== "board") return "";
              const available = isTileAvailable(cell);
              const art = getTileArtProfile(cell);
              const identityMark = ["I", "II", "III", "IV"][getTileIdentityMeta(art).marker - 1] || "I";
              const artYear = [state.entry.year ? String(state.entry.year).slice(0, 11) : "", identityMark].filter(Boolean).join(" ");
              const displayLabel = getTileDisplayLabel(cell);
              const classes = [
                "sheep-tile",
                isEnglish ? "word-token" : "",
                resolveCardAsset(art.asset) ? "photo-tile" : "",
                cell.visualArt ? "image-tile" : "",
                cell.answer ? "key-tile" : "decoy-tile",
                available ? "available" : "locked",
                state.hintCellId === cell.id ? "hint" : "",
                state.wrongCellId === cell.id ? "wrong" : ""
              ]
                .filter(Boolean)
                .join(" ");
              return `<button class="${classes}" type="button" data-cell="${escapeHtml(cell.id)}" data-art="${escapeHtml(art.glyph)}" data-caption="${escapeHtml(displayLabel)}" data-year="${escapeHtml(artYear)}" style="${tileStyle(cell)}" ${available ? "" : "disabled"}>
                <span>${escapeHtml(displayLabel)}</span>
              </button>`;
            })
            .join("")}
          ${state.matchBursts.map(renderMatchBurst).join("")}
        </div>
        <div class="sheep-tray" aria-label="${escapeHtml(gameCopy.chain)}">
          ${Array.from({ length: state.trayLimit }, (_, index) => {
            const tile = trayTiles[index];
            return `<div class="tray-slot ${tile ? "filled" : ""} ${tile?.visualArt ? "image-slot" : ""}">${tile ? `<span>${escapeHtml(getTileDisplayLabel(tile))}</span>` : ""}</div>`;
          }).join("")}
        </div>
        <div class="match-flash ${state.lastEvidenceHits.length ? "" : "idle"}">${state.lastEvidenceHits.length ? `${escapeHtml(gameCopy.evidenceBoost)} · ${escapeHtml(state.lastEvidenceHits.map((hit) => hit.label).join(" / "))}` : "&nbsp;"}</div>
      </div>
      <div class="puzzle-actions">
        <button class="primary-button" type="button" data-action="hint">${escapeHtml(gameCopy.scan)} ${state.hintsLeft}</button>
        <button class="ghost-button" type="button" data-action="shuffle">${escapeHtml(gameCopy.reshuffle)}</button>
        <button class="ghost-button pause-button" type="button" data-action="pause">${escapeHtml(PAUSE_COPY[state.lang].pause)}</button>
        <button class="danger-button" type="button" data-action="skip">${escapeHtml(gameCopy.skip)}</button>
      </div>
      <div class="level-footer">
        <span>${escapeHtml(copy.unlocked)} ${getActiveBankSize()} / ${WORD_BANK.length}</span>
        <span>${state.endlessLap > 0 ? escapeHtml(copy.campaignDone) : ""}</span>
      </div>
    </section>
  `;
}

function renderQueuePanel() {
  const copy = getCopy();
  const rankings = getRankings().slice(0, 6);
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
      <div class="rank-section">
        <h3 class="rank-title">${escapeHtml(copy.leaderboard)}</h3>
        <div class="rank-list">
          ${rankings.length
            ? rankings.map((rank, index) => `
              <div class="rank-row ${rank.route === state.route && rank.leaderMode === state.leaderMode ? "current" : ""}">
                <span class="rank-index">#${index + 1}</span>
                <div class="rank-body">
                  <strong>${escapeHtml(rank.score)}</strong>
                  <small>${escapeHtml(modeLabel(rank.route, rank.leaderMode))} · ${escapeHtml(copy.level)} ${rank.level}</small>
                </div>
                <span class="rank-stars">${starText(rank.stars || 1)}</span>
              </div>
            `).join("")
            : `<div class="rank-empty">${escapeHtml(copy.rankEmpty)}</div>`}
        </div>
      </div>
    </aside>
  `;
}

function renderPauseOverlay() {
  const pauseCopy = PAUSE_COPY[state.lang];
  const fact = state.pauseFact || makePauseFact(state.entry);
  const meta = [fact.category, fact.year].filter(Boolean).join(" / ");
  return `
    <div class="modal-backdrop pause-backdrop">
      <section class="modal pause-modal" role="dialog" aria-modal="true">
        <div class="modal-kicker">${escapeHtml(pauseCopy.kicker)}</div>
        <h2>${escapeHtml(pauseCopy.title)}</h2>
        <div class="pause-fact-head">
          <div>
            <div class="modal-answer">${escapeHtml(fact.term)}</div>
            ${meta ? `<div class="pause-meta">${escapeHtml(meta)}</div>` : ""}
          </div>
          <div class="pause-sigil" aria-hidden="true">${escapeHtml(fact.term.slice(0, state.lang === "en" ? 2 : 1).toUpperCase())}</div>
        </div>
        <p class="modal-copy">${escapeHtml(fact.clue)}</p>
        <div class="context-block pause-context">
          <p>${escapeHtml(fact.context)}</p>
        </div>
        <p class="pause-note">${escapeHtml(pauseCopy.note)}</p>
        <div class="modal-actions">
          <button class="ghost-button" type="button" data-action="menu">${escapeHtml(pauseCopy.menu)}</button>
          <button class="primary-button" type="button" data-action="resume">${escapeHtml(pauseCopy.resume)}</button>
        </div>
      </section>
    </div>
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
        <div class="context-block">
          <div class="modal-kicker">${escapeHtml(copy.contextLabel)}</div>
          <p><strong>${escapeHtml(state.modal.clue)}</strong></p>
          <p>${escapeHtml(state.modal.context)}</p>
        </div>
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
    if (action === "pause") button.addEventListener("click", pauseGame);
    if (action === "resume") button.addEventListener("click", resumeGame);
    if (action === "menu") button.addEventListener("click", returnToStartMenu);
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
  document.querySelectorAll("[data-leader-mode]").forEach((button) => {
    button.addEventListener("click", () => setLeaderMode(button.dataset.leaderMode));
  });
  document.querySelectorAll("[data-music-track]").forEach((button) => {
    button.addEventListener("click", () => setMusicTrack(button.dataset.musicTrack));
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyH") {
    event.preventDefault();
    useHint();
  }
  if (event.code === "KeyP" || (event.code === "Escape" && state.paused)) {
    event.preventDefault();
    if (state.paused) {
      resumeGame();
    } else {
      pauseGame();
    }
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) pauseGame();
});

window.addEventListener("pagehide", pauseGame);
window.addEventListener("blur", pauseGame);

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
audio.setTrack(state.musicTrack);
audio.setVolume(state.volume);
audio.setMuted(state.muted);
setupLevel(state.level);
render();
drawBackground();
