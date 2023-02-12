import intro from "../../../assets/Intro/image01.jpg";
import { BsFillCalendarFill } from 'react-icons/bs';
import IntroData from "./IntroData";

const Intro = () => {
  return (
    <div>
      <section className="">
        <img src={intro} width="100%" alt="intro" />
        <div className="intro_title">
          <p>INNOVATING TODAY FOR A </p>
          <h1>BETTER TOMORROW</h1>
        </div>
      </section>
      <section className="latestNews">
        <span className="line"></span>
        <div className=" latestNews__items">
          <div className="">
            <header className="latestNews__header">
              <div>
                <p>LATEST</p>
                <h2>NEWS</h2>
              </div>
              <div>
                <button>Explore More</button>
              </div>
            </header>

            <div className=" latestNews__items_cards">
            {IntroData.map((intro)=>(
              <div key={intro.id} className="latestNews__items_card">
                <img src={intro.img} width="100%" height="200" alt="news" />
                <h2>
                {intro.title}
        
                </h2>
                <p>{intro.event}</p>
                <p>
                  <BsFillCalendarFill className="calender_icon" />{intro.date}
                </p>
              </div>
              ))}
             </div>
             </div>
          <div className="img_covid">
            <div className="covid__content">
              <p>
                RAPID RESEARCH <br /> RESPONSE TEAM
              </p>
              <h1>COVID-19</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Intro;
