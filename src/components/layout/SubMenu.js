import NavHouse from '../layout/NavHouse'

export default function SubMenu({ isOpen, toggleMenu, children }) {

function on() {
    document.getElementById("overlay").style.display = "block";
    }
    
function off() {
    document.getElementById("overlay").style.display = "none";
    }


  return (
    <>
      <section className="w-full bg-[#313131]">
        <div className="flex justify-center">
          <button
            className="block text-xl text-stone-400 font-black px-2 py-3 rounded"
            onClick={() => {
                on();
              }}
          >
            ☰
          </button>
        </div>

        {/* Dropdown content */}
        <div
          id="overlay"
          className="fixed hidden w-[100%] h-[30%] py-10 top-0 bg-[#000000]"
          onClick={off}>
          <div className="m-5 space-x-10">
            
            <div className="flex flex-row justify-center w-full fixed top-0 my-2 py-2">
              <NavHouse/> 
            </div>  

            <div className="flex xl:justify-center xl:flex-row xl:space-x-10">
              {children}
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
