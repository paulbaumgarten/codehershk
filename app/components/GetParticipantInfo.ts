export default async function getParticipantInfo () : Promise<any> {
  const participantData = {
    "participants": [
      {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "school": "Example High School",
        "year": "12",
        "workshopIDs": ["1", "2", "3"]
      },
      {
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "school": "Example High School",
        "year": "12",
        "workshopIDs": ["1", "2", "3"]
      },
      {
        "name": "Alex Johnson",
        "email": "alexjohnson@example.com",
        "school": "Example High School",
        "year": "12",
        "workshopIDs": ["1", "2", "3"]
      }
    ]
  }
  

  // participantData.filter((participant: any) => participant.email === email);

  return participantData["participants"];
}