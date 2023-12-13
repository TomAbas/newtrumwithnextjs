// component
import Iconify from './Iconify/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Lading Page',
    path: '/admin/landingpage',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Edit Projects',
    path: '/admin/editprojects',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Add Projects',
    path: '/admin/addprojects',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Recuiter',
    path: '/admin/recuiter',
    icon: getIcon('mdi:advertisements'),
  },
  {
    title: 'Company Info',
    path: '/admin/companyinfo',
    icon: getIcon('mdi:advertisements'),
  },
  {
    title: 'About us',
    path: '/admin/about-us',
    icon: getIcon('akar-icons:statistic-up'),
  },
  {
    title: 'Service',
    path: '/admin/service',
    icon: getIcon('dashicons:database-import'),
  },
  {
    title: 'Industry Recognition',
    path: '/admin/industry-recognition',
    icon: getIcon('dashicons:database-import'),
  },
  {
    title: 'Comment',
    path: '/admin/comment',
    icon: getIcon('dashicons:database-import'),
  },
  {
    title: "Reason",
    path: "/admin/reason",
    icon: getIcon("clarity:deploy-solid"),
  },
  {
    title: "News",
    path: "/admin/news",
    icon: getIcon("clarity:deploy-solid"),
  },
  // {
  //   title: "Auction",
  //   path: "/admin/step-auction",
  //   icon: getIcon("clarity:deploy-solid"),
  // },
  // {
  //   title: "INO Request",
  //   path: "/admin/request-ino",
  //   icon: getIcon("carbon:request-quote"),
  // },
  // {
  //   title: "INOs",
  //   path: "/admin/inos",
  //   icon: getIcon("carbon:request-quote"),
  // },

  // {
  //   title: 'blog',
  //   path: '/admin/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },

  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
