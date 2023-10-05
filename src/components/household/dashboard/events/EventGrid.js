import React from 'react';

export default function EventGrid() {
  return (
    <>

    {/* Event description/greeting */}
        <div className="mx-auto max-w-7xl px-6 
                        lg:px-8">

          {/* Dashboard-grid */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 
                          lg:grid-cols-2 lg:mx-0 lg:max-w-none">
          
            {/* First column - Events*/}
            <div className="mt-10 gap-x-10 col-span-3 gap-y-16 pt-10 
                            lg:col-span-1 lg:mr-3 lg:max-w-none lg:border-r lg:border-stone-200">
                <div className="mx-auto mb-7 pb-3 pl-4">
                    <h2 className="text-2xl pl-3 font-titleFont tracking-wide text-hh">kommande events</h2>
                    <p className="mt-1 text-sm leading-8 text-stone-500">Från hushållet, grannskapet och staden!</p>
                </div>
                
                {/* Unique event-element */}
                <article className="flex flex-col items-start justify-between mb-10 pb-4">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-stone-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-stone-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                            Hushåll
                        </a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-stone-900 group-hover:text-stone-600">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            Event från hushåll
                        </a>
                        </h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600 w-[80%]">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <img
                        src="/img/tools.jpg"
                        alt="Tools"
                        className="w-16 h-16 rounded-full object-cover object-center"
                        />
                        <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Alias
                            </a>
                        </p>
                        <p className="text-gray-600">Husnamn</p>
                        </div>
                    </div>
                </article> 

                <article className="flex flex-col items-start justify-between mb-10 pb-4">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-stone-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-stone-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                            Hushåll
                        </a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-stone-900 group-hover:text-stone-600">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            Event från hushåll
                        </a>
                        </h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600 w-[80%]">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <img
                        src="/img/tools.jpg"
                        alt="Tools"
                        className="w-16 h-16 rounded-full object-cover object-center"
                        />
                        <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Alias
                            </a>
                        </p>
                        <p className="text-gray-600">Husnamn</p>
                        </div>
                    </div>
                </article> 
            </div>

            {/* Second column - Notes */}
            <div className="mt-10 gap-x-10 col-span-3 gap-y-16 pt-10 
                            lg:col-span-1 lg:pl-5 lg:mr-3 lg:max-w-none">
                <div className="mx-auto mb-7 pb-3 pl-4">
                    <h2 className="text-2xl pl-3 font-titleFont tracking-wide text-hh">anteckningar</h2>
                    <p className="mt-1 text-sm leading-8 text-stone-500">Senaste nytt från dina anslagstavlor!</p>
                </div>
            
            {/* Unique note-element */}
                <article className="flex flex-col items-start justify-between mb-10 pb-4">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-stone-500">Mar 16, 2020</time>
                        <a href="#" className="relative z-10 rounded-full bg-stone-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                            Hushåll
                        </a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-stone-900 group-hover:text-stone-600">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            Event från hushåll
                        </a>
                        </h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600 w-[80%]">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <img
                        src="/img/tools.jpg"
                        alt="Tools"
                        className="w-16 h-16 rounded-full object-cover object-center"
                        />
                        <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                            Alias
                            </a>
                        </p>
                        <p className="text-gray-600">Husnamn</p>
                        </div>
                    </div>
                </article>  
            </div>
          </div>
        </div>

        {/* Skills/Items - Grid */}
        <footer className="grid grid-cols-2 space-x-16 lg:grid grid-cols-1 px-5 
        bg-gradient-to-r from-[#B77580] to-[#3B1319]"> 

            {/* Skill-container*/}
           <section className="w-full lg:w-[80%] lg:mr-3 my-12 grid col-span-1">
                <div className="ml-6">
                    <h2 className="text-xl font-md font-logoText tracking-wide leading-7 text-black sm:truncate sm:text-xl">
                        byta tjänster
                    </h2>
                </div>

                <section class="lg:flex lg:items-center lg:justify-between py-2 border-b border-stone-300">
                <div class="min-w-0 flex-1 pr-5">           
                            <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 
                            text-sm text-stone-200 font-contentFont tracking-wider">
                                <div class="mt-2 flex items-center font-bold">
                                    Beskära äpplen
                                </div>

                                <div class="mt-2 flex items-center">
                                    Tillgänglighet
                                </div>
                            </div>
                        </div>
                    
                        <div class="flex lg:ml-4 lg:mt-0 text-xs text-stone-200 font-contentFont font-bold"> 
                            <span class="sm:ml-3">
                            <button type="button" class="inline-flex items-center rounded-md tracking-wider bg-stone-700 px-3 py-2 hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600">
                                    Förfrågan
                                </button>
                            </span>

                            <span class="sm:ml-3">
                            <button type="button" class="inline-flex items-center rounded-md tracking-wider bg-stone-700 px-3 py-2 hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600">
                                    Byt färdighet
                                </button>
                            </span>
                        </div>  
                    </section>
                    <section class="lg:flex lg:items-center lg:justify-between py-2 border-b border-stone-300">
                        <div class="min-w-0 flex-1 pr-5">           
                            <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 
                            text-sm text-stone-200 font-contentFont tracking-wider">
                                <div class="mt-2 flex items-center font-bold">
                                    Byta glödlampa
                                </div>

                                <div class="mt-2 flex items-center">
                                    Tillgänglighet
                                </div>
                            </div>
                        </div>
                    
                        <div class="flex lg:ml-4 lg:mt-0 text-xs text-stone-200 font-contentFont font-bold"> 
                            <span class="sm:ml-3">
                            <button type="button" class="inline-flex items-center rounded-md tracking-wider bg-stone-700 px-3 py-2 hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600">
                                    Förfrågan
                                </button>
                            </span>

                            <span class="sm:ml-3">
                            <button type="button" class="inline-flex items-center rounded-md tracking-wider bg-stone-700 px-3 py-2 hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600">
                                    Byt färdighet
                                </button>
                            </span>
                        </div>  
                    </section>
            </section>

            {/* Item-container*/}

            <section className="w-full lg:w-[80%] lg:mr-3 my-12 grid col-span-1">
                <article className="ml-6">
                <h2 className="text-xl font-md font-logoText tracking-wide leading-7 text-gray-300 sm:truncate sm:text-xl">
                        föremål till utlån
                    </h2>
                </article>
                    

                {/* Unique element*/}
                <section class="lg:flex lg:items-center lg:justify-between py-2 border-b border-stone-300">
                        <div class="min-w-0 flex-1 pr-5">           
                            <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 
                            text-sm text-stone-200 font-contentFont tracking-wider">
                                <div class="mt-2 flex items-center font-bold">
                                    Bryggeriutrustning
                                </div>

                                <div class="mt-2 flex items-center">
                                    Tillgänglighet
                                </div>
                            </div>
                        </div>
                    
                        <div class="flex lg:ml-4 lg:mt-0 text-xs text-stone-200 font-contentFont font-bold"> 
                            <span class="sm:ml-3">
                                <button type="button" class="inline-flex items-center rounded-md tracking-wider bg-stone-700 px-3 py-2 hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600">
                                    Förfrågan
                                </button>
                            </span>

                            <span class="sm:ml-3">
                                <button type="button" class="inline-flex items-center rounded-md tracking-wider bg-stone-700 px-3 py-2 hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600">
                                    Byt färdighet
                                </button>
                            </span>
                        </div>  
                    </section>

                    <section class="lg:flex lg:items-center lg:justify-between py-2 border-b border-stone-300">
                        <div class="min-w-0 flex-1 pr-5">           
                            <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 
                            text-sm text-stone-200 font-contentFont tracking-wider">
                                <div class="mt-2 flex items-center font-bold">
                                    Röjsåg
                                </div>

                                <div class="mt-2 flex items-center">
                                    Tillgänglighet
                                </div>
                            </div>
                        </div>
                    
                        <div class="flex lg:ml-4 lg:mt-0 text-xs text-stone-200 font-contentFont font-bold"> 
                            <span class="sm:ml-3">
                            <button type="button" class="inline-flex items-center rounded-md tracking-wider bg-stone-700 px-3 py-2 hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600">
                                    Förfrågan
                                </button>
                            </span>

                            <span class="sm:ml-3">
                            <button type="button" class="inline-flex items-center rounded-md tracking-wider bg-stone-700 px-3 py-2 hover:bg-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600">
                                    Byt färdighet
                                </button>
                            </span>
                        </div>  
                    </section>
            </section>
        </footer>
 

     

    </>
  );
}