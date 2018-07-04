import  '../styles/lighter.scss'

// const ACTIVE_CLASS_NAME

    // function enableRed() {
    //     switctOff();
    //     lighterRed.classList.add('street-lighter__light_active');
    //
    // }
    // function enableYellow() {
    //     switctOff();
    //     lighterYellow.classList.add('street-lighter__light_active');
    //
    // }
    // function enableGreen() {
    //     switctOff();
    //     lighterGreen.classList.add('street-lighter__light_active');
    //
    // }
    // lighterRed.addEventListener('click', enableRed);
    // lighterYellow.addEventListener('click', enableYellow);
    // lighterGreen.addEventListener('click', enableGreen);
// }
    export function lighter() {
        // const lighterRed = document.querySelector('.street-lighter__light_red');
        // const lighterYellow = document.querySelector('.street-lighter__light_yellow');
        // const lighterGreen = document.querySelector('.street-lighter__light_green');

        const lights = lighterElement.querySelectorAll('.street-lighter__light');

        function switchOff() {
            for (let i = 0; i < lights.length; i++) {
                const light = lights[i];
                light.classList.remove('street-lighter__light_active');
            }
        }
            // lighterRed.classList.remove('street-lighter__light_active');
            // lighterYellow.classList.remove('street-lighter__light_active');
            // lighterGreen.classList.remove('street-lighter__light_active');

        function switchOn(element) {
            console.log('Enabled')
            element.classList.add('street-lighter__light_active');
        }

        function clickHandler(element) {
            switchOff();
            switchOn(element);
        }
    for(let i = 0; i < lights.length; i++) {
            const light = lights[i];
        light.addEventListener('click', function () {
            clickHandler(light);
        });
    }
}

//    lighterRed.addEventListener('click', function () {
//        clickHandler(lighterRed)
//    });
//     lighterYellow.addEventListener('click', function () {
//         clickHandler(lighterYellow)
//     });
//     lighterGreen.addEventListener('click', function () {
//         clickHandler(lighterGreen)
//     });
// }
//
// const arr = ['Hello', 'World'];
// console.log(arr);
// arr.push('Fruite');
// console.log(arr);