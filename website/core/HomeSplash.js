'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const React = require('react')
const { Button } = require(`${process.cwd()}/core/Button`)
const { baseUrl, tagline, title } = require(`${process.cwd()}/siteConfig`)
class HomeSplash extends React.PureComponent {
  render () {
    return (
      <div className='homeContainer'>
        <div className='homeSplashFade'>
          <div className='wrapper homeWrapper'>
            <div className='projectLogo'>
              <img src={baseUrl + 'img/takibi.png'} />
            </div>
            <div className='inner'>
              <h2 className='projectTitle'>
                {title}
                <small>{tagline}</small>
              </h2>
              <div className='section promoSection'>
                <div className='promoRow'>
                  <div className='pluginRowBlock'>
                    <Button href='#try'>Try It Out</Button>
                    <Button href=''>Example Link</Button>
                    <Button href=''>Example Link 2</Button>
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
exports.HomeSplash = HomeSplash
