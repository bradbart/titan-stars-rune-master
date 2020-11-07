import React from 'react';
import './talent.scss';
import { ITalent, ITalentPath, ITalentTree } from './TalentTreeModels';
import { TalentPathView } from "./TalentPathView";
import { PointUsageView } from "./PointUsageView";

export interface ITalentTreeProps {
    tree: ITalentTree
    onToggle: (path: ITalentPath, talent: ITalent) => void
}

export function TalentTreeView(props: ITalentTreeProps) {
    const paths = props.tree.paths.map(x => <TalentPathView key={x.name} path={x} onToggle={props.onToggle}></TalentPathView>);

    return <div className="flex-container" style={{ "justifyContent": "start" }}>
        <div className="spaced-list">
            {paths}
        </div>
        <div>
            <PointUsageView tree={props.tree}></PointUsageView>
        </div>
    </div>;
}
