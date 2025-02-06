import { KEY_LABELS, LABELS, PATHS } from "./path";

export interface MenuItem {
  label: string;
  path?: string;
  keyLabel?: string;
  children?: MenuItem[];
}

export interface HeaderMenuItem {
  label: string;
  path?: string;
}

export const headerMenu: HeaderMenuItem[] = [
  { label: LABELS.DOCUMENT, path: PATHS.OVERVIEW },
  // { label: LABELS.THEME_BUILDER, path: PATHS.THEME_BUILDER },
  // { label: LABELS.DEMO, path: PATHS.DEMO },
  // { label: LABELS.DEVELOPMENT, path: PATHS.DEVELOPMENT },
];

export const menu: MenuItem[] = [
  {
    label: LABELS.GETTING_STARTED,
    keyLabel: KEY_LABELS.GETTING_STARTED,
    children: [
      {
        label: LABELS.OVERVIEW,
        path: PATHS.OVERVIEW,
      },
      {
        label: LABELS.INSTALLATION,
        path: PATHS.INSTALLATION,
      },
    ],
  },
  {
    label: LABELS.FEATURES,
    keyLabel: KEY_LABELS.FEATURES,
    children: [
      {
        label: LABELS.COLUMNS,
        path: PATHS.COLUMNS,
      },
      {
        label: LABELS.ROW,
        path: PATHS.ROW,
      },
      {
        label: LABELS.SORTING,
        path: PATHS.SORTING,
      },
      {
        label: LABELS.PAGINATION,
        path: PATHS.PAGINATION,
      },
      {
        label: LABELS.TOOLTIP,
        path: PATHS.TOOLTIP,
      },
      {
        label: LABELS.LOADER,
        path: PATHS.LOADER,
      },
    ],
  },

  {
    label: LABELS.FAQ,
    path: PATHS.FAQ,
    keyLabel: KEY_LABELS.MISCELLANEOUS,
  },
  {
    label: LABELS.CHANGE_LOG,
    path: PATHS.CHANGE_LOG,
    keyLabel: KEY_LABELS.MISCELLANEOUS,
  },
  {
    label: LABELS.SUPPORT,
    path: PATHS.SUPPORT,
    keyLabel: KEY_LABELS.MISCELLANEOUS,
  },
  // {
  //   label: LABELS.DEVELOPMENT,
  //   path: PATHS.DEVELOPMENT,
  //   keyLabel: KEY_LABELS.MISCELLANEOUS,
  // },
];
