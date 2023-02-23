// component
import Iconify from "./Iconify/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "dashboard",
    path: "/admins/app",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Users",
    path: "/admins/users",
    icon: getIcon("eva:people-fill"),
  },
  {
    title: "Collection",
    path: "/admins/collections",
    icon: getIcon("eva:shopping-bag-fill"),
  },
  {
    title: "Advertise Collection",
    path: "/admins/advertise-collection",
    icon: getIcon("mdi:advertisements"),
  },
  {
    title: "Advertise Item",
    path: "/admins/advertise-item",
    icon: getIcon("mdi:advertisements"),
  },
  {
    title: "Analytics",
    path: "/admins/google-analytic",
    icon: getIcon("akar-icons:statistic-up"),
  },
  // {
  //   title: 'Import NFT',
  //   path: '/admins/import-nft',
  //   icon: getIcon('dashicons:database-import'),
  // },
  {
    title: "INO",
    path: "/admins/step-ino",
    icon: getIcon("clarity:deploy-solid"),
  },
  {
    title: "Auction",
    path: "/admins/step-auction",
    icon: getIcon("clarity:deploy-solid"),
  },
  {
    title: "INO Request",
    path: "/admins/request-ino",
    icon: getIcon("carbon:request-quote"),
  },
  {
    title: "INOs",
    path: "/admins/inos",
    icon: getIcon("carbon:request-quote"),
  },

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
