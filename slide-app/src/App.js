import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Images from "./images";
import "./App.css";



function App() {

  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    //   console.log(carouselRef.current.scrollWidth);
    //   console.log(carouselRef.current.offsetWidth);
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  }, [])

  return (
    <div>
      <motion.div ref={carouselRef} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x" dragConstraints={
          { right: 0, left: -width }
        } className="inner-carousel">
          {
            Images.map((imge) => (
              <motion.div className="item" key={imge}>
                <img src={imge} alt="carousel-img" />
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
