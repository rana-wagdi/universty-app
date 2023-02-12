import researchImg1 from '../../assets/Research Technologies/1.jpg'
import researchImg2 from '../../assets/Research Technologies/2.jpg'
import researchImg3 from '../../assets/Research Technologies/3.jpg'
import researchImg4 from '../../assets/Research Technologies/4.jpg'

const Research = () => {
  return (
    <section class="research">
      <span class="big_line"></span>
      <div class="container">
        <div>
          <header class="research_header">
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
        <div class="research__items">
          <div class="reserch__item">
            <img
              class="research_img"
              src={researchImg1}
              width="300"
              height="200"
              alt="research Technologies"
            />
            <div class="reserch__item__content">
              <h2>
                PATZEK RECIEVES DISTINGUISHED
                <br />
                ERASMUS AWARD
              </h2>
              <p>Innvotion</p>
              <p class="resarch_date">
                <i class="calender_resarch_icon fa-regular fa-calendar"></i>Oct
                28, 2021
              </p>
            </div>
          </div>
          <div class="reserch__item">
            <img
              class="research_img"
              src={researchImg2}
              width="300"
              height="200"
              alt="research Technologies"
            />
            <div class="reserch__item__content">
              <h2>
                PATZEK RECIEVES DISTINGUISHED
                <br />
                ERASMUS AWARD
              </h2>
              <p>Innvotion</p>
              <p class="resarch_date">
                <i class="calender_resarch_icon fa-regular fa-calendar"></i>Oct
                28, 2021
              </p>
            </div>
          </div>
          <div class="reserch__item">
            <img
              class="research_img"
              src={researchImg3}
              width="300"
              height="200"
              alt="research Technologies"
            />
            <div class="reserch__item__content">
              <h2>
                PATZEK RECIEVES DISTINGUISHED
                <br />
                ERASMUS AWARD
              </h2>
              <p>Innvotion</p>
              <p class="resarch_date">
                <i class="calender_resarch_icon fa-regular fa-calendar"></i>Oct
                28, 2021
              </p>
            </div>
          </div>
          <div class="reserch__item">
            <img
              class="research_img"
              src={researchImg4}
              width="300"
              height="200"
              alt="research Technologies"
            />
            <div class="reserch__item__content">
              <h2>
                PATZEK RECIEVES DISTINGUISHED
                <br />
                ERASMUS AWARD
              </h2>
              <p>Innvotion</p>
              <p class="resarch_date">
                <i class="calender_resarch_icon fa-regular fa-calendar"></i>Oct
                28, 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Research;
