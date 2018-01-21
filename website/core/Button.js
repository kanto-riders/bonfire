'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const React = require('react')
class Button extends React.PureComponent {
  render () {
    const { children, href, target } = this.props
    return (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={href} target={target}>
          {children}
        </a>
      </div>
    )
  }
}
Button.defaultProps = { target: '_self' }
exports.Button = Button
