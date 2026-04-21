// backend/static/app.js
const API_BASE = "http://127.0.0.1:8000";

const i18n = {
  en:{
    title:"Indic-Legal GPT",
    subtitle:"Context-aware legal intelligence",
    search:"Search",
    sample:"⚡ Sample",
    voice:"🎙 Voice",
    lang:"Language",
    mode:"Search mode",
    hero:"Find precedent. Map law. Generate briefs.",
    desc:"Semantic search for Indian legal workflows with multilingual intelligence.",
    placeholder:"Try: property dispute inheritance rights under Hindu law",
    preview:"Translated Query Preview",
    mapping:"Regional clause → National framework equivalence appears here.",
    brief:"5-Line Executive Brief",
    precedent:"Precedent Search",
    cross:"Cross-Lingual Mapping",
    summary:"Case Summary",
    chips:["Property dispute","Inheritance","Bail","Lease"],
    sampleQuery:"property dispute inheritance rights under Hindu law"
  },
  hi:{
    title:"इंडिक-लीगल जीपीटी",
    subtitle:"संदर्भ-समझ वाला कानूनी इंटेलिजेंस",
    search:"खोजें",
    sample:"⚡ उदाहरण",
    voice:"🎙 आवाज़",
    lang:"भाषा",
    mode:"खोज मोड",
    hero:"पूर्व निर्णय खोजें। कानून मैप करें। सार बनाएं।",
    desc:"भारतीय कानूनी कार्यों के लिए बहुभाषी स्मार्ट खोज।",
    placeholder:"जैसे: संपत्ति विवाद विरासत अधिकार",
    preview:"अनुवादित खोज पूर्वावलोकन",
    mapping:"क्षेत्रीय धारा → राष्ट्रीय ढांचा मिलान यहां दिखेगा।",
    brief:"5-पंक्ति संक्षिप्त सार",
    precedent:"पूर्व निर्णय खोज",
    cross:"भाषा तुलना",
    summary:"मामला सारांश",
    chips:["संपत्ति विवाद","विरासत","जमानत","किराया"],
    sampleQuery:"संपत्ति विवाद विरासत अधिकार"
  },
  ta:{
    title:"இந்திக்-லீகல் GPT",
    subtitle:"சூழல் அறியும் சட்ட நுண்ணறிவு",
    search:"தேடு",
    sample:"⚡ உதா",
    voice:"🎙 குரல்",
    lang:"மொழி",
    mode:"தேடல் முறை",
    hero:"முன்னுதாரணம். சட்ட ஒப்பீடு. சுருக்கம்.",
    desc:"இந்திய சட்ட பணிகளுக்கான பன்மொழி நுண்ணறிவு தேடல்.",
    placeholder:"உதா: சொத்து தகராறு மரபுரிமை உரிமை",
    preview:"மொழிபெயர்த்த தேடல் முன்னோட்டம்",
    mapping:"மண்டல சட்டம் → தேசிய சட்டம் பொருத்தம் இங்கே காணப்படும்.",
    brief:"5 வரி நிர்வாக சுருக்கம்",
    precedent:"முன்னுதாரண தேடல்",
    cross:"மொழி ஒப்பீடு",
    summary:"வழக்கு சுருக்கம்",
    chips:["சொத்து","மரபுரிமை","ஜாமீன்","வாடகை"],
    sampleQuery:"சொத்து தகராறு மரபுரிமை உரிமை"
  },
  te:{
    title:"ఇండిక్-లీగల్ GPT",
    subtitle:"సందర్భం తెలిసిన చట్ట సమాచారం",
    search:"వెతుకు",
    sample:"⚡ ఉదా",
    voice:"🎙 వాయిస్",
    lang:"భాష",
    mode:"శోధన మోడ్",
    hero:"ముందస్తు తీర్పు. చట్ట మ్యాప్. సారాంశం.",
    desc:"భారత చట్టాల కోసం బహుభాషా తెలివైన శోధన.",
    placeholder:"ఉదా: ఆస్తి వివాద వారసత్వ హక్కు",
    preview:"అనువాదిత శోధన ప్రివ్యూ",
    mapping:"ప్రాంతీయ నిబంధన → జాతీయ ఫ్రేమ్‌వర్క్ ఇక్కడ చూపబడుతుంది.",
    brief:"5-లైన్ సంక్షిప్త సారాంశం",
    precedent:"ముందస్తు తీర్పు",
    cross:"భాషా పోలిక",
    summary:"కేస్ సారాంశం",
    chips:["ఆస్తి","వారసత్వం","బెయిల్","అద్దె"],
    sampleQuery:"ఆస్తి వివాద వారసత్వ హక్కు"
  },
  mr:{
    title:"इंडिक-लीगल GPT",
    subtitle:"संदर्भ समजणारे कायदेशीर इंटेलिजन्स",
    search:"शोधा",
    sample:"⚡ नमुना",
    voice:"🎙 आवाज",
    lang:"भाषा",
    mode:"शोध मोड",
    hero:"पूर्वनिदर्श शोधा. कायदा नकाशा करा. सार तयार करा.",
    desc:"भारतीय कायदेशीर कामांसाठी बहुभाषिक बुद्धिमान शोध.",
    placeholder:"उदा: मालमत्ता वाद वारसाहक्क",
    preview:"अनुवादित शोध पूर्वदृश्य",
    mapping:"प्रादेशिक कलम → राष्ट्रीय चौकट जुळणी येथे दिसेल.",
    brief:"5 ओळींचा संक्षेप",
    precedent:"पूर्वनिदर्श शोध",
    cross:"भाषिक तुलना",
    summary:"प्रकरण सारांश",
    chips:["मालमत्ता","वारसा","जामीन","भाडे"],
    sampleQuery:"मालमत्ता वाद वारसाहक्क"
  },
  bn:{
    title:"ইন্ডিক-লিগ্যাল GPT",
    subtitle:"প্রসঙ্গ-সচেতন আইনি বুদ্ধিমত্তা",
    search:"খুঁজুন",
    sample:"⚡ উদাহরণ",
    voice:"🎙 ভয়েস",
    lang:"ভাষা",
    mode:"সার্চ মোড",
    hero:"পূর্ব সিদ্ধান্ত খুঁজুন। আইন মানচিত্র করুন। সারাংশ তৈরি করুন।",
    desc:"ভারতীয় আইনি কাজের জন্য বহু-ভাষিক স্মার্ট সার্চ।",
    placeholder:"যেমন: সম্পত্তি বিরোধ উত্তরাধিকার অধিকার",
    preview:"অনুবাদিত অনুসন্ধান প্রিভিউ",
    mapping:"আঞ্চলিক ধারা → জাতীয় কাঠামো এখানে দেখাবে।",
    brief:"৫ লাইনের নির্বাহী সারাংশ",
    precedent:"পূর্ব সিদ্ধান্ত অনুসন্ধান",
    cross:"ভাষা তুলনা",
    summary:"মামলার সারাংশ",
    chips:["সম্পত্তি","উত্তরাধিকার","জামিন","ভাড়া"],
    sampleQuery:"সম্পত্তি বিরোধ উত্তরাধিকার অধিকার"
  }
};

