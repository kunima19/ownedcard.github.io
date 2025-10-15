const cards = [
  { id: "TR-01-001", label: "【IMT-TR-01-001】 TR / THE IDOLM@STER", checked: true },
  { id: "TR-01-002", label: "【IMT-TR-01-002】 TR / アイドルマスターTOURS", checked: true },
  { id: "TR-01-003", label: "【IMT-TR-01-003】 TR / EP7", checked: true },
  { id: "TR-01-004", label: "【IMT-TR-01-004】 TR / EP8", checked: true },
  { id: "TR-01-005", label: "【IMT-TR-01-005】 TR / EP9", checked: true },
  { id: "TR-01-006", label: "【IMT-TR-01-006】 TR / EP10", checked: true },
  { id: "TR-01-007", label: "【IMT-TR-01-007】 TR / EP11", checked: true },
  { id: "TR-01-008", label: "【IMT-TR-01-008】 TR / special art #01-01", checked: true },
  { id: "TR-01-009", label: "【IMT-TR-01-009】 TR / special art #01-02", checked: true },
  { id: "TR-01-010", label: "【IMT-TR-01-010】 TR / special art #01-03", checked: true },
  { id: "TR-01-011", label: "【IMT-TR-01-011】 TR / special art #01-04", checked: true },
  { id: "TR-01-012", label: "【IMT-TR-01-012】 TR / special art #01-05", checked: true },
  { id: "INFO-001", label: "ーーーーーーーーーーーーーーーーーーーーーーーー", noCheck: true},
  { id: "TR-02-001", label: "【IMT-TR-02-001】 TR / 天海春香", checked: true },
  { id: "TR-02-002", label: "【IMT-TR-02-002】 TR / 如月千早", checked: true },
  { id: "TR-02-003", label: "【IMT-TR-02-003】 TR / 星井美希", checked: true },
  { id: "TR-02-004", label: "【IMT-TR-02-004】 TR / 島村卯月", checked: true },
  { id: "TR-02-005", label: "【IMT-TR-02-005】 TR / 渋谷凛", checked: true },
  { id: "TR-02-006", label: "【IMT-TR-02-006】 TR / 本田未央", checked: true },
  { id: "TR-02-007", label: "【IMT-TR-02-007】 TR / 春日未来", checked: true },
  { id: "TR-02-008", label: "【IMT-TR-02-008】 TR / 最上静香", checked: true },
  { id: "TR-02-009", label: "【IMT-TR-02-009】 TR / 伊吹翼", checked: true },
  { id: "TR-02-010", label: "【IMT-TR-02-010】 TR / 天道輝", checked: true },
  { id: "TR-02-011", label: "【IMT-TR-02-011】 TR / 桜庭薫", checked: true },
  { id: "TR-02-012", label: "【IMT-TR-02-012】 TR / 柏木翼", checked: true },
  { id: "TR-02-013", label: "【IMT-TR-02-013】 TR / 櫻木真乃", checked: true },
  { id: "TR-02-014", label: "【IMT-TR-02-014】 TR / 風野灯織", checked: true },
  { id: "TR-02-015", label: "【IMT-TR-02-015】 TR / 八宮めぐる", checked: true },
  { id: "TR-02-016", label: "【IMT-TR-02-016】 TR / 花海咲季", checked: true },
  { id: "TR-02-017", label: "【IMT-TR-02-017】 TR / 月村手毬", checked: true },
  { id: "TR-02-018", label: "【IMT-TR-02-018】 TR / 藤田ことね", checked: true },
  { id: "TR-02-019", label: "【IMT-TR-02-019】 TR / event1 EP1", checked: false },
  { id: "TR-02-020", label: "【IMT-TR-02-020】 TR / event1 EP2", checked: false },
  { id: "TR-02-021", label: "【IMT-TR-02-021】 TR / event1 EP3", checked: false },
  { id: "TR-02-022", label: "【IMT-TR-02-022】 TR / event1 EP4", checked: false },
  { id: "TR-02-023", label: "【IMT-TR-02-023】 TR / event1 EP6", checked: false },
  { id: "TR-02-024", label: "【IMT-TR-02-024】 TR / special art #02-01", checked: false },
  { id: "TR-02-025", label: "【IMT-TR-02-025】 TR / special art #02-02", checked: false },
  { id: "TR-02-026", label: "【IMT-TR-02-026】 TR / special art #02-03", checked: false },
  { id: "TR-02-027", label: "【IMT-TR-02-027】 TR / special art #02-04", checked: false },
  { id: "TR-02-028", label: "【IMT-TR-02-028】 TR / special art #02-05", checked: false },
];

const list = document.getElementById("card-list");

cards.forEach(card => {
  const li = document.createElement("li");
  const label = document.createElement("label");

  if (!card.noCheck) {
    const checkbox = document.createElement("input");
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