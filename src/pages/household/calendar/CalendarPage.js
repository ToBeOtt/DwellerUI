import HouseholdCalendar from '../../../components/household/calendar/household-calendar'

export default function CalendarPage(){


    return (
        <main className="grid grid-cols-1 w-5/6 mx-auto xl:mt-5 xl:grid-cols-4 xl:w-full">
    
            <section className="col-span-4 flex justify-self-center">
            <HouseholdCalendar />
            </section>  

            
        </main>
    )
}