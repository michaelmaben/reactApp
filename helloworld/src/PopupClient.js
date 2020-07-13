import React, {Component} from 'react';
import Popup from 'terra-popup';


class PopupClient extends Component{
  constructor(props){
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.state = {
      open: true
    }
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
  }

  handleButtonClick(){
    console.log('click me')
    return {
      open: true
    }
  }

  handleRequestClose(){
    return {
      open: false
    }
  }

  getButtonNode(){
    return this.buttonNode;
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  componentDidMount() {
      this.forceUpdate();
  }
  render(){

      return(
        <div>
          <Popup
            isOpen={true}
            onRequestClose = { this.handleRequestClose() }
            targetRef = { this.getButtonNode }
            isArrowDisplayed
          >
          </Popup>
          <span ref={this.setButtonNode}>
            <button id ="close_button" onClick= {this.handleButtonClick}> close </button>
          </span>

        </div>
      )
  }
}

export default PopupClient;
