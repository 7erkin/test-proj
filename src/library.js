export const findByPattern = (indicatorGroups, pattern) => indicatorGroups.filter(group => group.name.indexOf(pattern) !== -1);

export const getRandomId = () => Math.floor(100* Math.random());