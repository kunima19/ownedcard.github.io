const cards = [
  { id: "02-001", label: "【IMT-02-001】 SSR / ワルツ・ド・ペガサス [島村卯月]", checked: false },
  { id: "02-002", label: "【IMT-02-002】 SSR / ワルツ・ド・ペガサス [島村卯月]", checked: false },
  { id: "02-003", label: "【IMT-02-003】 SSR / ワルツ・ド・ペガサス [渋谷凛]", checked: false },
  { id: "02-004", label: "【IMT-02-004】 SSR / ワルツ・ド・ペガサス [本田未央]", checked: false },
  { id: "02-005", label: "【IMT-02-005】 SSR / アテンダントツアラー [花海咲季]", checked: false },
  { id: "02-006", label: "【IMT-02-006】 SSR / アテンダントツアラー [花海咲季]", checked: false },
  { id: "02-007", label: "【IMT-02-007】 SSR / アテンダントツアラー [月村手毬]", checked: false },
  { id: "02-008", label: "【IMT-02-008】 SSR / アテンダントツアラー [藤田ことね]", checked: false },
  { id: "02-009", label: "【IMT-02-009】 SR / リラックスリゾート [桜庭薫]", checked: true },
  { id: "02-010", label: "【IMT-02-010】 R / チアフルドリーマー [櫻木真乃]", checked: true },
  { id: "02-011", label: "【IMT-02-011】 N / ブルーサマーグルーヴ [最上静香]", checked: false },
  { id: "02-012", label: "【IMT-02-012】 N / ブルーサマーグルーヴ [桜庭薫]", checked: true },
  { id: "02-013", label: "【IMT-02-013】 SR / ウォーターガン [八宮めぐる]", checked: true },
  { id: "02-014", label: "【IMT-02-014】 R / ダイヤペイント(黒) [天海春香]", checked: true },
  { id: "02-015", label: "【IMT-02-015】 R / いぬみみ(黒) [櫻木真乃]", checked: true },
  { id: "02-016", label: "【IMT-02-016】 R / いぬしっぽ(黒) [最上静香]", checked: true },
  { id: "02-017", label: "【IMT-02-017】 R / フラワーイヤリング [風野灯織]", checked: true },
  { id: "02-018", label: "【IMT-02-018】 R / レモンネイル [星井美希]", checked: true },
  { id: "02-019", label: "【IMT-02-019】 R / ブルーネイル [天道輝]", checked: true },
  { id: "02-020", label: "【IMT-02-020】 R / ポンポン [柏木翼]", checked: true },
  { id: "02-021", label: "【IMT-02-021】 R / 天使のリング(黒) [春日未来]", checked: true },
  { id: "02-022", label: "【IMT-02-022】 R / 天使の羽(黒) [渋谷凛]", checked: true },
  { id: "02-023", label: "【IMT-02-023】 R / ブライトブレスレット(青) [如月千早]", checked: false },
  { id: "02-024", label: "【IMT-02-024】 R / ブライトアンクレット(青) [風野灯織]", checked: true },
  { id: "02-025", label: "【IMT-02-025】 N / いぬみみ(茶) [柏木翼]", checked: true },
  { id: "02-026", label: "【IMT-02-026】 N / いぬしっぽ(茶) [八宮めぐる]", checked: true },
  { id: "02-027", label: "【IMT-02-027】 N / スクウェアサングラス [本田未央]", checked: false },
  { id: "02-028", label: "【IMT-02-028】 N / フェスリストバンド [渋谷凛]", checked: true },
  { id: "02-029", label: "【IMT-02-029】 N / うつぼのぬいぐるみ [天道輝]", checked: true },
  { id: "02-030", label: "【IMT-02-030】 N / 悪魔の角(紫) [島村卯月]", checked: true },
  { id: "02-031", label: "【IMT-02-031】 N / 悪魔の羽(紫) [伊吹翼]", checked: true },
  { id: "02-032", label: "【IMT-02-032】 N / 悪魔の尻尾(紫) [藤田ことね]", checked: true },
  { id: "02-033", label: "【IMT-02-033】 SSR / bright moonlight [月村手毬]", checked: false },
  { id: "02-034", label: "【IMT-02-034】 SSR / 開花宣言！ [島村卯月]", checked: false },
  { id: "02-035", label: "【IMT-02-035】 SSR / 自分らしく、誇らしく。 [如月千早]", checked: false },
  { id: "02-036", label: "【IMT-02-036】 SR / 全力夏フェス！ [本田未央]", checked: true },
  { id: "02-037", label: "【IMT-02-037】 SR / 天翔けるチャーハン [天道輝]", checked: true },
  { id: "02-038", label: "【IMT-02-038】 R / お使いミッション！ [天海春香]", checked: true },
  { id: "02-039", label: "【IMT-02-039】 R / お使いミッション！ [伊吹翼]", checked: true },
  { id: "02-040", label: "【IMT-02-040】 R / 一緒にランチタイム♪ [島村卯月]", checked: true },
  { id: "02-041", label: "【IMT-02-041】 R / 一緒にランチタイム♪ [櫻木真乃]", checked: true },
  { id: "02-042", label: "【IMT-02-042】 R / リハーサル中 [風野灯織]", checked: false },
  { id: "02-043", label: "【IMT-02-043】 R / つめた～い！ [八宮めぐる]", checked: false },
  { id: "02-044", label: "【IMT-02-044】 R / ダンスレッスン！ [柏木翼]", checked: true },
  { id: "02-045", label: "【IMT-02-045】 R / 学びの瞬間 [花海咲季]", checked: true },
  { id: "02-046", label: "【IMT-02-046】 R / 学びの瞬間 [月村手毬]", checked: true },
  { id: "02-047", label: "【IMT-02-047】 R / 学びの瞬間 [藤田ことね]", checked: true },
  { id: "02-048", label: "【IMT-02-048】 N / 合同レッスン！ [天海春香]", checked: true },
  { id: "02-049", label: "【IMT-02-049】 N / 合同レッスン！ [如月千早]", checked: false },
  { id: "02-050", label: "【IMT-02-050】 N / 合同レッスン！ [星井美希]", checked: true },
  { id: "02-051", label: "【IMT-02-051】 N / 合同レッスン！ [島村卯月]", checked: true },
  { id: "02-052", label: "【IMT-02-052】 N / 合同レッスン！ [渋谷凛]", checked: true },
  { id: "02-053", label: "【IMT-02-053】 N / 合同レッスン！ [本田未央]", checked: true },
  { id: "02-054", label: "【IMT-02-054】 N / 合同レッスン！ [春日未来]", checked: true },
  { id: "02-055", label: "【IMT-02-055】 N / 合同レッスン！ [最上静香]", checked: true },
  { id: "02-056", label: "【IMT-02-056】 N / 合同レッスン！ [伊吹翼]", checked: true },
  { id: "02-057", label: "【IMT-02-057】 N / 合同レッスン！ [天道輝]", checked: false },
  { id: "02-058", label: "【IMT-02-058】 N / 合同レッスン！ [桜庭薫]", checked: true },
  { id: "02-059", label: "【IMT-02-059】 N / 合同レッスン！ [柏木翼]", checked: true },
  { id: "02-060", label: "【IMT-02-060】 N / 合同レッスン！ [櫻木真乃]", checked: true },
  { id: "02-061", label: "【IMT-02-061】 N / 合同レッスン！ [風野灯織]", checked: true },
  { id: "02-062", label: "【IMT-02-062】 N / 合同レッスン！ [八宮めぐる]", checked: true },
  { id: "02-063", label: "【IMT-02-063】 N / ライブサポート [花海咲季]", checked: true },
  { id: "02-064", label: "【IMT-02-064】 N / ライブサポート [月村手毬]", checked: false },
  { id: "02-065", label: "【IMT-02-065】 N / ライブサポート [藤田ことね]", checked: false },
  { id: "02-066", label: "【IMT-02-066】 N / お待たせしました！ [袖屋璃空]", checked: true },
  { id: "02-067", label: "【IMT-02-067】 SSR / Leave it to us! [藤田ことね]", checked: false },
  { id: "02-068", label: "【IMT-02-068】 SR / わたしが1番になってみせるわ! [花海咲季]", checked: true },
  { id: "02-069", label: "【IMT-02-069】 SR / Shouting my soul [最上静香]", checked: true },
  { id: "02-070", label: "【IMT-02-070】 SR / Flight to Dream [柏木翼]", checked: true },
  { id: "02-071", label: "【IMT-02-071】 R / デュアルハート [天海春香]", checked: true },
  { id: "02-072", label: "【IMT-02-072】 R / 狙い撃ち☆ [渋谷凛]", checked: true },
  { id: "02-073", label: "【IMT-02-073】 R / We are 315!! [天道輝]", checked: true },
  { id: "02-074", label: "【IMT-02-074】 R / I'll lead you [桜庭薫]", checked: true },
  { id: "02-075", label: "【IMT-02-075】 N / ライブコミュニケーション [星井美希]", checked: true },
  { id: "02-076", label: "【IMT-02-076】 N / スプラッシュインク [本田未央]", checked: true },
  { id: "02-077", label: "【IMT-02-077】 N / スター☆エフェクト [春日未来]", checked: false },
  { id: "02-078", label: "【IMT-02-078】 N / エクスプロージョン [桜庭薫]", checked: true },
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