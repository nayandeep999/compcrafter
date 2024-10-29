"use client";
import Wrapper from "../(shared)/Wrapper";
import cow from "@/assets/cow.jpg";
import frog from "@/assets/frog.jpg";
import lynx from "@/assets/lynx.jpg";
import tiger from "@/assets/tiger.jpg";
import wolf from "@/assets/wolf.jpg";

import Carousel from "./Carousel";
import CarouselCode from "./CarouselCode";
import Image from "next/image";

const CarouselPage = () => {
  const imports = `import { Carousel } from "compcrafter";`;

  const usage = `const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
];
<Carousel size="size-80" autoSlide={true}>
    {slides.map((slide, index) => (
      <img key={index} src={slide} alt={\`slide-\${index}\`} />
    ))}
</Carousel>`;

  const slides = [tiger, cow, frog, wolf, lynx];
  return (
    <Wrapper
      title="Carousel"
      description="A horizontally scrolling set of interactive slides that transition between multiple pieces of content, 
      either automatically or manually via navigation controls."
      component={
        <Carousel size="size-80" autoSlide={true}>
          {slides.map((slide, index) => (
            <Image key={index} src={slide} alt={`slide-${index}`} />
          ))}
        </Carousel>
      }
      code={CarouselCode}
      embedId="XJSOgV4VELk"
      imports={imports}
      usage={usage}
    />
  );
};

export default CarouselPage;
