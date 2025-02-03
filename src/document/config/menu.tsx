import { LABELS, PATHS } from "./path";

export interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
}

export const menu: MenuItem[] = [
  // {
  //   label: LABELS.GETTING_STARTED,
  //   children: [
  //     {
  //       label: LABELS.OVERVIEW,
  //       path: PATHS.OVERVIEW,
  //     },
  //     {
  //       label: LABELS.INSTALLATION,
  //       path: PATHS.INSTALLATION,
  //     },
  //     {
  //       label: LABELS.SUPPORT,
  //       path: PATHS.SUPPORT,
  //     },
  //   ],
  // },
  {
    label: LABELS.CHANGE_LOG,
    path: PATHS.CHANGE_LOG,
  },
  // {
  //   label: LABELS.DEVELOPMENT,
  //   path: PATHS.DEVELOPMENT,
  // },
];
