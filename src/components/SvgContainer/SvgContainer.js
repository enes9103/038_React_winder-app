import React from 'react'
import styling from "./SvgContainer.module.scss"
import woman from "../../assets/woman.svg"
import man from "../../assets/man.svg"
import mail from "../../assets/mail.svg"
import growingupman from "../../assets/growing-up-man.svg"
import growingupwoman from "../../assets/growing-up-woman.svg"
import map from "../../assets/map.svg"
import phone from "../../assets/phone.svg"
import padlock from "../../assets/padlock.svg"


const SvgContainer = ({fetchPerson, setText1, setText2}) => {

    // console.log(fetchPerson)
    const svgHoverHandler = (e) => {
        const {name} = e.target
        if (name === "human") {
            setText1("My name is")
            setText2(`${fetchPerson?.name?.title} ${fetchPerson?.name?.first} ${fetchPerson?.name?.last}`)
        } else if (name === "mail") {
            setText1("My email is")
            setText2(fetchPerson?.email)
        } else if (name === "growing") {
            setText1("My age is")
            setText2(fetchPerson?.dob?.age)
        } else if (name === "map") {
            setText1("I live in")
            setText2(fetchPerson?.location?.country)
        } else if (name === "phone") {
            setText1("My phone number is")
            setText2(fetchPerson?.phone)
        } else if (name === "padlock") {
            setText1("My password is")
            setText2(fetchPerson?.login?.password)
        }
    }

  return (
    <div className={styling.svgcontainer}>
        <img src={fetchPerson?.gender === "female" ? woman : man} alt='human' name="human" className={styling.svg} onMouseOver={svgHoverHandler}/>
        <img src={mail} alt='mail' name="mail" className={styling.svg} onMouseOver={svgHoverHandler}/>
        <img src={fetchPerson?.gender === "female" ? growingupwoman : growingupman} alt='growing' name="growing" className={styling.svg} onMouseOver={svgHoverHandler}/>
        <img src={map} alt='map' name="map" className={styling.svg} onMouseOver={svgHoverHandler}/>
        <img src={phone} alt='phone' name="phone" className={styling.svg} onMouseOver={svgHoverHandler}/>
        <img src={padlock} alt='padlock' name="padlock" className={styling.svg} onMouseOver={svgHoverHandler}/>
    </div>
  )
}

export default SvgContainer