# Deployment Guide

Complete guide for deploying the Transition Trails Digital Experience to Salesforce Experience Cloud.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Phase 1: React Prototype Deployment](#phase-1-react-prototype-deployment)
4. [Phase 2: LWC Conversion & Salesforce Deployment](#phase-2-lwc-conversion--salesforce-deployment)
5. [Configuration](#configuration)
6. [Post-Deployment](#post-deployment)
7. [Troubleshooting](#troubleshooting)

## Overview

This application can be deployed in two ways:

1. **React Prototype** - Deploy as standalone web app for testing/demo
2. **Salesforce Experience Cloud** - Convert to LWC and deploy natively

## Prerequisites

### For React Prototype Deployment
- Node.js 18+
- Web hosting service (Vercel, Netlify, AWS, etc.)
- Custom domain (optional)

### For Salesforce Deployment
- Salesforce org with Experience Cloud license
- Salesforce CLI (sfdx)
- VS Code with Salesforce Extensions
- Node.js 18+ (for development)
- Git

## Phase 1: React Prototype Deployment

### Option A: Vercel (Recommended for React)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Configure Custom Domain** (Optional)
   - Go to Vercel dashboard
   - Add custom domain
   - Update DNS settings

**Vercel Configuration** (`vercel.json`):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

### Option B: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option C: AWS S3 + CloudFront

1. **Build**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://transition-trails-app
   ```

3. **Upload Files**
   ```bash
   aws s3 sync dist/ s3://transition-trails-app --delete
   ```

4. **Configure CloudFront**
   - Create distribution pointing to S3 bucket
   - Set up SSL certificate
   - Configure custom domain

5. **Set Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::transition-trails-app/*"
       }
     ]
   }
   ```

## Phase 2: LWC Conversion & Salesforce Deployment

### Step 1: Set Up Salesforce DX Project

1. **Create SFDX Project**
   ```bash
   sfdx force:project:create -n transition-trails-lwc
   cd transition-trails-lwc
   ```

2. **Authenticate to Org**
   ```bash
   sfdx auth:web:login -a prod-org
   ```

3. **Set Default Org**
   ```bash
   sfdx config:set defaultusername=prod-org
   ```

### Step 2: Convert Components to LWC

Follow the [LWC Conversion Guide](./development/lwc-conversion-guide.md) to convert each React component.

**Directory Structure:**
```
force-app/main/default/
├── lwc/
│   ├── siteLayout/
│   ├── mainNav/
│   ├── footer/
│   ├── customButton/
│   ├── customCard/
│   ├── homePage/
│   ├── visitorsTrailPage/
│   └── ... (all components)
├── staticresources/
│   ├── designTokens.css
│   └── designTokens.resource-meta.xml
└── experiences/
    └── TransitionTrailsSite/
```

### Step 3: Deploy to Salesforce

1. **Deploy All Metadata**
   ```bash
   sfdx force:source:deploy -p force-app/main/default -u prod-org
   ```

2. **Deploy Specific Components**
   ```bash
   # Deploy LWC components
   sfdx force:source:deploy -p force-app/main/default/lwc -u prod-org

   # Deploy static resources
   sfdx force:source:deploy -p force-app/main/default/staticresources -u prod-org
   ```

3. **Verify Deployment**
   ```bash
   sfdx force:source:deploy:report
   ```

### Step 4: Create Experience Cloud Site

1. **Navigate to Setup** → Digital Experiences → All Sites

2. **Create New Site**
   - Template: Build Your Own (LWR)
   - Name: Transition Trails Academy
   - URL: transitiontrails

3. **Configure Site Settings**
   - Enable guest user access for Visitor Trail
   - Configure login & registration
   - Set up member profiles

### Step 5: Build Site Pages

1. **Create Pages in Experience Builder**
   ```
   Home
   ├── Visitor Trail
   ├── Guided Trail
   ├── Trail of Mastery
   ├── Explorer's Journey
   ├── About
   ├── Contact Us
   ├── Sign In (Login)
   ├── Dashboard
   ├── Partner Portal
   └── Academy Experience
   ```

2. **Add LWC Components to Pages**
   - Drag components from component palette
   - Configure component properties
   - Arrange layout

3. **Configure Navigation**
   - Setup menu structure
   - Add navigation links
   - Configure breadcrumbs

### Step 6: Configure Salesforce CMS

1. **Create CMS Workspace**
   ```bash
   Setup → CMS Workspaces → New
   ```

2. **Create Content Types**
   - Hero Section
   - Card Grid
   - Text Block
   - Media Block

3. **Create Content**
   - Create content for each CMS region
   - Add media (images, videos)
   - Publish content

4. **Connect to LWC Components**
   ```javascript
   // In LWC component
   import { wire } from 'lwc';
   import { getContent } from 'lightning/cmsDeliveryApi';

   @wire(getContent, {
     contentKey: 'home_hero',
     channelOrSiteId: '$siteId'
   })
   heroContent;
   ```

### Step 7: Configure Authentication

1. **Set Up Login Options**
   - Salesforce login
   - Social login (Google, LinkedIn, etc.)
   - SSO/SAML if required

2. **Configure Registration**
   - Self-registration form
   - Required fields
   - Welcome email template

3. **Set Up User Profiles**
   - Create custom profiles
   - Assign permissions
   - Configure page access

### Step 8: Integrate External Services

#### Jotform Integration
```javascript
// Option 1: iframe embed
<iframe
  src="https://form.jotform.com/YOUR_FORM_ID"
  frameborder="0"
  style="width:100%;height:600px;"
></iframe>

// Option 2: Salesforce Web-to-Lead
// Configure in Setup → Web-to-Lead
```

#### Newsletter (Substack → Marketing Cloud)
```javascript
// Replace Substack with Marketing Cloud
import { LightningElement } from 'lwc';
import subscribeToNewsletter from '@salesforce/apex/NewsletterController.subscribe';

export default class NewsletterSignup extends LightningElement {
  async handleSubscribe(event) {
    const email = event.target.value;
    await subscribeToNewsletter({ email });
  }
}
```

### Step 9: Testing

1. **Unit Testing**
   ```bash
   # Run Jest tests for LWC
   npm run test:unit
   ```

2. **Integration Testing**
   - Test all pages in Experience Builder preview
   - Test authentication flows
   - Test form submissions
   - Test CMS content rendering

3. **User Acceptance Testing**
   - Test with real users
   - Verify all user journeys
   - Check mobile responsiveness
   - Test across browsers

4. **Performance Testing**
   - Run Lighthouse audits
   - Check page load times
   - Optimize images and assets
   - Enable caching

### Step 10: Go Live

1. **Activate Site**
   ```
   Experience Builder → Settings → Activate
   ```

2. **Configure Domain**
   ```
   Setup → Digital Experiences → Settings
   → Add custom domain
   → Update DNS records
   ```

3. **Enable Analytics**
   ```
   Setup → Analytics → Experience Cloud
   → Configure tracking
   → Set up dashboards
   ```

4. **Set Up Monitoring**
   - Enable error logging
   - Set up alerts
   - Configure backup strategy

## Configuration

### Environment Variables

Create `.env` files for different environments:

**.env.development**
```env
VITE_API_URL=https://dev-api.transitiontrails.org
VITE_JOTFORM_KEY=dev_key
VITE_SALESFORCE_INSTANCE=https://dev-transitiontrails.my.salesforce.com
```

**.env.production**
```env
VITE_API_URL=https://api.transitiontrails.org
VITE_JOTFORM_KEY=prod_key
VITE_SALESFORCE_INSTANCE=https://transitiontrails.my.salesforce.com
```

### Salesforce Configuration

**Connected App Settings:**
```
Setup → App Manager → New Connected App
- OAuth Scopes:
  - Full access (full)
  - Perform requests at any time (refresh_token, offline_access)
- Callback URLs: https://transitiontrails.force.com/services/authcallback
```

**CORS Settings:**
```
Setup → CORS → New
Allowed Origins Pattern: https://transitiontrails.force.com
```

## Post-Deployment

### 1. Monitor Performance

- Check Experience Cloud analytics daily
- Review error logs
- Monitor page load times
- Track user engagement

### 2. Content Management

- Regular CMS content updates
- Media optimization
- Content versioning
- A/B testing

### 3. User Management

- Monitor registrations
- Review user feedback
- Update user permissions
- Manage inactive users

### 4. Maintenance

- Apply Salesforce updates
- Update LWC components
- Security patches
- Backup configuration

### 5. Optimization

- Image compression
- Code minification
- Lazy loading
- CDN configuration

## Troubleshooting

### Common Issues

#### Components Not Showing
```bash
# Check deployment status
sfdx force:source:deploy:report

# Redeploy specific component
sfdx force:source:deploy -p force-app/main/default/lwc/componentName
```

#### CMS Content Not Loading
```javascript
// Verify content key matches
console.log('Content Key:', this.contentKey);

// Check channel/site ID
console.log('Site ID:', this.$siteId);
```

#### Authentication Issues
```
# Verify OAuth settings
Setup → Connected Apps → Manage Connected Apps
→ Check OAuth policies

# Test login flow
Experience Builder → Preview → Test login
```

#### Performance Issues
```bash
# Enable browser console
# Check for:
- Large bundle sizes
- Unoptimized images
- Excessive API calls
- Missing caching headers
```

### Getting Help

- **Salesforce Support**: Open case in Help & Training
- **Developer Forums**: https://developer.salesforce.com/forums
- **Trailblazer Community**: https://trailhead.salesforce.com/trailblazer-community
- **Internal Team**: Contact dev team at dev@transitiontrails.org

## Rollback Procedure

If deployment fails:

1. **Revert in Salesforce**
   ```bash
   sfdx force:source:deploy -p force-app/main/default -c  # Validate only
   sfdx force:mdapi:deploy:cancel  # Cancel deployment
   ```

2. **Restore Previous Version**
   ```bash
   git checkout <previous-commit>
   sfdx force:source:deploy -p force-app/main/default
   ```

3. **Deactivate Experience Site**
   ```
   Experience Builder → Settings → Deactivate
   ```

## Checklist

- [ ] All components converted to LWC
- [ ] Design tokens deployed as static resource
- [ ] CMS content created and published
- [ ] Navigation configured
- [ ] Authentication tested
- [ ] Forms connected to Salesforce
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] Analytics configured
- [ ] Error handling implemented
- [ ] User documentation created
- [ ] Training materials prepared
- [ ] Go-live communication sent
- [ ] Monitoring configured
- [ ] Backup procedures documented

---

**Questions? Contact the deployment team at deploy@transitiontrails.org**
