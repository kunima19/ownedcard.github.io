const cards = [
  { id: "R-001", label: "【2004/12/17】ロケテスト版カード [天海春香]", checked: false },
  { id: "R-002", label: "【2004/12/17】ロケテスト版カード [高槻やよい]", checked: false },
  { id: "R-003", label: "【2004/12/17】ロケテスト版カード [三浦あずさ]", checked: false },
  { id: "R-004", label: "【2004/12/17】ロケテスト版カード [如月千早]", checked: false },
  { id: "R-005", label: "【2004/12/17】ロケテスト版カード [水瀬伊織]", checked: false },
  { id: "R-006", label: "【2004/12/17】ロケテスト版カード [秋月律子]", checked: false },
  { id: "R-007", label: "【2004/12/17】ロケテスト版カード [萩原雪歩]", checked: false },
  { id: "R-008", label: "【2004/12/17】ロケテスト版カード [菊地真]", checked: false },
  { id: "R-009", label: "【2004/12/17】ロケテスト版カード [双海亜美・双海真美]", checked: false },
  { id: "R-010", label: "【2004/12/17】ロケテスト版カード [全員]", checked: false },
  { id: "R-011", label: "【2005/07/26】通常カード(筐体排出) [天海春香]", checked: true },
  { id: "R-012", label: "【2005/07/26】通常カード(筐体排出) [高槻やよい]", checked: true },
  { id: "R-013", label: "【2005/07/26】通常カード(筐体排出) [萩原雪歩]", checked: true },
  { id: "R-014", label: "【2005/07/26】通常カード(筐体排出) [如月千早]", checked: true },
  { id: "R-015", label: "【2005/07/26】通常カード(筐体排出) [菊地真]", checked: true },
  { id: "R-016", label: "【2005/07/26】通常カード(筐体排出) [双海亜美・双海真美]", checked: true },
  { id: "R-017", label: "【2005/07/26】通常カード(筐体排出) [三浦あずさ]", checked: true },
  { id: "R-018", label: "【2005/07/26】通常カード(筐体排出) [水瀬伊織]", checked: true },
  { id: "R-019", label: "【2005/07/26】通常カード(筐体排出) [秋月律子]", checked: true },
  { id: "R-020", label: "【2005/07/26】通常カード(筐体排出) [全員]", checked: true },
  { id: "R-021", label: "【2005/10/26】トライアルカード(キャンペーン引換) [天海春香]", checked: true },
  { id: "R-022", label: "【2005/10/26】トライアルカード(キャンペーン引換) [高槻やよい]", checked: true },
  { id: "R-023", label: "【2005/10/26】トライアルカード(キャンペーン引換) [萩原雪歩]", checked: true },
  { id: "R-024", label: "【2005/10/26】トライアルカード(キャンペーン引換) [如月千早]", checked: true },
  { id: "R-025", label: "【2005/10/26】トライアルカード(キャンペーン引換) [菊地真]", checked: true },
  { id: "R-026", label: "【2005/10/26】トライアルカード(キャンペーン引換) [双海亜美・双海真美]", checked: true },
  { id: "R-027", label: "【2005/10/26】トライアルカード(キャンペーン引換) [三浦あずさ]", checked: true },
  { id: "R-028", label: "【2005/10/26】トライアルカード(キャンペーン引換) [水瀬伊織]", checked: true },
  { id: "R-029", label: "【2005/10/26】トライアルカード(キャンペーン引換) [秋月律子]", checked: true },
  { id: "R-030", label: "【2005/10/26】トライアルカード(キャンペーン引換) [全員]", checked: true },
  { id: "R-031", label: "【2005/09/28】MASTERPIECE01(CD初回特典) [天海春香・萩原雪歩・秋月律子]", checked: false },
  { id: "R-032", label: "【2005/11/02】MASTERPIECE02(CD初回特典) [如月千早・三浦あずさ・菊地真]", checked: false },
  { id: "R-033", label: "【2005/11/30】MASTERPIECE03(CD初回特典) [水瀬伊織・双海亜美・双海真美・高槻やよい]", checked: false },
  { id: "R-034", label: "【2006/03/22】MASTERPIECE04(CD初回特典) [全員]", checked: false },
  { id: "R-035", label: "【2006/05/31】MASTERPIECE05(CD初回特典) [全員]", checked: false },
  { id: "R-036", label: "【2006/07/19】MASTER BOX(一部店舗CD特典) [全員(筐体イラスト)]", checked: false },
  { id: "R-037", label: "【2006/08/11】SHINING STAR TORIKO コミケ70(CD特典) [天海春香・如月千早・萩原雪歩]", checked: false },
  { id: "R-038", label: "【2005/08/19】PREMIUM KIT(書籍特典) [全員(紫背景)]", checked: true },
  { id: "R-039", label: "【2005/08/19】PREMIUM KIT(書籍特典) [全員(黒枠)]", checked: true },
  { id: "R-040", label: "【2006/01/05】キャラクターマスター(書籍特典) [全員(青枠)]", checked: true },
  { id: "R-041", label: "【2006/05/25】SCENE 05 EXTRA STAGE!(ドラマCD初回特典) [天海春香・秋月律子・高槻やよい・水瀬伊織・三浦あずさ]", checked: true },
  { id: "R-042", label: "【2006/07/21】SCENE 06 EXTRA STAGE!(ドラマCD初回特典) [天海春香・如月千早・萩原雪歩・水瀬伊織・秋月律子]", checked: true },
  { id: "R-043", label: "【2006/03/10】Lovable Days(DVD特典) [全員]", checked: true },
  { id: "R-044", label: "【2006/07/23】1stANNIVERSARY LIVE(チケット特典) [全員(赤背景+シルエット)]", checked: false },
  { id: "R-045", label: "【2007/04/01】ALL STAR LIVE 2007(チケット特典) [全員(緑背景+シルエット)]", checked: false },
  { id: "R-046", label: "【2019/08/01】namco中野店聖地化認定記念(筐体排出) [全員]", checked: false },

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