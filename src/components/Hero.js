import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useScroll } from "framer-motion";
import '../styles/Hero.css';
import zlogo from"../assets/Zong_ids-b_mj6w_0.png";
import jlogo from"../assets/new-jazz-seeklogo.png";
import tlogo from"../assets/telenor-seeklogo.png";
import ulogo from"../assets/ufone-4g-seeklogo.png";

function Hero() {

const { scrollY } = useScroll();


useEffect(() => {
  return scrollY.onChange((latest) => {
    console.log("Scroll position:", latest);
  });
}, []);

const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / maxScroll)*61;
    setScrollProgress(progress); 
  };

  window.addEventListener("scroll", handleScroll);
  

  return () => window.removeEventListener("scroll", handleScroll);
  
}, []);

let step=Math.floor(scrollProgress);
function logoo(step){
 if(step<3) return jlogo;
 else if(step<6) return tlogo;
 else if(step<9) return zlogo;
  else return ulogo;
}
const navigate=useNavigate();
function steep(step) {
    if (step > 8) {
      return 9;
    
    }else{
      return step;
    }
  }
   return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="text-wwraper">
          <h1>Discover the Best Internet Packages</h1>
          <p>Your one-stop solution for comparing all network offers in one place.</p>
          </div>
          <button onClick={()=>navigate('/Networks')}>Explore Now</button>
        </div>

        <div className="hero-right">
  
            <div className="moon-container">
                <div className="moon"></div>
                <div className="mask"></div>
                <div className={`hero-images hero-image-${step}`}>
                    <div className="hero-image">
                        <img src={logoo(step)} alt="Zong Logo" />
                    </div>
                </div>
                <div className={`dots dots-${steep(step)}`}
                >
                    <div className={`dot1 dot1-${steep(step)}`} ></div>
                    <div className="dot1-s"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;