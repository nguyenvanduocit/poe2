/**
 * Determines if a URL is external (should open in new tab).
 * Covers http/https absolute URLs and protocol-relative // URLs.
 */
export function isExternalLink(href: string | undefined | null): boolean {
  if (!href) return false
  return /^https?:\/\//i.test(href) || href.startsWith('//')
}

/**
 * Returns the correct target/rel attributes for an external link.
 * Internal links return empty attributes (same-tab navigation).
 */
export function getExternalLinkAttrs(href: string | undefined | null) {
  if (isExternalLink(href)) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }
  return {}
}
