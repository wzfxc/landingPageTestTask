import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import AsSeenIn from './components/AsSeenIn';
import Benefits from './components/Benefits';
import useHeroContent from './hooks/useHeroContent';
import {
  announcementBarData,
  headerData,
  asSeenInData,
  benefitsData,
} from './data/mockData';

function App() {
  // CMS-driven data (falls back to mock if Contentful is unavailable)
  const { heroData, isLoading, error } = useHeroContent();

  // Merge the fetched hero images into benefits data so they stay in sync
  const mergedBenefitsData = {
    ...benefitsData,
    carousel: {
      ...benefitsData.carousel,
      images: benefitsData.carousel.images.map((img, index) => ({
        ...img,
        src: heroData.images[index]?.src || img.src,
        alt: heroData.images[index]?.alt || img.alt,
      }))
    }
  };

  return (
    <>
      <AnnouncementBar data={announcementBarData} />
      <Header data={headerData} />
      <main>
        {/*
          Hero stays "dumb" — it receives the same prop shape whether
          data comes from Contentful or from the local mock.
          We show mock data immediately (no loading spinner) because
          the hook initialises state with the mock fallback.
        */}
        <Hero data={heroData} />
        <AsSeenIn data={asSeenInData} />
        <Benefits data={mergedBenefitsData} />
      </main>
    </>
  );
}

export default App;
