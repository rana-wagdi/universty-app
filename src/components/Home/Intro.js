import intro from "../../assets/Intro/image01.jpg";
import first from "../../assets/Latest News/1.jpg";
import second from "../../assets/Latest News/2.jpg";
import third from "../../assets/Latest News/3.jpg";
// import {BsFillCalendarFill} from 'react-icons/bs'
const Intro = () => {
  return (
    <div>
      <section class="">
        <img src={intro} width="100%" alt="intro" />
        <div class="intro_title">
          <p>INNOVATING TODAY FOR A </p>
          <h1>BETTER TOMORROW</h1>
        </div>
      </section>
      <section class="latestNews">
        <span class="line"></span>
        <div class=" latestNews__items">
          <div class="">
            <header class="latestNews__header">
              <div>
                <p>LATEST</p>
                <h2>NEWS</h2>
              </div>
              <div>
                <button>Explore More</button>
              </div>
            </header>

            <div class=" latestNews__items_cards">
              <div class="latestNews__items_card">
                <img src={first} width="100%" height="200" alt="news" />
                <h2>
                  PATZEK RECIEVES DISTINGUISHED
                  <br />
                  ERASMUS AWARD
                </h2>
                <p>Faculty Focus</p>
                <p>
                  <i class="calender_icon fa-regular fa-calendar"></i>Oct 28,
                  2020
                </p>
              </div>
              <div class="latestNews__items_card">
                <img src={second} width="100%" height="200" alt="news" />
                <h2>
                  PATZEK RECIEVES DISTINGUISHED
                  <br />
                  ERASMUS AWARD
                </h2>
                <p>News</p>
                <p class="latestNews_date">
                  <i class="calender_icon fa-regular fa-calendar"></i>Oct 28,
                  2022
                </p>
              </div>
              <div class="latestNews__items_card">
                <img src={third} width="100%" height="200" alt="news" />
                <h2>
                  PATZEK RECIEVES DISTINGUISHED
                  <br />
                  ERASMUS AWARD
                </h2>
                <p>Innvotion</p>
                <p class="latestNews_date">
                  <i class="calender_icon fa-regular fa-calendar"></i>Oct 28,
                  2021
                </p>
              </div>
            </div>
          </div>
          <div class="img_covid">
            <div class="covid__content">
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
