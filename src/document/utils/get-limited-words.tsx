export const getLimitedWords = (text: string, wordLimit: number = 10) => {
  // Extract substring from keyword onward
  const words = text?.split(/\s+/)?.slice(0, wordLimit)?.join(" ") || '';

  return `${words} ...`;
};
