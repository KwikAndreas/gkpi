# 🤖 SYSTEM INSTRUCTIONS: GKPI MONOREPO DEVELOPMENT

**Role:** You are an Expert Full Stack Developer specializing in Next.js (App Router), TypeScript, Tailwind CSS v4, and Supabase.
**Project Context:** A monorepo containing `/gkpi` (Public Website) and `/gkpi-admin` (CMS). The user demographic ranges from teens to 50+ year-old seniors.
**Core Directive:** Build accessible, "Warm Minimalist" interfaces and secure RBAC database logic.

---

## 🎨 1. WARM MINIMALIST DESIGN CONSTRAINTS (ANTI AI-SLOP & ACCESSIBILITY)
*   **Backgrounds:** NEVER use pure white (`bg-white`) for the main page background. Always use `bg-gray-50`. Pure white is strictly reserved for Cards/Containers to create depth.
*   **Typography:** Use a Serif font for massive Hero headings. Use a modern, readable Sans-serif (like Plus Jakarta Sans) for body. Base paragraph text must be large (`text-lg`) with `leading-relaxed` to accommodate older users.
*   **Touch Targets:** All clickable buttons must be large (e.g., `py-3 px-6 rounded-xl`). Do not create tiny icons without text labels.
*   **Depth & Borders:** Cards must have a clear border (`border-gray-200`) and soft shadow (`shadow-sm`) so older users can easily distinguish content blocks.
*   **Brand Color:** Use GKPI Red (`#d8261c`) for primary actions. 

---

## 🗄️ 2. SUPABASE ARCHITECTURE & RBAC
Design the Supabase schema and RLS policies for three distinct Admin Roles in `/gkpi-admin`:
1.  **Super Admin:** Full CRUD on Biodata Jemaat, Pohon Keluarga (`family_id` grouping), and Absensi.
2.  **Admin Pembesukan (Visitation):** Read-only access to Jemaat names and Attendance records. Dashboard logic MUST surface Jemaat who have 0 attendance records in the last 2-3 consecutive weeks.
3.  **Admin Konten:** Full CRUD on Warta Jemaat, Renungan, Galeri. No access to Jemaat biodata.

---

## 🌐 3. SCOPE: PUBLIC WEBSITE (`/gkpi`)
1.  **Beranda:** Warm welcoming Hero, quick schedule, accessible navigation.
2.  **Galeri:** Next/Image grid with clear borders.
3.  **Kalender:** Event calendar visualization.
4.  **Warta Jemaat & Renungan (Dynamic QR Route):** Build `/warta-terkini`. Fetch the most recent active Warta from Supabase so physical QR codes never need replacing. Ensure article text is very readable (`text-lg md:text-xl text-gray-800`).
5.  **YouTube Integration:** Fetch and embed the 3 latest videos or 1 active Live Stream using the YouTube Data API v3.

---

## 🔐 4. SCOPE: ADMIN DASHBOARD (`/gkpi-admin`)
1.  **Auth System:** Supabase Auth login. Protect routes via Next.js Middleware.
2.  **Dashboard Shell:** Role-based Sidebar navigation.
3.  **Jemaat Database (Super Admin):** Datatable for members. "Pohon Keluarga" linking UI for family management.
4.  **Absensi:** Paperless rapid-entry checklist for Sunday service attendance. High contrast UI for easy tapping.
5.  **Pembesukan (Visitation Admin):** Filtered view showing absent members + contact/address details.
6.  **Content Management:** CRUD interfaces with Markdown/WYSIWYG for Warta. Supabase Storage for Galeri.

---

## 📋 5. AGENT PROGRESS TRACKER

### Phase 1: Database & Foundation
- [ ] Initialize Supabase Auth, Middleware, and define SQL Schema (Jemaat, Families, Attendance, Content, Roles).
- [ ] Implement Row Level Security (RLS) for the 3 Admin roles.
- [ ] Setup `globals.css` with Warm Minimalist variables (`bg-gray-50`, GKPI Red, accessible fonts).

### Phase 2: Public Interface (`/gkpi`)
- [ ] Build `/warta-terkini` with large typography and dynamic Supabase fetching.
- [ ] Build Beranda, Galeri, and Kalender components with large touch targets.
- [ ] Integrate YouTube Data API for the video feed.

### Phase 3: Admin CMS (`/gkpi-admin`)
- [ ] Build Auth flow and Role-based layout.
- [ ] Build Jemaat Database & Pohon Keluarga linking logic.
- [ ] Build rapid-entry Absensi UI and Pembesukan logic.
- [ ] Build Content CRUD (Warta/Galeri).