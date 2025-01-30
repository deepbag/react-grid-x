module.exports = {
  title: "React Grid X",
  tagline: "`@deep/react-grid-x` is a customizable and flexible React table component that supports pagination, dynamic rendering of table data, and customizable column rendering. It provides an easy-to-use interface for displaying tabular data with configurable columns, pagination, and styling.",
  url: "https://deepbag.github.io",
  baseUrl: "/react-grid-x/",
  favicon: "img/favicon.ico",
  organizationName: "deepbag",
  projectName: "react-grid-x",
  themeConfig: {
    navbar: {
      title: "React Grid X",
      items: [
        {
          to: "docs/intro",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/deepbag/react-grid-x",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/intro",
            },
            {
              label: "Installation",
              to: "docs/installation",
            },
            {
              label: "API",
              to: "docs/api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/deepbag/react-grid-x",
            },
          ],
        },
      ],
    },
  },
};
