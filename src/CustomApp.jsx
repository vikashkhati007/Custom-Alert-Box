import React, { useState } from 'react'
import CustomAlertComponents from './components/CustomAlertComponents'
export default function CustomApp() {

  const [usertitle, setusertitle] = useState();
  const [userpara, setuserpara] = useState();
  const [usertitlebg, setusertitlebg] = useState();
  const [userparabg, setuserparabg] = useState();
  const [usertitletextcolor, setusertitletextcolor] = useState();
  const [userparatextcolor, setuserparatextcolor] = useState();

  function usertitleget(e) {
    setusertitle(e.target.value);
  }

  function userparaget(e) {
    setuserpara(e.target.value);
  }

  function usertitlebgget(e) {
    setusertitlebg(e.target.value);

  }
  function userparabgget(e) {
    setuserparabg(e.target.value);

  }

  function usertitletextcolorget(e){
    setusertitletextcolor(e.target.value);
  }

  function userparatextcolorget(e){
    setuserparatextcolor(e.target.value);
  }


  return (
    <div>
      <CustomAlertComponents alerttitle={usertitle} usertitle={usertitleget} alertpara={userpara} userpara={userparaget} titlebg={usertitlebg} usertitlebgcolor={usertitlebgget} parabg={userparabg} userparabgcolor={userparabgget}  titletextcolor = {usertitletextcolor} usertitlecolor = {usertitletextcolorget} paratextcolor = {userparatextcolor} userparacolor = {userparatextcolorget}/>
    </div>
  ) 
}
