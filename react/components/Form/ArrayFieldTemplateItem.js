import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { SortableElement, SortableHandle } from 'react-sortable-hoc'
import { Transition } from 'react-spring'
import { path } from 'ramda'

import Button from '../Button'
import IconDragHandle from '../icon/DragHandle'
import IconCaretDown from '../icon/CaretDown'
import IconCaretUp from '../icon/CaretUp'
import IconDelete from '../icon/Delete'

const stopPropagation = fn => e => {
  e.stopPropagation()
  return fn(e)
}

const Handle = SortableHandle(() => (
  <IconDragHandle size={12} className="dn absolute left-1 pa1" />
))

class ArrayFieldTemplateItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    formIndex: PropTypes.number,
    hasRemove: PropTypes.bool,
    onDropIndexClick: PropTypes.func,
    schema: PropTypes.object,
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    showDragHandle: PropTypes.bool,
  }

  handleLabelClick = e => {
    const { isOpen, onOpen, onClose } = this.props

    if (isOpen) {
      onClose(e)
    } else {
      onOpen(e)
    }
  }

  renderChildren = styles => {
    const { children } = this.props

    return (
      <div style={styles}>
        {children}
      </div>
    )
  }

  render() {
    const {
      children,
      schema,
      formIndex,
      hasRemove,
      onDropIndexClick,
      isOpen,
      showDragHandle,
    } = this.props

    // default title using item index is used if your array schema object does not have a "label" property
    const itemLabel = path(['items', 'label'], schema)
    const itemsDefaultLabel = path(['items', 'default'], schema)
    const title = itemLabel ? `${itemLabel} # ${formIndex}` : itemsDefaultLabel || `Item # ${formIndex}`

    return (
      <div className="mv2 bb b--light-silver bg-action-secondary hover-bg-adction-primary br2">
        <div className="accordion-label flex flex-row items-center justify-between" onClick={this.handleLabelClick}>
          <div className="ml3 justify-start">
            {showDragHandle && <Handle />}
            <label className="f6 pointer b ml4">
              {title}
            </label>
          </div>
          <div className="flex justify-end items-center">
            <div className="mr5 hover-c-link">
              {isOpen
                ? <IconCaretUp size={15} />
                : <IconCaretDown size={15} />
              }
            </div>
            {hasRemove && (
              <Button
                icon
                variation="tertiary"
                size="small"
                onClick={stopPropagation(onDropIndexClick(formIndex))}
              >
                <IconDelete size={15} />
              </Button>
            )}
          </div>
        </div>
        <div
          className={`accordion-content ${isOpen ? 'accordion-content--open' : ''}`}
        >
          <Transition
            keys={isOpen ? ['children'] : []}
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 'auto' }}
            leave={{ opacity: 0, height: 0 }}
          >
            {isOpen ? [this.renderChildren] : []}
          </Transition>
        </div>
      </div>
    )
  }
}

export default SortableElement(ArrayFieldTemplateItem)
