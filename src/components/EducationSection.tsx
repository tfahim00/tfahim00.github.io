import { useState } from 'react'
import {t} from 'i18next'
import { getThemeColors, getIsDark } from '../theme/colors'
import { Icon } from '@iconify/react'

export default function EducationSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const isDark = getIsDark()

  const education = [
    {
      institution: 'Noakhali Science & Technology University',
      degree: 'B.Sc. in Information & Communication Engineering',
      status: <Icon icon="mdi:check-decagram" width="16" height="16"/>,
    },
    {
      institution: 'Moulvibazar Government College',
      degree: 'Higher Secondary Certificate (HSC)',
      status: <Icon icon="mdi:check-decagram" width="16" height="16"/>,
    }
  ]

  const { accentColor, cardBg, borderColor, shadowLg, textColor } = getThemeColors(isDark)

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

  const sectionStyle = { marginBottom: '48px' }
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
    <section style={sectionStyle}>
      <h2 style={titleStyle}>{t('education.title')}</h2>

      <div style={{ display: 'grid', gap: '20px' }}>
        {education.map((edu, idx) => (
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
              background: `linear-gradient(90deg, ${accentColor}, transparent)`
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
                  {edu.institution}
                </h3>
                <Icon
                  icon="fa6-solid:user-graduate"
                  width="26"
                  height="26"
                  style={{
                    color: textColor,
                    flexShrink: 0,
                    opacity: 0.9
                  }}
                />
              </div>

              <p style={{
                fontSize: '14px',
                color: accentColor,
                fontWeight: 600,
                margin: '12px 0 0 0',
                letterSpacing: '0.2px'
              }}>
                {edu.degree}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}