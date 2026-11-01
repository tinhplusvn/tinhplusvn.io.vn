import { motion } from 'framer-motion'
import { site } from '../data/content'
import Section from './Section'
import { GlobeIcon, MailIcon, PinIcon } from './Icons'

const infos = [
  { icon: PinIcon, label: 'Địa điểm', value: site.location },
  { icon: MailIcon, label: 'Email', value: site.email },
  { icon: GlobeIcon, label: 'Website', value: site.domain },
]

export default function About() {
  return (
    <Section id="about" eyebrow="Giới thiệu" title="Đôi nét về tôi" className="bg-slate-50 dark:bg-slate-900/40">
      <div className="grid gap-10 md:grid-cols-5 md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-base leading-relaxed sm:text-lg md:col-span-3"
        >
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3 md:col-span-2"
        >
          {infos.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Icon />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
                <p className="truncate font-medium text-slate-900 dark:text-slate-100">{value}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}
