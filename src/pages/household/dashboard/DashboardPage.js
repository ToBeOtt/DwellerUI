import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Dashboard from '../../../components/household/Dashboard';
 
export default function DashboardPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.getItem('token') === null && (
      navigate('/LoginPage')
    );
  })


  return (
    
    <main className="grid grid-cols-6 w-5/6 mx-auto xl:mt-5">

        <section className="col-span-1"></section> 
        <section className="col-span-1 mt-4">
            <> 
            <div>
                <button
                    className="text-xs text-stone-500 py-2 px-2 rounded"           
                        >
                    Dashboard-nav?
                </button>
            </div>
            </>
        </section> 
                
    <section className="col-span-3 w-full h-auto rounded p-2 m-2">
        <div>
          <Dashboard />
        </div>
    
    </section>

    <section className="col-span-1"></section> 
    <section className="col-span-1"></section> 
    </main>
        
        
    );
}


