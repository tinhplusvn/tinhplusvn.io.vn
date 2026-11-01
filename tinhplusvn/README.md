# TinhPlus – Website cá nhân Đinh Xuân Tình

Single page: React 18 + TypeScript + Tailwind CSS + framer-motion (Vite).

## Chạy nhanh

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # xuất bản vào thư mục dist/
npm run preview    # xem thử bản build
```

## Tùy chỉnh nội dung

- Tên, tagline, email, mạng xã hội, giới thiệu, kỹ năng, dự án: sửa `src/data/content.ts`.
- Ảnh đại diện: đặt `public/avatar.jpg`, rồi thay khối "TT" trong `src/components/Hero.tsx` bằng
  `<img src="/avatar.jpg" alt="Đinh Xuân Tình" className="h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44" />`.
- Ảnh dự án: thêm trường `image` vào `Project` và thay khối gradient trong `Projects.tsx` bằng `<img>`.
- Màu chủ đạo: đổi các class `blue-*` (tìm và thay, ví dụ `blue` → `indigo`).
- Gửi form trực tiếp: thay `onSubmit` trong `Contact.tsx` bằng `fetch` tới Formspree hoặc EmailJS.

## Triển khai lên tinhplusvn.io.vn

Đẩy repo lên GitHub, kết nối với Vercel / Netlify / Cloudflare Pages
(build command `npm run build`, output `dist`), sau đó trỏ DNS của domain theo hướng dẫn của nhà cung cấp.
