import React from 'react';

const StatusList = (props) => {
    console.log('props statusList', props);
    const list = props.data.map((status, index) => {
        return (
            <>
                <input type="radio" name="radio" className="status__input" id={'status__input--' + index} hidden/>
                <label htmlFor={'status__input--' + index} className="status__label" key={status.value} style={{backgroundColor: status.color}}>
                    {status.radioName}
                </label>
            </>
        )
    });
    return (
        <div className="status">
            {list}
        </div>
    );
}
 
export default StatusList;