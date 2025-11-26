import React, { useEffect, useRef } from 'react';

/**
 * JotformEmbed Component
 * Embeds Jotform forms for contact and signup
 * LWC Conversion: Use iframe or custom integration with Salesforce Forms
 */
interface JotformEmbedProps {
  formId: string;
  title?: string;
  height?: number;
}

export const JotformEmbed: React.FC<JotformEmbedProps> = ({
  formId,
  title = 'Contact Form',
  height = 600,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In production, this would load the actual Jotform script
    // For now, we'll show a placeholder
    console.log(`JotForm ${formId} would be embedded here`);
  }, [formId]);

  return (
    <div ref={containerRef} className="jotform-container">
      {/* CMS_REGION: jotform_embed */}
      <div className="cms-region" data-region="jotform_embed" data-form-id={formId}>
        {/* Placeholder for Jotform - Replace with actual embed code */}
        <div className="border-2 border-dashed border-[var(--color-neutral-300)] rounded-lg p-8 text-center bg-[var(--color-neutral-50)]">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-[var(--color-neutral-700)] mb-4">
            Jotform Embed Placeholder
          </p>
          <p className="text-xs text-[var(--color-neutral-600)]">
            Form ID: {formId}
          </p>
          <p className="text-xs text-[var(--color-neutral-600)] mt-2">
            In production, replace this with:<br />
            <code className="bg-white px-2 py-1 rounded">
              {`<iframe src="https://form.jotform.com/${formId}" />`}
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Contact Form - Specific Jotform instance
 */
export const ContactForm: React.FC = () => {
  return (
    <JotformEmbed
      formId="CONTACT_FORM_ID"
      title="Contact Us"
      height={700}
    />
  );
};

/**
 * Visitor Trail Signup Form
 */
export const VisitorTrailSignupForm: React.FC = () => {
  return (
    <JotformEmbed
      formId="VISITOR_TRAIL_SIGNUP_FORM_ID"
      title="Join the Visitor Trail"
      height={500}
    />
  );
};
