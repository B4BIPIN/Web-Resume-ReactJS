import React from 'react';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Portfolio extends React.Component {
    constructor(){
        super();
        this.state = {type:'Name'};
    }
    render(){
        // var Portfolio = [
        //     {
        //         Name:'BipinVanilla',
        //         Tech:'VanillaScript',
        //         Company:'BuildBeautiful4All',
        //         Time:'2Dec',
        //         Status:'Done',
        //         LiveStatus:false,
        //         SubTech:'HTML , CSS',
        //         Url:''
        //        },
        //     {
        //         Name:'BipinReactJS',
        //         Tech:'ReactScript',
        //         Company:'BuildBeautiful4All',
        //         Time:'3Dec',
        //         Status:'Done',
        //         LiveStatus:false,
        //         SubTech:'HTML , CSS',
        //         Url:''
        //     },
        //     {
        //         Name:'Angular',
        //         Tech:'AngularScript',
        //         Company:'BuildBeautiful4All',
        //         Time:'5Dec',
        //         Status:'Done',
        //         LiveStatus:true,
        //         SubTech:'HTML , CSS',
        //         Url:''
        //     },
        //     {
        //         Name:'Angular',
        //         Tech:'AngularScript',
        //         Company:'BuildBeautiful4All',
        //         Time:'5Dec',
        //         Status:'Done',
        //         LiveStatus:true,
        //         SubTech:'HTML , CSS',
        //         Url:''
        //     },
        //     {
        //         Name:'Angular',
        //         Tech:'AngularScript',
        //         Company:'BuildBeautiful4All',
        //         Time:'5Dec',
        //         Status:'Done',
        //         LiveStatus:true,
        //         SubTech:'HTML , CSS',
        //         Url:''
        //     },
        //     {
        //         Name:'Angular',
        //         Tech:'AngularScript',
        //         Company:'BuildBeautiful4All',
        //         Time:'5Dec',
        //         Status:'Done',
        //         LiveStatus:true,
        //         SubTech:'HTML , CSS',
        //         Url:''
        //     }
        // ];
        return <div className="Portfolios">
            <h1>PORTFOLIO</h1>
            <hr className="block"/>
            <h3>MY WORK</h3>
            <div className="Filter"><i><FontAwesomeIcon icon="filter"/></i>
            <hr className="divider"/>
                <ul>
                </ul>
            </div>
            <div className="PortfolioContent">
            <div className="Portfolio">
            </div>
            </div>
            </div>
    }
}
export default Portfolio; 