import { useState } from 'react'
import {t} from 'i18next'
import { getThemeColors, getIsDark } from '../theme/colors'
import { Icon } from '@iconify/react'

export default function AchievementsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const isDark = getIsDark()

  const achievements = [
    {
      icon: <Icon icon="hugeicons:champion" style={{ color: '#FFD700' }} />,
      title: 'Champion, Intra University Programming Contest 2022',
      detail: 'Noakhali Science & Technology University (NSTU)'
    },
    {
      icon: <Icon icon="hugeicons:rocket-01" style={{ color: '#00C853' }} />,
      title: '150+ Contest Participations',
      detail: 'LeetCode, Codeforces, CodeChef, beecrowd'
    }
  ]

  const { accentColor, cardBg, borderColor, shadowLg, textColor } = getThemeColors(isDark)

  const getCardStyle = (index: number) => ({
    background: cardBg,
    padding: '20px',
    borderRadius: '12px',
    border: `1px solid ${hoveredIndex === index ? accentColor : borderColor}`,
    boxShadow: hoveredIndex === index ? `0 8px 24px ${shadowLg}` : '0 2px 8px rgba(2,6,23,0.06)',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'start',
    gap: '16px',
    transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)'
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
      <h2 style={titleStyle}>{t('achievements.title')}</h2>

      <div style={{ display: 'grid', gap: '16px' }}>
        {achievements.map((achievement, idx) => (
          <div
            key={idx}
            style={getCardStyle(idx)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Left accent bar */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              background: `linear-gradient(180deg, ${accentColor}, transparent)`
            }} />

            <div style={{
              fontSize: '32px',
              flexShrink: 0,
              marginTop: '2px'
            }}>
              {achievement.icon}
            </div>

            <div style={{ flex: 1, paddingLeft: '4px' }}>
              <h3 style={{
                margin: '0 0 6px 0',
                fontSize: '15px',
                fontWeight: 700,
                color: textColor,
                lineHeight: '1.4'
              }}>
                {achievement.title}
              </h3>
              <p style={{
                margin: 0,
                fontSize: '13px',
                color: accentColor,
                fontWeight: 600,
                letterSpacing: '0.2px'
              }}>
                {achievement.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}