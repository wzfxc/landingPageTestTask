/**
 * useCmsContent — Single hook to fetch all Contentful-driven sections:
 * Hero, Benefits, BeYourBestSelf, FAQ, and FinalCta.
 *
 * Each dataset merges CMS fields on top of local mock data, guaranteeing a
 * complete data shape even when the CMS entry is partially populated or the
 * fetch fails entirely.
 *
 * Components stay "dumb" — they receive the same `data` prop shape regardless
 * of where the content originates.
 */
import { useState, useEffect } from 'react';
import client from '../api/contentfulClient';
import {
  heroData as mockHeroData,
  benefitsData as mockBenefitsData,
  beYourBestSelfData as mockBeYourBestSelfData,
  faqData as mockFaqData,
  finalCtaData as mockFinalCtaData,
} from '../data/mockData';

const HERO_ENTRY_ID = '7HcRXDqCrNW1dUODcG69dG';
const BENEFITS_CONTENT_TYPE = 'benefits';
const BE_YOUR_BEST_SELF_CONTENT_TYPE = 'beYourBestSelf';
const FAQ_CONTENT_TYPE = 'faqSection';
const FINAL_CTA_CONTENT_TYPE = 'finalCta';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Safely extract an image URL from a Contentful Asset.
 * Contentful stores media under  asset.fields.file.url  (protocol-relative).
 */
function resolveAssetUrl(asset) {
  const url = asset?.fields?.file?.url;
  if (!url) return null;
  return url.startsWith('//') ? `https:${url}` : url;
}

// ---------------------------------------------------------------------------
// Hero parser
// ---------------------------------------------------------------------------

/**
 * Parse the raw Contentful Hero entry into the shape <Hero/> expects.
 */
function parseHeroEntry(entry) {
  const fields = entry?.fields ?? {};

  const headline = fields.title ?? mockHeroData.headline;

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

  const features = fields.features ?? mockHeroData.features;
  const ctaLabel = fields.ctaLabel ?? mockHeroData.ctaLabel;
  const testimonial = fields.testimonial ?? mockHeroData.testimonial;

  return { headline, features, ctaLabel, images, testimonial };
}

// ---------------------------------------------------------------------------
// Benefits parser
// ---------------------------------------------------------------------------

/**
 * Parse the raw Contentful Benefits entry.
 * Merges only the carousel images from CMS; static text/icons stay from mock.
 */
function parseBenefitsEntry(entry) {
  const fields = entry?.fields ?? {};

  // `images` is a "Media, many files" field → array of Asset links
  const cmsImages = Array.isArray(fields.images)
    ? fields.images
        .map((asset, index) => {
          const src = resolveAssetUrl(asset);
          const alt =
            asset?.fields?.description ||
            asset?.fields?.title ||
            `Benefits image ${index + 1}`;
          // Keep the id & caption from the mock if available, else generate
          const mockImage = mockBenefitsData.carousel?.images?.[index];
          return src
            ? {
                id: mockImage?.id ?? `benefits-img-${index + 1}`,
                src,
                alt,
                caption: mockImage?.caption ?? alt,
              }
            : null;
        })
        .filter(Boolean)
    : [];

  // Only override carousel images if we actually got CMS data
  const carouselImages =
    cmsImages.length > 0
      ? cmsImages
      : mockBenefitsData.carousel?.images ?? [];

  return {
    ...mockBenefitsData,
    carousel: {
      ...mockBenefitsData.carousel,
      images: carouselImages,
    },
  };
}

// ---------------------------------------------------------------------------
// BeYourBestSelf parser
// ---------------------------------------------------------------------------

/**
 * Parse the raw Contentful BeYourBestSelf entry.
 * Merges only the images from CMS; static text stays from mock.
 */
function parseBeYourBestSelfEntry(entry) {
  const fields = entry?.fields ?? {};

  const cmsImages = Array.isArray(fields.images)
    ? fields.images
        .map((asset, index) => {
          const src = resolveAssetUrl(asset);
          const alt =
            asset?.fields?.description ||
            asset?.fields?.title ||
            `Be your best self image ${index + 1}`;
          const mockImage = mockBeYourBestSelfData.images?.[index];
          return src
            ? {
                id: mockImage?.id ?? `best-self-img-${index + 1}`,
                src,
                alt,
              }
            : null;
        })
        .filter(Boolean)
    : [];

  const images = cmsImages.length > 0 ? cmsImages : mockBeYourBestSelfData.images;

  return {
    ...mockBeYourBestSelfData,
    images,
  };
}

