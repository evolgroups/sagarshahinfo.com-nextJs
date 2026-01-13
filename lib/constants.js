/**
 * Site-wide constants and data
 * All content from the original Django site preserved and enhanced
 */

export const SITE_CONFIG = {
  name: 'Sagar Shah',
  title: 'Sagar Shah | Owner of Evol Group',
  description: 'EVOL GROUP is a group of multinational companies having multiple business interests with offices in Australia and India.',
  url: 'https://sagarshahinfo.com',
  email: 'hello@sagarshahinfo.com',
  twitter: '@sagarshah07',
  ogImage: '/images/Logo_SS-14.png',
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/', id: '1' },
  { name: 'Services', href: '/#services', id: '2' },
  { name: 'About', href: '/#about', id: '3' },
  { name: 'Companies', href: '/#group-companies', id: '4' },
  { name: 'Contact', href: '/#contact-form', id: '5' },
  { name: 'Achievements', href: '/achievements', id: '6' },
  // { name: 'Corporate Highlights', href: '/corporate-highlights', id: '7' }, // Hidden for now
];

export const BLOG_LINKS = [
  { name: 'Technology', href: 'https://technobitsdigital.com/blogs/' },
  { name: 'Cryptocurrency', href: 'https://www.evolnetwork.com/blogs/' },
  { name: 'Visa Related', href: 'https://www.migratezone.com/blogs/' },
  { name: 'Automated Trading', href: 'https://www.evoltrader.com/blog/' },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/sagarshah07',
  facebook: 'https://www.facebook.com/sagarshah1979',
  linkedin: 'https://au.linkedin.com/in/sagar-shah-082b74b8',
  instagram: 'https://www.instagram.com/sagar0703/',
};

export const SERVICES = [
  {
    id: 'immigration',
    title: 'Immigration Services',
    description: 'Migrate Zone has established itself as a trusted name in immigration consultancy, specializing in Australian and Canadian visa services. Our team of experienced migration agents provides comprehensive guidance throughout the entire visa application process, from initial assessment to final approval. We analyze each client\'s unique profile, qualifications, and aspirations to recommend the most suitable visa pathway, ensuring a smooth and successful migration journey.',
    icon: 'Plane',
    color: '#84d5ff',
    bgColor: '#EBF8FF',
    link: 'https://migratezone.com/',
  },
  {
    id: 'it',
    title: 'IT Services',
    description: 'Evol Technobits Digital Pvt. Ltd. delivers comprehensive technology solutions tailored to modern business needs. Our expertise spans custom software development, responsive web applications, native and cross-platform mobile apps, creative graphic design, and strategic digital marketing. We partner with businesses to transform their digital presence, streamline operations through automation, and drive growth through innovative technology solutions that deliver measurable results.',
    icon: 'Code',
    color: '#fec5e3',
    bgColor: '#ffebf6',
    link: 'https://technobitsdigital.com/',
  },
  {
    id: 'financial',
    title: 'Financial Services',
    description: 'Evol Trader empowers retail investors with sophisticated trading solutions previously available only to institutional players. Our algorithmic trading robots continuously analyze market conditions to identify profitable opportunities across stocks, forex, and commodities. Combined with our value investing strategies based on fundamental analysis, we help investors build diversified portfolios designed for consistent, long-term growth while managing risk effectively.',
    icon: 'Coins',
    color: '#ffe661',
    bgColor: '#fff5d2',
    link: 'https://evoltrader.com/',
  },
  {
    id: 'crm',
    title: 'CRM Solutions',
    description: 'TruevalueCRM transforms how businesses manage customer relationships through intelligent automation and data-driven insights. Our platform centralizes customer interactions, automates repetitive workflows, and provides actionable analytics to boost sales performance. From lead management and pipeline tracking to customer support and retention strategies, TruevalueCRM equips your team with the tools needed to build lasting customer relationships and drive sustainable revenue growth.',
    icon: 'ListChecks',
    color: '#ad97ff',
    bgColor: '#f3eeff',
    link: 'https://truevaluecrm.com/',
  },
  {
    id: 'hr',
    title: 'Human Resource Services',
    description: 'Evol Jobs operates as a specialized international recruitment firm, connecting talented professionals with leading organizations worldwide. We handle end-to-end recruitment for permanent, contract, and temporary positions across diverse industries. Our dedicated team understands both employer requirements and candidate aspirations, ensuring successful placements that benefit all parties. We prioritize authentic opportunities and secure employment pathways for job seekers looking to advance their careers globally.',
    icon: 'Users',
    color: '#84d5ff',
    bgColor: '#EBF8FF',
    link: 'https://evoljobs.com/',
  },
  {
    id: 'affiliate',
    title: 'Affiliate Marketing Services',
    description: 'EVOL Network provides a robust affiliate marketing platform designed to help businesses expand their reach through performance-based partnerships. Our platform enables brands to connect with affiliates, track campaign performance in real-time, and optimize marketing spend for maximum return on investment. With advanced security features and transparent reporting, we ensure that both merchants and affiliates can build profitable, trust-based relationships.',
    icon: 'Share2',
    color: '#fec5e3',
    bgColor: '#ffebf6',
    link: 'https://www.evolnetwork.com/',
  },
];

