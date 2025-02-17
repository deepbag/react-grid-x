type CSSObject = {
  [selector: string]: {
    [property: string]: string;
  };
};

export function _parseCSS(css: string): CSSObject {
  const result: CSSObject = {};
  const regex = /(\.[^\s{]+)\s*{([^}]*)}/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(css)) !== null) {
    const selector = match[1].trim();
    const rules = match[2].trim();

    const properties = rules
      .split(";")
      .reduce((acc: { [key: string]: string }, rule) => {
        if (rule.trim()) {
          const [key, value] = rule.split(":").map((s) => s.trim());
          acc[key] = value;
        }
        return acc;
      }, {});

    result[selector] = properties;
  }

  return result;
}
