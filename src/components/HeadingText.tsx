import "../styles/HeadingText.css"

function HeadingText({ heading, text }: { heading: string; text: string }) {
  return (
    <div className="headingtext-container">
      <h2 className="nameheading-in-heading-text">{heading}</h2>
      <p className="headingtext-paragraph">{text}</p>
    </div>
  );
}

export default HeadingText;