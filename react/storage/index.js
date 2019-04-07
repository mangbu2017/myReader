// import Storage from 'react-native-storage';
import {
    AsyncStorage
} from 'react-native';

const personInfo = {
    username: 'mangbu',
    bookshelf: [{
        tags: [],
        _id: "5ca4995fe161481b7f2cd93e",
        bookname: "明朝那些事儿",
        author: "当年明月",
        bookSpiderUrl: "/html/4/4556/",
        authorSpiderUrl: "/author/当年明月",
        chapters: [{
                _id: "5ca4995fe161481b7f2cda0a",
                chaptername: "0001-0010",
                spiderUrl: "31667541.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda09",
                chaptername: "0011-0020",
                spiderUrl: "31667542.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda08",
                chaptername: "0021-0030",
                spiderUrl: "31667543.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda07",
                chaptername: "0031-0040",
                spiderUrl: "31667544.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda06",
                chaptername: "0041-0050",
                spiderUrl: "31667545.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda05",
                chaptername: "0051-0060",
                spiderUrl: "31667546.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda04",
                chaptername: "0061-0070",
                spiderUrl: "31667547.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda03",
                chaptername: "0071-0080",
                spiderUrl: "31667548.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda02",
                chaptername: "0081-0090",
                spiderUrl: "31667549.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda01",
                chaptername: "0091-0100",
                spiderUrl: "31667550.html"
            },
            {
                _id: "5ca4995fe161481b7f2cda00",
                chaptername: "0101-0110",
                spiderUrl: "31667551.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ff",
                chaptername: "0111-0120",
                spiderUrl: "31667552.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9fe",
                chaptername: "0121-0130",
                spiderUrl: "31667553.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9fd",
                chaptername: "0131-0140",
                spiderUrl: "31667554.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9fc",
                chaptername: "0141-0150",
                spiderUrl: "31667555.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9fb",
                chaptername: "0151-0160",
                spiderUrl: "31667556.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9fa",
                chaptername: "0161-0170",
                spiderUrl: "31667557.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f9",
                chaptername: "0171-0180",
                spiderUrl: "31667558.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f8",
                chaptername: "0181-0190",
                spiderUrl: "31667560.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f7",
                chaptername: "0191-0200",
                spiderUrl: "31667562.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f6",
                chaptername: "0201-0210",
                spiderUrl: "31667563.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f5",
                chaptername: "0211-0220",
                spiderUrl: "31667565.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f4",
                chaptername: "0221-0230",
                spiderUrl: "31667566.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f3",
                chaptername: "0231-0240",
                spiderUrl: "31667568.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f2",
                chaptername: "0241-0250",
                spiderUrl: "31667570.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f1",
                chaptername: "0251-0260",
                spiderUrl: "31667571.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9f0",
                chaptername: "0261-0270",
                spiderUrl: "31667573.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ef",
                chaptername: "0271-0280",
                spiderUrl: "31667574.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ee",
                chaptername: "0281-0290",
                spiderUrl: "31667575.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ed",
                chaptername: "0291-0300",
                spiderUrl: "31667576.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ec",
                chaptername: "0301-0310",
                spiderUrl: "31667577.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9eb",
                chaptername: "0311-0320",
                spiderUrl: "31667578.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ea",
                chaptername: "0321-0330",
                spiderUrl: "31667579.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e9",
                chaptername: "0331-0340",
                spiderUrl: "31667580.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e8",
                chaptername: "0341-0350",
                spiderUrl: "31667581.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e7",
                chaptername: "0351-0360",
                spiderUrl: "31667583.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e6",
                chaptername: "0361-0370",
                spiderUrl: "31667584.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e5",
                chaptername: "0371-0380",
                spiderUrl: "31667585.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e4",
                chaptername: "0381-0390",
                spiderUrl: "31667586.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e3",
                chaptername: "0391-0400",
                spiderUrl: "31667587.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e2",
                chaptername: "0401-0410",
                spiderUrl: "31667588.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e1",
                chaptername: "0411-0420",
                spiderUrl: "31667589.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9e0",
                chaptername: "0421-0430",
                spiderUrl: "31667590.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9df",
                chaptername: "0431-0440",
                spiderUrl: "31667591.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9de",
                chaptername: "0441-0450",
                spiderUrl: "31667592.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9dd",
                chaptername: "0451-0460",
                spiderUrl: "31667593.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9dc",
                chaptername: "0461-0470",
                spiderUrl: "31667594.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9db",
                chaptername: "0471-0480",
                spiderUrl: "31667595.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9da",
                chaptername: "0481-0490",
                spiderUrl: "31667596.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d9",
                chaptername: "0491-0500",
                spiderUrl: "31667597.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d8",
                chaptername: "0501-0510",
                spiderUrl: "31667598.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d7",
                chaptername: "0511-0520",
                spiderUrl: "31667599.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d6",
                chaptername: "0521-0530",
                spiderUrl: "31667600.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d5",
                chaptername: "0531-0540",
                spiderUrl: "31667601.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d4",
                chaptername: "0541-0550",
                spiderUrl: "31667602.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d3",
                chaptername: "0551-0560",
                spiderUrl: "31667603.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d2",
                chaptername: "0561-0570",
                spiderUrl: "31667604.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d1",
                chaptername: "0571-0580",
                spiderUrl: "31667605.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9d0",
                chaptername: "0581-0590",
                spiderUrl: "31667606.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9cf",
                chaptername: "0591-0600",
                spiderUrl: "31667607.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ce",
                chaptername: "0601-0610",
                spiderUrl: "31667608.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9cd",
                chaptername: "0611-0620",
                spiderUrl: "31667609.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9cc",
                chaptername: "0621-0630",
                spiderUrl: "31667610.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9cb",
                chaptername: "0631-0640",
                spiderUrl: "31667611.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ca",
                chaptername: "0641-0650",
                spiderUrl: "31667612.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c9",
                chaptername: "0651-0660",
                spiderUrl: "31667614.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c8",
                chaptername: "0661-0670",
                spiderUrl: "31667616.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c7",
                chaptername: "0671-0680",
                spiderUrl: "31667617.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c6",
                chaptername: "0681-0690",
                spiderUrl: "31667619.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c5",
                chaptername: "0691-0700",
                spiderUrl: "31667620.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c4",
                chaptername: "0701-0710",
                spiderUrl: "31667621.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c3",
                chaptername: "0711-0720",
                spiderUrl: "31667624.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c2",
                chaptername: "0721-0730",
                spiderUrl: "31667626.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c1",
                chaptername: "0731-0740",
                spiderUrl: "31667628.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9c0",
                chaptername: "0741-0750",
                spiderUrl: "31667631.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9bf",
                chaptername: "0751-0760",
                spiderUrl: "31667633.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9be",
                chaptername: "0761-0770",
                spiderUrl: "31667636.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9bd",
                chaptername: "0771-0780",
                spiderUrl: "31667638.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9bc",
                chaptername: "0781-0790",
                spiderUrl: "31667639.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9bb",
                chaptername: "0791-0800",
                spiderUrl: "31667641.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ba",
                chaptername: "0801-0810",
                spiderUrl: "31667643.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b9",
                chaptername: "0811-0820",
                spiderUrl: "31667645.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b8",
                chaptername: "0821-0830",
                spiderUrl: "31667647.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b7",
                chaptername: "0831-0840",
                spiderUrl: "31667650.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b6",
                chaptername: "0841-0850",
                spiderUrl: "31667652.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b5",
                chaptername: "0851-0860",
                spiderUrl: "31667655.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b4",
                chaptername: "0861-0870",
                spiderUrl: "31667658.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b3",
                chaptername: "0871-0880",
                spiderUrl: "31667660.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b2",
                chaptername: "0881-0890",
                spiderUrl: "31667663.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b1",
                chaptername: "0891-0900",
                spiderUrl: "31667665.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9b0",
                chaptername: "0901-0910",
                spiderUrl: "31667667.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9af",
                chaptername: "0911-0920",
                spiderUrl: "31667670.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ae",
                chaptername: "0921-0930",
                spiderUrl: "31667673.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ad",
                chaptername: "0931-0940",
                spiderUrl: "31667675.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ac",
                chaptername: "0941-0950",
                spiderUrl: "31667678.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9ab",
                chaptername: "0951-0960",
                spiderUrl: "31667680.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9aa",
                chaptername: "0961-0970",
                spiderUrl: "31667682.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a9",
                chaptername: "0971-0980",
                spiderUrl: "31667684.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a8",
                chaptername: "0981-0990",
                spiderUrl: "31667687.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a7",
                chaptername: "0991-1000",
                spiderUrl: "31667689.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a6",
                chaptername: "1001-1010",
                spiderUrl: "31667691.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a5",
                chaptername: "1011-1020",
                spiderUrl: "31667693.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a4",
                chaptername: "1021-1030",
                spiderUrl: "31667695.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a3",
                chaptername: "1031-1040",
                spiderUrl: "31667698.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a2",
                chaptername: "1041-1050",
                spiderUrl: "31667700.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a1",
                chaptername: "1051-1060",
                spiderUrl: "31667702.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd9a0",
                chaptername: "1061-1070",
                spiderUrl: "31667705.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd99f",
                chaptername: "1071-1080",
                spiderUrl: "31667707.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd99e",
                chaptername: "1081-1090",
                spiderUrl: "31667709.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd99d",
                chaptername: "1091-1100",
                spiderUrl: "31667712.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd99c",
                chaptername: "1101-1110",
                spiderUrl: "31667714.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd99b",
                chaptername: "1111-1120",
                spiderUrl: "31667716.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd99a",
                chaptername: "1121-1130",
                spiderUrl: "31667718.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd999",
                chaptername: "1131-1140",
                spiderUrl: "31667721.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd998",
                chaptername: "1141-1150",
                spiderUrl: "31667723.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd997",
                chaptername: "1151-1160",
                spiderUrl: "31667725.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd996",
                chaptername: "1161-1170",
                spiderUrl: "31667728.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd995",
                chaptername: "1171-1180",
                spiderUrl: "31667730.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd994",
                chaptername: "1181-1190",
                spiderUrl: "31667732.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd993",
                chaptername: "1191-1200",
                spiderUrl: "31667734.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd992",
                chaptername: "1201-1210",
                spiderUrl: "31667738.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd991",
                chaptername: "1211-1220",
                spiderUrl: "31667740.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd990",
                chaptername: "1221-1230",
                spiderUrl: "31667743.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd98f",
                chaptername: "1231-1240",
                spiderUrl: "31667746.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd98e",
                chaptername: "1241-1250",
                spiderUrl: "31667749.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd98d",
                chaptername: "1251-1260",
                spiderUrl: "31667751.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd98c",
                chaptername: "1261-1270",
                spiderUrl: "31667754.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd98b",
                chaptername: "1271-1280",
                spiderUrl: "31667757.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd98a",
                chaptername: "1281-1290",
                spiderUrl: "31667760.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd989",
                chaptername: "1291-1300",
                spiderUrl: "31667762.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd988",
                chaptername: "1301-1310",
                spiderUrl: "31667764.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd987",
                chaptername: "1311-1320",
                spiderUrl: "31667767.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd986",
                chaptername: "1321-1330",
                spiderUrl: "31667770.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd985",
                chaptername: "1331-1340",
                spiderUrl: "31667773.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd984",
                chaptername: "1341-1350",
                spiderUrl: "31667776.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd983",
                chaptername: "1351-1360",
                spiderUrl: "31667779.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd982",
                chaptername: "1361-1370",
                spiderUrl: "31667781.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd981",
                chaptername: "1371-1380",
                spiderUrl: "31667784.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd980",
                chaptername: "1381-1390",
                spiderUrl: "31667786.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd97f",
                chaptername: "1391-1400",
                spiderUrl: "31667789.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd97e",
                chaptername: "1401-1410",
                spiderUrl: "31667792.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd97d",
                chaptername: "1411-1420",
                spiderUrl: "31667795.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd97c",
                chaptername: "1421-1430",
                spiderUrl: "31667798.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd97b",
                chaptername: "1431-1440",
                spiderUrl: "31667800.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd97a",
                chaptername: "1441-1450",
                spiderUrl: "31667803.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd979",
                chaptername: "1451-1460",
                spiderUrl: "31667805.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd978",
                chaptername: "1461-1470",
                spiderUrl: "31667807.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd977",
                chaptername: "1471-1480",
                spiderUrl: "31667810.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd976",
                chaptername: "1481-1490",
                spiderUrl: "31667812.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd975",
                chaptername: "1491-1500",
                spiderUrl: "31667815.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd974",
                chaptername: "1501-1510",
                spiderUrl: "31667817.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd973",
                chaptername: "1511-1520",
                spiderUrl: "31667819.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd972",
                chaptername: "1521-1530",
                spiderUrl: "31667822.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd971",
                chaptername: "1531-1540",
                spiderUrl: "31667824.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd970",
                chaptername: "1541-1550",
                spiderUrl: "31667827.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd96f",
                chaptername: "1551-1560",
                spiderUrl: "31667829.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd96e",
                chaptername: "1561-1570",
                spiderUrl: "31667832.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd96d",
                chaptername: "1571-1580",
                spiderUrl: "31667834.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd96c",
                chaptername: "1581-1590",
                spiderUrl: "31667836.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd96b",
                chaptername: "1591-1600",
                spiderUrl: "31667839.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd96a",
                chaptername: "1601-1610",
                spiderUrl: "31667841.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd969",
                chaptername: "1611-1620",
                spiderUrl: "31667843.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd968",
                chaptername: "1621-1630",
                spiderUrl: "31667846.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd967",
                chaptername: "1631-1640",
                spiderUrl: "31667848.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd966",
                chaptername: "1641-1650",
                spiderUrl: "31667851.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd965",
                chaptername: "1651-1660",
                spiderUrl: "31667853.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd964",
                chaptername: "1661-1670",
                spiderUrl: "31667855.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd963",
                chaptername: "1671-1680",
                spiderUrl: "31667858.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd962",
                chaptername: "1681-1690",
                spiderUrl: "31667860.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd961",
                chaptername: "1691-1700",
                spiderUrl: "31667862.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd960",
                chaptername: "1701--1704",
                spiderUrl: "31667864.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd95f",
                chaptername: "1705-1706",
                spiderUrl: "31667866.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd95e",
                chaptername: "1707-1708",
                spiderUrl: "31667868.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd95d",
                chaptername: "1709-1710",
                spiderUrl: "31667870.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd95c",
                chaptername: "1711-1712",
                spiderUrl: "31667872.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd95b",
                chaptername: "1713-1714",
                spiderUrl: "31667874.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd95a",
                chaptername: "1715-1716",
                spiderUrl: "31667875.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd959",
                chaptername: "1717-1718",
                spiderUrl: "31667877.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd958",
                chaptername: "1719-1720",
                spiderUrl: "31667879.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd957",
                chaptername: "1721-1722",
                spiderUrl: "31667881.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd956",
                chaptername: "1723-1724",
                spiderUrl: "31667883.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd955",
                chaptername: "1725－1726",
                spiderUrl: "31667885.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd954",
                chaptername: "1727－1728",
                spiderUrl: "31667887.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd953",
                chaptername: "1729－1730",
                spiderUrl: "31667889.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd952",
                chaptername: "1731－1732",
                spiderUrl: "31667891.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd951",
                chaptername: "1733-1734",
                spiderUrl: "31667893.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd950",
                chaptername: "1735－1736",
                spiderUrl: "31667895.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd94f",
                chaptername: "1737－1738",
                spiderUrl: "31667897.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd94e",
                chaptername: "1739－1740",
                spiderUrl: "31667898.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd94d",
                chaptername: "1741-1742",
                spiderUrl: "31667900.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd94c",
                chaptername: "1743－1744",
                spiderUrl: "31667902.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd94b",
                chaptername: "1745－1746",
                spiderUrl: "31667904.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd94a",
                chaptername: "1747－1748",
                spiderUrl: "31667906.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd949",
                chaptername: "1749-1750",
                spiderUrl: "31667907.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd948",
                chaptername: "1751-1752",
                spiderUrl: "31667909.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd947",
                chaptername: "1753-1754",
                spiderUrl: "31667911.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd946",
                chaptername: "1755-1756",
                spiderUrl: "31667913.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd945",
                chaptername: "1757-1758",
                spiderUrl: "31667915.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd944",
                chaptername: "1759-1762",
                spiderUrl: "31667917.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd943",
                chaptername: "1763-1765",
                spiderUrl: "31667919.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd942",
                chaptername: "1766-1768",
                spiderUrl: "31667921.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd941",
                chaptername: "1769-1770",
                spiderUrl: "31667922.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd940",
                chaptername: "1771-1772",
                spiderUrl: "31667924.html"
            },
            {
                _id: "5ca4995fe161481b7f2cd93f",
                chaptername: "第1773章-第1774章 大结局",
                spiderUrl: "31667926.html"
            }
        ],
        category: "历史军事",
        __v: 0
    }],
}

class Storage {
    constructor() {
    }

    async getItem(key) {
        try {
            const res = await AsyncStorage.getItem(key);
            return JSON.parse(res);
        }catch(err) {
            console.log('Storage.setItem.error: ', err);
        }
    }

    async setItem(key, value) {
        try {
            const res = await AsyncStorage.setItem(key, JSON.stringify(value));
            return res;
        }catch(err) {
            console.log('Storage.setItem.error: ', err);
        }
    }
}

const storage = new Storage();

export default storage;