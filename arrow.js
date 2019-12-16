const square=(x)=>{return x*x}
console.log(square(2))

// const event={
//     name:"avinash",
//     printGuestList:function(){
//         console.log('Guest list for '+ this.name)
//     }
// }

// const event={
//     name:"avinash",
//     printGuestList:()=>{
//         console.log('Guest list for '+ this.name)
//     }
// }

// const event={
//     name:"avinash",
//     printGuestList(){
//         console.log('Guest list for '+ this.name)
//     }
// }

const event={
    name:"avinash",
    guestList:["avinsh","kumar","singh"],
    printGuestList(){
        console.log('Guest list for '+ this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending '+this.name)
        })
    }
}
debugger
event.printGuestList()