import React, { useState, useEffect } from "react";
import axios from "axios";
import styling from "./PersonInfo.module.scss";
import SvgContainer from "../SvgContainer/SvgContainer";

const PersonInfo = () => {
  const [fetchPerson, setFetchPerson] = useState(); // {} ve [] true
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  
  const ApiFetcher = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setFetchPerson(response?.data?.results[0]);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    ApiFetcher();
  }, []);

  return (
    <div className={styling.card}>
      <nav className={styling.navbar}></nav>
      <img src={fetchPerson?.picture?.large} alt="passport" className={styling.image} />
      <div className={styling.text1}>{text1 || setText1("My name is")}</div>
      <div className={styling.text2}>{text2 || (fetchPerson ? setText2(`${fetchPerson?.name?.title} ${fetchPerson?.name?.first} ${fetchPerson?.name?.last}`) : null)}</div>
      <SvgContainer fetchPerson={fetchPerson} setText1={setText1} setText2={setText2}/>
      
    </div>
  );
};

export default PersonInfo;
