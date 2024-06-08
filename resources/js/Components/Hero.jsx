import { Carousel } from "@material-tailwind/react";
import Banner1 from "../../../public/images/banner 1.jpg";
import Banner2 from "../../../public/images/banner 2.jpg";
import Banner3 from "../../../public/images/banner 3.jpg";

export default function Hero() {
    return (
        <Carousel
            className="rounded-md"
            autoplay="true"
            loop="true"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                    ? "w-8 bg-white"
                                    : "w-4 bg-white/50"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <img
                src={Banner1}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={Banner2}
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src={Banner3}
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}
