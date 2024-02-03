import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import {
  BgContainer,
  LeftPanel,
  CardContainer,
  Info,
  UserInputList,
  RightPanel,
  CounterHeading,
  InputContainer,
  Input,
  AddButton,
  EmptyImage,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {userInputList: [], userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputList} = this.state
    return userInputList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputList.map(eachInput => (
        <UserInput key={eachInput.id} userInputDetails={eachInput} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <LeftPanel>
          <CardContainer>
            <Info>
              Count the characters like a <br />
              Boss...
            </Info>
          </CardContainer>
          <UserInputList>{this.renderUserInputs()}</UserInputList>
        </LeftPanel>
        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <InputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the characters here"
            />
            <AddButton>Add</AddButton>
          </InputContainer>
        </RightPanel>
      </BgContainer>
    )
  }
}

export default CharacterCounter
