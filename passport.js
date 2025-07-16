const cards = [
  { id: "B-001", label: "【2011/09/15】Edyカード [天海春香・我那覇響・星井美希]", checked: true },
  { id: "B-002", label: "【2011/09/15】Edyカード [如月千早・菊地真・四条貴音]", checked: true },
  { id: "B-003", label: "【2011/09/15】Edyカード [萩原雪歩・高槻やよい・双海真美]", checked: true },
  { id: "B-004", label: "【2011/09/15】Edyカード [双海亜美・水瀬伊織・三浦あずさ・秋月律子]", checked: true },
  { id: "B-005", label: "【2011/11/23】アイマス×太鼓の達人 [天海春香・星井美希・水瀬伊織・我那覇響・どんちゃん]", checked: false },
  { id: "B-006", label: "【2013/03/22】アイマス×クレナ2 [天海春香]", checked: true },
  { id: "B-007", label: "【2013/03/22】アイマス×クレナ2 [如月千早]", checked: true },
  { id: "B-008", label: "【2013/03/22】アイマス×クレナ2 [星井美希]", checked: true },
  { id: "B-009", label: "【2013/03/22】アイマス×クレナ2 [萩原雪歩]", checked: true },
  { id: "B-010", label: "【2013/03/22】アイマス×クレナ2 [高槻やよい]", checked: true },
  { id: "B-011", label: "【2013/03/22】アイマス×クレナ2 [菊地真]", checked: true },
  { id: "B-012", label: "【2013/03/22】アイマス×クレナ2 [水瀬伊織]", checked: true },
  { id: "B-013", label: "【2013/03/22】アイマス×クレナ2 [四条貴音]", checked: true },
  { id: "B-014", label: "【2013/03/22】アイマス×クレナ2 [秋月律子]", checked: true },
  { id: "B-015", label: "【2013/03/22】アイマス×クレナ2 [三浦あずさ]", checked: true },
  { id: "B-016", label: "【2013/03/22】アイマス×クレナ2 [双海亜美・双海真美]", checked: true },
  { id: "B-017", label: "【2013/03/22】アイマス×クレナ2 [我那覇響]", checked: true },
  { id: "B-018", label: "【2014/10/23】ミリオンライブ×鉄拳20周年 [水瀬伊織×リリ]", checked: true },
  { id: "B-019", label: "【2014/10/23】ミリオンライブ×鉄拳20周年 [豊川風花×クリスティ]", checked: true },
  { id: "B-020", label: "【2014/10/23】ミリオンライブ×鉄拳20周年 [徳川まつり×デビル仁]", checked: true },
  { id: "B-021", label: "【2014/10/23】ミリオンライブ×鉄拳20周年 [福田のり子×ポール]", checked: true },
  { id: "B-022", label: "【2015/04/28】アイマス10周年×太鼓の達人15周年 [天海春香・島村卯月・春日未来]", checked: true },
  { id: "B-023", label: "【2015/10/22】10周年記念 第1弾 [天海春香]", checked: true },
  { id: "B-024", label: "【2015/10/22】10周年記念 第1弾 [高槻やよい]", checked: true },
  { id: "B-025", label: "【2015/10/22】10周年記念 第1弾 [四条貴音]", checked: true },
  { id: "B-026", label: "【2015/10/22】10周年記念 第1弾 [双海真美]", checked: true },
  { id: "B-027", label: "【2015/10/22】10周年記念 第1弾 [水瀬伊織]", checked: true },
  { id: "B-028", label: "【2015/12/24】10周年記念 第2弾 [如月千早]", checked: true },
  { id: "B-029", label: "【2015/12/24】10周年記念 第2弾 [菊地真]", checked: true },
  { id: "B-030", label: "【2015/12/24】10周年記念 第2弾 [我那覇響]", checked: true },
  { id: "B-031", label: "【2015/12/24】10周年記念 第2弾 [三浦あずさ]", checked: true },
  { id: "B-032", label: "【2015/12/24】10周年記念 第2弾 [秋月律子]", checked: true },
  { id: "B-033", label: "【2016/02/25】10周年記念 第3弾 [星井美希]", checked: true },
  { id: "B-034", label: "【2016/02/25】10周年記念 第3弾 [萩原雪歩]", checked: true },
  { id: "B-035", label: "【2016/02/25】10周年記念 第3弾 [双海亜美]", checked: true },
  { id: "B-036", label: "【2016/02/25】10周年記念 第3弾 [音無小鳥]", checked: true },
  { id: "B-037", label: "【2016/02/25】10周年記念 第3弾 [全員集合(765AS＋音無小鳥)]", checked: true },
  { id: "B-038", label: "【2016/06/16】シンデレラガールズ 第1弾 [島村卯月]", checked: true },
  { id: "B-039", label: "【2016/06/16】シンデレラガールズ 第1弾 [渋谷凛]", checked: true },
  { id: "B-040", label: "【2016/06/16】シンデレラガールズ 第1弾 [本田未央]", checked: true },
  { id: "B-041", label: "【2016/06/16】シンデレラガールズ 第1弾 [神崎蘭子]", checked: true },
  { id: "B-042", label: "【2016/10/13】シンデレラガールズ 第2弾 [アナスタシア]", checked: true },
  { id: "B-043", label: "【2016/10/13】シンデレラガールズ 第2弾 [新田美波]", checked: true },
  { id: "B-044", label: "【2016/10/13】シンデレラガールズ 第2弾 [多田李衣菜]", checked: true },
  { id: "B-045", label: "【2016/10/13】シンデレラガールズ 第2弾 [前川みく]", checked: true },
  { id: "B-046", label: "【2017/01/20】シンデレラガールズ 第3弾 [緒方智恵理]", checked: true },
  { id: "B-047", label: "【2017/01/20】シンデレラガールズ 第3弾 [城ヶ崎莉嘉]", checked: true },
  { id: "B-048", label: "【2017/01/20】シンデレラガールズ 第3弾 [双葉杏]", checked: true },
  { id: "B-049", label: "【2017/01/20】シンデレラガールズ 第3弾 [諸星きらり]", checked: true },
  { id: "B-050", label: "【2017/03/16】シンデレラガールズ 第4弾 [赤城みりあ]", checked: true },
  { id: "B-051", label: "【2017/03/16】シンデレラガールズ 第4弾 [神谷奈緒]", checked: true },
  { id: "B-052", label: "【2017/03/16】シンデレラガールズ 第4弾 [高垣楓]", checked: true },
  { id: "B-053", label: "【2017/03/16】シンデレラガールズ 第4弾 [北条加蓮]", checked: true },
  { id: "B-054", label: "【2017/03/16】シンデレラガールズ 第4弾 [三村かな子]", checked: true },
  { id: "B-055", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [天海春香]", checked: true },
  { id: "B-056", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [如月千早]", checked: true },
  { id: "B-057", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [星井美希]", checked: true },
  { id: "B-058", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [はるちはみき(天海春香・如月千早・星井美希)]", checked: true },
  { id: "B-059", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [春日未来]", checked: true },
  { id: "B-060", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [最上静香]", checked: true },
  { id: "B-061", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [伊吹翼]", checked: true },
  { id: "B-062", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [ストロベリーポップムーン(春日未来・最上静香・伊吹翼)]", checked: true },
  { id: "B-063", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [櫻木真乃]", checked: true },
  { id: "B-064", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [風野灯織]", checked: true },
  { id: "B-065", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [八宮めぐる]", checked: true },
  { id: "B-066", label: "【2021/01/22】アイマスシリーズ15周年 第1弾 [illuminationSTARS(櫻木真乃・風野灯織・八宮めぐる)]", checked: true },
  { id: "B-067", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [島村卯月]", checked: true },
  { id: "B-068", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [渋谷凛]", checked: true },
  { id: "B-069", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [本田未央]", checked: true },
  { id: "B-070", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [new generations(島村卯月・渋谷凛・本田未央)]", checked: true },
  { id: "B-071", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [天道輝]", checked: true },
  { id: "B-072", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [桜庭薫]", checked: true },
  { id: "B-073", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [柏木翼]", checked: true },
  { id: "B-074", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [DRAMATIC STARS(天道輝・桜庭薫・柏木翼)]", checked: true },
  { id: "B-075", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [赤の系譜(普通の系譜)]", checked: true },
  { id: "B-076", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [全員集合1]", checked: true },
  { id: "B-077", label: "【2021/05/20】アイマスシリーズ15周年 第2弾 [全員集合2]", checked: true },
  { id: "B-078", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [天海春香]", checked: true },
  { id: "B-079", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [如月千早]", checked: true },
  { id: "B-080", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [星井美希]", checked: true },
  { id: "B-081", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [島村卯月]", checked: true },
  { id: "B-082", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [渋谷凛]", checked: true },
  { id: "B-083", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [本田未央]", checked: true },
  { id: "B-084", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [春日未来]", checked: true },
  { id: "B-085", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [最上静香]", checked: true },
  { id: "B-086", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [伊吹翼]", checked: true },
  { id: "B-087", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [天道輝]", checked: true },
  { id: "B-088", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [桜庭薫]", checked: true },
  { id: "B-089", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [柏木翼]", checked: true },
  { id: "B-090", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [櫻木真乃]", checked: true },
  { id: "B-091", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [風野灯織]", checked: true },
  { id: "B-092", label: "【2025/03/26】アイドルマスター TOURS 第1弾 [八宮めぐる]", checked: true },
  { id: "B-093", label: "【2025/08/06】アイドルマスター TOURS 第2弾 [花海咲季]", checked: false },
  { id: "B-094", label: "【2025/08/06】アイドルマスター TOURS 第2弾 [月村手毬]", checked: false },
  { id: "B-095", label: "【2025/08/06】アイドルマスター TOURS 第2弾 [藤田ことね]", checked: false },
];

const list = document.getElementById("card-list");

cards.forEach(card => {
  const li = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = card.id;
  checkbox.disabled = true;
  checkbox.checked = card.checked;

  const span = document.createElement("span");
  span.textContent = card.label;

  label.appendChild(checkbox);
  label.appendChild(span);
  li.appendChild(label);
  list.appendChild(li);
});

const checkedCount = cards.filter(card => card.checked).length;
const totalCount = cards.length;

const resultText = `${checkedCount}/${totalCount}`;
const resultElement = document.createElement("div");
resultElement.id = "card-count";
resultElement.textContent = `所持済みバナパス：${resultText}`;
document.body.appendChild(resultElement);