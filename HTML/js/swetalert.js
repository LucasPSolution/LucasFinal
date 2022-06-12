const form = document.getElementById('add');
function onSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    Swal.fire({
        title:'Formulario enviado',
        html:'<div class="mr-4"><lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_td0868hw.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player></div>',
        icon:'success',
        padding:'2rem',
        grow:'column',
        timer:5000,
        timerProgressBar:true,
        
    })

    console.log(form.submit); // 👉️ input#submit
  
    // ⛔️ TypeError: form.submit is not a function
    HTMLFormElement.prototype.submit.call(form);
  }
  
  form.addEventListener('submit', onSubmit);