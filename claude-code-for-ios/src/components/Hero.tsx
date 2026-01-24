import { useState, useEffect } from 'react';

export default function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 pb-8 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Orange glow effect */}
      <div
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[180px] opacity-20"
        style={{ background: 'rgb(217, 145, 120)' }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-15"
        style={{ background: 'rgb(217, 145, 120)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Terminal style content */}
          <div>
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-control-close" />
              <div className="w-3 h-3 rounded-full bg-control-minimize" />
              <div className="w-3 h-3 rounded-full bg-control-maximize" />
              <span className="text-text-muted text-sm font-mono ml-2">ios-guide.ts</span>
            </div>

            {/* Comment line */}
            <p className="text-text-muted font-mono text-sm mb-2">// main.ts</p>

            {/* Main title with prompt */}
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-text-muted">&gt; </span>
              <span className="text-text-primary">Claude Code</span>
              <br />
              <span className="text-text-primary ml-4 sm:ml-8">for iOS</span>
              <span className={`text-orange ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </h1>

            {/* Subtitle with prompt */}
            <p className="text-text-muted font-mono mb-8">
              <span className="text-text-muted">&gt; </span>
              for the complete iOS development workflow
            </p>

            {/* Code block stats */}
            <div className="bg-bg-terminal border border-white/10 rounded-lg p-4 mb-6 max-w-md">
              <div className="font-mono">
                <span className="text-purple-500">const</span>
                <span className="text-text-primary ml-2">sections</span>
                <span className="text-text-muted ml-2">=</span>
                <span className="text-orange ml-2 text-3xl font-bold">16</span>
                <span className="text-text-muted">;</span>
              </div>
              <p className="text-text-muted font-mono text-sm mt-2">
                // Everything you need to ship iOS apps
              </p>
            </div>

            {/* Description block - JSDoc style */}
            <div className="bg-[rgba(217,145,120,0.08)] border-l-2 border-[rgb(217,145,120)] pl-4 pr-4 py-3 mb-8 max-w-lg rounded-r-lg">
              <p className="font-mono text-sm">
                <span className="text-green-500">/**</span>
              </p>
              <p className="font-mono text-sm text-text-muted">
                <span className="text-green-500"> * </span>
                From zero to App Store: setup, skills,
              </p>
              <p className="font-mono text-sm text-text-muted">
                <span className="text-green-500"> * </span>
                MCP servers, hooks, and best practices.
              </p>
              <p className="font-mono text-sm text-text-muted">
                <span className="text-green-500"> * </span>
                Build SwiftUI apps faster with AI.
              </p>
              <p className="font-mono text-sm">
                <span className="text-green-500"> */</span>
              </p>
            </div>

            {/* CTA */}
            <a
              href="#getting-started"
              className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary font-mono text-sm transition-colors"
            >
              <span className="text-green-500">$</span>
              <span className="text-blue-500">cd</span>
              <span className="text-text-primary">/get-started</span>
              <i className="bi bi-arrow-down ml-2"></i>
            </a>
          </div>

          {/* Right side - Stats terminal */}
          <div className="lg:block">
            <div className="bg-bg-terminal border border-white/10 rounded-xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-control-close" />
                <div className="w-3 h-3 rounded-full bg-control-minimize" />
                <div className="w-3 h-3 rounded-full bg-control-maximize" />
                <span className="text-text-muted text-sm font-mono ml-2">guide-overview.tsx</span>
              </div>

              {/* Content */}
              <div className="p-6 font-mono text-sm">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-text-muted">Guide Sections</span>
                  <span className="text-orange font-bold text-lg">16</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-text-muted">Custom Skills</span>
                  <span className="text-purple-500 font-bold text-lg">28</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-text-muted">Code Examples</span>
                  <span className="text-blue-500 font-bold text-lg">30+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-text-muted">Pro Tips</span>
                  <span className="text-green-500 font-bold text-lg">12</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-text-muted">iOS Focused</span>
                  <span className="text-green-500 font-bold text-lg">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
