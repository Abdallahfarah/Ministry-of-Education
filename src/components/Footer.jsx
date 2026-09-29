import React from 'react';

export default function Footer({ copyright }) {
  return (
    <footer className="portal-footer">
      <p>{copyright || "© 2026 Ministry of Education. All rights reserved."}</p>
    </footer>
  );
}
