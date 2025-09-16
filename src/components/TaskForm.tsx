'use client';

import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  date: string;
  type: 'music' | 'art' | 'game' | 'other';
  completed: boolean;
}

interface TaskFormProps {
  onTaskAdd: (task: Omit<Task, 'id' | 'completed'>) => void;
  selectedDate?: string;
  onClose: () => void;
}

export default function TaskForm({ onTaskAdd, selectedDate, onClose }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(selectedDate || new Date().toISOString().split('T')[0]);
  const [type, setType] = useState<'music' | 'art' | 'game' | 'other'>('other');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onTaskAdd({
      title: title.trim(),
      date,
      type
    });

    setTitle('');
    setType('other');
    onClose();
  };

  const getTypeIcon = (taskType: string) => {
    switch (taskType) {
      case 'music': return '🎵';
      case 'art': return '🎨';
      case 'game': return '🎮';
      default: return '📝';
    }
  };

  const getTypeLabel = (taskType: string) => {
    switch (taskType) {
      case 'music': return '音楽';
      case 'art': return 'イラスト';
      case 'game': return 'ゲーム';
      default: return 'その他';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-light text-gray-100">新しいタスク</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-400 hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              タスク名
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              placeholder="タスク名を入力..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              日付
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              カテゴリ
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(['music', 'art', 'game', 'other'] as const).map((taskType) => (
                <button
                  key={taskType}
                  type="button"
                  onClick={() => setType(taskType)}
                  className={`p-3 rounded-lg border transition-all duration-200 text-left ${
                    type === taskType
                      ? 'bg-sky-400/20 border-sky-400/50 text-sky-400'
                      : 'bg-gray-700/30 border-gray-600/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getTypeIcon(taskType)}</span>
                    <span className="text-sm">{getTypeLabel(taskType)}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-700/50 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 rounded-lg transition-colors"
            >
              追加
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}