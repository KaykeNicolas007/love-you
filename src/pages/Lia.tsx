import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Aqua from "../assets/aqua.png";
import Lia1 from "../assets/Lia1.jpg";
import Lia2 from "../assets/Lia2.jpg";
import Lia3 from "../assets/Lia3.jpeg";
import "./Lia.css";

function Lia() {
  return (
    <>
      <div className="mb-8">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/5WDLRQ3VCdVrKw0njWe5E5?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="title">
        <span className="font-bold text-4xl mb-4 block">✨ Lia + Kayke ✨</span>
      </div>
      <div className="flex justify-center items-center">
        <Carousel className="rounded-md max-w-90">
          <CarouselContent>
            <CarouselItem>
              <img src={Lia1} alt="Lia1" />
            </CarouselItem>
            <CarouselItem>
              <img src={Lia2} alt="Lia2" />
            </CarouselItem>
            <CarouselItem>
              <img src={Lia3} alt="Lia3" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="text">
        <p className="font-bold mt-2">
          Eu te amo meu anjo! Muito obrigado pelos carinhos, beijos e abraços.
          Você é a princesa da minha vida! Espero que goste desse presentinho
          😘❤️
        </p>
      </div>
    </>
  );
}

export default Lia;
