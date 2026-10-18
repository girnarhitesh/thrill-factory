import { Activity } from '@/types';

export interface KidsActivity extends Activity {
  ageGroup: string;
  description: string;
}

export const KIDS_ZONE_DATA: KidsActivity[] = [
  {
    id: 'soft-play-zone',
    slug: 'soft-play-zone-for-kids',
    title: 'Soft Play Zone For Kids',
    price: 100,
    category: 'kids',
    tag: 'Ages 2 to 10',
    ageGroup: 'Ages 2 to 10',
    ageLimit: '2 - 10 Years',
    weightLimit: 'Child Safe (Up to 45 kg)',
    duration: '30 Minutes per session',
    image: '/images/soft-play-zone.jpg',
    description: 'Safe, cushioned, multi-level foam obstacles, tunnels, and soft slides designed for pure fun and energetic play in Shivpuri.',
    shortDesc: 'Safe, cushioned, multi-level foam obstacles, tunnels, and soft slides designed for pure fun and energetic play in Shivpuri.',
    fullDesc: 'If you are looking for a child-friendly activity in Rishikesh that feels safe, playful, and easy to enjoy, Soft Play Zone For Kids at Thrill Factory is a strong fit. This activity is designed around movement, exploration, and free play in a kid-focused environment. It works particularly well for parents who want an engaging option for younger children during a family visit.',
    features: [
      'Multi-level cushioned foam obstacle courses & mini slides',
      'High-density EVA shock-absorbent safety padding',
      'Attentive marshals stationed on-site at all times',
      'Sensory play tunnels, ball pits & crawl tubes'
    ],
    paragraphs: [
      'If you are looking for a child-friendly activity in Rishikesh that feels safe, playful, and easy to enjoy, Soft Play Zone For Kids at Thrill Factory is a strong fit.',
      'The core appeal of a soft play zone is that it gives children room to climb, crawl, slide, move, and interact in a fun setup built for their comfort.',
      'All play equipment and floor surfaces are thoroughly sanitized between sessions and lined with high-density EVA shock-absorbent foam.',
      'Parents can comfortably supervise from the adjacent viewing gallery or riverside café area.'
    ]
  },
  {
    id: 'ball-pool',
    slug: 'ball-pool-for-kids',
    title: 'Ball Pool for Kids',
    price: 100,
    category: 'kids',
    tag: 'Ages 2 to 8',
    ageGroup: 'Ages 2 to 8',
    ageLimit: '2 - 8 Years',
    weightLimit: 'Child Safe (Up to 35 kg)',
    duration: '30 Minutes per session',
    image: '/images/ball-pool.jpg',
    description: 'A vibrant, colorful pool filled with thousands of sanitized soft plastic balls. An interactive and joyful favorite for younger children.',
    shortDesc: 'A vibrant, colorful pool filled with thousands of sanitized soft plastic balls. An interactive and joyful favorite for younger children.',
    fullDesc: 'Ball Pool for Kids at Thrill Factory is a cheerful activity created for children who love active play, movement, and soft-play fun. It gives kids a lively space where they can jump in, move around, and enjoy themselves in an engaging environment.',
    features: [
      'Thousands of BPA-free, sanitized colorful plastic balls',
      'Soft padded perimeter walls preventing bumps or falls',
      'Encourages sensory development, motor skills & social play',
      'Clean, climate-monitored indoor arena'
    ],
    paragraphs: [
      'A ball pool is one of the most loved play attractions for younger children because it feels simple, exciting, and comfortable at the same time.',
      'It encourages playful movement, curiosity, and free activity, making it a strong choice for parents who want their children to enjoy a light and entertaining experience during a family visit.',
      'Sanitized daily with child-safe disinfectants to guarantee a pristine and hygienic environment.'
    ]
  },
  {
    id: 'hoverboard-ride',
    slug: 'hoverboard-ride-kids',
    title: 'Hoverboard Ride for Kids',
    price: 200,
    category: 'kids',
    tag: 'Ages 6 to 14',
    ageGroup: 'Ages 6 to 14',
    ageLimit: '6 - 14 Years',
    weightLimit: 'Min 20 kg, Max 65 kg',
    duration: '15 Minutes per session',
    image: '/images/hoverboard.jpg',
    description: 'Modern self-balancing hoverboards with safety helmets and elbow guards. A thrilling alternative to standard rides supervised by our marshals.',
    shortDesc: 'Modern self-balancing hoverboards with safety helmets and elbow guards. A thrilling alternative to standard rides supervised by our marshals.',
    fullDesc: 'Hoverboard Ride for Kids at Thrill Factory gives children a playful riding experience built around balance, movement, and excitement. It is a good fit for young visitors who enjoy trying something new in a controlled entertainment setting.',
    features: [
      'Smart gyro-stabilized self-balancing hoverboards',
      'Full safety kit: Certified helmet, knee & elbow pads',
      'One-on-one marshal balance briefing before riding',
      'Smooth, barrier-enclosed indoor circuit'
    ],
    paragraphs: [
      'The activity combines fun and coordination. For children, the appeal is simple: the hoverboard feels modern, exciting, and memorable.',
      'It gives them a chance to glide, balance, and enjoy a ride experience that feels interactive rather than passive.',
      'Trained recreational attendants assist every child with boarding, dismounting, and steady balance.'
    ]
  },
  {
    id: 'kids-trampoline',
    slug: 'kids-trampoline',
    title: 'Kids Trampoline',
    price: 150,
    category: 'kids',
    tag: 'Ages 4 to 14',
    ageGroup: 'Ages 4 to 14',
    ageLimit: '4 - 14 Years',
    weightLimit: 'Child Safe (Up to 55 kg)',
    duration: '20 Minutes per session',
    image: '/images/kids-trampoline.jpg',
    description: 'High-energy, spring-cushioned trampoline arenas with enclosed safety netting allowing kids to jump and flip safely.',
    shortDesc: 'High-energy, spring-cushioned trampoline arenas with enclosed safety netting allowing kids to jump and flip safely.',
    fullDesc: 'Kids Trampoline at Thrill Factory is a lively attraction designed for children who love jumping, movement, and active entertainment. It gives young visitors a chance to enjoy a simple but exciting experience that feels both fun and memorable.',
    features: [
      'Heavy-duty commercial bounce mat with high spring cushion',
      'Full 360-degree high perimeter safety enclosure netting',
      'Padded thick spring covers preventing pinch points',
      'Supervised single-jumper zones for safe bouncing'
    ],
    paragraphs: [
      'A trampoline activity works well for families because it is easy to understand, visually engaging, and naturally exciting for children.',
      'The joy comes from movement, bounce, and the freedom to play in a way that feels active rather than passive.',
      'Attendants ensure jumpers maintain safe intervals and prevent overcrowding in each bay.'
    ]
  },
  {
    id: 'car-ride-kids',
    slug: 'car-ride-for-kids',
    title: 'Car Ride for Kids',
    price: 100,
    category: 'kids',
    tag: 'Ages 3 to 10',
    ageGroup: 'Ages 3 to 10',
    ageLimit: '3 - 10 Years',
    weightLimit: 'Child Safe (Up to 40 kg)',
    duration: '15 Minutes per session',
    image: '/images/car-ride.jpg',
    description: 'Mini electric rechargeable cars with steering controls, fun music, and safe speed limiters on a dedicated smooth track.',
    shortDesc: 'Mini electric rechargeable cars with steering controls, fun music, and safe speed limiters on a dedicated smooth track.',
    fullDesc: 'Car Ride for Kids at Thrill Factory gives children an enjoyable ride experience in a setting designed for entertainment and movement. It is a strong option for parents who want an activity that keeps children engaged while adding variety to a family outing.',
    features: [
      'Electric battery mini-cars with steering wheel & pedals',
      'Speed regulated to safe child-friendly pacing (3-5 km/h)',
      'Dual controls: Child steering with adult remote override',
      'Smooth dedicated rubberized indoor circuit track'
    ],
    paragraphs: [
      'This activity is ideal for children who enjoy ride-based fun and love the feeling of driving-style play.',
      'A kids car ride combines movement, excitement, and imagination, making it a memorable part of the visit.',
      'Each car is equipped with seat belts, rounded soft bumpers, and automatic braking when pedals are released.'
    ]
  },
  {
    id: 'scooter-ride-kids',
    slug: 'scooter-ride-kids',
    title: 'Scooter Ride Kids',
    price: 100,
    category: 'kids',
    tag: 'Ages 4 to 12',
    ageGroup: 'Ages 4 to 12',
    ageLimit: '4 - 12 Years',
    weightLimit: 'Child Safe (Up to 50 kg)',
    duration: '15 Minutes per session',
    image: '/images/kids-scooter.jpg',
    description: 'Kid-friendly electric and push scooters with protective gear provided. Great for balance and active outdoor coordination.',
    shortDesc: 'Kid-friendly electric and push scooters with protective gear provided. Great for balance and active outdoor coordination.',
    fullDesc: 'Scooter Ride for Kids at Thrill Factory gives children a simple riding experience built around movement, balance, and confidence. It works well for young visitors who enjoy interactive entertainment instead of passive rides.',
    features: [
      'Stable 3-wheel balanced scooters and light electric rides',
      'Full safety gear provided: CE helmet & joint pads',
      'Wide non-slip foot decks for steady balance',
      'Supervised closed circuit free of external traffic'
    ],
    paragraphs: [
      'The attraction is easy to position for families because it combines excitement with approachability.',
      'Children get the feeling of riding, steering, and moving independently in a controlled setup.',
      'Encourages coordination, confidence, and active outdoor motor skills.'
    ]
  },
  {
    id: 'wall-climbing-child',
    slug: 'wall-climbing-child',
    title: 'Wall Climbing (Child / Under 14)',
    price: 200,
    category: 'kids',
    tag: 'Ages 5 to 14',
    ageGroup: 'Ages 5 to 14',
    ageLimit: '5 - 14 Years',
    weightLimit: 'Child Safe (Up to 60 kg)',
    duration: 'Per Climb Session',
    image: '/images/platform-view.jpg',
    description: 'Engineered artificial bouldering wall with child-sized colored grips, auto-belay safety ropes, and certified ground attendants.',
    shortDesc: 'Engineered artificial bouldering wall with child-sized colored grips, auto-belay safety ropes, and certified ground attendants.',
    fullDesc: 'Wall Climbing for Kids at Thrill Factory is a thrilling introduction to vertical adventure. With ergonomic textured climbing holds and automatic magnetic belay cables, children climb to new heights safely and confidently.',
    features: [
      'Auto-belay braking system ensuring smooth, gentle descents',
      'Ergonomic color-coded climbing grips for small hands',
      'Full body climbing harness fitted by certified instructors',
      'High-density crash landing pads below entire wall'
    ],
    paragraphs: [
      'Wall Climbing combines fitness, focus, and fun for younger adventurers.',
      'Children test their agility and problem-solving skills as they navigate routes upward.',
      'Certified belay supervisors monitor every climb and assist young adventurers at each step.'
    ]
  },
  {
    id: 'indoor-arcade',
    slug: 'indoor-arcade',
    title: 'Indoor Arcade & Games Zone',
    price: 150,
    category: 'kids',
    tag: 'All Ages',
    ageGroup: 'All Ages',
    ageLimit: 'All Ages Welcome',
    weightLimit: 'No Limit',
    duration: 'Per Token / Game',
    image: '/images/combo-4.jpg',
    description: 'An indoor gaming hub featuring retro arcade classics, air hockey, and racing simulators suitable for children and families.',
    shortDesc: 'An indoor gaming hub featuring retro arcade classics, air hockey, and racing simulators suitable for children and families.',
    fullDesc: 'Step into a world of excitement and entertainment at Thrill Factory Indoor Arcade. With a wide variety of arcade games that cater to all ages and skill levels, our indoor arena is the perfect destination for children and family fun.',
    features: [
      'Multiplayer air hockey tables & electronic basketball hoops',
      'Interactive racing simulators & retro arcade cabinets',
      'Air-conditioned, modern indoor gaming atmosphere',
      'Token system with game credit bundles available'
    ],
    paragraphs: [
      'The indoor arcade is packed with a vast array of games that keep children and parents entertained together.',
      'From friendly air hockey matches to high-score basketball shootouts, there is something for every skill level.',
      'A great way to relax or play indoors during warmer Rishikesh afternoons.'
    ]
  }
];
