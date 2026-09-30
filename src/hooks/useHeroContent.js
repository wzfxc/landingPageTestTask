/**
 * useHeroContent — Custom hook to fetch Hero data from Contentful.
 *
 * Merges CMS fields on top of local mock data so the component always
 * receives a complete data shape even when the CMS entry is partially
 * populated.  If the fetch fails or a field is empty, the mock value
 * is used as a seamless fallback.
 *
 * The Hero component stays "dumb" — it receives the same `data` prop
 * shape regardless of where the content originates.
 */
import { useState, useEffect } from 'react';
import client from '../api/contentfulClient';
import { heroData as mockHeroData } from '../data/mockData';

const HERO_ENTRY_ID = '7HcRXDqCrNW1dUODcG69dG';

/**
 * Safely extract an image URL from a Contentful Asset.
 * Contentful stores media under  asset.fields.file.url  (protocol-relative).
 */
function resolveAssetUrl(asset) {
  const url = asset?.fields?.file?.url;
  if (!url) return null;
  // Contentful URLs are protocol-relative (//images.ctfassets.net/…)
  return url.startsWith('//') ? `https:${url}` : url;
}

/**
 * Parse the raw Contentful entry into the shape <Hero/> expects.
 * Every field uses optional chaining so a missing CMS value simply
 * falls through to the mock default.
 */
function parseHeroEntry(entry) {
  const fields = entry?.fields ?? {};

  // --- Title ---
  const headline = fields.title ?? mockHeroData.headline;

  // --- Gallery images ---
  // `images` is a "Media, many files" field → array of Asset links
  const cmsImages = Array.isArray(fields.images)
    ? fields.images
        .map((asset, index) => {
          const src = resolveAssetUrl(asset);
          const alt =
            asset?.fields?.description ||
            asset?.fields?.title ||
            `Hero image ${index + 1}`;
          return src ? { src, alt } : null;
        })
        .filter(Boolean)
    : [];

  const images = cmsImages.length > 0 ? cmsImages : mockHeroData.images;

  // --- Fields not yet in CMS — fall back to mock ---
  const features = fields.features ?? mockHeroData.features;
  const ctaLabel = fields.ctaLabel ?? mockHeroData.ctaLabel;
  const testimonial = fields.testimonial ?? mockHeroData.testimonial;

  return { headline, features, ctaLabel, images, testimonial };
}

/**
 * React hook.
 *
 * @returns {{ heroData: object, isLoading: boolean, error: Error|null }}
 */
export default function useHeroContent() {
  const [heroData, setHeroData] = useState(mockHeroData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchHero() {
      try {
        const entry = await client.getEntry(HERO_ENTRY_ID);

        if (!cancelled) {
          setHeroData(parseHeroEntry(entry));
        }
      } catch (err) {
        console.error('[Contentful] Failed to fetch Hero entry:', err);
        if (!cancelled) {
          setError(err);
          // heroData already initialised with mock — UI stays intact
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchHero();

    return () => {
      cancelled = true;
    };
  }, []);

  return { heroData, isLoading, error };
}
