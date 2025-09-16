interface Task {
  id: string;
  title: string;
  date: string;
  type: 'music' | 'art' | 'game' | 'other';
  completed: boolean;
}

export async function getTasks(): Promise<Task[]> {
  const response = await fetch('/api/tasks');
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
}

export async function createTask(task: Omit<Task, 'id' | 'completed'>): Promise<Task> {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
  return response.json();
}

export async function updateTask(id: string, updates: Partial<Task>): Promise<Task> {
  const response = await fetch('/api/tasks', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, ...updates }),
  });
  if (!response.ok) {
    throw new Error('Failed to update task');
  }
  return response.json();
}

export async function deleteTask(id: string): Promise<void> {
  const response = await fetch(`/api/tasks?id=${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete task');
  }
}