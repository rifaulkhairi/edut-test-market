import { Carousel, Button } from "@material-tailwind/react";
import Banner1 from "../../../public/images/banner 1.jpg";
import Banner2 from "../../../public/images/banner 2.jpg";
import Banner3 from "../../../public/images/banner 3.jpg";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

export default function Hero() {
    return (
        <Carousel
            className="rounded-md"
            autoplay="true"
            loop="true"
            prevArrow={({ handlePrev }) => (
                <Button
                    color="indigo"
                    variant="text"
                    onClick={handlePrev}
                    size="sm"
                    className="!absolute top-2/4 left-0 -translate-y-2/4 shadow-sm"
                >
                    <ChevronLeftIcon className="size-5 text-secondary" />
                </Button>
            )}
            nextArrow={({ handleNext }) => (
                <Button
                    color="indigo"
                    variant="text"
                    onClick={handleNext}
                    size="sm"
                    className="!absolute top-2/4 !right-0 -translate-y-2/4 shadow-sm"
                >
                    <ChevronRightIcon className="size-5 text-secondary" />
                </Button>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1  cursor-pointer rounded-full transition-all content-[''] z-20 ${
                                activeIndex === i
                                    ? " w-2 h-2 bg-secondary"
                                    : " w-2 h-2 bg-secondary/50"
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
