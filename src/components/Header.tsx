import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './Navbar'
import { Icon } from '@iconify/react'
import { getThemeColors } from '../theme/colors'

interface HeaderProps {
  isDark: boolean
  onThemeToggle: () => void
}

export default function Header({ isDark, onThemeToggle }: HeaderProps) {
  const { t } = useTranslation()
  const [imageHover, setImageHover] = useState(false)
  const { accentColor, textColor } = getThemeColors(isDark)

  return (
    <header style={{ background: 'transparent', paddingBottom: '24px' }}>
      <Navbar isDark={isDark} onThemeToggle={onThemeToggle} />

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '48px 24px',
          display: 'flex',
          gap: '32px',
          alignItems: 'start'
        }}
      >
        <img
          src="Tanvir Ahmed Fahim.jpg"
          alt={t('header.name')}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '16px',
            objectFit: 'cover',
            boxShadow: isDark ? '0 10px 32px rgba(0,0,0,0.5)' : '0 10px 32px rgba(2,6,23,0.12)',
            flexShrink: 0,
            border: `3px solid ${accentColor}`,
            background: `linear-gradient(135deg, ${accentColor}, rgba(255,255,255,0.2))`,
            transition: 'all 0.3s ease',
            cursor: 'default',
            transform: imageHover ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(0deg)'
          }}
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
        />

        <div style={{ flex: 1, marginTop: '8px' }}>
          <h1 style={{
            margin: 0,
            fontSize: '32px',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: textColor,
            marginBottom: '8px'
          }}>
            {t('header.name')}
          </h1>

          <p style={{
            margin: '0 0 12px 0',
            color: accentColor,
            fontWeight: 700,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            {t('header.title')}
          </p>

          {/* <p
            style={{
              margin: '12px 0 16px 0',
              color: mutedColor,
              maxWidth: '100%',
              fontSize: '14px',
              lineHeight: '1.7',
              fontWeight: 500
            }}
          >
            {t('header.bio')}
          </p> */}

          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '16px',
            flexWrap: 'wrap'
          }}>
            <a
              href="mailto:tfahim00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="hugeicons:mail-send-01" width="22" height="22" />
            </a>
            <a
              href="https://github.com/tfahim00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="hugeicons:github" width="22" height="22" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanvir-ahmed-fahim-2648ba208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="hugeicons:linkedin-02" width="22" height="22" />
            </a>
            <a
              href="https://codeforces.com/profile/_Fahim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="simple-icons:codeforces" width="22" height="22" />
            </a>
            <a
              href="https://leetcode.com/u/_Fahim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="simple-icons:leetcode" width="22" height="22" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

