function MainLayout({children}) {
    return(
        <div className="grid grid-cols-1 grid-flow-col gap-4">    
            <div className="md:col-span-1 bg-dweller-gray justify-self-center md:w-6/12 px-4 m-10 rounded-lg">
                {children}
            </div>
        </div>
     
    )
}
export default MainLayout;