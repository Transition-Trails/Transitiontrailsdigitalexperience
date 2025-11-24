# Manual Test Scenarios

## Visitor's Trail
1. **Landing**: User loads Visitor Trail page.
2. **Navigation**: User clicks "Start Journey".
3. **Content**: Verify "About" section loads text from CMS.

## Guided Trail
1. **Auth**: User attempts to access without login -> Redirect to Sign In.
2. **Progress**: Logged-in user sees progress bar at 50% (mock data).
3. **Interaction**: Click "Continue" -> Loads next module.

## Explorers Journey
1. **Map**: Verify interactive map loads.
2. **Search**: Type in search bar -> Results filter.
