import { useEffect } from "react";
import image1 from "./../assets/image_1.jpg";
import image2 from "./../assets/image_2.jpg";
import image3 from "./../assets/image_3.jpg";
import image4 from "./../assets/image_4.jpg";
import image5 from "./../assets/image_5.jpg";
import image6 from "./../assets/image_6.jpg";

const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

const ImageLazyLoading = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImage(img);
          self.unobserve(img);
        }
      });
    }, config);

    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => observer.observe(img));

    return () => {
      imgs.forEach((img) => observer.unobserve(img)); // ✅ cleanup
      observer.disconnect(); // ✅ also disconnect completely
    };
  }, []);

  const loadImage = (image) => {
    if (image.dataset.src) {
      image.src = image.dataset.src;
      image.removeAttribute("data-src"); // ✅ remove attribute once loaded
    }
  };

  return (
    <div>
      <img src="" data-src={image1} alt="image1" />
      <img src="" data-src={image2} alt="image2" />
      <img src="" data-src={image3} alt="image3" />
      <img src="" data-src={image4} alt="image4" />
      <img src="" data-src={image5} alt="image5" />
      <img src="" data-src={image6} alt="image6" />
    </div>
  );
};

export default ImageLazyLoading;
