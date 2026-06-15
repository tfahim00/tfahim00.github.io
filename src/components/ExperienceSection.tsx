import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getThemeColors, getIsDark } from '../theme/colors'
import { Icon } from '@iconify/react'

export default function ExperienceSection() {
  const { t } = useTranslation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const isDark = getIsDark()

  const experiences = [
    {
      title: 'Junior Software Engineer II — Annonlab',
      period: 'Oct 2025 — Present',
      isCurrent: true,
      description: 'Contributing to the development of a cutting-edge AI-powered analytics platform. Collaborating with cross-functional teams to design and implement new features, optimize performance, and ensure scalability.'
    },
    {
      title: 'Assistant Software Engineer — RedDot Digital Limited',
      period: 'Nov 2024 — Aug 2025',
      isCurrent: false,
      description: 'Worked on a web-based business process automation platform using Laravel, Vue.js, and MySQL. Improved functionality and implemented process logic to optimize workflows.'
    }
  ]

  const { accentColor, cardBg, borderColor, shadowLg, textColor, mutedColor } = getThemeColors(isDark)

  const getCardStyle = (index: number) => ({
    background: cardBg,
    padding: '24px',
    borderRadius: '12px',
    border: `1px solid ${hoveredIndex === index ? accentColor : borderColor}`,
    boxShadow: hoveredIndex === index ? `0 8px 24px ${shadowLg}` : '0 2px 8px rgba(2,6,23,0.06)',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden',
    transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)'
  })

  const titleStyle = {
    margin: '0 0 32px 0',
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    backgroundImage: `linear-gradient(135deg, ${accentColor} 0%, ${textColor} 100%)`,
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const
  }

  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={titleStyle}>{t('experience.title')}</h2>

      <div style={{ display: 'grid', gap: '20px' }}>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={getCardStyle(idx)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Gradient background accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: `linear-gradient(90deg, ${accentColor}, transparent)`,
              opacity: exp.isCurrent ? 1 : 0.5
            }} />

            <div style={{ paddingTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                <h3 style={{
                  fontWeight: 700,
                  fontSize: '16px',
                  margin: 0,
                  color: textColor,
                  flex: 1
                }}>
                  {exp.title}
                </h3>
                {exp.isCurrent && (
                  <span style={{
                    background: accentColor,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}>
                    Current
                  </span>
                )}
              </div>

              <p style={{
                fontSize: '13px',
                color: accentColor,
                fontWeight: 600,
                margin: '8px 0',
                letterSpacing: '0.3px'
              }}>
                <Icon icon="hugeicons:calendar-01" width="16" height="16" style={{ marginRight: '8px' }} />
                  {exp.period}
              </p>

              <p style={{
                color: mutedColor,
                margin: '12px 0 0 0',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