export const ABOUT_STATS = [
  { icon: 'Building2', value: '10+', label: 'Companies Founded' },
  { icon: 'Briefcase', value: '20+', label: 'Years of Experience' },
  { icon: 'Globe', value: '4', label: 'Countries with Offices' },
];

export const EXPERIENCE_COMPANIES = {
  directorOf: [
    {
      name: 'Evol Technobits Digital Private Limited',
      tagline: 'Make your Business digital',
      image: '/images/Profil-Image_Sagarsir3.png',
      link: 'https://technobitsdigital.com/',
    },
    {
      name: 'Marketrill',
      tagline: 'Explore the Power of Community',
      image: '/images/marketrill.png',
      link: 'https://marketrill.com/',
    },
    {
      name: 'TrueValue CRM',
      tagline: 'Build your Foundation',
      image: '/images/Profil-Image_Sagarsir5.png',
      link: 'https://truevaluecrm.com/',
    },
  ],
  founderAndDirectorOf: [
    {
      name: 'Evol Network',
      tagline: 'The Ultimate Affiliate Marketing Platform',
      image: '/images/Profil-Image_Sagarsir6.png',
      link: 'https://www.evolnetwork.com/',
    },
    {
      name: 'Evol Trader',
      tagline: 'Automated Robot',
      image: '/images/Profil-Image_Sagarsir4.png',
      link: 'https://evoltrader.com/',
    },
    {
      name: 'Evol Entertainment',
      tagline: '',
      image: '/images/Evol-Entertainment.png',
      link: 'https://evolentertainment.com/',
    },
  ],
  proprietorOf: [
    {
      name: 'Migrate Zone',
      tagline: 'We transform your Visualization to reality',
      image: '/images/Profil-Image_Sagarsir2.png',
      link: 'https://migratezone.com/',
    },
    {
      name: 'Evol Jobs',
      tagline: '',
      image: '/images/Profil-Image_Sagarsir7.png',
      link: 'http://evoljobs.com/',
    },
    {
      name: 'Evol Assistant',
      tagline: '',
      image: '/images/Profil-Image_Sagarsir8.png',
      link: 'http://evolassistant.com/',
    },
  ],
};

export const CONSULTING_EXPERTISE = [
  'Immigration & Global Mobility',
  'Information Technology (IT)',
  'Blockchain Applications',
  'CRM Solutions',
  'Business Strategy & Operations',
];

export const WHO_I_WORK_WITH = [
  'Entrepreneurs with bold ideas',
  'Startups ready to scale',
  'Established businesses looking to innovate',
];

export const INVESTMENT_FOCUS_AREAS = [
  'Technology Startups',
  'Artificial Intelligence (AI)',
  'Cryptocurrency & Blockchain',
  'CRM & SaaS Platforms',
];

export const INVESTMENT_IDEAL_FOR = [
  'Entrepreneurs',
  'Startup Founders',
  'Visionary Builders',
];

