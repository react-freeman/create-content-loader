(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1009:function(e,t,r){},1010:function(e,t,r){},1011:function(e){e.exports={name:"create-content-loader",homepage:"https://danilowoz.github.io/create-content-loader",version:"0.1.0",scripts:{dev:"npm run start",start:"react-scripts start",build:"react-scripts build",eject:"react-scripts eject",deploy:"npm run build --nomaps && gh-pages -d build",release:"semantic-release",format:'prettier --write "src/**/*.{js,jsx}"',commit:"git-cz"},dependencies:{classnames:"^2.2.5",clipboard:"^2.0.0",css:"^2.2.1",react:"^16.2.0","react-click-outside":"tj/react-click-outside","react-content-loader":"4.2.1","react-css":"^0.0.2","react-dom":"^16.1.1","react-live":"^1.7.1","react-scripts":"^2.1.8","react-sketch":"^0.5.1","react-tippy":"^1.2.2","throttle-debounce":"^1.0.1"},devDependencies:{"@commitlint/cli":"^7.5.2","@commitlint/config-conventional":"^7.5.0","@semantic-release/commit-analyzer":"^6.1.0","@semantic-release/git":"^7.0.8","@semantic-release/release-notes-generator":"^7.1.4",commitizen:"^3.0.7","cz-conventional-changelog":"^2.1.0","gh-pages":"^1.1.0",husky:"^1.3.1",prettier:"^1.16.4","semantic-release":"^15.13.3"},husky:{hooks:{"pre-commit":"npm run format","commit-msg":"commitlint -E HUSKY_GIT_PARAMS"}},commitlint:{extends:["@commitlint/config-conventional"]},config:{commitizen:{path:"./node_modules/cz-conventional-changelog"}},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},1012:function(e,t,r){},1013:function(e,t,r){},1029:function(e,t,r){var a={"./Binary_Property/ASCII.js":1030,"./Binary_Property/ASCII_Hex_Digit.js":1031,"./Binary_Property/Alphabetic.js":1032,"./Binary_Property/Any.js":1033,"./Binary_Property/Assigned.js":1034,"./Binary_Property/Bidi_Control.js":1035,"./Binary_Property/Bidi_Mirrored.js":1036,"./Binary_Property/Case_Ignorable.js":1037,"./Binary_Property/Cased.js":1038,"./Binary_Property/Changes_When_Casefolded.js":1039,"./Binary_Property/Changes_When_Casemapped.js":1040,"./Binary_Property/Changes_When_Lowercased.js":1041,"./Binary_Property/Changes_When_NFKC_Casefolded.js":1042,"./Binary_Property/Changes_When_Titlecased.js":1043,"./Binary_Property/Changes_When_Uppercased.js":1044,"./Binary_Property/Dash.js":1045,"./Binary_Property/Default_Ignorable_Code_Point.js":1046,"./Binary_Property/Deprecated.js":1047,"./Binary_Property/Diacritic.js":1048,"./Binary_Property/Emoji.js":1049,"./Binary_Property/Emoji_Component.js":1050,"./Binary_Property/Emoji_Modifier.js":1051,"./Binary_Property/Emoji_Modifier_Base.js":1052,"./Binary_Property/Emoji_Presentation.js":1053,"./Binary_Property/Extended_Pictographic.js":1054,"./Binary_Property/Extender.js":1055,"./Binary_Property/Grapheme_Base.js":1056,"./Binary_Property/Grapheme_Extend.js":1057,"./Binary_Property/Hex_Digit.js":1058,"./Binary_Property/IDS_Binary_Operator.js":1059,"./Binary_Property/IDS_Trinary_Operator.js":1060,"./Binary_Property/ID_Continue.js":1061,"./Binary_Property/ID_Start.js":1062,"./Binary_Property/Ideographic.js":1063,"./Binary_Property/Join_Control.js":1064,"./Binary_Property/Logical_Order_Exception.js":1065,"./Binary_Property/Lowercase.js":1066,"./Binary_Property/Math.js":1067,"./Binary_Property/Noncharacter_Code_Point.js":1068,"./Binary_Property/Pattern_Syntax.js":1069,"./Binary_Property/Pattern_White_Space.js":1070,"./Binary_Property/Quotation_Mark.js":1071,"./Binary_Property/Radical.js":1072,"./Binary_Property/Regional_Indicator.js":1073,"./Binary_Property/Sentence_Terminal.js":1074,"./Binary_Property/Soft_Dotted.js":1075,"./Binary_Property/Terminal_Punctuation.js":1076,"./Binary_Property/Unified_Ideograph.js":1077,"./Binary_Property/Uppercase.js":1078,"./Binary_Property/Variation_Selector.js":1079,"./Binary_Property/White_Space.js":1080,"./Binary_Property/XID_Continue.js":1081,"./Binary_Property/XID_Start.js":1082,"./General_Category/Cased_Letter.js":1083,"./General_Category/Close_Punctuation.js":1084,"./General_Category/Connector_Punctuation.js":1085,"./General_Category/Control.js":1086,"./General_Category/Currency_Symbol.js":1087,"./General_Category/Dash_Punctuation.js":1088,"./General_Category/Decimal_Number.js":1089,"./General_Category/Enclosing_Mark.js":1090,"./General_Category/Final_Punctuation.js":1091,"./General_Category/Format.js":1092,"./General_Category/Initial_Punctuation.js":1093,"./General_Category/Letter.js":1094,"./General_Category/Letter_Number.js":1095,"./General_Category/Line_Separator.js":1096,"./General_Category/Lowercase_Letter.js":1097,"./General_Category/Mark.js":1098,"./General_Category/Math_Symbol.js":1099,"./General_Category/Modifier_Letter.js":1100,"./General_Category/Modifier_Symbol.js":1101,"./General_Category/Nonspacing_Mark.js":1102,"./General_Category/Number.js":1103,"./General_Category/Open_Punctuation.js":1104,"./General_Category/Other.js":1105,"./General_Category/Other_Letter.js":1106,"./General_Category/Other_Number.js":1107,"./General_Category/Other_Punctuation.js":1108,"./General_Category/Other_Symbol.js":1109,"./General_Category/Paragraph_Separator.js":1110,"./General_Category/Private_Use.js":1111,"./General_Category/Punctuation.js":1112,"./General_Category/Separator.js":1113,"./General_Category/Space_Separator.js":1114,"./General_Category/Spacing_Mark.js":1115,"./General_Category/Surrogate.js":1116,"./General_Category/Symbol.js":1117,"./General_Category/Titlecase_Letter.js":1118,"./General_Category/Unassigned.js":1119,"./General_Category/Uppercase_Letter.js":1120,"./Script/Adlam.js":1121,"./Script/Ahom.js":1122,"./Script/Anatolian_Hieroglyphs.js":1123,"./Script/Arabic.js":1124,"./Script/Armenian.js":1125,"./Script/Avestan.js":1126,"./Script/Balinese.js":1127,"./Script/Bamum.js":1128,"./Script/Bassa_Vah.js":1129,"./Script/Batak.js":1130,"./Script/Bengali.js":1131,"./Script/Bhaiksuki.js":1132,"./Script/Bopomofo.js":1133,"./Script/Brahmi.js":1134,"./Script/Braille.js":1135,"./Script/Buginese.js":1136,"./Script/Buhid.js":1137,"./Script/Canadian_Aboriginal.js":1138,"./Script/Carian.js":1139,"./Script/Caucasian_Albanian.js":1140,"./Script/Chakma.js":1141,"./Script/Cham.js":1142,"./Script/Cherokee.js":1143,"./Script/Common.js":1144,"./Script/Coptic.js":1145,"./Script/Cuneiform.js":1146,"./Script/Cypriot.js":1147,"./Script/Cyrillic.js":1148,"./Script/Deseret.js":1149,"./Script/Devanagari.js":1150,"./Script/Dogra.js":1151,"./Script/Duployan.js":1152,"./Script/Egyptian_Hieroglyphs.js":1153,"./Script/Elbasan.js":1154,"./Script/Elymaic.js":1155,"./Script/Ethiopic.js":1156,"./Script/Georgian.js":1157,"./Script/Glagolitic.js":1158,"./Script/Gothic.js":1159,"./Script/Grantha.js":1160,"./Script/Greek.js":1161,"./Script/Gujarati.js":1162,"./Script/Gunjala_Gondi.js":1163,"./Script/Gurmukhi.js":1164,"./Script/Han.js":1165,"./Script/Hangul.js":1166,"./Script/Hanifi_Rohingya.js":1167,"./Script/Hanunoo.js":1168,"./Script/Hatran.js":1169,"./Script/Hebrew.js":1170,"./Script/Hiragana.js":1171,"./Script/Imperial_Aramaic.js":1172,"./Script/Inherited.js":1173,"./Script/Inscriptional_Pahlavi.js":1174,"./Script/Inscriptional_Parthian.js":1175,"./Script/Javanese.js":1176,"./Script/Kaithi.js":1177,"./Script/Kannada.js":1178,"./Script/Katakana.js":1179,"./Script/Kayah_Li.js":1180,"./Script/Kharoshthi.js":1181,"./Script/Khmer.js":1182,"./Script/Khojki.js":1183,"./Script/Khudawadi.js":1184,"./Script/Lao.js":1185,"./Script/Latin.js":1186,"./Script/Lepcha.js":1187,"./Script/Limbu.js":1188,"./Script/Linear_A.js":1189,"./Script/Linear_B.js":1190,"./Script/Lisu.js":1191,"./Script/Lycian.js":1192,"./Script/Lydian.js":1193,"./Script/Mahajani.js":1194,"./Script/Makasar.js":1195,"./Script/Malayalam.js":1196,"./Script/Mandaic.js":1197,"./Script/Manichaean.js":1198,"./Script/Marchen.js":1199,"./Script/Masaram_Gondi.js":1200,"./Script/Medefaidrin.js":1201,"./Script/Meetei_Mayek.js":1202,"./Script/Mende_Kikakui.js":1203,"./Script/Meroitic_Cursive.js":1204,"./Script/Meroitic_Hieroglyphs.js":1205,"./Script/Miao.js":1206,"./Script/Modi.js":1207,"./Script/Mongolian.js":1208,"./Script/Mro.js":1209,"./Script/Multani.js":1210,"./Script/Myanmar.js":1211,"./Script/Nabataean.js":1212,"./Script/Nandinagari.js":1213,"./Script/New_Tai_Lue.js":1214,"./Script/Newa.js":1215,"./Script/Nko.js":1216,"./Script/Nushu.js":1217,"./Script/Nyiakeng_Puachue_Hmong.js":1218,"./Script/Ogham.js":1219,"./Script/Ol_Chiki.js":1220,"./Script/Old_Hungarian.js":1221,"./Script/Old_Italic.js":1222,"./Script/Old_North_Arabian.js":1223,"./Script/Old_Permic.js":1224,"./Script/Old_Persian.js":1225,"./Script/Old_Sogdian.js":1226,"./Script/Old_South_Arabian.js":1227,"./Script/Old_Turkic.js":1228,"./Script/Oriya.js":1229,"./Script/Osage.js":1230,"./Script/Osmanya.js":1231,"./Script/Pahawh_Hmong.js":1232,"./Script/Palmyrene.js":1233,"./Script/Pau_Cin_Hau.js":1234,"./Script/Phags_Pa.js":1235,"./Script/Phoenician.js":1236,"./Script/Psalter_Pahlavi.js":1237,"./Script/Rejang.js":1238,"./Script/Runic.js":1239,"./Script/Samaritan.js":1240,"./Script/Saurashtra.js":1241,"./Script/Sharada.js":1242,"./Script/Shavian.js":1243,"./Script/Siddham.js":1244,"./Script/SignWriting.js":1245,"./Script/Sinhala.js":1246,"./Script/Sogdian.js":1247,"./Script/Sora_Sompeng.js":1248,"./Script/Soyombo.js":1249,"./Script/Sundanese.js":1250,"./Script/Syloti_Nagri.js":1251,"./Script/Syriac.js":1252,"./Script/Tagalog.js":1253,"./Script/Tagbanwa.js":1254,"./Script/Tai_Le.js":1255,"./Script/Tai_Tham.js":1256,"./Script/Tai_Viet.js":1257,"./Script/Takri.js":1258,"./Script/Tamil.js":1259,"./Script/Tangut.js":1260,"./Script/Telugu.js":1261,"./Script/Thaana.js":1262,"./Script/Thai.js":1263,"./Script/Tibetan.js":1264,"./Script/Tifinagh.js":1265,"./Script/Tirhuta.js":1266,"./Script/Ugaritic.js":1267,"./Script/Vai.js":1268,"./Script/Wancho.js":1269,"./Script/Warang_Citi.js":1270,"./Script/Yi.js":1271,"./Script/Zanabazar_Square.js":1272,"./Script_Extensions/Adlam.js":1273,"./Script_Extensions/Ahom.js":1274,"./Script_Extensions/Anatolian_Hieroglyphs.js":1275,"./Script_Extensions/Arabic.js":1276,"./Script_Extensions/Armenian.js":1277,"./Script_Extensions/Avestan.js":1278,"./Script_Extensions/Balinese.js":1279,"./Script_Extensions/Bamum.js":1280,"./Script_Extensions/Bassa_Vah.js":1281,"./Script_Extensions/Batak.js":1282,"./Script_Extensions/Bengali.js":1283,"./Script_Extensions/Bhaiksuki.js":1284,"./Script_Extensions/Bopomofo.js":1285,"./Script_Extensions/Brahmi.js":1286,"./Script_Extensions/Braille.js":1287,"./Script_Extensions/Buginese.js":1288,"./Script_Extensions/Buhid.js":1289,"./Script_Extensions/Canadian_Aboriginal.js":1290,"./Script_Extensions/Carian.js":1291,"./Script_Extensions/Caucasian_Albanian.js":1292,"./Script_Extensions/Chakma.js":1293,"./Script_Extensions/Cham.js":1294,"./Script_Extensions/Cherokee.js":1295,"./Script_Extensions/Common.js":1296,"./Script_Extensions/Coptic.js":1297,"./Script_Extensions/Cuneiform.js":1298,"./Script_Extensions/Cypriot.js":1299,"./Script_Extensions/Cyrillic.js":1300,"./Script_Extensions/Deseret.js":1301,"./Script_Extensions/Devanagari.js":1302,"./Script_Extensions/Dogra.js":1303,"./Script_Extensions/Duployan.js":1304,"./Script_Extensions/Egyptian_Hieroglyphs.js":1305,"./Script_Extensions/Elbasan.js":1306,"./Script_Extensions/Elymaic.js":1307,"./Script_Extensions/Ethiopic.js":1308,"./Script_Extensions/Georgian.js":1309,"./Script_Extensions/Glagolitic.js":1310,"./Script_Extensions/Gothic.js":1311,"./Script_Extensions/Grantha.js":1312,"./Script_Extensions/Greek.js":1313,"./Script_Extensions/Gujarati.js":1314,"./Script_Extensions/Gunjala_Gondi.js":1315,"./Script_Extensions/Gurmukhi.js":1316,"./Script_Extensions/Han.js":1317,"./Script_Extensions/Hangul.js":1318,"./Script_Extensions/Hanifi_Rohingya.js":1319,"./Script_Extensions/Hanunoo.js":1320,"./Script_Extensions/Hatran.js":1321,"./Script_Extensions/Hebrew.js":1322,"./Script_Extensions/Hiragana.js":1323,"./Script_Extensions/Imperial_Aramaic.js":1324,"./Script_Extensions/Inherited.js":1325,"./Script_Extensions/Inscriptional_Pahlavi.js":1326,"./Script_Extensions/Inscriptional_Parthian.js":1327,"./Script_Extensions/Javanese.js":1328,"./Script_Extensions/Kaithi.js":1329,"./Script_Extensions/Kannada.js":1330,"./Script_Extensions/Katakana.js":1331,"./Script_Extensions/Kayah_Li.js":1332,"./Script_Extensions/Kharoshthi.js":1333,"./Script_Extensions/Khmer.js":1334,"./Script_Extensions/Khojki.js":1335,"./Script_Extensions/Khudawadi.js":1336,"./Script_Extensions/Lao.js":1337,"./Script_Extensions/Latin.js":1338,"./Script_Extensions/Lepcha.js":1339,"./Script_Extensions/Limbu.js":1340,"./Script_Extensions/Linear_A.js":1341,"./Script_Extensions/Linear_B.js":1342,"./Script_Extensions/Lisu.js":1343,"./Script_Extensions/Lycian.js":1344,"./Script_Extensions/Lydian.js":1345,"./Script_Extensions/Mahajani.js":1346,"./Script_Extensions/Makasar.js":1347,"./Script_Extensions/Malayalam.js":1348,"./Script_Extensions/Mandaic.js":1349,"./Script_Extensions/Manichaean.js":1350,"./Script_Extensions/Marchen.js":1351,"./Script_Extensions/Masaram_Gondi.js":1352,"./Script_Extensions/Medefaidrin.js":1353,"./Script_Extensions/Meetei_Mayek.js":1354,"./Script_Extensions/Mende_Kikakui.js":1355,"./Script_Extensions/Meroitic_Cursive.js":1356,"./Script_Extensions/Meroitic_Hieroglyphs.js":1357,"./Script_Extensions/Miao.js":1358,"./Script_Extensions/Modi.js":1359,"./Script_Extensions/Mongolian.js":1360,"./Script_Extensions/Mro.js":1361,"./Script_Extensions/Multani.js":1362,"./Script_Extensions/Myanmar.js":1363,"./Script_Extensions/Nabataean.js":1364,"./Script_Extensions/Nandinagari.js":1365,"./Script_Extensions/New_Tai_Lue.js":1366,"./Script_Extensions/Newa.js":1367,"./Script_Extensions/Nko.js":1368,"./Script_Extensions/Nushu.js":1369,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":1370,"./Script_Extensions/Ogham.js":1371,"./Script_Extensions/Ol_Chiki.js":1372,"./Script_Extensions/Old_Hungarian.js":1373,"./Script_Extensions/Old_Italic.js":1374,"./Script_Extensions/Old_North_Arabian.js":1375,"./Script_Extensions/Old_Permic.js":1376,"./Script_Extensions/Old_Persian.js":1377,"./Script_Extensions/Old_Sogdian.js":1378,"./Script_Extensions/Old_South_Arabian.js":1379,"./Script_Extensions/Old_Turkic.js":1380,"./Script_Extensions/Oriya.js":1381,"./Script_Extensions/Osage.js":1382,"./Script_Extensions/Osmanya.js":1383,"./Script_Extensions/Pahawh_Hmong.js":1384,"./Script_Extensions/Palmyrene.js":1385,"./Script_Extensions/Pau_Cin_Hau.js":1386,"./Script_Extensions/Phags_Pa.js":1387,"./Script_Extensions/Phoenician.js":1388,"./Script_Extensions/Psalter_Pahlavi.js":1389,"./Script_Extensions/Rejang.js":1390,"./Script_Extensions/Runic.js":1391,"./Script_Extensions/Samaritan.js":1392,"./Script_Extensions/Saurashtra.js":1393,"./Script_Extensions/Sharada.js":1394,"./Script_Extensions/Shavian.js":1395,"./Script_Extensions/Siddham.js":1396,"./Script_Extensions/SignWriting.js":1397,"./Script_Extensions/Sinhala.js":1398,"./Script_Extensions/Sogdian.js":1399,"./Script_Extensions/Sora_Sompeng.js":1400,"./Script_Extensions/Soyombo.js":1401,"./Script_Extensions/Sundanese.js":1402,"./Script_Extensions/Syloti_Nagri.js":1403,"./Script_Extensions/Syriac.js":1404,"./Script_Extensions/Tagalog.js":1405,"./Script_Extensions/Tagbanwa.js":1406,"./Script_Extensions/Tai_Le.js":1407,"./Script_Extensions/Tai_Tham.js":1408,"./Script_Extensions/Tai_Viet.js":1409,"./Script_Extensions/Takri.js":1410,"./Script_Extensions/Tamil.js":1411,"./Script_Extensions/Tangut.js":1412,"./Script_Extensions/Telugu.js":1413,"./Script_Extensions/Thaana.js":1414,"./Script_Extensions/Thai.js":1415,"./Script_Extensions/Tibetan.js":1416,"./Script_Extensions/Tifinagh.js":1417,"./Script_Extensions/Tirhuta.js":1418,"./Script_Extensions/Ugaritic.js":1419,"./Script_Extensions/Vai.js":1420,"./Script_Extensions/Wancho.js":1421,"./Script_Extensions/Warang_Citi.js":1422,"./Script_Extensions/Yi.js":1423,"./Script_Extensions/Zanabazar_Square.js":1424,"./index.js":1425,"./unicode-version.js":1426};function n(e){var t=i(e);return r(t)}function i(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id=1029},1457:function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"MyLoader",function(){return ne}),r.d(a,"ImageList",function(){return ce});var n=r(1),i=r.n(n),s=r(230),c=r.n(s),o=r(430),l=r(451),p=r(72),_=r(151),h=r(152),d=r(155),m=r(154),j=r(156),u=r(71),S=r(121),y=r(64),g=r(431),E=r(432),x=r.n(E),f=function(e){return Number(Number(e).toFixed())},b=function(e){var t=e.objects,r="";return t.forEach(function(e){if("rect"===e.type){var t=e.angle?' transform="rotate('.concat(f(e.angle),", ").concat(f(e.left),", ").concat(f(e.top),')"'):"";r+='    <rect x="'.concat(f(e.left),'" y="').concat(f(e.top),'" rx="').concat(e.rx,'" ry="').concat(f(e.ry),'" width="').concat(f(e.width*e.scaleX),'" height="').concat(f(e.height*e.scaleY),'"').concat(t," /> \n")}else"circle"===e.type&&(r+='    <circle cx="'.concat(f(e.left+e.radius*e.scaleY),'" cy="').concat(f(e.top+e.radius*e.scaleY),'" r="').concat(f(e.radius*e.scaleX),'" /> \n'))}),r.trimRight()},C=function(e){return e.split("\n").map(function(e){var t,r=(t=e,(new DOMParser).parseFromString(t,"text/html").body.firstChild),a={};return null!==r?(e.includes("<rect ")?(a.type="rect",a.left=f(r.getAttribute("x")),a.top=f(r.getAttribute("y")),a.width=f(r.getAttribute("width")),a.height=f(r.getAttribute("height")),a.ry=f(r.getAttribute("ry")),a.rx=f(r.getAttribute("rx")),a.fill="transparent"):e.includes("<circle ")&&(a.type="circle",a.left=f(r.getAttribute("cx"))-f(r.getAttribute("r")),a.top=f(r.getAttribute("cy"))-f(r.getAttribute("r")),a.radius=f(r.getAttribute("r")),a.fill="transparent",a.lockRotation=!0,a.lockUniScaling=!0),a):{}}).filter(function(e){return void 0!==e})},v=function(e){var t=e;return t&&"circle"===t.type&&(t.lockUniScaling=!0,t.lockRotation=!0,t.angle=0,t.originY="top"),t},w=/const MyLoader = \(\) => \([\s\S]*?<ContentLoader[\s\S]*?(rtl)?[\s\S]*?height={.*}[\s\S]*?width={.*}[\s\S]*?speed={.*}[\s\S]*?primaryColor=".*"[\s\S]*?secondaryColor=".*"[\s\S]*?[\s\S]*?>[.|\s]*?((.|\s)*)[.|\s]*?<\/ContentLoader>[\s\S]*?\)/,k=function(e){var t={};return t.width=f(e.match(/width=({(.*?)}|"(.*?)")/)[2]),t.height=f(e.match(/height=({(.*?)}|"(.*?)")/)[2]),t.speed=f(e.match(/speed=({(.*?)}|"(.*?)")/)[2]),t.primaryColor=e.match(/primaryColor="(.*?)"/)[1],t.secondaryColor=e.match(/secondaryColor="(.*?)"/)[1],t.rtl=/rtl/.test(e),t.draw=e.match(w)[2].trim(),t},P='<rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />\n    <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />\n    <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />\n    <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />\n    <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />\n    <circle cx="30" cy="30" r="30" />',B='<circle cx="30" cy="30" r="30" />\n\n     <rect x="75" y="13" rx="4" ry="4" width="100" height="13" />\n     <rect x="75" y="37" rx="4" ry="4" width="50" height="8" />\n     <rect x="0" y="70" rx="5" ry="5" width="400" height="400" />',N='<rect x="0" y="0" rx="3" ry="3" width="70" height="10" />\n     <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />\n     <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />\n     \n     <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />\n     <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />\n     \n     <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />\n     <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />\n     <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />\n     \n     <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />',O='<circle cx="10" cy="20" r="8" />\n     <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />\n     <circle cx="10" cy="50" r="8" />\n     <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />\n     <circle cx="10" cy="80" r="8" />\n     <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />\n     <circle cx="10" cy="110" r="8" />\n     <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />',G=function(e){var t=e.data,r=void 0===t?{}:t,a=e.importDeclaration,n=void 0!==a&&a;return"".concat(n?'import ContentLoader from "react-content-loader"\n\n':"","const MyLoader = () => (\n  <ContentLoader ").concat(r.rtl?"\n    rtl":"","\n    height={").concat(r.height,"}\n    width={").concat(r.width,"}\n    speed={").concat(r.speed,'}\n    primaryColor="').concat(r.primaryColor,'"\n    secondaryColor="').concat(r.secondaryColor,'"\n  >\n').concat(r.draw,"\n  </ContentLoader>\n)\n\n").concat(n?"":"render(<MyLoader />)")},H=function(){return i.a.createElement("pre",{className:"prism-code"},i.a.createElement("span",{className:"token keyword"},"import")," ContentLoader"," ",i.a.createElement("span",{className:"token keyword"},"from "),i.a.createElement("span",{className:"token string"},'"react-content-loader"'),i.a.createElement("br",null),i.a.createElement("br",null))},L=r(153),M=r(120),I=r.n(M),T=r(433),A=r(434),D=r.n(A),R=r(435),z=r.n(R),F=r(436),K=r.n(F),U=r(437),W=r.n(U),V=r(438),Y=r.n(V),J=r(439),X=r.n(J),q=(r(1009),15),Z=function(e){var t=e.title,r=e.children;return i.a.createElement(T.Tooltip,{title:t,arrow:!0,distance:25,trigger:"mouseenter",animation:"shift",size:"small"},r)},Q=function(e){function t(e){var r;return Object(_.a)(this,t),(r=Object(d.a)(this,Object(m.a)(t).call(this,e)))._SVGtoCanvas=function(){var e=r._sketch&&r._sketch._fc,t=C(r.props.draw);e&&(t.forEach(function(t){var r;t&&"rect"===t.type?r=new window.fabric.Rect(t):t&&"circle"===t.type&&(r=new window.fabric.Circle(t)),r&&e.add(r)}),e.renderAll())},r._RenderCanvas=function(){if(r._sketch){var e=b(r._sketch._fc.toJSON());r.props._HandleDraw(e)}},r._RemoveSelection=function(e){var t=e&&!e.path.includes(r.trashButton),a=e&&!e.path.includes(r.cloneButton),n=r._sketch&&r._sketch._fc,i=r.props.activeItem;n&&t&&a&&i&&(n.discardActiveObject().renderAll(),r.props._HandleSelectedItem(!1))},r._RemoveByKeyPress=function(){document.addEventListener("keydown",function(e){"Backspace"===e.code&&r._RemoveItem()},!1)},r._RemoveItem=function(){var e=r._sketch&&r._sketch._fc;e&&e.getActiveObject()&&e.remove(e.getActiveObject())},r._CloneItem=function(){var e=r._sketch&&r._sketch._fc;if(e&&e.getActiveObject()){var t=window.fabric.util.object.clone(e.getActiveObject());t.set("top",t.top+q),t.set("left",t.left+q),e.add(t),e.setActiveObject(t)}},r._Events=function(){var e=Object(L.a)(r);r._sketch._fc.on({"after:render":function(){return e._RenderCanvas()},"object:selected":function(t){return(t.target=v(t.target))&&e.props._HandleSelectedItem(!0)},"object:added":function(e){return e.target=v(e.target)},"object:moving":function(e){return e.target=v(e.target)},"selection:cleared":function(){return e.props._HandleSelectedItem(!1)}})},r.state={showCanvas:!0},r}return Object(j.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this._Events(),this._SVGtoCanvas(),this._RemoveByKeyPress()}},{key:"render",value:function(){var e=this,t=this.props,r=t._HandlePreset,a=t._HandleTool,s=t.width,c=t.height,o=t.activeItem,l=t.tool,p=t.children,_=t.guideline;return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"app-handlers",key:"handlers"},i.a.createElement("button",{className:I()("app-handlers__tool",{"app-handlers__active":"select"===l}),onClick:function(){return a(y.Tools.Select)}},i.a.createElement(Z,{title:"Select tool"},i.a.createElement("img",{src:z.a,alt:"select tool"}))),i.a.createElement("button",{className:I()("app-handlers__tool",{"app-handlers__active":"rectangle"===l}),onClick:function(){return a(y.Tools.Rectangle)}},i.a.createElement(Z,{title:"Rect tool"},i.a.createElement("img",{src:Y.a,alt:"rect tool"}))),i.a.createElement("button",{className:I()("app-handlers__tool",{"app-handlers__active":"circle"===l}),onClick:function(){return a(y.Tools.Circle)}},i.a.createElement(Z,{title:"Circle tool"},i.a.createElement("img",{src:X.a,alt:"circle tool"}))),i.a.createElement("div",{className:"app-handlers__div"},"Presets:"),i.a.createElement("button",{className:"app-handlers__preset",value:"facebook","data-height":"160",onClick:r},"facebook"),i.a.createElement("button",{className:"app-handlers__preset",value:"instagram","data-height":"475",onClick:r},"instagram"),i.a.createElement("button",{className:"app-handlers__preset",value:"code","data-height":"160",onClick:r},"code"),i.a.createElement("button",{className:"app-handlers__preset",value:"bulletList","data-height":"160",onClick:r},"bulletList"),o&&i.a.createElement("span",null,i.a.createElement("button",{className:"app-handler__trash",ref:function(t){return e.trashButton=t},onClick:this._RemoveItem},i.a.createElement(Z,{title:"Delete selected item"},i.a.createElement("img",{src:K.a,alt:"remove item"}))),i.a.createElement("button",{className:"app-handler__clone",ref:function(t){return e.cloneButton=t},onClick:this._CloneItem},i.a.createElement(Z,{title:"Clone tool"},i.a.createElement("img",{src:W.a,alt:"clone tool"}))))),i.a.createElement("div",{className:I()("app-canvas",{"app-canvas__draw":"rectangle"===l||"circle"===l}),key:"canvas"},_&&i.a.createElement("img",{src:_,className:"app-canvas__guideline",alt:"guideline"}),p,i.a.createElement(D.a,{onClickOutside:function(t){e._RemoveSelection(t)}},i.a.createElement(y.SketchField,{width:"".concat(s,"px"),height:"".concat(c,"px"),tool:l,lineWidth:0,color:"black",ref:function(t){return e._sketch=t},className:"app-canvas__sketch"}))))}}]),t}(n.Component),$=function(e){var t=e._HandleInput,r=e._HandleCheckbox,a=e._ResetColors,n=e.width,s=e.height,c=e.speed,o=(e.size,e.rtl),l=e.primaryColor,p=e.secondaryColor,_=e.guideline;return i.a.createElement("div",{className:"app-config"},i.a.createElement("h4",{className:"properties"},"(props) =>"),i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"width"},"width:"),i.a.createElement("input",{type:"number",id:"width",name:"width",value:n,onChange:t,max:"1000"})),i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"height"},"height:"),i.a.createElement("input",{type:"number",id:"height",name:"height",value:s,onChange:t,max:"1000"})),i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"speed"},"speed:"),i.a.createElement("input",{type:"number",id:"speed",name:"speed",value:c,onChange:t})),i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"primaryColor"},"primaryColor:"),i.a.createElement("input",{type:"color",id:"primaryColor",name:"primaryColor",value:l,onChange:t})),i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"secondaryColor"},"secondaryColor:"),i.a.createElement("input",{type:"color",id:"secondaryColor",name:"secondaryColor",value:p,onChange:t})),i.a.createElement("p",null,i.a.createElement("button",{className:"reset-colors",onClick:a},"Reset colors")),i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"rtl"},"RTL content:"),i.a.createElement("label",{htmlFor:"rtl",className:"toggle"},i.a.createElement("input",{type:"checkbox",className:"toggle-input",checked:o,name:"rtl",id:"rtl",onChange:r}),i.a.createElement("span",{className:"toggle-check ".concat(o?"checked":"")}))),i.a.createElement("p",{className:"app-config__guideline"},i.a.createElement("input",{placeholder:"Paste an image url here to set it as background",type:"search",id:"guideline",name:"guideline",value:_,onChange:t}))))},ee=(r(1010),r(1011)),te=function(){return i.a.createElement("div",{className:"app-header"},i.a.createElement("div",{className:"app-header__logo"},i.a.createElement("h1",null,"Create ",i.a.createElement("strong",null,"React Content Loader")),i.a.createElement("a",{href:"https://github.com/danilowoz",target:"_blank",without:"",rel:"noopener noreferrer",className:"app-assign__by"},"by @danilowoz")),i.a.createElement("p",{className:"app-assign__stars"},i.a.createElement("a",{className:"github-button",href:"https://github.com/danilowoz/react-content-loader","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star danilowoz/react-content-loader on GitHub",target:"_blank",without:"",rel:"noopener noreferrer"},"react-content-loader@",ee.dependencies["react-content-loader"]),i.a.createElement("a",{className:"github-button",href:"https://github.com/danilowoz/create-content-loader","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star danilowoz/create-content-loader on GitHub",target:"_blank",without:"",rel:"noopener noreferrer"},"create-content-loader@",ee.version)))},re=(r(1012),function(e){var t=Math.random()*(1-.7)+.7;return i.a.createElement(u.a,Object.assign({height:40,width:1060,speed:2,primaryColor:"#d9d9d9",secondaryColor:"#ecebeb"},e),i.a.createElement("rect",{x:"0",y:"15",rx:"4",ry:"4",width:"6",height:"6.4"}),i.a.createElement("rect",{x:"34",y:"13",rx:"6",ry:"6",width:200*t,height:"12"}),i.a.createElement("rect",{x:"633",y:"13",rx:"6",ry:"6",width:23*t,height:"12"}),i.a.createElement("rect",{x:"653",y:"13",rx:"6",ry:"6",width:78*t,height:"12"}),i.a.createElement("rect",{x:"755",y:"13",rx:"6",ry:"6",width:117*t,height:"12"}),i.a.createElement("rect",{x:"938",y:"13",rx:"6",ry:"6",width:83*t,height:"12"}),i.a.createElement("rect",{x:"0",y:"39",rx:"6",ry:"6",width:"1060",height:".3"}))}),ae=function(){return i.a.createElement(i.a.Fragment,null,Array(10).fill("").map(function(e,t){return i.a.createElement(re,{key:t,style:{opacity:Number(2/t).toFixed(1)}})}))};ae.metadata={name:"DaniloWoz",github:"danilowoz",description:"Table with the width of the dynamic rows",filename:"danilowoz-table"};var ne=ae,ie=function(e){var t,r;switch(e.screen){case"mobile":t="100",r="400";break;case"desktop":t="100",r="1060";break;case"large-screen":t="150",r="1920";break;default:t="100",r="1060"}return i.a.createElement(u.a,Object.assign({height:t,width:r,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),"circle"===e.imageType?i.a.createElement("circle",{cx:"60",cy:"45",r:"30"}):i.a.createElement("rect",{x:"20",y:"20",rx:"5",ry:"5",width:"64",height:"63"}),i.a.createElement("rect",{x:"105",y:"20",rx:"5",ry:"5",width:"250",height:"12"}),i.a.createElement("rect",{x:"105",y:"40",rx:"5",ry:"5",width:"180",height:"12"}),i.a.createElement("rect",{x:"105",y:"60",rx:"5",ry:"5",width:"125",height:"12"}))},se=function(){return i.a.createElement(i.a.Fragment,null,Array(5).fill("").map(function(e,t){return i.a.createElement(ie,{screen:"desktop",key:t,style:{opacity:Number(2/t).toFixed(1)}})}))};se.metadata={name:"Gaurav Agarwal",github:"gauravagarwal2704",description:"List with image (rectangle/circle)",filename:"image-list"};var ce=se,oe=function(e){var t=a[e],r=t.metadata,n=r.name,s=r.github,c=r.description,o=r.filename;return n&&s&&c&&o?i.a.createElement("div",{className:"showcase-item",key:"".concat(n,"-").concat(s,"-").concat(c)},i.a.createElement("div",{className:"showcase-component"},i.a.createElement(t,null)),i.a.createElement("div",{className:"showcase-caption"},i.a.createElement("h4",null,c," ",i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/".concat(s),target:"_blank"},"by ",n)),i.a.createElement("a",{className:"source",href:"https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/".concat(o,".js"),target:"_blank",rel:"noopener noreferrer"},"view source"))):null},le=function(){return i.a.createElement("div",{className:"showcase-item showcase-item__new"},i.a.createElement("a",{href:"https://github.com/danilowoz/create-content-loader/wiki/How-to-insert-your-loader-at-gallery",target:"_blank",rel:"noopener noreferrer"},"Insert your loader"))},pe=function(){return i.a.createElement("div",{className:"showcase"},i.a.createElement("p",{className:"showcase-button"},i.a.createElement("a",{href:"#gallery"},"Need inspiration?")),i.a.createElement("p",{className:"showcase-legend"},"Be inspired by other amazing loaders"),i.a.createElement("div",{id:"gallery",className:"showcase-grid"},Object.keys(a).map(oe),i.a.createElement(le,null)))},_e=r(440),he=r.n(_e),de=r(441),me=r.n(de),je=(r(1013),function(){return i.a.createElement(u.a,{height:475,width:650,speed:1,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},i.a.createElement("rect",{x:"2",y:"4",rx:"8",ry:"8",width:"70",height:"20"}),i.a.createElement("rect",{x:"100",y:"4",rx:"8",ry:"8",width:"60",height:"20"}),i.a.createElement("rect",{x:"0",y:"40",rx:"5",ry:"5",width:"650",height:"415"}))}),ue=function(e){function t(){var e,r;Object(_.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(r=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={activeItem:!1,draw:localStorage.getItem("draw")||P,focusEditor:!1,guideline:localStorage.getItem("guideline")||"",height:localStorage.getItem("height")||160,primaryColor:localStorage.getItem("primaryColor")||"#f3f3f3",renderCanvas:!0,rtl:"true"===localStorage.getItem("rtl"),secondaryColor:localStorage.getItem("secondaryColor")||"#ecebeb",speed:localStorage.getItem("speed")||2,tool:y.Tools.Select,width:localStorage.getItem("width")||400,loading:!1},r.setLocalStorage=function(){Object.keys(r.state).map(function(e){return localStorage.setItem(e,r.state[e])})},r._HandleDraw=function(e){r.setState({draw:e})},r._HandleEditor=function(e,t){if(void 0===r.editor.state.error){var a=k(e);a.renderCanvas=!1,r.setState(a)}},r._HandleSelectedItem=function(e){r.setState({activeItem:e})},r._HandleTool=function(e){r.setState({tool:e})},r._HandlePreset=function(e){var t=e.target.value,a=e.target.dataset.height,n={facebook:P,instagram:B,code:N,bulletList:O}[t];r.setState({draw:n,height:a,renderCanvas:!1})},r._ResetColors=function(){r.setState({primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"})},r._HandleInput=function(e){var t,a=e.target,n=a.value,i=a.name;r.setState((t={},Object(p.a)(t,i,n),Object(p.a)(t,"renderCanvas",!1),t))},r._HandleCheckbox=function(e){var t,a=e.target,n=a.name,i=a.checked;r.setState((t={},Object(p.a)(t,n,i),Object(p.a)(t,"renderCanvas",!1),t))},r}return Object(j.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.clipboard=new x.a(".copy-to-clipboard"),setTimeout(function(){e.setState({loading:!1})},1200)}},{key:"componentWillUnmount",value:function(){this.clipboard.destroy()}},{key:"componentDidUpdate",value:function(e,t){!1===this.state.renderCanvas&&!1===this.state.focusEditor&&this.setState({renderCanvas:!0}),this.setLocalStorage()}},{key:"componentDidCatch",value:function(e,t){this.setState({activeItem:!1,draw:P,focusEditor:!1,guideline:"",height:160,primaryColor:"#f3f3f3",renderCanvas:!0,secondaryColor:"#ecebeb",speed:2,tool:y.Tools.Select,width:400,rtl:!1})}},{key:"render",value:function(){var e=this,t=this.state,r=t.renderCanvas,a=Object(l.a)(t,["renderCanvas"]),n={data:a,importDeclaration:!1},s=G(n),c=G(Object(o.a)({},n,{importDeclaration:!0}));return i.a.createElement(S.d,{code:s,scope:{ContentLoader:u.a},ref:function(t){return e.editor=t},noInline:!0},i.a.createElement("div",{className:"App"},i.a.createElement(te,null),i.a.createElement("div",null,a.loading?i.a.createElement(je,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:"http://danilowoz.com/create-content-loader/",className:"handle-framework current"},i.a.createElement("img",{width:"20",src:he.a,alt:"React"})," ",i.a.createElement("span",null,"React")),i.a.createElement("a",{href:"http://danilowoz.com/create-vue-content-loader/",className:"handle-framework"},i.a.createElement("img",{width:"20",src:me.a,alt:"React"})," ",i.a.createElement("span",null,"Vue")),i.a.createElement("div",{className:"app-editor"},i.a.createElement("span",{className:"app-editor__tab"},i.a.createElement("span",null)),i.a.createElement("span",{className:"copy-to-clipboard","data-clipboard-text":c},"Copy to clipboard"),i.a.createElement(H,null),i.a.createElement(S.a,{onChange:Object(g.debounce)(1e3,this._HandleEditor)})),i.a.createElement(S.b,null))),i.a.createElement("div",null,r&&i.a.createElement(Q,Object.assign({},this.state,{_HandleDraw:this._HandleDraw,_HandleSelectedItem:this._HandleSelectedItem,_HandleTool:this._HandleTool,_HandlePreset:this._HandlePreset}),i.a.createElement(S.c,{style:{width:"".concat(this.state.width,"px"),height:"".concat(this.state.height,"px")}})),i.a.createElement($,Object.assign({},this.state,{_HandleCheckbox:this._HandleCheckbox,_HandleInput:this._HandleInput,_ResetColors:this._ResetColors})))),i.a.createElement(pe,null))}}]),t}(n.Component);c.a.render(i.a.createElement(ue,null),document.getElementById("root"))},435:function(e,t,r){e.exports=r.p+"static/media/select.e480dbf5.svg"},436:function(e,t,r){e.exports=r.p+"static/media/trash.7a4373e3.svg"},437:function(e,t,r){e.exports=r.p+"static/media/clone.1ff11d84.svg"},438:function(e,t,r){e.exports=r.p+"static/media/rect.7ddb0a9a.svg"},439:function(e,t,r){e.exports=r.p+"static/media/circle.23e0a9a0.svg"},440:function(e,t,r){e.exports=r.p+"static/media/react.6eaae665.svg"},441:function(e,t,r){e.exports=r.p+"static/media/vue.22efb7c2.svg"},452:function(e,t,r){e.exports=r(1457)},504:function(e,t){},506:function(e,t){},538:function(e,t){},539:function(e,t){},608:function(e,t){},716:function(e,t){},717:function(e,t){},751:function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=751},783:function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=783}},[[452,1,2]]]);
//# sourceMappingURL=main.16bce098.chunk.js.map