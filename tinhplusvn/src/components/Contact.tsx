import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/content'
import Section from './Section'
import { GlobeIcon, MailIcon, PinIcon } from './Icons'

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-900 dark:text-white'

const infos = [
  { icon: MailIcon, label: 'Email', value: site.email },
  { icon: PinIcon, label: 'Địa điểm', value: site.location },
  { icon: GlobeIcon, label: 'Website', value: site.domain },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // Chưa có backend: mở ứng dụng email của người dùng với nội dung đã điền.
  // Muốn gửi trực tiếp, thay bằng fetch() tới Formspree/EmailJS (xem README).
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Liên hệ từ ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Section id="contact" eyebrow="Liên hệ" title="Cùng trò chuyện nhé">
      <div className="grid gap-10 md:grid-cols-5 md:gap-14">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 md:col-span-3"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-200">Họ tên</label>
            <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Nguyễn Văn A" className={inputClass} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-200">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="ban@example.com" className={inputClass} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-200">Nội dung</label>
            <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Bạn muốn trao đổi điều gì?" className={`${inputClass} resize-none`} />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
          >
            Gửi tin nhắn
          </button>
          {sent && <p className="text-sm text-emerald-600 dark:text-emerald-400">Đã mở ứng dụng email của bạn — bấm gửi để hoàn tất nhé!</p>}
        </motion.form>

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 md:col-span-2"
        >
          {infos.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Icon />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
                <p className="break-words font-medium text-slate-900 dark:text-slate-100">{value}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}
