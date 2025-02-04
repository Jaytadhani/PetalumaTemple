import symbol1 from '../assets/img/symbol1.png'
import symbol2 from '../assets/img/symbol2.png'
import symbol3 from '../assets/img/symbol3.jpg'
import symbol4 from '../assets/img/symbol4.jpg' 
import symbol5 from '../assets/img/symbol5.png'



const MarqueeSlider = () => {
  const images = [
    symbol1,
    symbol2,
    symbol3,
    symbol4,
    symbol5,
  ]

  const sliderStyle = {
    height: "150px",
    margin: "auto",
    overflow: "hidden",
    position: "relative",
    width: "full",
   backgroundColor: 'transparent'
  };

  const slideTrackStyle = {
    display: "flex",
    width: "calc(250px * 8)", 
    animation: "marquee 20s linear infinite",
  };

  const slideStyle = {
    height: "100px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"10px"
  };

  const gradientOverlayStyle = {
    height: "100px",
    position: "absolute",
    width: "200px",
    zIndex: 2,
    background: "linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)",
  };

  return (
    <div  style={sliderStyle}>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-250px * 5)); } /* Moves by half of duplicated images */
          }
        `}
      </style>
      <div style={slideTrackStyle}>
        {[...images, ...images].map((img, index) => (
          <div key={index} style={slideStyle}>
            <img
              src={img || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <div style={{ ...gradientOverlayStyle, left: 0, top: 0}}></div>
      <div style={{ ...gradientOverlayStyle, right: 0, top: 0, transform: "rotateZ(180deg)" }}></div>
    </div>
  );
};

export default MarqueeSlider;
