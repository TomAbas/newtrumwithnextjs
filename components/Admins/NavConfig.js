// component
import Iconify from "./Iconify/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Lading Page",
    path: "/admins/landingpage",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Edit Projects",
    path: "/admins/editprojects",
    icon: getIcon("eva:people-fill"),
  },
  {
    title: "Add Projects",
    path: "/admins/addprojects",
    icon: getIcon("eva:shopping-bag-fill"),
  },
  {
    title: "Recuiter",
    path: "/admins/recuiter",
    icon: getIcon("mdi:advertisements"),
  },
  {
    title: "Company Info",
    path: "/admins/companyinfo",
    icon: getIcon("mdi:advertisements"),
  },
  // {
  //   title: "Analytics",
  //   path: "/admins/google-analytic",
  //   icon: getIcon("akar-icons:statistic-up"),
  // },
  // // {
  // //   title: 'Import NFT',
  // //   path: '/admins/import-nft',
  // //   icon: getIcon('dashicons:database-import'),
  // // },
  // {
  //   title: "INO",
  //   path: "/admins/step-ino",
  //   icon: getIcon("clarity:deploy-solid"),
  // },
  // {
  //   title: "Auction",
  //   path: "/admins/step-auction",
  //   icon: getIcon("clarity:deploy-solid"),
  // },
  // {
  //   title: "INO Request",
  //   path: "/admins/request-ino",
  //   icon: getIcon("carbon:request-quote"),
  // },
  // {
  //   title: "INOs",
  //   path: "/admins/inos",
  //   icon: getIcon("carbon:request-quote"),
  // },

  // {
  //   title: 'blog',
  //   path: '/admins/blog',
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
