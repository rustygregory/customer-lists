---
skill_name: build-main-content
description: Build features in GlobalNav template main content areas only
trigger_phrases:
  - "build on the main content area"
  - "add to the {product} main content"
  - "build {product}'s main content area"
  - "modify the main content for {product}"
  - "build on {product} content area"
  - "add features to {product} main content"
  - "build in the {product} page"
  - "create UI in {product} main content"
---

# Build on GlobalNav Main Content Areas

This skill helps you build features on top of the GlobalNav template by modifying **only the main content components** while preserving the TopBar and left navigation.

## CRITICAL: Import Rules (MUST FOLLOW)

When implementing Figma designs or building features:

✅ **ALWAYS import from the mainContent bundle:**
```jsx
import { SupportMainContent } from 'zendesk-globalnav-template/mainContent'
import { KnowledgeMainContent } from 'zendesk-globalnav-template/mainContent'
```

❌ **NEVER import chrome components (unless user explicitly confirms chrome updates):**
```jsx
// DON'T DO THIS when building features
import { TopBar, GlobalNavPageTemplate } from 'zendesk-globalnav-template/chrome'
import { MainNav } from 'zendesk-globalnav-template'
```

**Why This Matters:**
- The `/mainContent` export contains ONLY the 11 product MainContent components
- The `/chrome` export contains navigation structure (TopBar, Nav, Subnav)
- When you import from `/mainContent`, chrome components are NOT available
- This prevents accidental modifications to the navigation chrome

**File System Protection:**
- Chrome components: `src/components/chrome/` → Protected
- MainContent components: `src/components/mainContent/` → Safe to modify

**Default Behavior:**
Unless the user explicitly says to update the TopBar or left navigation:
1. Import from `/mainContent` bundle only
2. Modify only the specific `*MainContent.jsx` component
3. Never touch GlobalNavPageTemplate, TopBar, MainNav, or Subnav files

## What This Skill Does

When a user asks to build something in a product's main content area (e.g., "Build on the Support main content area"), this skill:

1. Identifies which product/page the user is referring to
2. Locates the correct MainContent component
3. Makes changes ONLY to that MainContent component
4. Preserves the TopBar, left nav (subnav), and GlobalNav structure
5. Uses Garden components and typography for consistency

## Available Products & Their Main Content Components

The GlobalNav template has the following products with dedicated main content components:

| Product | Main Content Component | File Path |
|---------|----------------------|-----------|
| Support | `SupportMainContent` | `src/components/mainContent/SupportMainContent.jsx` |
| Knowledge | `KnowledgeMainContent` | `src/components/mainContent/KnowledgeMainContent.jsx` |
| AI Agents | `AIAgentsMainContent` | `src/components/mainContent/AIAgentsMainContent.jsx` |
| Chat | `ChatMainContent` | `src/components/mainContent/ChatMainContent.jsx` |
| Voice | `VoiceMainContent` | `src/components/mainContent/VoiceMainContent.jsx` |
| Analytics | `AnalyticsMainContent` | `src/components/mainContent/AnalyticsMainContent.jsx` |
| Workforce Management | `WorkforceManagementMainContent` | `src/components/mainContent/WorkforceManagementMainContent.jsx` |
| Quality Assurance | `QualityAssuranceMainContent` | `src/components/mainContent/QualityAssuranceMainContent.jsx` |
| Community | `CommunityMainContent` | `src/components/mainContent/CommunityMainContent.jsx` |
| Sales | `SalesMainContent` | `src/components/mainContent/SalesMainContent.jsx` |
| Admin Center | `AdminCenterMainContent` | `src/components/mainContent/AdminCenterMainContent.jsx` |

## Instructions

### Step 1: Identify the Product

When the user says something like:
- "Build on the Support main content area"
- "Add a dashboard to AI Agents"
- "Create a form in the Admin Center page"

Extract the product name and map it to the correct MainContent component.

### Step 1.5: Check-In with User (REQUIRED for Figma designs)

**CRITICAL**: When the user provides a Figma URL or asks to implement a Figma design, ALWAYS ask this question BEFORE implementing:

**"I'll implement this design in the [Product] main content area. Should I also update:**
- **The top bar?** (Yes/No)
- **The left navigation?** (Yes/No)

**If not specified, I'll only modify the main content component and preserve all navigation chrome."**

**Default behavior if user doesn't specify**: Only modify the MainContent component. DO NOT touch TopBar or left navigation.

**If user says "Yes" to updating chrome**: Then and only then you may modify TopBar.jsx or the Nav section in GlobalNavPageTemplate.jsx.

This check-in prevents accidentally overwriting the template navigation chrome when building Figma designs.

### Step 2: Read the Current MainContent Component

Read the relevant MainContent component file to understand its current structure:

```bash
# Example for Support
Read src/components/mainContent/SupportMainContent.jsx
```

