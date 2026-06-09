# 🏛️ Bellek Kurumları Ortak Kataloğu: Semantik Keşif Portalı (Prototip)

Bu proje, Hacettepe Üniversitesi Semantik Bilgi Yönetimi dersi final projesi kapsamında geliştirilmiş bir **Proof of Concept (Kavram Kanıtı)** arayüzüdür. Kütüphane, arşiv ve müze gibi bellek kurumlarının geleneksel kataloglarında yaşanan erişim ve listeleme sorunlarına karşı, Boole (Boolean) mantığının ötesine geçen **3 Katmanlı Semantik Arama Mimarisi** sunmaktadır.

## 📌 Proje Vizyonu ve Amacı

Geleneksel katalog sistemleri, kullanıcıların doğal dil sorgularını katı kelime eşleştirmeleriyle (AND/OR) filtreleyerek aramaya dirençli kavramların kaybolmasına ve alakasız sonuçların listelenmesine neden olmaktadır. Literatürde bu soruna getirilen "LLM-to-Boolean" (Büyük Dil Modelleri ile Boole dizesi üretme) yaklaşımı ise listeleme kalitesini artırmamakta, yalnızca yüzeysel bir çözüm sunmaktadır (Tay, 2026).

Bu prototip; kullanıcı ne yazdığında değil, ne istediğinde başlayan bir sistem kurgulamak amacıyla **embedding ve vektör tabanlı semantik arama** yaklaşımını merkeze almaktadır.

## ⚙️ 3 Katmanlı Sistem Mimarisi

Prototip, arama motoru mantığını aşağıdaki 3 aşamalı işlem akışıyla (pipeline) yönetir:

1. **Geniş Erişim (Gevşek Eşleştirme):** Sorgu Boole dizesine dönüştürülmez. Katı eşleştirme yerine kısmi ve kavramsal örtüşmelerle aday listesi oluşturulur.
2. **Semantik Yeniden Sıralama (Reranking):** Aday listesindeki kayıtlar, *embedding* modelleri simülasyonu aracılığıyla vektör uzayında kosinüs yakınlıklarına göre yeniden sıralanır. En ilgili kayıt en üste taşınır.
3. **LLM Destekli Zenginleştirme ve Keşif:** Kullanıcı niyeti analiz edilir, sistemin Boole yerine neden o sonuçları getirdiği açıklanır ve kullanıcıya yeni ontolojik/kavramsal keşif yolları önerilir.

## 🧪 Veri Seti ve Teknik Sınırlılıklar (Neden Mock Data Kullanıldı?)

Bu proje, bir veri tabanı büyüklük testi değil; bir **algoritma ve arayüz (UX) mimarisi kanıtıdır**. 

* İstemci tarafında (tarayıcıda) devasa vektör gömme (embedding) işlemlerinin yaratacağı performans darboğazlarını aşmak,
* Raporlanan spesifik akademik senaryoları (Örn: *Kalp krizi -> Miyokard enfarktüsü* veya *Osmanlı ceza hukuku -> Kadı sicilleri*) izole bir ortamda kusursuz test edebilmek amacıyla,

Sistem canlı bir API (Örn: Kaggle veya Github) yerine, raporla birebir uyumlu **In-memory JSON (Mock Data)** kullanılarak tasarlanmıştır. Bu yapı, gerçek bir vektör veri tabanına (Pinecone, Milvus vb.) entegre edilmeye hazır bir *Frontend* prototipi sunar.

## 🚀 Kurulum ve Kullanım

Proje herhangi bir sunucu dili (PHP, Node.js vb.) veya veri tabanı kurulumu gerektirmez. Tamamen istemci tarafında (Client-side) çalışır.

1. Repoyu bilgisayarınıza klonlayın veya `.zip` olarak indirin.
2. `index.html` dosyasına çift tıklayarak modern bir tarayıcıda (Chrome, Edge, Safari vb.) açın.
3. Arama kutusuna doğal dilde bir araştırma sorusu girin veya hazır senaryo butonlarına tıklayarak 3 katmanlı animasyonu test edin.

## 📚 Temel Referanslar

* **Tay, A. (2026).** *The horseless carriage of AI search: Why using LLMs to generate Boolean alone is likely of little benefit.*
* **Oelen, A. vd. (2024).** *ORKG ASK: A neuro-symbolic scholarly search and exploration system.*
* **Schneider, P. & Matthes, F. (2024).** *Conversational exploratory search of scholarly publications using knowledge graphs.*
* **Ertuğrul, M., & Çelik Ulusoy, D. (2021).** *Arşiv belgelerinin aranması üzerine anlamsal arama botu geliştirilmesi.*

---
*Geliştirici:* [Esra Sucu] | *Ders:* BBY464 Semantik Bilgi Yönetimi
