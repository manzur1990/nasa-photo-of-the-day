import styled from 'styled-components'



const Container = styled.div `
color:${props =>(props.color = 'blue' || 'red')};
font-size: 35px;
border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 16px;
  padding: 16px 8px 12px 16px;
`

export default Container;
