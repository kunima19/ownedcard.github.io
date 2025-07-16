const cards = [
  { id: "LT2-001", label: "【IMT-LT2-001】 SSR / アテンダントツアラー [天海春香]", checked: false },
  { id: "LT2-002", label: "【IMT-LT2-002】 SSR / アテンダントツアラー [天海春香]", checked: false },
  { id: "LT2-003", label: "【IMT-LT2-003】 SSR / アテンダントツアラー [島村卯月]", checked: false },
  { id: "LT2-004", label: "【IMT-LT2-004】 R / ディープワイヤード [風野灯織]", checked: true },
  { id: "LT2-005", label: "【IMT-LT2-005】 R / ディープワイヤード [桜庭薫]", checked: true },
  { id: "LT2-006", label: "【IMT-LT2-006】 R / オリエンタルクロシズ [本田未央]", checked: true },
  { id: "LT2-007", label: "【IMT-LT2-007】 R / オリエンタルクロシズ [柏木翼]", checked: true },
  { id: "LT2-008", label: "【IMT-LT2-008】 R / 眼帯(黒) [天海春香]", checked: true },
  { id: "LT2-009", label: "【IMT-LT2-009】 R / ブライトブレスレット [渋谷凛]", checked: true },
  { id: "LT2-010", label: "【IMT-LT2-010】 R / ブライトアンクレット [八宮めぐる]", checked: true },
  { id: "LT2-011", label: "【IMT-LT2-011】 N / お姫さまティアラ [春日未来]", checked: true },
  { id: "LT2-012", label: "【IMT-LT2-012】 N / 悪魔の角 [最上静香]", checked: true },
  { id: "LT2-013", label: "【IMT-LT2-013】 N / 悪魔の羽 [星井美希]", checked: true },
  { id: "LT2-014", label: "【IMT-LT2-014】 N / 悪魔の尻尾 [櫻木真乃]", checked: true },
  { id: "LT2-015", label: "【IMT-LT2-015】 N / ねこみみ(白) [島村卯月]", checked: true },
  { id: "LT2-016", label: "【IMT-LT2-016】 N / ねこみみ(白) [桜庭薫]", checked: true },
  { id: "LT2-017", label: "【IMT-LT2-017】 N / ねこしっぽ(白) [如月千早]", checked: true },
  { id: "LT2-018", label: "【IMT-LT2-018】 N / ねこしっぽ(白) [柏木翼]", checked: true },
  { id: "LT2-019", label: "【IMT-LT2-019】 N / ねこみみ(三毛) [風野灯織]", checked: true },
  { id: "LT2-020", label: "【IMT-LT2-020】 N / ねこしっぽ(三毛) [伊吹翼]", checked: true },
  { id: "LT2-021", label: "【IMT-LT2-021】 SSR / all you've got [渋谷凛]", checked: true },
  { id: "LT2-022", label: "【IMT-LT2-022】 SR / glittering essence [星井美希]", checked: true },
  { id: "LT2-023", label: "【IMT-LT2-023】 SR / お腹ぺこぺこ～！ [伊吹翼]", checked: true },
  { id: "LT2-024", label: "【IMT-LT2-024】 SR / Road to venue [春日未来]", checked: true },
  { id: "LT2-025", label: "【IMT-LT2-025】 R / ブライトスマイル [島村卯月]", checked: true },
  { id: "LT2-026", label: "【IMT-LT2-026】 R / 二人だけのプライベートレッスン [如月千早]", checked: true },
  { id: "LT2-027", label: "【IMT-LT2-027】 R / 二人だけのプライベートレッスン [最上静香]", checked: true },
  { id: "LT2-028", label: "【IMT-LT2-028】 R / 一番星を目指して [天道輝]", checked: true },
  { id: "LT2-029", label: "【IMT-LT2-029】 N / ライブサポート [天海春香]", checked: true },
  { id: "LT2-030", label: "【IMT-LT2-030】 N / ライブサポート [櫻木真乃]", checked: true },
  { id: "LT2-031", label: "【IMT-LT2-031】 N / ライブサポート [本田未央]", checked: true },
  { id: "LT2-032", label: "【IMT-LT2-032】 N / ライブサポート [渋谷凛]", checked: true },
  { id: "LT2-033", label: "【IMT-LT2-033】 N / ライブサポート [風野灯織]", checked: true },
  { id: "LT2-034", label: "【IMT-LT2-034】 N / ライブサポート [八宮めぐる]", checked: true },
  { id: "LT2-035", label: "【IMT-LT2-035】 SR / パーティータイム [八宮めぐる]", checked: true },
  { id: "LT2-036", label: "【IMT-LT2-036】 SR / トリオザベスト [春日未来]", checked: true },
  { id: "LT2-037", label: "【IMT-LT2-037】 R / Buddy☆Bang [星井美希]", checked: true },
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