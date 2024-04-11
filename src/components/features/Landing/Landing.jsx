import React from "react";
import Carousal from "../../common/Carousal/Carousal.jsx";
import image1 from "../../../assets/images/Carousal/C1/image.png";
import image2 from "../../../assets/images/Carousal/C1/image1.png";
import image3 from "../../../assets/images/Carousal/C1/image2.png";
import image4 from "../../../assets/images/Carousal/C1/image3.png";
import Navbar from "../../common/Navbar/Navbar";
import Pink from "../../common/Pink_bar_text/Pink.jsx";
import banner from "../../../assets/images/Landing/banner.png";
import banner2 from "../../../assets/images/Landing/banner2.png";
import styles from "./Landing.module.css";
import ProductCards from "../../common/ProductCards/ProductCards.jsx";

const Landing = () => {
  const images = [image1, image2, image3, image4];
  return (
    <div>
      <header>
        <div class="containers">
          <Navbar />
          <Carousal images={images} />
        </div>
      </header>
      <section>
        <div class="containers">
          <Pink text={"CLUB VELLVETTE"} theme={"dark"}/>
          <img src={banner} alt="banner" />
        </div>
      </section>
      <main>
        <div class="containers">
          <ProductCards list={images} />
        </div>
      </main>
      <section>
        <div class="containers">
          <Pink text={"PRODUCT OF THE MONTH"} theme={"dark"}/>
          <img src={banner2} alt="banner" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
