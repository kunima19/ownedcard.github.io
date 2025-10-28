const cards = [
  { id: "03-001", label: "【IMT-03-001】SSR / パビリオンファンタジア [春日未来]", checked: false },
  { id: "03-002", label: "【IMT-03-002】SSR / パビリオンファンタジア [春日未来]", checked: false },
  { id: "03-003", label: "【IMT-03-003】SSR / パビリオンファンタジア [最上静香]", checked: false },
  { id: "03-004", label: "【IMT-03-004】SSR / パビリオンファンタジア [伊吹翼]", checked: false },
  { id: "03-005", label: "【IMT-03-005】SSR / アテンダントツアラー [水瀬伊織]", checked: false },
  { id: "03-006", label: "【IMT-03-006】SSR / アテンダントツアラー [硲道夫]", checked: false },
  { id: "03-007", label: "【IMT-03-007】SR / スターピースメモリーズ [水瀬伊織]", checked: false },
  { id: "03-008", label: "【IMT-03-008】R / オータムテイラード [柏木翼]", checked: false },
  { id: "03-009", label: "【IMT-03-009】R / パープルネイル [風野灯織]", checked: false },
  { id: "03-010", label: "【IMT-03-010】R / ハロウィンゴースト [渋谷凛]", checked: false },
  { id: "03-011", label: "【IMT-03-011】R / スクールリュック(紺) [伊吹翼]", checked: false },
  { id: "03-012", label: "【IMT-03-012】R / インカムマイク(白) [天道輝]", checked: false },
  { id: "03-013", label: "【IMT-03-013】N / スクウェア眼鏡(赤) [八宮めぐる]", checked: false },
  { id: "03-014", label: "【IMT-03-014】N / 悪魔の角(赤) [天道輝]", checked: false },
  { id: "03-015", label: "【IMT-03-015】N / 悪魔の羽(赤) [柏木翼]", checked: false },
  { id: "03-016", label: "【IMT-03-016】N / 悪魔の尻尾(赤) [桜庭薫]", checked: false },
  { id: "03-017", label: "【IMT-03-017】N / 狐のお面 [天海春香]", checked: false },
  { id: "03-018", label: "【IMT-03-018】N / クラウン [花海咲季]", checked: false },
  { id: "03-019", label: "【IMT-03-019】N / 蝶の羽(青アゲハ) [如月千早]", checked: false },
  { id: "03-020", label: "【IMT-03-020】SSR / rabbit on the moon [水瀬伊織]", checked: false },
  { id: "03-021", label: "【IMT-03-021】SSR / rabbit on the moon [星井美希]", checked: false },
  { id: "03-022", label: "【IMT-03-022】SSR / LESSON 1 [硲道夫]", checked: false },
  { id: "03-023", label: "【IMT-03-023】SSR / LESSON 1 [桜庭薫]", checked: false },
  { id: "03-024", label: "【IMT-03-024】SSR / flap the wings [櫻木真乃]", checked: false },
  { id: "03-025", label: "【IMT-03-025】SSR / autumn pop fes♪ [本田未央]", checked: false },
  { id: "03-026", label: "【IMT-03-026】SR / アンコール！ [島村卯月]", checked: false },
  { id: "03-027", label: "【IMT-03-027】SR / いたずら警報発令中！ [伊吹翼]", checked: false },
  { id: "03-028", label: "【IMT-03-028】SR / 拍手喝采 [桜庭薫]", checked: false },
  { id: "03-029", label: "【IMT-03-029】SR / ライブ前の一口･･･！？ [桜庭薫]", checked: false },
  { id: "03-030", label: "【IMT-03-030】R / アンコール･･･いけるの！ [星井美希]", checked: false },
  { id: "03-031", label: "【IMT-03-031】R / アンコール･･･いくよ！ [渋谷凛]", checked: false },
  { id: "03-032", label: "【IMT-03-032】R / 準備OK! [天道輝]", checked: false },
  { id: "03-033", label: "【IMT-03-033】R / 準備運動は念入りに [桜庭薫]", checked: false },
  { id: "03-034", label: "【IMT-03-034】R / ひとやすみ。 [最上静香]", checked: false },
  { id: "03-035", label: "【IMT-03-035】R / 綿密な計画 [硲道夫]", checked: false },
  { id: "03-036", label: "【IMT-03-036】R / 100点満点! [花海咲季]", checked: false },
  { id: "03-037", label: "【IMT-03-037】R / 水分補給を忘れずに [藤田ことね]", checked: false },
  { id: "03-038", label: "【IMT-03-038】N / 宣材写真！ [天海春香]", checked: false },
  { id: "03-039", label: "【IMT-03-039】N / 宣材写真！ [如月千早]", checked: false },
  { id: "03-040", label: "【IMT-03-040】N / 宣材写真！ [星井美希]", checked: false },
  { id: "03-041", label: "【IMT-03-041】N / 宣材写真！ [水瀬伊織]", checked: false },
  { id: "03-042", label: "【IMT-03-042】N / 宣材写真！ [島村卯月]", checked: false },
  { id: "03-043", label: "【IMT-03-043】N / 宣材写真！ [渋谷凛]", checked: false },
  { id: "03-044", label: "【IMT-03-044】N / 宣材写真！ [本田未央]", checked: false },
  { id: "03-045", label: "【IMT-03-045】N / 宣材写真！ [春日未来]", checked: false },
  { id: "03-046", label: "【IMT-03-046】N / 宣材写真！ [最上静香]", checked: false },
  { id: "03-047", label: "【IMT-03-047】N / 宣材写真！ [伊吹翼]", checked: false },
  { id: "03-048", label: "【IMT-03-048】N / 宣材写真！ [天道輝]", checked: false },
  { id: "03-049", label: "【IMT-03-049】N / 宣材写真！ [桜庭薫]", checked: false },
  { id: "03-050", label: "【IMT-03-050】N / 宣材写真！ [柏木翼]", checked: false },
  { id: "03-051", label: "【IMT-03-051】N / 宣材写真！ [硲道夫]", checked: false },
  { id: "03-052", label: "【IMT-03-052】N / 宣材写真！ [櫻木真乃]", checked: false },
  { id: "03-053", label: "【IMT-03-053】N / 宣材写真！ [風野灯織]", checked: false },
  { id: "03-054", label: "【IMT-03-054】N / 宣材写真！ [八宮めぐる]", checked: false },
  { id: "03-055", label: "【IMT-03-055】N / 宣材写真！ [花海咲季]", checked: false },
  { id: "03-056", label: "【IMT-03-056】N / 宣材写真！ [月村手毬]", checked: false },
  { id: "03-057", label: "【IMT-03-057】N / 宣材写真！ [藤田ことね]", checked: false },
  { id: "03-058", label: "【IMT-03-058】N / ライブサポート [水瀬伊織]", checked: false },
  { id: "03-059", label: "【IMT-03-059】N / ライブサポート [硲道夫]", checked: false },
  { id: "03-060", label: "【IMT-03-060】CO / 宣材写真！ [天海春香]", checked: false },
  { id: "03-061", label: "【IMT-03-061】CO / 宣材写真！ [如月千早]", checked: false },
  { id: "03-062", label: "【IMT-03-062】CO / 宣材写真！ [星井美希]", checked: false },
  { id: "03-063", label: "【IMT-03-063】CO / 宣材写真！ [水瀬伊織]", checked: false },
  { id: "03-064", label: "【IMT-03-064】CO / 宣材写真！ [島村卯月]", checked: false },
  { id: "03-065", label: "【IMT-03-065】CO / 宣材写真！ [渋谷凛]", checked: false },
  { id: "03-066", label: "【IMT-03-066】CO / 宣材写真！ [本田未央]", checked: false },
  { id: "03-067", label: "【IMT-03-067】CO / 宣材写真！ [春日未来]", checked: false },
  { id: "03-068", label: "【IMT-03-068】CO / 宣材写真！ [最上静香]", checked: false },
  { id: "03-069", label: "【IMT-03-069】CO / 宣材写真！ [伊吹翼]", checked: false },
  { id: "03-070", label: "【IMT-03-070】CO / 宣材写真！ [天道輝]", checked: false },
  { id: "03-071", label: "【IMT-03-071】CO / 宣材写真！ [桜庭薫]", checked: false },
  { id: "03-072", label: "【IMT-03-072】CO / 宣材写真！ [柏木翼]", checked: false },
  { id: "03-073", label: "【IMT-03-073】CO / 宣材写真！ [硲道夫]", checked: false },
  { id: "03-074", label: "【IMT-03-074】CO / 宣材写真！ [櫻木真乃]", checked: false },
  { id: "03-075", label: "【IMT-03-075】CO / 宣材写真！ [風野灯織]", checked: false },
  { id: "03-076", label: "【IMT-03-076】CO / 宣材写真！ [八宮めぐる]", checked: false },
  { id: "03-077", label: "【IMT-03-077】CO / 宣材写真！ [花海咲季]", checked: false },
  { id: "03-078", label: "【IMT-03-078】CO / 宣材写真！ [月村手毬]", checked: false },
  { id: "03-079", label: "【IMT-03-079】CO / 宣材写真！ [藤田ことね]", checked: false },
  { id: "03-080", label: "【IMT-03-080】SR / 蒼き歌姫 [如月千早]", checked: false },
  { id: "03-081", label: "【IMT-03-081】SR / Bashful smile [風野灯織]", checked: false },
  { id: "03-082", label: "【IMT-03-082】R / ハートフォー・ユー [島村卯月]", checked: false },
  { id: "03-083", label: "【IMT-03-083】R / スタンドアップ！ [硲道夫]", checked: false },
  { id: "03-084", label: "【IMT-03-084】R / We are 315! [柏木翼]", checked: false },
  { id: "03-085", label: "【IMT-03-085】N / クロスライト [星井美希]", checked: false },
  { id: "03-086", label: "【IMT-03-086】N / バブルシャワー [八宮めぐる]", checked: false },
  { id: "03-087", label: "【IMT-03-087】N / ポップフレーム [藤田ことね]", checked: false },
  { id: "03-088", label: "【IMT-03-088】SR / 8bit LIVE! [天海春香]", checked: false },
  { id: "03-089", label: "【IMT-03-089】R / 演出セット：オータム [本田未央]", checked: false },
  { id: "03-090", label: "【IMT-03-090】R / 演出セット：ハロウィン [櫻木真乃]", checked: false },
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