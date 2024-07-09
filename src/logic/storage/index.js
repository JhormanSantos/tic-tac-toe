
export const saveData = ({board,turn}) => {
    localStorage.setItem('board',JSON.stringify(board))
    localStorage.setItem('turn', turn)
}

export const removeData = () => {
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
    localStorage.removeItem('winner')
}
