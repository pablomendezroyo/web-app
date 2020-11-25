export interface TodoTask {
  id: string;
  name: string;
  completed: boolean;
  description?: string;
}

export interface state {
  response: string;
  post: string;
  responseToPost: string;
}
