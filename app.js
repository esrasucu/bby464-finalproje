// app.js

// 1. 15 ADET DETAYLI, GERÇEKÇİ ACADEMIC MOCK DATA HAVUZU
const veritabani = [
    // --- 1. KATEGORİ: TIP / KLİNİK / SAĞLIK BİLİMLERİ ---
    { id: 1, baslik: "Miyokard Enfarktüsü ve Kardiyovasküler Hastalıklar El Kitabı", ozet: "Bu monografi, akut koroner sendrom gelişim süreçlerini, miyokardiyal doku nekrozunu, iskemi semptomlarını ve kardiyoloji kliniklerinde uygulanan güncel tedavi protokollerini incelemektedir.", kategori: "Koleksiyon: Klinik Tıp / Kardiyoloji", vektorMatrisi: { "kalp": 0.95, "krizi": 0.95, "müdahale": 0.60, "süreçleri": 0.50 } },
    { id: 2, baslik: "Acil Durum Yönetimi ve Klinik İlk Yardım Rehberi", ozet: "Akut göğüs ağrıları, ani solunum arresti, senkop durumları ve hastane öncesi travmalarda paramedikler için hızlı müdahale stratejileri ile hayati yaşam desteği adımları.", kategori: "Koleksiyon: Sağlık Bilimleri / Acil Tıp", vektorMatrisi: { "kalp": 0.70, "krizi": 0.70, "müdahale": 0.95, "süreçleri": 0.60 } },
    { id: 3, baslik: "İskemik Kalp Hastalıklarında Hücresel Kardiyomiyopati", ozet: "Koroner arter tıkanıklığı çeken hastalarda miyokard dokusunun oksijensiz kalması sonucu gelişen hücresel deformasyonlar ve iskemi patolojisi.", kategori: "Koleksiyon: Kardiyoloji Akademik Yayınlar", vektorMatrisi: { "kalp": 0.85, "krizi": 0.80, "müdahale": 0.40 } },
    { id: 4, baslik: "Klinik Elektrokardiyografi (EKG) Değerlendirme Atlası", ozet: "Akut koroner tıkanıklıklarda ve ritim bozukluklarında acil servis hekimleri için EKG dalga anomalileri ve aritmi teşhis yöntemleri.", kategori: "Koleksiyon: Tıbbi Görüntüleme", vektorMatrisi: { "kalp": 0.60, "müdahale": 0.50 } },
    { id: 5, baslik: "Solunum Yetmezliği ve Entübasyon Hastane Öncesi Protokolleri", ozet: "Solunum arresti ve akut akciğer ödemi vakalarında paramedikal ekiplerin ambulans içi hava yolu yönetimi ve mekanik ventilasyon süreçleri.", kategori: "Koleksiyon: Sağlık Bilimleri / Acil Tıp", vektorMatrisi: { "müdahale": 0.80, "süreçleri": 0.75 } },

    // --- 2. KATEGORİ: ARŞİV / TARİH / HUKUK ---
    { id: 6, baslik: "Osmanlı Hukuk Yapısında Ceza Kanunnameleri ve Kadı Sicilleri", ozet: "Klasik dönem Osmanlı ceza adaleti, örfi hukuk yaptırımları, divan kararları ve mahkeme kayıtlarında geçen eski hukuki lügat terimlerinin filolojik ve tarihsel analizi.", kategori: "Koleksiyon: Hukuk Tarihi / Arşiv Belgeleri", vektorMatrisi: { "osmanlı": 0.95, "ceza": 0.95, "kanunları": 0.90, "lügatleri": 0.98, "arşiv": 0.85 } },
    { id: 7, baslik: "Mecelle-i Ahkam-ı Adliye ve İslam Medeni Kanun Terimleri", ozet: "Ahmet Cevdet Paşa öncülüğünde kodifiye edilen Mecelle'nin borçlar, eşya ve yargılama hukuku lügat terimleri üzerine sistematik inceleme.", kategori: "Koleksiyon: Osmanlı Hukuk Arşivi", vektorMatrisi: { "osmanlı": 0.88, "kanunları": 0.85, "lügatleri": 0.90, "arşiv": 0.70 } },
    { id: 8, baslik: "16. Yüzyıl İstanbul Mahkemeleri Divan-ı Hümayun Sicil Kayıtları", ozet: "Bâb-ı Âsafî ve Sadaret arşiv belgelerinde yer alan örfi hukuk ihlalleri, kısas ve tazir cezalarına dair orijinal kadı ilamlarının transliterasyonu.", kategori: "Koleksiyon: Başbakanlık Osmanlı Arşivi", vektorMatrisi: { "osmanlı": 0.90, "ceza": 0.85, "arşiv": 0.95 } },
    { id: 9, baslik: "Cumhuriyet Dönemi Mahkeme Arşivleri ve Erken Hukuk Reformları", ozet: "1926 Türk Kanunu Medenisi'nin kabulü sonrası eski şeriyye mahkemelerinden modern adli sistem kodlarına geçiş süreci evrakları.", kategori: "Koleksiyon: Cumhuriyet Tarihi Arşivleri", vektorMatrisi: { "kanunları": 0.80, "arşiv": 0.90 } },
    { id: 10, baslik: "Tarihsel Belge Analitiği ve Diplomatik Terimler Sözlüğü", ozet: "Ferman, berat, hüccet og kadı sicillerinde kullanılan paleografik işaretler ile diplomatik yazı dillerinin filolojik kılavuzu.", kategori: "Koleksiyon: Arşivcilik ve Paleografya Çalışmaları", vektorMatrisi: { "lügatleri": 0.92, "arşiv": 0.80 } },

    // --- 3. KATEGORİ: BİLİŞİM / YAPAY ZEKA / SEMANTİK BİLGİ YÖNETİMİ ---
    { id: 11, baslik: "Yaygın Dil Modelleri (LLM) ve Semantik Bilgi Yönetimi", ozet: "Doğal dil işleme (NLP) teknolojilerinde kelime gömmeleri (word embeddings), vektör veritabanları, ontolojiler, bilgi grafları og anlamsal bilgi erişim süreçlerinin mimari tasarımı.", kategori: "Koleksiyon: Bilgisayar Bilimleri / Yapay Zeka", vektorMatrisi: { "büyük": 0.90, "dil": 0.95, "modelleri": 0.95, "semantik": 0.98, "arama": 0.98 } },
    { id: 12, baslik: "Bilgi Grafları, Ontolojiler ve Nöro-Sembolik Arama Algoritmaları", ozet: "Kavramsal ağların (RDF/OWL) derin öğrenme modelleri ile birleştirilerek bellek kurumları kütüphane kataloglarında konuşmaya dayalı keşif (exploratory search) sistemlerine entegrasyonu.", kategori: "Koleksiyon: Bilgi ve Belge Yönetimi / Yapay Zeka", vektorMatrisi: { "semantik": 0.92, "modelleri": 0.85, "arama": 0.90, "dil": 0.75 } },
    { id: 13, baslik: "Vektör Veri Tabanları (Pinecone, Milvus) ve Kosinüs Benzerliği", ozet: "Yüksek boyutlu embedding verilerinin indekslenmesi, arama darboğazlarının LTR (Learning to Rank) modelleriyle aşılması ve milisaniyeler düzeyinde yeniden sıralama mimarileri.", kategori: "Koleksiyon: Yazılım Mühendisliği / Bilgi Erişimi", vektorMatrisi: { "arama": 0.95, "semantik": 0.80, "büyük": 0.70 } },
    { id: 14, baslik: "Doğal Dil İşleme (NLP) Alanında Yakınlık Ölçütleri ve SBERT", ozet: "Sentence-BERT tabanlı metin temsillerinin anlamsal yakınlık uzayındaki kosinüs uzaklıklarının matematiksel modelleri ve performans metrikleri.", kategori: "Koleksiyon: Bilgisayar Bilimleri", vektorMatrisi: { "büyük": 0.75, "dil": 0.90, "modelleri": 0.85 } },
    { id: 15, baslik: "Geleneksel Lexical Arama Motorları: BM25 ve TF-IDF Sınırları", ozet: "Anahtar kelime sıklığına dayalı kütüphane OPAC altyapılarının eş anlamlı kelimeler ve kavramsal varyasyonlar karşısında yaşadığı anlamsal kayıpların analizi.", kategori: "Koleksiyon: Bilgi Erişimi / Legacy Sistemler", vektorMatrisi: { "arama": 0.85, "semantik": 0.70 } }
];