### Step 3: Understand the Context

Each MainContent component:
- Is a React functional component
- Receives no props by default (unless you add them)
- Is wrapped in a `ContentArea` styled component with padding
- Should use Garden typography components (`XL`, `LG`, `MD`, `SM` from `@zendeskgarden/react-typography`)
- Has access to all Garden components as peer dependencies

### Step 4: Build ONLY in the MainContent Component

**CRITICAL RULES:**
- ✅ **DO**: Modify only the specific MainContent component
- ✅ **DO**: Use Garden components (@zendeskgarden/react-*)
- ✅ **DO**: Use Garden typography (XL, LG, MD, SM)
- ✅ **DO**: Follow the existing styled-components pattern
- ✅ **DO**: Keep the ContentArea wrapper with its styling
- ✅ **DO**: Ask user FIRST if they want chrome updated (when working with Figma designs)
- ❌ **DON'T**: Modify TopBar.jsx (unless user explicitly confirms)
- ❌ **DON'T**: Modify any Subnav components (unless user explicitly confirms)
- ❌ **DON'T**: Modify GlobalNavPageTemplate.jsx (unless user explicitly confirms)
- ❌ **DON'T**: Change the left navigation structure (unless user explicitly confirms)
- ❌ **DON'T**: Change the top bar or product switcher (unless user explicitly confirms)
- ❌ **DON'T**: Add your own ThemeProvider (one already exists at root)
- ❌ **DON'T**: Replace the entire template when implementing Figma designs

### Step 5: Use Garden Components

The template has these Garden packages as peer dependencies:
- `@zendeskgarden/react-buttons` - Buttons, IconButtons
- `@zendeskgarden/react-forms` - Inputs, Selects, Checkboxes, TextFields
- `@zendeskgarden/react-typography` - XL, LG, MD, SM text components
- `@zendeskgarden/react-tabs` - Tabs, TabPanel
- `@zendeskgarden/react-tooltips` - Tooltips
- `@zendeskgarden/react-avatars` - Avatar components
- `@zendeskgarden/svg-icons` - Garden icon library

### Step 6: Follow the Pattern

Each MainContent component should follow this pattern:

```jsx
import React from 'react';
import styled from 'styled-components';
import { XL, MD } from '@zendeskgarden/react-typography';
// Import other Garden components as needed

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`;

// Add your custom styled components here
const CustomSection = styled.div`
  /* your styles */
`;

export const YourMainContent = () => {
  return (
    <ContentArea>
      {/* Your content here */}
      <XL tag="h1" style={{ marginBottom: '16px' }}>Your Title</XL>
      <MD>Your content</MD>

      {/* Build your UI here */}
    </ContentArea>
  );
};

export default YourMainContent;
```

### Step 7: Test the Changes

After making changes:
1. Verify the dev server is running (`npm run dev`)
2. Navigate to the correct product in the UI
3. Confirm the main content area shows your changes
4. Confirm the TopBar and left nav are unchanged

## Working with Figma Designs

When the user provides a Figma URL to implement a design, follow this workflow:

### 1. Confirm Scope with User

**ALWAYS ask this question BEFORE implementing:**

```
I'll implement this design in the [Product] main content area. Should I also update:
- The top bar? (Yes/No)
- The left navigation? (Yes/No)

If not specified, I'll only modify the main content component and preserve all navigation chrome.
```

### 2. Default Behavior

**Unless user explicitly says "Yes"**: Only modify the MainContent component. Do NOT touch:
- GlobalNavPageTemplate.jsx
- TopBar.jsx
- Nav section in GlobalNavPageTemplate.jsx
- Any Subnav components

### 3. Adapt Figma Code for Main Content

When implementing Figma designs in a MainContent component:

**Remove:**
- Any `<ThemeProvider>` wrappers (already exists at root)
- Full-page layout containers (e.g., PageContainer)
- Navigation elements (unless user approved chrome updates)

**Keep:**
- The existing `ContentArea` wrapper
- The component export structure
- Garden component usage

**Adapt:**
- Fit the Figma content inside the existing `ContentArea`
- Use Garden typography (XL, LG, MD, SM) where appropriate
- Preserve responsive behavior

### 4. Example: Figma Design → MainContent

❌ **WRONG** - Don't do this:
```jsx
// Replacing the entire GlobalNavPageTemplate with Figma output
export const GlobalNavPageTemplate = () => {
  return (
    <ThemeProvider>
      <FullPageLayout>
        {/* Figma-generated nav + content */}
      </FullPageLayout>
    </ThemeProvider>
  );
};
```

✅ **CORRECT** - Do this:
```jsx
// Only updating the MainContent component
import React from 'react';
import styled from 'styled-components';
import { XL, MD } from '@zendeskgarden/react-typography';

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`;

// Your Figma-adapted styled components
const FigmaContent = styled.div`
  /* Figma design styles */
