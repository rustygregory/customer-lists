# zendesk-globalnav-template

GlobalNav page template components for Zendesk products, featuring a complete navigation system with TopBar, product switcher, subnav components, and a comprehensive icon library.

## Installation

### Install from Git Repository

```bash
npm install git+https://github.com/nicaelar/zendesk-globalnav-template.git

# Or install a specific version/tag
npm install git+https://github.com/nicaelar/zendesk-globalnav-template.git#v0.1.0

# Or install from a specific branch
npm install git+https://github.com/nicaelar/zendesk-globalnav-template.git#main
```

### Peer Dependencies

This package requires the following peer dependencies to be installed in your project:

```bash
npm install react@^18 react-dom@^18 styled-components@^6 \
  @zendeskgarden/react-avatars@^9 \
  @zendeskgarden/react-buttons@^9 \
  @zendeskgarden/react-forms@^9 \
  @zendeskgarden/react-tabs@^9 \
  @zendeskgarden/react-theming@^9 \
  @zendeskgarden/react-tooltips@^9 \
  @zendeskgarden/react-typography@^9 \
  @zendeskgarden/svg-icons@^8
```

## Usage

### Full Page Template

```jsx
import { GlobalNavPageTemplate } from 'zendesk-globalnav-template'

function App() {
  return <GlobalNavPageTemplate />
}
```

### Building on Top of the Template

**IMPORTANT**: When building features or implementing Figma designs on top of this template:

- ✅ **DO**: Modify only the specific `*MainContent.jsx` files in `src/components/mainContent/`
- ❌ **DON'T**: Modify `GlobalNavPageTemplate.jsx`, `TopBar.jsx`, or the left navigation structure

The template chrome (TopBar + left nav) should be preserved unless explicitly needed. See `.claude/skills/build-main-content.claude.md` for detailed instructions on how to build on top of this template correctly.

**For Claude Code users**: The `/build-main-content` skill ensures proper integration with the template structure.

### Individual Components

```jsx
import { TopBar, KnowledgeSubnav, ProductTrayDropdown } from 'zendesk-globalnav-template'

function MyApp() {
  return (
    <div>
      <TopBar />
      <KnowledgeSubnav />
      {/* Your content */}
    </div>
  )
}
```

## Package Exports

This package provides separate export paths for different use cases:

### For Feature Development (Recommended)

Import only MainContent components to build features:

```js
import { SupportMainContent } from 'zendesk-globalnav-template/mainContent'
import { AIAgentsMainContent } from 'zendesk-globalnav-template/mainContent'
```

**Safe to modify:** These components are designed to be customized for your product pages.

### For Chrome Reference (Advanced)

Import navigation chrome components (rarely needed):

```js
import { TopBar, MainNav } from 'zendesk-globalnav-template/chrome'
```

**Not safe to modify:** These components control the global navigation structure.

### Full Template Import

Import everything (for reference or full template usage):

```js
import { GlobalNavPageTemplate, SupportMainContent } from 'zendesk-globalnav-template'
```

### Tree-Shakeable Imports

Import only what you need to reduce bundle size:

```jsx
// Import only icons
import { HomeIcon, InboxIcon, SettingsIcon } from 'zendesk-globalnav-template/icons'

// Use in your component
function Navigation() {
  return (
    <nav>
      <HomeIcon size={24} color="#2F3941" />
      <InboxIcon size={24} color="#2F3941" />
    </nav>
  )
}
```

**Deprecated:** The `/components` export is deprecated. Use `/chrome` or `/mainContent` instead.

## Components

### `GlobalNavPageTemplate`

Full page template with GlobalNav, TopBar, subnav, and content area.

```jsx
<GlobalNavPageTemplate />
```

### `TopBar`

Top navigation bar with product switcher, search, notifications, and user menu.

```jsx
<TopBar />
```

### `KnowledgeSubnav`

Subnav component for Knowledge product with tabs and actions.

```jsx
<KnowledgeSubnav />
```

### `ProductTrayDropdown`

Product switcher dropdown component.

