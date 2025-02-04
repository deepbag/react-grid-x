import { KEY_LABELS, LABELS, PATHS } from "./path";

export interface MenuItem {
  label: string;
  path?: string;
  keyLabel?: string;
  children?: MenuItem[];
}

export const menu: MenuItem[] = [
  // {
  //   label: LABELS.GETTING_STARTED,
  //   keyLabel: KEY_LABELS.GETTING_STARTED,
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
    keyLabel: KEY_LABELS.MISCELLANEOUS,
  },
  {
    label: LABELS.DEVELOPMENT,
    path: PATHS.DEVELOPMENT,
    keyLabel: KEY_LABELS.MISCELLANEOUS,
  },
];
