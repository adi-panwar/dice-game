const Button = document.querySelector("button")
const diceOne = document.getElementById("dice-One")
const diceTwo = document.getElementById("dice-Two")
const diceThree = document.getElementById("dice-Three")
const diceFour = document.getElementById("dice-four")
const container = document.getElementById("container")
const H1 = document.querySelector("h1")



const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD",
    "#1ABC9C", "#E74C3C", "#2ECC71", "#3498DB", "#9B59B6",
    "#34495E", "#16A085", "#27AE60", "#2980B9", "#8E44AD",
    "#2C3E50", "#F39C12", "#D35400", "#C0392B", "#7F8C8D",
    "#BDC3C7", "#95A5A6", "#ECF0F1", "#E67E22", "#1F618D",
    "#7D3C98", "#117A65", "#148F77", "#196F3D", "#1A5276",
    "#4A235A", "#512E5F", "#154360", "#0E6251", "#145A32",
    "#7B241C", "#922B21", "#A93226", "#AF601A", "#B9770E",
    "#D4AC0D", "#F4D03F", "#F7DC6F", "#FCF3CF", "#FAD7A0",
    "#EDBB99", "#E59866", "#DC7633", "#D35400", "#BA4A00",
    "#A04000", "#873600", "#6E2C00", "#512E5F", "#6C3483",
    "#884EA0", "#A569BD", "#BB8FCE", "#D2B4DE", "#E8DAEF",
    "#F5EEF8", "#EBDEF0", "#EAF2F8", "#D6EAF8", "#AED6F1",
    "#85C1E9", "#5DADE2", "#3498DB", "#2E86C1", "#2874A6",
    "#21618C", "#1B4F72", "#154360", "#0B5345", "#0E6655",
    "#117864", "#148F77", "#17A589", "#1ABC9C", "#48C9B0",
    "#76D7C4", "#A3E4D7", "#D1F2EB", "#E8F8F5", "#FEF9E7",
    "#FCF3CF", "#FDEBD0", "#FADBD8", "#F5B7B1", "#F1948A",
    "#EC7063", "#E74C3C", "#CB4335", "#B03A2E", "#943126"

];




const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

const diceIcons = ["", "fa-solid fa-dice-one ", "fa-solid fa-dice-two ", "fa-solid fa-dice-three ", "fa-solid fa-dice-four ", "fa-solid fa-dice-five ", "fa-solid fa-dice-six "]





const rolldice = () => {
    const numberone = (Math.floor(Math.random() * 6 + 1))
    const numberTwo = (Math.floor(Math.random() * 6 + 1))
    const numberThree = (Math.floor(Math.random() * 6 + 1))
    const numberFour = (Math.floor(Math.random() * 6 + 1))
    const sum = numberone + numberTwo + numberThree + numberFour



    diceOne.className = diceIcons[numberone]
    diceTwo.className = diceIcons[numberTwo]
    diceThree.className = diceIcons[numberThree]
    diceFour.className = diceIcons[numberFour]

    diceOne.style.color = getRandomColor()
    diceTwo.style.color = getRandomColor()
    diceThree.style.color = getRandomColor()
    diceFour.style.color = getRandomColor()

    diceOne.style.transition = "color 0.3s"
    diceTwo.style.transition = "color 0.3s"
    diceThree.style.transition = "color 0.3s"
    diceFour.style.transition = "color 0.3s"


    diceOne.classList.add("roll")
    diceTwo.classList.add("roll")
    diceThree.classList.add("roll")
    diceFour.classList.add("roll")



    setTimeout(() => {
        diceOne.classList.remove("roll")
        diceTwo.classList.remove("roll")
        diceThree.classList.remove("roll")
        diceFour.classList.remove("roll")


        if (sum === 4 || sum === 8 || sum === 16) {
            container.className = "p-8 bg-gradient-to-r from-green-500 to-green-400 min-h-screen flex flex-col  items-center justify-center transition-all duration-500"
            Button.innerText = "Play again"
            if (sum === 4) {
                H1.innerHTML = "🎉 You won an iPhone 📱"

            }
            else if (sum === 8) {
                H1.innerHTML = "🏍️ <span class='text-3xl font-extrabold'>Wow!</span>You won a Bike "
            }
            else if (sum === 16) {
                H1.innerHTML = "🚗 <span class='text-3xl font-extrabold'>Yeee!</span>You won a Car"
            }
        }
        else if (sum === 5 || sum === 7 || sum === 13) {
            H1.innerHTML = "😞Chee !  <span class='text-2xl font-semibold'>You Lost</span>"
            Button.innerText = "Play again"
            container.className = "p-8 bg-gradient-to-r from-red-500 to-red-400 min-h-screen flex flex-col  items-center justify-center transition-all duration-500"
        }
        else if (sum === 12) {
            H1.innerHTML = "😍 <span class='text-3xl font-extrabold'>Moon trip"
            Button.innerText = "Play again"
            container.className = "p-8 bg-gradient-to-r from-blue-500 to-blue-400 min-h-screen flex flex-col  items-center justify-center transition-all duration-500"
        }
        else {
            H1.innerHTML = "🎲 <span class='text-2xl font-semibold'>Try Again</span> "
            container.className = "p-8 bg-gradient-to-r from-yellow-400 to-yellow-300 min-h-screen flex flex-col  items-center justify-center transition-all duration-500"
        }
    }, 600)
}







Button.addEventListener("click", rolldice)
