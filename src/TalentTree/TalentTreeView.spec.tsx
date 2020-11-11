import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTalents } from './TalentDataService';
import { TalentTreeView } from './TalentTreeView';

it('renders without crashing', () => {
    const tree = fetchTalents();
    const div = document.createElement('div');
    const mockOnToggle = jest.fn(x => {});
    ReactDOM.render(<TalentTreeView tree={tree} onToggle={mockOnToggle}/>, div);
});