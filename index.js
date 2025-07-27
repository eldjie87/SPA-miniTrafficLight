export function index() {
    const section = document.createElement('section')
    section.innerHTML = `
        <div class="switch-container">
            <label class="switch">
                <input type="checkbox" id="toggle" hidden>
                <span class="slider"></span>
            </label>
        </div>

        <div class="light-container">
            <div class="light">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
            </div>
        </div>
    `;

    const checkbox = section.querySelector('#toggle')
    const span1 = section.querySelector('#span1')
    const span2 = section.querySelector('#span2') 
    const span3 = section.querySelector('#span3') 

    let intervalId = null
    let step = 0

    function resetLights() {
        span1.classList.remove('active')
        span2.classList.remove('active')
        span3.classList.remove('active')
    }

    function runTrafficLight() {
        resetLights()
        if (step === 0) span1.classList.add('active')      
        else if (step === 1) span2.classList.add('active')
        else if (step === 2) span3.classList.add('active') 
        else if (step === 3) span2.classList.add('active')

        step = (step + 1) % 4
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // ON
            step = 0
            runTrafficLight()
            intervalId = setInterval(runTrafficLight, 1000)
        } else {
            // OFF
            clearInterval(intervalId)
            resetLights()
        }
    })

    return section
}
