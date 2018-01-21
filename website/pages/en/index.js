const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(process.cwd() + '/siteConfig.js')

class Button extends React.Component {
  render () {
    return (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: '_self'
}

class HomeSplash extends React.Component {
  render () {
    return (
      <div className='homeContainer'>
        <div className='homeSplashFade'>
          <div className='wrapper homeWrapper'>
            <div className='projectLogo'>
              <img src={siteConfig.baseUrl + 'img/takibi.png'} />
            </div>
            <div className='inner'>
              <h2 className='projectTitle'>
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
              </h2>
              <div className='section promoSection'>
                <div className='promoRow'>
                  <div className='pluginRowBlock'>
                    <Button href={`${siteConfig.baseUrl}docs/items.html`}>
                      Items
                    </Button>
                    <Button href={`${siteConfig.baseUrl}/docs/campsite.html`}>
                      Campsite
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = class Index extends React.Component {
  render () {
    const language = this.props.language || 'en'

    return (
      <div>
        <HomeSplash language={language} />
        <div className='mainContainer'>
          <Container padding={['bottom', 'top']}>
            <GridBlock
              align='center'
              contents={[
                {
                  content: '走る',
                  image: siteConfig.baseUrl + 'img/bike_helmet_man.png',
                  imageAlign: 'top',
                  title: 'touring'
                },
                {
                  content: '野で戯れる',
                  image: siteConfig.baseUrl + 'img/camp_hifukibou_man.png',
                  imageAlign: 'top',
                  title: 'Camp'
                }
              ]}
              layout='fourColumn'
            />
          </Container>

          <div className='productShowcaseSection paddingBottom'>
            <h2>Who's Using This?</h2>
            <p>This project is used by all these people</p>
            <div className='more-users'>
              <a
                className='button'
                href={siteConfig.baseUrl + language + '/' + 'users.html'}
              >
                More {siteConfig.title} Users
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