export const GROUP_COMPANIES = [
  {
    name: 'Migrate Zone',
    description: 'A premier immigration consultancy established in 1998, Migrate Zone has helped countless individuals and families achieve their dreams of moving abroad. Our team of registered migration agents specializes in Australian and Canadian visa applications, providing personalized guidance from initial assessment through to successful settlement.',
    image: '/images/Profil-Image_Sagarsir2.png',
    website: 'https://migratezone.com',
    linkedin: 'https://au.linkedin.com/company/migrate-zone',
    instagram: 'https://www.instagram.com/migrate_zone/',
    youtube: 'https://www.youtube.com/channel/UCr9HQqnuqG0pRrdf6-VfVDw',
    facebook: 'https://www.facebook.com/migratezone',
    twitter: 'https://twitter.com/Migrate_Zone',
    gradientFrom: '#393c82',
    gradientTo: '#c02e33',
  },
  {
    name: 'Evol Technobits Digital Pvt. Ltd.',
    description: 'A full-service digital agency delivering innovative technology solutions for businesses of all sizes. From custom software development and mobile applications to web design, SEO, and digital marketing, Technobits Digital transforms ideas into powerful digital experiences that drive growth and engagement.',
    image: '/images/Profil-Image_Sagarsir3.png',
    website: 'https://technobitsdigital.com',
    linkedin: 'https://www.linkedin.com/company/technobits-digital/',
    instagram: 'https://www.instagram.com/evol_technobits_digital/',
    youtube: 'https://www.youtube.com/channel/UCq8aJthenDGQDew8TBKPhPQ',
    facebook: 'https://www.facebook.com/EvolTechnobitsDigital/',
    twitter: 'https://twitter.com/TechBitsDigital',
    gradientFrom: '#267bae',
    gradientTo: '#b7d340',
  },
  {
    name: 'Evol Network',
    description: 'A cutting-edge affiliate marketing platform connecting brands with performance-driven marketers worldwide. EVOL Network provides advanced tracking, real-time analytics, and secure payment systems to help businesses scale their marketing efforts while affiliates earn through transparent, reliable partnerships.',
    image: '/images/Profil-Image_Sagarsir6.png',
    website: 'https://www.evolnetwork.com/',
    linkedin: 'https://www.linkedin.com/company/evolnetwork',
    instagram: 'https://www.instagram.com/evolnetwork/',
    youtube: 'https://www.youtube.com/channel/UC8kmI9hGBndxwNh3tVwKZvw',
    facebook: 'https://www.facebook.com/evolnetworks/',
    twitter: 'https://twitter.com/EvolNetwork',
    telegram: 'https://t.me/evolnetworkofficial',
    pinterest: 'https://in.pinterest.com/evolnetwork/',
    gradientFrom: '#267bae',
    gradientTo: '#fbbd18',
  },
  {
    name: 'Evol Trader',
    description: 'An innovative fintech platform bringing institutional-grade trading tools to retail investors. Our algorithmic trading robots analyze market patterns to execute trades automatically, while our value investing strategies help build long-term wealth through carefully researched stock selections in equity, forex, and commodity markets.',
    image: '/images/Profil-Image_Sagarsir4.png',
    website: 'https://evoltrader.com/',
    linkedin: 'https://www.linkedin.com/company/evol-trader/',
    instagram: 'https://www.instagram.com/evoltrader/',
    youtube: 'https://www.youtube.com/channel/UCCEA_LXEAgfOv7p4ncHEY2A',
    facebook: 'https://www.facebook.com/evoltrader',
    twitter: 'https://twitter.com/EvolTraders',
    gradientFrom: '#267bae',
    gradientTo: '#e38f20',
  },
  {
    name: 'TrueValue CRM',
    description: 'A comprehensive customer relationship management platform built to streamline business operations and boost sales performance. TruevalueCRM offers lead management, pipeline tracking, automated follow-ups, and detailed analytics, helping businesses of all sizes nurture customer relationships and convert prospects into loyal clients.',
    image: '/images/Profil-Image_Sagarsir5.png',
    website: 'https://truevaluecrm.com/',
    linkedin: 'https://www.linkedin.com/company/truevalue-crm/',
    instagram: 'https://www.instagram.com/truevaluecrm/',
    youtube: '',
    facebook: 'https://www.facebook.com/truevalueCRM/',
    twitter: 'https://twitter.com/CrmTruevalue',
    gradientFrom: '#267bae',
    gradientTo: '#4f316e',
  },
  {
    name: 'Evol Entertainment',
    description: 'A dynamic entertainment company bringing the vibrant spirit of Indian culture to Australian audiences. From organizing grand concerts and cultural festivals to managing artist collaborations, Evol Entertainment creates unforgettable experiences that celebrate art, music, and dance while building bridges between communities.',
    image: '/images/Evol-Entertainment.png',
    website: 'https://evolentertainment.com/',
    linkedin: '',
    instagram: 'https://www.instagram.com/evol.entertainment1/',
    youtube: '',
    facebook: 'https://www.facebook.com/evolentertainmentcom/',
    twitter: 'https://x.com/evolentainment',
    gradientFrom: '#3A3089',
    gradientTo: '#f8669e',
  },
  {
    name: 'Evol Jobs',
    description: 'A specialized international recruitment agency connecting skilled professionals with top employers across the globe. Evol Jobs handles complete recruitment cycles for permanent, contract, and temporary positions, ensuring candidates find authentic opportunities while employers access pre-vetted talent that matches their organizational needs.',
    image: '/images/Profil-Image_Sagarsir7.png',
    website: 'http://evoljobs.com/',
    linkedin: 'https://www.linkedin.com/company/evol-jobs/',
    instagram: 'https://www.instagram.com/evoljobs/',
    youtube: '',
    facebook: 'https://www.facebook.com/evoljobs',
    twitter: 'https://twitter.com/EvolJobs',
    gradientFrom: '#00a8b5',
    gradientTo: '#007c85',
  },
  {
    name: 'Evol Assistant',
    description: 'Professional virtual assistant services designed to help busy executives and entrepreneurs manage their daily operations efficiently. From calendar management and travel coordination to email handling and administrative support, Evol Assistant serves as your reliable remote back office, freeing you to focus on strategic priorities.',
    image: '/images/Profil-Image_Sagarsir8.png',
    website: 'http://evolassistant.com/',
    linkedin: 'https://www.linkedin.com/company/evol-assistant/',
    instagram: 'https://www.instagram.com/evolassistant/',
    youtube: '',
    facebook: 'https://www.facebook.com/Evol-Assistant-109655484176630',
    twitter: '',
    gradientFrom: '#1a1a2e',
    gradientTo: '#4a4a6a',
  },
  {
    name: 'Marketrill',
    description: 'An innovative community-driven platform offering members opportunities to participate in revenue sharing and passive income programs. Marketrill combines level distribution systems with yield farming mechanisms, creating a transparent ecosystem where members can grow their investments through active community participation and strategic engagement.',
    image: '/images/marketrill.png',
    website: 'https://marketrill.com/',
    linkedin: 'https://www.linkedin.com/company/marketrill',
    instagram: 'https://www.instagram.com/marketrill1/',
    youtube: 'https://www.youtube.com/channel/UCQOKQbdWEaZ_AdQrl2N6SrA',
    facebook: 'https://www.facebook.com/marketrill',
    twitter: 'https://twitter.com/marketrill',
    telegram: 'https://t.me/marketrill',
    pinterest: 'https://in.pinterest.com/marketrill',
    medium: 'https://medium.com/@marketrill',
    reddit: 'https://www.reddit.com/user/Marketrill',
    gradientFrom: '#e91e63',
    gradientTo: '#ff6f00',
  },
];