// Enter tuşlarını dinleyen fonksiyonlar
function handleEnter(e) { if(e.key === 'Enter') executeSearch('mainSearchInput'); }
function handleEnterTop(e) { if(e.key === 'Enter') executeSearch('topSearchInput'); }

// Senaryo butonlarının hızlı tetikleyicisi
function quickSearch(text) {
    document.getElementById('mainSearchInput').value = text;
    executeSearch('mainSearchInput');
}

// Ana Arama İşlemi ve 3 Katmanlı Pipeline Animasyonu
function executeSearch(inputId) {
    const query = document.getElementById(inputId).value.toLowerCase().trim();
    if (!query) return alert("Lütfen arama kutusuna bir metin girin.");

    // İki input alanını birbiriyle senkronize et
    document.getElementById('mainSearchInput').value = query;
    document.getElementById('topSearchInput').value = query;

    // Görünüm katmanlarını değiştir
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('resultsPage').style.display = 'block';

    // Önceki sonuçları sıfırla
    document.getElementById('aiAssistantBox').style.display = 'none';
    document.getElementById('validationBox').style.display = 'none';
    document.getElementById('resultsList').innerHTML = '';

    // Akış ışıklarını sıfırla
    const s1 = document.getElementById('step1'); const s2 = document.getElementById('step2'); const s3 = document.getElementById('step3');
    s1.className = 'step'; s2.className = 'step'; s3.className = 'step';

    // Zaman ayarlı simülasyon akışı
    setTimeout(() => { s1.className = 'step active'; }, 200);
    setTimeout(() => { s1.className = 'step done'; s2.className = 'step active'; }, 1000);
    setTimeout(() => { s2.className = 'step done'; s3.className = 'step active'; }, 1800);
    setTimeout(() => { s3.className = 'step done'; processLogic(query); }, 2600);
}

