export function preventDefault<T, E>(fn: (ev: React.SyntheticEvent<T, E>) => void) {
    return function(event: React.SyntheticEvent<T, E>) {
        event.preventDefault();
        return fn(event);
    }
}

export function updateListItem<T>(list: T[], target: T, updateFn: (currentValue: T) => T): T[] {
    return list.map(x => x == target ? updateFn(x) : x)
}

export function noop(): void {}