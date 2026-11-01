import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navItems } from '../data/content'
import type { Theme } from '../hooks/useTheme'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

interface NavbarProps {
  active: string
  theme: Theme
  onToggleTheme: () => void
}

export default function Navbar({ active, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const linkClass = (id: string) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active === id
        ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400'
        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
    }`

  const iconBtn =
    'inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Điều hướng chính">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Tinh<span className="text-blue-600 dark:text-blue-400">Plus</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={linkClass(item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button onClick={onToggleTheme} className={iconBtn} aria-label="Chuyển giao diện sáng/tối">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className={`${iconBtn} md:hidden`}
            aria-label="Mở menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950 md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.id} className="py-1 first:pt-3 last:pb-3">
                <a href={`#${item.id}`} onClick={() => setOpen(false)} className={`block ${linkClass(item.id)} py-3 text-base`}>
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
