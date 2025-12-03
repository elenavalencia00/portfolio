function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
    rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

function determineWinner({player, enemy, timerId}){
    clearTimeout(timerId)
    const displayText = document.querySelector('#displayText')
    displayText.style.display="flex"
    
    let message = ""
    let playerColor = ""
    
    if (player.health === enemy.health) {
        message = "DRAW"
        playerColor = "#ffd700"
    } else if (player.health > enemy.health) {
        message = "PLAYER 1 WINS!"
        playerColor = "#ff6b6b"
    } else if (player.health < enemy.health) {
        message = "PLAYER 2 WINS!"
        playerColor = "#6b9fff"
    }
    
    displayText.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
            border: 4px solid ${playerColor};
            border-radius: 15px;
            padding: 30px 45px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.1);">
            <div style="
                color: ${playerColor};
                font-size: 28px;
                text-shadow: 3px 3px 0 #000;
                letter-spacing: 3px;
                text-align: center;">
                ${message}
            </div>
            <div style="
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, ${playerColor}, transparent);
                opacity: 0.5;">
            </div>
            <button id="playAgainBtn" style="
                background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
                color: ${playerColor};
                border: 2px solid ${playerColor};
                padding: 12px 35px;
                font-size: 16px;
                font-family: 'Press Start 2P', cursive;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s;
                box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                PLAY AGAIN
            </button>
        </div>`
    
    const btn = document.querySelector('#playAgainBtn')
    
    btn.addEventListener('click', () => {
        resetGame()
    })
    
    btn.addEventListener('mouseenter', function() {
        this.style.background = `linear-gradient(145deg, #3a3a3a, #2a2a2a)`
        this.style.transform = 'translateY(-3px) scale(1.05)'
        this.style.boxShadow = `0 8px 25px rgba(0,0,0,0.6)`
    })
    
    btn.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(145deg, #2a2a2a, #1a1a1a)'
        this.style.transform = 'translateY(0) scale(1)'
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)'
    })
    
    btn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(1px) scale(0.98)'
    })
    
    btn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)'
    })
}


let lastKey
function decreaseTimer() {
    
    if (timer > 0) {
    timerId = setTimeout (decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer 
} 
    if (timer === 0) {
        
        determineWinner({player, enemy, timerId})
     }
    }
