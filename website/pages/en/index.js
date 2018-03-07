const React = require('react')
const { translate } = require('../../server/translate.js')
const { Container, GridBlock } = require('../../core/CompLibrary.js')
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

function HomeSplash ({ language }) {
  return (
    <div className='homeContainer'>
      <div className='homeSplashFade'>
        <div className='wrapper homeWrapper'>
          <div className='projectLogo'>
            <img src={siteConfig.baseUrl + 'img/bg_home.png'} />
          </div>
          <div className='inner'>
            <h2 className='projectTitle'>
              {siteConfig.title}
              <small>{siteConfig.tagline}</small>
            </h2>
            <div className='section promoSection'>
              <div className='promoRow'>
                <div className='pluginRowBlock'>
                  <Button
                    href={`${siteConfig.baseUrl}docs/${language}/items.html`}
                    class='red'
                  >
                    <translate>Items</translate>
                  </Button>
                  <Button
                    href={`${siteConfig.baseUrl}docs/${language}/campsite.html`}
                  >
                    <translate>Campsite</translate>
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

module.exports = function Index ({ language }) {
  language = language || 'ja'

  return (
    <div>
      <HomeSplash language={language} />
      <div className='mainContainer'>
        <Container className='introSection productShowcaseSection'>
          <GridBlock
            align='center'
            contents={[
              {
                content: <translate>走る</translate>,
                image: siteConfig.baseUrl + 'img/icon_intro1.png',
                imageAlign: <translate>top</translate>,
                title: <translate>touring</translate>
              },
              {
                content: <translate>野で戯れる</translate>,
                image: siteConfig.baseUrl + 'img/icon_intro2.png',
                imageAlign: <translate>top</translate>,
                title: <translate>Camp</translate>
              }
            ]}
            layout='fourColumn'
          />
        </Container>

        <div className='userSection productShowcaseSection lightBackground'>
          <h2>
            <translate>Who's Using This?</translate>
          </h2>
          <p>
            <translate>This project is used by all these people</translate>
          </p>
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
