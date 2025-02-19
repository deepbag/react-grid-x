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
  { label: LABELS.DEMO, path: PATHS.DEMO },
  // { label: LABELS.DEVELOPMENT, path: PATHS.DEVELOPMENT },
];

export const menu: MenuItem[] = [
  {
    label: LABELS.OVERVIEW,
    path: PATHS.OVERVIEW,
    keyLabel: KEY_LABELS.GETTING_STARTED,
  },
  {
    label: LABELS.INSTALLATION,
    path: PATHS.INSTALLATION,
    keyLabel: KEY_LABELS.GETTING_STARTED,
  },
  {
    label: LABELS.COLUMNS,
    path: PATHS.COLUMNS,
    keyLabel: KEY_LABELS.FEATURES,
  },
  {
    label: LABELS.ROW,
    path: PATHS.ROW,
    keyLabel: KEY_LABELS.FEATURES,
  },
  {
    label: LABELS.SORTING,
    path: PATHS.SORTING,
    keyLabel: KEY_LABELS.FEATURES,
  },
  {
    label: LABELS.PAGINATION,
    path: PATHS.PAGINATION,
    keyLabel: KEY_LABELS.FEATURES,
  },
  {
    label: LABELS.TOOLTIP,
    path: PATHS.TOOLTIP,
    keyLabel: KEY_LABELS.FEATURES,
  },
  {
    label: LABELS.LOADER,
    path: PATHS.LOADER,
    keyLabel: KEY_LABELS.FEATURES,
  },
  {
    label: LABELS.DARK_LIGHT_MODE,
    path: PATHS.DARK_LIGHT_MODE,
    keyLabel: KEY_LABELS.THEME,
  },
  {
    label: LABELS.CSS_GUIDE,
    path: PATHS.CSS_GUIDE,
    keyLabel: KEY_LABELS.THEME,
  },
  {
    label: LABELS.CLASS_NAMES,
    keyLabel: KEY_LABELS.THEME,
    children: [
      {
        label: LABELS.TABLE_CLASS,
        path: PATHS.TABLE_CLASS,
      },
      {
        label: LABELS.TABLE_PAGINATION_CLASS,
        path: PATHS.TABLE_PAGINATION_CLASS,
      },
      {
        label: LABELS.ARROW_PAGINATION_CLASS,
        path: PATHS.ARROW_PAGINATION_CLASS,
      },
      {
        label: LABELS.POPOVER_CLASS,
        path: PATHS.POPOVER_CLASS,
      },
      {
        label: LABELS.TOOLTIP_CLASS,
        path: PATHS.TOOLTIP_CLASS,
      },
      {
        label: LABELS.LOADER_CLASS,
        path: PATHS.LOADER_CLASS,
      },
    ],
  },
  {
    label: LABELS.CUSTOM_THEME,
    path: PATHS.CUSTOM_THEME,
    keyLabel: KEY_LABELS.THEME,
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
  {
    label: LABELS.CONTRIBUTION,
    path: PATHS.CONTRIBUTION,
    keyLabel: KEY_LABELS.MISCELLANEOUS,
  },
];
