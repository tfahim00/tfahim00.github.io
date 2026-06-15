import { getThemeColors, getIsDark } from '../theme/colors'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const isDark = getIsDark()

  const { accentColor, textColor, mutedColor, borderColor } = getThemeColors(isDark)

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
              {t('header.name')}
            </h3>
            <p style={{
              fontSize: '13px',
              color: mutedColor,
              margin: 0,
              lineHeight: '1.6'
            }}>
              {t('footer.bio')}
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
              {t('footer.quickLinks')}
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <li><a href="#skills" style={{ fontSize: '13px', color: mutedColor }}>{t('nav.skills')}</a></li>
              <li><a href="#experience" style={{ fontSize: '13px', color: mutedColor }}>{t('nav.experience')}</a></li>
              <li><a href="#projects" style={{ fontSize: '13px', color: mutedColor }}>{t('nav.projects')}</a></li>
              <li><a href="#achievements" style={{ fontSize: '13px', color: mutedColor }}>{t('nav.achievements')}</a></li>
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
              {t('footer.connect')}
            </h4>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <a
                href="mailto:tfahim00@gmail.com"
              >
                <Icon icon="hugeicons:mail-send-01" width="20" height="20" />
              </a>
              <a 
                href="https://github.com/tfahim00"
                target="_blank"
                rel="noopener"
              >
                <Icon icon="hugeicons:github-01" width="20" height="20" />
              </a>
              <a
                href="https://linkedin.com/in/tanvir-ahmed-fahim-2648ba208"
                target="_blank"
                rel="noopener"
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
            © {new Date().getFullYear()} {t('header.name')}. {t('footer.copyright')}
          </small>
          <small style={{
            color: mutedColor,
            fontSize: '11px'
          }}>
            {t('footer.madeWith')} ❤️ {t('footer.react')}, {t('footer.typescript')}, {t('footer.tailwind')}
          </small>
        </div>
      </div>
    </footer>
  )
}
