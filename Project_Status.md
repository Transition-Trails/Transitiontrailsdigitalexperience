# Project Status: Transition Trails Digital Experience

Last Updated: 2025-11-24  
Maintained by: Transition Trails Engineering (Figma Make + GitHub + Linear Integrated Workflow)

---

## Overview

The Transition Trails Digital Experience is the frontend foundation for a multi-path Salesforce Experience Cloud implementation.  
This project is designed to:

- Deliver a highly modular React + TypeScript frontend.
- Maintain compatibility for future Salesforce Lightning Web Components (LWC) conversion.
- Integrate with content from Salesforce CMS.
- Support public engagement flows for the Transition Trails programs:  
  Visitor Trail, Guided Trail, Trail of Mastery, and Explorer’s Journey.
- Allow applicants, partners, and internal teams to authenticate into either:
  - The **Transition Trails Digital Experience Site**, or  
  - The **Partner Portal**.

This document tracks all meaningful updates, prototypes, and releases across multiple pull requests.

---

## Current Release Snapshot

**Branch:** `main`  
**Latest Merged Issue:** TTA-137  
**Release Date:** November 24, 2025  

### Current Scope in Main
The system now includes the initial prototype created by Figma Make, establishing:

- A React + Vite + TypeScript codebase.
- TailwindCSS v4 integrated styling system.
- Core page routing (Visitor, Guided, Mastery, Explorer, Dashboard).
- Initial design tokens, layout scaffolding, and component structure.
- Hooks for future integrations:
  - Jotform (Contact Us + Trail Registrations)
  - Substack newsletter signup
  - Salesforce Experience Cloud authentication handlers
  - Salesforce CMS content placeholders

This prototype serves as the architectural foundation for future React → LWC conversion work.

---

# Change Log  
*(Newest entries at top. Each Linear issue updates or creates one section.)*

---

### [TTA-137] Initial Prototype Import + Repository Structure  
**Branch:** `feature/tta-137-figma-make-initial-prototype-for-transition-trails-academy`  
**Date:** 2025-11-24  
**Status:** Merged  
**PR URL:** _Added via GitHub Pull Request #4 (Figma Make integration)_  

#### Summary
This PR delivers the first complete working prototype for the Transition Trails Digital Experience. Generated via Figma Make, it establishes the React project structure, design system, and multi-page routing aligned with upcoming Salesforce Experience Cloud architecture.

#### Key Changes
- Created full React project with:
  - Vite + React + TypeScript bootstrap
  - TailwindCSS design system
  - Component-driven layout patterns
  - Page routing for all Academy Trails
- Generated initial folder structure under `/src`:
  - `components/`
  - `pages/`
  - `styles/`
  - `utils/`
- Added documentation files:
  - `PROJECT_STATUS.md` (initial version)
  - `README.md`
  - Testing and workflow scaffolding
- Implemented Figma Make → GitHub workflow for future automation.

#### Impacts
- Establishes a clean base for React → Lightning Web Component conversion by Hugh.
- Provides the shared UI structure for upcoming Jotform, Substack, and Salesforce CMS embeds.
- Consolidates branch and PR workflow with Linear alignment.

#### Testing Notes
- Confirmed all pages render in Vite dev server.
- Verified routing + layout.
- Verified Tailwind v4 configuration.
- Pending: automated test coverage.

---

# Architecture Summary

### Front-End Stack
- **React + TypeScript**
- **Vite** (bundler)
- **TailwindCSS v4**
- **Atomic Component Pattern** (LWC-friendly)
- **React Router** (multi-page navigation)

### Integration Hooks Ready
- Jotform (Visitor Trail, Guided Trail, Mastery, Explorer)
- Substack newsletter embed
- Salesforce CMS content (JSON placeholders)
- Salesforce Experience Cloud login redirects

### Repository Structure (Root-Level)
