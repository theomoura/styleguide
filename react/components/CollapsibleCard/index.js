import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'
import CaretDown from '../icon/CaretDown'
import CaretUp from '../icon/CaretUp'

export default class CollapsibleCard extends Component {
  state = {
    open: false,
  }

  static defaultProps = {
    openIcon: CaretDown,
    closeIcon: CaretUp,
  }

  static propTypes = {
    /** Label */
    label: PropTypes.node.isRequired,
    /** Content of the card (initially hidden) */
    children: PropTypes.node.isRequired,
    /** Icon shown when the card is closed */
    openIcon: PropTypes.any,
    /** Icon shown when the card is opened */
    closeIcon: PropTypes.any,
  }

  handleClick = e => {
    e.preventDefault()

    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const { label, children, openIcon: OpenIcon, closeIcon: CloseIcon } = this.props
    const { open } = this.state

    return (
      <div className="vtex-collapsible-card">
        <Card>
          <h2 className="ma0 c-on-base f4 normal flex justify-between w-100 items-center pointer">
            <button style={{ all: 'inherit' }} onClick={this.handleClick} aria-expanded={open}>
              {label}

              <div className="c-action-primary" aria-hidden="true" focusable="false">
                {!open ? <OpenIcon /> : <CloseIcon />}
              </div>
            </button>
          </h2>
          <div className="pa5 mt6 nh6 nb6 c-muted-1 bt b--muted-5" hidden={!open}>
            {children}
          </div>
        </Card>
      </div>
    )
  }
}