import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import NotFound from './components/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    id: 'home',
  },
  {
    path: '/about',
    component: About,
    id: 'about',
  },
  {
    path: '/Topics',
    component: Topics,
    id: 'posts',
  },
  {
    component: NotFound,
    id: 'not_found',
  },
];

export default routes;