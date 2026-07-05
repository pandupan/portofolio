# 💼 Portfolio — Pandu Pangestu

Website **portfolio pribadi profesional** yang menampilkan proyek-proyek, keahlian, dan pengalaman. Dibangun dengan Next.js, Framer Motion untuk animasi halus, dan desain yang bersih.

## ✨ Fitur

- **Hero Section** — Perkenalan diri dengan animasi yang menarik
- **About Section** — Informasi tentang latar belakang & keahlian
- **Project Section** — Galeri proyek yang telah dikerjakan:
  - D-App — Decentralized Application
  - Emciar — Consulting platform
  - React Job — Job seeker portal
  - Stunting.ID — Health monitoring platform
- **Responsive Design** — Tampilan optimal di desktop & mobile
- **Smooth Animations** — Transisi dan efek visual dengan Framer Motion

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI** | shadcn/ui (Radix) |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |

## 📁 Struktur Proyek

```
app/
├── page.tsx                  # Landing page (semua section)
├── layout.tsx                # Root layout
└── globals.css               # Global styles

components/
├── core/
│   └── Button.tsx            # Tombol reusable
├── layouts/
│   ├── Navbar.tsx            # Navigasi
│   └── Footer.tsx            # Footer
├── pages/
│   ├── HeroSection.tsx       # Hero section
│   ├── AboutSection.tsx      # Tentang saya
│   └── ProjectSection.tsx    # Portfolio proyek
└── ui/
    └── card.tsx              # Card komponen

public/image/                 # Asset gambar
├── hero-profile.png          # Foto profil hero
├── bg-aboutme.png            # Background about
├── dapp.png                  # Project: D-App
├── emciar.png                # Project: Emciar
├── reactjob.png              # Project: React Job
├── stunting.png              # Project: Stunting.ID
├── smanda.png                # Project: SMANDA
├── logo-nav.png              # Logo navigasi
├── logo-footer.png           # Logo footer
└── ornament.png              # Ornamen dekoratif
```

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 🖼️ Project Preview

Portfolio menampilkan proyek-proyek unggulan dengan screenshot dan deskripsi:

| Proyek | Screenshot |
|--------|-----------|
| D-App | `public/image/dapp.png` |
| Emciar | `public/image/emciar.png` |
| React Job | `public/image/reactjob.png` |
| Stunting.ID | `public/image/stunting.png` |
| SMANDA | `public/image/smanda.png` |

## 📄 Lisensi

MIT License

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan)
