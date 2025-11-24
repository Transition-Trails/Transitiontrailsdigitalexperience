# Schema Overview

## Core Objects

### Program
- Represents the overarching trail or course (e.g., "Trail of Mastery").
- Fields: Name, Description, Start Date, End Date, Status.

### Program Engagement
- Connects a Contact to a Program.
- Tracks progress, status (Enrolled, Completed, Withdrawn), and role (Participant, Guide).

### Application
- Stores submission data from Jotform.
- Linked to Contact.
- Statuses: Draft, Submitted, In Review, Approved, Rejected.

### Contact
- The user/participant.
- Standard Salesforce Contact object extended with trail-specific fields.

https://transitiontrails.sharepoint.com/:x:/g/IQCo77qQEEOaTbbACY7FvUswATHXiTDfFSDp8IrTaOyUBfM?e=ZM2zkI
