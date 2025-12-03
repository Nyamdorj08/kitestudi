import type { NavSectionProps } from 'src/components/nav-section';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------
import { SvgColor } from 'src/components/svg-color';

import { Label } from 'src/components/label';

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
  giftcard: icon('ic-giftcard'),
  newspaper: icon('ic-newspaper'),
  qrcode: icon('ic-qr-code'),
};

// ----------------------------------------------------------------------

export const navData: NavSectionProps['data'] = [
  /**
   * Overview
   */
  {
    subheader: 'Нүүр',
    items: [
      { title: 'Хянах самбар', path: paths.dashboard.root, icon: ICONS.blog },
      // { title: 'Three', path: paths.dashboard.three, icon: ICONS.analytics },
    ],
  },
  {
    subheader: 'Үйл ажиллагаа',
    items: [
      {
        title: 'Холбоосууд',
        path: paths.dashboard.root + '/links',
        icon: ICONS.external,
        children: [
          { title: 'Холбоосын жагсаалт', path: paths.dashboard.root + '/links' },
          { title: 'Шинэ холбоос үүсгэх', path: paths.dashboard.root + '/links/create' },
          { title: 'Wi-fi QR', path: paths.dashboard.root + '/qr/wifi', info: <Label>Шинэ</Label> },
        ],
      },
      // {
      //   title: 'QR код',
      //   path: paths.dashboard.root + '/qr',
      //   icon: ICONS.qrcode,
      //   // info: <Label>v{CONFIG.appVersion}</Label>,
      //   children: [
      //     { title: 'QR Жагсаалт', path: paths.dashboard.root + '/qr' },
      //     { title: 'Шинэ QR үүсгэх', path: paths.dashboard.root + '/qr/create' },
      //   ],
      // },
      {
        title: 'Аналитик',
        path: paths.dashboard.root + '/qr',
        icon: ICONS.analytics,
        children: [
          { title: 'Холбоосын Аналитик', path: paths.dashboard.root + '/analytics/links' },
        ],
      },

      // {
      //   title: 'Домайн нэр',
      //   path: paths.dashboard.root + '/domains',
      //   icon: ICONS.menuItem,
      //   info: <Label>Шинэ</Label>,
      //   children: [{ title: 'Миний домайн нэрүүд', path: paths.dashboard.root + '/domains' }],
      // },
    ],
  },

  {
    subheader: 'Төлбөр & Захиалга',
    items: [
      { title: 'Гишүүнчлэл', path: paths.dashboard.root + '/pricing', icon: ICONS.order },
      // { title: 'Миний төлбөрүүд', path: paths.dashboard.root + '/my/billing', icon: ICONS.invoice },
      // {
      //   title: 'Хөнгөлөлт & Купон',
      //   path: paths.dashboard.root + '/discounts',
      //   icon: ICONS.booking,
      // },
    ],
  },

  {
    subheader: 'Тохиргоо',
    items: [
      {
        title: 'Хувийн тохиргоо',
        path: paths.dashboard.root + '/profile',
        icon: ICONS.user,
      },
      {
        title: 'Санал хүсэлт',
        path: paths.dashboard.root + '/feedback',
        icon: ICONS.mail,
      },
      // { title: 'Аюулгүй байдал', path: paths.dashboard.root + '/security', icon: ICONS.lock },
    ],
  },

  // {
  //   subheader: 'Management',
  //   items: [
  //     {
  //       title: 'Users',
  //       path: paths.dashboard.root + '/users',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Show List', path: paths.dashboard.root + '/users' },
  //         { title: 'Create', path: paths.dashboard.root + '/create' },
  //       ],
  //     },
  //     {
  //       title: 'Votes',
  //       path: paths.dashboard.root + '/votes',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Show List', path: paths.dashboard.root + '/votes' },
  //         { title: 'Create', path: paths.dashboard.root + '/votes/create' },
  //       ],
  //     },
  //   ],
  // },
];
