import styled from 'styled-components'

export const TaskItem = styled.li`
  width: 100%;
  background-color: #1a171d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 10px;
  margin: 10px 0px 0px 0px;
`
export const TaskName = styled.p`
  font-family: 'Robot';
  color: #f8fafc;
  font-weight: 500;
  font-size: 20px;
`
export const TagName = styled(TaskName)`
  background-color: #f3aa4e;
  border-radius: 20px;
  padding: 10px;
`
