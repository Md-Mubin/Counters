// =========================== All Documentation
// ===== Document of Counter_limit 
let number = document.querySelectorAll(".box")

// ===== Document of Various Counter Section
// Normal Counter Document
let normalCount = document.querySelector(".normal_count")
// Click Counter Document 
let clickCounter = document.querySelector(".click_count")
// Toggle Counter Document
let toggleCounter = document.querySelector(".toggle_count")
// Dynamic Counter Document
let dynamicResult = document.querySelector(".dynamic_resuilt")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let button = document.querySelector(".dynamic_count button")
// Continuous Counter Document
let continueCounter = document.querySelector(".continuous_count")
// Big Number Counter Document
let bigNumberCounter = document.querySelector(".bigNumber_count")

// ======== Counter Limit Section Start
{
    number.forEach((item) => {

        let num = 0
        function numCount() {

            num++
            item.innerHTML = num
            if (num == item.dataset.number) {
                clearInterval(numLimit)
            }
        }

        let numLimit = setInterval(() => {
            numCount()
        }, 1)

    })
}
// ======== Counter Limit Section End

// ======== Various Counter Section Start
// Normal Counter #####
{
    let num = 0
    normalCount.innerHTML = num
    function numCount() {
        num++
        normalCount.innerHTML = num
        if (num == 200) {
            clearInterval(numStop)
        }
    }

    let numStop = setInterval(() => {
        numCount()
    }, 1);
}

// Click Counter #####
{
    let num = 0
    clickCounter.innerHTML = num
    clickCounter.addEventListener("click", () => {
        let num = 0
        clickCounter.innerHTML = num
        function numCount() {

            num++
            clickCounter.innerHTML = num
            if (num == 100) {
                clearInterval(numStop)
            }
        }

        let numStop = setInterval(() => {
            numCount()
        }, 1);
    })
}

// Toggle Counter #####
{
    let count = true
    let num = 0
    toggleCounter.innerHTML = num

    toggleCounter.addEventListener("click", () => {

        // toggleCounter.innerHTML = num
        if (count) {
            function numCount() {
                num++
                toggleCounter.innerHTML = num
                if (num == 100) {
                    clearInterval(numStop)
                }
            }
            let numStop = setInterval(() => {
                numCount()
            }, 1);
        } else {
            function numCount() {
                --num
                toggleCounter.innerHTML = num
                if (num == 0) {
                    clearInterval(numStop)
                }
            }
            let numStop = setInterval(() => {
                numCount()
            }, 1);
        }
        count = !count
    })
}

// Dynamic Counter #####
{
    button.addEventListener("click", () => {

        if (input1.value == "" && input2.value != "") {
            dynamicResult.innerHTML = result()

            function result() {

                let num = 0
                dynamicResult.innerHTML = num
                function numCount() {

                    num++
                    dynamicResult.innerHTML = num
                    if (num == input2.value) {
                        clearInterval(numStop)
                    }
                }
                let numStop = setInterval(() => {
                    numCount()
                }, 1);
            }

        } if (input1.value != "" && input2.value != "") {
            dynamicResult.innerHTML = result()
            function result() {

                let num = input1.value
                dynamicResult.innerHTML = num
                function numCount() {

                    num++
                    dynamicResult.innerHTML = num
                    if (num == input2.value) {
                        clearInterval(numStop)
                    }
                }
                let numStop = setInterval(() => {
                    numCount()
                }, 1);
            }
        }
    })
}

// Continuous Counter #####
{
    let num = 0
    continueCounter.innerHTML = num

    function numCount() {

        num++
        continueCounter.innerHTML = num
        if (num == 100) {
            num %= 100
        }
    }

    setInterval(() => {
        numCount()
    }, 30);
}

// Big Number Counter #####
{
    let num = 0

    function numCount() {

        num += 1000
        bigNumberCounter.innerHTML = num
        if(num == 500000){
            clearInterval(numStop)
        }
    }

    let numStop = setInterval(() => {
        numCount()
    }, 1);
}
// ======== Various Counter Section End
