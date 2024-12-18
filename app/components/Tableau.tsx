'use client'

import React, { useEffect, useRef } from 'react';

interface TableauDashboardProps {
  url: string;
  width: string;
  height: string;
}

declare global {
  interface Window {
    tableau: any;
  }
}

export default function TableauDashboard({ url, width, height }: TableauDashboardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viz = ref.current;
    if (!viz) return;

    // Dispose of existing viz if any
    const existingViz = viz.getElementsByTagName('iframe')[0];
    if (existingViz) {
      existingViz.remove();
    }

    const options = {
      hideTabs: false,
      hideToolbar: false,
      width: '2000px',
      height: '1500px',
      fixedSize: false,
      device: 'desktop',
      onFirstInteractive: function (vizObj: any) {
        const iframe = viz.getElementsByTagName('iframe')[0];
        if (iframe) {
          iframe.style.width = '2000px';
          iframe.style.height = '1500px';
          iframe.style.overflowY = 'auto';
        }
      }
    };

    new window.tableau.Viz(viz, url, options);
  }, [url]);

  return (
    <div 
      ref={ref} 
      style={{ 
        margin: '0 auto',
        width: '2000px',
        height: '1500px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflowY: 'auto',
        overflowX: 'auto',
        position: 'relative',
        border: '1px solid #ccc'
      }}
    />
  );
}
