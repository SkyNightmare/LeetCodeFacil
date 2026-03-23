import readingTime from 'reading-time';

export function getReadingTime(text: string): string {
  const result = readingTime(text);
  return `${Math.ceil(result.minutes)} min read`;
}