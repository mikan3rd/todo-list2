import { Record, List, fromJS } from 'immutable';

const TodoRecord = Record({
  id: null,
  text: '',
  completed: false,
  date: new Date(),
});

export default class Todo extends TodoRecord {
}
