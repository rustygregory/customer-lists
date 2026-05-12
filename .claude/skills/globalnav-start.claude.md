---
skill_name: globalnav-start
description: Set up a new project with the Zendesk GlobalNav template package
trigger_phrases:
  - "start with global nav template"
  - "use the global nav template"
  - "build from global nav template"
  - "set up global nav template"
  - "create project with global nav"
---

# GlobalNav Template Starter

This skill automates setting up a new React project with the `zendesk-globalnav-template` package.

## What This Skill Does

1. Creates a new Vite React project
2. Installs React 18 (required for Garden compatibility)
3. Installs all peer dependencies (styled-components, Garden components)
4. Installs `zendesk-globalnav-template` from GitHub
5. Copies Claude skills to the project for future use
6. Sets up App.jsx to use GlobalNavPageTemplate
7. Fixes default Vite CSS conflicts
8. Starts the dev server

## Instructions

When the user triggers this skill, follow these steps:

### Step 1: Get Project Name

Ask the user what they want to name their project (default to "my-globalnav-app" if not specified).

### Step 2: Create Vite Project

```bash
npm create vite@latest PROJECT_NAME -- --template react
cd PROJECT_NAME
```

### Step 3: Install Dependencies

Install base dependencies first:
```bash
npm install
```

Downgrade to React 18 (Garden requires React 18, not 19):
```bash
npm install react@^18 react-dom@^18
```

Install peer dependencies:
```bash
npm install styled-components@^6 \
  @zendeskgarden/react-avatars@^9 \
  @zendeskgarden/react-buttons@^9 \
  @zendeskgarden/react-forms@^9 \
  @zendeskgarden/react-tabs@^9 \
  @zendeskgarden/react-theming@^9 \
  @zendeskgarden/react-tooltips@^9 \
  @zendeskgarden/react-typography@^9 \
  @zendeskgarden/svg-icons@^8
```

Install the GlobalNav template package:
```bash
npm install git+https://github.com/nicaelar/zendesk-globalnav-template.git
```

### Step 4: Copy Claude Skills

Copy the included Claude skills to the project so they're available for future use:
```bash
mkdir -p .claude/skills
cp node_modules/zendesk-globalnav-template/.claude/skills/*.claude.md .claude/skills/
```

This makes the following skills available in the new project:
- `/globalnav-start` - Set up a new project with the GlobalNav template
- `/build-main-content` - Scaffold main content components

### Step 5: Set Up App.jsx

Replace `src/App.jsx` with:

```jsx
import { GlobalNavPageTemplate } from 'zendesk-globalnav-template'
import './App.css'

function App() {
  return <GlobalNavPageTemplate />
}

export default App
```

### Step 6: Fix CSS Conflicts

Update `src/App.css` to remove padding conflicts:

```css
#root {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
```

Update `src/index.css` body styles:

```css
body {
  margin: 0;
  padding: 0;
  min-width: 320px;
  min-height: 100vh;
  overflow: hidden;
}
```

Keep the rest of the CSS as-is.

### Step 7: Create Usage Examples

Create `src/AppTreeShaking.jsx` for tree-shaking example:

```jsx
// Alternative example showing tree-shakeable imports
import { TopBar, KnowledgeSubnav } from 'zendesk-globalnav-template/components'
import { HomeIcon, InboxIcon, SettingsIcon } from 'zendesk-globalnav-template/icons'

function AppTreeShaking() {
  return (
    <div>
      <TopBar />
      <KnowledgeSubnav />

      <div style={{ padding: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h2>Icon Examples:</h2>
        <HomeIcon size={32} color="#2F3941" />
        <InboxIcon size={32} color="#2F3941" />
        <SettingsIcon size={32} color="#2F3941" />
      </div>
    </div>
  )
}

export default AppTreeShaking
```

### Step 8: Create README

Create a `GLOBALNAV_USAGE.md` file:

