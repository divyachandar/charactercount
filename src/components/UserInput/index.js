import {UserInputItem, UserEnteredDetails} from './styledComponents'

const UserInput = props => {
  const {userInputDetails} = props
  const {userText, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userText}:{textLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}

export default UserInput