export const LOCATIONS = [
  {
    country: 'India',
    flag: '/images/india-flag.png',
    cities: [
      {
        name: 'Vadodara',
        address: '3rd Floor, K-10 Atlantis, Tower B, Sarabhai Rd, opp. Honest Family Restaurant, Subhanpura, Vadodara, Gujarat 390007',
        icon: '/images/country_icon/vadodara-1.png',
      },
      {
        name: 'Ahmedabad',
        address: 'Sivalik Shilp, 508 and 509, Iskcon Cross Rd, Sanidhya, Ahmedabad, Gujarat 380015',
        icon: '/images/country_icon/ahmedabad-02.png',
      },
    ],
  },
  {
    country: 'Australia',
    flag: '/images/aus-flag.png',
    cities: [
      {
        name: 'Sydney',
        address: 'Level 12, 141 Walker Street, North Sydney NSW 2060, Australia',
        icon: '/images/country_icon/Australia.png',
      },
      {
        name: 'Melbourne',
        address: 'Level 21, 459 Collins Street, Melbourne, VIC, Australia',
        icon: '/images/country_icon/MELBOURNE.png',
      },
      {
        name: 'Adelaide',
        address: 'Level 5, City Central, Tower 2 121 King William Street Adelaide South Australia 5000',
        icon: '/images/country_icon/adelaide.png',
      },
    ],
  },
  {
    country: 'UAE',
    flag: '/images/dubai-flag.png',
    cities: [
      {
        name: 'Dubai',
        address: 'P.O.Box: 118093, Dubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates',
        icon: '/images/country_icon/dubai-1.png',
      },
      {
        name: 'Dubai',
        address: 'The Meydan Hotel, Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E',
        icon: '/images/country_icon/uae.png',
      },
      {
        name: 'Dubai',
        address: '911, 9th Floor, Regal Tower, Business Bay, Al Mustaqbal Street, Dubai.',
        icon: '/images/country_icon/dubai.png',
      },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Microsoft Certified Professional Database Administrator',
    image: '/images/img/Certificates_Sagar_Shah-01.webp',
    category: 'other',
    year: null,
  },
  {
    id: 2,
    title: 'Microsoft Certified Professional',
    image: '/images/img/Certificates_Sagar_Shah-07.webp',
    category: 'other',
    year: null,
  },
  {
    id: 3,
    title: 'Microsoft Certified Professional Solution Developer',
    image: '/images/img/Certificates_Sagar_Shah-09.webp',
    category: 'other',
    year: null,
  },
  {
    id: 4,
    title: 'Microsoft Certified Professional Systems Engineer',
    image: '/images/img/Certificates_Sagar_Shah-11.webp',
    category: 'other',
    year: null,
  },
  {
    id: 5,
    title: 'Microsoft Certified Systems Engineer',
    image: '/images/img/Certificates_Sagar_Shah-05.webp',
    category: '2000',
    year: 2000,
  },
  {
    id: 6,
    title: 'Microsoft Certified Systems Administrator',
    image: '/images/img/Certificates_Sagar_Shah-06.webp',
    category: '2000',
    year: 2000,
  },
  {
    id: 7,
    title: 'Windows NT Workstation Administrator',
    image: '/images/img/Certificates_Sagar_Shah-12.webp',
    category: '2000',
    year: 2000,
  },
  {
    id: 8,
    title: 'Sun Certified Programmer',
    image: '/images/img/Certificates_Sagar_Shah-10.webp',
    category: '2001',
    year: 2001,
  },
  {
    id: 9,
    title: 'Microsoft Certified Systems Engineer',
    image: '/images/img/Certificates_Sagar_Shah-02.webp',
    category: '2003',
    year: 2003,
  },
  {
    id: 10,
    title: 'Microsoft Certified Systems Administrator',
    image: '/images/img/Certificates_Sagar_Shah-08.webp',
    category: '2003',
    year: 2003,
  },
  {
    id: 11,
    title: 'Cisco Certified Network Associate - CCNA',
    image: '/images/img/Certificates_Sagar_Shah-03.webp',
    category: '2004',
    year: 2004,
  },
  {
    id: 12,
    title: 'Associate Of Australian Computer Society',
    image: '/images/img/Certificates_Sagar_Shah-04.webp',
    category: '2006',
    year: 2006,
  },
  {
    id: 13,
    title: 'Master In Cyber Security-2',
    image: '/images/img/SagarShah_Certificates-01.webp',
    category: '2020',
    year: 2020,
  },
  {
    id: 14,
    title: 'Building An Ethereum Blockchain DApp Using Solidity',
    image: '/images/img/pdf_img/Building an Ethereum Blockchain Dapp using Solidity_page-0001.webp',
    category: '2021',
    year: 2021,
  },
  {
    id: 15,
    title: 'Idea To ICO The Smart Way',
    image: '/images/img/pdf_img/From Idea to ICO Smat Way_page-0001.webp',
    category: '2021',
    year: 2021,
  },
  {
    id: 16,
    title: 'ICO 2018: The Ultimate Guide To Creating Your Own ICO',
    image: '/images/img/pdf_img/Sagar - certificate_page-0001.webp',
    category: '2021',
    year: 2021,
  },
];

export const CERTIFICATION_FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Other', value: 'other' },
  { label: '2000', value: '2000' },
  { label: '2001', value: '2001' },
  { label: '2003', value: '2003' },
  { label: '2004', value: '2004' },
  { label: '2006', value: '2006' },
  { label: '2020', value: '2020' },
  { label: '2021', value: '2021' },
];

