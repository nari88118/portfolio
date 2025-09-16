'use client';

import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import { getTasks, createTask, updateTask, deleteTask } from '@/lib/taskApi';

interface Task {
  id: string;
  title: string;
  date: string;
  type: 'music' | 'art' | 'game' | 'other';
  completed: boolean;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const monthNames = [
    '1月', '2月', '3月', '4月', '5月', '6月',
    '7月', '8月', '9月', '10月', '11月', '12月'
  ];

  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Failed to load tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData: Omit<Task, 'id' | 'completed'>) => {
    try {
      const newTask = await createTask(taskData);
      setTasks(prev => [...prev, newTask]);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      setTasks(prev => prev.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const getTasksForDate = (date: string) => {
    return tasks.filter(task => task.date === date);
  };

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'music': return '🎵';
      case 'art': return '🎨';
      case 'game': return '🎮';
      default: return '📝';
    }
  };

  const getTaskColor = (type: string) => {
    switch (type) {
      case 'music': return 'bg-purple-500/20 text-purple-400';
      case 'art': return 'bg-pink-500/20 text-pink-400';
      case 'game': return 'bg-green-500/20 text-green-400';
      default: return 'bg-blue-500/20 text-blue-400';
    }
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(year, month + direction, 1));
  };

  const formatDate = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const toggleTaskComplete = async (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    try {
      const updatedTask = await updateTask(taskId, { completed: !task.completed });
      setTasks(prev => prev.map(t => t.id === taskId ? updatedTask : t));
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigateMonth(-1)}
            className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-300 hover:text-sky-400"
          >
            ←
          </button>
          <h3 className="text-2xl font-light text-gray-100">
            {year}年 {monthNames[month]}
          </h3>
          <button
            onClick={() => navigateMonth(1)}
            className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-300 hover:text-sky-400"
          >
            →
          </button>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setCurrentDate(new Date())}
            className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-sky-400 rounded-lg transition-colors text-sm"
          >
            今日
          </button>
          <button
            onClick={() => setShowTaskForm(true)}
            className="px-4 py-2 bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 rounded-lg transition-colors text-sm"
          >
            + タスク追加
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="h-10 flex items-center justify-center text-gray-400 text-sm font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startingDayOfWeek }, (_, i) => (
          <div key={`empty-${i}`} className="h-24 bg-gray-900/20 rounded-lg"></div>
        ))}
        
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dateString = formatDate(day);
          const dayTasks = getTasksForDate(dateString);
          const isToday = 
            day === today.getDate() && 
            month === today.getMonth() && 
            year === today.getFullYear();
          const isSelected = selectedDate === dateString;

          return (
            <div
              key={day}
              onClick={() => setSelectedDate(isSelected ? null : dateString)}
              className={`
                h-24 p-2 rounded-lg cursor-pointer transition-all duration-200
                ${isToday ? 'bg-sky-400/20 border border-sky-400/50' : 'bg-gray-800/30 hover:bg-gray-700/40'}
                ${isSelected ? 'ring-2 ring-sky-400' : ''}
              `}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-sm ${isToday ? 'text-sky-400 font-medium' : 'text-gray-300'}`}>
                  {day}
                </span>
              </div>
              <div className="space-y-1">
                {dayTasks.slice(0, 2).map((task) => (
                  <div
                    key={task.id}
                    className={`text-xs px-2 py-1 rounded ${getTaskColor(task.type)} truncate ${
                      task.completed ? 'opacity-50 line-through' : ''
                    }`}
                  >
                    <span className="mr-1">{getTaskIcon(task.type)}</span>
                    {task.title}
                  </div>
                ))}
                {dayTasks.length > 2 && (
                  <div className="text-xs text-gray-500">
                    +{dayTasks.length - 2} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-8 bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
          <h4 className="text-lg text-gray-100 mb-4">
            {selectedDate} のタスク
          </h4>
          <div className="space-y-3">
            {getTasksForDate(selectedDate).length === 0 ? (
              <p className="text-gray-400 text-sm">この日にタスクはありません</p>
            ) : (
              getTasksForDate(selectedDate).map((task) => (
                <div
                  key={task.id}
                  className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg"
                >
                  <button
                    onClick={() => toggleTaskComplete(task.id)}
                    className={`w-5 h-5 rounded border-2 transition-colors ${
                      task.completed
                        ? 'bg-sky-400 border-sky-400'
                        : 'border-gray-500 hover:border-sky-400'
                    }`}
                  >
                    {task.completed && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </button>
                  <span className="text-lg">{getTaskIcon(task.type)}</span>
                  <span className={`text-gray-200 flex-1 ${task.completed ? 'line-through opacity-50' : ''}`}>
                    {task.title}
                  </span>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="ml-2 w-6 h-6 rounded bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {showTaskForm && (
        <TaskForm
          onTaskAdd={handleAddTask}
          selectedDate={selectedDate || undefined}
          onClose={() => setShowTaskForm(false)}
        />
      )}

      {loading && (
        <div className="text-center text-gray-400 py-8">
          読み込み中...
        </div>
      )}
    </div>
  );
}