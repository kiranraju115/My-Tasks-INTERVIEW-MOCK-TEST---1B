import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ThumbNails from '../ThumbNails'
import Tasks from '../Tasks'

import {
  BgContainer,
  FormCard,
  Heading,
  FormElement,
  LabelElement,
  InputElement,
  SelectElement,
  OptionElement,
  ButtonCard,
  AddButton,
  TagsTasksCard,
  TagsCard,
  TasksCard,
} from './componentStyle'

class MyTasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasksList: [],
      task: '',
      tagId: props.tagsList[0].optionId,
      isActiveTag: '',
    }
  }

  onChangeOfTask = event => {
    this.setState({task: event.target.value})
  }

  onTagChange = event => {
    this.setState({tagId: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {task, tagId} = this.state

    const {tagsList} = this.props
    const tagDisplayText = tagsList.filter(
      eachItem => eachItem.optionId === tagId,
    )
    this.setState(prevState => ({
      tasksList: [
        ...prevState.tasksList,
        {task, tagName: tagDisplayText[0].displayText, tagId, id: uuidv4()},
      ],
      task: '',
      tagId: tagsList[0].optionId,
    }))
  }

  onThumbNail = id => {
    const {isActiveTag} = this.state
    if (isActiveTag === id) {
      this.setState({isActiveTag: ''})
    } else {
      this.setState({isActiveTag: id})
    }
  }

  getList = () => {
    const {tasksList, isActiveTag} = this.state
    const filteredList = tasksList.filter(eachItem =>
      eachItem.tagId.includes(isActiveTag),
    )
    return filteredList
  }

  render() {
    const {task, tagId, isActiveTag} = this.state
    const {tagsList} = this.props
    const filteredTasks = this.getList()
    console.log(filteredTasks)

    return (
      <BgContainer>
        <FormCard>
          <Heading>Create a task</Heading>
          <FormElement onSubmit={this.onAddButton}>
            <LabelElement htmlFor="task-id">Task</LabelElement>
            <InputElement
              placeholder="Enter the Task here"
              type="text"
              id="task-id"
              value={task}
              onChange={this.onChangeOfTask}
            />
            <LabelElement htmlFor="tag-id">Tags</LabelElement>
            <SelectElement
              value={tagId}
              onChange={this.onTagChange}
              id="tag-id"
            >
              {tagsList.map(eachTag => (
                <OptionElement key={eachTag.optionId} value={eachTag.optionId}>
                  {eachTag.displayText}
                </OptionElement>
              ))}
            </SelectElement>
            <ButtonCard>
              <AddButton type="submit">Add Task</AddButton>
            </ButtonCard>
          </FormElement>
        </FormCard>
        <TagsTasksCard>
          <Heading>Tags</Heading>
          <TagsCard>
            {tagsList.map(eachItem => (
              <ThumbNails
                key={eachItem.optionId}
                thumbNail={eachItem}
                onThumbNail={this.onThumbNail}
                isThumbActive={eachItem.optionId === isActiveTag}
              />
            ))}
          </TagsCard>
          <Heading>Tasks</Heading>
          <TasksCard>
            {filteredTasks.map(eachItem => (
              <Tasks key={eachItem.id} taskItem={eachItem} />
            ))}
          </TasksCard>
          {filteredTasks.length === 0 && (
            <Heading as="p" apply>
              No Tasks Added Yet
            </Heading>
          )}
        </TagsTasksCard>
      </BgContainer>
    )
  }
}

export default MyTasks
