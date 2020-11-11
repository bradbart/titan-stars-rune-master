import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTalents } from './TalentDataService';
import { TalentView } from './TalentView';

it('renders without crashing', () => {
    const tree = fetchTalents();
    const talent = tree.paths[0].talents[0];
    const div = document.createElement('div');
    const mockOnToggle = jest.fn(x => {});
    ReactDOM.render(<TalentView talent={talent} onToggle={mockOnToggle}/>, div);
});