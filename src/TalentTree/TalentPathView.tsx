import React from 'react';
import { ITalent, ITalentPath } from './TalentTreeModels';
import { TalentView } from './TalentView';

export interface ITalentPathProps {
    path: ITalentPath,
    onToggle: (path: ITalentPath, talent: ITalent) => void
}

export function TalentPathView(props: ITalentPathProps) {
    const elements: any[] = [];
    props.path.talents.forEach((x, i) => {
        if (i !== 0) {
            elements.push(<TalentConnector key={`connector-${x.name}`} enabled={x.enabled}></TalentConnector>);
        }
        elements.push(<TalentView key={`talent-${x.name}`} talent={x} onToggle={props.onToggle.bind(null, props.path)}></TalentView>);
    });

    return <div className="flex-container mobile-vertical-container">
        <div className="talent-header">{props.path.name}</div>
        {elements}
    </div>;
}

function TalentConnector(props: any) {
    const classes = ["talent-connector"]
    if(props.enabled) {
        classes.push("enabled")
    }

    return <div className={classes.join(" ")}></div>
}