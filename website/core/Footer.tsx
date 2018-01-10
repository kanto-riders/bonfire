import React, { PureComponent } from 'react'

type Props = {
  language: string
  config: {
    baseUrl: string
    title: string
    repoUrl: string
    footerIcon: string
  }
}

export default class Footer extends PureComponent<Props> {
  render () {
    const {
      language,
      config: { baseUrl, footerIcon, title, repoUrl }
    } = this.props
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={baseUrl} className='nav-home'>
            <img
              src={baseUrl + footerIcon}
              alt={title}
              width='66'
              height='58'
            />
          </a>
          <div>
            <h5>Docs</h5>
            <a href={baseUrl + 'docs/' + language + '/doc1.html'}>
              Getting Started (or other categories)
            </a>
            <a href={baseUrl + 'docs/' + language + '/doc2.html'}>
              Guides (or other categories)
            </a>
            <a href={baseUrl + 'docs/' + language + '/doc3.html'}>
              API Reference (or other categories)
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={baseUrl + language + '/users.html'}>User Showcase</a>
            <a
              href='http://stackoverflow.com/questions/tagged/'
              target='_blank'
            >
              Stack Overflow
            </a>
            <a href='https://discordapp.com/'>Project Chat</a>
            <a href='https://twitter.com/' target='_blank'>
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={baseUrl + 'blog'}>Blog</a>
            <a href='https://github.com/'>GitHub</a>
            <a
              className='github-button'
              href={repoUrl}
              data-icon='octicon-star'
              data-count-href='/facebook/docusaurus/stargazers'
              data-show-count={true}
              data-count-aria-label='# stargazers on GitHub'
              aria-label='Star this project on GitHub'
            >
              Star
            </a>
          </div>
        </section>

        <a
          href='https://code.facebook.com/projects/'
          target='_blank'
          className='fbOpenSource'
        >
          <img
            src={baseUrl + 'img/oss_logo.png'}
            alt='Facebook Open Source'
            width='170'
            height='45'
          />
        </a>
        <section className='copyright'>
          Copyright &copy; {new Date().getFullYear()} Facebook Inc.
        </section>
      </footer>
    )
  }
}
