export interface RideDetail {
  title: string;
  heightOrSpec?: string;
  text: string;
}

export interface ComboSafetySpecs {
  weightLimit: string;
  ageLimit: string;
  duration: string;
  gear: string;
}

export interface PackageCombo {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  popular?: boolean;
  featured?: boolean;
  image: string;
  gallery: string[];
  formula: string;
  activitiesIncluded: string[];
  highlights: string[];
  suitableFor: string;
  safetySpecs: ComboSafetySpecs;
  rideDetails: RideDetail[];
}

export const FEATURED_PACKAGES: PackageCombo[] = [
  {
    "id": "bungee-jumping-combo-rishikesh",
    "title": "Thrill Combo 2.4",
    "subtitle": "Reverse Bungee+ Giant Swing +SCAD Jump",
    "price": 5500,
    "originalPrice": 7500,
    "badge": "Triple Thrill",
    "popular": false,
    "featured": true,
    "image": "/images/combo-thrill-1.jpg",
    "gallery": [
      "/images/combo-thrill-1.jpg",
      "/images/reverse-bungee.jpg",
      "/images/giant-swing.jpg",
      "/images/scad-jump.jpg"
    ],
    "formula": "Reverse Bungee+ Giant Swing +SCAD Jump",
    "activitiesIncluded": [
      "Reverse Bungee in Rishikesh (180 ft)",
      "Giant Swing in Rishikesh (140 ft)",
      "Scad Jump in Rishikesh (150 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      },
      {
        "title": "Giant Swing in Rishikesh",
        "heightOrSpec": "140 FT Pendulum Arc",
        "text": "Giant Swing in Rishikesh offers an adrenaline-pumping adventure that will take your breath away. At Thrill Factory, you'll have the opportunity to embark on a thrilling ride that combines the exhilaration of a swing with the excitement of freefall. Prepare yourself for a heart-pounding experience as you are lifted high above the ground and then released into an incredible pendulum swing. The rush of wind, the feeling of weightlessness, and the sheer speed make the giant swing an unforgettable adventure."
      },
      {
        "title": "SCAD Jumping in Rishikesh",
        "heightOrSpec": "140 FT – 150 FT Net Freefall",
        "text": "SCAD jumping in Rishikesh offers an adrenaline-pumping adventure that will push your limits and leave you with an unforgettable experience. At Thrill Factory, you'll have the chance to engage in SCAD jumping, a unique and thrilling activity that will have you soaring through the air. Prepare yourself for an extraordinary leap from India's highest fixed platform, standing at an astounding height. As you prepare for the jump, your heart pounding with excitement, the breathtaking views of the surrounding natural beauty will further enhance the thrill. The incredible rush of adrenaline and the sensation of weightlessness during the descent make SCAD jumping a truly remarkable adventure."
      }
    ]
  },
  {
    "id": "bungee-combo",
    "title": "Thrill Combo 1.3",
    "subtitle": "Free Style Bungee + Any one From Reverse Bungee/ Gaint Swing / Scad Jump",
    "price": 3800,
    "originalPrice": 5000,
    "badge": "Custom Choice",
    "popular": false,
    "featured": true,
    "image": "/images/combo-thrill-1.jpg",
    "gallery": [
      "/images/combo-thrill-1.jpg",
      "/images/hero-bungee.jpg",
      "/images/reverse-bungee.jpg",
      "/images/giant-swing.jpg"
    ],
    "formula": "Free Style Bungee + Any one From Reverse Bungee/ Gaint Swing / Scad Jump",
    "activitiesIncluded": [
      "Free Style Bungee (160 ft)",
      "Reverse Bungee in Rishikesh (180 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Freestyle Bungee Jumping at Thrill Factory is not just a fall. It is a full-blown flight of freedom. With a 160 ft jump height and a full-body harness, this experience gives you the ability to flip, dive, or freefall in your own unique style. Unlike traditional bungee jumping, freestyle allows greater mobility in mid-air, turning your adrenaline rush into a personal performance."
      },
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Whether you're a first-timer looking to conquer your fears or a seasoned jumper chasing your next thrill, our freestyle bungee offers the perfect mix of safety, intensity and fun. Every second of the drop is heart-racing and unforgettable."
      },
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      }
    ]
  },
  {
    "id": "bungee-jump-and-giant-swing-combo",
    "title": "Thrill Combo 1",
    "subtitle": "Bungee Jump +Giant Swing +Reverse Bungee+ SCAD Jump",
    "price": 5500,
    "originalPrice": 9000,
    "badge": "Most Popular",
    "popular": true,
    "featured": true,
    "image": "/images/combo-thrill-4.jpg",
    "gallery": [
      "/images/combo-thrill-4.jpg",
      "/images/bungee-165ft.jpg",
      "/images/reverse-bungee.jpg",
      "/images/giant-swing.jpg",
      "/images/scad-jump.jpg"
    ],
    "formula": "Bungee Jump +Giant Swing +Reverse Bungee+ SCAD Jump",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (180 ft)",
      "Reverse Bungee in Rishikesh (180 ft)",
      "Giant Swing in Rishikesh (140 ft)",
      "Scad Jump in Rishikesh (140 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT India Fixed Platform",
        "text": "Bungee jumping in Rishikesh is a heart-pounding activity that allows you to conquer your fears and experience an exhilarating freefall. At Thrill Factory, you'll have the opportunity to take a leap from India's highest fixed platform, standing at a staggering height. As you prepare to jump, the adrenaline coursing through your veins, you'll be rewarded with breathtaking views of the surrounding natural beauty. The rush of adrenaline and the feeling of weightlessness during the descent make bungee jumping an unforgettable adventure."
      },
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      },
      {
        "title": "Giant Swing in Rishikesh",
        "heightOrSpec": "140 FT Pendulum Arc",
        "text": "Giant Swing in Rishikesh offers an adrenaline-pumping adventure that will take your breath away. At Thrill Factory, you'll have the opportunity to embark on a thrilling ride that combines the exhilaration of a swing with the excitement of freefall. Prepare yourself for a heart-pounding experience as you are lifted high above the ground and then released into an incredible pendulum swing. The rush of wind, the feeling of weightlessness, and the sheer speed make the giant swing an unforgettable adventure."
      },
      {
        "title": "SCAD Jumping in Rishikesh",
        "heightOrSpec": "140 FT – 150 FT Net Freefall",
        "text": "SCAD jumping in Rishikesh offers an adrenaline-pumping adventure that will push your limits and leave you with an unforgettable experience. At Thrill Factory, you'll have the chance to engage in SCAD jumping, a unique and thrilling activity that will have you soaring through the air. Prepare yourself for an extraordinary leap from India's highest fixed platform, standing at an astounding height. As you prepare for the jump, your heart pounding with excitement, the breathtaking views of the surrounding natural beauty will further enhance the thrill. The incredible rush of adrenaline and the sensation of weightlessness during the descent make SCAD jumping a truly remarkable adventure."
      }
    ]
  },
  {
    "id": "thrill-activity-package-combo-in-rishikesh",
    "title": "Thrill Combo 1.1 (6 Bungy Types)",
    "subtitle": "Bungee Jump + SCAD Jump + Free Style Bungee + Reverse Bungee + Rope Bungee + VR Bungee",
    "price": 7000,
    "originalPrice": 12000,
    "badge": "Best For 2 Persons",
    "popular": true,
    "featured": true,
    "image": "/images/combo-thrill-1.jpg",
    "gallery": [
      "/images/combo-thrill-1.jpg",
      "/images/bungee-165ft.jpg",
      "/images/reverse-bungee.jpg",
      "/images/rope-bungee.jpg",
      "/images/giant-swing.jpg",
      "/images/scad-jump.jpg"
    ],
    "formula": "Bungee Jump + SCAD Jump + Free Style Bungee + Reverse Bungee + Rope Bungee + VR Bungee",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (165 ft)",
      "Reverse Bungee in Rishikesh (180 ft)",
      "Giant Swing in Rishikesh (140 ft)",
      "Scad Jump in Rishikesh (150 ft)",
      "Free Style Bungee (160 ft)",
      "Rope Bungee (160 ft)",
      "VR Bungee"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Valid for 2 participants to share together",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg per person",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT India Fixed Platform",
        "text": "Bungee jumping in Rishikesh is a heart-pounding activity that allows you to conquer your fears and experience an exhilarating freefall. At Thrill Factory, you'll have the opportunity to take a leap from India's highest fixed platform, standing at a staggering height. As you prepare to jump, the adrenaline coursing through your veins, you'll be rewarded with breathtaking views of the surrounding natural beauty. The rush of adrenaline and the feeling of weightlessness during the descent make bungee jumping an unforgettable adventure."
      },
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      },
      {
        "title": "Giant Swing in Rishikesh",
        "heightOrSpec": "140 FT Pendulum Arc",
        "text": "Giant Swing in Rishikesh offers an adrenaline-pumping adventure that will take your breath away. At Thrill Factory, you'll have the opportunity to embark on a thrilling ride that combines the exhilaration of a swing with the excitement of freefall. Prepare yourself for a heart-pounding experience as you are lifted high above the ground and then released into an incredible pendulum swing. The rush of wind, the feeling of weightlessness, and the sheer speed make the giant swing an unforgettable adventure."
      },
      {
        "title": "SCAD Jumping in Rishikesh",
        "heightOrSpec": "140 FT – 150 FT Net Freefall",
        "text": "SCAD jumping in Rishikesh offers an adrenaline-pumping adventure that will push your limits and leave you with an unforgettable experience. At Thrill Factory, you'll have the chance to engage in SCAD jumping, a unique and thrilling activity that will have you soaring through the air. Prepare yourself for an extraordinary leap from India's highest fixed platform, standing at an astounding height. As you prepare for the jump, your heart pounding with excitement, the breathtaking views of the surrounding natural beauty will further enhance the thrill. The incredible rush of adrenaline and the sensation of weightlessness during the descent make SCAD jumping a truly remarkable adventure."
      },
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Freestyle Bungee Jumping at Thrill Factory is not just a fall. It is a full-blown flight of freedom. With a 160 ft jump height and a full-body harness, this experience gives you the ability to flip, dive, or freefall in your own unique style. Unlike traditional bungee jumping, freestyle allows greater mobility in mid-air, turning your adrenaline rush into a personal performance."
      },
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Whether you're a first-timer looking to conquer your fears or a seasoned jumper chasing your next thrill, our freestyle bungee offers the perfect mix of safety, intensity and fun. Every second of the drop is heart-racing and unforgettable."
      },
      {
        "title": "Rope Bungee in Rishikesh",
        "heightOrSpec": "160 FT Momentum Swing",
        "text": "Rope Bungee offers a unique adrenaline rush as you drop from the platform and swing in a wide arc, picking up serious speed in the process. Unlike bungee jumping, where you bounce vertically, this ride gives you the feeling of flying forward like a human pendulum. It’s pure power, gravity, and momentum combined."
      },
      {
        "title": "VR Bungee Jump Flight Simulator",
        "heightOrSpec": "Dual-Participant Flight Sim",
        "text": "Not a fan of dangling from dizzying heights but still crave the thrill of a breathtaking plunge? Dive into an exhilarating adventure like never before with Thrill Factory's VR Bungee Jump Flight Simulator, a perfect blend of cutting-edge technology and heart-pounding excitement. Imagine the thrill of bungee jumping combined with the magic of virtual reality, creating an immersive experience that will leave you awestruck. Whether you’re a thrill-seeker looking for an adrenaline rush or someone eager to explore new dimensions, this simulator is designed to deliver unforgettable moments."
      },
      {
        "title": "VR Bungee Jump Flight Simulator",
        "heightOrSpec": "Dual-Participant Flight Sim",
        "text": "Our VR Bungee offers an unparalleled adventure for two participants at a time. The experience begins with state-of-the-art DPVR E3C headsets, ensuring crystal-clear visuals and seamless virtual environments that transport you to breathtaking worlds. Paired with a powerful computing system, the simulator creates a smooth and immersive journey, blurring the lines between the virtual and real. To amplify the realism, synchronized wind effects respond dynamically to your movements, making every jump and flight feel extraordinarily lifelike."
      }
    ]
  }
];

