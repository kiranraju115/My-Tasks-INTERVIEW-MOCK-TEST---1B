import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
`

export const FormCard = styled.div`
  width: 50%;
  background-color: #1a171d;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.apply ? '#f8fafc' : '#f3aa4e')};
  font-weight: 500;
  font-size: 30px;
  text-align: ${props => (props.apply ? 'center' : 'left')};
  width: ${props => (props.apply ? '100%' : 'auto')};
`

export const FormElement = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const LabelElement = styled.label`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 15px;
`

export const InputElement = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  font-family: 'Roboto';
  color: #131213;
  font-weight: 400;
  font-size: 14px;
  outline: none;
  margin-bottom: 15px;
  padding-left: 10px;
`
export const SelectElement = styled.select`
  width: 100%;
  height: 30px;
  border: none;
  font-family: 'Roboto';
  color: #131213;
  font-weight: 400;
  font-size: 14px;
  outline: none;
  margin-bottom: 15px;
  padding-left: 10px;
`

export const OptionElement = styled.option``

export const ButtonCard = styled.div`
  width: 100%;
`
export const AddButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f3aa4e;
  border: none;
  border-radius: 10px;
  font-family: 'Roboto';
  color: #f8f8f8;
  font-weight: 500;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  margin: auto;
`
export const TagsTasksCard = styled.div`
  width: 50%;
  height: 100%;
  background-color: #131213;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
`
export const TagsCard = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TasksCard = styled(TagsCard)`
  align-items: flex-start;
  flex-direction: column;
`
