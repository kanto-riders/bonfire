const React = require('react')
const {
  Container,
  GridBlock,
  MarkdownBlock
} = require('../../core/CompLibrary')

const { HomeSplash } = require(`${process.cwd()}/core/HomeSplash`)
const { baseUrl, title, users } = require(`${process.cwd()}/siteConfig.js`)

type Props = {
  language: string
}

module.exports = class Index extends React.PureComponent<Props> {
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
      <div>
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
      </div>
    )
  }
}