// Semantik Matematik ve Sıralama Çekirdeği (Katman 1 ve 2)
function processLogic(query) {
    const tokens = query.split(/\s+/);
    let sonuclar = [];

    veritabani.forEach(item => {
        let totalScore = 0.05; 
        let matches = 0;
        
        tokens.forEach(t => {
            let word = t.replace(/[?.,!]/g, '');
            if (item.vektorMatrisi[word]) {
                totalScore += item.vektorMatrisi[word] * 0.25;
                matches++;
            }
            // Projedeki semantik köprü simülasyonları
            if ((word === "kalp" || word === "krizi") && item.id === 1) { totalScore += 0.35; matches++; }
            if ((word === "kalp" || word === "krizi") && item.id === 3) { totalScore += 0.25; matches++; }
            if ((word === "osmanlı" || word === "arşiv") && item.id === 6) { totalScore += 0.35; matches++; }
            if ((word === "osmanlı" || word === "arşiv") && item.id === 7) { totalScore += 0.25; matches++; }
        });

        if (totalScore > 0.99) totalScore = 0.99;
        // Katman 1: Gevşek Eşleşme Onayı
        if (matches > 0 || totalScore > 0.12) {
            sonuclar.push({ ...item, finalScore: totalScore });
        }
    });

    // Katman 2: Semantik Yeniden Sıralama (Reranking)
    sonuclar.sort((a, b) => b.finalScore - a.finalScore); 
    
    renderAIResponse(sonuclar, query); 
    renderCards(sonuclar);
    
    document.getElementById('aiAssistantBox').style.display = 'block';
    if(sonuclar.length > 0) document.getElementById('validationBox').style.display = 'block';
}

