import {TaskItem, TaskName, TagName} from './componentStyle'

const Tasks = props => {
  const {taskItem} = props
  const {task, tagName} = taskItem

  return (
    <TaskItem>
      <TaskName>{task}</TaskName>
      <TagName>{tagName}</TagName>
    </TaskItem>
  )
}

export default Tasks
