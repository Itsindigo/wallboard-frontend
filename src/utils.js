
export function paginate(array, itemsPerPage) {
    return array.reduce((accumulator, _, index) => {
        if (index % itemsPerPage === 0) {
            return accumulator.concat([array.slice(index, index + itemsPerPage)])
        } else {
            return accumulator
        }
    }, [])
}