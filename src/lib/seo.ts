import { useLayoutEffect } from 'react';
import { ogImage, siteUrl } from './content';

function upsertMeta(key: string, value: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo(path: string, title: string, description: string) {
  useLayoutEffect(() => {
    const canonical = `${siteUrl}${path}`;
    const absoluteOg = `${siteUrl}/${ogImage.replace(/^\.?\//, '')}`;

    document.title = title;
    upsertMeta('description', description);
    upsertLink('canonical', canonical);
    upsertMeta('og:type', 'website', 'property');
    upsertMeta('og:site_name', 'Royal Eye Solar Power', 'property');
    upsertMeta('og:title', title, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:url', canonical, 'property');
    upsertMeta('og:image', absoluteOg, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:image', absoluteOg);
  }, [path, title, description]);
}

export function injectJsonLd(data: unknown) {
  const id = 'royal-eye-jsonld';
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
