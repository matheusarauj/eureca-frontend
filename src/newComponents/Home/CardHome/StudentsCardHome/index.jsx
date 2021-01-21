import React from 'react';

import '../style.css'

import TitleCardHome from '../TitleCardHome'
import StudentsSummaryCardHome from './StudentsSummaryCardHome'

import Mask6 from '../../../../assets/new_home_assets/mask_6.svg';
import Mask5 from '../../../../assets/new_home_assets/mask_5.svg';

const StudentsCardHome = () => {

    return(
        <React.Fragment>
            <div className={'card-home-area1'}>
                <div className={"card-home-content"}>
                    <div className={"title-card-content"}>
                        <TitleCardHome title={"DISCENTES"}/>
                    </div>
                    <div className={"summary-card-content"}>
                        <StudentsSummaryCardHome/>
                        <div className={'type-students'}>
                            <div className={'type-student'}>RETIDOS</div>
                            <div className={'type-student'}>EVADIDOS</div>
                            <div className={'type-student'}>EGRESSOS</div>
                        </div>
                    </div>
                    <div className={"card-img-1"}>
                            <div className={"mask6"}>
                                <img src={Mask6} alt="mask6"/>
                            </div>
                            <div className={"mask5"}>
                                <img src={Mask5} alt="mask5"/>
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StudentsCardHome;