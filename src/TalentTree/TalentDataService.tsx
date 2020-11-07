import { updateListItem } from "../util";
import { ITalent, ITalentPath, ITalentTree } from "./TalentTreeModels"

export function fetchTalents(): ITalentTree {
    const talentTree1: ITalent[] = [
        { name: "Chevron", icon: "chevron", enabled: false },
        { name: "Cutlery", icon: "cutlery", enabled: false },
        { name: "Cake", icon: "cake", enabled: false },
        { name: "Crown", icon: "crown", enabled: false }
    ]

    const talentTree2: ITalent[] = [
        { name: "Boat", icon: "boat", enabled: false },
        { name: "Scuba", icon: "scuba", enabled: false },
        { name: "Bolt", icon: "bolt", enabled: false },
        { name: "Skull", icon: "skull", enabled: false },
    ]

    return {
        maxPoints: 6,
        paths: [
            {
                name: "TALENT PATH 1",
                talents: talentTree1
            },
            {
                name: "TALENT PATH 2",
                talents: talentTree2
            }
        ]
    }
}

export function toggleTalentSelection(tree: ITalentTree, path: ITalentPath, talent: ITalent): ITalentTree {
    if(!talent.enabled && !canEnableTalent(tree, path, talent)) {
        return tree;
    } else if(talent.enabled && !canDisableTalent(tree, path, talent)) {
        return tree;
    }

    return {
        ...tree,
        paths: updateListItem(tree.paths, path, p => toggleTalentInPath(p, talent))
    }
}

export function calculateSpentPoints(tree: ITalentTree) {
    return tree.paths.reduce((acc: number, path: ITalentPath) => path.talents.filter(x => x.enabled).length + acc, 0)
}

function canEnableTalent(tree: ITalentTree, path: ITalentPath, talent: ITalent): boolean {
    return (calculateSpentPoints(tree) < tree.maxPoints) && isNextTalentToUnlock(path, talent);
}

function canDisableTalent(tree: ITalentTree, path: ITalentPath, talent: ITalent): boolean {
    return path.talents.filter(x => x.enabled).pop() === talent;
}

function isNextTalentToUnlock(path: ITalentPath, talent: ITalent): boolean {
    return path.talents.filter(x => !x.enabled)[0] === talent;
}

function toggleTalentInPath(p: ITalentPath, talent: ITalent): ITalentPath {
    return {
      name: p.name,
      talents: updateListItem(p.talents, talent, t => ({
        ...t,
        enabled: !t.enabled
      }))
    }
}


