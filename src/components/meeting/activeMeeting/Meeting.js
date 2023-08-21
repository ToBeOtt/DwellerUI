
import {useState, useEffect} from 'react';
import AddMeetingPointButton from './AddMeetingPointButton';

export default function Meeting() {
    const [meeting, setMeeting] = useState(null);

    const [meetingPoints, setMeetingPoints] = useState();

    useEffect(() => {
        if (meeting && meeting.meeting.meetingPoints) {
            setMeetingPoints(meeting.meeting.meetingPoints);
        }
    }, [meeting]);
    

    useEffect(() => {
        const storedMeetingData = localStorage.getItem('meetingData');
        if (storedMeetingData) {
            const parsedMeetingData = JSON.parse(storedMeetingData);
            setMeeting(parsedMeetingData);
            setMeetingPoints(parsedMeetingData.meeting.meetingPoints);
        }
    }, []);

    if (!meeting) {
        console.log('Möte kunde inte hittas')
        return null;
    }

    return (
        <>
        


           {meeting ? (
        
        <>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h2 className="text-red-500">Meeting Details</h2>
            <p className="text-red-300">Meeting ID: {meeting.meeting.meetingId}</p>
            <p className="text-red-300">Date of Meeting: {meeting.meeting.dateOfMeeting}</p>
            <p className="text-red-300">Meeting Status: {meeting.meeting.meetingStatus}</p>
                <form>
                    <div className="grid justify-content-start mt-4">
                        <AddMeetingPointButton />
                    </div>
                </form>
          </div>

          <div className="col-span-1">
          <h3 className="text-red-700">Meeting Points:</h3>
          {meetingPoints.map((point, index) => (
            <div key={index} className="gap-4 text-stone-200">
              <p>Punkt {index + 1}:</p>
              <p>Meeting Point ID: {point.meetingPointId}</p>
              <p>Name: {point.name}</p>
              <p>Description: {point.description}</p>
              <p>Created: {point.meetingPointCreated}</p>
              <p>Modified: {point.meetingPointModified}</p>
              <p>Status: {point.status}</p>
              <hr />
            </div>
          ))}
          </div>
        </div>
        </>
            ) : (
                <p>Loading meeting data...</p>
            )}
        </>
    );
}
