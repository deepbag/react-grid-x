type CSSObject = {
  [selector: string]: {
    [property: string]: string;
  };
};

export function replaceTheme(
  cssObj: CSSObject,
  oldTheme: string,
  newTheme: string
): CSSObject {
  const updatedCSS: CSSObject = {};
  Object.keys(cssObj).forEach((selector) => {
    const newSelector = selector.replace(new RegExp(`^${oldTheme}`), newTheme);
    updatedCSS[newSelector] = cssObj[selector];
  });
  return updatedCSS;
}
