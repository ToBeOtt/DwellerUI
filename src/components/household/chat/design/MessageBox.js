export default function MessageBox(props, {children}) {
    return (
        <>
            <section className={`${props.currentUser === props.messageSender ? 
            'mr-5 border-b-2 pb-1 pt-2 my-2 bg-[#F6F3EC] shadow-md w-full 2xl:w-[25vw] rounded'
            : 
            'ml-5 border-b-2 pb-1 pt-2 my-2 bg-stone-100 w-full 2xl:w-[25vw] rounded'}`}
            >
                {props.children}
            </section>
        </>
    )
};
