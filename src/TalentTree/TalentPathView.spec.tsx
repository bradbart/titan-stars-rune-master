import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTalents } from './TalentDataService';
import { TalentPathView } from './TalentPathView';

it('renders without crashing', () => {
    const tree = fetchTalents();
    const div = document.createElement('div');
    const mockOnToggle = jest.fn(x => {});
    ReactDOM.render(<TalentPathView path={tree.paths[0]} onToggle={mockOnToggle}/>, div);
});