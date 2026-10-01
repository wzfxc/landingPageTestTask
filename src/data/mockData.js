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
      icon: '/img/icons/dayOrNight.svg',
      text: 'Beautiful, comfortable loungewear for day or night.',
    },
    {
      id: 'feature-2',
      icon: '/img/icons/eco.svg',
      text: 'No wasteful extras, like tags or plastic packaging.',
    },
    {
      id: 'feature-3',
      icon: '/img/icons/fabric.svg',
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
    avatar: '/img/icons/pfp.svg',
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
      icon: '/img/icons/eco.svg',
      title: 'Ethically sourced.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'benefit-2',
      icon: '/img/icons/responsibly.svg',
      title: 'Responsibly made.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'benefit-3',
      icon: '/img/icons/dayOrNight.svg',
      title: 'Made for living in.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'benefit-4',
      icon: '/img/icons/fabric.svg',
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

export const beYourBestSelfData = {
  headline: 'Be your best self.',
  paragraphs: [
    'Hi! My name’s [Insert Name], and I founded [Insert] in ____.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    'Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.',
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.',
    'Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.',
    'Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.',
    'Cras mattis varius mollis.'
  ],
  ctaLabel: 'Customize Your Outfit',
  images: [
    {
      id: 'best-self-1',
      src: 'https://placehold.co/180x240/d6c8b9/ffffff',
      alt: 'Woman in gray loungewear top-left',
    },
    {
      id: 'best-self-2',
      src: 'https://placehold.co/400x520/d6c8b9/ffffff',
      alt: 'Woman in white robe center',
    },
    {
      id: 'best-self-3',
      src: 'https://placehold.co/180x240/d6c8b9/ffffff',
      alt: 'Woman in orange looking out window bottom-right',
    },
  ],
};

export const howToOrderData = {
  title: 'Comfort made easy',
  steps: [
    {
      id: 'step-1',
      icon: '/img/icons/eco.svg',
      title: 'You save.',
      description: 'Browse our comfort sets and save 15% when you bundle.',
    },
    {
      id: 'step-2',
      icon: '/img/icons/truck.svg',
      title: 'We ship.',
      description: 'We ship your items within 1-2 days of receiving your order.',
    },
    {
      id: 'step-3',
      icon: '/img/icons/dayOrNight.svg',
      title: 'You enjoy!',
      description: 'Wear hernest around the house, out on the town, or in bed.',
    },
  ],
  ctaLabel: 'Customize Your Outfit',
  reviewText: 'Over 500+ 5 Star Reviews Online',
};

export const reviewsData = {
  title: 'What are our fans saying?',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.',
  galleryImage: '/img/reviews/fans.jpg',
  reviewCards: [
    {
      id: 'review-1',
      avatar: '/img/icons/pfp.svg', // Reusing an existing avatar for mock
      rating: 5,
      name: 'Jane, S.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
    },
    {
      id: 'review-2',
      avatar: '/img/icons/pfp.svg',
      rating: 5,
      name: 'Jane, S.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.',
    },
    {
      id: 'review-3',
      avatar: '/img/icons/pfp.svg',
      rating: 5,
      name: 'Jane, S.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
    },
  ],
  ctaLabel: 'Customize Your Outfit',
};

export const faqData = {
  title: 'Frequently asked questions.',
  questions: [
    {
      id: 'faq-1',
      question: 'lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'faq-2',
      question: 'lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'faq-3',
      question: 'lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'faq-4',
      question: 'lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      id: 'faq-5',
      question: 'lorem ipsum dolor sit amet',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
  ],
  collageImages: [
    { src: '/img/faq/coll.jpg', alt: 'Top right overlapping image' },
    { src: '/img/faq/photo2.jpg', alt: 'Center large image' },
    { src: '/img/faq/photo3.jpg', alt: 'Bottom left overlapping image' }
  ]
};

export const infoBannerData = {
  title: 'Our total green impact',
  stats: [
    {
      id: 'stat-1',
      icon: '/img/icons/cloud.svg',
      value: '3,927 kg',
      label: 'of CO2 saved',
    },
    {
      id: 'stat-2',
      icon: '/img/icons/water.svg',
      value: '2,546,167 days',
      label: 'of drinking water saved',
    },
    {
      id: 'stat-3',
      icon: '/img/icons/energy.svg',
      value: '7,321 kWh',
      label: 'of energy saved',
    },
  ],
};

export const finalCtaData = {
  title: 'Find something you love.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  images: [], // Will be populated from Contentful
  ctaLabel: 'Customize Your Outfit',
  paymentMethods: {
    text: 'Ships in 1-2 Days',
    image: '/img/finalCta/cards.png'
  },
  trustBadges: [
    {
      id: 'badge-1',
      icon: '/img/finalCta/truckFinal.svg',
      text: 'FREE Shipping on Orders over $200'
    },
    {
      id: 'badge-2',
      icon: '/img/finalCta/secureFinal.svg',
      text: 'Over 500+ 5 Star Reviews Online'
    },
    {
      id: 'badge-3',
      icon: '/img/finalCta/ecoFinal.svg',
      text: 'Made ethically and responsibly.'
    }
  ]
};
