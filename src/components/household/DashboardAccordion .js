import { useEffect, useState } from 'react';

export default function DashboardAccordion () {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    const handleAccordionClick = async () => {
        toggleVisibility(isVisible)
      };
  

     
    return(
    <div className="bg-dweller-green" id="">
        <div className="">
            <h2 
            className="accordion-header" 
            id="panelsStayOpen-headingOne">
                <button className="handleOpen" 
                    type="button" 
                    onClick={handleAccordionClick}
                    data-bs-toggle="collapse" 
                    data-bs-target="#panelsStayOpen-collapseOne" 
                    aria-expanded="true" 
                    aria-controls="panelsStayOpen-collapseOne">
                    Hushåll
                </button>
            </h2>
            <div 
                id="panelsStayOpen-collapseOne" 
                className="" 
                >
            <div 
                className={`bg-red-400 ${isVisible ? 'block' : 'hidden'}`}
                // show={show}
                hide={true}
                backdrop="static"
                keyboard={false}
                >
                    <p className="text-red-500"> HEJ </p>
            </div>
            </div>
        </div>
    </div>
    )
}

{/* <div className="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
    </div> */}

