import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { calcIconSize, baseClassname } from '../utils'

const iconBase = {
  width: 6,
  height: 12,
}

class DragHandle extends PureComponent {
  render() {
    const { color, size, block } = this.props
    const newSize = calcIconSize(iconBase, size)

    return (
      <svg
        className={`${baseClassname('drag-handle')} ${block ? 'db' : ''}`}
        width={newSize.width}
        height={newSize.height}
        viewBox="0 0 6 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="1" cy="1" r="1" transform="translate(4)" fill={color} />
        <circle cx="1" cy="1" r="1" transform="translate(4 5)" fill={color} />
        <circle cx="1" cy="1" r="1" transform="translate(4 10)" fill={color} />
        <circle cx="1" cy="1" r="1" fill={color} />
        <circle cx="1" cy="1" r="1" transform="translate(0 5)" fill={color} />
        <circle cx="1" cy="1" r="1" transform="translate(0 10)" fill={color} />
      </svg>
    )
  }
}

DragHandle.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false,
}

DragHandle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  block: PropTypes.bool,
}

export default DragHandle
