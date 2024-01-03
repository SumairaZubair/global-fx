// // components/VideoSlider.js
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "../styles/videoSlider.css";



// const VideoSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className={styles.videoSlider}>
//       <Slider {...settings}>
//         <div className={styles.videoSlide}>
//           <video controls width="100%" height="auto">
//             <source src={`/assets/videos/video1.mp4`} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           {/* <p className={styles.description}>{videos[0].description}</p> */}
//         </div>

//         <div className={styles.videoSlide}>
//           <video controls width="100%" height="auto">
//             <source src={`/assets/videos/video2.mp4`} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           {/* <p className={styles.description}>{videos[1].description}</p> */}
//         </div>

//         {/* <div className={styles.videoSlide}>
//           <video controls width="100%" height="auto">
//             <source src={`/assets/videos/video3.mov`} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           {/* <p className={styles.description}>{videos[2].description}</p> */}
//         {/* </div> */} 

       
//       </Slider>
//     </div>
//   );
// };

// export default VideoSlider;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const videoPaths = [
    "assets/images/video1.mp4",
    "assets/images/video2.mp4",
    "assets/images/video3.mp4",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>Video Slider Example</h1>
      <Slider {...settings}>
        {videoPaths.map((videoPath, index) => (
          <div key={index}>
            <iframe
              width="560"
              height="315"
              src={videoPath}
              title={`Embedded Video ${index + 1}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