// ---------------------------------------------------------------------------
// FAQ parser
// ---------------------------------------------------------------------------

/**
 * Parse the raw Contentful FAQ entry.
 * Merges only the collageImages from CMS; static text stays from mock.
 */
function parseFaqEntry(entry) {
  const fields = entry?.fields ?? {};

  // Check if they named it collageImages or images
  const mediaField = fields.collageImages ?? fields.images;

  const cmsImages = Array.isArray(mediaField)
    ? mediaField
        .map((asset, index) => {
          const src = resolveAssetUrl(asset);
          const alt =
            asset?.fields?.description ||
            asset?.fields?.title ||
            `FAQ image ${index + 1}`;
          
          return src
            ? {
                src,
                alt,
              }
            : null;
        })
        .filter(Boolean)
    : [];

  const collageImages = cmsImages.length > 0 ? cmsImages : mockFaqData.collageImages;

  return {
    ...mockFaqData,
    collageImages,
  };
}

// ---------------------------------------------------------------------------
// Final CTA parser
// ---------------------------------------------------------------------------

function parseFinalCtaEntry(entry) {
  const fields = entry?.fields ?? {};
  const mediaField = fields.images;

  const cmsImages = Array.isArray(mediaField)
    ? mediaField
        .map((asset, index) => {
          const src = resolveAssetUrl(asset);
          const alt =
            asset?.fields?.description ||
            asset?.fields?.title ||
            `Final CTA image ${index + 1}`;
          
          return src ? { src, alt } : null;
        })
        .filter(Boolean)
    : [];

  const images = cmsImages.length > 0 ? cmsImages : mockFinalCtaData.images;

  return {
    ...mockFinalCtaData,
    images,
  };
}

// ---------------------------------------------------------------------------
// React hook
// ---------------------------------------------------------------------------

/**
 * @returns {{
 *   heroData: object,
 *   benefitsData: object,
 *   beYourBestSelfData: object,
 *   faqData: object,
 *   finalCtaData: object,
 *   isLoading: boolean,
 *   error: Error|null
 * }}
 */
export default function useCmsContent() {
  const [heroData, setHeroData] = useState(mockHeroData);
  const [benefitsData, setBenefitsData] = useState(mockBenefitsData);
  const [beYourBestSelfData, setBeYourBestSelfData] = useState(mockBeYourBestSelfData);
  const [faqData, setFaqData] = useState(mockFaqData);
  const [finalCtaData, setFinalCtaData] = useState(mockFinalCtaData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchContent() {
      try {
        // Fire all requests concurrently
        const [heroEntry, benefitsResponse, beYourBestSelfResponse, faqResponse, finalCtaResponse] = await Promise.all([
          client.getEntry(HERO_ENTRY_ID),
          client.getEntries({ content_type: BENEFITS_CONTENT_TYPE, limit: 1 }),
          client.getEntries({ content_type: BE_YOUR_BEST_SELF_CONTENT_TYPE, limit: 1 }),
          client.getEntries({ content_type: FAQ_CONTENT_TYPE, limit: 1 }),
          client.getEntries({ content_type: FINAL_CTA_CONTENT_TYPE, limit: 1 }),
        ]);

        if (!cancelled) {
          setHeroData(parseHeroEntry(heroEntry));

          // Safely extract the first Benefits entry
          const benefitsEntry = benefitsResponse?.items?.[0];
          if (benefitsEntry) {
            setBenefitsData(parseBenefitsEntry(benefitsEntry));
          }

          // Safely extract the first BeYourBestSelf entry
          const beYourBestSelfEntry = beYourBestSelfResponse?.items?.[0];
          if (beYourBestSelfEntry) {
            setBeYourBestSelfData(parseBeYourBestSelfEntry(beYourBestSelfEntry));
          }

          // Safely extract the first FAQ entry
          const faqEntry = faqResponse?.items?.[0];
          if (faqEntry) {
            setFaqData(parseFaqEntry(faqEntry));
          }

          // Safely extract the first Final CTA entry
          const finalCtaEntry = finalCtaResponse?.items?.[0];
          if (finalCtaEntry) {
            setFinalCtaData(parseFinalCtaEntry(finalCtaEntry));
          }
        }
      } catch (err) {
        console.error('[Contentful] Failed to fetch CMS content:', err);
        if (!cancelled) {
          setError(err);
          // State already initialised with mocks — UI stays intact
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchContent();

    return () => {
      cancelled = true;
    };
  }, []);

  return { heroData, benefitsData, beYourBestSelfData, faqData, finalCtaData, isLoading, error };
}
