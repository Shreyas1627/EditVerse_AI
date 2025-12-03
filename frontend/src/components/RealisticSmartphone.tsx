import React, { forwardRef } from 'react';
import SmartphoneContent from './SmartphoneContent';

const RealisticSmartphone = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="relative" style={{ width: '280px', height: '580px' }}>
      {/* Ultra-detailed Multi-layered Bezel System */}
      
      {/* Outer chamfered edge layer */}
      <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_80px_rgba(0,0,0,0.6)]">
        
        {/* Mid-layer metallic frame with anodized finish */}
        <div className="absolute inset-[3px] rounded-[39px] bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b] shadow-[inset_0_4px_16px_rgba(0,0,0,0.9),inset_0_-2px_12px_rgba(0,0,0,0.7),0_8px_24px_rgba(0,0,0,0.8)]">
          
          {/* Brushed metal texture simulation */}
          <div className="absolute inset-0 rounded-[39px] opacity-30 pointer-events-none" 
               style={{ 
                 background: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px)',
               }}>
          </div>
          
          {/* Inner structural lip with stepped bezel */}
          <div className="absolute inset-[5px] rounded-[36px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-[inset_0_3px_12px_rgba(0,0,0,0.8),inset_0_-1px_6px_rgba(0,0,0,0.6)]">
            
            {/* Deep screen bezel recession */}
            <div className="absolute inset-[7px] rounded-[32px] bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#000000] shadow-[inset_0_4px_14px_rgba(0,0,0,0.95),inset_0_-2px_8px_rgba(0,0,0,0.8)]">
              
              {/* Anti-reflective coating layer */}
              <div className="absolute inset-[2px] rounded-[30px] bg-gradient-to-br from-[#0a0a0a] to-[#000000] shadow-[inset_0_2px_10px_rgba(0,0,0,1)]">
                
                {/* Actual screen area with slight inset */}
                <div className="absolute inset-[6px] rounded-[26px] bg-[#050505] overflow-hidden shadow-[inset_0_0_1px_rgba(255,255,255,0.1)]">
                  <SmartphoneContent />
                </div>
                
                {/* Enhanced Dynamic Island with hardware details */}
                <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-gradient-to-b from-[#000000] to-[#0a0a0a] rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.95),inset_0_2px_6px_rgba(0,0,0,0.9),inset_0_-1px_3px_rgba(255,255,255,0.02)]">
                  {/* Island inner depression */}
                  <div className="absolute inset-[1.5px] rounded-full bg-gradient-to-b from-[#000000] via-[#050505] to-[#000000] shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]">
                    
                    {/* Selfie Camera Module */}
                    <div className="absolute left-[18px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] shadow-[inset_0_1.5px_4px_rgba(0,0,0,0.95),0_1px_2px_rgba(0,0,0,0.8)]">
                      {/* Camera lens with multi-coating */}
                      <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#1e3a5f] via-[#0f1820] to-[#000000] shadow-[0_0_3px_rgba(59,130,246,0.4),inset_0_1px_2px_rgba(59,130,246,0.15)]">
                        {/* Lens reflection - primary */}
                        <div className="absolute top-[1px] left-[1px] w-[3px] h-[3px] rounded-full bg-gradient-to-br from-white/50 via-blue-200/30 to-transparent"></div>
                        {/* Lens reflection - secondary */}
                        <div className="absolute bottom-[0.5px] right-[0.5px] w-[1.5px] h-[1.5px] rounded-full bg-white/20"></div>
                      </div>
                    </div>
                    
                    {/* Proximity Sensor */}
                    <div className="absolute right-[22px] top-1/2 -translate-y-1/2 w-[5.5px] h-[5.5px] rounded-full bg-[#0a0a0a] shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.95)]">
                      <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-[#1a0a0a] via-[#0f0505] to-[#0a0000] opacity-70">
                        {/* IR emitter subtle glow */}
                        <div className="absolute inset-[0.5px] rounded-full bg-gradient-radial from-red-900/20 to-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Ambient Light Sensor */}
                    <div className="absolute right-[31px] top-1/2 -translate-y-1/2 w-[4.5px] h-[4.5px] rounded-full bg-[#0a0a0a] shadow-[inset_0_1px_2px_rgba(0,0,0,0.95)] opacity-60">
                      <div className="absolute inset-[0.5px] rounded-full bg-gradient-to-br from-[#0f0f0f] to-[#000000]"></div>
                    </div>
                    
                    {/* Microphone pinhole */}
                    <div className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[2.5px] h-[2.5px] rounded-full bg-[#000000] shadow-[inset_0_1px_2px_rgba(0,0,0,1)] opacity-80"></div>
                  </div>
                  
                  {/* Island edge micro-highlight */}
                  <div className="absolute inset-[0.5px] rounded-full bg-gradient-to-t from-transparent via-white/[0.015] to-transparent pointer-events-none"></div>
                </div>
                
                {/* Speaker Grille */}
                <div className="absolute top-[12px] left-1/2 -translate-x-1/2 translate-x-[55px] w-[35px] h-[2.5px] rounded-full bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#000000] shadow-[inset_0_1px_2px_rgba(0,0,0,1)] opacity-50">
                  {/* Grille mesh detail */}
                  <div className="absolute inset-0 flex items-center justify-center gap-[1.5px]">
                    <div className="w-[0.5px] h-[50%] bg-black/40 rounded-full"></div>
                    <div className="w-[0.5px] h-[50%] bg-black/40 rounded-full"></div>
                    <div className="w-[0.5px] h-[50%] bg-black/40 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Screen bezel inner highlight */}
              <div className="absolute inset-[1px] rounded-[31px] bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Structural lip highlight */}
            <div className="absolute inset-[6px] rounded-[33px] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          {/* Mid-layer edge highlights for 3D depth */}
          <div className="absolute inset-[4px] rounded-[37px] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 rounded-[39px] bg-gradient-to-tl from-transparent via-transparent to-white/[0.08] pointer-events-none"></div>
        </div>
        
        {/* Outer chamfer highlight */}
        <div className="absolute inset-0 rounded-[42px] bg-gradient-to-tr from-white/[0.12] via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-[1px] rounded-[41px] bg-gradient-to-br from-transparent via-transparent to-white/[0.06] pointer-events-none"></div>
      </div>
      
      {/* Enhanced Side Buttons with realistic construction */}
      
      {/* Volume Up Button - Left Side */}
      <div className="absolute left-[-3px] top-[120px] w-[3px] h-[40px] rounded-r-lg bg-gradient-to-l from-[#1e293b] via-[#334155] to-[#475569] shadow-[inset_-1.5px_0_3px_rgba(0,0,0,0.8),2px_0_6px_rgba(0,0,0,0.5)]">
        {/* Button inner surface with anodized finish */}
        <div className="absolute inset-[0.5px] rounded-r-lg bg-gradient-to-l from-[#334155] via-[#3f4f5f] to-[#475569] shadow-[inset_0_2px_2px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.4)]">
          {/* Tactile surface detail */}
          <div className="absolute top-[2px] left-[0.5px] right-[0.5px] h-[35%] bg-gradient-to-b from-white/[0.08] to-transparent rounded-r-lg"></div>
        </div>
        {/* Button edge chamfer */}
        <div className="absolute top-0 right-0 w-[0.4px] h-full bg-gradient-to-l from-[#1e293b] to-transparent"></div>
      </div>
      
      {/* Volume Down Button - Left Side */}
      <div className="absolute left-[-3px] top-[170px] w-[3px] h-[40px] rounded-r-lg bg-gradient-to-l from-[#1e293b] via-[#334155] to-[#475569] shadow-[inset_-1.5px_0_3px_rgba(0,0,0,0.8),2px_0_6px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-[0.5px] rounded-r-lg bg-gradient-to-l from-[#334155] via-[#3f4f5f] to-[#475569] shadow-[inset_0_2px_2px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.4)]">
          <div className="absolute top-[2px] left-[0.5px] right-[0.5px] h-[35%] bg-gradient-to-b from-white/[0.08] to-transparent rounded-r-lg"></div>
        </div>
        <div className="absolute top-0 right-0 w-[0.4px] h-full bg-gradient-to-l from-[#1e293b] to-transparent"></div>
      </div>
      
      {/* Power Button - Right Side (larger and more prominent) */}
      <div className="absolute right-[-3px] top-[140px] w-[3.5px] h-[60px] rounded-l-lg bg-gradient-to-r from-[#1e293b] via-[#334155] to-[#475569] shadow-[inset_1.5px_0_3px_rgba(0,0,0,0.8),-2px_0_8px_rgba(0,0,0,0.6)]">
        {/* Button inner surface */}
        <div className="absolute inset-[0.5px] rounded-l-lg bg-gradient-to-r from-[#334155] via-[#3f4f5f] to-[#475569] shadow-[inset_0_2px_3px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.5)]">
          {/* Tactile surface detail */}
          <div className="absolute top-[3px] left-[0.5px] right-[0.5px] h-[40%] bg-gradient-to-b from-white/[0.12] to-transparent rounded-l-lg"></div>
          {/* Power button indicator line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[0.8px] right-[0.8px] h-[0.8px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
        </div>
        {/* Button edge chamfer */}
        <div className="absolute top-0 left-0 w-[0.4px] h-full bg-gradient-to-r from-[#1e293b] to-transparent"></div>
      </div>
      
      {/* Premium glow aura */}
      <div className="absolute inset-[-20px] bg-gradient-radial from-[#8b5cf6]/8 via-[#8b5cf6]/3 to-transparent blur-2xl pointer-events-none" />
      
      {/* Outer rim shadow for floating effect */}
      <div className="absolute inset-[-2px] rounded-[44px] shadow-[0_0_0_1px_rgba(139,92,246,0.1)] pointer-events-none" />
    </div>
  );
});

RealisticSmartphone.displayName = 'RealisticSmartphone';

export default RealisticSmartphone;
