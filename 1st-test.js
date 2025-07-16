const cards = [
  { id: "LT-001", label: "【IMT-LT-001】 SSR / アテンダントツアラー [天海春香]", checked: false },
  { id: "LT-002", label: "【IMT-LT-002】 SSR / アテンダントツアラー [天海春香]", checked: false },
  { id: "LT-003", label: "【IMT-LT-003】 R / ディープワイヤード [風野灯織]", checked: true },
  { id: "LT-004", label: "【IMT-LT-004】 R / オリエンタルクロシズ [本田未央]", checked: true },
  { id: "LT-005", label: "【IMT-LT-005】 R / 眼帯(黒) [天海春香]", checked: true },
  { id: "LT-006", label: "【IMT-LT-006】 R / ブライトブレスレット [渋谷凛]", checked: true },
  { id: "LT-007", label: "【IMT-LT-007】 R / ブライトアンクレット [八宮めぐる]", checked: true },
  { id: "LT-008", label: "【IMT-LT-008】 N / お姫さまティアラ [春日未来]", checked: true },
  { id: "LT-009", label: "【IMT-LT-009】 N / 悪魔の角 [最上静香]", checked: true },
  { id: "LT-010", label: "【IMT-LT-010】 N / 悪魔の羽 [星井美希]", checked: true },
  { id: "LT-011", label: "【IMT-LT-011】 N / 悪魔の尻尾 [櫻木真乃]", checked: true },
  { id: "LT-012", label: "【IMT-LT-012】 N / ねこみみ(白) [島村卯月]", checked: true },
  { id: "LT-013", label: "【IMT-LT-013】 N / ねこしっぽ(白) [如月千早]", checked: true },
  { id: "LT-014", label: "【IMT-LT-014】 N / ねこみみ(三毛) [風野灯織]", checked: true },
  { id: "LT-015", label: "【IMT-LT-015】 N / ねこしっぽ(三毛) [伊吹翼]", checked: true },
  { id: "LT-016", label: "【IMT-LT-016】 SSR / all you've got [渋谷凛]", checked: false },
  { id: "LT-017", label: "【IMT-LT-017】 SR / glittering essence [星井美希]", checked: true },
  { id: "LT-018", label: "【IMT-LT-018】 SR / お腹ぺこぺこ～！ [伊吹翼]", checked: true },
  { id: "LT-019", label: "【IMT-LT-019】 R / ブライトスマイル [島村卯月]", checked: true },
  { id: "LT-020", label: "【IMT-LT-020】 R / 二人だけのプライベートレッスン [如月千早]", checked: true },
  { id: "LT-021", label: "【IMT-LT-021】 R / 二人だけのプライベートレッスン [最上静香]", checked: true },
  { id: "LT-022", label: "【IMT-LT-022】 N / ライブサポート [天海春香]", checked: true },
  { id: "LT-023", label: "【IMT-LT-023】 N / ライブサポート [櫻木真乃]", checked: true },
  { id: "LT-024", label: "【IMT-LT-024】 N / ライブサポート [本田未央]", checked: true },
  { id: "LT-025", label: "【IMT-LT-025】 N / ライブサポート [渋谷凛]", checked: true },
  { id: "LT-026", label: "【IMT-LT-026】 N / ライブサポート [風野灯織]", checked: true },
  { id: "LT-027", label: "【IMT-LT-027】 SR / パーティータイム [八宮めぐる]", checked: true },
  { id: "LT-028", label: "【IMT-LT-028】 SR / トリオザベスト [春日未来]", checked: true },
  { id: "LT-029", label: "【IMT-LT-029】 R / Buddy☆Bang [星井美希]", checked: true }
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