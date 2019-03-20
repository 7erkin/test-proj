const getEntityById = (iterableCollection, id) => {
    const indexEntity = Array.prototype.findIndex.call(iterableCollection, el => el.id == id);
    return iterableCollection[indexEntity];
}

export default getEntityById;