export const CORPORATE_GALLERY = [
  { id: '184dBQCbXSL-GqDJ1DYM0z022CxInDCnK', category: 'client-dinner', title: 'Client Dinner' },
  { id: '181w1EjCmq8gvee52mugCQrGdSXxDRAl6', category: 'client-dinner', title: 'Client Dinner' },
  { id: '17uW0FufARdFZ8bSicJaBUotuw0R_Qd3q', category: 'client-dinner', title: 'Client Dinner' },
  { id: '17sfvpyZArO9L7SZhXeJm1EN2Cwn9CcoV', category: 'client-dinner', title: 'Client Dinner' },
  { id: '17ZRxQKOgrbyru_vkRXJj4TkfDkK1kGSL', category: 'client-dinner', title: 'Client Dinner' },
  { id: '17UNxgOZ0aca0BX4cZO82QwF-m838KJ7T', category: 'client-dinner', title: 'Client Dinner' },
  { id: '17R5OBH_SXRT-zkd0tNIHNoP7lM64umT_', category: 'client-dinner', title: 'Client Dinner' },
  { id: '17M7BEN0ilQgBBshdzj-vuLPQqISZEWGg', category: 'client-dinner', title: 'Client Dinner' },
  { id: '17LTwE9MgQugwmJ3u1ox8HDzOGENO6QBp', category: 'client-dinner', title: 'Client Dinner' },
  { id: '177-FfsigzVCNG_QO-dO5B4McnP5HygLn', category: 'client-dinner', title: 'Client Dinner' },
  { id: '16l4kyaTK8_6Jr70sIaV4d16NTWk6Pv1y', category: 'client-dinner', title: 'Client Dinner' },
  { id: '16eA3a-ohUwnyCNNX5C6xftl25EaM5R9v', category: 'client-dinner', title: 'Client Dinner' },
  { id: '16dmJJEUJ6Xgb7ipYf1Ixoer2-1CaCU-j', category: 'client-dinner', title: 'Client Dinner' },
  { id: '16XrCC4--6FoieyWiouFO5d3Qfr9cIxdk', category: 'client-dinner', title: 'Client Dinner' },
  { id: '16Xp7CpUEn7iGdJZpzkckYsApVKpDOfuL', category: 'client-dinner', title: 'Client Dinner' },
  { id: '16NmjrKYYdP28oCqOXYpmjvpmWOlHJ-VC', category: 'client-dinner', title: 'Client Dinner' },
  { id: '16MHfJGLk1yx2qW4kjItSKGsv1xw8sfSf', category: 'client-dinner', title: 'Client Dinner' },
  { id: '16LutadZ2jrrkvpbXf9-CCh-FpnPIhDwm', category: 'client-dinner', title: 'Client Dinner' },
  { id: '1kEc1uQzSdCuhjTdcKVggYp94F7jCSf_s', category: 'events', title: 'Events & Exhibitions' },
  { id: '1KlMj1To9_ii1dSkX9yqvzkrYVnVdWDAU', category: 'events', title: 'Events & Exhibitions' },
  { id: '1tt7nYHgwJiEa7Pn0PMU6Y7DPK9OxrB5l', category: 'events', title: 'Events & Exhibitions' },
  { id: '1bOmATPpl6WlpaWHFyM8bVU8-8G0GAhR8', category: 'events', title: 'Events & Exhibitions' },
  { id: '1yAbFr_Tw5dsujwx-buiy_05KJUhqTYoR', category: 'events', title: 'Events & Exhibitions' },
  { id: '1bkFyugo3GAxsouBb2-Ju4jopGuFjGnNz', category: 'events', title: 'Events & Exhibitions' },
  { id: '1NG1r9u_XDSe0LximZmbtwxVv7qdxzLsR', category: 'events', title: 'Events & Exhibitions' },
  { id: '1AmqB5VG0CFBqZmJ8XmGrN8f5aj-YnCYy', category: 'events', title: 'Events & Exhibitions' },
  { id: '1IeaGtMny4QLhALk9lO7OhQ3mazl0e1zX', category: 'events', title: 'Events & Exhibitions' },
  { id: '1E-o_H3umWw8GYqcEkJ_fDImmhmEldxZz', category: 'events', title: 'Events & Exhibitions' },
  { id: '1I_K89-fnzc023vHEZuuNYqWTy3QaopvT', category: 'events', title: 'Events & Exhibitions' },
  { id: '13zXiEHGZx_Nh0ERxeXDodkDm82-QrWek', category: 'events', title: 'Events & Exhibitions' },
  { id: '190Uu0E6PoHUjh3oPIzFzopt1oB-SvqK8', category: 'events', title: 'Events & Exhibitions' },
  { id: '1FBXODOOjTBtyq8QVV81NRhRnAHRHdVYN', category: 'events', title: 'Events & Exhibitions' },
  { id: '1_eOXLCOly8MMX906WReHCadztsdvAL-o', category: 'events', title: 'Events & Exhibitions' },
  { id: '1W5Pl0Mwk8m5O2FHnxUeoHDzC69lj5Uvd', category: 'events', title: 'Events & Exhibitions' },
  { id: '1GJHZKYimqfbT2Bmm1dunnXtRhhrYZO-w', category: 'events', title: 'Events & Exhibitions' },
  { id: '11Z3agqUp4RPk-CqFB-5WSdjsjMM_EWGl', category: 'events', title: 'Events & Exhibitions' },
  { id: '1k0agSLdgR_RRBcXnIgplGBV9Ft17Zlip', category: 'events', title: 'Events & Exhibitions' },
  { id: '1kWeLNhAgOtbP9jdZYw9olGWIKYlxn1Li', category: 'events', title: 'Events & Exhibitions' },
  { id: '1nAf3hy1-npIUkMXEAbHEdvo7pi91PD5C', category: 'events', title: 'Events & Exhibitions' },
  { id: '1IkOkXCm5txjeVXdUYa-TAei4qGWZ4PNh', category: 'events', title: 'Events & Exhibitions' },
  { id: '1AkYOUTn70EW0F19zDHms0g891yoWA2ob', category: 'events', title: 'Events & Exhibitions' },
  { id: '1h2PY4CwdHCjBqu51d2TCghGv10cbVW5m', category: 'events', title: 'Events & Exhibitions' },
  { id: '1lAYU0KxzAddwx1-g_DVaOhHRpkXcp5LD', category: 'events', title: 'Events & Exhibitions' },
  { id: '1u2I3XJBPgTRVPQVRLPn56xLDQbraPbj9', category: 'events', title: 'Events & Exhibitions' },
  { id: '1H1Q-Dy07GyLO90XF-_VHcaxZR4RQQTQT', category: 'events', title: 'Events & Exhibitions' },
];

