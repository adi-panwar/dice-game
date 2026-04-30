const Button = document.querySelector("button")
const diceOne = document.getElementById("dice-One")
const diceTwo = document.getElementById("dice-Two")
const container = document.getElementById("container")
const H1 = document.querySelector("h1")


const diceIcons = ["", "fa-solid fa-dice-one", "fa-solid fa-dice-two", "fa-solid fa-dice-three", "fa-solid fa-dice-four", "fa-solid fa-dice-five", "fa-solid fa-dice-six"]




const rolldice = () => {
    const numberone = (Math.floor(Math.random() * 6 + 1))
    const numberTwo = (Math.floor(Math.random() * 6 + 1))
    const sum = numberone + numberTwo

    
    
    diceOne.className = diceIcons[numberone]
    diceTwo.className = diceIcons[numberTwo]
    
    diceOne.classList.add("roll")
    diceTwo.classList.add("roll")



    setTimeout(() => {
        diceOne.classList.remove("roll")
        diceTwo.classList.remove("roll")
    }, 600)

    if (sum === 2 || sum === 6 || sum === 12) {
        container.className = "p-8 bg-gradient-to-r from-green-500 to-green-400 min-h-screen flex flex-col  items-center justify-center transition-all duration-500"
        Button.innerText = "Play again"
        if (sum === 2) {
            H1.innerHTML = "🎉 <span class='text-3xl font-extrabold'>Congratulations!</span><br/>You won an iPhone 📱"

        }
        else if (sum === 6) {
            H1.innerHTML = "🏍️ <span class='text-3xl font-extrabold'>Awesome!</span><br/>You won a Bike "
        }
        else if (sum === 12) {
            H1.innerHTML = "🚗 <span class='text-3xl font-extrabold'>Jackpot!</span><br/>You won a Car"
        }
    }
    else if (sum === 3 || sum === 7 || sum === 11) {
        H1.innerHTML = "😞Chee ! <br> <span class='text-2xl font-semibold'>You Lost</span>"
        Button.innerText = "Play again"
        container.className = "p-8 bg-gradient-to-r from-red-500 to-red-400 min-h-screen flex flex-col  items-center justify-center transition-all duration-500"
    }
    else if (sum === 9) {
        H1.innerHTML = "😍 <span class='text-3xl font-extrabold'>Heaven Ticket Confirm!"
        Button.innerText = "Play again"
        container.className = "p-8 bg-gradient-to-r from-blue-500 to-blue-400 min-h-screen flex flex-col  items-center justify-center transition-all duration-500"
    }
    else {
        H1.innerHTML = "🎲 <span class='text-2xl font-semibold'>Try Again</span>e "
        container.className = "p-8 bg-gradient-to-r from-yellow-400 to-yellow-300 min-h-screen flex flex-col  items-center justify-center transition-all duration-500"
    }
}



Button.addEventListener("click", rolldice)
