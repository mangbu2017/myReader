import {observable, action, computed, runInAction} from 'mobx';
import API from '../api/index';
import storage from '../storage/index';

const { 
    getChapter,
    getChapterList,
} = API;
// console.log('getChapter', getChapter);

const personInfo = {
    username: 'mangbu',
    bookshelf: [{
            "tags": [],
            "_id": "5cb5e21040e63b746871e9d7",
            "bookname": "大明文魁",
            "author": "幸福来敲门",
            "bookSpiderUrl": "/html/56/56974/",
            "chapters": [
                {
                    "_id": "5cb5e21040e63b746871eea7",
                    "chaptername": "第一章 少年和媳妇",
                    "spiderUrl": "23402101.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eea6",
                    "chaptername": "第二章 家有悍妇",
                    "spiderUrl": "23402102.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eea5",
                    "chaptername": "第三章 能否读书",
                    "spiderUrl": "23402103.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eea4",
                    "chaptername": "第四章 叔侄定计",
                    "spiderUrl": "23402104.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eea3",
                    "chaptername": "第五章 滚出大门去",
                    "spiderUrl": "23402105.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eea2",
                    "chaptername": "第六章 离家求学",
                    "spiderUrl": "23402106.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eea1",
                    "chaptername": "第七章 洪塘社学",
                    "spiderUrl": "23402107.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eea0",
                    "chaptername": "第八章 背书",
                    "spiderUrl": "23402108.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee9f",
                    "chaptername": "第九章 被恐吓了",
                    "spiderUrl": "23402109.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee9e",
                    "chaptername": "第十章 赶出社学",
                    "spiderUrl": "23402110.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee9d",
                    "chaptername": "第十一章 好好学习，天天向上",
                    "spiderUrl": "23402111.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee9c",
                    "chaptername": "第十二章 同窗排挤",
                    "spiderUrl": "23402112.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee9b",
                    "chaptername": "第十三章 大宗师按临了",
                    "spiderUrl": "23402113.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee9a",
                    "chaptername": "第十四章 讨厌的县令",
                    "spiderUrl": "23402114.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee99",
                    "chaptername": "第十五章 胡提学的考校",
                    "spiderUrl": "23402115.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee98",
                    "chaptername": "第十六章 一鸣惊人",
                    "spiderUrl": "23402116.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee97",
                    "chaptername": "第十七章 成为弟子了（第一更）",
                    "spiderUrl": "23402117.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee96",
                    "chaptername": "第十八章 传道授业（第二更）",
                    "spiderUrl": "23402118.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee95",
                    "chaptername": "第十九章 回家",
                    "spiderUrl": "23402119.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee94",
                    "chaptername": "第二十章 蚬子汤",
                    "spiderUrl": "23402120.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee93",
                    "chaptername": "第二十一章 谢老虎",
                    "spiderUrl": "23402121.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee92",
                    "chaptername": "第二十二章 大明律",
                    "spiderUrl": "23402122.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee91",
                    "chaptername": "第二十三章 南方的猪",
                    "spiderUrl": "23402123.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee90",
                    "chaptername": "第二十四章 进省城",
                    "spiderUrl": "23402124.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee8f",
                    "chaptername": "第二十五章 打官司",
                    "spiderUrl": "23402125.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee8e",
                    "chaptername": "第二十六章 对薄公堂",
                    "spiderUrl": "23402126.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee8d",
                    "chaptername": "第二十七章 入理不如入情",
                    "spiderUrl": "23402127.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee8c",
                    "chaptername": "第二十八章 民意",
                    "spiderUrl": "23402128.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee8b",
                    "chaptername": "第二十九章 送信",
                    "spiderUrl": "23402129.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee8a",
                    "chaptername": "第三十章 奇才",
                    "spiderUrl": "23402130.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee89",
                    "chaptername": "第三十一章 敢要多少？",
                    "spiderUrl": "23402131.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee88",
                    "chaptername": "第三十二章 好处（第一更）",
                    "spiderUrl": "23402132.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee87",
                    "chaptername": "第三十三章 落地还钱",
                    "spiderUrl": "23402133.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee86",
                    "chaptername": "第三十四章 林高着当官（第一更）",
                    "spiderUrl": "23402134.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee85",
                    "chaptername": "第三十五章 钱没了（第二更）",
                    "spiderUrl": "23402135.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee84",
                    "chaptername": "第三十六章 被请家长了",
                    "spiderUrl": "23402136.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee83",
                    "chaptername": "第三十七章 与先生作对的顽童",
                    "spiderUrl": "23402137.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee82",
                    "chaptername": "第三十八章 老童生",
                    "spiderUrl": "23402138.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee81",
                    "chaptername": "第三十九章 买书",
                    "spiderUrl": "23402139.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee80",
                    "chaptername": "第四十章 状元公的劝谏",
                    "spiderUrl": "23402140.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee7f",
                    "chaptername": "第四十一章 师之道",
                    "spiderUrl": "23402141.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee7e",
                    "chaptername": "第四十二章 先生是案首",
                    "spiderUrl": "23402142.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee7d",
                    "chaptername": "第四十三章 先生的背景",
                    "spiderUrl": "23402143.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee7c",
                    "chaptername": "第四十四章 林诚以的推荐",
                    "spiderUrl": "23402144.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee7b",
                    "chaptername": "第四十五章 无不散之宴席",
                    "spiderUrl": "23402145.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee7a",
                    "chaptername": "第四十六章 书院",
                    "spiderUrl": "23402146.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee79",
                    "chaptername": "第四十七章 面试",
                    "spiderUrl": "23402147.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee78",
                    "chaptername": "第四十八章 不早点告诉我",
                    "spiderUrl": "23402148.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee77",
                    "chaptername": "第四十九章 神童",
                    "spiderUrl": "23402149.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee76",
                    "chaptername": "第五十章 为何读书",
                    "spiderUrl": "23402150.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee75",
                    "chaptername": "第五十一章 外舍弟子",
                    "spiderUrl": "23402151.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee74",
                    "chaptername": "第五十二章 大宗师弟子的光环",
                    "spiderUrl": "23402152.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee73",
                    "chaptername": "第五十三章 朔望课",
                    "spiderUrl": "23402153.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee72",
                    "chaptername": "第五十四章 我不是作弊",
                    "spiderUrl": "23402154.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee71",
                    "chaptername": "第五十五章 月课（第一更）",
                    "spiderUrl": "23402155.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee70",
                    "chaptername": "第五十六章 其实我想认真做题的（第二更）",
                    "spiderUrl": "23402156.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee6f",
                    "chaptername": "第五十七章 讲卷",
                    "spiderUrl": "23402157.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee6e",
                    "chaptername": "第五十八章 质疑",
                    "spiderUrl": "23402158.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee6d",
                    "chaptername": "第五十九章 天生我才",
                    "spiderUrl": "23402159.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee6c",
                    "chaptername": "第六十章 道统",
                    "spiderUrl": "23402160.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee6b",
                    "chaptername": "第六十一章 拉拢(第一更)",
                    "spiderUrl": "23402161.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee6a",
                    "chaptername": "第六十二章 本经（第二更）",
                    "spiderUrl": "23402162.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee69",
                    "chaptername": "第六十三章 林府",
                    "spiderUrl": "23402163.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee68",
                    "chaptername": "第六十四章 诗赋和经义（第一更）",
                    "spiderUrl": "23402164.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee67",
                    "chaptername": "第六十五章 比试（第二更）",
                    "spiderUrl": "23402165.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee66",
                    "chaptername": "第六十六章 燕可伐与",
                    "spiderUrl": "23402166.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee65",
                    "chaptername": "第六十七章 有人辞官归故里",
                    "spiderUrl": "23402167.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee64",
                    "chaptername": "第六十八章 冬衣",
                    "spiderUrl": "23402168.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee63",
                    "chaptername": "第六十九章 君子之争",
                    "spiderUrl": "23402169.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee62",
                    "chaptername": "第七十章 德主刑辅",
                    "spiderUrl": "23402170.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee61",
                    "chaptername": "第七十一章 书到今生读已迟",
                    "spiderUrl": "23402171.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee60",
                    "chaptername": "第七十二章 恩公",
                    "spiderUrl": "23402172.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee5f",
                    "chaptername": "第七十三章 讲会",
                    "spiderUrl": "23402173.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee5e",
                    "chaptername": "第七十四章 心灵鸡汤",
                    "spiderUrl": "23402174.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee5d",
                    "chaptername": "第七十五章 府台巡视",
                    "spiderUrl": "23402175.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee5c",
                    "chaptername": "第七十六章 撕破脸",
                    "spiderUrl": "23402176.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee5b",
                    "chaptername": "第七十七章 你敢再说一句试试？",
                    "spiderUrl": "23402177.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee5a",
                    "chaptername": "第七十八章 背书",
                    "spiderUrl": "23402178.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee59",
                    "chaptername": "第七十九章 逐出书院（第一更）",
                    "spiderUrl": "23402179.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee58",
                    "chaptername": "第八十章 大伯求官（第二更）",
                    "spiderUrl": "23402180.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee57",
                    "chaptername": "第八十一章 公门之中好修行",
                    "spiderUrl": "23402181.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee56",
                    "chaptername": "第八十二章 岳丈来了",
                    "spiderUrl": "23402182.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee55",
                    "chaptername": "第八十三章 不后悔",
                    "spiderUrl": "23402183.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee54",
                    "chaptername": "第八十四章 不识凌云木",
                    "spiderUrl": "23402184.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee53",
                    "chaptername": "第八十五章 措手不及",
                    "spiderUrl": "23402185.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee52",
                    "chaptername": "第八十六章 俞龙戚虎",
                    "spiderUrl": "23402186.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee51",
                    "chaptername": "第八十七章 文武之争（第一更）",
                    "spiderUrl": "23402187.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee50",
                    "chaptername": "第八十八章 有事找他（第二更）",
                    "spiderUrl": "23402188.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee4f",
                    "chaptername": "第八十九章 嚣张一点",
                    "spiderUrl": "23402189.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee4e",
                    "chaptername": "第九十章 礼宜先行",
                    "spiderUrl": "23402190.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee4d",
                    "chaptername": "第九十一章 民心",
                    "spiderUrl": "23402191.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee4c",
                    "chaptername": "第九十二章 当城里人（第一更）",
                    "spiderUrl": "23402192.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee4b",
                    "chaptername": "第九十三章 买房拉（第二更）",
                    "spiderUrl": "23402193.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee4a",
                    "chaptername": "第九十四章 两封信",
                    "spiderUrl": "23402194.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee49",
                    "chaptername": "第九十五章 师徒问答",
                    "spiderUrl": "23402195.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee48",
                    "chaptername": "第九十六章 理辞气三道（第一更）",
                    "spiderUrl": "23402196.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee47",
                    "chaptername": "第九十七章 读书真费钱（第二更）",
                    "spiderUrl": "23402197.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee46",
                    "chaptername": "第九十八章 喝茶听戏",
                    "spiderUrl": "23402198.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee45",
                    "chaptername": "第九十九章 我有办法（第一更）",
                    "spiderUrl": "23402199.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee44",
                    "chaptername": "第一百章 传曲（第二更）",
                    "spiderUrl": "23402200.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee43",
                    "chaptername": "第一百零一章 竞争激烈",
                    "spiderUrl": "23402201.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee42",
                    "chaptername": "一百零二章 舆论（第一更）",
                    "spiderUrl": "23402202.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee41",
                    "chaptername": "第一百零三章 赴考（第二更）",
                    "spiderUrl": "23402203.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee40",
                    "chaptername": "上架感言",
                    "spiderUrl": "23402204.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee3f",
                    "chaptername": "第一百零四章 县试（第一更）",
                    "spiderUrl": "23402205.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee3e",
                    "chaptername": "第一百零五章 我取定了（第二更）",
                    "spiderUrl": "23402206.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee3d",
                    "chaptername": "第一百零六章 交卷（第三更）",
                    "spiderUrl": "23402207.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee3c",
                    "chaptername": "第一百零七章 发案（第一更）",
                    "spiderUrl": "23402208.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee3b",
                    "chaptername": "第一百零八章 招覆（第二更）",
                    "spiderUrl": "23402209.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee3a",
                    "chaptername": "第一百零九章 反击流言（第一更）",
                    "spiderUrl": "23402210.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee39",
                    "chaptername": "第一百一十章 取中（第二更）",
                    "spiderUrl": "23402211.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee38",
                    "chaptername": "第一百一十一章 名额（第一更）",
                    "spiderUrl": "23402212.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee37",
                    "chaptername": "第一百一十二章 老俞有请（第二更）",
                    "spiderUrl": "23446616.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee36",
                    "chaptername": "第一百一十三章 总兵府",
                    "spiderUrl": "23461015.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee35",
                    "chaptername": "第一百一十四章 府试前的特训",
                    "spiderUrl": "23472598.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee34",
                    "chaptername": "第一百一十五章 雨天苦读",
                    "spiderUrl": "23478027.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee33",
                    "chaptername": "第一百一十六章 戏弄（第一更）",
                    "spiderUrl": "23478532.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee32",
                    "chaptername": "第一百一十七章 府试报名（第二更）",
                    "spiderUrl": "23481233.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee31",
                    "chaptername": "第一百一十八章 门路",
                    "spiderUrl": "23483298.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee30",
                    "chaptername": "第一百一十九章 童生的好处",
                    "spiderUrl": "23492905.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee2f",
                    "chaptername": "更新稍迟一下",
                    "spiderUrl": "23492906.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee2e",
                    "chaptername": "第一百二十章 南园",
                    "spiderUrl": "23506074.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee2d",
                    "chaptername": "第一百二十一章 诗会",
                    "spiderUrl": "23506075.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee2c",
                    "chaptername": "第一百二十二章 我来一试（一更）",
                    "spiderUrl": "23506076.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee2b",
                    "chaptername": "第一百二十三章 府试（二更）",
                    "spiderUrl": "23506077.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee2a",
                    "chaptername": "第一百二十四章 陈知府的心思（一更）",
                    "spiderUrl": "23506078.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee29",
                    "chaptername": "第一百二十五章 又蒙对题了（二更）",
                    "spiderUrl": "23506079.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee28",
                    "chaptername": "第一百二十六章 好文章啊（一更）",
                    "spiderUrl": "23507743.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee27",
                    "chaptername": "第一百二十七章 有文有笔（二更）",
                    "spiderUrl": "23512735.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee26",
                    "chaptername": "第一百二十八章 报喜了",
                    "spiderUrl": "23512736.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee25",
                    "chaptername": "第一百二十九章 案首的风光（一更）",
                    "spiderUrl": "23516494.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee24",
                    "chaptername": "第一百三十章 筵宴（二更）",
                    "spiderUrl": "23516495.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee23",
                    "chaptername": "第一百三十一章 乡饮酒礼（一更）",
                    "spiderUrl": "23525740.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee22",
                    "chaptername": "第一百三十二章 鱼与熊掌（二更）",
                    "spiderUrl": "23525741.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee21",
                    "chaptername": "第一百三十三章 师徒二人",
                    "spiderUrl": "23530304.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee20",
                    "chaptername": "第一百三十四章 立言",
                    "spiderUrl": "23530305.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee1f",
                    "chaptername": "第一百三十五章 杰出弟子（一更）",
                    "spiderUrl": "23532942.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee1e",
                    "chaptername": "第一百三十六章 同窗之间（二更）",
                    "spiderUrl": "23537114.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee1d",
                    "chaptername": "第一百三十七章 闲草集（一更）",
                    "spiderUrl": "23537115.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee1c",
                    "chaptername": "第一百三十八章 第一步（二更）",
                    "spiderUrl": "23542439.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee1b",
                    "chaptername": "第一百三十九章 评卷（一更）",
                    "spiderUrl": "23542442.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee1a",
                    "chaptername": "第一百四十章 一头之地（二更）",
                    "spiderUrl": "23544267.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee19",
                    "chaptername": "第一百四十一章 校对闲草集（一更）",
                    "spiderUrl": "23547337.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee18",
                    "chaptername": "第一百四十二章 读书等身算什么（二更）",
                    "spiderUrl": "23552791.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee17",
                    "chaptername": "第一百四十三章 建阳书坊（一更）",
                    "spiderUrl": "23559222.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee16",
                    "chaptername": "第一百四十四章 好书（二更）",
                    "spiderUrl": "23562516.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee15",
                    "chaptername": "第一百四十五章 新任提学",
                    "spiderUrl": "23566898.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee14",
                    "chaptername": "第一百四十六章 狂生（一更）",
                    "spiderUrl": "23569264.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee13",
                    "chaptername": "第一百四十七章 你书读得不够深啊（二更）",
                    "spiderUrl": "23573267.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee12",
                    "chaptername": "第一百四十八章 不忮不求（一更）",
                    "spiderUrl": "23573268.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee11",
                    "chaptername": "第一百四十九章 赶上好时候（二更）",
                    "spiderUrl": "23575241.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee10",
                    "chaptername": "第一百五十章 请教名儒（一更）",
                    "spiderUrl": "23577226.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee0f",
                    "chaptername": "第一百五十一章 老夫看好你（二更）",
                    "spiderUrl": "23586580.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee0e",
                    "chaptername": "第一百五十二章 赠诗（一更）",
                    "spiderUrl": "23586582.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee0d",
                    "chaptername": "第一百五十三章 院试（二更）",
                    "spiderUrl": "23588847.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee0c",
                    "chaptername": "第一百五十四章 激将（一更）",
                    "spiderUrl": "23590901.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee0b",
                    "chaptername": "第一百五十五章 首题五经题（二更）",
                    "spiderUrl": "23592780.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee0a",
                    "chaptername": "第一百五十六章 考完糊名（一更）",
                    "spiderUrl": "23594787.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee09",
                    "chaptername": "第一百五十七章 定名次（二更）",
                    "spiderUrl": "23603091.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee08",
                    "chaptername": "第一百五十八章 唱名（一更）",
                    "spiderUrl": "23603095.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee07",
                    "chaptername": "第一百五十九章 三个圈（二更）",
                    "spiderUrl": "23612070.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee06",
                    "chaptername": "第一百六十章 大办酒席（一更）",
                    "spiderUrl": "23615769.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee05",
                    "chaptername": "第一百六十一章 入学（二更）",
                    "spiderUrl": "23617532.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee04",
                    "chaptername": "第一百六十二章 这怎么可能（一更）",
                    "spiderUrl": "23618757.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee03",
                    "chaptername": "第一百六十三章 游泮采芹（二更）",
                    "spiderUrl": "23627788.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee02",
                    "chaptername": "第一百六十四章 应制诗",
                    "spiderUrl": "23627789.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee01",
                    "chaptername": "第一百六十五章 中流击水（一更）",
                    "spiderUrl": "23629875.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ee00",
                    "chaptername": "第一百六十六章 这也行（二更）",
                    "spiderUrl": "23631367.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edff",
                    "chaptername": "第一百六十七章 学风如此（一更）",
                    "spiderUrl": "23632576.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edfe",
                    "chaptername": "第一百六十八章 读书之法（二更）",
                    "spiderUrl": "23634031.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edfd",
                    "chaptername": "第一百六十九章 日课（一更）",
                    "spiderUrl": "23638341.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edfc",
                    "chaptername": "第一百七十章 衣锦还乡（二更）",
                    "spiderUrl": "23642954.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edfb",
                    "chaptername": "第一百七十一章 求田问舍（一更）",
                    "spiderUrl": "23643161.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edfa",
                    "chaptername": "第一百七十二章 林浅浅的着急（二更）",
                    "spiderUrl": "23648583.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf9",
                    "chaptername": "第一百七十三章 有事相求（一更）",
                    "spiderUrl": "23648584.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf8",
                    "chaptername": "第一百七十四章 琉球三十六姓（二更）",
                    "spiderUrl": "23650127.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf7",
                    "chaptername": "第一百七十五章 上控（一更）",
                    "spiderUrl": "23651349.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf6",
                    "chaptername": "第一百七十六章 明察秋毫（二更）",
                    "spiderUrl": "23653366.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf5",
                    "chaptername": "第一百七十七章 翻案（一更）",
                    "spiderUrl": "23655033.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf4",
                    "chaptername": "第一百七十八章 地瓜啊（二更）",
                    "spiderUrl": "23656680.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf3",
                    "chaptername": "第一百七十九章 偷得浮生半日闲（一更）",
                    "spiderUrl": "23658598.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf2",
                    "chaptername": "第一百八十章 赐字（二更）",
                    "spiderUrl": "23660229.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf1",
                    "chaptername": "第一百八十一章 又是一年县试时（一更）",
                    "spiderUrl": "23661382.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edf0",
                    "chaptername": "第一百八十二章 指点（二更）",
                    "spiderUrl": "23663266.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edef",
                    "chaptername": "第一次发单章 ，大家看看，很重要的",
                    "spiderUrl": "23663672.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edee",
                    "chaptername": "第一百八十三章 入贡资格（一更）",
                    "spiderUrl": "23664746.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eded",
                    "chaptername": "第一百八十四章 我中了（二更）",
                    "spiderUrl": "23670102.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edec",
                    "chaptername": "第一百八十五章 丢人丢得不够（一更）",
                    "spiderUrl": "23674383.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edeb",
                    "chaptername": "第一百八十六章 孙秀才（二更）",
                    "spiderUrl": "23676563.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edea",
                    "chaptername": "第一百八十七章 岁试",
                    "spiderUrl": "23679477.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede9",
                    "chaptername": "第一百八十八章 做事很有分寸",
                    "spiderUrl": "23687103.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede8",
                    "chaptername": "第一百八十九章 名列一等（一更）",
                    "spiderUrl": "23700800.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede7",
                    "chaptername": "第一百九十章 贤良方正（二更）",
                    "spiderUrl": "23704154.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede6",
                    "chaptername": "第一百九十一章 谁指使的（一更）",
                    "spiderUrl": "23704155.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede5",
                    "chaptername": "第一百九十二章 尾生之行（二更）",
                    "spiderUrl": "23705857.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede4",
                    "chaptername": "第一百九十三章 给我吊起来（一更）",
                    "spiderUrl": "23707651.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede3",
                    "chaptername": "第一百九十四章 小伙伴的进步（二更）",
                    "spiderUrl": "23709589.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede2",
                    "chaptername": "第一百九十五章 澹台灭明是一个人还是两个人？",
                    "spiderUrl": "23720333.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede1",
                    "chaptername": "第一百九十六章 识破（一更）",
                    "spiderUrl": "23720334.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ede0",
                    "chaptername": "第一百九十七章 继绝学（二更）",
                    "spiderUrl": "23721946.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eddf",
                    "chaptername": "第一百九十八章 指点文章",
                    "spiderUrl": "23728167.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edde",
                    "chaptername": "第一百九十九章 把名声借给你",
                    "spiderUrl": "23731416.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eddd",
                    "chaptername": "第两百章 定稿（一更）",
                    "spiderUrl": "23733738.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eddc",
                    "chaptername": "第两百零一章 翁婿偶逢（二更）",
                    "spiderUrl": "23735411.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eddb",
                    "chaptername": "第两百零二章 龚子楠的心思（一更）",
                    "spiderUrl": "23738861.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edda",
                    "chaptername": "第两百零三章 乡试总裁是王世贞",
                    "spiderUrl": "23740344.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd9",
                    "chaptername": "第两百零四章 充场儒生",
                    "spiderUrl": "23741549.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd8",
                    "chaptername": "第两百零五章 最难之乡试（第二更）",
                    "spiderUrl": "23747371.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd7",
                    "chaptername": "第两百零六章 贡院",
                    "spiderUrl": "23747372.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd6",
                    "chaptername": "第两百零七章 巡抚（一更）",
                    "spiderUrl": "23750300.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd5",
                    "chaptername": "第两百零八章 饱暖思考试（二更）",
                    "spiderUrl": "23753768.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd4",
                    "chaptername": "第两百零九章 交卷",
                    "spiderUrl": "23757257.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd3",
                    "chaptername": "第两百一十章 考后不讲卷（第一更）",
                    "spiderUrl": "23759065.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd2",
                    "chaptername": "第两百一十一章 第二场（第二更）",
                    "spiderUrl": "23767987.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd1",
                    "chaptername": "第两百一十二章 可列经魁",
                    "spiderUrl": "23767988.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edd0",
                    "chaptername": "第两百一十三章 场场第一",
                    "spiderUrl": "23771420.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edcf",
                    "chaptername": "第两百一十四章 放榜了（一更）",
                    "spiderUrl": "23774738.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edce",
                    "chaptername": "第两百一十五章 谁是解元？（二更）",
                    "spiderUrl": "23774739.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edcd",
                    "chaptername": "第两百一十六章 京报连登黄甲",
                    "spiderUrl": "23781361.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edcc",
                    "chaptername": "第两百一十七章 好风光",
                    "spiderUrl": "23791130.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edcb",
                    "chaptername": "第两百一十八章 诸生的心情",
                    "spiderUrl": "23791131.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edca",
                    "chaptername": "第两百一十九章 老师和同窗（一更）",
                    "spiderUrl": "23792683.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc9",
                    "chaptername": "第两百二十章 上屋抽梯（二更）",
                    "spiderUrl": "23795014.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc8",
                    "chaptername": "第两百二十一章 至公堂上",
                    "spiderUrl": "23798202.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc7",
                    "chaptername": "第两百二十二章 洛阳纸贵（第二更）",
                    "spiderUrl": "23801371.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc6",
                    "chaptername": "第两百二十三章 程员外上门",
                    "spiderUrl": "23805491.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc5",
                    "chaptername": "第两百二十四章 鹿鸣宴",
                    "spiderUrl": "23805497.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc4",
                    "chaptername": "第两百二十五章 镇场诗（第一更）",
                    "spiderUrl": "23810533.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc3",
                    "chaptername": "第两百二十六章 龚夫人的想法（第二更）",
                    "spiderUrl": "23811648.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc2",
                    "chaptername": "第两百二十七章 媒人上门",
                    "spiderUrl": "23817076.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc1",
                    "chaptername": "第两百二十八章 算盘打不响",
                    "spiderUrl": "23824428.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edc0",
                    "chaptername": "第两百二十九章 何时会试（第一更）",
                    "spiderUrl": "23826726.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edbf",
                    "chaptername": "封推感言",
                    "spiderUrl": "23827304.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edbe",
                    "chaptername": "第两百三十章 只是我不愿意（第二更）",
                    "spiderUrl": "23828255.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edbd",
                    "chaptername": "隆重推荐美味罗宋汤的大明金主",
                    "spiderUrl": "23828336.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edbc",
                    "chaptername": "第两百三十一章 心底只有你（一更）",
                    "spiderUrl": "23829640.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edbb",
                    "chaptername": "第两百三十二章 龚府寿宴（二更）",
                    "spiderUrl": "23831749.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edba",
                    "chaptername": "第两百三十三章 白首一人好（三更）",
                    "spiderUrl": "23833452.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb9",
                    "chaptername": "第两百三十四章 两家和好（一更）",
                    "spiderUrl": "23834550.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb8",
                    "chaptername": "第两百三十五章 申时行（二更）",
                    "spiderUrl": "23836545.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb7",
                    "chaptername": "第两百三十六章 解元郎大婚",
                    "spiderUrl": "23839484.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb6",
                    "chaptername": "第两百三十七章 缘定三生",
                    "spiderUrl": "23845753.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb5",
                    "chaptername": "第两百三十八章 大宴宾客（一更）",
                    "spiderUrl": "23851485.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb4",
                    "chaptername": "第两百三十九章 席间运筹（二更）",
                    "spiderUrl": "23861424.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb3",
                    "chaptername": "第两百四十章 销银（一更）",
                    "spiderUrl": "23867904.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb2",
                    "chaptername": "第两百四十一章 整合资源（二更）",
                    "spiderUrl": "23879162.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb1",
                    "chaptername": "第两百四十二章 推举（一更）",
                    "spiderUrl": "23885142.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edb0",
                    "chaptername": "第两百四十三章 名声（二更）",
                    "spiderUrl": "23893156.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edaf",
                    "chaptername": "大家新年好！",
                    "spiderUrl": "23894187.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edae",
                    "chaptername": "第两百四十四章 何心隐（一更）",
                    "spiderUrl": "23903362.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edad",
                    "chaptername": "第两百四十五章 拜师（二更）",
                    "spiderUrl": "23904808.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edac",
                    "chaptername": "第两百四十六章 初衷",
                    "spiderUrl": "23910198.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edab",
                    "chaptername": "第两百四十七章 收徒（一更）",
                    "spiderUrl": "23913096.html"
                },
                {
                    "_id": "5cb5e21040e63b746871edaa",
                    "chaptername": "第两百四十八章 补习天王（二更）",
                    "spiderUrl": "23918291.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda9",
                    "chaptername": "第两百四十九章 锦衣卫",
                    "spiderUrl": "23940445.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda8",
                    "chaptername": "第两百五十章 有惊无险",
                    "spiderUrl": "23940446.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda7",
                    "chaptername": "第两百五十一章 家事",
                    "spiderUrl": "23960088.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda6",
                    "chaptername": "第两百五十二章 相求",
                    "spiderUrl": "23964392.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda5",
                    "chaptername": "第两百五十三章 置身事外（一更）",
                    "spiderUrl": "23974356.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda4",
                    "chaptername": "第两百五十四章 朝堂之变（二更）",
                    "spiderUrl": "23974357.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda3",
                    "chaptername": "第两百五十五章 书院之难",
                    "spiderUrl": "23983247.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda2",
                    "chaptername": "第两百五十六章 虎狼对弱鸡",
                    "spiderUrl": "23990877.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda1",
                    "chaptername": "第两百五十七章 公道自在人心",
                    "spiderUrl": "24000524.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eda0",
                    "chaptername": "第两百五十八章 多亏了师兄",
                    "spiderUrl": "24000525.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed9f",
                    "chaptername": "第两百五十九章 求仁",
                    "spiderUrl": "24013189.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed9e",
                    "chaptername": "第两百六十章 自问",
                    "spiderUrl": "24038494.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed9d",
                    "chaptername": "第两百六十一章 故人重逢",
                    "spiderUrl": "24038495.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed9c",
                    "chaptername": "第两百六十二章 修齐治平",
                    "spiderUrl": "24045570.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed9b",
                    "chaptername": "第两百六十三章 仗势欺人",
                    "spiderUrl": "24059196.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed9a",
                    "chaptername": "第两百六十四章 兵来将挡，水来土掩！",
                    "spiderUrl": "24059197.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed99",
                    "chaptername": "第两百六十五章 本官就是驴脾气",
                    "spiderUrl": "24072025.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed98",
                    "chaptername": "第两百六十六章 蒸蒸日上",
                    "spiderUrl": "24087877.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed97",
                    "chaptername": "第两百六十七章 寄以厚望",
                    "spiderUrl": "24096000.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed96",
                    "chaptername": "第两百六十八章 进京赶考",
                    "spiderUrl": "24117967.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed95",
                    "chaptername": "第两百六十九章 乘船",
                    "spiderUrl": "24117968.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed94",
                    "chaptername": "第两百七十章 船托",
                    "spiderUrl": "24130377.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed93",
                    "chaptername": "请假一下",
                    "spiderUrl": "24133836.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed92",
                    "chaptername": "第两百七十一章 这是碰瓷啊！",
                    "spiderUrl": "24145366.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed91",
                    "chaptername": "第两百七十二章 功名在身",
                    "spiderUrl": "24147437.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed90",
                    "chaptername": "第两百七十三章 名声在外",
                    "spiderUrl": "24156495.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed8f",
                    "chaptername": "第两百七十四章 漕弊",
                    "spiderUrl": "24180361.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed8e",
                    "chaptername": "第两百七十五章 抵京",
                    "spiderUrl": "24180362.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed8d",
                    "chaptername": "第两百七十六章 会馆",
                    "spiderUrl": "24219824.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed8c",
                    "chaptername": "第两百七十七章 终南捷径",
                    "spiderUrl": "24219825.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed8b",
                    "chaptername": "第两百七十八章 拜见申时行",
                    "spiderUrl": "24280751.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed8a",
                    "chaptername": "第两百七十九章 初次见面",
                    "spiderUrl": "24280753.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed89",
                    "chaptername": "第两百八十章 人情",
                    "spiderUrl": "24443880.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed88",
                    "chaptername": "明天补更",
                    "spiderUrl": "24443881.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed87",
                    "chaptername": "第两百八十一章 连中三元的期望",
                    "spiderUrl": "24508868.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed86",
                    "chaptername": "第两百八十二章 家信",
                    "spiderUrl": "24606440.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed85",
                    "chaptername": "第两百八十三章 教诲",
                    "spiderUrl": "24606442.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed84",
                    "chaptername": "第两百八十四章 手中之笔",
                    "spiderUrl": "24624335.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed83",
                    "chaptername": "第两百八十五章 醉酒惊名士",
                    "spiderUrl": "24647230.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed82",
                    "chaptername": "第两百八十六章 文动京华",
                    "spiderUrl": "24672642.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed81",
                    "chaptername": "第两百八十七章 为政不难，不罪巨室",
                    "spiderUrl": "24697172.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed80",
                    "chaptername": "第两百八十八章 火树银花不夜天",
                    "spiderUrl": "24729357.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed7f",
                    "chaptername": "第两百八十九章 会试之日",
                    "spiderUrl": "24763472.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed7e",
                    "chaptername": "第两百九十章 贡院",
                    "spiderUrl": "24779695.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed7d",
                    "chaptername": "第两百九十一章 众望",
                    "spiderUrl": "24804151.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed7c",
                    "chaptername": "第两百九十二章 贡院走水",
                    "spiderUrl": "24829128.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed7b",
                    "chaptername": "第两百九十三章 锦绣文章",
                    "spiderUrl": "24855038.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed7a",
                    "chaptername": "第两百九十四章 南北卷",
                    "spiderUrl": "24879106.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed79",
                    "chaptername": "第两百九十五章 盛名之下无虚士",
                    "spiderUrl": "24904529.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed78",
                    "chaptername": "第两百九十六章 第二场",
                    "spiderUrl": "24939660.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed77",
                    "chaptername": "第两百九十七章 五篇策问",
                    "spiderUrl": "25027067.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed76",
                    "chaptername": "第两百九十八章 考完一游",
                    "spiderUrl": "25027068.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed75",
                    "chaptername": "第两百九十九章 我是初哥",
                    "spiderUrl": "25027069.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed74",
                    "chaptername": "第三百章 百闻不如一见",
                    "spiderUrl": "25047097.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed73",
                    "chaptername": "第三百零一章 林世璧发飙",
                    "spiderUrl": "25080957.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed72",
                    "chaptername": "第三百零二章 阅卷",
                    "spiderUrl": "25080958.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed71",
                    "chaptername": "第三百零三章 我是要磨砺你啊",
                    "spiderUrl": "25104942.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed70",
                    "chaptername": "第三百零四章 蹊跷",
                    "spiderUrl": "25127873.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed6f",
                    "chaptername": "第三百零五章 朱衣点额",
                    "spiderUrl": "25145070.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed6e",
                    "chaptername": "这一更明天发",
                    "spiderUrl": "25170931.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed6d",
                    "chaptername": "第三百零六章 竟敢理直气壮",
                    "spiderUrl": "25172189.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed6c",
                    "chaptername": "第三百零七章 最好的文章",
                    "spiderUrl": "25186220.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed6b",
                    "chaptername": "第三百零八章 会试放榜",
                    "spiderUrl": "25224525.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed6a",
                    "chaptername": "第三百零九章 盼登第",
                    "spiderUrl": "25224526.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed69",
                    "chaptername": "第三百一十章 心态",
                    "spiderUrl": "25258071.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed68",
                    "chaptername": "第三百一十一章 会元",
                    "spiderUrl": "25282668.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed67",
                    "chaptername": "发个单章说说心底话",
                    "spiderUrl": "25282669.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed66",
                    "chaptername": "第三百一十二章 几人可及？",
                    "spiderUrl": "25299590.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed65",
                    "chaptername": "第三百一十三章 座师与门生",
                    "spiderUrl": "25299591.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed64",
                    "chaptername": "第三百一十四章 传言",
                    "spiderUrl": "25308885.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed63",
                    "chaptername": "第三百一十五章 最少二甲前五",
                    "spiderUrl": "25329323.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed62",
                    "chaptername": "第三百一十六章 众口铄金",
                    "spiderUrl": "25329324.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed61",
                    "chaptername": "请假一下。",
                    "spiderUrl": "25336488.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed60",
                    "chaptername": "第三百一十七章 万历皇帝",
                    "spiderUrl": "25354144.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed5f",
                    "chaptername": "第三百一十八章 张居正是地域黑",
                    "spiderUrl": "25354145.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed5e",
                    "chaptername": "第三百一十九章 有请",
                    "spiderUrl": "25360995.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed5d",
                    "chaptername": "第三百二十章 请帖",
                    "spiderUrl": "25366275.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed5c",
                    "chaptername": "第三百二十一章 奸计",
                    "spiderUrl": "25371302.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed5b",
                    "chaptername": "第三百二十二章 张居正的决定",
                    "spiderUrl": "25374596.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed5a",
                    "chaptername": "第三百二十三章 人不求人一般高",
                    "spiderUrl": "25390847.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed59",
                    "chaptername": "第三百二十四章 殿试",
                    "spiderUrl": "25393199.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed58",
                    "chaptername": "第三百二十五章 考题",
                    "spiderUrl": "25404219.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed57",
                    "chaptername": "第三百二十六章 内圣外王",
                    "spiderUrl": "25404220.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed56",
                    "chaptername": "第三百二十七章 君权相权",
                    "spiderUrl": "25409042.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed55",
                    "chaptername": "第三百二十八章 评卷",
                    "spiderUrl": "25417251.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed54",
                    "chaptername": "第三百二十九章 待定",
                    "spiderUrl": "25431078.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed53",
                    "chaptername": "第三百三十章 读卷",
                    "spiderUrl": "25431079.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed52",
                    "chaptername": "这一章明天更",
                    "spiderUrl": "25438495.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed51",
                    "chaptername": "第三百三十一章 如出一辙",
                    "spiderUrl": "25443201.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed50",
                    "chaptername": "第三百三十二章 定三鼎甲",
                    "spiderUrl": "25446832.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed4f",
                    "chaptername": "第三百三十三章 折服",
                    "spiderUrl": "25459601.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed4e",
                    "chaptername": "第三百三十四章 金殿传胪",
                    "spiderUrl": "25459602.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed4d",
                    "chaptername": "第三百三十五章 金銮殿",
                    "spiderUrl": "25464808.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed4c",
                    "chaptername": "第三百三十六章 大魁天下",
                    "spiderUrl": "25464809.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed4b",
                    "chaptername": "额，更新延迟一下",
                    "spiderUrl": "25483180.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed4a",
                    "chaptername": "第三百三十七章 君前奏对",
                    "spiderUrl": "25486462.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed49",
                    "chaptername": "第三百三十八章 金銮殿上名扬天下",
                    "spiderUrl": "25509427.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed48",
                    "chaptername": "第三百三十九章 金銮殿下捉婿",
                    "spiderUrl": "25515370.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed47",
                    "chaptername": "第三百四十章 御街夸官（第一更）",
                    "spiderUrl": "25519650.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed46",
                    "chaptername": "第三百四十一章 三元及第匾",
                    "spiderUrl": "25529779.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed45",
                    "chaptername": "第三百四十二章 不会是阉党吧",
                    "spiderUrl": "25529780.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed44",
                    "chaptername": "第三百四十三章 恩荣宴",
                    "spiderUrl": "25558804.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed43",
                    "chaptername": "第三百四十四章 成人之美",
                    "spiderUrl": "25558805.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed42",
                    "chaptername": "第三百四十五章 牛逼的翰林官",
                    "spiderUrl": "25583228.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed41",
                    "chaptername": "第三百四十六章 颜面扫地的何翰林",
                    "spiderUrl": "25583229.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed40",
                    "chaptername": "第三百四十七章 教诲",
                    "spiderUrl": "25583230.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed3f",
                    "chaptername": "第三百四十八章 碑林题名",
                    "spiderUrl": "25588711.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed3e",
                    "chaptername": "第三百四十九章 有人辞官归故里",
                    "spiderUrl": "25602053.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed3d",
                    "chaptername": "第三百五十章 我们家延寿长进了",
                    "spiderUrl": "25602054.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed3c",
                    "chaptername": "第三百五十一章 捷报传乡里",
                    "spiderUrl": "25609342.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed3b",
                    "chaptername": "第三百五十二章 本府错怪你们了",
                    "spiderUrl": "25614253.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed3a",
                    "chaptername": "请假一下",
                    "spiderUrl": "25620576.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed39",
                    "chaptername": "第三百五十三章 真千里驹",
                    "spiderUrl": "25627972.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed38",
                    "chaptername": "发个单章",
                    "spiderUrl": "25628676.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed37",
                    "chaptername": "第三百五十四章 科举第一事",
                    "spiderUrl": "25644686.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed36",
                    "chaptername": "第三百五十五章 受得起",
                    "spiderUrl": "25644687.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed35",
                    "chaptername": "第三百五十六章 拍马屁",
                    "spiderUrl": "25644688.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed34",
                    "chaptername": "第三百五十七章 宣旨",
                    "spiderUrl": "25651267.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed33",
                    "chaptername": "第三百五十八章 名传八方",
                    "spiderUrl": "25665948.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed32",
                    "chaptername": "写新一章前的话",
                    "spiderUrl": "25665949.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed31",
                    "chaptername": "第三百五十九章 牙牌和官袍",
                    "spiderUrl": "25670238.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed30",
                    "chaptername": "第三百六十章 躺着也中枪",
                    "spiderUrl": "25684599.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed2f",
                    "chaptername": "第三百六十一章 大明会典",
                    "spiderUrl": "25684600.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed2e",
                    "chaptername": "第三百六十二章 度君子之腹",
                    "spiderUrl": "25701980.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed2d",
                    "chaptername": "第三百六十三章 翰林值堂",
                    "spiderUrl": "25701981.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed2c",
                    "chaptername": "第三百六十四章 日讲官（第一更）",
                    "spiderUrl": "25738349.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed2b",
                    "chaptername": "第三百六十五章 天下熙熙（第二更）",
                    "spiderUrl": "25738351.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed2a",
                    "chaptername": "第三百六十六章 修典（第三更）",
                    "spiderUrl": "25738353.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed29",
                    "chaptername": "第三百六十七章 画风不对",
                    "spiderUrl": "25744140.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed28",
                    "chaptername": "第三百六十八章 官俸（第二更）",
                    "spiderUrl": "25755804.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed27",
                    "chaptername": "第三百六十九章 请教（第一更）",
                    "spiderUrl": "25755805.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed26",
                    "chaptername": "第三百七十章 申时行的第六感（第二更）",
                    "spiderUrl": "25755806.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed25",
                    "chaptername": "第三百七十一章 有小人啊（第一更）",
                    "spiderUrl": "25755807.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed24",
                    "chaptername": "第三百七十二章 报仇不隔夜（第二更）",
                    "spiderUrl": "25755808.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed23",
                    "chaptername": "第三百七十三章 下官知错了",
                    "spiderUrl": "25772961.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed22",
                    "chaptername": "第三百七十四章 张居正归政",
                    "spiderUrl": "25772962.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed21",
                    "chaptername": "第三百七十五章 我为相府站岗",
                    "spiderUrl": "25777253.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed20",
                    "chaptername": "第三百七十六章 相府",
                    "spiderUrl": "25790602.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed1f",
                    "chaptername": "第三百七十七章 对答（第二更）",
                    "spiderUrl": "25806744.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed1e",
                    "chaptername": "第三百七十八章 力谏张居正",
                    "spiderUrl": "25806745.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed1d",
                    "chaptername": "更新延迟下",
                    "spiderUrl": "25815599.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed1c",
                    "chaptername": "第三百七十九章 可当腰玉",
                    "spiderUrl": "25818325.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed1b",
                    "chaptername": "这一更欠下",
                    "spiderUrl": "25826407.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed1a",
                    "chaptername": "第三百八十章 帮朋友一把",
                    "spiderUrl": "25826408.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed19",
                    "chaptername": "第三百八十一章 朝参",
                    "spiderUrl": "25831432.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed18",
                    "chaptername": "第三百八十二章 给机会",
                    "spiderUrl": "25838365.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed17",
                    "chaptername": "第三百八十三章 你太无耻了",
                    "spiderUrl": "25843375.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed16",
                    "chaptername": "第三百八十四章 辽东大捷",
                    "spiderUrl": "25849328.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed15",
                    "chaptername": "第三百八十五章 硬道理",
                    "spiderUrl": "25853774.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed14",
                    "chaptername": "第三百八十六章 勾心斗角",
                    "spiderUrl": "25858811.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed13",
                    "chaptername": "第三百八十七章 平夷诏",
                    "spiderUrl": "25864504.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed12",
                    "chaptername": "第三百八十八章 当仁不让了",
                    "spiderUrl": "25890930.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed11",
                    "chaptername": "第三百八十九章 不易一字",
                    "spiderUrl": "25890931.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed10",
                    "chaptername": "第三百九十章 屏风书名",
                    "spiderUrl": "25890932.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed0f",
                    "chaptername": "第三百九十一章 君子之争",
                    "spiderUrl": "25890933.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed0e",
                    "chaptername": "第三百九十二章 如愿以偿",
                    "spiderUrl": "25895064.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed0d",
                    "chaptername": "第三百九十三章 浅浅抵京",
                    "spiderUrl": "25901263.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed0c",
                    "chaptername": "第三百九十四章 柔情蜜意",
                    "spiderUrl": "25906714.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed0b",
                    "chaptername": "第三百九十五章 家人，同窗和老师",
                    "spiderUrl": "25920217.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed0a",
                    "chaptername": "第三百九十六章 入直文渊阁",
                    "spiderUrl": "25931304.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed09",
                    "chaptername": "第三百九十七章 拜见阁臣",
                    "spiderUrl": "25946027.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed08",
                    "chaptername": "第三百九十八章 为官之道",
                    "spiderUrl": "25946028.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed07",
                    "chaptername": "第三百九十九章 口碑",
                    "spiderUrl": "25951924.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed06",
                    "chaptername": "第四百章 不收礼",
                    "spiderUrl": "25955879.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed05",
                    "chaptername": "第四百零一章 入直第一天（第二更）",
                    "spiderUrl": "25959021.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed04",
                    "chaptername": "请假一下。",
                    "spiderUrl": "25972299.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed03",
                    "chaptername": "第四百零二章 闹事",
                    "spiderUrl": "25972300.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed02",
                    "chaptername": "第四百零三章 围门",
                    "spiderUrl": "25982137.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed01",
                    "chaptername": "第四百零三章 围门",
                    "spiderUrl": "25982138.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ed00",
                    "chaptername": "额，重发章节了，声明一下",
                    "spiderUrl": "25982139.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecff",
                    "chaptername": "新的一章已更",
                    "spiderUrl": "25984750.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecfe",
                    "chaptername": "第四百零五章 邀功来了（第二更）",
                    "spiderUrl": "25994567.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecfd",
                    "chaptername": "第四百零六章 天子赐服",
                    "spiderUrl": "25994568.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecfc",
                    "chaptername": "第四百零七章 显摆显摆",
                    "spiderUrl": "26009836.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecfb",
                    "chaptername": "第四百零八章 求办事",
                    "spiderUrl": "26009837.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecfa",
                    "chaptername": "请假一下",
                    "spiderUrl": "26021397.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf9",
                    "chaptername": "第四百零九章 红颜一笑",
                    "spiderUrl": "26021398.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf8",
                    "chaptername": "第四百一十章 咱是笔杆子",
                    "spiderUrl": "26027617.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf7",
                    "chaptername": "第四百一十一章 你就是太小心谨慎了",
                    "spiderUrl": "26031697.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf6",
                    "chaptername": "第四百一十二章 张四维",
                    "spiderUrl": "26037492.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf5",
                    "chaptername": "第四百一十三章 泄密",
                    "spiderUrl": "26049269.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf4",
                    "chaptername": "第四百一十四章 跟我们走一趟",
                    "spiderUrl": "26049270.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf3",
                    "chaptername": "第四百一十五章 审问（两更合一更）",
                    "spiderUrl": "26066799.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf2",
                    "chaptername": "第四百一十六章 冲动",
                    "spiderUrl": "26066800.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf1",
                    "chaptername": "第四百一十七章 造化不小",
                    "spiderUrl": "26083241.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecf0",
                    "chaptername": "请假一下",
                    "spiderUrl": "26083242.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecef",
                    "chaptername": "第四百一十八章 救兵来了",
                    "spiderUrl": "26090252.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecee",
                    "chaptername": "第四百一十九章 东厂听记",
                    "spiderUrl": "26097188.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eced",
                    "chaptername": "第四百二十章 立威",
                    "spiderUrl": "26103490.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecec",
                    "chaptername": "第四百二十一章 御前",
                    "spiderUrl": "26109656.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eceb",
                    "chaptername": "第四百二十二章 有备无患",
                    "spiderUrl": "26121318.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecea",
                    "chaptername": "第四百二十三章 感到放心",
                    "spiderUrl": "26127005.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece9",
                    "chaptername": "第四百二十四章 委以重任",
                    "spiderUrl": "26142651.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece8",
                    "chaptername": "第四百二十五章 有客上门",
                    "spiderUrl": "26142652.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece7",
                    "chaptername": "第四百二十六章 部费",
                    "spiderUrl": "26142653.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece6",
                    "chaptername": "第四百二十七章 权力所在",
                    "spiderUrl": "26150117.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece5",
                    "chaptername": "请假一下",
                    "spiderUrl": "26176560.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece4",
                    "chaptername": "第四百二十八章 会揖",
                    "spiderUrl": "26176561.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece3",
                    "chaptername": "第四百三十章 垂世文章",
                    "spiderUrl": "26176562.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece2",
                    "chaptername": "第四百三十一章 我给首辅提意见",
                    "spiderUrl": "26176563.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece1",
                    "chaptername": "第四百三十二章 吾有所得",
                    "spiderUrl": "26183473.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ece0",
                    "chaptername": "第四百三十三章 师恩如山",
                    "spiderUrl": "26197696.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecdf",
                    "chaptername": "第四百三十四章 跑关系（两更合一更）",
                    "spiderUrl": "26197697.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecde",
                    "chaptername": "第四百三十五章 拣官（两更合一更）",
                    "spiderUrl": "26203844.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecdd",
                    "chaptername": "第四百三十六章 温馨",
                    "spiderUrl": "26216836.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecdc",
                    "chaptername": "请假一下",
                    "spiderUrl": "26216837.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecdb",
                    "chaptername": "第四百三十七章 这就是帝王师啊",
                    "spiderUrl": "26229061.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecda",
                    "chaptername": "第四百三十八章 经筵之上",
                    "spiderUrl": "26229062.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd9",
                    "chaptername": "第四百三十九章 巧妙回答",
                    "spiderUrl": "26244566.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd8",
                    "chaptername": "第四百四十一章 听君一席话胜读十年书",
                    "spiderUrl": "26254655.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd7",
                    "chaptername": "第四百四十二章 郊祭",
                    "spiderUrl": "26264467.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd6",
                    "chaptername": "第四百四十三章 应变",
                    "spiderUrl": "26271326.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd5",
                    "chaptername": "第四百四十五章 这风越烈越好",
                    "spiderUrl": "26277469.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd4",
                    "chaptername": "四百四十六章 宫廷盛宴",
                    "spiderUrl": "26284135.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd3",
                    "chaptername": "四百四十七章 不要脸",
                    "spiderUrl": "26293292.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd2",
                    "chaptername": "今天请假",
                    "spiderUrl": "26298416.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd1",
                    "chaptername": "四百四十八章 李三才",
                    "spiderUrl": "26306020.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecd0",
                    "chaptername": "四百四十九章 满分的逼",
                    "spiderUrl": "26312691.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eccf",
                    "chaptername": "四百五十章 名扬藩邦",
                    "spiderUrl": "26319546.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecce",
                    "chaptername": "四百五十一章 殿上真相（两更合一更）",
                    "spiderUrl": "26328115.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eccd",
                    "chaptername": "四百五十二章 升官啦",
                    "spiderUrl": "26347497.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eccc",
                    "chaptername": "四百五十三章 给足面子",
                    "spiderUrl": "26347498.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eccb",
                    "chaptername": "四百五十四章 糟糠之妻",
                    "spiderUrl": "26347499.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecca",
                    "chaptername": "四百五十五章 道贺",
                    "spiderUrl": "26354056.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc9",
                    "chaptername": "四百五十六章 堂兄来京",
                    "spiderUrl": "26359356.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc8",
                    "chaptername": "四百五十七章 感激",
                    "spiderUrl": "26365314.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc7",
                    "chaptername": "今天请假",
                    "spiderUrl": "26378280.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc6",
                    "chaptername": "四百五十八章 高考移民",
                    "spiderUrl": "26384240.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc5",
                    "chaptername": "四百五十九章 家和万事兴",
                    "spiderUrl": "26389670.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc4",
                    "chaptername": "四百六十章 幕客",
                    "spiderUrl": "26410166.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc3",
                    "chaptername": "四百六十一章 清丈田亩论",
                    "spiderUrl": "26410167.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc2",
                    "chaptername": "四百六十二章 为官之道",
                    "spiderUrl": "26410168.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc1",
                    "chaptername": "四百六十三章 解衣衣我",
                    "spiderUrl": "26416526.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecc0",
                    "chaptername": "卡文了",
                    "spiderUrl": "26427924.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecbf",
                    "chaptername": "四百六十四章 治幕",
                    "spiderUrl": "26427925.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecbe",
                    "chaptername": "四百六十五章 上门送礼",
                    "spiderUrl": "26432005.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecbd",
                    "chaptername": "四百六十六章 申时行的喜好",
                    "spiderUrl": "26445857.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecbc",
                    "chaptername": "四百六十七章 世兄",
                    "spiderUrl": "26450711.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecbb",
                    "chaptername": "四百六十八章 姻缘",
                    "spiderUrl": "26459359.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecba",
                    "chaptername": "四百六十九章 潘季驯",
                    "spiderUrl": "26485160.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb9",
                    "chaptername": "四百七十章 牛人（两更合一更）",
                    "spiderUrl": "26485161.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb8",
                    "chaptername": "四百七十一章 ********",
                    "spiderUrl": "26504927.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb7",
                    "chaptername": "发个单章",
                    "spiderUrl": "26554218.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb6",
                    "chaptername": "四百七十二章 京察",
                    "spiderUrl": "26554219.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb5",
                    "chaptername": "四百七十三章 有眉目了",
                    "spiderUrl": "26554220.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb4",
                    "chaptername": "四百七十四章 说与不说",
                    "spiderUrl": "26554221.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb3",
                    "chaptername": "四百七十五章 决心",
                    "spiderUrl": "26554222.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb2",
                    "chaptername": "请假一下",
                    "spiderUrl": "26554223.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb1",
                    "chaptername": "四百七十六章 上不负天子，下不负所学",
                    "spiderUrl": "26560712.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecb0",
                    "chaptername": "四百七十七章 此子莫非奇才",
                    "spiderUrl": "26564020.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecaf",
                    "chaptername": "四百七十八章 足以心安",
                    "spiderUrl": "26567618.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecae",
                    "chaptername": "四百七十九章 放爆仗",
                    "spiderUrl": "26574591.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecad",
                    "chaptername": "四百八十章 潘季驯相求",
                    "spiderUrl": "26581318.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecac",
                    "chaptername": "四百八十一章 喜还是不喜（两更合一更）",
                    "spiderUrl": "26591342.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecab",
                    "chaptername": "四百八十二章 驿站",
                    "spiderUrl": "26592422.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ecaa",
                    "chaptername": "四百八十三章 装逼打脸哪家强",
                    "spiderUrl": "26596048.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca9",
                    "chaptername": "四百八十四章 袁宏道",
                    "spiderUrl": "26632778.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca8",
                    "chaptername": "四百八十五 西湖游记",
                    "spiderUrl": "26645102.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca7",
                    "chaptername": "四百八十六章 湖上文会",
                    "spiderUrl": "26655961.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca6",
                    "chaptername": "四百八十七章 这就非常尴尬了",
                    "spiderUrl": "26663032.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca5",
                    "chaptername": "四百八十八章 真假",
                    "spiderUrl": "26674408.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca4",
                    "chaptername": "四百八十九章 白纸",
                    "spiderUrl": "26696477.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca3",
                    "chaptername": "四百九十章 以情动人",
                    "spiderUrl": "26701342.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca2",
                    "chaptername": "四百九十一章 欺世盗名",
                    "spiderUrl": "26713115.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca1",
                    "chaptername": "四百九十二章 养猪？",
                    "spiderUrl": "26717551.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eca0",
                    "chaptername": "四百九十三章 陆翁",
                    "spiderUrl": "26738296.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec9f",
                    "chaptername": "四百九十四章 对错（第一更）",
                    "spiderUrl": "26744234.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec9e",
                    "chaptername": "四百九十五章 见闻（第二更）",
                    "spiderUrl": "26747572.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec9d",
                    "chaptername": "四百九十六章 失踪之事（第一更）",
                    "spiderUrl": "26751432.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec9c",
                    "chaptername": "四百九十七章 钦差（第二更）",
                    "spiderUrl": "26762964.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec9b",
                    "chaptername": "四百九十八章 一目十行（第一更）",
                    "spiderUrl": "26764440.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec9a",
                    "chaptername": "四百九十九章 蛛丝马迹（第二更）",
                    "spiderUrl": "26771279.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec99",
                    "chaptername": "第五百章 天网恢恢（第一更）",
                    "spiderUrl": "26772700.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec98",
                    "chaptername": "额，更新延后吧",
                    "spiderUrl": "26776636.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec97",
                    "chaptername": "五百零一章 船户案",
                    "spiderUrl": "26782158.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec96",
                    "chaptername": "五百零二章 返家",
                    "spiderUrl": "26787036.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec95",
                    "chaptername": "五百零三章 鼎边",
                    "spiderUrl": "26796311.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec94",
                    "chaptername": "今天请假",
                    "spiderUrl": "26806950.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec93",
                    "chaptername": "五百零四章 当年同窗",
                    "spiderUrl": "26809306.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec92",
                    "chaptername": "单章",
                    "spiderUrl": "26811027.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec91",
                    "chaptername": "五百零五章 就是怕锦衣夜行啊",
                    "spiderUrl": "26823227.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec90",
                    "chaptername": "五百零六章 亲人重逢",
                    "spiderUrl": "26831305.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec8f",
                    "chaptername": "五百零七章 家宴",
                    "spiderUrl": "26843821.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec8e",
                    "chaptername": "五百零八章 相爷这唱得是哪一出（两更合一更）",
                    "spiderUrl": "26847474.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec8d",
                    "chaptername": "五百零九章 官场震动",
                    "spiderUrl": "26854948.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec8c",
                    "chaptername": "五百一十章 恭敬",
                    "spiderUrl": "26863946.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec8b",
                    "chaptername": "五百一十一章 钟鸣鼎食",
                    "spiderUrl": "26893690.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec8a",
                    "chaptername": "第五百一十二章 帝王师",
                    "spiderUrl": "26893691.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec89",
                    "chaptername": "五百一十三章 见恩师",
                    "spiderUrl": "26893692.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec88",
                    "chaptername": "五百一十四章 故人之事",
                    "spiderUrl": "26922185.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec87",
                    "chaptername": "五百一十五章 一个小目标（第一更）",
                    "spiderUrl": "26924326.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec86",
                    "chaptername": "五百一十六章 装逼失败（第二更）",
                    "spiderUrl": "26931835.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec85",
                    "chaptername": "五百一十七章 一家人",
                    "spiderUrl": "26941452.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec84",
                    "chaptername": "五百一十八章 利在千秋",
                    "spiderUrl": "26949044.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec83",
                    "chaptername": "五百一十九 来客",
                    "spiderUrl": "26969969.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec82",
                    "chaptername": "五百二十章 碑文之事",
                    "spiderUrl": "26969970.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec81",
                    "chaptername": "五百二十一章 处置（两更合一更）",
                    "spiderUrl": "27035859.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec80",
                    "chaptername": "五百二十二章 拉关系",
                    "spiderUrl": "27035860.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec7f",
                    "chaptername": "五百二十三章 谈心",
                    "spiderUrl": "27035861.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec7e",
                    "chaptername": "第五百二十四章 朱薯的名声",
                    "spiderUrl": "27037423.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec7d",
                    "chaptername": "五百二十五章 同学少年都不贱",
                    "spiderUrl": "27037424.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec7c",
                    "chaptername": "五百二十六章 世当珍惜",
                    "spiderUrl": "27043553.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec7b",
                    "chaptername": "五百二十七章 回乡",
                    "spiderUrl": "27046963.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec7a",
                    "chaptername": "五百二十八章 献殷情",
                    "spiderUrl": "27054845.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec79",
                    "chaptername": "请假一天",
                    "spiderUrl": "27071845.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec78",
                    "chaptername": "五百二十九章 藏之名山",
                    "spiderUrl": "27081857.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec77",
                    "chaptername": "五百三十章 回京（两更合一更）",
                    "spiderUrl": "27097845.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec76",
                    "chaptername": "五百三十一章 汤显祖",
                    "spiderUrl": "27109419.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec75",
                    "chaptername": "五百三十二章 评价",
                    "spiderUrl": "27122425.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec74",
                    "chaptername": "五百三十三章 引荐",
                    "spiderUrl": "27138058.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec73",
                    "chaptername": "五百三十四章 分量",
                    "spiderUrl": "27145109.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec72",
                    "chaptername": "五百三十五章 再至相府",
                    "spiderUrl": "27151145.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec71",
                    "chaptername": "五百三十六章 三个问题",
                    "spiderUrl": "27158111.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec70",
                    "chaptername": "五百三十七章 摊上事了",
                    "spiderUrl": "27164414.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec6f",
                    "chaptername": "五百三十八章 宫闱之事",
                    "spiderUrl": "27179250.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec6e",
                    "chaptername": "五百三十九章 建言",
                    "spiderUrl": "27192684.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec6d",
                    "chaptername": "五百四十章 日讲官值庐",
                    "spiderUrl": "27200894.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec6c",
                    "chaptername": "五百四十一章 旧日同僚",
                    "spiderUrl": "27211656.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec6b",
                    "chaptername": "五百四十二章 考题",
                    "spiderUrl": "27220248.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec6a",
                    "chaptername": "五百四十三章 进讲",
                    "spiderUrl": "27237466.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec69",
                    "chaptername": "五百四十四章 文华殿上",
                    "spiderUrl": "27255460.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec68",
                    "chaptername": "五百四十五章 讲官福利",
                    "spiderUrl": "27271971.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec67",
                    "chaptername": "五百四十六章 御膳",
                    "spiderUrl": "27281548.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec66",
                    "chaptername": "五百四十七章 拐弯抹角",
                    "spiderUrl": "27289827.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec65",
                    "chaptername": "五百四十八章 说一不说二",
                    "spiderUrl": "27297453.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec64",
                    "chaptername": "五百四十九章 单独召见",
                    "spiderUrl": "27313769.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec63",
                    "chaptername": "五百五十章 私问",
                    "spiderUrl": "27323300.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec62",
                    "chaptername": "五百五十一章 侍君之心",
                    "spiderUrl": "27336208.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec61",
                    "chaptername": "五百五十二章 动怒",
                    "spiderUrl": "27346086.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec60",
                    "chaptername": "五百五十三章 宫里贵人",
                    "spiderUrl": "27351812.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec5f",
                    "chaptername": "五百五十四章 耍赖",
                    "spiderUrl": "27360610.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec5e",
                    "chaptername": "五百五十五章 台阶",
                    "spiderUrl": "27371003.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec5d",
                    "chaptername": "五百五十六章 中道而行",
                    "spiderUrl": "27380706.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec5c",
                    "chaptername": "五百五十七章 关系",
                    "spiderUrl": "27386438.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec5b",
                    "chaptername": "五百五十八章 书肆",
                    "spiderUrl": "27392279.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec5a",
                    "chaptername": "五百五十九章 客官真乃神人",
                    "spiderUrl": "27397832.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec59",
                    "chaptername": "五百六十章 出宫的皇帝",
                    "spiderUrl": "27403860.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec58",
                    "chaptername": "五百六十一章 朵颜使节",
                    "spiderUrl": "27409238.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec57",
                    "chaptername": "五百六十二章 四夷馆",
                    "spiderUrl": "27415809.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec56",
                    "chaptername": "五百六十三章 亲自上阵",
                    "spiderUrl": "27421436.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec55",
                    "chaptername": "五百六十四章 佩服",
                    "spiderUrl": "27429089.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec54",
                    "chaptername": "五百六十五章 朝贡仪",
                    "spiderUrl": "27431102.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec53",
                    "chaptername": "五百六十六章 无耻",
                    "spiderUrl": "27437184.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec52",
                    "chaptername": "五百六十七章 宣表",
                    "spiderUrl": "27440894.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec51",
                    "chaptername": "五百六十八章 国书",
                    "spiderUrl": "27449052.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec50",
                    "chaptername": "五百六十九章 文成镇番邦",
                    "spiderUrl": "27453061.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec4f",
                    "chaptername": "五百七十章 赏赐",
                    "spiderUrl": "27462270.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec4e",
                    "chaptername": "五百七十一章 斗牛服",
                    "spiderUrl": "27470204.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec4d",
                    "chaptername": "五百七十二章",
                    "spiderUrl": "27481496.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec4c",
                    "chaptername": "五百七十三章 向天子推荐",
                    "spiderUrl": "27483818.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec4b",
                    "chaptername": "五百七十四章 工于谋身（第一更）",
                    "spiderUrl": "27496027.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec4a",
                    "chaptername": "五百七十五章 升迁侍讲（第二更）",
                    "spiderUrl": "27497138.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec49",
                    "chaptername": "五百七十六章 经筵讲官（第一更）",
                    "spiderUrl": "27503399.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec48",
                    "chaptername": "五百七十七章 儒臣辩经（第二更）",
                    "spiderUrl": "27510730.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec47",
                    "chaptername": "精品感言",
                    "spiderUrl": "27510731.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec46",
                    "chaptername": "五百七十八章 敌军阵容（第一更）",
                    "spiderUrl": "27513578.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec45",
                    "chaptername": "五百七十九章 论点（第二更）",
                    "spiderUrl": "27513579.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec44",
                    "chaptername": "更新延迟至明天",
                    "spiderUrl": "27520666.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec43",
                    "chaptername": "五百八十章 唇枪舌剑",
                    "spiderUrl": "27544543.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec42",
                    "chaptername": "五百八十一章 论破",
                    "spiderUrl": "27544544.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec41",
                    "chaptername": "五百八十二章 舌战群儒（上）",
                    "spiderUrl": "27544545.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec40",
                    "chaptername": "五百八十三章 舌战群儒（下）",
                    "spiderUrl": "27552603.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec3f",
                    "chaptername": "五百八十四章 我不是针对谁",
                    "spiderUrl": "27555656.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec3e",
                    "chaptername": "五百八十五章 辩经胜负",
                    "spiderUrl": "27560135.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec3d",
                    "chaptername": "五百八十六章 官员反应（第一更）",
                    "spiderUrl": "27561896.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec3c",
                    "chaptername": "五百八十七章 不打不相识（第二更）",
                    "spiderUrl": "27563230.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec3b",
                    "chaptername": "五百八十八章 两名书生（第一更）",
                    "spiderUrl": "27565518.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec3a",
                    "chaptername": "五百八十九章 民间反应（第二更）",
                    "spiderUrl": "27566989.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec39",
                    "chaptername": "五百九十章 林府亲事（第一更）",
                    "spiderUrl": "27568269.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec38",
                    "chaptername": "五百九十一章 甩锅（第二更）",
                    "spiderUrl": "27569566.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec37",
                    "chaptername": "五百九十二章 被弹劾了（第一更）",
                    "spiderUrl": "27571002.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec36",
                    "chaptername": "五百九十三章 话题性（第二更）",
                    "spiderUrl": "27574695.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec35",
                    "chaptername": "五百九十四章 门生",
                    "spiderUrl": "27574696.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec34",
                    "chaptername": "五百九十五章 爱卿真乃高才",
                    "spiderUrl": "27603534.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec33",
                    "chaptername": "五百九十六章 与首辅同行",
                    "spiderUrl": "27603535.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec32",
                    "chaptername": "五百九十七章 谨慎应对",
                    "spiderUrl": "27603536.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec31",
                    "chaptername": "五百九十八章 事功之学（谢午后阳光书友的盟主）",
                    "spiderUrl": "27603537.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec30",
                    "chaptername": "五百九十九章 弹劾之事",
                    "spiderUrl": "27603538.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec2f",
                    "chaptername": "六百章 自陈表",
                    "spiderUrl": "27609377.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec2e",
                    "chaptername": "六百零一章 文章华国",
                    "spiderUrl": "27622912.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec2d",
                    "chaptername": "六百零二章 实应为御史",
                    "spiderUrl": "27627583.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec2c",
                    "chaptername": "六百零三章 书生议论",
                    "spiderUrl": "27642322.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec2b",
                    "chaptername": "六百零四章 皇帝赏赐",
                    "spiderUrl": "27642323.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec2a",
                    "chaptername": "六百零五章 无招胜有招",
                    "spiderUrl": "27653477.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec29",
                    "chaptername": "六百零六章 杀一儆百",
                    "spiderUrl": "27660753.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec28",
                    "chaptername": "六百零七章 怒起",
                    "spiderUrl": "27672725.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec27",
                    "chaptername": "六百零八章 咱们当面羞辱一下",
                    "spiderUrl": "27692441.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec26",
                    "chaptername": "六百零九章 报复",
                    "spiderUrl": "27692442.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec25",
                    "chaptername": "六百一十章 拿人",
                    "spiderUrl": "27701993.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec24",
                    "chaptername": "六百一十一章 利用",
                    "spiderUrl": "27701994.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec23",
                    "chaptername": "六百一十二章 事情闹大了",
                    "spiderUrl": "27709947.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec22",
                    "chaptername": "六百一十三章 告御状",
                    "spiderUrl": "27709948.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec21",
                    "chaptername": "六百一十四章 算计（第一更）",
                    "spiderUrl": "27714864.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec20",
                    "chaptername": "六百一十五章 殿上争执（第二更）",
                    "spiderUrl": "27716937.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec1f",
                    "chaptername": "六百一十六章 林三元在哪？",
                    "spiderUrl": "27734301.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec1e",
                    "chaptername": "请个假",
                    "spiderUrl": "27734302.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec1d",
                    "chaptername": "六百一十七章 谁能挽此危局（两更合一更）",
                    "spiderUrl": "27734303.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec1c",
                    "chaptername": "六百一十八章 我就是林延潮",
                    "spiderUrl": "27740464.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec1b",
                    "chaptername": "六百一十九章 先要好处",
                    "spiderUrl": "27754592.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec1a",
                    "chaptername": "六百二十章 采铜之学（多谢龙蠖不关情书友盟主）",
                    "spiderUrl": "27754593.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec19",
                    "chaptername": "关于更新时间",
                    "spiderUrl": "27761221.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec18",
                    "chaptername": "六百二十一章 明月映万川",
                    "spiderUrl": "27774936.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec17",
                    "chaptername": "第六百二十二章 天下兴亡，匹夫有责！",
                    "spiderUrl": "27792973.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec16",
                    "chaptername": "六百二十四章 大大的忠臣",
                    "spiderUrl": "27792975.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec15",
                    "chaptername": "六百二十五章 林学",
                    "spiderUrl": "27798464.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec14",
                    "chaptername": "六百二十六章 矫旨",
                    "spiderUrl": "27802594.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec13",
                    "chaptername": "六百二十七章 公道自在人心",
                    "spiderUrl": "27810305.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec12",
                    "chaptername": "六百二十八章 门生",
                    "spiderUrl": "27812820.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec11",
                    "chaptername": "六百二十九章 拜师",
                    "spiderUrl": "27822748.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec10",
                    "chaptername": "六百三十章 讲学",
                    "spiderUrl": "27830631.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec0f",
                    "chaptername": "六百三十一章 道统论",
                    "spiderUrl": "27834403.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec0e",
                    "chaptername": "六百三十二章 轰动",
                    "spiderUrl": "27843205.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec0d",
                    "chaptername": "六百三十三章 以经术定国策",
                    "spiderUrl": "27853237.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec0c",
                    "chaptername": "六百三十四章 皇帝来我家",
                    "spiderUrl": "27855549.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec0b",
                    "chaptername": "六百三十五章 谁家的小胖子",
                    "spiderUrl": "27864565.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec0a",
                    "chaptername": "六百三十六章 呆货一个",
                    "spiderUrl": "27879991.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec09",
                    "chaptername": "六百三十七章 家有贤妻",
                    "spiderUrl": "27889657.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec08",
                    "chaptername": "六百三十八章 荔枝肉",
                    "spiderUrl": "27909330.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec07",
                    "chaptername": "六百三十九章 鲥鱼",
                    "spiderUrl": "27918799.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec06",
                    "chaptername": "六百四十章 天子心意",
                    "spiderUrl": "27953805.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec05",
                    "chaptername": "六百四十一章 经科史科",
                    "spiderUrl": "27953806.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec04",
                    "chaptername": "六百四十二章 文教也是事功（两更合一更）",
                    "spiderUrl": "27965611.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec03",
                    "chaptername": "六百四十三章 创刊",
                    "spiderUrl": "27977841.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec02",
                    "chaptername": "六百四十四章 道可御器",
                    "spiderUrl": "27985122.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec01",
                    "chaptername": "六百四十五章 发来贺电",
                    "spiderUrl": "27990519.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ec00",
                    "chaptername": "六百四十六章 官复原职（求推荐票）",
                    "spiderUrl": "28011208.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebff",
                    "chaptername": "六百四十七章 得陇望蜀",
                    "spiderUrl": "28011209.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebfe",
                    "chaptername": "六百四十八章 燕京时报",
                    "spiderUrl": "28016228.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebfd",
                    "chaptername": "六百四十九章 县试放榜",
                    "spiderUrl": "28024571.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebfc",
                    "chaptername": "六百五十章 甄家的打算",
                    "spiderUrl": "28029622.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebfb",
                    "chaptername": "六百五十一章 我干嘛答应你",
                    "spiderUrl": "28034323.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebfa",
                    "chaptername": "六百五十二章 爱屋及乌",
                    "spiderUrl": "28040255.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf9",
                    "chaptername": "六百五十三章 两家之好",
                    "spiderUrl": "28043233.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf8",
                    "chaptername": "六百五十四章 重返朝堂",
                    "spiderUrl": "28047014.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf7",
                    "chaptername": "六百五十五章 廷议",
                    "spiderUrl": "28054363.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf6",
                    "chaptername": "六百五十六章 露了一手",
                    "spiderUrl": "28061881.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf5",
                    "chaptername": "六百五十七章 看座",
                    "spiderUrl": "28072204.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf4",
                    "chaptername": "六百五十八章 搬起石头砸自己的脚（第一更）",
                    "spiderUrl": "28079277.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf3",
                    "chaptername": "六百五十九章 初衷（第二更）",
                    "spiderUrl": "28082409.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf2",
                    "chaptername": "六百六十章 我有一点浅见",
                    "spiderUrl": "28124892.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf1",
                    "chaptername": "六百六十一章 陛下圣谕",
                    "spiderUrl": "28124893.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebf0",
                    "chaptername": "六百六十二章 民可使由之，不可使知之",
                    "spiderUrl": "28131610.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebef",
                    "chaptername": "六百六十三章 掌握全局",
                    "spiderUrl": "28137771.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebee",
                    "chaptername": "六百六十四章 直起居",
                    "spiderUrl": "28142900.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebed",
                    "chaptername": "六百六十五章 急变",
                    "spiderUrl": "28158318.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebec",
                    "chaptername": "六百六十六章 执笔",
                    "spiderUrl": "28169921.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebeb",
                    "chaptername": "六百六十七章 众人来助",
                    "spiderUrl": "28175272.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebea",
                    "chaptername": "六百六十八章 出入承明",
                    "spiderUrl": "28179196.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe9",
                    "chaptername": "六百六十九章 撰起居注",
                    "spiderUrl": "28184402.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe8",
                    "chaptername": "六百七十章 一鸣惊人",
                    "spiderUrl": "28188544.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe7",
                    "chaptername": "六百七十一章 文华殿议政",
                    "spiderUrl": "28192295.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe6",
                    "chaptername": "六百七十二章 归政",
                    "spiderUrl": "28196460.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe5",
                    "chaptername": "六百七十三章 约见",
                    "spiderUrl": "28199790.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe4",
                    "chaptername": "六百七十四章 未卜先知",
                    "spiderUrl": "28204342.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe3",
                    "chaptername": "六百七十五章 请求致仕",
                    "spiderUrl": "28209399.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe2",
                    "chaptername": "六百七十六章 朕信你",
                    "spiderUrl": "28214419.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe1",
                    "chaptername": "六百七十七章 插一脚",
                    "spiderUrl": "28224924.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebe0",
                    "chaptername": "六百七十八章 再谏张居正（两更合一更）",
                    "spiderUrl": "28224925.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebdf",
                    "chaptername": "六百七十九章 张居正的托付",
                    "spiderUrl": "28236540.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebde",
                    "chaptername": "六百八十章 人走位冷",
                    "spiderUrl": "28236541.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebdd",
                    "chaptername": "六百八十一章 有一根刺",
                    "spiderUrl": "28240423.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebdc",
                    "chaptername": "六百八十二章 以威福还主上",
                    "spiderUrl": "28252394.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebdb",
                    "chaptername": "六百八十三章 新元辅",
                    "spiderUrl": "28266175.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebda",
                    "chaptername": "六百八十四章 世间再无张江陵",
                    "spiderUrl": "28271390.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd9",
                    "chaptername": "六百八十五章 党争",
                    "spiderUrl": "28277089.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd8",
                    "chaptername": "六百八十六章 上座",
                    "spiderUrl": "28280748.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd7",
                    "chaptername": "六百八十七章 有备算无心",
                    "spiderUrl": "28286390.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd6",
                    "chaptername": "六百八十八章 张四维动手",
                    "spiderUrl": "28291175.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd5",
                    "chaptername": "六百八十九章 潘晟被免",
                    "spiderUrl": "28295708.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd4",
                    "chaptername": "六百九十章 冯保之反击（第二更）",
                    "spiderUrl": "28297258.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd3",
                    "chaptername": "六百九十一章 以行践言",
                    "spiderUrl": "28307924.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd2",
                    "chaptername": "六百九十二章 考官人选",
                    "spiderUrl": "28307925.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd1",
                    "chaptername": "六百九十三章 为难",
                    "spiderUrl": "28312058.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebd0",
                    "chaptername": "六百九十四章 难望项背",
                    "spiderUrl": "28316065.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebcf",
                    "chaptername": "六百九十五章 时报初刊",
                    "spiderUrl": "28324723.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebce",
                    "chaptername": "六百九十六章 行贿",
                    "spiderUrl": "28330430.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebcd",
                    "chaptername": "六百九十七章 再见胡提学（两更合一更）",
                    "spiderUrl": "28334645.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebcc",
                    "chaptername": "六百九十八章 顺水人情",
                    "spiderUrl": "28346374.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebcb",
                    "chaptername": "六百九十九章 重回禁中",
                    "spiderUrl": "28350157.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebca",
                    "chaptername": "第七百章 皇子",
                    "spiderUrl": "28355043.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc9",
                    "chaptername": "七百零一章 林府喜事",
                    "spiderUrl": "28358217.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc8",
                    "chaptername": "七百零二章 指鹿为马（第一更）",
                    "spiderUrl": "28362229.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc7",
                    "chaptername": "七百零三章 封妻荫子（第二更）",
                    "spiderUrl": "28362541.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc6",
                    "chaptername": "七百零四章 赏赐连连（第三更）",
                    "spiderUrl": "28363261.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc5",
                    "chaptername": "七百零五章 托付",
                    "spiderUrl": "28367090.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc4",
                    "chaptername": "七百零六章 出谋划策（第二更）",
                    "spiderUrl": "28367761.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc3",
                    "chaptername": "七百零七章 封爵之议",
                    "spiderUrl": "28372542.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc2",
                    "chaptername": "七百零八章 悬鱼（第二更）",
                    "spiderUrl": "28373496.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc1",
                    "chaptername": "七百零九章 皇帝对青睐",
                    "spiderUrl": "28375957.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebc0",
                    "chaptername": "七百一十章 奏对（第二更）",
                    "spiderUrl": "28377021.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebbf",
                    "chaptername": "第七百一十一章 固执",
                    "spiderUrl": "28381947.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebbe",
                    "chaptername": "七百一十二章 请罪",
                    "spiderUrl": "28384965.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebbd",
                    "chaptername": "七百一十三章 调教皇帝",
                    "spiderUrl": "28390193.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebbc",
                    "chaptername": "七百一十四章 贩售私学",
                    "spiderUrl": "28392742.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebbb",
                    "chaptername": "七百一十五章 青天",
                    "spiderUrl": "28397596.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebba",
                    "chaptername": "七百一十六章 天行健，君子以自强不息",
                    "spiderUrl": "28418265.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb9",
                    "chaptername": "七百一十七章 仍有可为（两更合一更）",
                    "spiderUrl": "28440504.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb8",
                    "chaptername": "七百一十八章 不作就不会死（两更合一更）",
                    "spiderUrl": "28449327.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb7",
                    "chaptername": "七百一十九章 于心何忍",
                    "spiderUrl": "28461708.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb6",
                    "chaptername": "七百二十章 各取所需",
                    "spiderUrl": "28463854.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb5",
                    "chaptername": "七百二十一章 转变",
                    "spiderUrl": "28472767.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb4",
                    "chaptername": "七百二十二章 危身奉上谓之忠",
                    "spiderUrl": "28483290.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb3",
                    "chaptername": "七百二十三章 疑云",
                    "spiderUrl": "28488569.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb2",
                    "chaptername": "七百二十四章 明知不可为而为之（第一更，求月票）",
                    "spiderUrl": "28490719.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb1",
                    "chaptername": "七百二十五章 站在哪一边（第二更，求月票）",
                    "spiderUrl": "28492392.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebb0",
                    "chaptername": "七百二十六章 申时行的忠告",
                    "spiderUrl": "28495376.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebaf",
                    "chaptername": "七百二十七章 走马荐良才（第一更，求月票）",
                    "spiderUrl": "28498628.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebae",
                    "chaptername": "七百二十八章 万事不难（第二更，求月票）",
                    "spiderUrl": "28498629.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebad",
                    "chaptername": "七百二十九章 箭在弦上",
                    "spiderUrl": "28518371.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebac",
                    "chaptername": "七百三十章 今日之生",
                    "spiderUrl": "28525695.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebab",
                    "chaptername": "七百三十一章 冯保倒台",
                    "spiderUrl": "28529327.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ebaa",
                    "chaptername": "七百三十二章 给钱",
                    "spiderUrl": "28534375.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba9",
                    "chaptername": "七百三十三章 保人",
                    "spiderUrl": "28539116.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba8",
                    "chaptername": "七百三十四章 软硬兼施",
                    "spiderUrl": "28542438.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba7",
                    "chaptername": "七百三十五章 言道失控",
                    "spiderUrl": "28544749.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba6",
                    "chaptername": "七百三十六章 悔不听宗海之言",
                    "spiderUrl": "28548056.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba5",
                    "chaptername": "七百三十七章 饭局",
                    "spiderUrl": "28553816.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba4",
                    "chaptername": "七百三十八章 破局",
                    "spiderUrl": "28557410.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba3",
                    "chaptername": "七百三十九章 清算",
                    "spiderUrl": "28560642.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba2",
                    "chaptername": "七百四十章 虽千万人吾往矣",
                    "spiderUrl": "28563347.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba1",
                    "chaptername": "七百四十一章 述剑（两更合一更）",
                    "spiderUrl": "28569180.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eba0",
                    "chaptername": "七百四十二章 君臣",
                    "spiderUrl": "28583169.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb9f",
                    "chaptername": "七百四十三章 拦道",
                    "spiderUrl": "28583170.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb9e",
                    "chaptername": "七百四十四章 天下为公疏",
                    "spiderUrl": "28586829.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb9d",
                    "chaptername": "七百四十五章 报社被封",
                    "spiderUrl": "28590962.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb9c",
                    "chaptername": "七百四十六章 慷慨陈词",
                    "spiderUrl": "28600836.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb9b",
                    "chaptername": "七百四十七章 千古奇冤",
                    "spiderUrl": "28609780.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb9a",
                    "chaptername": "七百四十八章 分歧",
                    "spiderUrl": "28616548.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb99",
                    "chaptername": "七百四十九章 乃左中允林延潮（两更合一更）",
                    "spiderUrl": "28627046.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb98",
                    "chaptername": "七百五十章 罪在朕躬",
                    "spiderUrl": "28631427.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb97",
                    "chaptername": "七百五十一章 十三太保",
                    "spiderUrl": "28634939.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb96",
                    "chaptername": "七百五十二章 既往不咎",
                    "spiderUrl": "28640409.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb95",
                    "chaptername": "七百五十三章 我以我血荐轩辕",
                    "spiderUrl": "28650131.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb94",
                    "chaptername": "七百五十四章 首辅（谢豪猪tyz书友盟主）",
                    "spiderUrl": "28654619.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb93",
                    "chaptername": "七百五十五章 救与不救",
                    "spiderUrl": "28656665.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb92",
                    "chaptername": "七百五十六章 舆论",
                    "spiderUrl": "28661993.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb91",
                    "chaptername": "七百五十七章 积怨（两更合一更）",
                    "spiderUrl": "28670872.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb90",
                    "chaptername": "七百五十八章 陈词（二合一）",
                    "spiderUrl": "28679845.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb8f",
                    "chaptername": "七百五十九章 你们这是在逼朕（二合一）",
                    "spiderUrl": "28687299.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb8e",
                    "chaptername": "七百六十章 拍门哭谏（二合一）",
                    "spiderUrl": "28703669.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb8d",
                    "chaptername": "七百六十一章 慈宁宫",
                    "spiderUrl": "28703670.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb8c",
                    "chaptername": "七百六十二章 力谏",
                    "spiderUrl": "28718391.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb8b",
                    "chaptername": "七百六十三章 天下归心",
                    "spiderUrl": "28723572.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb8a",
                    "chaptername": "七百六十三章 天下归心",
                    "spiderUrl": "28723573.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb89",
                    "chaptername": "七百六十四章 布局之人",
                    "spiderUrl": "28730040.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb88",
                    "chaptername": "七百六十五章 请转告陛下",
                    "spiderUrl": "28814003.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb87",
                    "chaptername": "七百六十六章 张府（二合一）",
                    "spiderUrl": "28814004.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb86",
                    "chaptername": "七百六十七章 有愧",
                    "spiderUrl": "28860917.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb85",
                    "chaptername": "七百六十八章 救人（二合一）",
                    "spiderUrl": "29018212.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb84",
                    "chaptername": "七百六十九章 同学情谊",
                    "spiderUrl": "29071179.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb83",
                    "chaptername": "七百七十章 念起好来",
                    "spiderUrl": "29086384.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb82",
                    "chaptername": "七百七十一章 此林延潮之功（二合一）",
                    "spiderUrl": "29092503.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb81",
                    "chaptername": "七百七十二章 转机（第一更）",
                    "spiderUrl": "29094631.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb80",
                    "chaptername": "七百七十三章 亲民官（第二更）",
                    "spiderUrl": "29096293.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb7f",
                    "chaptername": "七百七十四章 情谊",
                    "spiderUrl": "29101905.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb7e",
                    "chaptername": "七百七十五章 祖先之鞭",
                    "spiderUrl": "29119823.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb7d",
                    "chaptername": "七百七十六章 屈就",
                    "spiderUrl": "29128168.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb7c",
                    "chaptername": "七百七十七章 入宫觐见（二合一）",
                    "spiderUrl": "29131851.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb7b",
                    "chaptername": "七百七十八章 法术势",
                    "spiderUrl": "29137786.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb7a",
                    "chaptername": "七百七十九章 枢臣风范",
                    "spiderUrl": "29140488.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb79",
                    "chaptername": "七百八十章 进言",
                    "spiderUrl": "29151031.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb78",
                    "chaptername": "七百八十一章 内应",
                    "spiderUrl": "29152958.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb77",
                    "chaptername": "七百八十二章 外放（补更）",
                    "spiderUrl": "29153751.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb76",
                    "chaptername": "七百八十三章 写信（谢摸摸头书友盟主）",
                    "spiderUrl": "29167441.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb75",
                    "chaptername": "七百八十三章 写信（谢摸摸头书友盟主）",
                    "spiderUrl": "29167441.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb74",
                    "chaptername": "七百八十四章 官场处处皆人情（求推荐票）",
                    "spiderUrl": "29167443.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb73",
                    "chaptername": "七百八十五章 关照",
                    "spiderUrl": "29176603.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb72",
                    "chaptername": "七百八十六章 到任",
                    "spiderUrl": "29185815.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb71",
                    "chaptername": "七百八十七章 座次",
                    "spiderUrl": "29190829.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb70",
                    "chaptername": "七百八十八章 粥厂出事（二合一）",
                    "spiderUrl": "29195084.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb6f",
                    "chaptername": "七百八十九章 顶撞",
                    "spiderUrl": "29200565.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb6e",
                    "chaptername": "七百九十章 对策",
                    "spiderUrl": "29200566.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb6d",
                    "chaptername": "七百九十一章 围攻府城",
                    "spiderUrl": "29206656.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb6c",
                    "chaptername": "七百九十二章 如何选择",
                    "spiderUrl": "29209582.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb6b",
                    "chaptername": "七百九十三章 决定（二合一）",
                    "spiderUrl": "29214172.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb6a",
                    "chaptername": "七百九十四章 破山中贼易，破心中贼难",
                    "spiderUrl": "29219537.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb69",
                    "chaptername": "七百九十五章 打狗给主人看",
                    "spiderUrl": "29223398.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb68",
                    "chaptername": "七百九十六章 下城来谈",
                    "spiderUrl": "29228787.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb67",
                    "chaptername": "七百九十七章 谈判",
                    "spiderUrl": "29231391.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb66",
                    "chaptername": "七百九十八章 钦差来了",
                    "spiderUrl": "29234537.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb65",
                    "chaptername": "七百九十九章 甩锅",
                    "spiderUrl": "29238078.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb64",
                    "chaptername": "八百章 微服私访的钦差",
                    "spiderUrl": "29249295.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb63",
                    "chaptername": "八百零一章 但行好事，莫问前程",
                    "spiderUrl": "29256742.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb62",
                    "chaptername": "八百零二章 河工银",
                    "spiderUrl": "29263261.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb61",
                    "chaptername": "八百零三章 河工的猫腻",
                    "spiderUrl": "29267609.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb60",
                    "chaptername": "八百零四章 青苗法",
                    "spiderUrl": "29275077.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb5f",
                    "chaptername": "八百零五章 君子小人",
                    "spiderUrl": "29279305.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb5e",
                    "chaptername": "八百零六章 忍无可忍无须再忍",
                    "spiderUrl": "29283192.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb5d",
                    "chaptername": "八百零七章 公堂之上骂贪官",
                    "spiderUrl": "29286892.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb5c",
                    "chaptername": "八百零八章 威压一府",
                    "spiderUrl": "29291869.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb5b",
                    "chaptername": "八百零九章 为民做主",
                    "spiderUrl": "29295198.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb5a",
                    "chaptername": "八百一十章 林延潮审案",
                    "spiderUrl": "29310038.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb59",
                    "chaptername": "八百一十一章 林青天",
                    "spiderUrl": "29316515.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb58",
                    "chaptername": "八百一十二章 官断十条路",
                    "spiderUrl": "29354009.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb57",
                    "chaptername": "八百一十三章 东边不亮西边亮",
                    "spiderUrl": "29354010.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb56",
                    "chaptername": "八百一十四章 视察河工",
                    "spiderUrl": "29358937.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb55",
                    "chaptername": "八百一十五章 技术官员",
                    "spiderUrl": "29363668.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb54",
                    "chaptername": "八百一十六章 民情",
                    "spiderUrl": "29366360.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb53",
                    "chaptername": "八百一十七章 真相",
                    "spiderUrl": "29370723.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb52",
                    "chaptername": "第八一十八章 河工大计",
                    "spiderUrl": "29374604.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb51",
                    "chaptername": "第八百一十九章 留下功与名（二合一）",
                    "spiderUrl": "29394520.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb50",
                    "chaptername": "八百二十章 是时候展现真正的技术了",
                    "spiderUrl": "29472065.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb4f",
                    "chaptername": "八百二十一章 新青苗法",
                    "spiderUrl": "29472067.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb4e",
                    "chaptername": "八百二十二章 十段锦法",
                    "spiderUrl": "29544726.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb4d",
                    "chaptername": "八百二十三章 筑堤",
                    "spiderUrl": "29557818.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb4c",
                    "chaptername": "八百二十四章 河道来人",
                    "spiderUrl": "29573196.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb4b",
                    "chaptername": "八百二十五章 风雨欲来（二合一）",
                    "spiderUrl": "29587035.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb4a",
                    "chaptername": "八百二十六章 谁为谁纲",
                    "spiderUrl": "29596032.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb49",
                    "chaptername": "八百二十七章 视察",
                    "spiderUrl": "29615089.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb48",
                    "chaptername": "八百八十二章 自己人",
                    "spiderUrl": "29660863.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb47",
                    "chaptername": "八百二十九章 你敢陷害我",
                    "spiderUrl": "29665504.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb46",
                    "chaptername": "八百三十章 清官狗官",
                    "spiderUrl": "29672523.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb45",
                    "chaptername": "八百三十一章 按院",
                    "spiderUrl": "29678866.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb44",
                    "chaptername": "八百三十二章 阴谋",
                    "spiderUrl": "29678870.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb43",
                    "chaptername": "八百三十三章 这是什么情况？",
                    "spiderUrl": "29689748.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb42",
                    "chaptername": "八百三十四章 这张脸怎如此之厚？",
                    "spiderUrl": "29750928.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb41",
                    "chaptername": "八百三十五章 贤侄一定帮帮我",
                    "spiderUrl": "29750930.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb40",
                    "chaptername": "八百三十六章 请托",
                    "spiderUrl": "29750931.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb3f",
                    "chaptername": "八百三十七章 排衙",
                    "spiderUrl": "29750933.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb3e",
                    "chaptername": "八百三十八章 通判之争",
                    "spiderUrl": "29750935.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb3d",
                    "chaptername": "八百三十九章 请动漕督的面子",
                    "spiderUrl": "29750937.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb3c",
                    "chaptername": "八百四十章 郑伯克段于鄢",
                    "spiderUrl": "29750939.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb3b",
                    "chaptername": "八百四十一章 大网（第一更）",
                    "spiderUrl": "29750940.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb3a",
                    "chaptername": "八百四十二章 公道正义（第二更）",
                    "spiderUrl": "29750942.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb39",
                    "chaptername": "八百四十三章 上奏",
                    "spiderUrl": "29750944.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb38",
                    "chaptername": "八百四十四章 结案",
                    "spiderUrl": "29750946.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb37",
                    "chaptername": "八百四十五章 渡口",
                    "spiderUrl": "29750947.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb36",
                    "chaptername": "八百四十六章 修河（第二更）",
                    "spiderUrl": "29753284.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb35",
                    "chaptername": "八百四十七章 官吏奸滑",
                    "spiderUrl": "29754480.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb34",
                    "chaptername": "八百四十八章 新任知府",
                    "spiderUrl": "29761884.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb33",
                    "chaptername": "八百四十九章 板子与戥子",
                    "spiderUrl": "29766127.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb32",
                    "chaptername": "八百五十章 知府下乡",
                    "spiderUrl": "29769916.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb31",
                    "chaptername": "八百五十一章 刨根到底",
                    "spiderUrl": "29782658.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb30",
                    "chaptername": "八百五十二章 苦心人天不负",
                    "spiderUrl": "29787539.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb2f",
                    "chaptername": "八百五十二章 桃李天下",
                    "spiderUrl": "29790507.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb2e",
                    "chaptername": "八百五十三章 寒门弟子",
                    "spiderUrl": "29794642.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb2d",
                    "chaptername": "八百五十四章 历史人物",
                    "spiderUrl": "29801422.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb2c",
                    "chaptername": "八百五十五章 串票",
                    "spiderUrl": "29810992.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb2b",
                    "chaptername": "八百五十六章 一粒米都不给你",
                    "spiderUrl": "29817069.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb2a",
                    "chaptername": "八百五十七章 馆选",
                    "spiderUrl": "29820027.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb29",
                    "chaptername": "八百五十八章 背景强大",
                    "spiderUrl": "29822764.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb28",
                    "chaptername": "八百五十九章 要钱",
                    "spiderUrl": "29828930.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb27",
                    "chaptername": "八百六十章 盐政",
                    "spiderUrl": "29832407.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb26",
                    "chaptername": "八百六十一章 说话不算话",
                    "spiderUrl": "29835420.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb25",
                    "chaptername": "八百六十二章 卖田",
                    "spiderUrl": "29842102.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb24",
                    "chaptername": "八百六十三章 观点",
                    "spiderUrl": "29846605.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb23",
                    "chaptername": "八百六十四章 民得其惠",
                    "spiderUrl": "29852004.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb22",
                    "chaptername": "八百六十五章 去开封",
                    "spiderUrl": "29857246.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb21",
                    "chaptername": "八百六十六章 家丁",
                    "spiderUrl": "29863045.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb20",
                    "chaptername": "八百六十七章 算计",
                    "spiderUrl": "29869200.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb1f",
                    "chaptername": "八百六十八章 响马的用处",
                    "spiderUrl": "29871087.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb1e",
                    "chaptername": "八百六十九章 坐省长随",
                    "spiderUrl": "29874208.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb1d",
                    "chaptername": "八百七十章 能得卓异吗（二合一）",
                    "spiderUrl": "29892539.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb1c",
                    "chaptername": "八百七十一章 哪里来的钱（二合一）",
                    "spiderUrl": "29929245.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb1b",
                    "chaptername": "八百七十二章 林司马之功",
                    "spiderUrl": "29970354.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb1a",
                    "chaptername": "八百七十三章 贪婪中官",
                    "spiderUrl": "30043468.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb19",
                    "chaptername": "八百七十四章 宗室",
                    "spiderUrl": "30048969.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb18",
                    "chaptername": "八百七十五章 盐政",
                    "spiderUrl": "30061297.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb17",
                    "chaptername": "第八百七十六章 公道何在（二合一）",
                    "spiderUrl": "30078816.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb16",
                    "chaptername": "八百七十七章 妥了",
                    "spiderUrl": "30088749.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb15",
                    "chaptername": "八百七十八章 商议",
                    "spiderUrl": "30095148.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb14",
                    "chaptername": "八百七十九章 怒怼（二合一）",
                    "spiderUrl": "30101847.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb13",
                    "chaptername": "八百八十章 证据（二合一）",
                    "spiderUrl": "30129297.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb12",
                    "chaptername": "八百八十一章 竖阉休走（谢不左不右选择走中间成为本书盟主）",
                    "spiderUrl": "30155610.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb11",
                    "chaptername": "八百八十二章 善后",
                    "spiderUrl": "30160699.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb10",
                    "chaptername": "第八百八十三章 附议",
                    "spiderUrl": "30165665.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb0f",
                    "chaptername": "八百八十四章 众论",
                    "spiderUrl": "30170465.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb0e",
                    "chaptername": "八百八十五章 官员与百姓",
                    "spiderUrl": "30176558.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb0d",
                    "chaptername": "八百八十六章 局",
                    "spiderUrl": "30182399.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb0c",
                    "chaptername": "八百八十七章 杀棋",
                    "spiderUrl": "30189768.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb0b",
                    "chaptername": "八百八十八章 圈套",
                    "spiderUrl": "30194604.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb0a",
                    "chaptername": "八百八十九章 万民书（二合一）",
                    "spiderUrl": "30208998.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb09",
                    "chaptername": "八百九十章 投书",
                    "spiderUrl": "30218847.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb08",
                    "chaptername": "八百九十一章 贪财好货",
                    "spiderUrl": "30225559.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb07",
                    "chaptername": "八百九十二章 淤田哪里去了？",
                    "spiderUrl": "30234310.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb06",
                    "chaptername": "八百九十三章 当杀",
                    "spiderUrl": "30240770.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb05",
                    "chaptername": "八百九十四章 堵塞言路",
                    "spiderUrl": "30248632.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb04",
                    "chaptername": "八百九十五章 去而复返（第一更）",
                    "spiderUrl": "30251531.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb03",
                    "chaptername": "八百九十六章 龙颜大怒（第二更）",
                    "spiderUrl": "30254470.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb02",
                    "chaptername": "八百九十七章 召集",
                    "spiderUrl": "30259974.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb01",
                    "chaptername": "八百九十八章 银子去哪儿了？",
                    "spiderUrl": "30266371.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eb00",
                    "chaptername": "八百九十九章 无耻之尤",
                    "spiderUrl": "30270625.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaff",
                    "chaptername": "九百章 潞王的悲催",
                    "spiderUrl": "30277379.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eafe",
                    "chaptername": "九百零一章 名宦祠",
                    "spiderUrl": "30283664.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eafd",
                    "chaptername": "九百零二章 又来一个",
                    "spiderUrl": "30287351.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eafc",
                    "chaptername": "九百零三章 无需解释",
                    "spiderUrl": "30294746.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eafb",
                    "chaptername": "九百零四章 榜样",
                    "spiderUrl": "30295587.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eafa",
                    "chaptername": "九百零五章 连升三级",
                    "spiderUrl": "30305776.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf9",
                    "chaptername": "九百零六章 大德大功",
                    "spiderUrl": "30306572.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf8",
                    "chaptername": "九百零七章 圣旨",
                    "spiderUrl": "30316884.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf7",
                    "chaptername": "九百零八章 皇帝的密旨",
                    "spiderUrl": "30326804.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf6",
                    "chaptername": "九百零九章 不掺合",
                    "spiderUrl": "30332720.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf5",
                    "chaptername": "九百一十章 太仓王家",
                    "spiderUrl": "30336100.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf4",
                    "chaptername": "九百一十一章 赫赫凶名（二合一）",
                    "spiderUrl": "30337433.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf3",
                    "chaptername": "九百一十二章 马屁的方式",
                    "spiderUrl": "30346773.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf2",
                    "chaptername": "九百一十三章 宰相之才",
                    "spiderUrl": "30352913.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf1",
                    "chaptername": "九百一十四章 未得意先忘形",
                    "spiderUrl": "30356995.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaf0",
                    "chaptername": "九百一十五章 送信",
                    "spiderUrl": "30361843.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaef",
                    "chaptername": "九百一十六章 文华殿",
                    "spiderUrl": "30365643.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaee",
                    "chaptername": "九百一十七章 河堤",
                    "spiderUrl": "30371214.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaed",
                    "chaptername": "九百一十八章 怼河督",
                    "spiderUrl": "30378377.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaec",
                    "chaptername": "九百一十九章 新河旧河（谢盟主北京河马主神）",
                    "spiderUrl": "30390802.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaeb",
                    "chaptername": "九百二十章 又见圣旨",
                    "spiderUrl": "30397430.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaea",
                    "chaptername": "九百二十一章 凤凰不与寒鸦为伍",
                    "spiderUrl": "30413362.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae9",
                    "chaptername": "九百二十二章 功成不必在我",
                    "spiderUrl": "30435532.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae8",
                    "chaptername": "九百二十三章 荣升知府",
                    "spiderUrl": "30441028.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae7",
                    "chaptername": "九百二十四章 帮忙",
                    "spiderUrl": "30444588.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae6",
                    "chaptername": "九百二十五章 主政一方",
                    "spiderUrl": "30450134.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae5",
                    "chaptername": "九百二十六章 视察拓县",
                    "spiderUrl": "30455707.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae4",
                    "chaptername": "九百二十七章 学以致用",
                    "spiderUrl": "30459891.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae3",
                    "chaptername": "九百二十八章 重逢",
                    "spiderUrl": "30466702.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae2",
                    "chaptername": "九百二十九章 赚到了",
                    "spiderUrl": "30480441.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae1",
                    "chaptername": "九百三十章 跨府巴结",
                    "spiderUrl": "30493196.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eae0",
                    "chaptername": "九百三十一章 坐而论道",
                    "spiderUrl": "30497992.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eadf",
                    "chaptername": "九百三十二章 谁是经世致用之学",
                    "spiderUrl": "30504896.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eade",
                    "chaptername": "九百三十三章 是你要将脸凑上来的",
                    "spiderUrl": "30509176.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eadd",
                    "chaptername": "九百三十四章 官员的操守",
                    "spiderUrl": "30514299.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eadc",
                    "chaptername": "九百三十五章 可使为宰相",
                    "spiderUrl": "30528795.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eadb",
                    "chaptername": "九百三十六章 聪哥？",
                    "spiderUrl": "30536088.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eada",
                    "chaptername": "九百三十七章 府台高明",
                    "spiderUrl": "30540745.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead9",
                    "chaptername": "九百三十八章 打坝淤地",
                    "spiderUrl": "30543701.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead8",
                    "chaptername": "九百三十九章 两害相权",
                    "spiderUrl": "30548451.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead7",
                    "chaptername": "九百四十章 为官难易",
                    "spiderUrl": "30556304.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead6",
                    "chaptername": "九百四十一章 主持府试",
                    "spiderUrl": "30562692.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead5",
                    "chaptername": "九百四十二章 科场弊案（二合一）",
                    "spiderUrl": "30565319.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead4",
                    "chaptername": "九百四十三章 重考",
                    "spiderUrl": "30569901.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead3",
                    "chaptername": "九百四十四章 林延潮审案",
                    "spiderUrl": "30576111.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead2",
                    "chaptername": "答书友问",
                    "spiderUrl": "30577980.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead1",
                    "chaptername": "九百四十五章 稳操胜券",
                    "spiderUrl": "30584353.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ead0",
                    "chaptername": "九百四十六章 府台英明",
                    "spiderUrl": "30591149.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eacf",
                    "chaptername": "九百四十七章 正直的程副使",
                    "spiderUrl": "30594886.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eace",
                    "chaptername": "九百四十八章 赵老爷子（谢爱啊书友的盟主）",
                    "spiderUrl": "30609848.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eacd",
                    "chaptername": "九百四十九章 本府不高兴",
                    "spiderUrl": "30615694.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eacc",
                    "chaptername": "九百五十章 价码",
                    "spiderUrl": "30625518.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eacb",
                    "chaptername": "九百五十一章 打劫",
                    "spiderUrl": "30630300.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaca",
                    "chaptername": "九百五十二章 林延潮设宴",
                    "spiderUrl": "30636961.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac9",
                    "chaptername": "九百五十三章 望之生惧",
                    "spiderUrl": "30642765.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac8",
                    "chaptername": "九百五十四章 谁也不怕啊",
                    "spiderUrl": "30645530.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac7",
                    "chaptername": "九百五十五章 突击检查",
                    "spiderUrl": "30650807.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac6",
                    "chaptername": "九百五十六章 林青天是好官",
                    "spiderUrl": "30659061.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac5",
                    "chaptername": "九百五十七章 潘季驯的奏章",
                    "spiderUrl": "30669689.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac4",
                    "chaptername": "九百五十八章 拜贺",
                    "spiderUrl": "30676656.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac3",
                    "chaptername": "九百五十九章 预算之事",
                    "spiderUrl": "30681747.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac2",
                    "chaptername": "九百六十章 官吏",
                    "spiderUrl": "30690371.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac1",
                    "chaptername": "九百六十一章 造福一方",
                    "spiderUrl": "30694486.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eac0",
                    "chaptername": "九百六十二章 内情",
                    "spiderUrl": "30697686.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eabf",
                    "chaptername": "九百六十三章 考语",
                    "spiderUrl": "30703198.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eabe",
                    "chaptername": "九百六十四章 内官外官",
                    "spiderUrl": "30705431.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eabd",
                    "chaptername": "九百六十五章 运作",
                    "spiderUrl": "30716454.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eabc",
                    "chaptername": "九百六十六章 遇风云而纵四海",
                    "spiderUrl": "30722459.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eabb",
                    "chaptername": "九百六十七章 离任",
                    "spiderUrl": "30727220.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaba",
                    "chaptername": "九百六十八章 旧属",
                    "spiderUrl": "30731587.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab9",
                    "chaptername": "九百六十九章 为官一任造福一方",
                    "spiderUrl": "30734247.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab8",
                    "chaptername": "九百七十章 羊报",
                    "spiderUrl": "30738724.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab7",
                    "chaptername": "九百七十一章 徐州",
                    "spiderUrl": "30742606.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab6",
                    "chaptername": "九百七十二章 申时行的帖子",
                    "spiderUrl": "30774642.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab5",
                    "chaptername": "九百七十三章 巧遇",
                    "spiderUrl": "30823055.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab4",
                    "chaptername": "九百七十四章 抵达京师",
                    "spiderUrl": "30829326.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab3",
                    "chaptername": "九百七十五章 申府",
                    "spiderUrl": "30870580.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab2",
                    "chaptername": "九佰七十六章 先公后私",
                    "spiderUrl": "30874527.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab1",
                    "chaptername": "九百七十七章 申时行的用意",
                    "spiderUrl": "30884090.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eab0",
                    "chaptername": "九百七十八章 京中舆论",
                    "spiderUrl": "30891510.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaaf",
                    "chaptername": "九百七十九章 面圣",
                    "spiderUrl": "30894514.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaae",
                    "chaptername": "九百八十章 于无声处听惊雷（二合一）",
                    "spiderUrl": "30901763.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaad",
                    "chaptername": "九百八十一章 国策",
                    "spiderUrl": "30913894.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaac",
                    "chaptername": "九百八十二章 千字文",
                    "spiderUrl": "30918780.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaab",
                    "chaptername": "九百八十三章 托付",
                    "spiderUrl": "30925874.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaaa",
                    "chaptername": "九百八十四章 弹劾终于到了",
                    "spiderUrl": "30929109.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa9",
                    "chaptername": "九百八十五章 十年树木，百年树人",
                    "spiderUrl": "30935463.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa8",
                    "chaptername": "九百八十六章 治水之功",
                    "spiderUrl": "30941849.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa7",
                    "chaptername": "九百八十七章 质疑",
                    "spiderUrl": "30946670.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa6",
                    "chaptername": "九百八十八章 上殿",
                    "spiderUrl": "30950205.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa5",
                    "chaptername": "九百八十九章 殿上授官",
                    "spiderUrl": "30958277.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa4",
                    "chaptername": "九百九十章 储相",
                    "spiderUrl": "30965762.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa3",
                    "chaptername": "九百九十一章 莫愁前路无知己",
                    "spiderUrl": "30970305.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa2",
                    "chaptername": "九百九十二章 词林大僚",
                    "spiderUrl": "30975276.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa1",
                    "chaptername": "九百九十三章 再度布局（谢oceanhiker盟主）",
                    "spiderUrl": "30980756.html"
                },
                {
                    "_id": "5cb5e21040e63b746871eaa0",
                    "chaptername": "九百九十四章 翰林学士",
                    "spiderUrl": "30986186.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea9f",
                    "chaptername": "九百九十五章 接风宴（谢孤舟蓑笠娃盟主）",
                    "spiderUrl": "30992584.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea9e",
                    "chaptername": "九百九十六章 好处",
                    "spiderUrl": "31002937.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea9d",
                    "chaptername": "九百九十七章 归宗",
                    "spiderUrl": "31017778.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea9c",
                    "chaptername": "九百九十八章 儒学正宗",
                    "spiderUrl": "31026149.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea9b",
                    "chaptername": "九百九十九章 思辨",
                    "spiderUrl": "31033992.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea9a",
                    "chaptername": "一千章 经史并重",
                    "spiderUrl": "31048002.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea99",
                    "chaptername": "一千零一章 番薯南来",
                    "spiderUrl": "31053507.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea98",
                    "chaptername": "一千零二章 朝堂就是名利场",
                    "spiderUrl": "31057167.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea97",
                    "chaptername": "一千零三章 番薯好吃吗？",
                    "spiderUrl": "31062648.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea96",
                    "chaptername": "一千零四章 还是要靠女人啊",
                    "spiderUrl": "31069306.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea95",
                    "chaptername": "一千零五章 岁初",
                    "spiderUrl": "31073207.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea94",
                    "chaptername": "一千零六章 国本",
                    "spiderUrl": "31089380.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea93",
                    "chaptername": "一千零七章 轩然大波",
                    "spiderUrl": "31095582.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea92",
                    "chaptername": "一千零八章 考官人选",
                    "spiderUrl": "31098492.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea91",
                    "chaptername": "一千零九章 赐宴",
                    "spiderUrl": "31103010.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea90",
                    "chaptername": "一千一十章 干货过关",
                    "spiderUrl": "31113860.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea8f",
                    "chaptername": "一千一百一十一章 锁院",
                    "spiderUrl": "31124437.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea8e",
                    "chaptername": "一千一百一十二章 房官人选",
                    "spiderUrl": "31127463.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea8d",
                    "chaptername": "一千一百一十三章 衡文规矩",
                    "spiderUrl": "31130525.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea8c",
                    "chaptername": "一千一百一十四章 会试大热",
                    "spiderUrl": "31132785.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea8b",
                    "chaptername": "一千一百一十五章 贡院",
                    "spiderUrl": "31137760.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea8a",
                    "chaptername": "一百一十六章 衡文",
                    "spiderUrl": "31145708.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea89",
                    "chaptername": "一千一十七章 三道策问",
                    "spiderUrl": "31166935.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea88",
                    "chaptername": "一千一十八章 钻空子",
                    "spiderUrl": "31174160.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea87",
                    "chaptername": "一千一十九章 金榜题名",
                    "spiderUrl": "31180186.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea86",
                    "chaptername": "一千二十章 吾道南矣（谢greenyuxuan书友盟主）",
                    "spiderUrl": "31185767.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea85",
                    "chaptername": "一千二十一章 暗访",
                    "spiderUrl": "31188802.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea84",
                    "chaptername": "一千二十二章 自己人",
                    "spiderUrl": "31193729.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea83",
                    "chaptername": "一千二十三章 颜值即正义",
                    "spiderUrl": "31197028.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea82",
                    "chaptername": "一千二十四章 恩荣宴",
                    "spiderUrl": "31201674.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea81",
                    "chaptername": "一千二十五章 万历十四年的几件事",
                    "spiderUrl": "31204206.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea80",
                    "chaptername": "一千二十六章 秋夜读书",
                    "spiderUrl": "31210327.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea7f",
                    "chaptername": "一千二十七章 你可知道番薯吗？",
                    "spiderUrl": "31214746.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea7e",
                    "chaptername": "一千二十八章 徐光启的办法",
                    "spiderUrl": "31219721.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea7d",
                    "chaptername": "一千二十九章 土豪",
                    "spiderUrl": "31222541.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea7c",
                    "chaptername": "一千三十章 从此君王不早朝",
                    "spiderUrl": "31228283.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea7b",
                    "chaptername": "一千三十一章 林神医",
                    "spiderUrl": "31234021.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea7a",
                    "chaptername": "一千三十二章 谈条件",
                    "spiderUrl": "31239284.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea79",
                    "chaptername": "一千三十三章",
                    "spiderUrl": "31246645.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea78",
                    "chaptername": "一千三十四章 免朝的开始",
                    "spiderUrl": "31257410.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea77",
                    "chaptername": "一千三十五章 国有诤臣",
                    "spiderUrl": "31263755.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea76",
                    "chaptername": "一千三十六章 党羽",
                    "spiderUrl": "31277047.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea75",
                    "chaptername": "一千三十七章 召对",
                    "spiderUrl": "31288456.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea74",
                    "chaptername": "一千三十八章 把柄",
                    "spiderUrl": "31298309.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea73",
                    "chaptername": "一千三十九章 大奸似忠",
                    "spiderUrl": "31311602.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea72",
                    "chaptername": "一千四十章 交换",
                    "spiderUrl": "31320456.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea71",
                    "chaptername": "一千四十一章 上下",
                    "spiderUrl": "31326311.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea70",
                    "chaptername": "一千四十二章 出乎意料",
                    "spiderUrl": "31330935.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea6f",
                    "chaptername": "一千四十三章 为国为民",
                    "spiderUrl": "31340176.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea6e",
                    "chaptername": "一千四十四章 改换门庭",
                    "spiderUrl": "31352236.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea6d",
                    "chaptername": "一千四十五章 赈灾粮",
                    "spiderUrl": "31358331.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea6c",
                    "chaptername": "一千四十六章 储端",
                    "spiderUrl": "31359375.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea6b",
                    "chaptername": "一千四十七章 莫欺少年穷",
                    "spiderUrl": "31362940.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea6a",
                    "chaptername": "一千四十八章 暴雨",
                    "spiderUrl": "31369377.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea69",
                    "chaptername": "一千四十九章 上疏",
                    "spiderUrl": "31374933.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea68",
                    "chaptername": "一千五十章 水到渠成",
                    "spiderUrl": "31380793.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea67",
                    "chaptername": "一千五十一章 最后一步",
                    "spiderUrl": "31387027.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea66",
                    "chaptername": "一千五十二章 未来方向",
                    "spiderUrl": "31392081.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea65",
                    "chaptername": "一千五十三章 一朝天子一朝臣",
                    "spiderUrl": "31394769.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea64",
                    "chaptername": "一千五十四章 荣升",
                    "spiderUrl": "31400497.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea63",
                    "chaptername": "一千五十五章 飞鱼服",
                    "spiderUrl": "31403662.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea62",
                    "chaptername": "一千五十六章 就藩",
                    "spiderUrl": "31408591.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea61",
                    "chaptername": "一千五十七章 再议国本",
                    "spiderUrl": "31411420.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea60",
                    "chaptername": "一千五十八章 送客",
                    "spiderUrl": "31415258.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea5f",
                    "chaptername": "一千五十九章 对话",
                    "spiderUrl": "31417194.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea5e",
                    "chaptername": "一千六十章 办报",
                    "spiderUrl": "31422623.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea5d",
                    "chaptername": "一千六十一章 言利",
                    "spiderUrl": "31424206.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea5c",
                    "chaptername": "一千六十二章 出缺了",
                    "spiderUrl": "31434709.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea5b",
                    "chaptername": "一千六十三章 帮你活动",
                    "spiderUrl": "31434710.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea5a",
                    "chaptername": "一千六十四章 计策",
                    "spiderUrl": "31467220.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea59",
                    "chaptername": "一千六十五章 借刀杀人之计",
                    "spiderUrl": "31474719.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea58",
                    "chaptername": "一千六十六章 吏部尚书的愤怒",
                    "spiderUrl": "31481598.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea57",
                    "chaptername": "一千六十七章 堪任资格",
                    "spiderUrl": "31487613.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea56",
                    "chaptername": "一千六十八章 拿人",
                    "spiderUrl": "31492198.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea55",
                    "chaptername": "一千六十九章 干爹救我",
                    "spiderUrl": "31497842.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea54",
                    "chaptername": "一千七十章 正推",
                    "spiderUrl": "31502427.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea53",
                    "chaptername": "一千七十一章 活在狗身上了",
                    "spiderUrl": "31505498.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea52",
                    "chaptername": "一千七十二章 少宗伯",
                    "spiderUrl": "31511177.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea51",
                    "chaptername": "一千七十三章 政见",
                    "spiderUrl": "31516968.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea50",
                    "chaptername": "一千七十四章 平步青云",
                    "spiderUrl": "31520404.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea4f",
                    "chaptername": "一千七十五章 贺客",
                    "spiderUrl": "31525246.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea4e",
                    "chaptername": "一千七十六章 玉米",
                    "spiderUrl": "31529308.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea4d",
                    "chaptername": "一千七十七章 听老婆的话",
                    "spiderUrl": "31531722.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea4c",
                    "chaptername": "一千七十八章 年轻的部堂大人",
                    "spiderUrl": "31542195.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea4b",
                    "chaptername": "一千七十九章 新任部堂的威风",
                    "spiderUrl": "31542196.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea4a",
                    "chaptername": "一千八十章 手握实权",
                    "spiderUrl": "31544737.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea49",
                    "chaptername": "一千八十一章 高攀不起",
                    "spiderUrl": "31552240.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea48",
                    "chaptername": "一千八十二章 见证历史的一刻",
                    "spiderUrl": "31552241.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea47",
                    "chaptername": "一千八十三章 粉丝",
                    "spiderUrl": "31567700.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea46",
                    "chaptername": "一千八十四章 密议",
                    "spiderUrl": "31567701.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea45",
                    "chaptername": "一千八十五章 济世之才",
                    "spiderUrl": "31567702.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea44",
                    "chaptername": "一千八十六章 琉球攻略",
                    "spiderUrl": "31567703.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea43",
                    "chaptername": "一千八十七章 谥号之争",
                    "spiderUrl": "31567704.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea42",
                    "chaptername": "一千八十八章 青松翠柏",
                    "spiderUrl": "31567705.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea41",
                    "chaptername": "一千八十九章 申时行的故事",
                    "spiderUrl": "31582655.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea40",
                    "chaptername": "一千九十章 自立门户",
                    "spiderUrl": "31590353.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea3f",
                    "chaptername": "一千九十一章 榜样",
                    "spiderUrl": "31594520.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea3e",
                    "chaptername": "一千九十二章 顺天乡试考官（第一更）",
                    "spiderUrl": "31595806.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea3d",
                    "chaptername": "一千九十二章 托付（第二更）",
                    "spiderUrl": "31596867.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea3c",
                    "chaptername": "一千九十三章 浙党（第一更）",
                    "spiderUrl": "31600333.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea3b",
                    "chaptername": "一千九十四章 新任尚书的手段（第二更）",
                    "spiderUrl": "31600334.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea3a",
                    "chaptername": "一千九十五章 林学南传",
                    "spiderUrl": "31600335.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea39",
                    "chaptername": "一千九十六章 实践出真知",
                    "spiderUrl": "31604312.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea38",
                    "chaptername": "一千九十七章 反目",
                    "spiderUrl": "31610754.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea37",
                    "chaptername": "一千九十八章 弹劾之事",
                    "spiderUrl": "31617386.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea36",
                    "chaptername": "一千九十九章 年末",
                    "spiderUrl": "31621372.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea35",
                    "chaptername": "一千一百章 出山",
                    "spiderUrl": "31626412.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea34",
                    "chaptername": "一千一百零一章 东窗事发",
                    "spiderUrl": "31630064.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea33",
                    "chaptername": "一千一百零二章 重逢",
                    "spiderUrl": "31634393.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea32",
                    "chaptername": "一千一百零三章 喜欢做官",
                    "spiderUrl": "31638501.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea31",
                    "chaptername": "一千一百零四章 雨势",
                    "spiderUrl": "31641110.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea30",
                    "chaptername": "一千一百零五章 倾诉",
                    "spiderUrl": "31641113.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea2f",
                    "chaptername": "一千一百零六章 栽培",
                    "spiderUrl": "31641115.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea2e",
                    "chaptername": "一千一百零七章 党羽",
                    "spiderUrl": "31652556.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea2d",
                    "chaptername": "一千一百零八章 抓人",
                    "spiderUrl": "31660612.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea2c",
                    "chaptername": "一千一百零九章 东厂",
                    "spiderUrl": "31660613.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea2b",
                    "chaptername": "一千一百一十章 运筹帷幄",
                    "spiderUrl": "31670797.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea2a",
                    "chaptername": "一千一百一十一章 奏对",
                    "spiderUrl": "31681867.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea29",
                    "chaptername": "一千一百一十二章 初见",
                    "spiderUrl": "31691649.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea28",
                    "chaptername": "一千一百一十三章 释放",
                    "spiderUrl": "31691650.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea27",
                    "chaptername": "一千一百一十四章 退意",
                    "spiderUrl": "31695696.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea26",
                    "chaptername": "一千一百一十五章 林学五子",
                    "spiderUrl": "31712777.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea25",
                    "chaptername": "一千一百一十六章 辞官归里",
                    "spiderUrl": "31717647.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea24",
                    "chaptername": "一千一百一十七章 威势",
                    "spiderUrl": "31721479.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea23",
                    "chaptername": "一千一百一十八章 交换",
                    "spiderUrl": "31723299.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea22",
                    "chaptername": "一千一百一十九章 商量",
                    "spiderUrl": "31729483.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea21",
                    "chaptername": "一千一百二十章 水至清则无鱼",
                    "spiderUrl": "31732613.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea20",
                    "chaptername": "一千一百二十一章 腰间黄金已退藏",
                    "spiderUrl": "31737086.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea1f",
                    "chaptername": "一千一百二十二章 集义",
                    "spiderUrl": "31740939.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea1e",
                    "chaptername": "一千一百二十三章 陛辞",
                    "spiderUrl": "31744909.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea1d",
                    "chaptername": "一千一百二十四章 驿站",
                    "spiderUrl": "31748990.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea1c",
                    "chaptername": "一千一百二十五章 人走茶凉",
                    "spiderUrl": "31757509.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea1b",
                    "chaptername": "一千一百二十六章 微山湖上",
                    "spiderUrl": "31761625.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea1a",
                    "chaptername": "一千一百二十七章 薪火相传",
                    "spiderUrl": "31767332.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea19",
                    "chaptername": "一千一百二十八章 做客",
                    "spiderUrl": "31770480.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea18",
                    "chaptername": "一千一百二十九章 背景",
                    "spiderUrl": "31775690.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea17",
                    "chaptername": "一千一百三十章 牙行",
                    "spiderUrl": "31784365.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea16",
                    "chaptername": "一千一百三十一章 教训一二",
                    "spiderUrl": "31791005.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea15",
                    "chaptername": "一千一百三十二章 梅家的盘算",
                    "spiderUrl": "31796693.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea14",
                    "chaptername": "一千一百三十三章 风流员外郎",
                    "spiderUrl": "31799946.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea13",
                    "chaptername": "一千一百三十四章 得意楼",
                    "spiderUrl": "31809453.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea12",
                    "chaptername": "一千一百三十五章 首席",
                    "spiderUrl": "31815525.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea11",
                    "chaptername": "一千一百三十六章 不识真人",
                    "spiderUrl": "31821466.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea10",
                    "chaptername": "一千一百三十七章 新盐法",
                    "spiderUrl": "31827219.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea0f",
                    "chaptername": "一千一百三十八章 富春江上",
                    "spiderUrl": "31838342.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea0e",
                    "chaptername": "一千一百三十九章 海禁",
                    "spiderUrl": "31851355.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea0d",
                    "chaptername": "一千一百四十章 听君一席话",
                    "spiderUrl": "31855710.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea0c",
                    "chaptername": "一千一百四十一章 开海",
                    "spiderUrl": "31865547.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea0b",
                    "chaptername": "一千一百四十二章 衣锦还乡",
                    "spiderUrl": "31874312.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea0a",
                    "chaptername": "一千一百四十三章 洪塘",
                    "spiderUrl": "31881976.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea09",
                    "chaptername": "一千一百四十四章 林府",
                    "spiderUrl": "31888985.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea08",
                    "chaptername": "一千一百四十五章 回家",
                    "spiderUrl": "31898423.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea07",
                    "chaptername": "一千一百四十六章 家事",
                    "spiderUrl": "31904389.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea06",
                    "chaptername": "一千一百四十七章 你变了",
                    "spiderUrl": "31908107.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea05",
                    "chaptername": "一千一百四十八章 光耀门楣",
                    "spiderUrl": "31915729.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea04",
                    "chaptername": "一千一百四十九章 家宴",
                    "spiderUrl": "31927405.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea03",
                    "chaptername": "一千一百五十章 修身齐家",
                    "spiderUrl": "31931772.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea02",
                    "chaptername": "一千一百五十一章 不负少年时",
                    "spiderUrl": "31981353.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea01",
                    "chaptername": "一千一百五十二章 太仓银",
                    "spiderUrl": "32106525.html"
                },
                {
                    "_id": "5cb5e21040e63b746871ea00",
                    "chaptername": "一千一百五十三章 造势",
                    "spiderUrl": "32214212.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9ff",
                    "chaptername": "一千一百五十四章 太平盛世",
                    "spiderUrl": "32329186.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9fe",
                    "chaptername": "一千一百五十五章 老朋友",
                    "spiderUrl": "32458271.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9fd",
                    "chaptername": "一千一百五十六章 激励（新年好）",
                    "spiderUrl": "32458273.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9fc",
                    "chaptername": "一千一百五十七章 创办书院",
                    "spiderUrl": "32463640.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9fb",
                    "chaptername": "一千一百五十八章 兴学（第一更）",
                    "spiderUrl": "32469088.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9fa",
                    "chaptername": "一千一百五十九章 招考（第二更）",
                    "spiderUrl": "32470281.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f9",
                    "chaptername": "一千一百六十章 存问大臣",
                    "spiderUrl": "32485610.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f8",
                    "chaptername": "一千一百六十一章 诗书满腹气自华",
                    "spiderUrl": "32485611.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f7",
                    "chaptername": "一千一百六十二章 书院招考",
                    "spiderUrl": "32493416.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f6",
                    "chaptername": "一千一百六十三章 自古贫贱出良才",
                    "spiderUrl": "32500810.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f5",
                    "chaptername": "一千一百六十四章 参听朝政",
                    "spiderUrl": "32508324.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f4",
                    "chaptername": "一千一百六十五章 恳请出山",
                    "spiderUrl": "32519139.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f3",
                    "chaptername": "一千一百六十六章 精一之功",
                    "spiderUrl": "32546364.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f2",
                    "chaptername": "一千一百六十七章 惟精惟一",
                    "spiderUrl": "32563700.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f1",
                    "chaptername": "一千一百六十八章 八百里加急",
                    "spiderUrl": "32574328.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9f0",
                    "chaptername": "一千一百六十九章 教化",
                    "spiderUrl": "32588801.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9ef",
                    "chaptername": "一千一百七十章 非林部堂不可",
                    "spiderUrl": "32595584.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9ee",
                    "chaptername": "一千一百七十一章 触动",
                    "spiderUrl": "32599206.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9ed",
                    "chaptername": "一千一百七十二章 书院杂志",
                    "spiderUrl": "32606841.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9ec",
                    "chaptername": "一千一百七十三章 名垂青史",
                    "spiderUrl": "32616991.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9eb",
                    "chaptername": "一千一百七十四章 用人",
                    "spiderUrl": "32625470.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9ea",
                    "chaptername": "一千一百七十五章 换个恶人来",
                    "spiderUrl": "32634353.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e9",
                    "chaptername": "一千一百七十六章 菜根谭",
                    "spiderUrl": "32641343.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e8",
                    "chaptername": "一千一百七十七章 众望所归",
                    "spiderUrl": "32659427.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e7",
                    "chaptername": "一千一百七十八章 朝中有人好做官",
                    "spiderUrl": "32672045.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e6",
                    "chaptername": "一千一百七十九章 师生",
                    "spiderUrl": "32695401.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e5",
                    "chaptername": "一千一百八十章 教书匠",
                    "spiderUrl": "32695402.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e4",
                    "chaptername": "一千一百八十一章 家事",
                    "spiderUrl": "32736408.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e3",
                    "chaptername": "一千一百八十二章 点拨",
                    "spiderUrl": "32736409.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e2",
                    "chaptername": "一千一百八十三章 北上",
                    "spiderUrl": "32749238.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e1",
                    "chaptername": "一千一百八十四章 催促",
                    "spiderUrl": "32765105.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9e0",
                    "chaptername": "一千一百八十五章 叙旧",
                    "spiderUrl": "32773299.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9df",
                    "chaptername": "一千一百八十六章 东事",
                    "spiderUrl": "32785751.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9de",
                    "chaptername": "一千一百八十七章 回京",
                    "spiderUrl": "32793812.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9dd",
                    "chaptername": "一千一百八十八章 廷议",
                    "spiderUrl": "32799590.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9dc",
                    "chaptername": "一千一百八十九章 直言不讳",
                    "spiderUrl": "32818162.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9db",
                    "chaptername": "一千一百九十章 商议国事",
                    "spiderUrl": "32818163.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9da",
                    "chaptername": "一千一百九十一章 林延潮之策",
                    "spiderUrl": "32826860.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9d9",
                    "chaptername": "一千一百九十二章 海运",
                    "spiderUrl": "32828849.html"
                },
                {
                    "_id": "5cb5e21040e63b746871e9d8",
                    "chaptername": "一千一百九十三章 谈话",
                    "spiderUrl": "32840415.html"
                }
            ],
            "category": "历史军事",
            "__v": 0
    }],
    outShelf: {},
}

