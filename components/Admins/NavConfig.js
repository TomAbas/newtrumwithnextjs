// component
import Iconify from "./Iconify/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Lading Page",
    path: "/admin/landingpage",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Edit Projects",
    path: "/admin/editprojects",
    icon: getIcon("eva:people-fill"),
  },
  {
    title: "Add Projects",
    path: "/admin/addprojects",
    icon: getIcon("eva:shopping-bag-fill"),
  },
  {
    title: "Recuiter",
    path: "/admin/recuiter",
    icon: getIcon("mdi:advertisements"),
  },
  {
    title: "Company Info",
    path: "/admin/companyinfo",
    icon: getIcon("mdi:advertisements"),
  },
  // {
  //   title: "Analytics",
  //   path: "/admin/google-analytic",
  //   icon: getIcon("akar-icons:statistic-up"),
  // },
  // // {
  // //   title: 'Import NFT',
  // //   path: '/admin/import-nft',
  // //   icon: getIcon('dashicons:database-import'),
  // // },
  // {
  //   title: "INO",
  //   path: "/admin/step-ino",
  //   icon: getIcon("clarity:deploy-solid"),
  // },
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
