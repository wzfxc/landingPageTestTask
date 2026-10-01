import React from 'react';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AsSeenIn from './components/AsSeenIn/AsSeenIn';
import InfoBanner from './components/InfoBanner/InfoBanner';
import Benefits from './components/Benefits/Benefits';
import BeYourBestSelf from './components/BeYourBestSelf/BeYourBestSelf';
import HowToOrder from './components/HowToOrder/HowToOrder';
import Reviews from './components/Reviews/Reviews';
import Faq from './components/Faq/Faq';
import FinalCta from './components/FinalCta/FinalCta';
import useCmsContent from './hooks/useCmsContent';
import {
  announcementBarData,
  headerData,
  asSeenInData,
  infoBannerData,
  howToOrderData,
  reviewsData,
} from './data/mockData';

function App() {
  // CMS-driven data (falls back to mocks if Contentful is unavailable)
  const { heroData, benefitsData, beYourBestSelfData, faqData, finalCtaData } = useCmsContent();

  return (
    <>
      <AnnouncementBar data={announcementBarData} />
      <Header data={headerData} />
      <main>
        {/*
          Both Hero and Benefits stay "dumb" — they receive the same prop
          shape whether data comes from Contentful or from the local mock.
          We show mock data immediately (no loading spinner) because the
          hook initialises state with mock fallbacks.
        */}
        <Hero data={heroData} />
        <AsSeenIn data={asSeenInData} />
        <Benefits data={benefitsData} />
        <BeYourBestSelf data={beYourBestSelfData} />
        <HowToOrder data={howToOrderData} />
        <Reviews data={reviewsData} />
        <Faq data={faqData} />
        <InfoBanner data={infoBannerData} />
        <FinalCta data={finalCtaData} />
      </main>
    </>
  );
}

export default App;
