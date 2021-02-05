import React, { createContext, useState, useEffect } from 'react' 

export const Club = createContext()

const ClubContext = (props) => { 

    const [clubs, setClubs] = useState([]) 
    const [clubsInfo, setClubsInfo] = useState([])

    useEffect(() => { 
        const getClubs = async () => { 
           const response = await fetch('https://public.allaboutapps.at/hiring/clubs.json')
           const jsonResponse = await response.json() 
           console.log(jsonResponse) 
           setClubs(jsonResponse)
        } 
        getClubs()
    }, []) 

    const sortValue = () => { 
          let sorted1 = [...clubs].sort((a,b) => a.value - b.value)  
          setClubs(sorted1)    
          console.log(clubs['id'])
    } 

    const sortValuePlus = () => { 
          let sorted2 = [...clubs].sort((a,b) => b.value - a.value)  
          setClubs(sorted2) 
    } 

    const sortA = () => { 
          let sortedByName = [...clubs].sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0) 
          setClubs(sortedByName)
    } 

    const sortZ = () => { 
          let sortedByName = [...clubs].sort((a, b) => a.name !== b.name ? b.name < a.name ? -1 : 1 : 0) 
          setClubs(sortedByName)
    } 

    const pushClubInfo = (id) => {
        let findClub = clubs.find((item) => item.id === id)  
        if (clubsInfo.length === 0) { 
            clubsInfo.push(findClub) 
        }else if(clubsInfo.length > 0) { 
            clubsInfo.shift() 
            clubsInfo.push(findClub)
        }  
        console.log(clubsInfo)
    } 


    return (
        <Club.Provider value={{ clubs, clubsInfo, sortValue, sortValuePlus, sortA, sortZ, pushClubInfo }}> 
            {props.children}
        </Club.Provider>
    )
}

export default ClubContext