class UserInfo {
    constructor() {
        this.fetchInfo = this.fetchInfo.bind(this);
        // 初始化用户基本信息
        this.fetchInfo();
        // 与上面互斥
        // console.log('personInfo', personInfo);
        // storage.setItem('info', personInfo);
    }

    @observable username = '';
    @observable bookshelf = [];
    @observable outShelf = {};
    @observable readingBook = {};
    @observable readingChapter = 0;

    @action
    async fetchInfo() {
        try {
            const info = await storage.getItem('info');
            // console.log(info);
            // await之后更改状态
            runInAction(() => {
                this.username = info.username;
                this.bookshelf = info.bookshelf;
                this.outShelf = info.outShelf;
            });
        }catch(err) {
            console.log('action.fetchInfo.error: ', err);
        }
    }

    @action
    async saveData() {
        try {
            await storage.setItem('info', {
                username,
                bookshelf,
                outShelf,
            });
        }catch(err) {
            console.log('action.saveData.error: ', err);
        }
    }

    @action
    async fetchBookChapter() {
        try {
            if(!this.readingBook.chapters || this.readingBook.chapters.length === 0) {
                console.log('已获取章节列表，无需再次拉取');
            }
            const chapters = await getChapterList(this.readingBook._id);

            runInAction(() => {
                this.readingBook.chapters = chapters;
                this.cacheBook(this.readingBook);
            });

            console.log(`成功获取${this.readingBook.bookname}章节列表`);

        }catch(err) {
            console.log('action.fetchBookChapters.error: ', err);
        }
    }

