import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';


export default function CustomAlertComponents(props) {
    const [alert, setAlert] = useState(false);

    function closehandler() {
        setAlert(false);
    }
    function alertcreate() {
        setAlert(true);

    }


    const AlertBox = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "400px",
        height: "200px",
        backgroundColor: "transparent",
        flexDirection: "column",
        paddingTop: "40px",
        borderBox: "2px,2px,2px,2px rgba(0,0,0,0.5)",

    }
    const titlecontainer = {
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "300px",
        height: "20px",
        backgroundColor: !props.titlebg ? "white" : props.titlebg,
        position: "relative",
        bottom: "20px",
        padding: "20px",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        border: "1px solid rgba(0,0,0, 0.6)",

    }

    const paracontainer = {
        minHeight: "100px",
        overflow: "hidden",
        width: "300px",
        height: "30px",
        backgroundColor: !props.parabg ? "white" : props.parabg,
        position: "relative",
        bottom: "20px",
        padding: "20px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        border: "1px solid rgba(0,0,0, 0.6)",
    }

    const titlestyle = {
        color: !props.titletextcolor ? "black" : props.titletextcolor
    }

    const parastyle = {
        color: !props.paratextcolor ? "black" : props.paratextcolor

    }
    const IconStyle = {
        color: props.titlebg === 'black'? 'white': 'black'
    }
    return (
        <div className='container'>
            <h1 className='title'>Create Custom Alert Box</h1>
            <div className="userinput-container">
                <p className="userinput-container-para">Enter Your Title</p>
                <input type="text" onChange={props.usertitle} />
                <p className="userinput-container-para">Enter Your Paragraph</p>
                <input type="text" onChange={props.userpara} />
            </div>
            <div className="userinput-container">
                <p className="userinput-container-para">Title BG Color &ensp;</p>
                <input type="text" onChange={props.usertitlebgcolor} />
                <p className="userinput-container-para">Paragraph BG Color &ensp;</p>
                <input type="text" onChange={props.userparabgcolor} />
            </div>
            <div className="userinput-container">
                <p className="userinput-container-para">Title Text Color</p>
                <input type="text" onChange={props.usertitlecolor} />
                <p className="userinput-container-para">Paragraph Text Color</p>
                <input type="text" onChange={props.userparacolor} />
            </div>
            <div className='button-container'>
                <button onClick={alertcreate}>Create</button>
            </div>
            <div className="AlertBox-container">
                {alert ? <div className="AlertBox" style={AlertBox}>
                    <div className="titlecontainer" style={titlecontainer}>
                        <h1 style={titlestyle}>{!props.alerttitle ? "Example" : props.alerttitle}</h1>
                        <ImCross style = {IconStyle} className='xicon' onClick={closehandler} />
                    </div>
                    <div className="paracontainer" style={paracontainer}>
                        <p style={parastyle}>{!props.alertpara ? "lorem lorem lorem" : props.alertpara}</p>
                    </div>
                </div> : alert}
            </div>
        </div>
    )
}
