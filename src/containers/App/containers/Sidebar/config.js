import { PATHS } from '@/containers/App/constants';

export const MAIN_MENU_WIDTH = {
  XXXL: 120,
  XXL: 110,
  XL: 100,
  MD: 90,
  SM: 90,
};

export const SUB_MENU_WIDTH = {
  XXXL: 230,
  XXL: 230,
  XL: 230,
  MD: 230,
  SM: 230,
};

export const mainMenuData = [
  {
    label: 'Dashboards',
    icon: 'icon-shop-house',
    href: PATHS.DASHBOARDS,
    redirect: false,
  },
  {
    label: 'Pages',
    icon: 'icon-computer',
    href: PATHS.PAGES,
    redirect: false,
  },
  {
    label: 'Applications',
    icon: 'icon-application',
    href: PATHS.APPLICATIONS,
    redirect: false,
  },
  {
    label: 'UI',
    icon: 'icon-pantone',
    href: PATHS.UI,
    redirect: false,
  },
  {
    label: 'Menu',
    icon: 'icon-tree-menu',
    href: PATHS.MENU,
    redirect: false,
  },
];
