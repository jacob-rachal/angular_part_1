// export class MockTodos {
// }

// import { Todo } from '../models/todo';
//day 4
import { TodoInterface } from '../interfaces/todo-interface';

export const TODOS : TodoInterface[] = [
  { id: 1, name: 'Take out trash', tags: ['Weekly'] },
  { id: 2, name: 'Take out recycling', tags: ['Daily', 'Weekly', 'Monthly'] },
  { id: 3, name: 'Clean & sweep the pool', tags: ['Biweekly', 'Monthly'] },
  { id: 4, name: 'Unload the dishwasher', tags: ['Weekly'] },
  { id: 5, name: 'Mow the lawn', tags: ['Biweekly', 'Monthly'] }
];
