import React from 'react';
import Touit from "./Touit";
import { httpGetMessages } from '../api/TouitAPI';

class TouitContainer extends React.Component {
    render(){
        return(
            <div className="TouitContainer">
                { httpGetMessages(0, (data) =><Touit key={} data.messages) />}
                {/* <Touit name={} message={}/> */}
            </div>
        );
    }
};

export default TouitContainer;