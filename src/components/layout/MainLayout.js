export default function MainLayout({children}) {
    return(
        <div className="grid grid-cols-1 mx-auto justify-content-center bg-[#F5F5F5] min-h-[60vh]">
            {children}
        </div>
    )
}

