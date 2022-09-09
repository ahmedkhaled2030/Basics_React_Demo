import styled  , {keyframes} from 'styled-components'

export const StyledButton = styled.button`
border:2px solid #caf50c;
background-color: ${(props) => props.variant === 'outline' ? '#4caf' : '#4CAF50' };
color:white;
padding:15px 32px;
font-size:16px;
text-align: center;
&:hover{ // >> 6-Pseudo classes (active , hover ,focus ,checked)
    background-color: ${(props) => props.variant !== 'outline' ? '#4caf' : '#4CAF50' };
}
`

export const FancyButton = styled(StyledButton)`  // >> 5- Extending Styles
background-image: linear-gradient(to right ,#f6f365 0% , #fda085 100%);
`


// >> 7 - Passed Props and Adding Attributes (type: 'submit')

export const SubmitButton = styled(StyledButton).attrs((props) => ({
    // type: 'submit'
    type: props.type
}))`
background-color:blue;
color:white;
padding:15px 32px;
font-size:16px;
text-align: center;
`