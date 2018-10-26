import * as React from 'react'
import { observer } from 'mobx-react'

@observer
export default class MobxDemo extends React.Component {

  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map(todo =>
            <TodoView todo={todo}
                      key={todo.id}/>
          )}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    )
  }

}

const TodoView = observer(({ todo }) =>
  <li>
    <input type="checkbox"
           checked={todo.finished}
           onClick={() => todo.finished = !todo.finished}/>{todo.title}
  </li>
)