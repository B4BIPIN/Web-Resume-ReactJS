import React,{Fragment} from 'react';
import {HorizontalBar} from 'react-chartjs-2';
function Chart(props){
    return (<Fragment>
        <HorizontalBar data={props.data} options={props.options}/>
        <hr/>
    </Fragment>);
}
export default Chart;