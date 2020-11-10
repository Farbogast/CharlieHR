
let birth = "1990-11-9"

const giveAge = () =>{


    //creating the dates
    const birthDate = new Date(birth)
    const todayDate = new Date()

    //getting the INT of the year
    const birthYear = birthDate.getFullYear()
    const todayYear = todayDate.getFullYear()

    const age = todayYear - birthYear

    return (
        console.log(age)
    )
}

const countdown = () => {

    const birthDate = new Date(birth)
    const todayDate = new Date()


    //Creating the deadline with the birthday for each year depending if it's already passed or not 
    if (birthDate.getMonth() <= todayDate.getMonth() && birthDate.getDate() < todayDate.getDate()) {

        const newDeadline1 = new Date (todayDate.getFullYear()+1, birthDate.getMonth(),birthDate.getDate()+1);
        console.log(newDeadline1)
        const timeRemaining = Date.parse(newDeadline1) - Date.parse(new Date())
        const daysRemaining = Math.floor(timeRemaining/(1000*60*60*24))
        return(
            console.log(daysRemaining, "days before your next birthday!")
        )

    } else if(birthDate.getMonth() === todayDate.getMonth() && birthDate.getDate() === todayDate.getDate()) {
        console.log('Happy Birthday!')
    }
    else {

        const newDeadline = new Date (todayDate.getFullYear(), birthDate.getMonth(),birthDate.getDate()+1);
        const timeRemaining = Date.parse(newDeadline) - Date.parse(new Date())
        const daysRemaining = Math.floor(timeRemaining/(1000*60*60*24))
        return(
            console.log(daysRemaining, "days before your next birthday")
        )
    }
     

}

giveAge();
countdown();