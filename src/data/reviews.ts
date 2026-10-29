import { Review } from '@/types';

const reviewPhotos = (folder: string, count: number) =>
  Array.from({ length: count }, (_, index) => {
    const file = `photo_${String(index + 1).padStart(2, '0')}.jpg`;
    return `/images/Thrill_Factory_Review_Photos/${encodeURIComponent(folder)}/${file}`;
  });

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-hiren',
    name: 'Hiren Gandhi',
    location: 'Verified Google Review',
    rating: 5,
    activity: 'Reverse Bungee & Giant Swing',
    date: '6 months ago',
    comment:
      "Had a fantastic day here. We tried the Reverse Bungee and Giant Swing, and both were exhilarating. What surprised me was the food—the multi-cuisine restaurant serves really tasty meals with a great view. It's a perfect spot to spend the day with friends. Everything from the safety briefings to the hospitality was top-notch.",
    verified: true,
    photos: reviewPhotos('Hiren Gandhi', 3),
  },
  {
    id: 'rev-sanjay',
    name: 'Sanjay Shukla',
    location: 'Verified Google Review',
    rating: 5,
    activity: 'Bungee Jump',
    date: '5 months ago',
    comment:
      'Had an absolutely thrilling experience at The Shivpuri Thrill Factory in Shivpuri! The bungee jump was an incredible mix of fear, excitement, and adrenaline rush. The staff was highly professional, supportive, and made sure all safety measures were followed properly. The scenic mountain views added even more magic to the experience. If you love adventure, this is definitely a must-try activity in Rishikesh!',
    verified: true,
    photos: reviewPhotos('Sanjay Shukla', 1),
  },
  {
    id: 'rev-saurabh',
    name: 'Saurabh Jaiswal',
    location: 'Verified Google Review',
    rating: 5,
    activity: 'Sky Cycling & Rope Course',
    date: '4 months ago',
    comment:
      "Amazing experience at Shivpuri Thrill Factory! I tried the sky cycling and rope Course, and both were thrilling. The staff was supportive and guided us through the safety procedures properly. The views of the surrounding hills added to the excitement. A bit crowded on weekends, but overall a memorable adventure and definitely worth trying if you're visiting Rishikesh.",
    verified: true,
    photos: reviewPhotos('Saurabh Jaiswal', 1),
  },
  {
    id: 'rev-jaskaran',
    name: 'Jaskaran Singh',
    location: 'Verified Google Review',
    rating: 4,
    activity: 'Bungee, Giant Swing & SCAD',
    date: '2 years ago',
    comment:
      'One of the many adventure activities hub in the area the place addresses your adrenaline needs. With bungy, ropeway, giant swing, scad jump and many more activities there is one for everyone. The place is well designed with a decent enough cafe inside to fuel up after the activities. There is usually a promotion going on if you decide to do more than one activity. For all the non adventure kinds or even kids the place also has indoor games to keep you entertained, with live dj blasting out music the place surely has a vibe.',
    verified: true,
    photos: reviewPhotos('Jaskaran Singh', 10),
  },
  {
    id: 'rev-this-is-us',
    name: 'This is us Family',
    location: 'Verified Google Review',
    rating: 4,
    activity: 'Bungee & Reverse Bungee',
    date: '2 years ago',
    comment:
      "Had such a great experience at Thrill Factory it was amazing 😍 We had all the activities Giant wheel, bungee jumping, reverse jumping etc. they were all worth it. There's evening performances and Magic show. Food is really good must try.",
    verified: true,
    photos: reviewPhotos('This Is Us Family', 8),
  },
  {
    id: 'rev-arvind',
    name: 'Arvind Singh',
    location: 'Verified Google Review',
    rating: 4,
    activity: 'Adventure Rides',
    date: '3 years ago',
    comment:
      'Amazing place situated just a few kms away from Rishikesh. Loud music and a lot of hustle bustle greets you. There are a plethora of adventure rides waiting to test your guts. Along with the rides you have an option to satisfy your hunger pangs in a beautiful built-in restaurant. However, the prices are on the higher side. A must visit place.',
    verified: true,
    photos: reviewPhotos('Arvind Singh', 11),
  },
  {
    id: 'rev-disha',
    name: 'Disha Srivastava',
    location: 'Verified Google Review',
    rating: 5,
    activity: 'Bungee Jumping',
    date: '3 weeks ago',
    comment:
      'Bungee jumping at Thrill Factory was an absolutely unforgettable experience! ❤️ The entire experience was full of excitement, thrill, and a little bit of fear, but the staff made me feel comfortable and confident throughout. A special shoutout to the cameraman 📸 — he did an amazing job capturing every moment of my jump. The videos turned out so good that watching them brings back the same excitement all over again! Thank you, Thrill Factory, for such an incredible and memorable experience. Definitely one of the most thrilling experiences of my life! 🔥❤️',
    verified: true,
  },
  {
    id: 'rev-patel',
    name: 'Patel Manav',
    location: 'Verified Google Review',
    rating: 5,
    activity: 'Bungee Jumping',
    date: '3 months ago',
    comment:
      "An absolutely unforgettable experience at The Thrill Factory! The entire team was professional, friendly, and made me feel safe from start to finish. The instructors explained everything clearly, and their encouragement helped me overcome my fear. The jump itself was an incredible adrenaline rush with breathtaking views. The equipment was well-maintained, and the safety standards were excellent. If you're looking for an exciting adventure, I highly recommend The Thrill Factory for bungee jumping. Definitely a once-in-a-lifetime experience that I'll never forget!",
    verified: true,
  },
  {
    id: 'rev-riya',
    name: 'Riya Banerjee',
    location: 'Verified Google Review',
    rating: 5,
    activity: 'Bungee Jumping',
    date: '2 months ago',
    comment:
      'Amazing experience! 🤩 The staff is incredibly supportive and made the whole experience so much better. I did bungee jumping, and I was VERY scared! 😭 But Alok and Jyothi were veryyyyyyyy supportive throughout. Honestly, I could do it because of them—otherwise, I probably would have backed out! Absolutely loved the entire experience! ❤️ I\'d definitely do it again… and next time, with my eyes open! 😂🙌',
    verified: true,
  },
  {
    id: 'rev-kirti',
    name: 'Kirti Bhatia',
    location: 'Verified Google Review',
    rating: 5,
    activity: 'Rafting & Adventure Activities',
    date: '5 months ago',
    comment:
      'My experience with thrill factory was awesome. They provide costume, sunglasses, welcome drink. They also provide google drive link for photos and videos shot by drone and is absolutely awesome. Loved rafting and other adventure activities as well. I highly recommend thrill factory 😊',
    verified: true,
  },
];
