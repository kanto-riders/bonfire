import React, { PureComponent } from 'react'

type Props = {
  href: any
  target?: any
  children: any
}

export class Button extends PureComponent<Props> {
  public static defaultProps = { target: '_self' }
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
