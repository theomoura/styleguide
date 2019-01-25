import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Overlay from 'react-overlays/Overlay'

// Styles mostly from Bootstrap.
const styles = {
  tooltip: {
    position: 'absolute',
    padding: '0 5px',
    // transition: 'all 0.2s ease-out 0.2s',
  },

  inner: {
    padding: '3px 8px',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 3,
    backgroundColor: '#000',
    opacity: 0.75,
  },

  arrow: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    opacity: 0.75,
  },
}

const placementStyles = {
  left: {
    tooltip: {
      marginLeft: -3,
      padding: '0 5px',
    },

    arrow: {
      right: 0,
      borderWidth: '5px 0 5px 5px',
      borderColor: 'transparent transparent transparent #000',
    },
  },

  right: {
    tooltip: {
      marginLeft: 3,
      padding: '0 5px',
    },

    arrow: {
      left: 0,
      borderWidth: '5px 5px 5px 0',
      borderColor: 'transparent #232323 transparent transparent',
    },
  },

  top: {
    tooltip: {
      marginTop: -3,
      padding: '5px 0',
    },

    arrow: {
      bottom: 0,
      borderWidth: '5px 5px 0',
      borderColor: '#232323 transparent transparent transparent',
    },
  },

  bottom: {
    tooltip: {
      marginBottom: 3,
      padding: '5px 0',
    },

    arrow: {
      top: 0,
      borderWidth: '0 5px 5px',
      borderColor: 'transparent transparent #232323 transparent',
    },
  },
}

class Tooltip extends Component {
  state = {
    show: true,
    placement: 'left',
  }

  render() {
    const { show, placement } = this.props

    return (
      <Overlay
        show={show}
        onHide={() => this.setState({ show: false })}
        placement={placement}
        container={this}
        target={() => this.target}>
        {({ props, arrowProps, placement }) => {
          const placementStyle = placementStyles[placement]
          return (
            <div
              {...props}
              style={{
                ...styles.tooltip,
                ...placementStyle.tooltip,
                ...props.style,
              }}>
              <div
                {...arrowProps}
                style={{
                  ...styles.arrow,
                  ...placementStyle.arrow,
                  ...arrowProps.style,
                }}
              />
              <div style={{ ...styles.inner }}>
                I&rsquo;m placed to the <strong>{placement}</strong>
              </div>
            </div>
          )
        }}
      </Overlay>
    )
  }
}

Tooltip.defaultProps = {
  show: true,
  placement: 'left',
}

Tooltip.propTypes = {
  show: PropTypes.bool,
  placement: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
}

export default Tooltip
