'use client';

import Header from '@/components/Header';
import Calendar from '@/components/Calendar';

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <section className="mb-24">
          <div className="border-l-4 border-sky-400 pl-8 mb-8">
            <h2 className="text-xl font-light text-gray-100 mb-4">Calendar</h2>
            <p className="text-gray-400 text-sm">創作活動のタスク管理とワークスペース</p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <Calendar />
          </div>
        </section>
      </div>
    </div>
  );
}