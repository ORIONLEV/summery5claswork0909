import {Container, Item, Subtitle, InfoText,InfoBlock} from "./Userlist.styled.js"

import { IoLocationSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCirclePlay } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa";


console.log(Container);


function Userlist({users}) {
    
    return(
        <Container>
            {users.map(({name, location, speaker, type,time })  => {
              return <Item key={name}>
                    <Subtitle>{name}</Subtitle>
                    
                    <InfoBlock> 
                        <InfoText><IoLocationSharp />{location}</InfoText>
                        <InfoText><IoPerson />{speaker}</InfoText>
                        <InfoText><RiMoneyDollarCircleLine />{type}</InfoText>
                        <InfoText><FaCirclePlay />{time.start}</InfoText>
                        <InfoText><FaFlagCheckered />{time.end}</InfoText>
                    </InfoBlock>
               </Item>     
            })}

        </Container>
    )

}

export default Userlist