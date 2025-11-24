# Jotform to Salesforce Integration

## Mapping Strategy
We use the native Jotform-Salesforce integration.

### Forms
1. **Visitor Intake Form**: Maps to `Lead` or `Contact` + `Application`.
2. **Feedback Form**: Maps to custom `Feedback__c` object.

## Handling Updates
- **Submission**: Creates/Updates record.
- **Prefill**: Jotform Prefill is used to load existing Salesforce data into forms for returning users (e.g., "Guided Trail" progress updates).

- https://transitiontrails.sharepoint.com/:x:/g/IQBAfnnL_FKFQJVaFUuqXBTxAWJfP5V7Q2DyCVCB1kLNHEY?e=9NKmrX