const q = document.getElementById("query");
const resultsGrid = document.getElementById("resultsGrid");
const briefList = document.getElementById("briefList");
const mappingList = document.getElementById("mappingList");
const previewBox = document.getElementById("translationPreview");
const previewText = document.getElementById("previewText");

const fallbackCases = [
  {title:"State of Haryana v. Bhajan Lal",court:"Supreme Court",year:1990,ratio:"Guidelines for quashing criminal proceedings",score:0.94},
  {title:"Maneka Gandhi v. Union of India",court:"Supreme Court",year:1978,ratio:"Life and liberty include dignity and fairness",score:0.89}
];

const briefLines = [
  "Facts: Property dispute with inheritance angle.",
  "Issue: Whether the claimant has enforceable succession rights.",
  "Ratio: Similar precedent supports the claim.",
  "Holding: Relief depends on local amendment.",
  "Applicability: Verify jurisdiction and latest law."
];

const mappings = [
  ["Section 302","Murder equivalence"],
  ["Section 376","Sexual offence equivalence"],
  ["Hindu Succession","Inheritance mapping"],
  ["Rent Control","Lease/tenancy mapping"]
];

function renderChips(lang){
  const wrap = document.getElementById("hotchips");
  wrap.innerHTML = (i18n[lang]?.chips || i18n.en.chips)
    .map(x => `<button type="button" class="mini-chip">${x}</button>`)
    .join("");
  wrap.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
      q.value = btn.textContent;
      search();
    };
  });
}

