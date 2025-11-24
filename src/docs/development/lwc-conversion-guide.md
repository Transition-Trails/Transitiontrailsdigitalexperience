# Lightning Web Component Conversion Guide

This guide provides step-by-step instructions for converting the React components in this prototype to Lightning Web Components (LWC) for deployment in Salesforce Experience Cloud.

## Table of Contents

1. [Overview](#overview)
2. [Component Mapping](#component-mapping)
3. [Conversion Process](#conversion-process)
4. [Design Token Migration](#design-token-migration)
5. [CMS Integration](#cms-integration)
6. [Authentication](#authentication)
7. [Testing Strategy](#testing-strategy)

## Overview

The React components in this prototype have been specifically structured to facilitate easy conversion to LWC. Key design decisions include:

- **Single-responsibility components**: Each component does one thing well
- **SLDS-inspired patterns**: CSS classes and structure mirror Salesforce Lightning Design System
- **Clear props/state separation**: Easy to map to LWC @api properties and @track variables
- **Minimal external dependencies**: Reduces conversion complexity

## Component Mapping

### Layout Components

#### SiteLayout → LWC Template
```javascript
// React: src/components/layout/SiteLayout.tsx
// LWC: force-app/main/default/lwc/siteLayout/

// siteLayout.html
<template>
  <div class="min-h-screen flex flex-col">
    <c-main-nav></c-main-nav>
    <main class="flex-1" role="main">
      <slot></slot>
    </main>
    <c-footer></c-footer>
  </div>
</template>

// siteLayout.js
import { LightningElement } from 'lwc';
export default class SiteLayout extends LightningElement {}
```

### UI Components

#### Button → lightning-button
```javascript
// React: src/components/ui/Button.tsx
// LWC: Use native <lightning-button> or create custom c-button

// customButton.html
<template>
  <button
    class={computedClass}
    disabled={disabled}
    onclick={handleClick}
  >
    <slot></slot>
  </button>
</template>

// customButton.js
import { LightningElement, api } from 'lwc';

export default class CustomButton extends LightningElement {
  @api variant = 'primary';
  @api size = 'md';
  @api disabled = false;
  @api fullWidth = false;

  get computedClass() {
    const base = 'inline-flex items-center justify-center rounded-md...';
    const variants = {
      primary: 'slds-button slds-button_brand',
      secondary: 'slds-button slds-button_neutral',
      // ... etc
    };
    return `${base} ${variants[this.variant]}`;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('buttonclick'));
  }
}
```

#### Card → lightning-card
```javascript
// React: src/components/ui/Card.tsx
// LWC: Use native <lightning-card> or custom c-card

<template>
  <lightning-card title={title}>
    <div class="slds-p-around_medium">
      <slot></slot>
    </div>
  </lightning-card>
</template>
```

### Page Components

Each page component (`HomePage`, `VisitorsTrailPage`, etc.) should be converted to an LWC that can be added to an Experience Cloud page.

```javascript
// React: src/pages/Home/HomePage.tsx
// LWC: force-app/main/default/lwc/homePage/

// homePage.html
<template>
  <c-site-layout>
    <section class="slds-section">
      <c-container>
        <c-cms-region region-name="home_hero"></c-cms-region>
        <!-- Rest of content -->
      </c-container>
    </section>
  </c-site-layout>
</template>

// homePage.js
import { LightningElement } from 'lwc';
export default class HomePage extends LightningElement {}
```

## Conversion Process

### Step 1: Set Up Salesforce DX Project

```bash
# Create new SFDX project
sfdx force:project:create -n transition-trails-lwc

# Authenticate to your Salesforce org
sfdx auth:web:login -a my-exp-cloud-org
```

### Step 2: Convert Utility Functions

```javascript
// React: src/utils/index.ts
// LWC: force-app/main/default/lwc/utils/utils.js

// utils.js
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function generateId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
```

### Step 3: Convert Design Tokens to Static Resource

```css
/* Create: force-app/main/default/staticresources/designTokens.css */
:root {
  /* Copy all CSS custom properties from src/styles/tokens.css */
  --color-primary: #0176D3;
  --color-primary-hover: #014486;
  /* ... etc */
}
```

Upload as static resource:
```xml
<!-- force-app/main/default/staticresources/designTokens.resource-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<StaticResource xmlns="http://soap.sforce.com/2006/04/metadata">
    <cacheControl>Public</cacheControl>
    <contentType>text/css</contentType>
</StaticResource>
```

### Step 4: Convert Components

For each React component:

1. Create LWC directory structure
2. Create `.html` template file
3. Create `.js` class file
4. Create `.js-meta.xml` configuration
5. Add `.css` if component has styles

Example:
```bash
# Create component structure
sfdx force:lightning:component:create \
  -n mainNav \
  -d force-app/main/default/lwc \
  --type lwc
```

### Step 5: Configure Experience Cloud

1. Create new Experience Cloud site
2. Add LWC components to site pages
3. Configure navigation
4. Set up theming with design tokens
5. Configure CMS workspaces

## Design Token Migration

### Option 1: CSS Custom Properties

Import design tokens in Experience Cloud theme:

```html
<!-- In Experience Builder > Theme > Custom CSS -->
<link href="{!$Resource.designTokens}" rel="stylesheet" />
```

### Option 2: SLDS Styling Hooks

Map custom tokens to SLDS styling hooks:

```css
/* In Experience Builder > Theme > Styling -->
:root {
  --slds-c-button-brand-color-background: var(--color-primary);
  --slds-c-button-brand-color-background-hover: var(--color-primary-hover);
  /* ... etc */
}
```

## CMS Integration

### Converting CMSRegion Components

```javascript
// React: <CMSRegion regionName="home_hero" />

// LWC: Wire adapter approach
import { LightningElement, wire } from 'lwc';
import { getContent } from 'lightning/cmsDeliveryApi';

export default class HomePage extends LightningElement {
  @wire(getContent, {
    contentKey: 'home_hero',
    channelOrSiteId: 'SITE_ID'
  })
  heroContent;

  get heroTitle() {
    return this.heroContent?.data?.title?.value;
  }
}
```

```html
<!-- Template -->
<template>
  <c-cms-hero
    if:true={heroContent.data}
    title={heroTitle}
    subtitle={heroSubtitle}
  ></c-cms-hero>
</template>
```

### Alternative: cms:contentReference

```html
<!-- In Experience Builder page -->
<cms:contentReference
  contentKey="home_hero"
  contentType="cms_image"
/>
```

## Authentication

### Converting Salesforce Login Components

Replace React authentication placeholders with Experience Cloud authentication:

```javascript
// React: <SalesforceLogin type="digital-experience" />

// LWC: Use NavigationMixin
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class LoginButton extends NavigationMixin(LightningElement) {
  handleLogin() {
    // Navigate to login page
    this[NavigationMixin.Navigate]({
      type: 'comm__loginPage',
      attributes: {
        actionName: 'login'
      }
    });
  }
}
```

### Self-Registration

```javascript
handleSignUp() {
  this[NavigationMixin.Navigate]({
    type: 'comm__loginPage',
    attributes: {
      actionName: 'register'
    }
  });
}
```

## Form Integration

### Converting Jotform to Salesforce Forms

```javascript
// React: <JotformEmbed formId="..." />

// LWC Option 1: Use Web-to-Lead/Case
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createLead from '@salesforce/apex/LeadController.createLead';

export default class ContactForm extends LightningElement {
  handleSubmit(event) {
    event.preventDefault();
    const fields = event.detail.fields;
    createLead({ leadData: fields })
      .then(() => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Success',
            message: 'Form submitted successfully',
            variant: 'success'
          })
        );
      })
      .catch(error => {
        // Handle error
      });
  }
}
```

```html
<!-- contactForm.html -->
<template>
  <lightning-record-edit-form
    object-api-name="Lead"
    onsubmit={handleSubmit}
  >
    <lightning-input-field field-name="FirstName"></lightning-input-field>
    <lightning-input-field field-name="LastName"></lightning-input-field>
    <lightning-input-field field-name="Email"></lightning-input-field>
    <lightning-button type="submit" label="Submit"></lightning-button>
  </lightning-record-edit-form>
</template>
```

## Routing

### Converting React Router to Experience Cloud

React Router paths map to Experience Cloud pages:

| React Route | Experience Cloud Page |
|-------------|----------------------|
| `/` | Home |
| `/visitors-trail` | Visitors Trail |
| `/guided-trail` | Guided Trail |
| `/trail-of-mastery` | Trail of Mastery |
| `/explorers-journey` | Explorers Journey |
| `/about` | About |
| `/contact-us` | Contact Us |
| `/sign-in` | Login (built-in) |
| `/dashboard` | Dashboard |

Configure in Experience Builder > Pages

## Testing Strategy

### Unit Testing LWC Components

```javascript
// __tests__/button.test.js
import { createElement } from 'lwc';
import CustomButton from 'c/customButton';

describe('c-custom-button', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with primary variant', () => {
    const element = createElement('c-custom-button', {
      is: CustomButton
    });
    element.variant = 'primary';
    document.body.appendChild(element);

    const button = element.shadowRoot.querySelector('button');
    expect(button.className).toContain('slds-button_brand');
  });

  it('dispatches buttonclick event', () => {
    const element = createElement('c-custom-button', {
      is: CustomButton
    });
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('buttonclick', handler);

    const button = element.shadowRoot.querySelector('button');
    button.click();

    expect(handler).toHaveBeenCalled();
  });
});
```

### Integration Testing

Use Experience Cloud Preview to test:

1. Component rendering
2. Navigation flows
3. CMS content display
4. Authentication flows
5. Form submissions

## Deployment Checklist

- [ ] All React components converted to LWC
- [ ] Design tokens uploaded as static resource
- [ ] CMS content created and mapped
- [ ] Navigation configured
- [ ] Authentication flows tested
- [ ] Forms connected to Salesforce objects
- [ ] Mobile responsiveness verified
- [ ] Performance optimized (lazy loading, etc.)
- [ ] Analytics tracking implemented
- [ ] Error handling and logging configured
- [ ] User acceptance testing completed
- [ ] Production deployment planned

## Resources

- [LWC Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc)
- [Experience Cloud Documentation](https://help.salesforce.com/s/articleView?id=sf.community_designer_overview.htm)
- [CMS Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.exp_cloud_cms_dev_guide.meta/exp_cloud_cms_dev_guide/)
- [SLDS Component Blueprints](https://www.lightningdesignsystem.com/)

## Support

For conversion questions or issues:
- Review this guide
- Check Salesforce Developer Forums
- Contact the development team
