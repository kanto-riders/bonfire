import React, { PureComponent } from 'react'

import { Container } from 'docusaurus/lib/core/CompLibrary'

import { users } from '../../siteConfig'

export class Users extends PureComponent {
  render () {
    const showcase = users.map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      )
    })

    return (
      <div className='mainContainer'>
        <Container padding={['bottom', 'top']}>
          <div className='showcaseSection'>
            <div className='prose'>
              <h1>Who's Using This?</h1>
              <p>This project is used by many folks</p>
            </div>
            <div className='logos'>{showcase}</div>
            <p>Are you using this project?</p>
            <a
              href='https://github.com/facebook/docusaurus/edit/master/website/siteConfig.js'
              className='button'
            >
              Add your company
            </a>
          </div>
        </Container>
      </div>
    )
  }
}
