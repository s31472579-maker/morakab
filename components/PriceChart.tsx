
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'فروردین', cement: 72000, steel: 24000 },
  { name: 'اردیبهشت', cement: 75000, steel: 25500 },
  { name: 'خرداد', cement: 78000, steel: 27000 },
  { name: 'تیر', cement: 85000, steel: 28500 },
  { name: 'مرداد', cement: 84000, steel: 28000 },
  { name: 'شهریور', cement: 85000, steel: 28200 },
];

const PriceChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-full">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
        <i className='bx bx-trending-up text-emerald-600'></i> روند تغییرات بازار (۶ ماه اخیر)
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} hide />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px' }} 
              labelStyle={{ fontWeight: 'bold', color: '#10b981' }}
            />
            <Line type="monotone" dataKey="cement" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="سیمان" />
            <Line type="monotone" dataKey="steel" stroke="#0f172a" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="فولاد" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-4 mt-4 justify-center">
        <div className="flex items-center gap-1 text-[10px] text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span> سیمان
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-500">
          <span className="w-2 h-2 rounded-full bg-slate-900"></span> آهن‌آلات
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
