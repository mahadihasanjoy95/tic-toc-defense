const ButtonData = {
    winningPatterns: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],
    winningPatternsNext :[
        [0,1,2], [0,2,1], [0,3,6], [0,6,3], [0,8,4],[0,4,8], [1,2,0], [1,4,7], [2,5,8], [2,4,6],
        [3,6,0], [3,4,5], [4,5,3], [4,8,0], [4,6,2], [4,7,1], [5,8,2], [6,7,8], [7,8,6],
    ],

};
export default ButtonData;