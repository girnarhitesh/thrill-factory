import React from 'react';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
  headingLevel?: 'h1' | 'h2';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  highlightWord,
  description,
  align = 'center',
  className = '',
  headingLevel = 'h2',
}) => {
  const Heading = headingLevel;
  return (
    <header
      className={`section-header${align === 'left' ? ' section-header--left text-left' : ''} ${className}`.trim()}
    >
      {tag ? (
        <span className="section-stamp">
          <span className="section-stamp-node" aria-hidden="true" />
          {tag}
        </span>
      ) : null}

      <Heading className="section-title">
        <span className="section-title-lead">{title}</span>
        {highlightWord ? (
          <>
            {' '}
            <span className="section-title-accent">{highlightWord}</span>
          </>
        ) : null}
      </Heading>

      <span className="section-slash" aria-hidden="true" />

      {description ? <p className="section-desc">{description}</p> : null}
    </header>
  );
};