    cacheBook = (book) => {
        if(!this.outShelf[book._id]) {
            this.outShelf[book._id] = book;
        }
    }

    @action 
    fetchChapter = async (chapter) => {
        try {
            const content = this.readingBook.chapters[chapter].content;

            if(!content) {
                let doc = await getChapter(this.readingBook._id, chapter);
                if(doc.data.code === 0) {
                    doc = doc.data.data;
                    runInAction(() => {
                        this.readingBook.chapters[chapter].content = doc;
                    });
                    return doc;    
                }else {
                    console.error(doc.data);
                }
            }
        
        }catch(err) {
            console.log('action.fetchChapter.error: ', err);
        }
    }

    @action
    fetchChapters = async (startCp, endCp) => {
        try  {
            const promArr = [];
            for(let i = startCp; i < endCp; i ++) {
                promArr.push(this.fetchChapter(i));
            }

            const docs = await Promise.all(promArr);
            
            return docs;
        }catch(err) {
            console.log('action.fetchChapters.error: ', err);
        }
    }

    @action
    checkReadingBook = (book) => {
        this.readingBook = book;
    }

    // 上下两种方法均可以实现this的正确绑定
    @action.bound
    checkReadingChapter(index) {
        this.readingChapter = index;
    }
}

export default new UserInfo();