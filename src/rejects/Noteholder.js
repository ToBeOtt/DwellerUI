
// import {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import { ExitIcon, EditIcon, MoveIcon, NoteholderIcon } from '../components/layout/svg/FormIcons';


// export default function Noteholder() {
//     const [notes, setNotes] = useState([]);
//     const [savedNotes, setSavedNotes] = useState([]);
    
//     useEffect(() => {
//         console.log('Notes has changed:');
//       }, [savedNotes, notes] )

//     useEffect(() => {
//         const storedNotesData = localStorage.getItem('notes');
//         if (storedNotesData) {
//             console.log("data fetched");
//             const parsedNotesData = JSON.parse(storedNotesData);
//             if (parsedNotesData) {
//                 console.log("data parsed");
//                 setNotes(parsedNotesData);
//                 console.log("data stored", parsedNotesData);
//             } else {
//                 console.log('data could not be stored');
//             }
//         }
//     }, []);




//     return (
//     <main className="grid grid-cols-1 w-5/6 mx-auto xl:mt-5 xl:grid-cols-4 xl:w-4/6">

//          <section className="col-span-4 grid grid-rows-3 m-3 p-2">
//             <div className="row-span-1 flex justify-center space-x-4">
                    
//                 <input type="text" class="pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="#hashtag"/>
//                 <div class="absolute top-4 right-3">
//                     <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
//                 </div>

//                 <Link
//                     to="/AddNotePage"
//                     className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     type="button"              
//                     >
//                 Ny anteckning
//                 </Link>

//                 <Link
//                     to="/AddNotePage"
//                     className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     type="button"              
//                     >
//                 Ny anteckningsbok
//                 </Link>

//                 <Link
//                     to="/AddNotePage"
//                     className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     type="button"              
//                     >
//                 Arkiv
//                 </Link>
//             </div>
//         </section>
       
//         <section className="col-span-4">
//             <div className="flex justify-center space-x-4"> 

//             <span>
//                 <Link
//                     tto="/AddNotePage"
//                     className="font-bold py-2 px-4"
//                     type="button"              
//                     >
                       
//                     <NoteholderIcon />
                    
//                         <p>Anteckningar</p>
                   
//                 </Link>
//                 </span>
        
//             </div>
//         </section>

//     {/* NoteCollection section */}
//         <section className="col-span-2 bg-[#ffffff] shadow-xl border-t-8 border-hh rounded m-3 p-2"> 
//             <div className="grid grid-rows-3">
                
//                 {/* Heading */}
//                 <div className="row-span-1 flex justify-between"> 
//                      <h6 className="font-titleFont font-bold text-black">
//                        Nytt möte
//                     </h6>
//                     <p className="font-contentFont font-bold text-black">
//                        Spara och arkivera
//                     </p>
//                 </div>

//                 {/* Meeting info */}
//                 <div className="row-span-2 text-contentText font-contentFont">
//                     <p>
//                         Mötet kommer hållas på hösten och vi fokuserar framförallt på renovering inomhus.
//                     </p>
//                 </div>
                
//         {/* Added meeting-points */}
//             {savedNotes.map((point, index) => (
//             <div 
//                 className="" 
//                 key={index}>
//                 <div className="row-span-1 grid grid-rows-3 shadow-xl border-1 border-black rounded bg-[#ffffff] p-2 m-3">
//                 <div className="row-span-1 flex justify-between">
//                     <div className="flex flex-row space-x-3 text-hh">
//                     <button
//                         className=""
//                         onClick={() => handleMoveBackClick(point)}
//                     >
//                         <MoveIcon />
//                     </button>
//                     <h3 className="text-black font-titleFont inline-block ml-5">{point.name}</h3>
//                     </div>
//                     <div className="flex flex-row space-x-1 text-hh">
//                     <EditIcon />
//                     <ExitIcon />
//                     </div>
//                 </div>

//                 <div className="row-span-2 text-contentText font-contentFont">
//                     <p className="">{point.description}</p>
//                 </div>

//                 <div className="row-span-1 flex justify-end">
//                     <p className="font-contentFont">{point.user.alias}</p>
//                 </div>
//                 </div>
//             </div>
//             ))}
//         </div>
//         </section>
      
//  {/* Notes-section */}

//         <section className="col-span-2 justify-content-start">
//             <h6 className="font-titleFont font-bold text-black text-center">
//                 Mötespunkter
//             </h6>

//             {Array.isArray(notes) && notes.map((point, index) => (
//             <>
            
//             <div className="grid grid-rows-3 border shadow-xl border-1 border-black border-t-8 border-hh rounded bg-[#ffffff] p-2 m-3"> 
//                 <div className="row-span-1 flex justify-between">
//                     <div className="flex flex-row space-x-3 text-hh">
//                         <button 
//                             className=""
//                             onClick={() => handleMoveClick(point)} 
//                             >
//                             <MoveIcon/> 
//                         </button>
//                         <h3 className="text-black font-titleFont inline-block ml-5">{point.name}</h3>
//                     </div>
//                     <div className="flex flex-row space-x-1 text-hh">
//                         <EditIcon/> 
//                         <ExitIcon/> 
//                     </div>         
//                 </div>
                
                
//                 <div 
//                     key={index}  
//                     className="row-span-2 text-contentText font-contentFont"
//                     >
//                         <p className=""> { point.description}</p>
//                 </div>

//                 <div className="row-span-1 flex justify-between items-end">   
//                     <p className="font-contentFont text-xs">#Möte, Höst</p>
//                     <div className="flex justify-end space-x-4">
//                         <div className="bg-red-300 w-5 h-5"> </div>
//                         <input type="checkbox"/>
//                         <p className="font-contentFont"> { point.user.alias}</p>
//                     </div>
                   
//                 </div>
//             </div>

//             </>
//                 )) 
                    
//             }
//         </section>
          
//     </main>
    
//     );
// }
