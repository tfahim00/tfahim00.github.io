import { useState } from 'react'
import {t} from 'i18next'
import { getThemeColors, getIsDark } from '../theme/colors'
import { Icon } from '@iconify/react'

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const isDark = getIsDark()

  const { accentColor, accentLight, textColor, mutedColor, borderColor } = getThemeColors(isDark)

  const getIconButtonStyle = (id: string) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    background: hoveredLink === id ? accentColor : accentLight,
    color: hoveredLink === id ? 'white' : accentColor,
    transition: 'all 0.2s ease',
    fontSize: '18px'
  })

  return (
    <footer style={{
      marginTop: '64px',
      borderTop: `1px solid ${borderColor}`,
      background: 'transparent',
      padding: '48px 0',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 700,
              margin: '0 0 12px 0',
              color: textColor
            }}>
              Tanvir Ahmed Fahim
            </h3>
            <p style={{
              fontSize: '13px',
              color: mutedColor,
              margin: 0,
              lineHeight: '1.6'
            }}>
              Junior Software Engineer crafting elegant digital solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: accentColor,
              margin: '0 0 12px 0',
              letterSpacing: '0.5px'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <li><a href="#skills" style={{ fontSize: '13px', color: mutedColor }}>Skills</a></li>
              <li><a href="#experience" style={{ fontSize: '13px', color: mutedColor }}>Experience</a></li>
              <li><a href="#projects" style={{ fontSize: '13px', color: mutedColor }}>Projects</a></li>
              <li><a href="#achievements" style={{ fontSize: '13px', color: mutedColor }}>Achievements</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: accentColor,
              margin: '0 0 12px 0',
              letterSpacing: '0.5px'
            }}>
              Connect
            </h4>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <a
                href="mailto:tfahim00@gmail.com"
                // style={getIconButtonStyle('email') as React.CSSProperties}
                onMouseEnter={() => setHoveredLink('email')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Icon icon="hugeicons:mail-send-01" width="20" height="20" />
              </a>
              <a 
                href="https://github.com/tfahim00"
                target="_blank"
                rel="noopener"
                // style={getIconButtonStyle('github') as React.CSSProperties}
                onMouseEnter={() => setHoveredLink('github')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Icon icon="hugeicons:github-01" width="20" height="20" />
              </a>
              <a
                href="https://linkedin.com/in/tanvir-ahmed-fahim-2648ba208"
                target="_blank"
                rel="noopener"
                // style={getIconButtonStyle('linkedin') as React.CSSProperties}
                onMouseEnter={() => setHoveredLink('linkedin')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Icon icon="hugeicons:linkedin-01" width="20" height="20" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div style={{
          borderTop: `1px solid ${borderColor}`,
          paddingTop: '24px',
          textAlign: 'center'
        }}>
          <small style={{
            color: mutedColor,
            fontSize: '12px',
            display: 'block',
            marginBottom: '8px'
          }}>
            © {new Date().getFullYear()} Tanvir Ahmed Fahim. All rights reserved.
          </small>
          <small style={{
            color: mutedColor,
            fontSize: '11px'
          }}>
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </small>
        </div>
      </div>
    </footer>
  )
}
