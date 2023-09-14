export default function MainLayout({children}) {
    return(
        <div className="relative h-full grid grid-cols-1 mx-auto justify-center bg-white my-8">
          {children}
      </div>
    )
}

