import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styling from "./PersonInfo.module.scss";
import SvgContainer from "../SvgContainer/SvgContainer";
import ButtonTable from "../ButtonTable/ButtonTable";
import spinner from "../../assets/spinner.svg";

const url = "https://randomuser.me/api/";

const PersonInfo = () => {
  const [fetchPerson, setFetchPerson] = useState({}); // {} ve [] true
  const [text1, setText1] = useState("My name is");
  const [text2, setText2] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log(fetchPerson)

  const ApiFetcher = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const person = response.data.results[0];
      const { email, phone, gender } = person;
      const { age } = person.dob;
      const { large: image } = person.picture;
      const { title: honorific, first: name, last: surname } = person.name;
      const { country } = person.location;
      const { password } = person.login;
      const personData = {
        honorific,
        gender,
        name,
        surname,
        fullname: `${honorific} ${name} ${surname}`,
        image,
        age,
        phone,
        email,
        country,
        password,
      };
      setFetchPerson(personData);
      setText2(personData.fullname);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    ApiFetcher();
  }, []);

  return (
    <div className={styling.card}>
      <nav className={styling.navbar}></nav>
      <div className={styling.container}>
        {loading ? (
          <img src={spinner} className={styling.spinner} alt="spinner-gif" />
        ) : (
          <>
            <img src={fetchPerson.image} alt="passport" className={styling.image} />
            <div className={styling.text1}>{text1}</div>
            <div className={styling.text2}>{text2}</div>
          </>
        )}
      </div>
      <SvgContainer fetchPerson={fetchPerson} setText1={setText1} setText2={setText2} />
      <ButtonTable ApiFetcher={ApiFetcher} fetchPerson={fetchPerson} />
    </div>
  );
};

export default PersonInfo;