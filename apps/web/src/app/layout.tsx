'use client';

import './global.css';
import 'ui/styles.css';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
