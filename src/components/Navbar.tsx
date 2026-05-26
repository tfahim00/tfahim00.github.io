import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/config'
import { Icon } from '@iconify/react'
import { getThemeColors, getNavbarBgColor } from '../theme/colors'

interface NavbarProps {
  isDark: boolean
  onThemeToggle: () => void
}

export default function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const { t } = useTranslation()
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [hoveredLang, setHoveredLang] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'achievements', label: t('nav.achievements') },
    { id: 'education', label: t('nav.education') }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  const { textColor, borderColor: borderColorBase } = getThemeColors(isDark)
  const bgColor = getNavbarBgColor(isDark)
  const borderColor = isDark ? `1px solid ${borderColorBase}` : `1px solid ${borderColorBase}`
  const shadowColor = isDark ? '0 8px 30px rgba(0,0,0,0.35)' : '0 8px 30px rgba(0,0,0,0.12)'
  const hoverBg = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
  const activeLangBg = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'

  const getLangButtonStyle = (lang: string) => ({
    padding: '6px 8px',
    fontSize: '12px',
    fontWeight: i18n.language === lang ? 600 : 400,
    border: 'none',
    background: i18n.language === lang
      ? activeLangBg
      : hoveredLang === lang ? hoverBg : 'transparent',
    color: textColor,
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  })

  const getNavButtonStyle = (id: string) => ({
    color: textColor,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '10px 14px',
    borderRadius: '8px',
    background: hoveredNav === id ? hoverBg : 'transparent',
    border: 'none',
    transition: 'all 0.2s ease'
  })

  return (
    <nav
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: isMobile ? 'calc(100% - 16px)' : '900px',
        maxWidth: '92%',
        background: bgColor,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: borderColor,
        borderRadius: '16px',
        boxShadow: shadowColor,
        padding: isMobile ? '8px 10px' : '8px 14px',
        transition: 'all 0.3s ease'
      }}
    >
      {/* DESKTOP VIEW */}
      {!isMobile && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* LEFT LANGUAGE SELECTOR */}
          <div style={{ display: 'flex', gap: '4px', width: '80px' }}>
            <button
              onClick={() => changeLanguage('en')}
              style={getLangButtonStyle('en') as React.CSSProperties}
              onMouseEnter={() => setHoveredLang('en')}
              onMouseLeave={() => setHoveredLang(null)}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('bn')}
              style={getLangButtonStyle('bn') as React.CSSProperties}
              onMouseEnter={() => setHoveredLang('bn')}
              onMouseLeave={() => setHoveredLang(null)}
            >
              BN
            </button>
          </div>

          {/* CENTER NAV ITEMS */}
          <div
            style={{
              display: 'flex',
              gap: '6px',
              alignItems: 'center'
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={getNavButtonStyle(item.id) as React.CSSProperties}
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT THEME TOGGLE */}
          <button
            onClick={onThemeToggle}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
              color: textColor,
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              opacity: 1
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            aria-label="Toggle theme"
          >
            {isDark? 
              <Icon icon="hugeicons:sun-03" width="20" height="20" /> :
              <Icon icon="hugeicons:moon-02" width="20" height="20" />
            }
          </button>
        </div>
      )}

      {/* MOBILE VIEW */}
      {isMobile && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px'
          }}
        >
          {/* MOBILE HAMBURGER MENU */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
              color: textColor,
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            aria-label="Toggle menu"
          >
            <Icon icon={isMobileMenuOpen ? "hugeicons:cancel-01" : "hugeicons:menu-09"} width="20" height="20" />
          </button>

          {/* MOBILE LANGUAGE SELECTOR */}
          <div style={{ display: 'flex', gap: '2px' }}>
            <button
              onClick={() => changeLanguage('en')}
              style={getLangButtonStyle('en') as React.CSSProperties}
              onMouseEnter={() => setHoveredLang('en')}
              onMouseLeave={() => setHoveredLang(null)}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('bn')}
              style={getLangButtonStyle('bn') as React.CSSProperties}
              onMouseEnter={() => setHoveredLang('bn')}
              onMouseLeave={() => setHoveredLang(null)}
            >
              BN
            </button>
          </div>

          {/* MOBILE THEME TOGGLE */}
          <button
            onClick={onThemeToggle}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
              color: textColor,
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            aria-label="Toggle theme"
          >
            {isDark? 
              <Icon icon="hugeicons:sun-03" width="18" height="18" /> :
              <Icon icon="hugeicons:moon-02" width="18" height="18" />
            }
          </button>
        </div>
      )}

      {/* MOBILE MENU DROPDOWN */}
      {isMobile && isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            marginTop: '8px',
            background: bgColor,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: borderColor,
            borderRadius: '12px',
            boxShadow: shadowColor,
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            animation: 'slideDown 0.2s ease'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                ...getNavButtonStyle(item.id),
                width: '100%',
                textAlign: 'left',
                padding: '12px 14px',
                fontSize: '14px'
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredNav(item.id)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}