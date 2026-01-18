export const MAX_TITLE = 60;
export const MAX_DESCRIPTION = 160;
export const MAX_OG_TITLE = 95;
export const MAX_OG_DESCRIPTION = 200;
export const MAX_TWITTER_TITLE = 70;
export const MAX_TWITTER_DESCRIPTION = 200;

function cleanText(input?: string) {
  if (!input) return '';
  // Remove excessive whitespace/newlines
  return input.replace(/\s+/g, ' ').trim();
}

export function truncate(input: string | undefined, max: number) {
  const s = cleanText(input);
  if (!s) return '';
  if (s.length <= max) return s;
  return s.slice(0, Math.max(0, max - 1)).trimEnd() + '…';
}

export function sanitizeSEOFields(fields: {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}) {
  return {
    title: truncate(fields.title, MAX_TITLE),
    description: truncate(fields.description, MAX_DESCRIPTION),
    ogTitle: truncate(fields.ogTitle || fields.title, MAX_OG_TITLE),
    ogDescription: truncate(fields.ogDescription || fields.description, MAX_OG_DESCRIPTION),
    twitterTitle: truncate(fields.twitterTitle || fields.title, MAX_TWITTER_TITLE),
    twitterDescription: truncate(fields.twitterDescription || fields.description, MAX_TWITTER_DESCRIPTION),
  };
}

export default sanitizeSEOFields;
