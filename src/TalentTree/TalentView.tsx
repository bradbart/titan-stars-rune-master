import React from 'react';
import { Icon } from '../Icons/Icon';
import { noop, preventDefault } from '../util';
import { ITalent } from './TalentTreeModels';

interface ITalentProps {
    talent: ITalent,
    onToggle: (talent: ITalent) => void
}

export function TalentView(props: ITalentProps) {
    const classes = ["talent"]
    if(props.talent.enabled) {
        classes.push("enabled")
    }

    const onEnableTalent = !props.talent.enabled ? props.onToggle.bind(null, props.talent) : noop;
    const onDisableTalent = props.talent.enabled ? props.onToggle.bind(null, props.talent) : noop;

    return <button
        className={classes.join(" ")}
        onClick={onEnableTalent}
        onContextMenu={preventDefault(onDisableTalent)}
    ><Icon icon={props.talent.icon} bright={props.talent.enabled}></Icon></button>
}

