'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/lib/useInView';

interface Brand {
  name: string;
  x: number;
  y: number;
  description: string;
  traits: string[];
  isMooon?: boolean;
}

const map1Brands: Brand[] = [
  {
    name: 'Replika',
    x: 75,
    y: 25,
    description: 'AI companion focused on immersive conversations',
    traits: ['Strong chatting', 'High immersion', 'Escapism-oriented'],
  },
  {
    name: 'Character.AI',
    x: 80,
    y: 20,
    description: 'Role-playing focused AI with deep immersion',
    traits: ['Extreme immersion', 'Fantasy-based', 'Escapism-dominant'],
  },
  {
    name: 'TikTok',
    x: 20,
    y: 25,
    description: 'Algorithm-driven content consumption',
    traits: ['Low personalization', 'Addictive loops', 'Escapism fuel'],
  },
  {
    name: 'Headspace',
    x: 50,
    y: 70,
    description: 'Meditation and mindfulness for self-regulation',
    traits: ['Self-care focused', 'Rational approach', 'Reality-grounded'],
  },
  {
    name: 'LOVOT',
    x: 55,
    y: 55,
    description: 'Emotional robot companion with physical presence',
    traits: ['Emotional interaction', 'Physical companion', 'Pet-like behavior'],
  },
  {
    name: 'Mooon',
    x: 85,
    y: 80,
    description: 'Emotionally intelligent, reality-oriented AI companionship',
    traits: ['Empathetic AI', 'Brings you back to life', 'Human connection bridge'],
    isMooon: true,
  },
];

const map2Brands: Brand[] = [
  {
    name: 'ChatGPT',
    x: 20,
    y: 20,
    description: 'Passive tool-based AI for task completion',
    traits: ['Task-focused', 'Passive interaction', 'Utility-driven'],
  },
  {
    name: 'Headspace',
    x: 35,
    y: 40,
    description: 'Guided tool for mental wellness',
    traits: ['Tool-like', 'Guided assistance', 'Semi-active'],
  },
  {
    name: 'Replika',
    x: 75,
    y: 75,
    description: 'Active companion with immersive engagement',
    traits: ['Companion-oriented', 'Active engagement', 'Immersion-focused'],
  },
  {
    name: 'LOVOT',
    x: 50,
    y: 70,
    description: 'Emotional companion with limited active guidance',
    traits: ['Companion', 'Moderate engagement', 'Passive presence'],
  },
  {
    name: 'Mooon',
    x: 90,
    y: 85,
    description: 'Active companion that moves you forward',
    traits: ['True companion', 'Active guidance', 'Growth-oriented'],
    isMooon: true,
  },
];

interface TooltipData {
  brand: Brand | null;
  x: number;
  y: number;
}

