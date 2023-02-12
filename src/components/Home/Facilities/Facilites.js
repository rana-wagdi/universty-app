import FacilitesImage1 from '../../../assets/FacilitiesAndResources/13305412005_661da205f8_h.jpg'
import FacilitesImage2 from '../../../assets/FacilitiesAndResources/28232125988_386612a75e_k.jpg'
import {MdPlayArrow} from 'react-icons/md'
const Facilities = () => {
    return (
        <section className="facilities">
            <span className="big_line"></span>
            <div className="container">
                <header className="facilities_header">
                    <h1>FACILITIES & <br /> RESOURCES</h1>
                </header>
                <div className="facilities__items">
                    <div>
                        <p className="facilities__item_text">Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                            Ipsum.1</p>
                        <button>Explore More</button>
                    </div>
                    <div className="facilities__item_content">
                        <div>
                            <img src={FacilitesImage1} width="320"
                                height="200" alt="Facilites" />
                            <p ><MdPlayArrow className="arrow_icon" />  CORE LABS AND MAJOR FACILITIES</p>
                        </div>
                        <div>
                            <img src={FacilitesImage2} width="320"
                                height="200" alt="facilites" />
                            <p><MdPlayArrow className="arrow_icon" /> HOUSE AND FACILITIES</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Facilities