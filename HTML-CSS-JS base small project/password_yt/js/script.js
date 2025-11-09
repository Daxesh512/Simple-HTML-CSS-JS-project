const input = document.querySelector('.input__field');
const inputIcon = document.querySelector('.input__icon');

inputIcon.addEventListener('click', (e) =>{
    e.preventDefault();

    inputIcon.setAttribute(
        'src',
        input.getAttribute('type') === 'password' ? 
        'https://raw.githubusercontent.com/atherosai/ui/731acd657a469278b84e77f289a7d01cc7d8d924/input-04/assets/eye-off.svg'
        :
        'https://raw.githubusercontent.com/atherosai/ui/731acd657a469278b84e77f289a7d01cc7d8d924/input-04/assets/eye.svg'
    );

    input.setAttribute(
        'type',
        input.getAttribute('type') === 'password' ? 
        'text'
        :
        'password'
    )
})