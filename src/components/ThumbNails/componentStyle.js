import styled from 'styled-components'

export const TagItem = styled.li``

export const ThumbButton = styled.button`
  height: 30px;
  background-color: ${props =>
    props.isThumbActive ? '#f3aa4e' : 'transparent'};
  border: ${props => (props.isThumbActive ? 'none' : '1px solid #f3aa4e')};
  border-radius: 10px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  cursor: pointer;
`
