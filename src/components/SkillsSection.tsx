import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getThemeColors, getIsDark } from '../theme/colors'

export default function SkillsSection() {
  const { t } = useTranslation()
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const isDark = getIsDark()

  const skillCategories = {
    'Backend': ['C++', 'PHP', 'Laravel', 'Node.js/Express', 'MySQL', 'RESTful APIs'],
    'Frontend': ['JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
    'Tools & DevOps': ['Git', 'Linux (Ubuntu)', 'Docker'],
  }

  const { accentColor, accentLight, cardBg, borderColor, shadowLg, textColor } = getThemeColors(isDark)

  const getSkillCardStyle = (skillName: string) => ({
    background: hoveredSkill === skillName ? accentLight : cardBg,
    padding: '12px 16px',
    borderRadius: '8px',
    border: `1px solid ${hoveredSkill === skillName ? accentColor : borderColor}`,
    fontSize: '13px',
    fontWeight: 500 as const,
    color: textColor,
    transition: 'all 0.3s ease',
    cursor: 'default',
    boxShadow: hoveredSkill === skillName ? `0 4px 12px ${shadowLg}` : '0 1px 2px rgba(2,6,23,0.06)',
    transform: hoveredSkill === skillName ? 'translateY(-2px)' : 'translateY(0)',
    display: 'inline-block'
  })

  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{
        margin: '0 0 28px 0',
        fontSize: '24px',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        backgroundImage: `linear-gradient(135deg, ${accentColor} 0%, ${textColor} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        {t('skills.title')}
      </h2>

      <div style={{ display: 'grid', gap: '32px' }}>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 style={{
              margin: '0 0 16px 0',
              fontSize: '14px',
              fontWeight: 600,
              color: accentColor,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {category}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {skills.map((skill) => (
                <div
                  key={skill}
                  style={getSkillCardStyle(skill)}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  ✨ {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
