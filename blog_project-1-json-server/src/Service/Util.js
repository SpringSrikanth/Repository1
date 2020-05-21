export const convertedDate = (date) => {
    const conDate=(date.getMonth()+1).toString().length==1 ? '0'+(date.getMonth()+1) : date.getMonth()+1
    return `${date.getFullYear()}-${conDate}-${date.getDate()}`
}