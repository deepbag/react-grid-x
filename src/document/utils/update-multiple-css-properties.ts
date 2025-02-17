type Update = {
  selector: string;
  property: string;
  newValue: string;
};

type CSSObject = {
  [selector: string]: {
    [property: string]: string;
  };
};

export function _updateMultipleCSSProperties(
  cssObject: CSSObject,
  updates: Update[]
): CSSObject {
  updates.forEach(({ selector, property, newValue }) => {
    if (cssObject[selector]) {
      cssObject[selector][property] = newValue;
    }
  });
  return { ...cssObject };
}


