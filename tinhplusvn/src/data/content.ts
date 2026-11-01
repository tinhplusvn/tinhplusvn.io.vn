// ✏️ Toàn bộ nội dung website nằm ở đây — chỉ cần sửa file này.

export const site = {
  name: 'Đinh Xuân Tình',
  brand: 'TinhPlus',
  domain: 'tinhplusvn.io.vn',
  location: 'Cúc Phương, Ninh Bình, Việt Nam',
  tagline: 'Full-stack Developer | Xây dựng sản phẩm có giá trị',
  email: 'hello@tinhplusvn.io.vn', // TODO: đổi sang email thật
  about: [
    'Xin chào! Tôi là Tình, một lập trình viên full-stack đến từ vùng đất Cúc Phương, Ninh Bình. Tôi yêu thích việc biến ý tưởng thành những sản phẩm web gọn gàng, nhanh và dễ dùng.',
    'Tôi tập trung vào code sạch, trải nghiệm người dùng trên mobile và luôn học hỏi công nghệ mới để tạo ra giá trị thật cho người dùng.',
  ],
  socials: {
    github: 'https://github.com/', // TODO
    facebook: 'https://facebook.com/', // TODO
    linkedin: 'https://linkedin.com/', // TODO
  },
}

export const navItems = [
  { id: 'home', label: 'Trang chủ' },
  { id: 'about', label: 'Giới thiệu' },
  { id: 'skills', label: 'Kỹ năng' },
  { id: 'projects', label: 'Dự án' },
  { id: 'contact', label: 'Liên hệ' },
] as const

export const sectionIds = navItems.map((n) => n.id)

export const skillGroups = [
  { title: 'Frontend', icon: '🎨', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'] },
  { title: 'Backend', icon: '⚙️', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API'] },
  { title: 'Công cụ', icon: '🧰', items: ['Git & GitHub', 'Docker', 'Figma', 'Linux', 'Vite'] },
]

export interface Project {
  title: string
  description: string
  stack: string[]
  demo: string
  repo: string
  gradient: string
}

export const projects: Project[] = [
  {
    title: 'TinhPlus Portfolio',
    description: 'Website cá nhân đơn trang, responsive, hỗ trợ dark mode và animation mượt mà.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    demo: '#',
    repo: '#',
    gradient: 'from-blue-600 to-cyan-400',
  },
  {
    title: 'Quản lý công việc',
    description: 'Ứng dụng todo/kanban kéo thả, lưu dữ liệu realtime và đồng bộ nhiều thiết bị.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    demo: '#',
    repo: '#',
    gradient: 'from-indigo-600 to-blue-400',
  },
  {
    title: 'Cửa hàng trực tuyến',
    description: 'Trang bán hàng mini với giỏ hàng, thanh toán và trang quản trị đơn giản.',
    stack: ['React', 'Express', 'MongoDB'],
    demo: '#',
    repo: '#',
    gradient: 'from-slate-700 to-blue-500',
  },
  {
    title: 'Du lịch Cúc Phương',
    description: 'Trang giới thiệu du lịch Vườn quốc gia Cúc Phương với bản đồ và thư viện ảnh.',
    stack: ['Vite', 'TypeScript', 'Framer Motion'],
    demo: '#',
    repo: '#',
    gradient: 'from-emerald-600 to-sky-400',
  },
]
