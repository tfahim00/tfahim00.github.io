# i18n Setup Guide

Your portfolio now has full internationalization support with English and Bengali!

## Files Created
- `src/i18n/config.ts` - i18n configuration
- `src/locales/en.json` - English translations
- `src/locales/bn.json` - Bengali translations

## How to Use Translations in Components

### 1. Import the hook
```tsx
import { useTranslation } from 'react-i18next'
```

### 2. Use it in your component
```tsx
export default function MyComponent() {
  const { t } = useTranslation()

  return (
    <div>
      <h2>{t('skills.title')}</h2>
      <p>{t('skills.frontend')}</p>
    </div>
  )
}
```

## Adding More Translations

### 1. Add keys to translation files
**src/locales/en.json:**
```json
{
  "mySection": {
    "heading": "My Heading",
    "description": "My description"
  }
}
```

**src/locales/bn.json:**
```json
{
  "mySection": {
    "heading": "আমার শিরোনাম",
    "description": "আমার বর্ণনা"
  }
}
```

### 2. Use in component
```tsx
const { t } = useTranslation()

<h2>{t('mySection.heading')}</h2>
<p>{t('mySection.description')}</p>
```

## Language Switcher

The Navbar component has EN/BN language buttons. Clicking them:
- Changes the language globally
- Saves preference to localStorage
- Re-renders all components with new language

## Current Translation Keys Available

### Header Section
- `header.name`
- `header.title`
- `header.bio`
- `header.email`
- `header.github`
- `header.linkedin`

### Navigation
- `nav.skills`
- `nav.experience`
- `nav.projects`
- `nav.achievements`
- `nav.education`

### Sections
- `skills.title`, `skills.frontend`, `skills.backend`, `skills.tools`
- `experience.title`, `experience.current`, `experience.company`, etc.
- `projects.title`, `projects.viewMore`, `projects.visitSite`, etc.
- `achievements.title`, `achievements.award`, etc.
- `education.title`, `education.institution`, etc.

### Footer
- `footer.copyright`, `footer.madeWith`, `footer.react`, `footer.typescript`, `footer.tailwind`

## Adding a New Language

1. Create a new translation file: `src/locales/xx.json` (where xx is language code)
2. Add it to the resources in `src/i18n/config.ts`:
```tsx
import xxTranslations from '../locales/xx.json'

const resources = {
  // ... existing languages
  xx: {
    translation: xxTranslations
  }
}
```
3. Add a language button in the Navbar component

That's it! All your components will automatically support the new language.
