const timer = ()=> {
    const daysBlock = document.querySelector('.timer__days');
    const hoursBlock = document.querySelector('.timer__hours');
    const minutesBlock = document.querySelector('.timer__minutes');
    const secondsBlock = document.querySelector('.timer__seconds');
    const numWord = (value,words) => {
        value = Math.abs(value)%100;
        if(value>=10 && value<=20) return words[0];
        const lastNum = value%10;
        if(lastNum === 1 )return words[1];
        if(lastNum>1 && lastNum <5) return  words[2];
        return words[0];
    }
    const updateTimer = () =>{
        const date = new Date();
        const dateDeadline = new Date('28 April 2022').getTime();
        const timeRemaining = (dateDeadline-date)/1000;
        const seconds = Math.floor(timeRemaining % 60);
        const minutes = Math.floor((timeRemaining/60) % 60);
        const hours = Math.floor((timeRemaining/3600) % 60);
        const days = Math.floor((timeRemaining/3600) /24);
        const fseconds = seconds>9 ? seconds : '0'+seconds
        const fminutes = minutes>9 ? minutes : '0'+minutes
        const fhours = hours>9 ? hours : '0'+hours
        const fdays = days>9 ? days : '0'+days

        secondsBlock.textContent = fseconds;
        minutesBlock.textContent = fminutes;
        hoursBlock.textContent = fhours;
        daysBlock.textContent = fdays;
        const secWords = ['секунд','секунда','секунды'];
        const minWords = ['минут','минута','минуты'];
        const hWords = ['часов','час','часа'];
        const dWords = ['дней','день','дня'];

        secondsBlock.nextElementSibling.textContent=numWord(fseconds,secWords);
        minutesBlock.nextElementSibling.textContent=numWord(fminutes,minWords);
        hoursBlock.nextElementSibling.textContent=numWord(fhours,hWords);
        daysBlock.nextElementSibling.textContent=numWord(fdays,dWords);
        if(timeRemaining<=0){
            clearInterval(interval)
            secondsBlock.textContent = '00';
            document.querySelector('.timer').style.color= 'red'
            minutesBlock.textContent = '00';
            hoursBlock.textContent = '00';
            daysBlock.textContent = '00';
        }
    }
    let interval = setInterval(updateTimer,500);
    updateTimer();
}
timer();

