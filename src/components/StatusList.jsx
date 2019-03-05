import React, {Fragment} from 'react';
import { statusList } from '../services/helpers';

const StatusList = (props) => {
    console.log('props statusList', props);
    
    const list = statusList.filter(el => el.isRadio).map((status, index) => {
        return (
            <Fragment>
                <input
                    type="radio"
                    name="radio"
                    className="status__input"
                    id={'status__input--' + index}
                    hidden
                    />
                <label
                    htmlFor={'status__input--' + index}
                    className="status__label"
                    key={status.value}
                    style={{backgroundColor: status.color}}
                    >
                    {status.radioName}
                </label>
            </Fragment>
        )
    });
    return (
        <div className="status">
            {list}
        </div>
    );
}
 
export default StatusList;