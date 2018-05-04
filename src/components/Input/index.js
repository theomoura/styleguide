import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  handleChange = event => {
    this.props.onChange && this.props.onChange(event)
  }

  handleKeyPress = event => {
    this.props.onKeyPress && this.props.onKeyPress(event)
  }

  handleFocus = event => {
    this.setState({ active: true })
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = event => {
    this.setState({ active: false })
    this.props.onBlur && this.props.onBlur(event)
  }

  render() {
    const {
      errorMessage,
      error,
      label,
      size,
      token,
      helpText,
      dataAttributes,
    } = this.props
    const { active } = this.state

    const dataAttrs = {}
    for (const key of Object.keys(dataAttributes)) {
      dataAttrs[`data-${key}`] = dataAttributes[key]
    }

    const widthClass = 'w-100'
    const box = 'ma0 border-box'
    const border = 'bw1 br2 b--solid outline-0'
    let classes = `${widthClass} ${box} ${border} `

    if (token) {
      classes += 'code '
    }

    if (this.props.disabled) {
      classes += 'bg-base-3 b--base-3 c-base-5 '
    } else {
      classes += 'hover-b--base-5 bg-base-1 c-base-8 '
      if (active) {
        classes += 'b--base-6 '
      } else {
        classes += 'b--base-4 '
      }
    }

    if (error || errorMessage) {
      classes += 'b--danger hover-b--danger '
    }

    switch (size) {
      case 'large':
        classes += 'f5 pv4 ph6 '
        // iconSize = 18
        break
      case 'x-large':
        classes += 'f4 pv5 ph7 '
        // iconSize = 22
        break
      default:
        classes += 'f6 pv3 ph5 '
        // iconSize = 16
        break
    }

    return (
      <label className="vtex-input">
        {label && (
          <span className="vtex-input__label db mb3 w-100">{label}</span>
        )}
        <input
          {...dataAttrs}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={classes}
          disabled={this.props.disabled}
          accept={this.props.accept}
          autoComplete={this.props.autoComplete}
          autoCorrect={this.props.autoCorrect}
          autoFocus={this.props.autoFocus}
          autoSave={this.props.autoSave}
          defaultValue={this.props.defaultValue}
          inputMode={this.props.inputMode}
          list={this.props.list}
          max={this.props.max}
          maxLength={this.props.maxLength}
          min={this.props.min}
          minLength={this.props.minLength}
          multiple={this.props.multiple}
          name={this.props.name}
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          required={this.props.required}
          spellCheck={this.props.spellCheck}
          src={this.props.src}
          step={this.props.step}
          tabIndex={this.props.tabIndex}
          type={this.props.type}
          value={this.props.value}
          id={this.props.id}
        />
        {errorMessage &&
          <div className="c-danger f6 mt3 lh-title">{errorMessage}</div>}
        {helpText && <div className="c-base-7 f6 mt3 lh-title">{helpText}</div>}
      </label>
    )
  }
}

Input.defaultProps = {
  autoFocus: false,
  token: false,
  dataAttributes: {},
  disabled: false,
  label: '',
  multiple: false,
  readOnly: false,
  error: false,
  size: 'regular',
}

Input.propTypes = {
  /** Error highlight */
  error: PropTypes.bool,
  /** Error message */
  errorMessage: PropTypes.string,
  /** If the input is an API Key, App Key or App Token */
  token: PropTypes.bool,
  /** Help text */
  helpText: PropTypes.node,
  /** Input size */
  size: PropTypes.oneOf(['regular', 'large', 'x-large']),
  /** Label */
  label: PropTypes.string,
  /** Spec attribute */
  accept: PropTypes.string,
  /** Spec attribute */
  disabled: PropTypes.bool,
  /** Spec attribute */
  autoComplete: PropTypes.string,
  /** Spec attribute */
  autoCorrect: PropTypes.string,
  /** Spec attribute */
  autoFocus: PropTypes.bool,
  /** Spec attribute */
  autoSave: PropTypes.string,
  /** List of data attributes as a object like `{'locale': 'en-US'}` */
  dataAttributes: PropTypes.object,
  /** Spec attribute */
  defaultValue: PropTypes.string,
  /** Spec attribute */
  id: PropTypes.string,
  /** Spec attribute */
  inputMode: PropTypes.string,
  /** Spec attribute */
  list: PropTypes.string,
  /** Spec attribute */
  max: PropTypes.string,
  /** Spec attribute */
  maxLength: PropTypes.string,
  /** Spec attribute */
  min: PropTypes.string,
  /** Spec attribute */
  minLength: PropTypes.string,
  /** Spec attribute */
  multiple: PropTypes.bool,
  /** Spec attribute */
  name: PropTypes.string,
  /** Spec attribute */
  pattern: PropTypes.string,
  /** Spec attribute */
  placeholder: PropTypes.string,
  /** Spec attribute */
  readOnly: PropTypes.bool,
  /** Spec attribute */
  required: PropTypes.string,
  /** Spec attribute */
  spellCheck: PropTypes.string,
  /** Spec attribute */
  src: PropTypes.string,
  /** Spec attribute */
  step: PropTypes.string,
  /** Spec attribute */
  tabIndex: PropTypes.string,
  /** Spec attribute */
  type: PropTypes.string,
  /** Spec attribute */
  value: PropTypes.string,
  /** onChange event */
  onChange: PropTypes.func,
  /** onKeyPress event */
  onKeyPress: PropTypes.func,
  /** onFocus event */
  onFocus: PropTypes.func,
  /** onBlur event */
  onBlur: PropTypes.func,
}

export default Input
