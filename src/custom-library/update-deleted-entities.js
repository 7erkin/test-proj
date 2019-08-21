export default (deletedEntities, id) => {
    const index = deletedEntities.findIndex(el => el === id)

    index === -1 ? deletedEntities.push(id) : deletedEntities.splice(index, 1)
}