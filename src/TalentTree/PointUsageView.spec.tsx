import React from 'react';
import ReactDOM from 'react-dom';
import { PointUsageView } from './PointUsageView';
import { fetchTalents } from './TalentDataService';

it('renders without crashing', () => {
    const tree = fetchTalents();
    const div = document.createElement('div');
    ReactDOM.render(<PointUsageView tree={tree}/>, div);
});