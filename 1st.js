const cards = [
  { id: "01-001", label: "【IMT-01-001】 SSR / アテンダントツアラー [天海春香]", checked: false },
  { id: "01-002", label: "【IMT-01-002】 SSR / アテンダントツアラー [天海春香]", checked: false },
  { id: "01-003", label: "【IMT-01-003】 SSR / アテンダントツアラー [島村卯月]", checked: false },
  { id: "01-004", label: "【IMT-01-004】 SSR / アテンダントツアラー [春日未来]", checked: false },
  { id: "01-005", label: "【IMT-01-005】 SSR / アテンダントツアラー [天道輝]", checked: false },
  { id: "01-006", label: "【IMT-01-006】 SSR /  アテンダントツアラー [櫻木真乃]", checked: false },
  { id: "01-007", label: "【IMT-01-007】 SSR / デイアフターデイAMCG [天海春香]", checked: false },
  { id: "01-008", label: "【IMT-01-008】 SSR / デイアフターデイAMCG [天海春香]", checked: false },
  { id: "01-009", label: "【IMT-01-009】 SSR / デイアフターデイAMCG [如月千早]", checked: false },
  { id: "01-010", label: "【IMT-01-010】 SSR / デイアフターデイAMCG [星井美希]", checked: false },
  { id: "01-011", label: "【IMT-01-011】 SSR / ノーブルプライド [天道輝]", checked: true },
  { id: "01-012", label: "【IMT-01-012】 SSR / ノーブルプライド [天道輝]", checked: false },
  { id: "01-013", label: "【IMT-01-013】 SSR / ノーブルプライド [桜庭薫]", checked: false },
  { id: "01-014", label: "【IMT-01-014】 SSR / ノーブルプライド [柏木翼]", checked: false },
  { id: "01-015", label: "【IMT-01-015】 SR / トワイライトダンス [最上静香]", checked: true },
  { id: "01-016", label: "【IMT-01-016】 SR / トワイライトダンス [桜庭薫]", checked: true },
  { id: "01-017", label: "【IMT-01-017】 R / ディープワイヤード [風野灯織]", checked: true },
  { id: "01-018", label: "【IMT-01-018】 R / ディープワイヤード [桜庭薫]", checked: true },
  { id: "01-019", label: "【IMT-01-019】 R / オリエンタルクロシズ [本田未央]", checked: true },
  { id: "01-020", label: "【IMT-01-020】 R / オリエンタルクロシズ [柏木翼]", checked: true },
  { id: "01-021", label: "【IMT-01-021】 R / ドリームナビゲーター [渋谷凛]", checked: true },
  { id: "01-022", label: "【IMT-01-022】 R / ドリームナビゲーター [柏木翼]", checked: true },
  { id: "01-023", label: "【IMT-01-023】 N / ミキシンググルーヴ [櫻木真乃]", checked: true },
  { id: "01-024", label: "【IMT-01-024】 N / ミキシンググルーヴ [天道輝]", checked: true },
  { id: "01-025", label: "【IMT-01-025】 SR / 花の冠(青) [島村卯月]", checked: true },
  { id: "01-026", label: "【IMT-01-026】 SR / シルクハット(黒) [渋谷凛]", checked: true },
  { id: "01-027", label: "【IMT-01-027】 R / 天使のリング [本田未央]", checked: true },
  { id: "01-028", label: "【IMT-01-028】 R / 天使の羽 [春日未来]", checked: true },
  { id: "01-029", label: "【IMT-01-029】 R / 狐のお面 [如月千早]", checked: true },
  { id: "01-030", label: "【IMT-01-030】 R / クラウン [桜庭薫]", checked: true },
  { id: "01-031", label: "【IMT-01-031】 R / 眼帯(黒) [天海春香]", checked: true },
  { id: "01-032", label: "【IMT-01-032】 R / ハートペイント(ピンク) [星井美希]", checked: true },
  { id: "01-033", label: "【IMT-01-033】 R / マスカレードマスク(黒) [最上静香]", checked: true },
  { id: "01-034", label: "【IMT-01-034】 R / ブライトブレスレット(白) [渋谷凛]", checked: true },
  { id: "01-035", label: "【IMT-01-035】 R / ブライトアンクレット(白) [八宮めぐる]", checked: true },
  { id: "01-036", label: "【IMT-01-036】 N / お姫様ティアラ [春日未来]", checked: true },
  { id: "01-037", label: "【IMT-01-037】 N / 宇宙人アンテナ [天海春香]", checked: true },
  { id: "01-038", label: "【IMT-01-038】 N / 悪魔の角(紫) [最上静香]", checked: true },
  { id: "01-039", label: "【IMT-01-039】 N / 悪魔の羽(紫) [星井美希]", checked: true },
  { id: "01-040", label: "【IMT-01-040】 N / 悪魔の尻尾(紫) [櫻木真乃]", checked: true },
  { id: "01-041", label: "【IMT-01-041】 N / ねこみみ(白) [島村卯月]", checked: true },
  { id: "01-042", label: "【IMT-01-042】 N / ねこみみ(白) [桜庭薫]", checked: true },
  { id: "01-043", label: "【IMT-01-043】 N / ねこしっぽ(白) [如月千早]", checked: true },
  { id: "01-044", label: "【IMT-01-044】 N / ねこしっぽ(白) [柏木翼]", checked: true },
  { id: "01-045", label: "【IMT-01-045】 N / ねこみみ(三毛) [風野灯織]", checked: true },
  { id: "01-046", label: "【IMT-01-046】 N / ねこしっぽ(三毛) [伊吹翼]", checked: true },
  { id: "01-047", label: "【IMT-01-047】 N / インカムマイク(黒) [渋谷凛]", checked: true },
  { id: "01-048", label: "【IMT-01-048】 N / スクウェア眼鏡(黒) [星井美希]", checked: true },
  { id: "01-049", label: "【IMT-01-049】 N / つけひげ [伊吹翼]", checked: true },
  { id: "01-050", label: "【IMT-01-050】 N / チェーンブレスレット [天道輝]", checked: true },
  { id: "01-051", label: "【IMT-01-051】 N / ねこのて(白) [春日未来]", checked: true },
  { id: "01-052", label: "【IMT-01-052】 N / 蝶の羽(青アゲハ) [最上静香]", checked: true },
  { id: "01-053", label: "【IMT-01-053】 N / へびのぬいぐるみ [本田未央]", checked: true },
  { id: "01-054", label: "【IMT-01-054】 SSR / all you've got [渋谷凛]", checked: false },
  { id: "01-055", label: "【IMT-01-055】 SSR / mutual gift [伊吹翼]", checked: false },
  { id: "01-056", label: "【IMT-01-056】 SR / glittering essence [星井美希]", checked: true },
  { id: "01-057", label: "【IMT-01-057】 SR / お腹ぺこぺこ～！ [伊吹翼]", checked: true },
  { id: "01-058", label: "【IMT-01-058】 SR / Road to venue [春日未来]", checked: true },
  { id: "01-059", label: "【IMT-01-059】 SR / Dive into the sound [如月千早]", checked: false },
  { id: "01-060", label: "【IMT-01-060】 SR / 雨上がり、心も晴れ [風野灯織]", checked: true },
  { id: "01-061", label: "【IMT-01-061】 R / ブライトスマイル [島村卯月]", checked: true },
  { id: "01-062", label: "【IMT-01-062】 R / 二人だけのプライベートレッスン [如月千早]", checked: true },
  { id: "01-063", label: "【IMT-01-063】 R / 二人だけのプライベートレッスン [最上静香]", checked: true },
  { id: "01-064", label: "【IMT-01-064】 R / 一番星を目指して [天道輝]", checked: true },
  { id: "01-065", label: "【IMT-01-065】 R / 凛とした立ち姿 [渋谷凛]", checked: true },
  { id: "01-066", label: "【IMT-01-066】 R / ほわっと決めポーズ [櫻木真乃]", checked: true },
  { id: "01-067", label: "【IMT-01-067】 R / 元気いっぱいポーズ☆彡 [八宮めぐる]", checked: true },
  { id: "01-068", label: "【IMT-01-068】 N / ライブサポート [天海春香]", checked: true },
  { id: "01-069", label: "【IMT-01-069】 N / ライブサポート [如月千早]", checked: true },
  { id: "01-070", label: "【IMT-01-070】 N / ライブサポート [星井美希]", checked: true },
  { id: "01-071", label: "【IMT-01-071】 N / ライブサポート [島村卯月]", checked: true },
  { id: "01-072", label: "【IMT-01-072】 N / ライブサポート [渋谷凛]", checked: true },
  { id: "01-073", label: "【IMT-01-073】 N / ライブサポート [本田未央]", checked: true },
  { id: "01-074", label: "【IMT-01-074】 N / ライブサポート [春日未来]", checked: true },
  { id: "01-075", label: "【IMT-01-075】 N / ライブサポート [最上静香]", checked: true },
  { id: "01-076", label: "【IMT-01-076】 N / ライブサポート [伊吹翼]", checked: true },
  { id: "01-077", label: "【IMT-01-077】 N / ライブサポート [天道輝]", checked: true },
  { id: "01-078", label: "【IMT-01-078】 N / ライブサポート [桜庭薫]", checked: true },
  { id: "01-079", label: "【IMT-01-079】 N / ライブサポート [柏木翼]", checked: true },
  { id: "01-080", label: "【IMT-01-080】 N / ライブサポート [櫻木真乃]", checked: true },
  { id: "01-081", label: "【IMT-01-081】 N / ライブサポート [風野灯織]", checked: true },
  { id: "01-082", label: "【IMT-01-082】 N / ライブサポート [八宮めぐる]", checked: true },
  { id: "01-083", label: "【IMT-01-083】 SSR / ソングオブピース [柏木翼]", checked: false },
  { id: "01-084", label: "【IMT-01-084】 SR / パーティータイム [八宮めぐる]", checked: true },
  { id: "01-085", label: "【IMT-01-085】 SR / トリオザベスト [春日未来]", checked: true },
  { id: "01-086", label: "【IMT-01-086】 SR / ゲンキの魔法☆ [本田未央]", checked: true },
  { id: "01-087", label: "【IMT-01-087】 SR / addicted♡ [伊吹翼]", checked: true },
  { id: "01-088", label: "【IMT-01-088】 SR / グッとしてGOOD!! [天道輝]", checked: true },
  { id: "01-089", label: "【IMT-01-089】 R / Buddy☆Bang [星井美希]", checked: true },
  { id: "01-090", label: "【IMT-01-090】 R / スカイハイ！ [最上静香]", checked: true },
  { id: "01-091", label: "【IMT-01-091】 R / Flower blow [天海春香]", checked: true },
  { id: "01-092", label: "【IMT-01-092】 R / We are 315！！ [桜庭薫]", checked: true },
  { id: "01-093", label: "【IMT-01-093】 N / ラブリー♡エフェクト [櫻木真乃]", checked: true },
  { id: "01-094", label: "【IMT-01-094】 N / スカイアングル [風野灯織]", checked: true },
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
resultElement.textContent = `所持済みカード：${resultText}`;
document.body.appendChild(resultElement);