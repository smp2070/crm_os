import React, {Component} from 'react';

class Button extends Component {

  constructor() {
    super();
    this.state = {
      cursorPos: {}
    }
  }

  render () {
    const className = this.props.className ? this.props.className : '';
    return (
      <button
        ref="button"
        className={`btn ${className}`}
        onMouseUp={ this.handleClick.bind(this) }
        onTouchEnd={ this.handleClick.bind(this) }
        onClick={ this.props.onClick }
        type={ this.props.type ? this.props.type : 'button' }
        disabled={ this.props.disabled }
        >
        { this.props.children }
        <Ripple cursorPos={ this.state.cursorPos } />
      </button>
    )
  }

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    }
    this.setState({ cursorPos: cursorPos })
  }

}

class Ripple extends Component {

  constructor() {
    super();
    this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
  }

  render () {
    return (
      <div className={"ripple " + (this.state.animate ? "is-reppling" : "")} ref="ripple" style={{
          top: this.state.top+"px",
          left: this.state.left+"px",
          width: this.state.width+"px",
          height: this.state.height+"px"
      }}></div>
    )
  }


  reppling(cursorPos){

    // Get the element
    let $ripple = this.refs.ripple
    let $button = $ripple.parentElement

    // let buttonStyle = window.getComputedStyle($button)
    let buttonPos = $button.getBoundingClientRect()

    let buttonWidth = $button.offsetWidth
    let buttonHeight = $button.offsetHeight

    // Make a Square Ripple
    let rippleWidthShouldBe = Math.max(buttonHeight,buttonWidth)

    // Make Ripple Position to be center
    let centerize = rippleWidthShouldBe / 2

    this.setState({
      animate: true,
      width: rippleWidthShouldBe,
      height: rippleWidthShouldBe,
      top: cursorPos.top - buttonPos.top - centerize,
      left: cursorPos.left - buttonPos.left - centerize
    })
  }

  componentWillReceiveProps(nextProps) {
    let cursorPos = nextProps.cursorPos

    // Prevent Component duplicates do ripple effect at the same time
    if(cursorPos.time !== this.props.cursorPos.time){
      // If Has Animated, set state to "false" First
      if(this.state.animate){
        this.setState({ animate: false }, () => this.reppling(cursorPos))
      }
      // else, Do Reppling
      else this.reppling(cursorPos)
    }
  }

}

export default Button;