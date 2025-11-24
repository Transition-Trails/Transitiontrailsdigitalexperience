# Architecture Overview

## Salesforce Experience Cloud
The core of the Transition Trails Digital Experience is hosted on Salesforce Experience Cloud. The React application in this repository serves as the design system and frontend logic source, which is then adapted into Lightning Web Components (LWC) or used within a hybrid framework.

## Data Flow
1. **Frontend**: React/LWC interfaces handle user interaction.
2. **API Layer**: Apex controllers or Standard APIs expose data.
3. **Database**: Salesforce Objects (Standard & Custom) store the data.

## Jotform Integration
Jotform is used for complex intake forms. Data flows from Jotform -> Salesforce via the standard connector, triggering Flows/Triggers in Salesforce to update the Application and Contact records.
