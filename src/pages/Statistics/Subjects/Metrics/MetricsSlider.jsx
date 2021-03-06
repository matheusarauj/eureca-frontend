import React, { useState } from 'react';

import { RangeSlider } from 'rsuite';

import {labels} from './metricsUtil';

import '../../styles.css'

const MetricsSlider = (props) => {
    
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(77);
    
    const handleStyle = {
        color: '#fff',
        fontSize: 1,
        width: 32,
        height: 22
    };

    return (
        labels ?
        <div className={'mainSlider'}>
            <RangeSlider
                min={0}
                max={77}
                defaultValue={[value1, value2]}
                value={[value1, value2]}
                handleStyle={handleStyle}
                graduated
                className="custom-slider"
                tooltip={false}
                handleTitle={labels[value1]}
                onChange={v => {
                    setValue1(v[0]);
                    setValue2(v[1]);
                    props.changeSlider(labels[v[0]], labels[v[1]]);
                }}
                renderMark={mark => {
                    if ([value1, value2].includes(mark)) {
                        return <span className={'legendSlider'}>{labels[mark]}</span>;
                    }
                    
                }}
            />
        </div>
        : null
    )
}

export default MetricsSlider;