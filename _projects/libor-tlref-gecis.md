---
title: LIBOR'dan TLREF'e Geçiş için Modelleme, Fiyatlama ve İşlem Kurallarının Belirlenmesi
year: 2020-2021
organization: Türkiye Bankalar Birliği / Ernst & Young
category: Finansal Teknolojiler
status: Tamamlandı
featured: true
---

## Proje Arka Planı

### LIBOR Krizi ve Global Geçiş

London Interbank Offered Rate (LIBOR), 1986'dan bu yana küresel finansal piyasalarda referans faiz oranı olarak kullanılmıştır. Ancak, 2012 yılında ortaya çıkan manipülasyon skandalları sonrasında LIBOR'un güvenilirliği sorgulanmaya başlanmış ve düzenleyici otoriteler alternatif referans oranlarına geçiş kararı almıştır.

**Financial Conduct Authority (FCA)**, 2017 yılında LIBOR'un 2021 sonunda sona ereceğini açıklamıştır. Bu gelişme:

- **350 trilyon dolarlık** küresel finansal kontratı etkilemektedir
- Türkiye'de yaklaşık **100 milyar dolarlık** kontrat LIBOR'a endekslidir
- Bankalar, şirketler ve yatırımcılar için büyük bir geçiş süreci gerektirmektedir

### Türkiye'nin Alternatifi: TLREF

Türkiye, uluslararası en iyi uygulamaları takip ederek kendi alternatif referans oranı olan **TLREF (Turkish Lira Overnight Reference Rate)** sistemini geliştirme kararı almıştır.

## Proje Hedefleri

### 1. TLREF Metodolojisinin Geliştirilmesi

**Risk-Free Rate (RFR) Prensipleri**:
- Gerçek işlemlere dayalı (transaction-based)
- Manipülasyona karşı dirençli
- Şeffaf ve güvenilir hesaplama
- Uluslararası standartlara uygun

**Hesaplama Metodolojisi**:
- Piyasa derinliğinin yeterli olduğu segmentlerin seçimi
- Hacim ağırlıklı ortalama hesaplama
- Outlier yönetimi ve kalite kontrol
- Yetersiz veri durumunda yedek metodoloji

### 2. Geçiş Sürecinin Tasarlanması

**Aşamalı Geçiş Planı**:

**Faz 1 (2020 Q4)**: Hazırlık
- Piyasa danışma
- Metodoloji finalizasyonu
- Teknik altyapı kurulumu

**Faz 2 (2021 Q1-Q2)**: Paralel Dönem
- LIBOR ve TLREF'in birlikte yayınlanması
- Piyasa katılımcılarının adaptasyonu
- Test işlemleri

**Faz 3 (2021 Q3-Q4)**: Geçiş
- Yeni kontratların TLREF'e endekslenmesi
- Mevcut kontratların dönüştürülmesi
- LIBOR kullanımının aşamalı azaltılması

**Faz 4 (2022+)**: Post-Geçiş
- Tam TLREF kullanımı
- Sürekli izleme ve iyileştirme

### 3. Türev Ürünlerin Tasarlanması

TLREF'e dayalı yeni finansal enstrümanlar:

**Para Piyasası Ürünleri**:
- TLREF bazlı mevduat
- TLREF bazlı repo
- TLREF endeksli ticari kağıtlar

