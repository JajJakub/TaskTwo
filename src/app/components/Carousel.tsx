import { useState } from "react";

type NavigationProps = {
  images: string[];
};

function Carousel({ images }: NavigationProps) {
  const [indexOfActiveImage, setIndexOfActiveImage] = useState<number>(0);

  const handlePrevClick = () => {
    setIndexOfActiveImage((prevIndex: number) =>
      prevIndex > 0 ? prevIndex - 1 : 0,
    );
  };

  const handleNextClick = () => {
    setIndexOfActiveImage((prevIndex: number) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : images.length - 1,
    );
  };

  return (
    <div className="carousel d-flex flex-column align-self-center justify-content-center tw-h-2/3 tw-w-1/3 border py-3 ">
      <div className="h-100 carousel-inner">
        {images.map((item, index) => (
          <div
            className={`h-100 carousel-item ${index === indexOfActiveImage ? "active" : ""}`}
            key={index}
          >
            <img
              className="d-block w-100 h-100"
              src={item}
              alt={index.toString()}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
