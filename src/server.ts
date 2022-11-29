import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

const router = express.Router();

const app = express();

app.use(cors());

router.get('/', (req, res) => {
    res.json([
      {
        "age": 0,
        "id": "motorola-xoom-with-wi-fi",
        "type": "tablet",
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        "name": "Motorola XOOM™ with Wi-Fi",
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
        "price": 780,
        "discount": 0,
        "screen": "10.1 inches",
        "capacity": "32000MB",
        "ram": "1000MB"
      },
      {
        "age": 1,
        "type": "tablet",
        "id": "motorola-xoom",
        "imageUrl": "img/phones/motorola-xoom.0.jpg",
        "name": "MOTOROLA XOOM™",
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).",
        "price": 910,
        "discount": 10,
        "screen": "10.1 inches",
        "capacity": "32000MB",
        "ram": "1000MB"
      },
      {
        "age": 2,
        "type": "phone",
        "id": "motorola-atrix-4g",
        "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
        "name": "MOTOROLA ATRIX™ 4G",
        "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone.",
        "price": 430,
        "discount": 0,
        "screen": "4.0 inches",
        "capacity": "",
        "ram": ""
      },
      {
        "age": 3,
        "type": "tablet",
        "id": "dell-streak-7",
        "imageUrl": "img/phones/dell-streak-7.0.jpg",
        "name": "Dell Streak 7",
        "snippet": "Introducing Dell™ Streak 7. Share photos, videos and movies together. It’s small enough to carry around, big enough to gather around.",
        "price": 150,
        "discount": 0,
        "screen": "7.0 inches",
        "capacity": "16000MB",
        "ram": "512MB"
      },
      {
        "age": 4,
        "type": "phone",
        "id": "samsung-gem",
        "imageUrl": "img/phones/samsung-gem.0.jpg",
        "name": "Samsung Gem™",
        "snippet": "The Samsung Gem™ brings you everything that you would expect and more from a touch display smart phone – more apps, more features and a more affordable price.",
        "price": 560,
        "discount": 10,
        "screen": "3.2 inches",
        "capacity": "220MB",
        "ram": "256MB"
      },
      {
        "age": 5,
        "type": "phone",
        "id": "dell-venue",
        "imageUrl": "img/phones/dell-venue.0.jpg",
        "name": "Dell Venue",
        "snippet": "The Dell Venue; Your Personal Express Lane to Everything",
        "price": 300,
        "discount": 0,
        "screen": "4.1 inches",
        "capacity": "1000MB",
        "ram": "512MB"
      },
      {
        "age": 6,
        "type": "phone",
        "id": "nexus-s",
        "imageUrl": "img/phones/nexus-s.0.jpg",
        "name": "Nexus S",
        "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet.",
        "price": 480,
        "discount": 10,
        "screen": "4.0 inches",
        "capacity": "16384MB",
        "ram": "512MB"
      },
      {
        "age": 7,
        "type": "phone",
        "id": "lg-axis",
        "imageUrl": "img/phones/lg-axis.0.jpg",
        "name": "LG Axis",
        "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens",
        "price": 590,
        "discount": 20,
        "screen": "3.2 inches",
        "capacity": "126MB",
        "ram": "256MB"
      },
      {
        "age": 8,
        "type": "tablet",
        "id": "samsung-galaxy-tab",
        "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg",
        "name": "Samsung Galaxy Tab™",
        "snippet": "Feel Free to Tab™. The Samsung Galaxy Tab™ brings you an ultra-mobile entertainment experience through its 7” display, high-power processor and Adobe® Flash® Player compatibility.",
        "price": 190,
        "discount": 0,
        "screen": "7.0 inches",
        "capacity": "16384MB",
        "ram": "640MB"
      },
      {
        "age": 9,
        "type": "phone",
        "id": "samsung-showcase-a-galaxy-s-phone",
        "imageUrl": "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
        "name": "Samsung Showcase™ a Galaxy S™ phone",
        "snippet": "The Samsung Showcase™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance, even outdoors",
        "price": 350,
        "discount": 20,
        "screen": "4.0 inches",
        "capacity": "2048MB",
        "ram": "512MB"
      },
      {
        "age": 10,
        "type": "phone",
        "id": "droid-2-global-by-motorola",
        "imageUrl": "img/phones/droid-2-global-by-motorola.0.jpg",
        "name": "DROID™ 2 Global by Motorola",
        "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities.",
        "price": 350,
        "discount": 20,
        "screen": "3.7 inches",
        "capacity": "8192MB",
        "ram": "512MB"
      },
      {
        "age": 11,
        "type": "phone",
        "id": "droid-pro-by-motorola",
        "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg",
        "name": "DROID™ Pro by Motorola",
        "snippet": "The next generation of DOES.",
        "price": 740,
        "discount": 10,
        "screen": "3.1 inches",
        "capacity": "2048MB",
        "ram": "512MB"
      },
      {
        "age": 12,
        "type": "phone",
        "id": "motorola-bravo-with-motoblur",
        "imageUrl": "img/phones/motorola-bravo-with-motoblur.0.jpg",
        "name": "MOTOROLA BRAVO™ with MOTOBLUR™",
        "snippet": "An experience to cheer about.",
        "price": 250,
        "discount": 0,
        "screen": "3.7 inches",
        "capacity": "2000MB",
        "ram": "512MB"
      },
      {
        "age": 13,
        "type": "phone",
        "carrier": "T-Mobile",
        "id": "motorola-defy-with-motoblur",
        "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg",
        "name": "Motorola DEFY™ with MOTOBLUR™",
        "snippet": "Are you ready for everything life throws your way?",
        "price": 920,
        "discount": 20,
        "screen": "3.7 inches",
        "capacity": "2000MB",
        "ram": "512MB"
      },
      {
        "age": 14,
        "type": "phone",
        "id": "t-mobile-mytouch-4g",
        "imageUrl": "img/phones/t-mobile-mytouch-4g.0.jpg",
        "name": "T-Mobile myTouch 4G",
        "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi.",
        "price": 390,
        "discount": 10,
        "screen": "3.8 inches",
        "capacity": "1100MB",
        "ram": "768MB"
      },
      {
        "age": 15,
        "type": "phone",
        "id": "samsung-mesmerize-a-galaxy-s-phone",
        "imageUrl": "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
        "name": "Samsung Mesmerize™ a Galaxy S™ phone",
        "snippet": "The Samsung Mesmerize™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance,even outdoors",
        "price": 960,
        "discount": 10,
        "screen": "4.0 inches",
        "capacity": "2048MB",
        "ram": "512MB"
      },
      {
        "age": 16,
        "type": "phone",
        "id": "sanyo-zio",
        "imageUrl": "img/phones/sanyo-zio.0.jpg",
        "name": "SANYO ZIO",
        "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value.",
        "price": 750,
        "discount": 20,
        "screen": "3.5 inches",
        "capacity": "130MB",
        "ram": "256MB"
      },
      {
        "age": 17,
        "type": "phone",
        "id": "samsung-transform",
        "imageUrl": "img/phones/samsung-transform.0.jpg",
        "name": "Samsung Transform™",
        "snippet": "The Samsung Transform™ brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed “Sprint ID Service Pack”.",
        "price": 30,
        "discount": 20,
        "screen": "3.5 inches",
        "capacity": "180MB",
        "ram": "384MB"
      },
      {
        "age": 18,
        "type": "phone",
        "id": "t-mobile-g2",
        "imageUrl": "img/phones/t-mobile-g2.0.jpg",
        "name": "T-Mobile G2",
        "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible.",
        "price": 640,
        "discount": 0,
        "screen": "3.7 inches",
        "capacity": "4000MB",
        "ram": "512MB"
      },
      {
        "age": 19,
        "type": "phone",
        "id": "motorola-charm-with-motoblur",
        "imageUrl": "img/phones/motorola-charm-with-motoblur.0.jpg",
        "name": "Motorola CHARM™ with MOTOBLUR™",
        "snippet": "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service.",
        "price": 400,
        "discount": 0,
        "screen": "2.8 inches",
        "capacity": "150MB",
        "ram": "512MB"
      }
    ])
})

app.use('/.netlify/functions/server', router);

export const handler = serverless(app);
