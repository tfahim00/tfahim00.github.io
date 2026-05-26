import { useState, useEffect } from 'react'
import Header from './components/Header'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import AchievementsSection from './components/AchievementsSection'
import EducationSection from './components/EducationSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme === 'dark' || (savedTheme === null && prefersDark)
    
    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', transition: 'colors 0.2s', minHeight: '100vh', paddingTop: '60px' }}>
      <Header isDark={isDark} onThemeToggle={toggleTheme} />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="achievements">
          <AchievementsSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