// Katman 3: Konuşma ve Keşif Odaklı Arayüz Yönetimi (LLM)
function renderAIResponse(data, query) {
    const aiText = document.getElementById('aiText');
    const tagsArea = document.getElementById('exploreTagsArea');
    
    if (data.length === 0) {
        aiText.innerHTML = "Arama terimlerinizle eşleşen anlamsal bir kayıt bulunamadı.";
        tagsArea.innerHTML = ""; return;
    }

    let responseText = `<strong>Sistemimiz, doğal dil araştırma sorgunuzu kabul etmiş; Boole dizesine dönüştürmeksizin doğrudan embedding tabanlı semantik eşleştirme yaparak ilgili ${data.length} adet yayını sıralamış ve bu yanıtı üretmiştir.</strong><br><br>`;
    let tagsHTML = '';

    if (query.includes("kalp") || query.includes("müdahale")) {
        responseText += "Görünüşe göre acil kardiyovasküler durumları araştırıyorsunuz. Boole filtresi kullanmak yerine, niyetinizi kavrayarak doğrudan kütüphane kataloğundaki <strong>'Miyokard Enfarktüsü'</strong> klinik monografisini ve acil tıp ilk yardım dökümanlarını semantik yakınlıklarına göre eşleştirip en üst sıralara getirdim.";
        tagsHTML = `<span class="exp-tag" onclick="quickSearch('Miyokard doku iskemisi')">Miyokard İskemisi</span>
                    <span class="exp-tag" onclick="quickSearch('Akut koroner sendrom tedavi protokolleri')">Akut Koroner Sendrom</span>
                    <span class="exp-tag" onclick="quickSearch('Hastane öncesi entübasyon süreçleri')">Hava Yolu Yönetimi</span>`;
    } 
    else if (query.includes("osmanlı") || query.includes("ceza") || query.includes("lügat")) {
        responseText += "Tarihsel arşiv belgelerinde modern söz dizimiyle arama yapmak büyük bilgi kayıplarına yol açar. Bu yüzden araştırma sorunuzu arka plandaki ontolojik bilgi grafıyla destekleyerek, doğrudan eski lügat terimleri (Kadı sicilleri, şeriyye kayıtları, örfi hukuk yaptırımları) üzerinden eşleştirdim.";
        tagsHTML = `<span class="exp-tag" onclick="quickSearch('Kadı sicilleri og divan kararları')">Kadı Sicilleri</span>
                    <span class="exp-tag" onclick="quickSearch('Mecelle medeni kanun terimleri')">Mecelle Terimleri</span>
                    <span class="exp-tag" onclick="quickSearch('Örfi hukuk yaptırımları ve tazir')">Örfi Hukuk</span>`;
    }
    else if (query.includes("modelleri") || query.includes("semantik") || query.includes("arama")) {
        responseText += "Büyük Dil Modelleri (LLM), semantik bilgi yönetimi ve vektör veri tabanları üzerine araştırma yapıyorsunuz. Kelime gömmeleri (word embeddings), bilgi grafları ve kosinüs yakınlığı algoritmaları üzerine en yüksek ilgililik skoru gösteren akademik yayınlar listelenmiştir.";
        tagsHTML = `<span class="exp-tag" onclick="quickSearch('Vektör veri tabanları kosinüs benzerliği')">Vektör Veritabanları</span>
                    <span class="exp-tag" onclick="quickSearch('Bilgi grafları ve nöro-sembolik yapay zeka')">Bilgi Grafları</span>
                    <span class="exp-tag" onclick="quickSearch('Sentence-BERT metin temsilleri')">SBERT Modelleri</span>`;
    } else {
        responseText += "Girdiğiniz doğal dil sorgusuna en yakın kavramsal eşleşmeler ve döküman özetleri aşağıda listelenmiştir.";
        tagsHTML = `<span class="exp-tag" onclick="quickSearch('Semantik Bilgi Yönetimi')">Semantik Arama</span>`;
    }

    aiText.innerHTML = responseText;
    tagsArea.innerHTML = tagsHTML;
}

// Kartları Çizme ve En İlgili Kayıt Vurgusu Modülü
function renderCards(data) {
    const list = document.getElementById('resultsList');
    if(data.length === 0) { list.innerHTML = "<p>Kayıt Bulunamadı.</p>"; return; }
    
    list.innerHTML = data.map((book, index) => {
        const isTopRank = index === 0;
        const cardClass = isTopRank ? 'result-card top-rank' : 'result-card';
        const topBadgeHTML = isTopRank ? `<div class="top-badge">⭐ EN İLGİLİ KAYIT (1. SIRA)</div>` : '';

        return `
            <div class="${cardClass}">
                ${topBadgeHTML}
                <div class="card-header">
                    <div class="card-title">${book.baslik}</div>
                    <div class="card-score">Kosinüs Benzerlik Skoru: %${(book.finalScore * 100).toFixed(0)}</div>
                </div>
                <div class="card-abstract"><strong>Katalog Özeti:</strong> ${book.ozet}</div>
                <div class="card-footer">
                    <span>📁 ${book.kategori}</span>
                    <span style="color:#10b981;">✔ Katman 1 Onaylı</span>
                </div>
            </div>
        `;
    }).join('');
}