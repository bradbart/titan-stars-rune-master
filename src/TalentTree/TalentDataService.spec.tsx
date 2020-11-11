import { calculateSpentPoints, fetchTalents, toggleTalentSelection } from './TalentDataService';

it('can enable the first talents of a path', () => {
    let tree = fetchTalents();
    tree = toggleTalentSelection(tree, tree.paths[0], tree.paths[0].talents[0])
    expect(tree.paths[0].talents[0].enabled).toBeTruthy();
});

it('should not enable talents when prereqs are not unlocked', () => {
    let tree = fetchTalents();
    const treePath = tree.paths[0];
    tree = toggleTalentSelection(tree, treePath, treePath.talents[0]);
    tree = toggleTalentSelection(tree, treePath, treePath.talents[2]);
    expect(treePath.talents[2].enabled).toBeFalsy();
})

it('should not allow the user to enable more than six talents', () => {
    let tree = fetchTalents();
    tree.paths[0].talents.forEach(x => {
        tree = toggleTalentSelection(tree, tree.paths[0], x);
    })
    tree.paths[1].talents.forEach(x => {
        tree = toggleTalentSelection(tree, tree.paths[1], x);
    });
    expect(tree.paths[1].talents[1].enabled).toBeTruthy();
    expect(tree.paths[1].talents[2].enabled).toBeFalsy();
});

it('can compute the spent points for a user', () => {
    let tree = fetchTalents();
    tree.paths[0].talents.forEach(x => {
        tree = toggleTalentSelection(tree, tree.paths[0], x);
    });
    tree = toggleTalentSelection(tree, tree.paths[1], tree.paths[1].talents[0]);
    expect(calculateSpentPoints(tree)).toBe(5);
});