```markdown
# GlobalNav Template Usage

This project uses the `zendesk-globalnav-template` package from GitHub.

## Running the Project

\`\`\`bash
npm run dev
\`\`\`

## What's Included

- **GlobalNavPageTemplate**: Full page template with TopBar, navigation, and content area
- **TopBar**: Top navigation bar component
- **KnowledgeSubnav**: Knowledge product subnav
- **ProductTrayDropdown**: Product switcher component
- **37 Icons**: Complete icon library
- **Garden Typography**: All components use @zendeskgarden/react-typography for consistent text styling

## Usage Examples

### Full Template (Current)

\`\`\`jsx
import { GlobalNavPageTemplate } from 'zendesk-globalnav-template'

function App() {
  return <GlobalNavPageTemplate />
}
\`\`\`

### Tree-Shakeable Imports

To use only specific components and reduce bundle size:

\`\`\`jsx
// Import only what you need
import { TopBar, KnowledgeSubnav } from 'zendesk-globalnav-template/components'
import { HomeIcon, InboxIcon } from 'zendesk-globalnav-template/icons'

function App() {
  return (
    <div>
      <TopBar />
      <KnowledgeSubnav />
      <HomeIcon size={24} />
      <InboxIcon size={24} />
    </div>
  )
}
\`\`\`

### Individual Components

\`\`\`jsx
import { TopBar, ProductTrayDropdown, products } from 'zendesk-globalnav-template'

function App() {
  const [showTray, setShowTray] = useState(false)

  return (
    <div>
      <TopBar />
      {showTray && (
        <ProductTrayDropdown
          currentProduct="support"
          onSelectProduct={(id) => console.log(id)}
          onClose={() => setShowTray(false)}
        />
      )}
    </div>
  )
}
\`\`\`

### With Garden Typography

\`\`\`jsx
import { GlobalNavPageTemplate } from 'zendesk-globalnav-template'
import { XL, MD } from '@zendeskgarden/react-typography'

function CustomContent() {
  return (
    <div style={{ padding: '24px' }}>
      <XL tag="h1" style={{ marginBottom: '16px' }}>Welcome to Support</XL>
      <MD>This page uses Garden typography for consistent styling.</MD>
    </div>
  )
}

function App() {
  return <GlobalNavPageTemplate customContent={<CustomContent />} />
}
\`\`\`

## Available Components

- \`GlobalNavPageTemplate\` - Complete page layout
- \`TopBar\` - Navigation bar
- \`KnowledgeSubnav\` - Knowledge product subnav
- \`ProductTrayDropdown\` - Product switcher
- \`products\` - Product data array

## Using Garden Typography

The package includes @zendeskgarden/react-typography as a peer dependency. Use Garden typography components for consistent text styling:

\`\`\`jsx
import { XL, LG, MD, SM, XXS } from '@zendeskgarden/react-typography'

function MyComponent() {
  return (
    <div>
      <XL tag="h1">Large Title</XL>
      <LG tag="h2">Subtitle</LG>
      <MD>Body text</MD>
      <SM>Small text</SM>
    </div>
  )
}
\`\`\`

All main content components in the package use Garden typography by default.

## Available Icons (37 total)

Import from \`zendesk-globalnav-template/icons\`:

Navigation: HomeIcon, InboxIcon, BookContactsIcon, BuildingIcon, ShapesIcon, BarChartSquareIcon, LifeRingIcon, SearchIcon, SettingsIcon

Products: ProductSupportIcon, ProductKnowledgeIcon, ProductAIAgentsIcon, ProductChatIcon, ProductVoiceIcon, ProductAnalyticsIcon, ProductWorkforceManagementIcon, ProductQualityAssuranceIcon, ProductCommunityIcon, ProductSalesIcon, ProductAdminCenterIcon

Actions: PlusIcon, FilterIcon, SortIcon, MoreVerticalIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon

Status: CheckCircleIcon, XCircleIcon, AlertCircleIcon, InfoCircleIcon

Communication: MessageSquareIcon, BellIcon, MailIcon

Other: GridIcon, DotIcon, ZendeskIcon, UserIcon

All icons accept \`size\` and \`color\` props.

## Package Info

- **Package**: zendesk-globalnav-template@0.1.0
- **Repository**: https://github.com/nicaelar/zendesk-globalnav-template
- **Documentation**: See README in the package repository

## Updating the Package

To get the latest version:

\`\`\`bash
npm install git+https://github.com/nicaelar/zendesk-globalnav-template.git
\`\`\`

Or install a specific version:

\`\`\`bash
npm install git+https://github.com/nicaelar/zendesk-globalnav-template.git#v0.1.0
\`\`\`
```

### Step 9: Start Dev Server

```bash
npm run dev
```

### Step 10: Inform the User

Tell the user:

✅ Project created successfully!
✅ All dependencies installed
✅ GlobalNav template configured
✅ Claude skills copied to project
✅ Dev server running at the URL shown

**What's available:**
- Full GlobalNavPageTemplate (currently in App.jsx)
- 4 components: GlobalNavPageTemplate, TopBar, KnowledgeSubnav, ProductTrayDropdown
- 37 icons available for import
- Tree-shaking example in src/AppTreeShaking.jsx

**Claude skills available:**
- `/globalnav-start` - Set up a new project (this skill)
- `/build-main-content` - Scaffold main content components

**To test tree-shaking:**
Change src/main.jsx to import AppTreeShaking instead of App

**Documentation:**
- GLOBALNAV_USAGE.md - Usage guide
- https://github.com/nicaelar/zendesk-globalnav-template - Full package docs

## Error Handling

If React 19 conflicts occur:
- Always install React 18 explicitly: `npm install react@^18 react-dom@^18`

If peer dependency warnings appear:
- They're expected due to Garden's React version constraints
- The app will work correctly with React 18

If CSS padding issues occur:
- Ensure App.css has `padding: 0` on #root
- Ensure index.css body doesn't have `display: flex; place-items: center`

## Notes

- This package requires React 18 (Garden doesn't support React 19 yet)
- The GlobalNav template is designed for full-width layouts
- All Garden theming is handled by the package's ThemeProvider
- The package is installed directly from GitHub, not npm