export default function BrandPositioningMap() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [mapType, setMapType] = useState<'map1' | 'map2'>('map1');
  const [tooltip, setTooltip] = useState<TooltipData>({ brand: null, x: 0, y: 0 });

  const brands = mapType === 'map1' ? map1Brands : map2Brands;
  const isMap1 = mapType === 'map1';

  // SVG dimensions
  const svgWidth = 1200;
  const svgHeight = 800;
  const padding = 100;
  const graphWidth = svgWidth - padding * 2;
  const graphHeight = svgHeight - padding * 2;

  // Convert brand position (0-100) to SVG coordinates
  const toSvgX = (x: number) => padding + (x / 100) * graphWidth;
  const toSvgY = (y: number) => padding + graphHeight - (y / 100) * graphHeight;

  const xAxisLabel = isMap1 ? 'Technology-driven' : 'Passive Interaction';
  const xAxisLabelRight = isMap1 ? 'Human-centered' : 'Active Engagement';
  const yAxisLabel = isMap1 ? 'Escapism' : 'Tool';
  const yAxisLabelTop = isMap1 ? 'Real-world Engagement' : 'Companion';

  return (
    <section ref={ref} className="py-24 px-6 bg-mooon-light text-mooon-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Brand Positioning Map</h2>
          <p className="text-xl text-mooon-tertiary max-w-2xl mx-auto mb-8">
            Where Mooon stands in the companionship landscape
          </p>

          {/* Map Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setMapType('map1')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                mapType === 'map1'
                  ? 'bg-mooon-primary text-white shadow-lg'
                  : 'bg-mooon-soft text-mooon-dark hover:bg-mooon-secondary'
              }`}
            >
              Map 1: Humanity ↔ Technology
            </button>
            <button
              onClick={() => setMapType('map2')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                mapType === 'map2'
                  ? 'bg-mooon-primary text-white shadow-lg'
                  : 'bg-mooon-soft text-mooon-dark hover:bg-mooon-secondary'
              }`}
            >
              Map 2: Tool ↔ Companion
            </button>
          </div>
        </motion.div>

        {/* SVG Map with axis labels */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Top label */}
            <div className="h-6 flex items-center justify-center text-sm text-mooon-tertiary font-medium">
              {yAxisLabelTop} ↑
            </div>

            {/* Left label + SVG + Right label */}
            <div className="flex items-center gap-6">
              {/* Left label */}
              <div className="w-20 text-xs text-mooon-tertiary text-right">
                ← {xAxisLabel}
              </div>

              {/* SVG */}
              <svg
                width={svgWidth}
                height={svgHeight}
                className="max-w-full h-auto"
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                style={{ border: `1px solid #E8A87C20` }}
              >
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8B6F4710" strokeWidth="1" />
              </pattern>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background grid */}
            <rect width={svgWidth} height={svgHeight} className="fill-mooon-light" />
            <rect
              x={padding}
              y={padding}
              width={graphWidth}
              height={graphHeight}
              fill="url(#grid)"
            />

            {/* Axes */}
            {/* X-axis */}
            <line
              x1={padding}
              y1={padding + graphHeight}
              x2={padding + graphWidth}
              y2={padding + graphHeight}
              stroke="#2D2416"
              strokeWidth="2"
            />
            {/* Y-axis */}
            <line
              x1={padding}
              y1={padding}
              x2={padding}
              y2={padding + graphHeight}
              stroke="#2D2416"
              strokeWidth="2"
            />

            {/* Center lines (optional subtle guides) */}
            <line
              x1={padding + graphWidth / 2}
              y1={padding}
              x2={padding + graphWidth / 2}
              y2={padding + graphHeight}
              stroke="#8B6F4720"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
            <line
              x1={padding}
              y1={padding + graphHeight / 2}
              x2={padding + graphWidth}
              y2={padding + graphHeight / 2}
              stroke="#8B6F4720"
              strokeWidth="1"
              strokeDasharray="5,5"
            />

            {/* Brand points */}
            {brands.map((brand) => {
              const svgX = toSvgX(brand.x);
              const svgY = toSvgY(brand.y);
              const radius = brand.isMooon ? 14 : 10;
              const fill = brand.isMooon ? '#D97456' : '#E8A87C';

              return (
                <g key={brand.name}>
                  {brand.isMooon && (
                    <circle
                      cx={svgX}
                      cy={svgY}
                      r={radius + 4}
                      fill="none"
                      stroke="#D97456"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  )}
                  <motion.circle
                    cx={svgX}
                    cy={svgY}
                    r={radius}
                    fill={fill}
                    onClick={(e) => {
                      const rect = (e.currentTarget as any).closest('svg').getBoundingClientRect();
                      setTooltip({
                        brand,
                        x: svgX,
                        y: svgY,
                      });
                    }}
                    onMouseEnter={(e) => {
                      const rect = (e.currentTarget as any).closest('svg').getBoundingClientRect();
                      setTooltip({
                        brand,
                        x: svgX,
                        y: svgY,
                      });
                    }}
                    onMouseLeave={() => {
                      // Keep tooltip visible on hover
                    }}
                    whileHover={{ scale: 1.3 }}
                    style={{ cursor: 'pointer' }}
                    filter={brand.isMooon ? 'url(#glow)' : 'none'}
                  />
                </g>
              );
            })}
          </svg>

              {/* Right label */}
              <div className="w-20 text-xs text-mooon-tertiary">
                {xAxisLabelRight} →
              </div>
            </div>

            {/* Bottom label */}
            <div className="h-6 flex items-center justify-center text-sm text-mooon-tertiary font-medium">
              ↓ {yAxisLabel}
            </div>
          </div>
        </motion.div>

        {/* Tooltip */}
        {tooltip.brand && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`max-w-md mx-auto p-6 rounded-2xl mb-8 ${
              tooltip.brand.isMooon
                ? 'bg-mooon-primary text-white border-2 border-mooon-accent'
                : 'bg-mooon-soft text-mooon-dark'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{tooltip.brand.name}</h3>
            <p className="mb-4 opacity-90 text-sm leading-relaxed">
              {tooltip.brand.description}
            </p>
            <div className="space-y-1">
              {tooltip.brand.traits.map((trait, idx) => (
                <div key={idx} className="text-sm flex items-start gap-2">
                  <span className="text-lg leading-none">•</span>
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
        >
          <div className="p-4 bg-mooon-soft rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-mooon-secondary rounded-full" />
              <h4 className="font-semibold text-mooon-dark">Competitors</h4>
            </div>
            <p className="text-sm text-mooon-tertiary">
              Existing players in the companionship space
            </p>
          </div>

          <div className="p-4 bg-mooon-soft rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-mooon-primary rounded-full" />
              <h4 className="font-semibold text-mooon-dark">Mooon</h4>
            </div>
            <p className="text-sm text-mooon-tertiary">
              Our unique positioning in the market
            </p>
          </div>

          <div className="p-4 bg-mooon-soft rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 border-2 border-mooon-primary rounded-full" />
              <h4 className="font-semibold text-mooon-dark">Hover to see</h4>
            </div>
            <p className="text-sm text-mooon-tertiary">
              Details & traits of each brand
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