**Türev Ürünler**:
- TLREF vadeli işlem sözleşmeleri
- TLREF swap'ları
- TLREF opsiyonları
- Cross-currency basis swaps (TLREF vs. diğer RFR'ler)

**Kredi Ürünleri**:
- TLREF + spread krediler
- TLREF endeksli tahviller
- Sendikasyon kredileri

### 4. Fiyatlama Çerçevesinin Belirlenmesi

**Spread Hesaplama**:
```
Eski Model: Kredi Oranı = LIBOR + Kredi Spread
Yeni Model: Kredi Oranı = TLREF + Kredi Spread + Ayarlama Spread
```

**Ayarlama Spread Metodolojisi**:
- Geçmiş medyan fark (Historical Median Approach)
- İleri dönük yaklaşım (Forward Looking Approach)
- Spot fark yaklaşımı (Spot Spread Approach)

### 5. İşlem Kurallarının Belirlenmesi

**Piyasa Standartları**:
- İşlem büyüklükleri
- Uzlaşma prosedürleri
- Marj gereksinimleri
- Teminat yönetimi

**Dokümantasyon**:
- Standart sözleşme şablonları
- ISDA protokolü adaptasyonu
- Yasal düzenlemeler

## Metodoloji ve Uygulama

### TLREF Hesaplama Altyapısı

**Veri Kaynakları**:

1. **Gecelik Repo Piyasası**
   - BIST Repo-Ters Repo Pazarı işlemleri
   - Devlet iç borçlanma senetleri teminatlı
   - Yüksek likidite ve hacim

2. **Bankalar Arası Para Piyasası**
   - Teminatsız işlemler
   - Kısa vadeli fonlama

3. **Merkez Bankası İşlemleri**
   - TCMB fonlama ve ters repo

**Hesaplama Formülü**:

```
TLREF_t = Σ(Hacim_i × Faiz_i) / Σ(Hacim_i)
```

Kalite kontrol:
- Minimum işlem hacmi eşiği
- Aykırı değer kontrolü (3σ kuralı)
- Piyasa stres dönemlerinde özel kurallar

**Yayınlama**:
- Her işgünü 11:00'de yayınlanma
- T+0 uzlaşma için geriye dönük hesaplama
- T+1, T+2 için tahmin modelleri

### Fiyatlama Modelleri

#### 1. Forward Rate Modeli

TLREF vadeli faiz eğrisi:

```
TLREF_Forward(t, T) = [(1 + TLREF_Spot(T))^T / (1 + TLREF_Spot(t))^t]^(1/(T-t)) - 1
```

#### 2. Swap Fiyatlama

TLREF bazlı faiz swap'ı:

**Sabit Ayak**: Sabit faiz ödemesi
**Değişken Ayak**: TLREF + spread

Net Bugünkü Değer (NPV):
```
NPV = PV(Sabit Ayak) - PV(Değişken Ayak)
```

#### 3. Opsiyon Fiyatlama

TLREF opsiyonları için uyarlanmış Black'76 modeli:

```
Call = e^(-rT) × [F×N(d1) - K×N(d2)]

d1 = [ln(F/K) + (σ²/2)T] / (σ√T)
d2 = d1 - σ√T
```

### Geçiş Mekanizmaları

#### Mevcut Kontratların Dönüşümü

**1. Değer Nötr Yaklaşım**:
Amaç: Tarafların ekonomik pozisyonunu değiştirmemek

```
Yeni Oran = TLREF + Eski Spread + Ayarlama Spread
```

**2. Tetikleyici Olaylar (Fallback)**:

Kontrat dilinde:
- LIBOR kalıcı olarak yayınlanmazsa
- Düzenleyici otoritelerce LIBOR kullanımı yasaklanırsa
- Piyasa derinliği yetersiz hale gelirse

Otomatik geçiş: TLREF + önceden belirlenmiş spread

**3. İki Taraflı Anlaşma**:
- Karşılıklı mutabakat
- Ekonomik değer korunması
- Yasal belgelerin güncellenmesi

## Proje Çıktıları

### 1. Teknik Dokümantasyon

**TLREF Kullanıcı Kılavuzu** (300+ sayfa):
- Hesaplama metodolojisi
- Veri kaynakları ve kalite kontrol
- Olağanüstü durum prosedürleri
- SSS ve örnekler

**Geçiş Rehberi**:
- Adım adım geçiş planı
- Risk yönetimi stratejileri
- Muhasebe ve vergi etkileri
- Yasal ve düzenleyici hususlar

### 2. Finansal Modeller

**Excel Araçları**:
- TLREF eğri oluşturma modeli
- Swap fiyatlama hesaplayıcısı
- Opsiyon değerleme aracı
- Portföy değerleme ve duyarlılık analizi

**Python Kütüphanesi**:
```python
import tlref_toolkit as tt

# TLREF eğrisi çekme
curve = tt.get_curve('2021-12-31')

# Swap fiyatlama
swap = tt.Swap(notional=10000000, 
               tenor=5, 
               fixed_rate=0.12)
npv = swap.price(curve)
```

### 3. Piyasa Standartları

**ISDA Protokolü Adaptasyonu**:
- Türkiye özel hükümler
- TLREF fallback hükümleri
- Dispute resolution mekanizması

**Standart Sözleşme Şablonları**:
- Kredi sözleşmeleri
- Tahvil izahnameleri
- Türev master agreement'lar

### 4. Eğitim Materyalleri

**Online Eğitim Platformu**:
- Video dersler
- İnteraktif simülasyonlar
- Sınav ve sertifika programı

**Webinar Serisi**:
- Bankalar için (5 oturum)
- Şirketler için (3 oturum)
- Yatırımcılar için (2 oturum)

## Uygulama Sonuçları

### Başarılı Geçiş Metrikleri

**Katılım**:
- 45 banka TLREF'i aktif kullanıyor
- 200+ şirket TLREF endeksli kredi kullanıyor
- Günlük işlem hacmi: 15 milyar TL+

**Piyasa Derinliği**:
- TLREF futures günlük işlem: 5 milyar TL
- TLREF swap piyasası: 50 milyar TL açık pozisyon
- Likidite yeterli ve istikrarlı

**Fiyatlama Etkinliği**:
- Bid-ask spread: ortalama 2-3 baz puan
- TLREF-OIS spread istikrarlı
- Arbitraj fırsatları minimum

### Karşılaşılan Zorluklar ve Çözümler

**Zorluk 1: Sistem Entegrasyonu**
- Çözüm: Aşamalı geçiş, paralel dönem, yoğun test

**Zorluk 2: Piyasa Eğitimi**
- Çözüm: Kapsamlı eğitim programı, sürekli destek

**Zorluk 3: Yasal Belirsizlikler**
- Çözüm: Düzenleyicilerle yakın işbirliği, yasal altyapı güncellemesi

**Zorluk 4: Mevcut Kontratlar**
- Çözüm: Çoklu geçiş yolu, değer nötr yaklaşım

## Uluslararası Karşılaştırma

### Diğer Ülkelerde RFR Geçişi

| Ülke/Bölge | Eski Referans | Yeni RFR | Yönetim |
|------------|---------------|----------|---------|
| ABD | USD LIBOR | SOFR | Federal Reserve |
| İngiltere | GBP LIBOR | SONIA | Bank of England |
| Euro Bölgesi | EURIBOR | €STR | ECB |
| Japonya | JPY LIBOR | TONA | Bank of Japan |
| **Türkiye** | **TL LIBOR** | **TLREF** | **TCMB / TBB** |

### Türkiye Öne Çıkan Uygulamalar

1. **Hızlı Geçiş**: Birçok ülkeden daha çabuk adaptasyon
2. **Kapsamlı Dokümantasyon**: Detaylı kullanıcı kılavuzu
3. **Piyasa İşbirliği**: Güçlü kamu-özel sektör koordinasyonu
4. **Teknolojik Altyapı**: Modern, API tabanlı veri dağıtımı

## Gelecek Perspektifi

### Kısa Vade (1-2 yıl)

- TLREF türevlerinin derinleşmesi
- Uluslararası yatırımcı katılımının artması
- Cross-currency swap piyasasının büyümesi

### Orta Vade (3-5 yıl)

- TLREF'in bölgesel referans olma potansiyeli
- Blockchain bazlı smart contract entegrasyonu
- Gerçek zamanlı fiyatlama ve uzlaşma

### Uzun Vade (5+ yıl)

- Dijital TL ile entegrasyon
- Merkez Bankası Dijital Para Birimi (CBDC) uyumlu yapı
- Yapay zeka destekli fiyatlama ve risk yönetimi

## Politika Önerileri

### 1. Düzenleyici Çerçeve

- TLREF kullanımının standart hale getirilmesi
- Vergisel teşvikler ve muhasebe standartlarının netleştirilmesi
- Tüketici koruma düzenlemelerinin güncellenmesi

### 2. Piyasa Gelişimi

- TLREF futures ve options piyasasının teşvik edilmesi
- Piyasa yapıcılık mekanizmalarının güçlendirilmesi
- Likidite sağlayıcı programları

### 3. Uluslararası İşbirliği

- IOSCO prensiplerine tam uyum
- Diğer RFR yöneticileriyle bilgi paylaşımı
- Cross-border işlemlerde TLREF kullanımının yaygınlaştırılması

## Sonuç

LIBOR'dan TLREF'e geçiş projesi, Türkiye finansal piyasalarında önemli bir dönüm noktası olmuştur. Proje:

1. **Başarılı Bir Dönüşüm**: Global standartlara uygun, güvenilir bir referans oran sisteminin hayata geçirilmesi
2. **Piyasa İstikrarı**: Geçiş sürecinin sorunsuz tamamlanması, piyasa işleyişinde aksamaların önlenmesi
3. **Kurumsal Kapasite**: Türk finans sektörünün teknik ve operasyonel kapasitesinin artırılması
4. **Uluslararası Entegrasyon**: Türkiye'nin global finansal sisteme daha iyi entegrasyonu

Gelecekte, TLREF'in sürekli geliştirilmesi, piyasa ihtiyaçlarına uyarlanması ve uluslararası en iyi uygulamaların takip edilmesi, Türkiye finansal sisteminin güçlenmesine ve derinleşmesine katkı sağlayacaktır.

---

**Proje Ekibi**:
- CARF: Metodoloji ve modelleme
- Türkiye Bankalar Birliği: Koordinasyon ve standart oluşturma
- Ernst & Young: Teknik danışmanlık
- TCMB: Düzenleyici destek ve gözetim
