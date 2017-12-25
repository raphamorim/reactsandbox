import React from 'react'
import jsxToString from 'jsx-to-string'
import {
  compose,
  withHandlers,
  setDisplayName,
  withState,
  lifecycle,
  enhance,
} from 'recompose'
import parseReactElement from './parseReactElement'

const Sandbox = ({ Component, propsComponent, controls }) => {
  Component = (Component) ? <Component {...propsComponent}/> : null
  let code;
  if (Component) {
    code = jsxToString(Component)
  }

  return (
    <div className='reactsandbox'>
      <div className='reactsandbox-sandbox'>
        {Component}
      </div>
      <div className='reactsandbox-controls'>
        {controls}
      </div>
      <div className='reactsandbox-code'>
        <pre>{code}</pre>
      </div>
    </div>
  )
}

function withSandbox(Component, config) {
  const SandboxWithState = compose(
    setDisplayName('Sandbox'),
    lifecycle({
      componentDidMount() {
        const propsComponent = {}
        const controls = []
        const keys = Object.keys(config)

        keys.forEach((prop, index) => {
          const { value, description, type } = config[prop]
          let Input = () => <div></div>

          if (type === 'boolean') {
            const BooleanInput = ({checked, setChecked}) => (
              <input type={'checkbox'} checked={checked}
                onChange={() => {
                    setChecked(n => !n);
                    const { propsComponent } = this.state
                    propsComponent[prop] = !propsComponent[prop]
                    this.setState({propsComponent})
                  }
                }
              />
            )
            Input = compose(withState('checked', 'setChecked', value))(BooleanInput)
          }

          if (type === 'string' || type === 'number') {
            const StringInput = ({inputValue, setInputValue}) => (
              <input type={'text'} value={inputValue}
                onChange={(evt) => {
                  setInputValue(evt.target.value)
                  const { propsComponent } = this.state
                  propsComponent[prop] = evt.target.value
                  this.setState({propsComponent})
                }}
              />
            )
            Input = compose(withState('inputValue', 'setInputValue', value))(StringInput)
          }

          if (type === 'reactelement') {
            const StringInput = ({inputValue, setInputValue}) => (
              <input type={'text'} value={inputValue}
                onChange={(evt) => {
                  setInputValue(evt.target.value)
                  const { propsComponent } = this.state
                  propsComponent[prop] = parseReactElement(evt.target.value)
                  this.setState({propsComponent})
                }}
              />
            )
            Input = compose(withState('inputValue', 'setInputValue', config[prop].rawValue))(StringInput)
          }

          propsComponent[prop] = value
          controls.push(
            <div className='control' key={index}>
              <div className='control-switch'>
                <div className='control-prop'>
                  {keys[index]}
                </div>
                <Input/>
              </div>
              <div className='control-description'>
                {description}
              </div>
            </div>
          )
        })

        this.setState({ propsComponent, Component, controls })
      }
    }),
  )(Sandbox)

  return SandboxWithState
}

export default withSandbox;
