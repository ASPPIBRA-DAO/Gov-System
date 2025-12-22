import type { NavMainProps } from './main/nav/types';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  { title: 'Home', path: '/', icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" /> },
  { title: 'Ecosystem', path: '/#home-ecosystem', icon: <Iconify width={22} icon="solar:atom-bold-duotone" /> },
  { title: 'Community', path: '/#home-community', icon: <Iconify width={22} icon="solar:users-group-rounded-bold-duotone" /> },
  { title: 'Team', path: '/#home-team', icon: <Iconify width={22} icon="solar:cup-star-bold" /> },
  { title: 'Roadmap', path: '/#home-roadmap', icon: <Iconify width={22} icon="solar:double-alt-arrow-right-bold-duotone" /> },
  { title: 'FAQ', path: '/#home-faqs', icon: <Iconify width={22} icon="solar:file-bold-duotone" /> },
];
