import React from 'react';

/**
 * CMSRegion Component
 * Placeholder for Salesforce CMS content
 * LWC Conversion: Replace with cms:contentReference or managedContentByIds wire adapter
 */
interface CMSRegionProps {
  regionName: string;
  contentType?: 'hero' | 'text' | 'media' | 'card-grid' | 'custom';
  fallbackContent?: React.ReactNode;
  className?: string;
}

export const CMSRegion: React.FC<CMSRegionProps> = ({
  regionName,
  contentType = 'custom',
  fallbackContent,
  className = '',
}) => {
  return (
    <div
      className={`cms-region ${className}`}
      data-region={regionName}
      data-content-type={contentType}
    >
      {/* CMS_REGION: {regionName} */}
      {fallbackContent || (
        <div className="border-2 border-dashed border-[var(--color-neutral-300)] rounded-lg p-6 bg-[var(--color-neutral-50)]">
          <p className="text-sm text-[var(--color-neutral-700)]">
            CMS Content Region: <strong>{regionName}</strong>
          </p>
          <p className="text-xs text-[var(--color-neutral-600)] mt-2">
            Content Type: {contentType}
          </p>
          <p className="text-xs text-[var(--color-neutral-600)] mt-1">
            This will be replaced with Salesforce CMS content in production
          </p>
        </div>
      )}
    </div>
  );
};

/**
 * CMSHero Component - Hero section from CMS
 */
interface CMSHeroProps {
  regionName: string;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const CMSHero: React.FC<CMSHeroProps> = ({
  regionName,
  title = 'Hero Title from CMS',
  subtitle = 'Hero subtitle from CMS',
  backgroundImage,
}) => {
  return (
    <CMSRegion regionName={regionName} contentType="hero">
      <div
        className="relative py-20 px-6 rounded-lg overflow-hidden"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl mb-4">{title}</h1>
          <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
        </div>
      </div>
    </CMSRegion>
  );
};

/**
 * CMSText Component - Rich text from CMS
 */
interface CMSTextProps {
  regionName: string;
  content?: string;
}

export const CMSText: React.FC<CMSTextProps> = ({
  regionName,
  content = 'Rich text content from CMS will appear here',
}) => {
  return (
    <CMSRegion regionName={regionName} contentType="text">
      <div className="prose max-w-none">
        <p>{content}</p>
      </div>
    </CMSRegion>
  );
};
