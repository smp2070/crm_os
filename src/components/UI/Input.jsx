import React from 'react';

// import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    // const inputClasses = [classes.InputElement];
    const inputClasses = ['InputElement'];

    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push('Invalid');
    // }
    // if (props.valid) {
    //     inputClasses.push('Valid');
    // }
    console.log(props);
    props.invalid && props.shouldValidate && props.touched && inputClasses.push('Invalid');
    !props.invalid && inputClasses.push('Valid');


    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                onBlur={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                onBlur={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                onBlur={props.changed}/>;
    }

    return (
        <div className={'Input'}>
            {props.label && <label className={'Label'}>{props.label}</label>}
            {/* <div> */}

                {inputElement}
                <span className="focus-border">
                    <i></i>
                </span>
            {/* </div> */}

            {/* <input class="effect-7" type="text" placeholder="Placeholder Text7"> */}
        </div>
    );

};

export default input;