function renderCases(list){
  resultsGrid.innerHTML = list.map(c => `
    <article class="card glass">
      <div class="meta">
        <span class="badge">${Math.round((c.score || 0.9) * 100)}% match</span>
        <span>${c.court}</span>
        <span>${c.year}</span>
      </div>
      <h3>${c.title}</h3>
      <p><strong>Ratio:</strong> ${c.ratio}</p>
    </article>
  `).join("");
}

function renderBrief(lines = briefLines){
  briefList.innerHTML = lines.map(x => `<li>${x}</li>`).join("");
}

function renderMapping(){
  mappingList.innerHTML = mappings.map(([a,b]) => `
    <div class="mapping-item"><span>${a}</span><span>${b}</span></div>
  `).join("");
}

function applyLang(lang){
  const t = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;
  document.getElementById("appTitle").textContent = t.title;
  document.getElementById("appSubtitle").textContent = t.subtitle;
  document.getElementById("langLabel").textContent = t.lang;
  document.getElementById("modeLabel").textContent = t.mode;
  document.getElementById("heroTitle").textContent = t.hero;
  document.getElementById("heroDesc").textContent = t.desc;
  document.getElementById("searchBtn").textContent = t.search;
  document.getElementById("sampleBtn").textContent = t.sample;
  document.getElementById("voiceBtn").textContent = t.voice;
  document.getElementById("previewTitle").textContent = t.preview;
  document.getElementById("mappingText").textContent = t.mapping;
  document.getElementById("briefTitle").textContent = t.brief;
  document.getElementById("modePrecedent").textContent = t.precedent;
  document.getElementById("modeMapping").textContent = t.cross;
  document.getElementById("modeSummary").textContent = t.summary;
  q.placeholder = t.placeholder;
  renderChips(lang);
  document.getElementById("languageSelect").value = lang;
}

async function api(path, payload){
  try{
    const r = await fetch(`${API_BASE}${path}`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload)
    });
    if(!r.ok) return null;
    return await r.json();
  }catch{
    return null;
  }
}

async function search(){
  const lang = document.getElementById("languageSelect").value;
  const t = i18n[lang] || i18n.en;
  const query = q.value.trim() || t.sampleQuery;

  previewBox.hidden = false;
  previewText.textContent = "Loading translation preview...";

  const pv = await api("/preview", {query, lang, top_k:5});
  previewText.textContent = `Original: ${query} | Preview: ${pv?.translated_preview || query}`;

  const data = await api("/search", {query, lang, top_k:5});
  renderCases(data?.results || fallbackCases);

  const sum = await api("/summarize", {text: query, lang});
  renderBrief(sum?.summary_lines || briefLines);
}

function setActiveTab(tabName){
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });
  document.querySelectorAll(".content").forEach(panel => {
    panel.classList.toggle("active", panel.id === tabName);
  });
}

function initTabs(){
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      setActiveTab(btn.dataset.tab);
    });
  });
}

function initButtons(){
  document.getElementById("searchBtn").onclick = search;
  document.getElementById("sampleBtn").onclick = () => {
    const lang = document.getElementById("languageSelect").value;
    q.value = i18n[lang]?.sampleQuery || i18n.en.sampleQuery;
    search();
  };
  document.getElementById("voiceBtn").onclick = () => alert("Voice feature can be connected later.");
}

function init(){
  renderCases(fallbackCases);
  renderBrief();
  renderMapping();
  applyLang("en");
  setActiveTab("results");
  initTabs();
  initButtons();
}

function setLanguage(lang){
  applyLang(lang);
}
window.setLanguage = setLanguage;
init();