
export default function SubMenu({ isOpen, toggleMenu, children }) {
function on() {
    document.getElementById("overlay").style.display = "block";
    }
    
function off() {
    document.getElementById("overlay").style.display = "none";
    }


  return (
    <>
      <section className="w-full">
        <div className="flex justify-center">
          <button
            className="block text-xl text-black font-black px-2 py-1 h-10 w-10"
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
          className="fixed hidden w-[100%] h-[30%] top-0 bg-[#000000]"
          onClick={off}>
          <div className="m-5 space-x-10">
            <div className="flex xl:justify-center xl:flex-row xl:space-x-10">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
