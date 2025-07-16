const cards = [
  { id: "PM-001", label: "【IMT-PM-001】 PM / We're ready!! [天道輝]", checked: true },
  { id: "PM-002", label: "【IMT-PM-002】 PM / Break time in namco [天海春香]", checked: true },
  { id: "PM-003", label: "【IMT-PM-003】 PM / Exposition by night [本田未央]", checked: true },
  { id: "PM-004", label: "【IMT-PM-004】 PM / Ensemble Sparkle [渋谷凛]", checked: true },
  { id: "PM-005", label: "【IMT-PM-005】 PM / ツアースタッフの仕事 [袖屋璃空]", checked: true }, 
  { id: "INFO-001", label: "ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー", noCheck: true},
  { id: "CP-001", label: "【IMT-CP-001】 CP / フルブルームユニフォーム [如月千早]", checked: true },
  { id: "CP-002", label: "【IMT-CP-002】 CP / フルブルームユニフォーム [渋谷凛]", checked: true },
  { id: "CP-003", label: "【IMT-CP-003】 CP / フルブルームユニフォーム [最上静香]", checked: true },
  { id: "CP-004", label: "【IMT-CP-004】 CP / フルブルームユニフォーム [桜庭薫]", checked: true },
  { id: "CP-005", label: "【IMT-CP-005】 CP / フルブルームユニフォーム [風野灯織]", checked: true },
  { id: "CP-006", label: "【IMT-CP-006】 CP / 目指せ！太鼓の達人！ [春日未来]", checked: true },
  { id: "INFO-002", label: "ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー", noCheck: true},
  { id: "EX-001", label: "【IMT-EX-001】 EX / アテンダントツアラー [天海春香]", checked: true },
  { id: "EX-002", label: "【IMT-EX-002】 EX / アテンダントツアラー [島村卯月]", checked: true },
  { id: "EX-003", label: "【IMT-EX-003】 EX / アテンダントツアラー [春日未来]", checked: true },
  { id: "EX-004", label: "【IMT-EX-004】 EX / アテンダントツアラー [天道輝]", checked: true },
  { id: "EX-005", label: "【IMT-EX-005】 EX / アテンダントツアラー [櫻木真乃]", checked: true },
  { id: "EX-006", label: "【IMT-EX-006】 EX / レッスンウェア(天海春香) [天海春香]", checked: true },
  { id: "EX-007", label: "【IMT-EX-007】 EX / レッスンウェア(如月千早) [如月千早]", checked: true },
  { id: "EX-008", label: "【IMT-EX-008】 EX / レッスンウェア(星井美希) [星井美希]", checked: true },
  { id: "EX-009", label: "【IMT-EX-009】 EX / レッスンウェア(島村卯月) [島村卯月]", checked: true },
  { id: "EX-010", label: "【IMT-EX-010】 EX / レッスンウェア(渋谷凛) [渋谷凛]", checked: true },
  { id: "EX-011", label: "【IMT-EX-011】 EX / レッスンウェア(本田未央) [本田未央]", checked: true },
  { id: "EX-012", label: "【IMT-EX-012】 EX / レッスンウェア(春日未来) [春日未来]", checked: true },
  { id: "EX-013", label: "【IMT-EX-013】 EX / レッスンウェア(最上静香) [最上静香]", checked: true },
  { id: "EX-014", label: "【IMT-EX-014】 EX / レッスンウェア(伊吹翼) [伊吹翼]", checked: true },
  { id: "EX-015", label: "【IMT-EX-015】 EX / レッスンウェア(天道輝) [天道輝]", checked: true },
  { id: "EX-016", label: "【IMT-EX-016】 EX / レッスンウェア(桜庭薫) [桜庭薫]", checked: true },
  { id: "EX-017", label: "【IMT-EX-017】 EX / レッスンウェア(柏木翼) [柏木翼]", checked: true },
  { id: "EX-018", label: "【IMT-EX-018】 EX / レッスンウェア(櫻木真乃) [櫻木真乃]", checked: true },
  { id: "EX-019", label: "【IMT-EX-019】 EX / レッスンウェア(風野灯織) [風野灯織]", checked: true },
  { id: "EX-020", label: "【IMT-EX-020】 EX / レッスンウェア(八宮めぐる) [八宮めぐる]", checked: true },
];

const list = document.getElementById("card-list");
cards.forEach(card => {
  const li = document.createElement("li");
  const label = document.createElement("label");
  let checkbox;
  if(!card.noCheck){
    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = card.id;
    checkbox.disabled = true;
    checkbox.checked = card.checked;
    label.appendChild(checkbox);
  }
  const span = document.createElement("span");
  span.textContent = card.label;
  label.appendChild(span);
  li.appendChild(label);
  list.appendChild(li);
});

const checkedCount = cards.filter(card => card.checked && !card.noCheck).length;
const totalCount = cards.filter(card => !card.noCheck).length;
const resultText = `${checkedCount}/${totalCount}`;
const resultElement = document.createElement("div");
resultElement.id = "card-count";
resultElement.textContent = `所持済みカード：${resultText}`;
document.body.appendChild(resultElement);
