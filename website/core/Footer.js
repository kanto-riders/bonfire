const React = require('react')

class Footer extends React.Component {
  render () {
    const currentYear = new Date().getFullYear()
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={this.props.config.baseUrl} className='nav-home'>
            <img
              src={this.props.config.baseUrl + this.props.config.footerIcon}
              alt={this.props.config.title}
              width='66'
              height='58'
            />
          </a>
          <div>
            <h5>Docs</h5>
            <a
              href={
                this.props.config.baseUrl +
                'docs/' +
                this.props.language +
                '/items.html'
              }
            >
              Items
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href='https://kanto-riders.slack.com/'>Project Chat</a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href='https://github.com/kanto-riders/bonfire/'>GitHub</a>
            <a
              className='github-button'
              href={this.props.config.repoUrl}
              data-icon='octicon-star'
              data-count-href='/kanto-riders/bonfire/'
              data-show-count
              data-count-aria-label='# stargazers on GitHub'
              aria-label='Star this project on GitHub'
            >
              Star
            </a>
          </div>
        </section>

        <section className='copyright'>
          Copyright &copy; {currentYear} Kanto Riders.
        </section>
      </footer>
    )
  }
}

module.exports = Footer
