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