'use strict';

module.exports = {
  url: 'https://razumau.net',
  pathPrefix: '/',
  title: 'Jury Razumau',
  subtitle: '',
  copyright: '',
  disqusShortname: '',
  postsPerPage: 10,
  useKatex: false,
  menu: [
    {
      label: 'Posts',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Jury Razumau',
    photo: '/photo.jpg',
    bio: 'Software engineer from Belarus living in Kraków',
    contacts: {
      email: 'mail@razumau.net',
      twitter: 'razumau',
      github: 'razumau',
      rss: 'https://razumau.net/rss.xml',
    }
  }
};
