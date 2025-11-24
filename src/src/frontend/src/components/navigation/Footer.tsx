import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-[var(--color-neutral-100)]">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Transition Trails. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="/about" className="text-sm underline-offset-4 hover:underline">About</a>
          <a href="/contact-us" className="text-sm underline-offset-4 hover:underline">Contact</a>
          <a href="/privacy" className="text-sm underline-offset-4 hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
};
