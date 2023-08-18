import ContentTitle from "../layout/Text/ContentTitle";

export default function ActiveMeeting({ meeting }) {
    return (
        <>
           <ContentTitle Title={`Meeting: ${meeting.dateOfMeeting}`} />
           {/* Display other relevant meeting information */}
        </>
    )
}
