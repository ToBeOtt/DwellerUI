import { useNavigate } from "react-router-dom";

export default function AddMeetingPointButton(props) {
    const navigate = useNavigate();

    const handleClick = async () => {
        navigate('/AddMeetingPointPage');
    };

    return(
    <>
        <button 
        className="block mx-auto px-4 py-1 text-sm text-black-600 
                    font-semibold rounded-full border 
                    border-black-200 hover:text-white 
                    hover:bg-slate-700 hover:border-transparent 
                    focus:outline-none focus:ring-2 focus:ring-slate-900 
                    focus:ring-offset-2 bg-dweller-blue text-white"
        onClick={handleClick}
        >
            + Lägg till punkt
        </button>
    </>
    )  
}