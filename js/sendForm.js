const sendForm = () => {
    const form = document.querySelector('.modal');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')
        let sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-Type': 'orm/multipart;charset=UTF-8'
            },
        })
            .then((response) => {
                if(response.status !== 201){
                    throw new Error('Failed')
                }else alert('Форма отправлена')
                return response.json();
            })
            .then((json) => console.log(json))
            .catch(error => alert(error.message))
            .finally(()=>{
                text.value = '';
                tel.value = '';
                email.value = '';
            })
    })
}
sendForm()