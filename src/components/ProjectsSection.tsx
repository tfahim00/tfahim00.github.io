import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getThemeColors, getIsDark } from '../theme/colors'

export default function ProjectsSection() {
  const { t } = useTranslation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoveredLink, setHoveredLink] = useState(false)

  const isDark = getIsDark()

  const projects = [
    {
      title: 'OkExchange (E-Commerce)',
      year: '2023',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      description: 'Implemented a responsive UI with React and Tailwind. Built RESTful APIs with Express and added JWT authentication.',
      link: 'https://github.com/tfahim00/Final_Year_Project'
    }
  ]

  const { accentColor, accentLight, cardBg, borderColor, shadowLg, textColor, mutedColor } = getThemeColors(isDark)

  const getCardStyle = (index: number) => ({
    background: cardBg,
    padding: '28px',
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

  const techTagStyle = {
    display: 'inline-block',
    background: accentLight,
    color: accentColor,
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: 600,
    marginRight: '8px',
    marginBottom: '8px'
  }

  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={titleStyle}>{t('projects.title')}</h2>

      <div style={{ display: 'grid', gap: '24px' }}>
        {projects.map((project, idx) => (
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
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{
                  fontWeight: 700,
                  fontSize: '18px',
                  margin: 0,
                  color: textColor
                }}>
                  {project.title}
                </h3>
                <span style={{
                  fontSize: '12px',
                  color: accentColor,
                  fontWeight: 600,
                  backgroundColor: accentLight,
                  padding: '4px 12px',
                  borderRadius: '6px'
                }}>
                  {project.year}
                </span>
              </div>

              <div style={{ marginBottom: '16px' }}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={techTagStyle}>
                    {tech}
                  </span>
                ))}
              </div>

              <p style={{
                color: mutedColor,
                margin: '12px 0',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '16px',
                  color: hoveredLink ? 'white' : accentColor,
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  background: hoveredLink ? accentColor : accentLight,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={() => setHoveredLink(true)}
                onMouseLeave={() => setHoveredLink(false)}
              >
                🔗 {t('projects.visitSite')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}