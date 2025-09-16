import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface Task {
  id: string;
  title: string;
  date: string;
  type: 'music' | 'art' | 'game' | 'other';
  completed: boolean;
}

const TASKS_FILE = path.join(process.cwd(), 'data', 'tasks.json');

async function ensureDataDir() {
  const dataDir = path.dirname(TASKS_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

async function readTasks(): Promise<Task[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(TASKS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeTasks(tasks: Task[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

export async function GET() {
  try {
    const tasks = await readTasks();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Failed to read tasks:', error);
    return NextResponse.json({ error: 'Failed to read tasks' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, date, type } = body;

    if (!title || !date || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const tasks = await readTasks();
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      date,
      type,
      completed: false
    };

    tasks.push(newTask);
    await writeTasks(tasks);

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error('Failed to create task:', error);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
    }

    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
    await writeTasks(tasks);

    return NextResponse.json(tasks[taskIndex]);
  } catch (error) {
    console.error('Failed to update task:', error);
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
    }

    const tasks = await readTasks();
    const filteredTasks = tasks.filter(task => task.id !== id);

    if (tasks.length === filteredTasks.length) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    await writeTasks(filteredTasks);
    return NextResponse.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Failed to delete task:', error);
    return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
  }
}