`;

export const SupportMainContent = () => {
  return (
    <ContentArea>
      {/* Figma content adapted here */}
      <FigmaContent>
        <XL tag="h1">Figma Design Title</XL>
        {/* Rest of Figma content */}
      </FigmaContent>
    </ContentArea>
  );
};

export default SupportMainContent;
```

### 5. Common Figma Integration Mistakes

| Mistake | Impact | Solution |
|---------|--------|----------|
| Replacing GlobalNavPageTemplate.jsx | Left nav disappears | Only edit MainContent component |
| Adding nested ThemeProvider | Styling conflicts | Remove it, use root provider |
| Hard-coding full page dimensions | Breaks layout | Use ContentArea wrapper |
| Ignoring existing structure | Navigation broken | Preserve template chrome |
| Not asking about scope | Wrong files modified | Always ask check-in question |

## Examples

### Example 1: User asks to build a dashboard in Support

```
User: "Build a dashboard in the Support main content area with cards showing ticket stats"
```

**Your response:**
1. Identify: Support → `SupportMainContent.jsx`
2. Read: `src/components/mainContent/SupportMainContent.jsx`
3. Modify ONLY that file
4. Add dashboard UI using Garden components
5. Keep TopBar and navigation unchanged

### Example 2: User asks to add a form to Admin Center

```
User: "Add a settings form to the Admin Center page"
```

**Your response:**
1. Identify: Admin Center → `AdminCenterMainContent.jsx`
2. Read: `src/components/mainContent/AdminCenterMainContent.jsx`
3. Modify ONLY that file
4. Add form UI using Garden form components
5. Keep TopBar and navigation unchanged

### Example 3: User asks to build analytics charts

```
User: "Build charts in the Analytics main content area"
```

**Your response:**
1. Identify: Analytics → `AnalyticsMainContent.jsx`
2. Read: `src/components/mainContent/AnalyticsMainContent.jsx`
3. Modify ONLY that file
4. Add chart UI (may need to install a chart library)
5. Keep TopBar and navigation unchanged

## Garden Component Quick Reference

### Typography
```jsx
import { XL, LG, MD, SM, XXS } from '@zendeskgarden/react-typography';

<XL tag="h1">Extra Large (page title)</XL>
<LG tag="h2">Large (section heading)</LG>
<MD>Medium (body text)</MD>
<SM>Small (secondary text)</SM>
<XXS>Extra Extra Small (captions)</XXS>
```

### Buttons
```jsx
import { Button } from '@zendeskgarden/react-buttons';

<Button isPrimary>Primary Action</Button>
<Button>Secondary Action</Button>
<Button isBasic>Basic Button</Button>
<Button isDanger>Delete</Button>
```

### Forms
```jsx
import { Field, Label, Input, Textarea, Checkbox, Select } from '@zendeskgarden/react-forms';

<Field>
  <Label>Label Text</Label>
  <Input placeholder="Enter text" />
</Field>
```

### Tabs
```jsx
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';

<Tabs>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanel>Content 1</TabPanel>
  <TabPanel>Content 2</TabPanel>
</Tabs>
```

## Common Patterns

### Dashboard Card Layout
```jsx
const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  padding: 24px;
`;
```

### Data Table Layout
```jsx
const TableContainer = styled.div`
  background: white;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 24px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
```

### Form Layout
```jsx
const FormContainer = styled.div`
  max-width: 600px;
  background: white;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
`;

const FormSection = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
```

## Checklist Before Completion

- [ ] Identified the correct MainContent component
- [ ] Read the current component file
- [ ] Modified ONLY the MainContent component
- [ ] Used Garden components for UI elements
- [ ] Used Garden typography (XL, LG, MD, SM)
- [ ] Kept the ContentArea wrapper
- [ ] Did NOT modify TopBar
- [ ] Did NOT modify any Subnav components
- [ ] Did NOT modify GlobalNavPageTemplate
- [ ] Tested in the dev server

## Troubleshooting

### Issue: "I can't see my changes"
- Make sure you're viewing the correct product in the UI
- Check if the dev server reloaded
- Verify you modified the correct MainContent component

### Issue: "Garden component not working"
- Verify the Garden package is installed (check package.json)
- Import from the correct Garden package
- Check Garden documentation: https://garden.zendesk.com

### Issue: "Layout is broken"
- Make sure you kept the ContentArea wrapper
- Check for CSS conflicts with styled-components
- Verify flex: 1 and padding: 24px are preserved on ContentArea

## Notes

- Each MainContent component is independent
- Users switch between products using the TopBar product switcher
- The left nav (subnav) is only visible for certain products (Knowledge, AI Agents)
- Main content area has `overflow: auto` for scrolling
- Use the 56px left nav + 240px subnav (if visible) widths in your calculations
- TopBar height is approximately 60px
