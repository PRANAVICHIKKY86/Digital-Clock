function my_clock(){
    let currentDate=new Date() // gives entire time
    let sys_hrs=currentDate.getHours(); //get only hrs
    document.getElementById('hrs').innerHTML=sys_hrs
    document.getElementById('mnt').innerHTML=currentDate.getMinutes()
    document.getElementById('sec').innerHTML=currentDate.getSeconds()
    let wish;
    if(sys_hrs>=0 && sys_hrs<=12)
        wish='Good Morning'
    else if(sys_hrs>=12 && sys_hrs<=16)
        wish='Good Afternoon'
    else
        wish='Good Evening'
    document.getElementById('wishing').innerHTML= `Hello, ${wish}! `
    
    let week_day;
    switch(currentDate.getDay()) {  //instead of switch we can store the day's in an array and get each day by arr[currentDate.getDay()]
        case 0: week_day="Sunday"
                break
        case 1: week_day="Monday"
                break
        case 2: week_day="Tueday"
                break
        case 3: week_day="Wednesday"
                break
        case 4: week_day="Thursday"
                break
        case 5: week_day="Friday"
                break
        case 6: week_day="Saturday"
                break
    }
    document.getElementById('weekDay').innerHTML=week_day
    console.log(currentDate.getDay())
    }
    
    //setInterval func is used to call the fun very second
    setInterval(my_clock,1000) //updates foe every 1 sec ,5000 - 5sec