import "./Dog.scss";
import SpeechBubble from "./SpeechBubble";

const Dog = () => {
  return (
    <figure className="dog" aria-hidden="true">
      <div className="dog__wrap">
        <div className="dog__body">
          <div className="dog__head">
            <div className="dog__ear" />
            <div className="dog__ear dog__ear--back" />
            <div className="dog__snout">
              <div className="dog__eye" />
              <div className="dog__nose" />
              <div className="dog__mouth" />
            </div>
            <div className="dog__collar">
              <div className="dog__tag" />
            </div>
          </div>

          <div className="dog__legs dog__legs--front">
            <div className="dog__leg dog__leg--primary" />
            <div className="dog__leg dog__leg--secondary" />
          </div>

          <div className="dog__legs dog__legs--back">
            <div className="dog__leg dog__leg--primary" />
            <div className="dog__leg dog__leg--secondary" />
          </div>

          <div className="dog__tail" />
        </div>

        <div className="dog__shadow" />
      </div>

      <SpeechBubble />

      <div className="dog__butterfly">
        <div className="dog__butterfly-wing" />
        <div className="dog__butterfly-body" />
      </div>
    </figure>
  );
};

export default Dog;
