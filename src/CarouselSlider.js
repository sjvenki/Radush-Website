// // CarouselSlider.js
// import React from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Paper, Typography } from '@mui/material';

// const items = [
//   {
//     name: 'Item 1',
//     description: 'Description for item 1',
//   },
//   {
//     name: 'Item 2',
//     description: 'Description for item 2',
//   },
//   {
//     name: 'Item 3',
//     description: 'Description for item 3',
//   },
// ];

// const CarouselSlider = () => {
//   return (
//     <Carousel>
//       {items.map((item, index) => (
//         <Paper key={index}>
//           <Typography variant="h5">{item.name}</Typography>
//           <Typography variant="body1">{item.description}</Typography>
//         </Paper>
//       ))}
//     </Carousel>
//   );
// };

// export default CarouselSlider;



// CarouselSlider.js
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
import image1 from './assets/Software solutions And product reengineering.jpg';
import image2 from './assets/AI with human.jpeg';
import image3 from './assets/Consulting.jpeg';
import image4 from './assets/Training And Services.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const items = [
 {
    image: image2,
    sentences: [
        "Welcome to Radush technologies Partnering for success"
      ]
    // name: 'Image 2',
    // description: 'Description for Image 2',
  },
  {
    image: image1,
    sentences:[
        "Software solutions & Product re-engineering",
        "Consult, Design, Build & Test",
        "Release, Observe & Optimize"
    ]
    // name: 'Image 1',
    // description: 'Description for Image 1',
  },
  {
    image: image3,
    sentences:[
        "Consulting services",
        "Consult, Strategize",
        "Execute & Optimize"
    ]
    // name: 'Image 3',
    // description: 'Description for Image 3',
  },
  {
    image: image4,
    sentences:[
        "Training services",
"By the best - For the best"
    ]
    // name: 'Image 4',
    // description: 'Description for Image 4',
  },
];

const CarouselSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
  return (
    <Carousel>
      {items.map((item, index) => (
        <Paper key={index}>
          <img src={item.image} alt={item.name} style={{ width: '100%', height: '500px' }} />
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="body1">{item.description}</Typography>
        </Paper>
      ))}
    </Carousel>
//     <Carousel {...settings}>
//     {items.map((item, index) => (
//       <Paper key={index}>
//         <div className="image-container">
//           <img src={item.image} alt={`Image ${index + 1}`} />
//           <div className="text-container">
//             {item.sentences.map((sentence, i) => (
//               <Typography key={i} variant="body1" className="sentence">{sentence}</Typography>
//             ))}
//           </div>
//         </div>
//       </Paper>
//     ))}
//   </Carousel>
  );
};

export default CarouselSlider;
