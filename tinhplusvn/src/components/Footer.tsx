import { site } from '../data/content'
import { FacebookIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const links = [
  { label: 'GitHub', href: site.socials.github, icon: GithubIcon },
  { label: 'Facebook', href: site.socials.facebook, icon: FacebookIcon },
  { label: 'LinkedIn', href: site.socials.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${site.email}`, icon: MailIcon },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} {site.name} · {site.domain}
        </p>
        <ul className="flex gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
