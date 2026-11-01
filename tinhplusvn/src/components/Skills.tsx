import { motion } from 'framer-motion'
import { skillGroups } from '../data/content'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Kỹ năng" title="Công nghệ tôi sử dụng">
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                {group.icon}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
