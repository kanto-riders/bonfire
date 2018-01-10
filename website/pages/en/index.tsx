import {
  Container,
  GridBlock,
  MarkdownBlock
} from 'docusaurus/lib/core/CompLibrary'
import React, { Fragment, PureComponent } from 'react'

import { HomeSplash } from '../../components/HomeSplash'
import { baseUrl, title, users } from '../../siteConfig'

type Props = {
  language: string
}

export class Index extends PureComponent<Props> {
  render () {
    const showcase = users
      .filter(user => {
        return user.pinned
      })
      .map((user, i) => (
        <a key={i} href={user.infoLink}>
          <img src={user.image} title={user.caption} />
        </a>
      ))

    return (
      <Fragment>
        <HomeSplash />
        <div className='mainContainer'>
          <Container padding={['bottom', 'top']}>
            <GridBlock
              align='center'
              contents={[
                {
                  content: 'This is the content of my feature',
                  image: baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'top',
                  title: 'Feature One'
                },
                {
                  content: 'The content of my second feature',
                  image: baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'top',
                  title: 'Feature Two'
                }
              ]}
              layout='fourColumn'
            />
          </Container>

          <div
            className='productShowcaseSection paddingBottom'
            style={{ textAlign: 'center' }}
          >
            <h2>Feature Callout</h2>
            <MarkdownBlock>These are features of this project</MarkdownBlock>
          </div>

          <Container padding={['bottom', 'top']} background='light'>
            <GridBlock
              contents={[
                {
                  content: 'Talk about learning how to use this',
                  image: baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'right',
                  title: 'Learn How'
                }
              ]}
            />
          </Container>

          <Container padding={['bottom', 'top']} id='try'>
            <GridBlock
              contents={[
                {
                  content: 'Talk about trying this out',
                  image: baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'left',
                  title: 'Try it Out'
                }
              ]}
            />
          </Container>

          <Container padding={['bottom', 'top']} background='dark'>
            <GridBlock
              contents={[
                {
                  content:
                    'This is another description of how this project is useful',
                  image: baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'right',
                  title: 'Description'
                }
              ]}
            />
          </Container>

          <div className='productShowcaseSection paddingBottom'>
            <h2>{"Who's Using This?"}</h2>
            <p>This project is used by all these people</p>
            <div className='logos'>{showcase}</div>
            <div className='more-users'>
              <a className='button' href=''>
                More {title} Users
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
