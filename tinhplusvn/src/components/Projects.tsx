import { motion } from 'framer-motion'
import { projects } from '../data/content'
import Section from './Section'
import { ArrowUpRightIcon, GithubIcon } from './Icons'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Dự án" title="Một số sản phẩm nổi bật" className="bg-slate-50 dark:bg-slate-900/40">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Ảnh placeholder — thay bằng <img> khi có ảnh thật */}
            <div className={`flex aspect-video items-center justify-center bg-gradient-to-br ${p.gradient}`}>
              <span className="text-5xl font-extrabold text-white/90 transition-transform duration-300 group-hover:scale-110">
                {p.title.charAt(0)}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed sm:text-base">{p.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-4 text-sm font-semibold">
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400">
                  Demo <ArrowUpRightIcon className="h-4 w-4" />
                </a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
