import React from 'react';
import { calculateSpentPoints } from './TalentDataService';
import { ITalentTree } from './TalentTreeModels';

export interface IPointUsageProps {
    tree: ITalentTree;
}

export function PointUsageView(props: IPointUsageProps) {
    const pointsSpent = calculateSpentPoints(props.tree);
    return <div className="point-info">
        {pointsSpent}/{props.tree.maxPoints}<br /><span className="blue">Points Spent</span>
    </div>;
}