export const ALL_PACKAGES: PackageCombo[] = [
  {
    "id": "bungee-jumping-combo-rishikesh",
    "title": "Thrill Combo 2.4",
    "subtitle": "Reverse Bungee+ Giant Swing +SCAD Jump",
    "price": 5500,
    "originalPrice": 7500,
    "badge": "Triple Thrill",
    "popular": false,
    "featured": true,
    "image": "/images/combo-thrill-1.jpg",
    "gallery": [
      "/images/combo-thrill-1.jpg",
      "/images/reverse-bungee.jpg",
      "/images/giant-swing.jpg",
      "/images/scad-jump.jpg"
    ],
    "formula": "Reverse Bungee+ Giant Swing +SCAD Jump",
    "activitiesIncluded": [
      "Reverse Bungee in Rishikesh (180 ft)",
      "Giant Swing in Rishikesh (140 ft)",
      "Scad Jump in Rishikesh (150 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      },
      {
        "title": "Giant Swing in Rishikesh",
        "heightOrSpec": "140 FT Pendulum Arc",
        "text": "Giant Swing in Rishikesh offers an adrenaline-pumping adventure that will take your breath away. At Thrill Factory, you'll have the opportunity to embark on a thrilling ride that combines the exhilaration of a swing with the excitement of freefall. Prepare yourself for a heart-pounding experience as you are lifted high above the ground and then released into an incredible pendulum swing. The rush of wind, the feeling of weightlessness, and the sheer speed make the giant swing an unforgettable adventure."
      },
      {
        "title": "SCAD Jumping in Rishikesh",
        "heightOrSpec": "140 FT – 150 FT Net Freefall",
        "text": "SCAD jumping in Rishikesh offers an adrenaline-pumping adventure that will push your limits and leave you with an unforgettable experience. At Thrill Factory, you'll have the chance to engage in SCAD jumping, a unique and thrilling activity that will have you soaring through the air. Prepare yourself for an extraordinary leap from India's highest fixed platform, standing at an astounding height. As you prepare for the jump, your heart pounding with excitement, the breathtaking views of the surrounding natural beauty will further enhance the thrill. The incredible rush of adrenaline and the sensation of weightlessness during the descent make SCAD jumping a truly remarkable adventure."
      }
    ]
  },
  {
    "id": "bungee-combo",
    "title": "Thrill Combo 1.3",
    "subtitle": "Free Style Bungee + Any one From Reverse Bungee/ Gaint Swing / Scad Jump",
    "price": 3800,
    "originalPrice": 5000,
    "badge": "Custom Choice",
    "popular": false,
    "featured": true,
    "image": "/images/combo-thrill-1.jpg",
    "gallery": [
      "/images/combo-thrill-1.jpg",
      "/images/hero-bungee.jpg",
      "/images/reverse-bungee.jpg",
      "/images/giant-swing.jpg"
    ],
    "formula": "Free Style Bungee + Any one From Reverse Bungee/ Gaint Swing / Scad Jump",
    "activitiesIncluded": [
      "Free Style Bungee (160 ft)",
      "Reverse Bungee in Rishikesh (180 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Freestyle Bungee Jumping at Thrill Factory is not just a fall. It is a full-blown flight of freedom. With a 160 ft jump height and a full-body harness, this experience gives you the ability to flip, dive, or freefall in your own unique style. Unlike traditional bungee jumping, freestyle allows greater mobility in mid-air, turning your adrenaline rush into a personal performance."
      },
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Whether you're a first-timer looking to conquer your fears or a seasoned jumper chasing your next thrill, our freestyle bungee offers the perfect mix of safety, intensity and fun. Every second of the drop is heart-racing and unforgettable."
      },
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      }
    ]
  },
  {
    "id": "bungee-jump-and-giant-swing-combo",
    "title": "Thrill Combo 1",
    "subtitle": "Bungee Jump +Giant Swing +Reverse Bungee+ SCAD Jump",
    "price": 5500,
    "originalPrice": 9000,
    "badge": "Most Popular",
    "popular": true,
    "featured": true,
    "image": "/images/combo-thrill-4.jpg",
    "gallery": [
      "/images/combo-thrill-4.jpg",
      "/images/bungee-165ft.jpg",
      "/images/reverse-bungee.jpg",
      "/images/giant-swing.jpg",
      "/images/scad-jump.jpg"
    ],
    "formula": "Bungee Jump +Giant Swing +Reverse Bungee+ SCAD Jump",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (180 ft)",
      "Reverse Bungee in Rishikesh (180 ft)",
      "Giant Swing in Rishikesh (140 ft)",
      "Scad Jump in Rishikesh (140 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT India Fixed Platform",
        "text": "Bungee jumping in Rishikesh is a heart-pounding activity that allows you to conquer your fears and experience an exhilarating freefall. At Thrill Factory, you'll have the opportunity to take a leap from India's highest fixed platform, standing at a staggering height. As you prepare to jump, the adrenaline coursing through your veins, you'll be rewarded with breathtaking views of the surrounding natural beauty. The rush of adrenaline and the feeling of weightlessness during the descent make bungee jumping an unforgettable adventure."
      },
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      },
      {
        "title": "Giant Swing in Rishikesh",
        "heightOrSpec": "140 FT Pendulum Arc",
        "text": "Giant Swing in Rishikesh offers an adrenaline-pumping adventure that will take your breath away. At Thrill Factory, you'll have the opportunity to embark on a thrilling ride that combines the exhilaration of a swing with the excitement of freefall. Prepare yourself for a heart-pounding experience as you are lifted high above the ground and then released into an incredible pendulum swing. The rush of wind, the feeling of weightlessness, and the sheer speed make the giant swing an unforgettable adventure."
      },
      {
        "title": "SCAD Jumping in Rishikesh",
        "heightOrSpec": "140 FT – 150 FT Net Freefall",
        "text": "SCAD jumping in Rishikesh offers an adrenaline-pumping adventure that will push your limits and leave you with an unforgettable experience. At Thrill Factory, you'll have the chance to engage in SCAD jumping, a unique and thrilling activity that will have you soaring through the air. Prepare yourself for an extraordinary leap from India's highest fixed platform, standing at an astounding height. As you prepare for the jump, your heart pounding with excitement, the breathtaking views of the surrounding natural beauty will further enhance the thrill. The incredible rush of adrenaline and the sensation of weightlessness during the descent make SCAD jumping a truly remarkable adventure."
      }
    ]
  },
  {
    "id": "thrill-activity-package-combo-in-rishikesh",
    "title": "Thrill Combo 1.1 (6 Bungy Types)",
    "subtitle": "Bungee Jump + SCAD Jump + Free Style Bungee + Reverse Bungee + Rope Bungee + VR Bungee",
    "price": 7000,
    "originalPrice": 12000,
    "badge": "Best For 2 Persons",
    "popular": true,
    "featured": true,
    "image": "/images/combo-thrill-1.jpg",
    "gallery": [
      "/images/combo-thrill-1.jpg",
      "/images/bungee-165ft.jpg",
      "/images/reverse-bungee.jpg",
      "/images/rope-bungee.jpg",
      "/images/giant-swing.jpg",
      "/images/scad-jump.jpg"
    ],
    "formula": "Bungee Jump + SCAD Jump + Free Style Bungee + Reverse Bungee + Rope Bungee + VR Bungee",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (165 ft)",
      "Reverse Bungee in Rishikesh (180 ft)",
      "Giant Swing in Rishikesh (140 ft)",
      "Scad Jump in Rishikesh (150 ft)",
      "Free Style Bungee (160 ft)",
      "Rope Bungee (160 ft)",
      "VR Bungee"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Valid for 2 participants to share together",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg per person",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT India Fixed Platform",
        "text": "Bungee jumping in Rishikesh is a heart-pounding activity that allows you to conquer your fears and experience an exhilarating freefall. At Thrill Factory, you'll have the opportunity to take a leap from India's highest fixed platform, standing at a staggering height. As you prepare to jump, the adrenaline coursing through your veins, you'll be rewarded with breathtaking views of the surrounding natural beauty. The rush of adrenaline and the feeling of weightlessness during the descent make bungee jumping an unforgettable adventure."
      },
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      },
      {
        "title": "Giant Swing in Rishikesh",
        "heightOrSpec": "140 FT Pendulum Arc",
        "text": "Giant Swing in Rishikesh offers an adrenaline-pumping adventure that will take your breath away. At Thrill Factory, you'll have the opportunity to embark on a thrilling ride that combines the exhilaration of a swing with the excitement of freefall. Prepare yourself for a heart-pounding experience as you are lifted high above the ground and then released into an incredible pendulum swing. The rush of wind, the feeling of weightlessness, and the sheer speed make the giant swing an unforgettable adventure."
      },
      {
        "title": "SCAD Jumping in Rishikesh",
        "heightOrSpec": "140 FT – 150 FT Net Freefall",
        "text": "SCAD jumping in Rishikesh offers an adrenaline-pumping adventure that will push your limits and leave you with an unforgettable experience. At Thrill Factory, you'll have the chance to engage in SCAD jumping, a unique and thrilling activity that will have you soaring through the air. Prepare yourself for an extraordinary leap from India's highest fixed platform, standing at an astounding height. As you prepare for the jump, your heart pounding with excitement, the breathtaking views of the surrounding natural beauty will further enhance the thrill. The incredible rush of adrenaline and the sensation of weightlessness during the descent make SCAD jumping a truly remarkable adventure."
      },
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Freestyle Bungee Jumping at Thrill Factory is not just a fall. It is a full-blown flight of freedom. With a 160 ft jump height and a full-body harness, this experience gives you the ability to flip, dive, or freefall in your own unique style. Unlike traditional bungee jumping, freestyle allows greater mobility in mid-air, turning your adrenaline rush into a personal performance."
      },
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Whether you're a first-timer looking to conquer your fears or a seasoned jumper chasing your next thrill, our freestyle bungee offers the perfect mix of safety, intensity and fun. Every second of the drop is heart-racing and unforgettable."
      },
      {
        "title": "Rope Bungee in Rishikesh",
        "heightOrSpec": "160 FT Momentum Swing",
        "text": "Rope Bungee offers a unique adrenaline rush as you drop from the platform and swing in a wide arc, picking up serious speed in the process. Unlike bungee jumping, where you bounce vertically, this ride gives you the feeling of flying forward like a human pendulum. It’s pure power, gravity, and momentum combined."
      },
      {
        "title": "VR Bungee Jump Flight Simulator",
        "heightOrSpec": "Dual-Participant Flight Sim",
        "text": "Not a fan of dangling from dizzying heights but still crave the thrill of a breathtaking plunge? Dive into an exhilarating adventure like never before with Thrill Factory's VR Bungee Jump Flight Simulator, a perfect blend of cutting-edge technology and heart-pounding excitement. Imagine the thrill of bungee jumping combined with the magic of virtual reality, creating an immersive experience that will leave you awestruck. Whether you’re a thrill-seeker looking for an adrenaline rush or someone eager to explore new dimensions, this simulator is designed to deliver unforgettable moments."
      },
      {
        "title": "VR Bungee Jump Flight Simulator",
        "heightOrSpec": "Dual-Participant Flight Sim",
        "text": "Our VR Bungee offers an unparalleled adventure for two participants at a time. The experience begins with state-of-the-art DPVR E3C headsets, ensuring crystal-clear visuals and seamless virtual environments that transport you to breathtaking worlds. Paired with a powerful computing system, the simulator creates a smooth and immersive journey, blurring the lines between the virtual and real. To amplify the realism, synchronized wind effects respond dynamically to your movements, making every jump and flight feel extraordinarily lifelike."
      }
    ]
  },
  {
    "id": "bungee-jump-giant-swing-reverse-bungee-scad-jump-combo-rishikesh",
    "title": "Thrill Combo 1.2",
    "subtitle": "Bungee Jump / Shower Bungee + Reverse Bungee/Giant Swing/ SCAD Jump",
    "price": 4000,
    "originalPrice": 5500,
    "badge": "Bungee Plus Choice",
    "popular": false,
    "featured": false,
    "image": "/images/combo-thrill-1.jpg",
    "gallery": [
      "/images/combo-thrill-1.jpg",
      "/images/bungee-165ft.jpg",
      "/images/reverse-bungee.jpg",
      "/images/giant-swing.jpg"
    ],
    "formula": "Bungee Jump / Shower Bungee + Reverse Bungee/Giant Swing/ SCAD Jump",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (180 ft)",
      "Reverse Bungee in Rishikesh (180 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT India Fixed Platform",
        "text": "Bungee jumping in Rishikesh is a heart-pounding activity that allows you to conquer your fears and experience an exhilarating freefall. At Thrill Factory, you'll have the opportunity to take a leap from India's highest fixed platform, standing at a staggering height. As you prepare to jump, the adrenaline coursing through your veins, you'll be rewarded with breathtaking views of the surrounding natural beauty. The rush of adrenaline and the feeling of weightlessness during the descent make bungee jumping an unforgettable adventure."
      },
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      }
    ]
  },
  {
    "id": "bungee-combo-rishikesh",
    "title": "Thrill Combo 2.1",
    "subtitle": "Bungee Jump + Reverse Bungee + SCAD jump",
    "price": 6000,
    "originalPrice": 8000,
    "badge": "Extreme Trio",
    "popular": false,
    "featured": false,
    "image": "/images/combo-thrill-1.jpg",
    "gallery": [
      "/images/combo-thrill-1.jpg",
      "/images/bungee-165ft.jpg",
      "/images/reverse-bungee.jpg",
      "/images/scad-jump.jpg"
    ],
    "formula": "Bungee Jump + Reverse Bungee + SCAD jump",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (180 ft)",
      "Reverse Bungee in Rishikesh (180 ft)",
      "Scad Jump in Rishikesh (140 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT India Fixed Platform",
        "text": "Bungee jumping in Rishikesh is a heart-pounding activity that allows you to conquer your fears and experience an exhilarating freefall. At Thrill Factory, you'll have the opportunity to take a leap from India's highest fixed platform, standing at a staggering height. As you prepare to jump, the adrenaline coursing through your veins, you'll be rewarded with breathtaking views of the surrounding natural beauty. The rush of adrenaline and the feeling of weightlessness during the descent make bungee jumping an unforgettable adventure."
      },
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      },
      {
        "title": "SCAD Jumping in Rishikesh",
        "heightOrSpec": "140 FT – 150 FT Net Freefall",
        "text": "SCAD jumping in Rishikesh offers an adrenaline-pumping adventure that will push your limits and leave you with an unforgettable experience. At Thrill Factory, you'll have the chance to engage in SCAD jumping, a unique and thrilling activity that will have you soaring through the air. Prepare yourself for an extraordinary leap from India's highest fixed platform, standing at an astounding height. As you prepare for the jump, your heart pounding with excitement, the breathtaking views of the surrounding natural beauty will further enhance the thrill. The incredible rush of adrenaline and the sensation of weightlessness during the descent make SCAD jumping a truly remarkable adventure."
      }
    ]
  },
  {
    "id": "thrill-adventure-combo",
    "title": "Thrill Combo 2.2",
    "subtitle": "Bungee Jump + Giant Swing + SCAD Jump",
    "price": 6000,
    "originalPrice": 8000,
    "badge": "Airborne Combo",
    "popular": false,
    "featured": false,
    "image": "/images/combo-thrill-4.jpg",
    "gallery": [
      "/images/combo-thrill-4.jpg",
      "/images/bungee-165ft.jpg",
      "/images/giant-swing.jpg",
      "/images/scad-jump.jpg"
    ],
    "formula": "Bungee Jump + Giant Swing + SCAD Jump",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (180 ft)",
      "Giant Swing in Rishikesh (140 ft)",
      "Scad Jump in Rishikesh (140 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT India Fixed Platform",
        "text": "Bungee jumping in Rishikesh is a heart-pounding activity that allows you to conquer your fears and experience an exhilarating freefall. At Thrill Factory, you'll have the opportunity to take a leap from India's highest fixed platform, standing at a staggering height. As you prepare to jump, the adrenaline coursing through your veins, you'll be rewarded with breathtaking views of the surrounding natural beauty. The rush of adrenaline and the feeling of weightlessness during the descent make bungee jumping an unforgettable adventure."
      },
      {
        "title": "Giant Swing in Rishikesh",
        "heightOrSpec": "140 FT Pendulum Arc",
        "text": "Giant Swing in Rishikesh offers an adrenaline-pumping adventure that will take your breath away. At Thrill Factory, you'll have the opportunity to embark on a thrilling ride that combines the exhilaration of a swing with the excitement of freefall. Prepare yourself for a heart-pounding experience as you are lifted high above the ground and then released into an incredible pendulum swing. The rush of wind, the feeling of weightlessness, and the sheer speed make the giant swing an unforgettable adventure."
      },
      {
        "title": "SCAD Jumping in Rishikesh",
        "heightOrSpec": "140 FT – 150 FT Net Freefall",
        "text": "SCAD jumping in Rishikesh offers an adrenaline-pumping adventure that will push your limits and leave you with an unforgettable experience. At Thrill Factory, you'll have the chance to engage in SCAD jumping, a unique and thrilling activity that will have you soaring through the air. Prepare yourself for an extraordinary leap from India's highest fixed platform, standing at an astounding height. As you prepare for the jump, your heart pounding with excitement, the breathtaking views of the surrounding natural beauty will further enhance the thrill. The incredible rush of adrenaline and the sensation of weightlessness during the descent make SCAD jumping a truly remarkable adventure."
      }
    ]
  },
  {
    "id": "best-bungee-jumping-combo-in-rishikesh",
    "title": "Thrill Combo 2.3",
    "subtitle": "Bungee Jump + Reverse Bungee + Giant Swing",
    "price": 5000,
    "originalPrice": 7000,
    "badge": "Popular Trio",
    "popular": false,
    "featured": false,
    "image": "/images/combo-thrill-4.jpg",
    "gallery": [
      "/images/combo-thrill-4.jpg",
      "/images/bungee-165ft.jpg",
      "/images/reverse-bungee.jpg",
      "/images/giant-swing.jpg"
    ],
    "formula": "Bungee Jump + Reverse Bungee + Giant Swing",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (180 ft)",
      "Reverse Bungee in Rishikesh (180 ft)",
      "Giant Swing in Rishikesh (140 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT India Fixed Platform",
        "text": "Bungee jumping in Rishikesh is a heart-pounding activity that allows you to conquer your fears and experience an exhilarating freefall. At Thrill Factory, you'll have the opportunity to take a leap from India's highest fixed platform, standing at a staggering height. As you prepare to jump, the adrenaline coursing through your veins, you'll be rewarded with breathtaking views of the surrounding natural beauty. The rush of adrenaline and the feeling of weightlessness during the descent make bungee jumping an unforgettable adventure."
      },
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      },
      {
        "title": "Giant Swing in Rishikesh",
        "heightOrSpec": "140 FT Pendulum Arc",
        "text": "Giant Swing in Rishikesh offers an adrenaline-pumping adventure that will take your breath away. At Thrill Factory, you'll have the opportunity to embark on a thrilling ride that combines the exhilaration of a swing with the excitement of freefall. Prepare yourself for a heart-pounding experience as you are lifted high above the ground and then released into an incredible pendulum swing. The rush of wind, the feeling of weightlessness, and the sheer speed make the giant swing an unforgettable adventure."
      }
    ]
  },
  {
    "id": "reverse-bungee-giant-swing-combo-in-rishikesh",
    "title": "Thrill Combo 8",
    "subtitle": "Reverse Bungee+ Giant Swing",
    "price": 2500,
    "originalPrice": 3500,
    "badge": "Best Budget Combo",
    "popular": false,
    "featured": false,
    "image": "/images/combo-thrill-3.jpg",
    "gallery": [
      "/images/combo-thrill-3.jpg",
      "/images/reverse-bungee.jpg",
      "/images/giant-swing.jpg"
    ],
    "formula": "Reverse Bungee+ Giant Swing",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (165 ft)",
      "Giant Swing in Rishikesh (140 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Reverse Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT Launch (0-100 km/h in 3s)",
        "text": "Experience the Thrill of Reverse Bungee Jumping in Rishikesh Reverse bungee jumping in Rishikesh offers a heart-racing adventure that will leave you exhilarated and craving for more. At Thrill Factory, you'll have the opportunity to engage in this unique and thrilling activity that takes bungee jumping to new heights. Prepare yourself for an adrenaline-fueled experience as you are catapulted into the sky with incredible force. The anticipation builds as you reach the pinnacle of the jump, and then the sudden release sends you soaring through the air, defying gravity. Reverse bungee jumping provides an extraordinary sensation of weightlessness and an unparalleled rush of excitement."
      },
      {
        "title": "SCAD Jumping in Rishikesh",
        "heightOrSpec": "140 FT – 150 FT Net Freefall",
        "text": "SCAD jumping in Rishikesh offers an adrenaline-pumping adventure that will push your limits and leave you with an unforgettable experience. At Thrill Factory, you'll have the chance to engage in SCAD jumping, a unique and thrilling activity that will have you soaring through the air. Prepare yourself for an extraordinary leap from India's highest fixed platform, standing at an astounding height. As you prepare for the jump, your heart pounding with excitement, the breathtaking views of the surrounding natural beauty will further enhance the thrill. The incredible rush of adrenaline and the sensation of weightlessness during the descent make SCAD jumping a truly remarkable adventure."
      }
    ]
  },
  {
    "id": "bungee-jump-free-style-bungee-combo-rishikesh",
    "title": "Thrill Combo 8.1",
    "subtitle": "Bungee Jump + Free Style Bungee",
    "price": 4000,
    "originalPrice": 5500,
    "badge": "Double Drop",
    "popular": false,
    "featured": false,
    "image": "/images/combo-thrill-3.jpg",
    "gallery": [
      "/images/combo-thrill-3.jpg",
      "/images/bungee-165ft.jpg",
      "/images/hero-bungee.jpg"
    ],
    "formula": "Bungee Jump + Free Style Bungee",
    "activitiesIncluded": [
      "Bungee Jump in Rishikesh (180 ft)",
      "Free Style Bungee (160 ft)"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Adventure Seekers & Bucket-Listers",
    "safetySpecs": {
      "weightLimit": "35 kg – 110 kg",
      "ageLimit": "12+ Years",
      "duration": "45 – 90 Minutes total",
      "gear": "EN/CE Certified Harness, Dynamic Cord & Safety Net"
    },
    "rideDetails": [
      {
        "title": "Bungee Jumping in Rishikesh",
        "heightOrSpec": "180 FT India Fixed Platform",
        "text": "Bungee jumping in Rishikesh is a heart-pounding activity that allows you to conquer your fears and experience an exhilarating freefall. At Thrill Factory, you'll have the opportunity to take a leap from India's highest fixed platform, standing at a staggering height. As you prepare to jump, the adrenaline coursing through your veins, you'll be rewarded with breathtaking views of the surrounding natural beauty. The rush of adrenaline and the feeling of weightlessness during the descent make bungee jumping an unforgettable adventure."
      },
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Freestyle Bungee Jumping at Thrill Factory is not just a fall. It is a full-blown flight of freedom. With a 160 ft jump height and a full-body harness, this experience gives you the ability to flip, dive, or freefall in your own unique style. Unlike traditional bungee jumping, freestyle allows greater mobility in mid-air, turning your adrenaline rush into a personal performance."
      },
      {
        "title": "Freestyle Bungee Jumping",
        "heightOrSpec": "160 FT Acrobatic Drop",
        "text": "Whether you're a first-timer looking to conquer your fears or a seasoned jumper chasing your next thrill, our freestyle bungee offers the perfect mix of safety, intensity and fun. Every second of the drop is heart-racing and unforgettable."
      }
    ]
  },
  {
    "id": "archery-box-cricket-bowling-combo-rishikesh",
    "title": "Thrill Combo 9",
    "subtitle": "Archery + Box Cricket + Bowling",
    "price": 800,
    "originalPrice": 1200,
    "badge": "Indoor Fun",
    "popular": false,
    "featured": false,
    "image": "/images/combo-thrill-9.jpg",
    "gallery": [
      "/images/combo-thrill-9.jpg",
      "/images/combo-1.jpg",
      "/images/soft-play-zone.jpg"
    ],
    "formula": "Archery + Box Cricket + Bowling",
    "activitiesIncluded": [
      "Archery",
      "Box Cricket",
      "Bowling",
      "Includes 3 popular indoor activities in Rishikesh",
      "Good mix of skill, fun, and light competition",
      "Suitable for beginners and casual players",
      "Works well for kids, families, couples, and groups",
      "Strong option for weekend outings, birthday visits, and team fun",
      "Family outings",
      "Kids activities",
      "Friends group fun",
      "Couple outings",
      "School and college visits",
      "Corporate team recreation"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Families, Kids & Groups",
    "safetySpecs": {
      "weightLimit": "No Limit",
      "ageLimit": "All Ages (5+)",
      "duration": "45 – 60 Minutes",
      "gear": "All sports and safety gear provided"
    },
    "rideDetails": [
      {
        "title": "Target Archery",
        "heightOrSpec": "10 Arrows Range",
        "text": "Looking for indoor activities in Rishikesh that are fun, skill-based, and suitable for different age groups? The Archery + Box Cricket + Bowling Combo at Thrill Factory combines three engaging experiences in one package. It is designed for families, kids, friends, couples, and small groups who want active entertainment without choosing only one game."
      },
      {
        "title": "Target Archery",
        "heightOrSpec": "10 Arrows Range",
        "text": "Start with Archery, where the experience is built around focus, aim, and control. It gives visitors a target-based challenge that feels competitive without being difficult for first-time participants. For many guests, archery becomes the most memorable part of the combo because it mixes concentration with immediate excitement."
      },
      {
        "title": "Box Cricket Arena",
        "heightOrSpec": "Machine-Assisted Pitch",
        "text": "Box Cricket adds a familiar and social format to the package. It brings the fun of cricket into a compact play setup, making it practical for visitors who want quick action, shared participation, and light competition. This works especially well for friends, siblings, and family groups who want an activity they can enjoy together."
      },
      {
        "title": "Target Archery",
        "heightOrSpec": "10 Arrows Range",
        "text": "Bowling completes the combo with a classic indoor game that is easy to understand and enjoyable for almost everyone. It balances the sharper focus of archery and the energetic movement of box cricket with a more relaxed but still competitive experience. That mix makes this combo strong for casual outings, weekend plans, and group visits."
      },
      {
        "title": "Activity Variety & Social Entertainment",
        "heightOrSpec": "Group Recreation",
        "text": "Instead of selling a single high-thrill activity, this combo offers variety. It combines target skill, bat-and-ball play, and lane gaming in one visit. For visitors searching for indoor games in Rishikesh, family fun activities in Rishikesh, or group entertainment at Thrill Factory, this product fits the intent more clearly than a generic combo page."
      }
    ]
  },
  {
    "id": "archery-box-cricket-bowling-gun-shooting-combo-rishikesh",
    "title": "Thrill Combo 10",
    "subtitle": "Archery + Box Cricket + Bowling + Gun Shooting",
    "price": 1000,
    "originalPrice": 1500,
    "badge": "Action Sports Combo",
    "popular": false,
    "featured": false,
    "image": "/images/combo-thrill-10.jpg",
    "gallery": [
      "/images/combo-thrill-10.jpg",
      "/images/combo-1.jpg",
      "/images/hoverboard.jpg"
    ],
    "formula": "Archery + Box Cricket + Bowling + Gun Shooting",
    "activitiesIncluded": [
      "Archery",
      "Box Cricket",
      "Bowling",
      "Gun Shooting",
      "Includes 4 popular indoor and skill-based activities in Rishikesh",
      "Suitable for kids, families, couples, friends, and groups",
      "Balanced mix of focus, fun, and friendly competition",
      "Beginner-friendly activities with broad appeal",
      "Good option for weekend outings, birthdays, school groups, and team visits",
      "Family outings",
      "Kids activities",
      "Friends group visits",
      "Couple outings",
      "School and college groups",
      "Corporate fun sessions"
    ],
    "highlights": [
      "Official discounted combo at The Shivpuri Thrill Factory",
      "Guaranteed direct booking discount included",
      "Includes personalized completion certificate",
      "Certified jump masters and EN/CE safety protocol"
    ],
    "suitableFor": "Families, Kids & Groups",
    "safetySpecs": {
      "weightLimit": "No Limit",
      "ageLimit": "All Ages (5+)",
      "duration": "45 – 60 Minutes",
      "gear": "All sports and safety gear provided"
    },
    "rideDetails": [
      {
        "title": "Target Archery",
        "heightOrSpec": "10 Arrows Range",
        "text": "Looking for indoor and skill-based activities in Rishikesh that are enjoyable for all age groups? The Archery + Box Cricket + Bowling + Gun Shooting Combo at Thrill Factory brings together four engaging experiences in one package. This combo is built for families, kids, friends, couples, and groups who want more variety in a single visit."
      },
      {
        "title": "Target Archery",
        "heightOrSpec": "10 Arrows Range",
        "text": "Start with Archery, a target-based activity that tests concentration, balance, and control. It adds a focused challenge to your visit and works well for both first-time participants and people who enjoy precision games."
      },
      {
        "title": "Box Cricket Arena",
        "heightOrSpec": "Machine-Assisted Pitch",
        "text": "Move into Box Cricket, where the experience becomes more active and social. It combines light competition with familiar gameplay, making it ideal for kids, friends, and team outings."
      },
      {
        "title": "Bowling Alley",
        "heightOrSpec": "Full Lane Game",
        "text": "Bowling adds a classic entertainment layer to the combo. It is relaxed, competitive, and easy to enjoy in a group setting, helping make the visit more interactive and memorable."
      },
      {
        "title": "Target Gun Shooting",
        "heightOrSpec": "Precision Shooting Range",
        "text": "Complete the experience with Gun Shooting, another target-based activity that adds variety and excitement. It appeals to visitors who enjoy focus-driven games and balances physical play with skill-based challenge."
      },
      {
        "title": "Ride Details",
        "heightOrSpec": "",
        "text": "This combo is a strong fit for visitors searching for indoor activities in Rishikesh, family fun activities, kids entertainment, or group outing options. Instead of booking just one game, visitors get four different experiences in one value-oriented combo."
      }
    ]
  }
];

export const PACKAGES_DATA = ALL_PACKAGES;
