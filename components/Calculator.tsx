
import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [wallArea, setWallArea] = useState<number>(0);
  const [brickType, setBrickType] = useState<'heblex' | 'standard'>('heblex');

  const calculate = () => {
    if (brickType === 'heblex') {
      const blocks = Math.ceil(wallArea * 8.33); // Approx 8.33 blocks per m2
      const glue = (wallArea * 2).toFixed(1); // 2kg per m2
      return { main: blocks, unit: 'قالب', extra: glue, extraUnit: 'کیلوگرم چسب' };
    } else {
      const bricks = Math.ceil(wallArea * 75); // Standard 10cm brick approx 75 per m2
      const cement = Math.ceil(wallArea * 0.4); // 0.4 bags per m2
      return { main: bricks, unit: 'قالب', extra: cement, extraUnit: 'کیسه سیمان' };
    }
  };

  const results = calculate();

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
        <i className='bx bx-calculator text-emerald-600'></i> تخمین‌گر هوشمند مصالح
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-slate-500 mb-1">مساحت دیوار (متر مربع)</label>
          <input 
            type="number" 
            value={wallArea || ''} 
            onChange={(e) => setWallArea(Number(e.target.value))}
            className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20"
            placeholder="مثلاً: ۵۰"
          />
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setBrickType('heblex')}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${brickType === 'heblex' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-600'}`}
          >
            بلوک هبلکس
          </button>
          <button 
            onClick={() => setBrickType('standard')}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${brickType === 'standard' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-600'}`}
          >
            آجر فشاری/سفال
          </button>
        </div>

        {wallArea > 0 && (
          <div className="mt-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 animate-fadeIn">
            <p className="text-sm text-emerald-800 mb-2 font-medium">نتیجه تقریبی برآورد:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-center">
                <span className="block text-xl font-black text-emerald-600">{results.main}</span>
                <span className="text-xs text-slate-400">{results.unit}</span>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm text-center">
                <span className="block text-xl font-black text-emerald-600">{results.extra}</span>
                <span className="text-xs text-slate-400">{results.extraUnit}</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-3 text-center">* محاسبات تقریبی است؛ جهت خرید دقیق با ما تماس بگیرید.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
