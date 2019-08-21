export default (values, pattern) => {
    return values.filter(({ name }) => name.toUpperCase().indexOf(pattern.toUpperCase()) !== -1)
}