export const CORPORATE_GALLERY_FILTERS = [
  { label: 'All', value: 'all', icon: 'LayoutGrid' },
  { label: 'Client Dinners', value: 'client-dinner', icon: 'Utensils' },
  { label: 'Events & Exhibitions', value: 'events', icon: 'Calendar' },
  { label: 'Business Visits', value: 'uae', icon: 'Building' },
  { label: 'Behind the Scenes', value: 'behind', icon: 'Camera' },
];

// New professional sections - Added to enhance brand authority
export const VISION_PHILOSOPHY = {
  title: 'Vision & Leadership Philosophy',
  subtitle: 'Building Tomorrow\'s Business Landscape Today',
  content: 'My leadership philosophy centers on the belief that sustainable success comes from empowering teams, embracing innovation, and maintaining unwavering commitment to excellence. Every venture I undertake is guided by a vision to create lasting value for stakeholders while contributing positively to the global business ecosystem.',
  principles: [
    { title: 'Innovation First', description: 'Continuously seeking breakthrough solutions that redefine industry standards.' },
    { title: 'People-Centric', description: 'Building strong teams and fostering a culture of growth and collaboration.' },
    { title: 'Global Perspective', description: 'Thinking globally while executing with local precision and cultural sensitivity.' },
    { title: 'Sustainable Growth', description: 'Prioritizing long-term value creation over short-term gains.' },
  ],
};

