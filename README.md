# Kopi Senja App

## Setup Environment Variables untuk Deployment

### Vercel (Frontend)

Setelah deploy backend ke Railway, tambahkan environment variable di Vercel:

1. Buka project di Vercel Dashboard
2. Pergi ke **Settings** → **Environment Variables**
3. Tambahkan:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: URL backend Railway kamu (contoh: `backend-kopisenja-production.up.railway.app` atau `https://backend-kopisenja-production.up.railway.app/api`)
     - **Catatan**: Bisa pakai dengan atau tanpa `https://` dan `/api` - sistem akan otomatis normalize
4. Klik **Save**
5. **PENTING**: Setelah save, klik **Deployments** → pilih deployment terbaru → klik **Redeploy** (atau buat deployment baru)
   - Ini wajib karena Vite env variables dibaca saat build time, bukan runtime!

### Railway (Backend)

Tambahkan environment variables di Railway:

1. Buka project di Railway Dashboard
2. Pergi ke tab **Variables**
3. Tambahkan:
   - `SUPABASE_URL` = URL Supabase project kamu
   - `SUPABASE_ANON_KEY` = Anon key dari Supabase
   - `CLIENT_ORIGIN` = `https://kopisenja-app.vercel.app` (atau URL Vercel kamu)
4. Railway akan otomatis restart setelah menambah variable

**Catatan**: Pastikan URL backend Railway tidak ada trailing slash (`/`) di akhir.

## Development

```bash
npm install
npm run dev
```
