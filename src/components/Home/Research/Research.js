import researchData from "./researchData";
import { BsFillCalendarFill } from 'react-icons/bs';

const Research = () => {
  return (
    <section className="research">
      <span className="big_line"></span>
      <div className="container">
        <div>
          <header className="research_header">
            <div>
              <h1>
                RESEARCH & <br /> TECHNOLOGIES
              </h1>
            </div>
            <div>
              <button>Explore More</button>
            </div>
          </header>
        </div>
        <div className="research__items">
          {researchData.map((research) => (
            <div key={research.id} className="reserch__item">
              <img
                className="research_img"
                src={research.img}
                width="300"
                height="200"
                alt="research Technologies"
              />
              <div className="reserch__item__content">
                <h2 className="research_title">
                  {research.title}
                </h2>
                <p>{research.event}</p>
                <p className="resarch_date">
                  <BsFillCalendarFill className="calender_resarch_icon" /> {research.date}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
export default Research;