export const CORE_VALUES = [
  { title: 'Integrity', description: 'Conducting business with the highest ethical standards and transparency.' },
  { title: 'Excellence', description: 'Striving for perfection in every project, product, and partnership.' },
  { title: 'Innovation', description: 'Embracing change and pioneering new solutions for evolving challenges.' },
  { title: 'Collaboration', description: 'Building strong partnerships that create mutual value and success.' },
];

export const TRUSTED_BY = {
  title: 'Trusted by Leaders Worldwide',
  subtitle: 'Building lasting partnerships with businesses across the globe',
  stats: [
    { value: '500+', label: 'Successful Projects' },
    { value: '50+', label: 'Global Partners' },
    { value: '25+', label: 'Years of Trust' },
    { value: '15+', label: 'Industries Served' },
  ],
};

// Social media follower counts
export const SOCIAL_MEDIA_STATS = {
  twitter: '7.5K+',
  facebook: '11K+',
  linkedin: '4.6K+',
  instagram: '59.5K+',
};

// Testimonials from Google Reviews
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Pratik Mahant',
    initials: 'PM',
    rating: 5,
    text: 'Migratezone gives the best advice and service for its clients. They would be there to answer all of your questions and guide you all the way...',
    company: 'Migrate Zone',
    companyLogo: '/images/comapany_icons/MZ1.png',
    reviewLink: 'https://www.google.com/search?q=migratezone+Review#lrd=0x395fc90d0b21cc4b:0x706d95b3e57462b7,1,,,',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    name: 'Darshan Limbani',
    initials: 'DL',
    rating: 5,
    text: 'Excellent service provider in Vadodara. They created very nice website for my business. I highly recommend Technobits company if you wish...',
    company: 'Evol Technobits Digital Pvt. Ltd.',
    companyLogo: '/images/comapany_icons/TBD1.png',
    reviewLink: 'https://www.google.com/search?q=technobits#lrd=0x395fc8b9b4c40d2d:0xf1cedf83378e98,1,,,',
    bgColor: 'bg-green-100',
  },
  {
    id: 3,
    name: 'Omkar Shah',
    initials: 'OS',
    rating: 5,
    text: 'I got work permit of two years of Canada. I thank Sagarbhai Shah and entire Migrate Zone team of Vadodara for giving me full support...',
    company: 'Migrate Zone',
    companyLogo: '/images/comapany_icons/MZ1.png',
    reviewLink: 'https://www.google.com/search?q=migratezone+Review#lrd=0x395fc90d0b21cc4b:0x706d95b3e57462b7,1,,,',
    bgColor: 'bg-purple-100',
  },
  {
    id: 4,
    name: 'Anjali Wadhwani',
    initials: 'AW',
    rating: 5,
    text: 'Technobits digital helped me create a website for my business. They are creative and innovative website developers. If you want to make...',
    company: 'Evol Technobits Digital Pvt. Ltd.',
    companyLogo: '/images/comapany_icons/TBD1.png',
    reviewLink: 'https://www.google.com/search?q=technobits#lrd=0x395fc8b9b4c40d2d:0xf1cedf83378e98,1,,,',
    bgColor: 'bg-orange-100',
  },
  {
    id: 5,
    name: 'Dhruv Thakkar',
    initials: 'DT',
    rating: 5,
    text: 'I have found one of the best visa counseling. Counselors provide very precise information and also give me future guidance & I am very...',
    company: 'Migrate Zone',
    companyLogo: '/images/comapany_icons/MZ1.png',
    reviewLink: 'https://www.google.com/search?q=migratezone+Review#lrd=0x395fc90d0b21cc4b:0x706d95b3e57462b7,1,,,',
    bgColor: 'bg-green-100',
  },
  {
    id: 6,
    name: 'Vijay Chauhan',
    initials: 'VC',
    rating: 5,
    text: 'This is the best company. Very good experience with Technobits digital. It\'s a best IT company in Vadodara and with best design company...',
    company: 'Evol Technobits Digital Pvt. Ltd.',
    companyLogo: '/images/comapany_icons/TBD1.png',
    reviewLink: 'https://www.google.com/search?q=technobits#lrd=0x395fc8b9b4c40d2d:0xf1cedf83378e98,1,,,',
    bgColor: 'bg-purple-100',
  },
  {
    id: 7,
    name: 'Kesha Patel',
    initials: 'KP',
    rating: 5,
    text: 'Migratezone is one of the best consultancy for Australia for visitor to work. The whole staff is very helpful. It was really a great experience...',
    company: 'Migrate Zone',
    companyLogo: '/images/comapany_icons/MZ1.png',
    reviewLink: 'https://www.google.com/search?q=migratezone+Review#lrd=0x395fc90d0b21cc4b:0x706d95b3e57462b7,1,,,',
    bgColor: 'bg-orange-100',
  },
  {
    id: 8,
    name: 'Nadeem Rathod',
    initials: 'NR',
    rating: 5,
    text: 'Thank you Technobits for helping me out with my website. I highly recommend Evol Technobits Digital all of you for IT services.',
    company: 'Evol Technobits Digital Pvt. Ltd.',
    companyLogo: '/images/comapany_icons/TBD1.png',
    reviewLink: 'https://www.google.com/search?q=technobits#lrd=0x395fc8b9b4c40d2d:0xf1cedf83378e98,1,,,',
    bgColor: 'bg-blue-100',
  },
];

