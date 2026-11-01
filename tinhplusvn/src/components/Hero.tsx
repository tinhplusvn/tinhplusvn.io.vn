import { motion } from 'framer-motion'
import { site } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden scroll-mt-16">
      {/* Nền trang trí */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 p-1 shadow-xl shadow-blue-500/20"
        >
          {/* Thay bằng <img src="/avatar.jpg" ... /> khi có ảnh thật */}
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-slate-900 text-5xl font-extrabold text-white sm:h-44 sm:w-44 sm:text-6xl">
            TT
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Xin chào, tôi là</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400">{site.tagline}</p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:translate-y-0"
            >
              Xem dự án
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-300 px-7 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              Liên hệ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
