const React = require('react')

module.exports = function Footer ({
  language,
  config: { baseUrl, footerIcon, title, repoUrl }
}) {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='nav-footer' id='footer'>
      <section className='sitemap'>
        <a href={baseUrl} className='nav-home'>
          <img src={baseUrl + footerIcon} alt={title} width='66' height='58' />
        </a>
        <div>
          <h5>Docs</h5>
          <a href={baseUrl + 'docs/' + language + '/items.html'}>Items</a>
        </div>
        <div>
          <h5>Community</h5>
          <a href='https://kanto-riders.slack.com/'>Project Chat</a>
        </div>
        <div>
          <h5>More</h5>
          <a href={baseUrl + 'blog'}>Blog</a>
          <a href='https://github.com/kanto-riders/bonfire/'>GitHub</a>
          <a
            className='github-button'
            href={repoUrl}
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
