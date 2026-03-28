// Tour Data
export const tours = [
  {
    id: 1,
    name: 'City Lights Experience',
    location: 'New York City',
    duration: '30 mins',
    capacity: '3 people',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3',
    description: 'Spectacular night flight over Manhattan skyline',
    rating: 4.8,
    reviews: 124,
    features: ['Night Flight', 'City Views', 'Photo Opportunities']
  },
  {
    id: 2,
    name: 'Grand Canyon Adventure',
    location: 'Arizona',
    duration: '2 hours',
    capacity: '5 people',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3',
    description: 'Breathtaking views of the majestic Grand Canyon',
    rating: 4.9,
    reviews: 256,
    features: ['Canyon Views', 'Sunset Options', 'Expert Guides']
  },
  {
    id: 3,
    name: 'Coastal Paradise',
    location: 'California',
    duration: '1.5 hours',
    capacity: '4 people',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3',
    description: 'Fly along the stunning Pacific coastline',
    rating: 4.7,
    reviews: 189,
    features: ['Beach Views', 'Wildlife Spotting', 'Ocean Photography']
  },
  {
    id: 4,
    name: 'Mountain Majesty',
    location: 'Colorado',
    duration: '2.5 hours',
    capacity: '4 people',
    price: '$749',
    image: 'https://images.unsplash.com/photo-1504373596241-abbcf7b669e2?ixlib=rb-4.0.3',
    description: 'Explore the Rocky Mountains from above',
    rating: 4.9,
    reviews: 312,
    features: ['Mountain Views', 'Snow Caps', 'Alpine Lakes']
  },
  {
    id: 5,
    name: 'Sunset Romance',
    location: 'Hawaii',
    duration: '1 hour',
    capacity: '2 people',
    price: '$449',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3',
    description: 'Romantic sunset flight over tropical paradise',
    rating: 5.0,
    reviews: 98,
    features: ['Sunset Views', 'Champagne', 'Private Flight']
  },
  {
    id: 6,
    name: 'Urban Explorer',
    location: 'Chicago',
    duration: '45 mins',
    capacity: '4 people',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3',
    description: 'Discover iconic skyscrapers and lakefront',
    rating: 4.6,
    reviews: 167,
    features: ['Architecture Tour', 'Lake Michigan', 'Downtown Views']
  }
];

// Features Data
export const features = [
  {
    id: 1,
    icon: 'FiClock',
    title: '24/7 Support',
    description: 'Round-the-clock customer service for all your needs'
  },
  {
    id: 2,
    icon: 'FiShield',
    title: 'Safety First',
    description: 'Top-rated safety standards and certified pilots'
  },
  {
    id: 3,
    icon: 'FiMap',
    title: 'Custom Routes',
    description: 'Personalized itineraries tailored to you'
  },
  {
    id: 4,
    icon: 'FiUsers',
    title: 'Expert Guides',
    description: 'Knowledgeable local guides and pilots'
  },
  {
    id: 5,
    icon: 'FiCamera',
    title: 'Photo Ops',
    description: 'Stunning aerial photography opportunities'
  },
  {
    id: 6,
    icon: 'FiStar',
    title: 'Luxury Experience',
    description: 'Premium service with VIP treatment'
  }
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Seeker',
    content: 'Absolutely incredible experience! The views were breathtaking and the pilot was professional and friendly. Highly recommend!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    date: 'March 2024'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Travel Blogger',
    content: 'Best helicopter tour I\'ve ever taken. The team went above and beyond to make sure we had an amazing time. 10/10!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    date: 'February 2024'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Photographer',
    content: 'Perfect for capturing stunning aerial shots. The pilot knew all the best spots and gave us plenty of time for photos.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    date: 'January 2024'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Business Executive',
    content: 'Professional service from start to finish. The helicopter was immaculate and the pilot very experienced.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    date: 'December 2023'
  }
];

// FAQ Data
export const faqs = [
  {
    id: 1,
    question: 'Is it safe to fly in a helicopter?',
    answer: 'Absolutely! Safety is our top priority. All our helicopters undergo regular maintenance checks, and our pilots are highly trained professionals with thousands of flight hours.'
  },
  {
    id: 2,
    question: 'What should I wear for a helicopter tour?',
    answer: 'Wear comfortable clothing and closed-toe shoes. We recommend dressing in layers as temperatures can vary at different altitudes. Don\'t forget sunglasses!'
  },
  {
    id: 3,
    question: 'Can I bring a camera?',
    answer: 'Yes! We encourage you to bring cameras and smartphones to capture the amazing views. We also offer professional photography packages.'
  },
  {
    id: 4,
    question: 'What is your cancellation policy?',
    answer: 'We offer free cancellation up to 24 hours before your scheduled flight. Cancellations within 24 hours may incur a fee. Weather-related cancellations are always fully refundable.'
  },
  {
    id: 5,
    question: 'Are there weight restrictions?',
    answer: 'For safety and comfort, there are weight restrictions per helicopter. Please contact us for specific details based on your group size.'
  }
];

// Service Packages
export const servicePackages = [
  {
    id: 1,
    name: 'Basic Tour',
    price: '$299',
    duration: '30 mins',
    features: [
      'Scenic flight',
      'Professional pilot',
      'Safety briefing',
      'Digital photos'
    ],
    recommended: false
  },
  {
    id: 2,
    name: 'Premium Experience',
    price: '$599',
    duration: '1.5 hours',
    features: [
      'Extended flight route',
      'Champagne service',
      'Professional photos',
      'Souvenir video',
      'Private tour'
    ],
    recommended: true
  },
  {
    id: 3,
    name: 'Ultimate Adventure',
    price: '$999',
    duration: '3 hours',
    features: [
      'Custom route',
      'Gourmet lunch',
      'Professional photography',
      'Helicopter control experience',
      'Group of 4 max'
    ],
    recommended: false
  }
];

// Gallery Images
export const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b',
    title: 'Mountain Flight',
    category: 'Adventure'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74',
    title: 'City Skyline',
    category: 'Urban'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21',
    title: 'Coastal View',
    category: 'Nature'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9',
    title: 'Grand Canyon',
    category: 'Nature'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1504373596241-abbcf7b669e2',
    title: 'Sunset Flight',
    category: 'Romantic'
  }
];

// Company Info
export const companyInfo = {
  name: 'SkyLife Travel',
  tagline: 'Soar Above the Extraordinary',
  founded: 2015,
  email: 'info@skylife.com',
  phone: '+1 (555) 123-4567',
  address: '123 Skyline Drive, New York, NY 10001',
  socialMedia: {
    facebook: 'https://facebook.com/skylife',
    twitter: 'https://twitter.com/skylife',
    instagram: 'https://instagram.com/skylife'
  }
};

// Navigation Links
export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/tours', label: 'Tours' },
  { path: '/heliflight', label: 'Heliflight' },
  { path: '/contact', label: 'Contact' },
  { path: '/login', label: 'Login' }
];

// Helper function to get tour by ID
export const getTourById = (id) => {
  return tours.find(tour => tour.id === parseInt(id));
};

// Helper function to get featured tours (first 3)
export const getFeaturedTours = () => {
  return tours.slice(0, 3);
};

// Helper function to get popular tours (highest rated)
export const getPopularTours = () => {
  return [...tours].sort((a, b) => b.rating - a.rating).slice(0, 3);
};

// Helper function to get latest testimonials
export const getLatestTestimonials = () => {
  return testimonials.slice(0, 3);
};