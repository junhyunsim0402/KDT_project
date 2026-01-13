// 문제1
let board = ['', '', '', '', '', '', '', '', ''];
let player1 = `X`;
let player2 = `O`
let win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // 가로
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 세로
    [0, 4, 8], [2, 4, 6]             // 대각선
];
let result = true;
let html = ``;
while (result) {
    let user1 = Number(prompt(`${player1}님 칸 번호를 입력하세요(0~8):`));
    if (user1 >= 0 && user1 <= 8 && board[user1] == ``) {
        board[user1] = player1;
    } else {
        while (true) {
            user1 = Number(prompt(`${player1}님 칸 번호를 다시 입력하세요(0~8):`));
            if (user1 >= 0 && user1 <= 8 && board[user1] == ``) {
                board[user1] = player1;
                break;
            } else {
                continue;
            }
        }
    }       //player1 입력 완료
    for (let i = 0; i < win.length; i++) {
        if (board[win[i][0]] == player1 && board[win[i][1]] == player1 && board[win[i][2]] == player1) {
            for (let j = 0; j < board.length; j++) {
                html += ` ${board[j]} | `;
                console.log(`${player1} 승리!}`);
                result = false;
                if ((j + 1) % 3 == 0&&j!==8) {
                    html += `<br/>ㅡㅡㅡㅡ<br/>`;
                }
            }
        } else if (board[win[i][0]] == player2 && board[win[i][1]] == player2 && board[win[i][2]] == player2) {
            for (let j = 0; j < board.length; j++) {
                html += ` ${board[j]} | `;
                console.log(`${player2} 승리!}`);
                result = false;
                if ((j + 1) % 3 == 0&&j!==8) {
                    html += `<br/>ㅡㅡㅡㅡ<br/>`;
                }
            }
        }
    }       //player1입력후 승리 조건이 충족될때 
    if (true) {
        if (board.indexOf(``) == -1) {
            for (let j = 0; j < board.length; j++) {
                html += ` ${board[j]} | `;
                if ((j + 1) % 3 == 0) {
                    html += `<br/>ㅡㅡㅡㅡ<br/>`;
                }
            }
            console.log(`무승부`);
            result = false;
        }
    }       //player1입력후 무승부일때

    if (result == false) {
        break;
    }


    let user2 = Number(prompt(`${player2}님 칸 번호를 입력하세요(0~8):`));
    if (user2 >= 0 && user2 <= 8 && board[user2] == ``) {
        board[user2] = player2;
    } else {
        while (true) {
            user2 = Number(prompt(`${player2}님 칸 번호를 다시 입력하세요(0~8):`));
            if (user2 >= 0 && user2 <= 8 && board[user2] == ``) {
                board[user2] = player2;
                break;
            } else {
                continue;
            }
        }
    }
    for (let i = 0; i < win.length; i++) {
        if (board[win[i][0]] == player1 && board[win[i][1]] == player1 && board[win[i][2]] == player1) {
            for (let j = 0; j < board.length; j++) {
                html += ` ${board[j]} | `;
                console.log(`${player1} 승리!}`);
                result = false;
                if ((j + 1) % 3 == 0&&j!==8) {
                    html += `<br/>ㅡㅡㅡㅡ<br/>`;
                }
            }
        } else if (board[win[i][0]] == player2 && board[win[i][1]] == player2 && board[win[i][2]] == player2) {
            for (let j = 0; j < board.length; j++) {
                html += `${board[j]} | `;
                console.log(`${player2} 승리!}`);
                result = false;
                if ((j + 1) % 3 == 0&&j!==8) {
                    html += `<br/>ㅡㅡㅡㅡ<br/>`;
                }
            }
        }
    }
    if (true) {
        if (board.indexOf(``) == -1) {
            for (let j = 0; j < board.length; j++) {
                html += ` ${board[j]} | `;
                if ((j + 1) % 3 == 0) {
                    html += `<br/>ㅡㅡㅡㅡ<br/>`;
                }
            }
            console.log(`무승부`);
            result = false;
        }
    }
}
document.write(html);