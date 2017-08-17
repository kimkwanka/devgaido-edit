import Home from '../client/pages/Home/Home';
import About from '../client/pages/About/About';
import Edit from '../client/pages/Edit/Edit';
import StyleGuide from '../client/pages/Styleguide/Styleguide';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/edit',
    exact: true,
    component: Edit,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/styleguide',
    exact: true,
    component: StyleGuide,
  },
];

export default routes;
