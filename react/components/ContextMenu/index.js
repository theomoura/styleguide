import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import Menu from '../Menu'
import IconOptionsDots from '../icon/OptionsDots'

export default class ContextMenu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleIconClick = () => {
    const { isOpen } = this.state
    if (isOpen) {
      document.removeEventListener('mousedown', this.handleClickOutside)
    } else {
      document.addEventListener('mousedown', this.handleClickOutside)
    }
    this.setState({ isOpen: !isOpen })
  }

  handleClickOutside = e => {
    if (
      this.menuBtnRef &&
      this.menuBtnRef.current &&
      !this.menuBtnRef.current.contains(e.target) &&
      this.state.isOpen
    ) {
      this.handleIconClick()
    }
  }

  render() {
    const { options, align, boxWidth } = this.props
    const { isOpen } = this.state

    return (
      <Fragment>
        <div style={{ cursor: 'pointer' }} onClick={this.handleIconClick}>
          <IconOptionsDots />
        </div>
        <Menu
          isOpen={isOpen || false}
          align={align}
          boxWidth={boxWidth}
          options={options}
        />
      </Fragment>
    )
  }
}

ContextMenu.propTypes = {
  /** Menu Box width (default is 292px) */
  boxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Menu options */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      handleCallback: PropTypes.func,
      /** whether option has inline toggle */
      toggle: PropTypes.shape({
        checked: PropTypes.bool,
        semantic: PropTypes.bool,
      }),
      /** if clicking on this opption should close the box */
      closeBoxOnClick: PropTypes.bool,
    })
  ),
  /** Menu Box align (default is right) */
  align: PropTypes.oneOf(['right', 'left']),
}
