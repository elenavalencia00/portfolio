const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const gravity = 0.7;

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height);

// Background music
const bgMusic = new Audio('./samurai.mp3')
bgMusic.loop = true
bgMusic.volume = 0.3
let isMusicPlaying = true

// Auto-start music
setTimeout(() => {
    bgMusic.play().catch(e => {
        isMusicPlaying = false
        document.querySelector('#musicBtn').innerHTML = '🔇'
    })
}, 100)

// Toggle music
function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause()
        isMusicPlaying = false
        document.querySelector('#musicBtn').innerHTML = '🔇'
    } else {
        bgMusic.play()
        isMusicPlaying = true
        document.querySelector('#musicBtn').innerHTML = '🔊'
    }
}

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './images/background.png'
})

const shop = new Sprite({
    position: {
        x: 600,
        y: 159
    },
    imageSrc: './images/shop_anim.png',
    scale: 2.75,
    framesMax: 6
})

let player
let enemy

let gameStarted = false

// Start game function
function startGame() {
    gameStarted = true
    document.querySelector('#displayText').style.display = 'none'
    decreaseTimer()
}

// Add event listener for start button
window.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('#startGameBtn')
    if (startBtn) {
        startBtn.addEventListener('click', startGame)
        
        startBtn.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(145deg, #3a3a3a, #2a2a2a)'
            this.style.transform = 'translateY(-3px) scale(1.05)'
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.6)'
        })
        
        startBtn.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(145deg, #2a2a2a, #1a1a1a)'
            this.style.transform = 'translateY(0) scale(1)'
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)'
        })
    }
})

function initializePlayers() {
    player = new Fighter({
        position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },

    imageSrc: './images/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 150,
        y: 150
    },
    attackBox: {
        offset: {
            x: 100,
            y: 50
        },
        width: 160,
        height: 50
    },
    sprites: {
    idle: {
        imageSrc: './images/samuraiMack/Idle.png',
        framesMax: 8
        
    },
    run: {
        imageSrc: './images/samuraiMack/Run.png',
        framesMax: 8,
        image: new Image()
    },
    jump: {
        imageSrc: './images/samuraiMack/Jump.png',
        framesMax: 2,
        image: new Image()
    },
    fall: {
        imageSrc: './images/samuraiMack/Fall.png',
        framesMax: 2,
        image: new Image()
    },
    attack: {
        imageSrc: './images/samuraiMack/Attack1.png',
        framesMax: 6,
        image: new Image()
    },
    }

    })


    enemy = new Fighter({
        position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },

    color: 'blue',

    offset: {
        x: 215,
        y: 167
    },
    attackBox: {
        offset: {
            x: -170,
            y: 50
        },
        width: 170,
        height: 50
    },

    imageSrc: './images/Kenji/Idle.png',
    framesMax: 4,
    scale: 2.5,

    sprites: {
    idle: {
        imageSrc: './images/Kenji/Idle.png',
        framesMax: 4,
       
    },
    run: {
        imageSrc: './images/Kenji/Run.png',
        framesMax: 8,
        image: new Image()
    },
    jump: {
        imageSrc: './images/Kenji/Jump.png',
        framesMax: 2,
        image: new Image()
    },
    fall: {
        imageSrc: './images/Kenji/Fall.png',
        framesMax: 2,
        image: new Image()
    },
    attack: {
        imageSrc: './images/Kenji/Attack1.png',
        framesMax: 4,
        image: new Image()
    }

    }})
}

initializePlayers()


console.log(player)

let gameOver = false
let timer = 60
let timerId

function resetGame() {
    // Reset game state
    gameOver = false
    gameStarted = true
    timer = 60
    
    // Clear timer
    clearTimeout(timerId)
    
    // Reset players
    initializePlayers()
    
    // Reset health bars
    document.querySelector('#playerHealth').style.width = '100%'
    document.querySelector('#enemyHealth').style.width = '100%'
    
    // Reset timer display
    document.querySelector('#timer').innerHTML = timer
    
    // Hide winner display
    document.querySelector('#displayText').style.display = 'none'
    
    // Reset and restart music
    bgMusic.currentTime = 0
    if (isMusicPlaying) {
        bgMusic.play()
    }
    
    // Restart timer
    decreaseTimer()
}

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }
}



 // Don't start timer automatically - wait for game to start

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle= 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    shop.update()
    player.update()
    enemy.update() 
    
    if (!gameStarted || gameOver) return
    
    player.velocity.x=0
    enemy.velocity.x=0

    //player movement


    if(keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = -5
   player.switchSprite('run')
    } else if (keys.d.pressed && player.lastKey === 'd') {
        player.switchSprite('run')
            player.velocity.x = 5
        } else {
           player.switchSprite('idle') 
        }
if (player.velocity.y < 0) {
    player.switchSprite('jump') 
} else if (player.velocity.y > 0) {
    player.switchSprite('fall')
}

    //enemy movement

    if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        enemy.velocity.x = -5
    enemy.switchSprite('run')}
        else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
            enemy.switchSprite('run')
            enemy.velocity.x = 5 
        } else {
            enemy.switchSprite('idle')
        }
if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump') 
} else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
}


    //detect collision

    if(
        rectangularCollision({
            rectangle1: player,
            rectangle2: enemy
        }) &&

        player.isAttacking
    ) {
        player.isAttacking = false
        enemy.health -=20
        document.querySelector('#enemyHealth').style.width = enemy.health + "%"
    }

     if(
        rectangularCollision({
            rectangle1: enemy,
            rectangle2: player
        }) &&

        enemy.isAttacking
    ) {
        enemy.isAttacking = false
        player.health -=20
        document.querySelector('#playerHealth').style.width = player.health + "%"
    }
//end game based on health

if(enemy.health <= 0 || player.health <= 0){
    gameOver = true
    determineWinner({player, enemy, timerId})
} }
    


animate()

window.addEventListener('keydown', (event) => {
    if (!gameStarted || gameOver) return
    
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            player.lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            player.lastKey = 'a'
            break
        case 'w':
            player.velocity.y = -20
            break

        case ' ':
            event.preventDefault()
            player.attack()
            break

        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastKey = 'ArrowLeft'
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowUp':
            enemy.velocity.y = -20
            break
        case 'ArrowDown':
            enemy.attack()
            break

            
            
    }
    console.log(event.key)
})

window.addEventListener('keyup', (event) => {
    if (!gameStarted || gameOver) return
    
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.w.pressed = false
            break

            //enemy keys

         case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
        
    }
    console.log(event.key)
}) 