// Blog Articles & News
export const BLOG_ARTICLES = [
  {
    id: 1,
    title: 'Top 8 Web Development Trends of 2024',
    image: '/images/blogs/blog-01.jpg',
    date: 'Dec 05, 2024',
    link: 'https://technobitsdigital.com/blogs/top-8-web-development-trends-of-2024-whats-hot-this-year/',
    category: 'Technology',
  },
  {
    id: 2,
    title: "Australia's Work and Holiday Visa for Indians",
    image: '/images/blogs/blog-04.png',
    date: 'Nov 13, 2024',
    link: 'https://www.migratezone.com/blogs/australias-work-and-holiday-visa-for-indians-a-guide-to-living-working-and-studying-down-under/',
    category: 'Visa Related',
  },
  {
    id: 3,
    title: "CRM Software's Transformative Power",
    image: '/images/blogs/blog-02.png',
    date: 'May 08, 2024',
    link: 'https://technobitsdigital.com/blogs/unlocking-business-success-crm-softwares-transformative-power/',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'A Comprehensive Guide to Writing an Effective Express Entry Profile',
    image: '/images/blogs/blog-03.jpeg',
    date: 'Apr 02, 2024',
    link: 'https://www.migratezone.com/blogs/a-comprehensive-guide-to-writing-an-effective-express-entry-profile/',
    category: 'Visa Related',
  },
  {
    id: 5,
    title: 'How to Bring Your Partner and Kids to Canada',
    image: '/images/blogs/blog-4.jpg',
    date: 'Jun 14, 2022',
    link: 'https://migratezone.com/blogs/how-to-bring-your-partner-and-kids-to-canada/',
    category: 'Visa Related',
  },
  {
    id: 6,
    title: "Australian Visa Reforms in 2022: Immigrants' Opportunities",
    image: '/images/blogs/blog-1.jpg',
    date: 'Jul 02, 2022',
    link: 'https://migratezone.com/blogs/australian-visa-reforms-in-2022-immigrants-opportunities-this-year/',
    category: 'Visa Related',
  },
  {
    id: 7,
    title: 'Cybercriminals Exploit Deceased Staff Accounts to Infect Nemty Ransomware',
    image: '/images/blogs/blog-6.jpg',
    date: 'Jan 29, 2021',
    link: 'https://technobitsdigital.com/blogs/cybercriminals-exploit-deceased-staff-accounts-to-infect-nemty-ransomware/',
    category: 'Technology',
  },
  {
    id: 8,
    title: '9 Machine Learning Trends That Could Impact Business',
    image: '/images/blogs/blog-2.jpg',
    date: 'Nov 13, 2021',
    link: 'https://technobitsdigital.com/blogs/9-machine-learning-trends-that-could-impact-business-in-2022/',
    category: 'Technology',
  },
];

// Blog Categories for dropdown
export const BLOG_CATEGORIES = [
  { name: 'Technology', link: 'https://technobitsdigital.com/blogs/' },
  { name: 'Cryptocurrency', link: 'https://www.evolnetwork.com/blogs/' },
  { name: 'Visa Related', link: 'https://www.migratezone.com/blogs/' },
  { name: 'Automated Trading', link: 'https://www.evoltrader.com/blog/' },
];
