/**
 * SVG Icons Library for MIRABO Biotechnology
 * Centralized icon management for better maintainability
 */

const Icons = {
  // Platform Icons
  prism: `
    <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  `,
  
  orion: `
    <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  `,
  
  ignis: `
    <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
      <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
    </svg>
  `,

  // Abstract Visualizations
  rotatingRings: `
    <div class="w-64 h-64 relative">
      <div class="absolute inset-0 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
      <div class="absolute inset-4 border border-dashed border-green-500/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-32 h-32 bg-blue-500 blur-xl opacity-50 rounded-full"></div>
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  `,

  codeSequence: `
    <div class="w-full h-48 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent border-t border-b border-purple-500/20 flex items-center justify-center relative overflow-hidden">
      <div class="font-mono text-purple-400 text-xs animate-pulse">[ SEQUENCE OPTIMIZATION RUNNING ]</div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent h-1 animate-[scan_2s_ease-in-out_infinite]"></div>
    </div>
  `,

  barChart: `
    <div class="relative w-full h-full flex items-center justify-center">
      <div class="grid grid-cols-6 gap-2">
        <div class="w-3 h-8 bg-green-500/20 rounded-sm animate-pulse"></div>
        <div class="w-3 h-12 bg-green-500/40 rounded-sm animate-pulse" style="animation-delay: 0.1s"></div>
        <div class="w-3 h-16 bg-green-500/60 rounded-sm animate-pulse" style="animation-delay: 0.2s"></div>
        <div class="w-3 h-24 bg-green-500 rounded-sm animate-pulse" style="animation-delay: 0.3s"></div>
        <div class="w-3 h-14 bg-green-500/50 rounded-sm animate-pulse" style="animation-delay: 0.4s"></div>
        <div class="w-3 h-6 bg-green-500/20 rounded-sm animate-pulse" style="animation-delay: 0.5s"></div>
      </div>
    </div>
  `,

  // Mission/Vision Icons
  mission: `
    <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  `,

  vision: `
    <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
    </svg>
  `,

  // Decorative Icon (for mission section header)
  layers: `
    <svg class="w-12 h-12 mx-auto text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
    </svg>
  `,

  // Company Overview Icons
  aiPlatform: `
    <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  `,

  sustainable: `
    <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20m10-10H2"/>
    </svg>
  `,

  innovation: `
    <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>
  `,

  // Industry Icons
  personalCare: `
    <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
    </svg>
  `,

  healthcare: `
    <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  `,

  // Scroll indicator
  scrollArrow: `
    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
    </svg>
  `,

  // Decorative elements
  dotPulse: `<span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>`,
  
  stepBadge: (step, color = 'blue') => `
    <div class="inline-block px-3 py-1 bg-${color}-500/20 text-${color}-400 rounded-full text-xs mb-4 border border-${color}-500/50">
      ${step}
    </div>
  `
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Icons;
}
