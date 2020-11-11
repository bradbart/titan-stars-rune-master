import React from 'react';
import './icon.scss';

interface IconProps {
    icon: string;
    bright?: boolean;
}

export function Icon(props: IconProps) {
    const classes = ['icon', `icon-${props.icon}`]
    if(props.bright) {
        classes.push('icon-bright')
    }

    return <i className={classes.join(" ")}></i>
}