import { useState } from 'react'
import { X, Circle, Camera, Briefcase } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4'

const SERVICES = [
  'Website',
  'Mobile App',
  'Web App',
  'E-Commerce',
  'Visual Identity',
  '3D & Motion',
  'Digital Marketing',
  'Growth & Consulting',
  'Other',
]

// Palette: Deep Bluish #0D3A35 · Moderate Green #276152 · Laurel Green #B1B7AB · Light Cream #FBF6F0

interface SocialBtnProps {
  href: string
  bg: string
  color: string
  icon: React.ReactNode
}

function SocialBtn({ href, bg, color, icon }: SocialBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity ${bg} ${color}`}
    >
      {icon}
    </a>
  )
}

export default function App() {
  const [selected, setSelected] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function toggleService(service: string) {
    setSelected(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1000))
    setSending(false)
    setSent(true)
  }

  const inputClass =
    'flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-[#B1B7AB]/50 bg-transparent placeholder-[#B1B7AB] focus:outline-none focus:ring-2 focus:ring-[#276152] focus:border-transparent transition'

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6" style={{ background: '#0D3A35' }}>
      {/* Card */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'hue-rotate(55deg) saturate(1.4) brightness(0.9)' }}
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Color overlay: deep teal tint to make palette dominate */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, rgba(13,58,53,0.72) 0%, rgba(39,97,82,0.55) 50%, rgba(13,58,53,0.80) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full p-4 sm:p-6 md:p-8 gap-6">

          {/* Navbar */}
          <nav
            className="flex items-center gap-3 sm:gap-6 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto"
            style={{ background: 'rgba(251,246,240,0.15)', border: '1px solid rgba(177,183,171,0.25)' }}
          >
            {/* Logo */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="#FBF6F0" />
              <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="#FBF6F0" />
            </svg>

            {/* Links */}
            <div className="hidden sm:flex items-center gap-6">
              {['Our story', 'Expertise', 'Our work', 'Journal'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                  style={{ color: '#FBF6F0' }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* CTA */}
            <button
              className="ml-auto text-sm font-medium px-4 sm:px-5 py-2 rounded-xl transition-colors"
              style={{ background: '#FBF6F0', color: '#0D3A35' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#B1B7AB')}
              onMouseLeave={e => (e.currentTarget.style.background = '#FBF6F0')}
            >
              Start a project
            </button>
          </nav>

          {/* Spacer */}
          <div className="flex-1 min-h-[2rem]" />

          {/* Bottom row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            {/* Headline */}
            <p
              className="text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0"
              style={{ color: '#FBF6F0' }}
            >
              We craft bold ideas
              <br />
              and ship them as{' '}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#B1B7AB',
                }}
              >
                products
              </span>
            </p>

            {/* Contact form card */}
            <div className="w-full lg:w-[min(480px,45%)] shrink-0">
              <div
                className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6 flex flex-col gap-4"
                style={{ background: '#FBF6F0' }}
              >

                {/* Heading */}
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: '#0D3A35' }}>
                  Say hello! 👋
                </h2>

                {/* Email + socials row */}
                <div
                  className="flex flex-row items-center justify-between gap-3 rounded-2xl px-4 py-2.5"
                  style={{ background: 'rgba(177,183,171,0.2)' }}
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs" style={{ color: '#B1B7AB' }}>Drop us a line</span>
                    <a
                      href="mailto:hello@forma.co"
                      className="font-semibold hover:underline truncate text-sm"
                      style={{ color: '#276152' }}
                    >
                      hello@forma.co
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <SocialBtn
                      href="#"
                      bg=""
                      color=""
                      icon={
                        <span style={{ color: '#0D3A35' }}><X size={13} /></span>
                      }
                    />
                    <SocialBtn href="#" bg="" color="" icon={<span style={{ color: '#276152' }}><Circle size={13} /></span>} />
                    <SocialBtn href="#" bg="" color="" icon={<span style={{ color: '#B1B7AB' }}><Camera size={13} /></span>} />
                    <SocialBtn href="#" bg="" color="" icon={<span style={{ color: '#0D3A35' }}><Briefcase size={13} /></span>} />
                  </div>
                </div>

                {/* OR divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px" style={{ background: '#B1B7AB' }} />
                  <span className="font-medium text-sm" style={{ color: '#B1B7AB' }}>OR</span>
                  <div className="flex-1 h-px" style={{ background: '#B1B7AB' }} />
                </div>

                {/* Form or success */}
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-6 gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                      style={{ background: 'rgba(39,97,82,0.12)', color: '#276152' }}
                    >
                      ✓
                    </div>
                    <p className="text-base font-semibold" style={{ color: '#0D3A35' }}>You're all set!</p>
                    <p className="text-sm" style={{ color: '#B1B7AB' }}>Expect a reply within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="text-sm font-medium" style={{ color: '#0D3A35' }}>
                      Tell us about your vision
                    </label>

                    {/* Name + Email */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        placeholder="Full name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={inputClass}
                        style={{ color: '#0D3A35' }}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={inputClass}
                        style={{ color: '#0D3A35' }}
                      />
                    </div>

                    {/* Textarea */}
                    <textarea
                      rows={4}
                      placeholder="What are you looking to build or improve..."
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className={`${inputClass} resize-none`}
                      style={{ color: '#0D3A35' }}
                    />

                    {/* Service tags */}
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-medium" style={{ color: '#0D3A35' }}>I need help with...</span>
                      <div className="flex flex-wrap gap-1.5">
                        {SERVICES.map(service => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className="text-xs font-medium px-3 py-2 rounded-lg border transition-all"
                            style={
                              selected.includes(service)
                                ? { background: '#276152', color: '#FBF6F0', borderColor: '#276152' }
                                : { background: 'transparent', color: '#276152', borderColor: '#B1B7AB' }
                            }
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full text-sm font-semibold py-3 rounded-2xl transition-colors disabled:opacity-60"
                      style={{ background: '#0D3A35', color: '#FBF6F0' }}
                      onMouseEnter={e => !sending && (e.currentTarget.style.background = '#276152')}
                      onMouseLeave={e => !sending && (e.currentTarget.style.background = '#0D3A35')}
                    >
                      {sending ? 'Sending...' : 'Send my message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
