/**
 * Mock data layer — all content is defined here for Headless CMS readiness.
 * When integrating a CMS, replace these exports with fetched data.
 */

export const announcementBarData = {
  message:
    'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)  |  FREE SHIPPING on orders > $200  |  easy 45 day return window.',
};

export const headerData = {
  logoSrc: '/img/Logotype.svg',
  logoAlt: 'BYTEEX logo',
};

export const heroData = {
  headline: "Don\u2019t apologize for being comfortable.",
  features: [
    {
      id: 'feature-1',
      icon: '/img/icons/heroSection/dayOrNight.svg',
      text: 'Beautiful, comfortable loungewear for day or night.',
    },
    {
      id: 'feature-2',
      icon: '/img/icons/heroSection/eco.svg',
      text: 'No wasteful extras, like tags or plastic packaging.',
    },
    {
      id: 'feature-3',
      icon: '/img/icons/heroSection/fabric.svg',
      text: "Our signature fabric is incredibly comfortable \u2014 unlike anything you\u2019ve ever felt.",
    },
  ],
  ctaLabel: 'Customize Your Outfit',
  images: [
    {
      src: 'https://placehold.co/320x420/e8ddd3/e8ddd3',
      alt: 'Woman relaxing in cream loungewear set',
    },
    {
      src: 'https://placehold.co/280x400/d4ccc2/d4ccc2',
      alt: 'Woman stretching in white loungewear',
    },
    {
      src: 'https://placehold.co/260x380/e0d6cc/e0d6cc',
      alt: 'Woman in comfortable matching set',
    },
  ],
  testimonial: {
    avatar: '/img/icons/heroSection/pfp.svg',
    name: 'Amy P.',
    rating: 5,
    ratingLabel: 'One of 500+ 5 Star Reviews Online',
    quote:
      'Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.',
  },
};

export const asSeenInData = {
  label: 'as seen in',
  logos: [
    { id: 'logo-1', name: 'ECO-STYLIST', src: '/img/icons/seenIn/ecoStylist.png', alt: 'Eco-Stylist logo' },
    { id: 'logo-2', name: 'Canadian Living', src: '/img/icons/seenIn/canadianLiving.png', alt: 'Canadian Living logo' },
    { id: 'logo-3', name: 'JILLIAN HARRIS', src: '/img/icons/seenIn/jillianHarris.png', alt: 'Jillian Harris logo' },
    { id: 'logo-4', name: 'THE ECO HUB', src: '/img/icons/seenIn/theEcoHub.png', alt: 'The Eco Hub logo' },
    { id: 'logo-5', name: 'TRENDHUNTER', src: '/img/icons/seenIn/trendHunter.png', alt: 'Trend Hunter logo' },
  ],
};

export const benefitsData = {
  headline: 'Loungewear you can be proud of.',
  items: [
    {
      id: 'benefit-1',
      icon: '/img/icons/heroSection/eco.svg',
      title: 'Ethically sourced.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'benefit-2',
      icon: '/img/icons/heroSection/responsibly.svg',
      title: 'Responsibly made.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'benefit-3',
      icon: '/img/icons/heroSection/dayOrNight.svg',
      title: 'Made for living in.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'benefit-4',
      icon: '/img/icons/heroSection/fabric.svg',
      title: 'Unimaginably comfortable.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
  ],
  carousel: {
    images: [
      {
        id: 'carousel-1',
        src: 'https://placehold.co/320x420/e8ddd3/e8ddd3',
        alt: 'Woman relaxing in cream loungewear set',
        caption: 'White Robe',
      },
      {
        id: 'carousel-2',
        src: 'https://placehold.co/280x400/d4ccc2/d4ccc2',
        alt: 'Woman stretching in white loungewear',
        caption: 'Cream Jogger Set',
      },
      {
        id: 'carousel-3',
        src: 'https://placehold.co/260x380/e0d6cc/e0d6cc',
        alt: 'Woman in comfortable matching set',
        caption: 'Sand Lounge Pants',
      },
    ],
  },
};
