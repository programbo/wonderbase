const data = {
  '/': {
    title: 'Home',
    description: '',
    keywords: '',
    shareImage: ''
  },
  '/about': {
    title: 'About',
    description: '',
    keywords: '',
    shareImage: ''
  },
  '/contact': {
    title: 'Contact',
    description: '',
    keywords: '',
    shareImage: ''
  }
};

export const defaultPageData = {
  title: '404 - Page not found',
  description: 'Page not found',
  keywords: '404',
  status: 404
};

export default (path) => data[path];
