import { combineReducers } from 'redux';
import {
  CREATE_TODO,
} from './actions';

var getId = function (state) {
  return state.todos.reduce(function (maxId, todo) {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
};

const todoState ={
  todos:[{
  id:0,
  completed:false,
  text:"First Todo",
},{
id:1,
completed:false,
text:"Second Todo",
}]
};
function todo(state = todoState , action) {

  switch (action.type) {
    case CREATE_TODO:
      return Object.assign({},state, {
        todos:[...state.todos,{
          id: getId(state),
          completed: false,
          text: action.text
        }]
      });

    default:{
      //console.log(state);
      return state;
    }
  }
};
const reducer = todo;
export default reducer;
