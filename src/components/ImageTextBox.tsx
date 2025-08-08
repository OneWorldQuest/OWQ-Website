import "./../styles/ImageTextBox.css"
import { useEffect, useRef, useState } from 'react';


function ImageTextBox({ image,heading='Heading', text }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`image-textbox-container ${inView ? 'animate-in' : 'animate-out'}`}>
      <img src={image} alt="Banner" className={`main-image ${inView ? 'slide-in-left' : 'slide-out-left'}`} />
      {text && (
        <div className={`text-overlay ${inView ? 'slide-in-right' : 'slide-out-right'}`}>
          <h1 className="text-box-heading-in-itb">{heading}</h1>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default ImageTextBox;