```jsx
import { ProductTrayDropdown, products } from 'zendesk-globalnav-template'

<ProductTrayDropdown
  currentProduct="support"
  onSelectProduct={(productId) => console.log(productId)}
  onClose={() => console.log('closed')}
/>

// Access products data
console.log(products) // Array of product objects
```

## Icons

The package includes 37 icons from the GlobalNav icon library. All icons accept the following props:

- `size` - Icon size (default: 20)
- `color` - Icon color (default: '#5C6970')
- Additional SVG props

### Available Icons

#### Navigation Icons
- `HomeIcon`
- `InboxIcon`
- `BookContactsIcon`
- `BuildingIcon`
- `ShapesIcon`
- `BarChartSquareIcon`
- `LifeRingIcon`
- `SearchIcon`
- `SettingsIcon`

#### Product Icons
- `ProductSupportIcon`
- `ProductKnowledgeIcon`
- `ProductAIAgentsIcon`
- `ProductChatIcon`
- `ProductVoiceIcon`
- `ProductAnalyticsIcon`
- `ProductWorkforceManagementIcon`
- `ProductQualityAssuranceIcon`
- `ProductCommunityIcon`
- `ProductSalesIcon`
- `ProductAdminCenterIcon`

#### Action Icons
- `PlusIcon`
- `FilterIcon`
- `SortIcon`
- `MoreVerticalIcon`
- `ChevronDownIcon`
- `ChevronLeftIcon`
- `ChevronRightIcon`

#### Status Icons
- `CheckCircleIcon`
- `XCircleIcon`
- `AlertCircleIcon`
- `InfoCircleIcon`

#### Communication Icons
- `MessageSquareIcon`
- `BellIcon`
- `MailIcon`

#### Other Icons
- `GridIcon`
- `DotIcon`
- `ZendeskIcon`
- `UserIcon`

### Icon Usage Example

```jsx
import {
  HomeIcon,
  InboxIcon,
  SettingsIcon,
  ProductSupportIcon
} from 'zendesk-globalnav-template/icons'

function MyComponent() {
  return (
    <div>
      <HomeIcon size={24} color="#2F3941" />
      <InboxIcon size={20} color="#5C6970" />
      <SettingsIcon size={16} />
      <ProductSupportIcon size={32} color="#03363D" />
    </div>
  )
}
```

## Development

### Building the Library

```bash
npm run build
```

This generates:
- `dist/index.js` & `dist/index.cjs` - Main entry point
- `dist/components.js` & `dist/components.cjs` - Components only
- `dist/icons.js` & `dist/icons.cjs` - Icons only
- `dist/index.d.ts` - TypeScript definitions
- Source maps for debugging

### Testing Locally

#### Method 1: npm pack (Recommended)

```bash
# In this package directory
npm run build
npm pack

# This creates: zendesk-globalnav-template-0.1.0.tgz

# In your test project
npm install /path/to/zendesk-globalnav-template-0.1.0.tgz
```

#### Method 2: npm link (For Active Development)

```bash
# In this package directory
npm run build
npm link

# In your test project
npm link zendesk-globalnav-template

# After making changes, rebuild
npm run build  # Changes reflect immediately in test app
```

## Releasing New Versions

1. Make your changes
2. Build the library:
   ```bash
   npm run build
   ```

3. Commit the built files:
   ```bash
   git add dist/
   git commit -m "Build v0.2.0"
   ```

4. Bump version and create tag:
   ```bash
   npm version patch  # or minor, major
   ```

5. Push with tags:
   ```bash
   git push --follow-tags
   ```

6. Team members install:
   ```bash
   npm install git+https://github.com/nicaelar/zendesk-globalnav-template.git#v0.2.0
   ```

## Features

- Tree-shakeable exports for optimal bundle size
- Both ESM and CommonJS formats supported
- TypeScript definitions included
- Source maps for debugging
- Peer dependencies (React, styled-components, Garden) not bundled
- Multiple entry points for granular imports

## License

MIT

## Contributing

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Build: `npm run build`
5. Test locally using `npm pack` or `npm link`
6. Submit a pull request

## Support

For issues, questions, or contributions, please open an issue on the GitHub repository.
