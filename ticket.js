console.log("connected");
let seatSelectNumber = 0;
let restTotalBDTAfterMinus = 0;
let seatArray = [];
let seatNameTyped = 0;
const seatButtons = document.querySelectorAll(".buttons");
for (let i = 0; i < seatButtons.length; i++) {
    const seatName = seatButtons[i];
    seatName.addEventListener("click", function (event) {
        const seatNo = event.target.innerText;



        if (seatArray.includes(seatNo)) {
            deleteElement(seatArray, seatNo);
            const lengthArray = seatArray.length
            setInnerTextByID("noOfselected", lengthArray);

            const totalSeats = parseInt(document.getElementById("totalSeats").innerText);
            const seatLeft = totalSeats + 1;
            document.getElementById("totalSeats").innerText = seatLeft;

            event.target.style.backgroundColor = "";
            event.target.style.color = "";
            console.log(seatArray);
            removeChildTag("seat", seatNo);
            removeChildTag("class", seatNo);
            removeChildTag("price", seatNo);

            // get price and add to the total 
            const totalBDTForMinus = parseInt(document.getElementById("totalBDT").innerText);
            restTotalBDTAfterMinus = totalBDTForMinus - 550;
            setInnerTextByID("totalBDT", restTotalBDTAfterMinus);
            setInnerTextByID("grandTotalBDT", restTotalBDTAfterMinus);




        }
        else {
            seatArray.push(seatNo);
            console.log(seatArray);
            const arrayLength = seatArray.length;


            if (arrayLength < 5) {
                event.target.style.backgroundColor = "#1DD100";
                event.target.style.color = "white";

                applyButton(arrayLength);

                // get seat left and set the rest 
                const totalSeats = parseInt(document.getElementById("totalSeats").innerText);
                const seatLeft = totalSeats - 1;
                document.getElementById("totalSeats").innerText = seatLeft;


                createTagAndSetInnerText("seat", seatNo, seatNo)
                createTagAndSetInnerText("class", "Economy", seatNo)
                createTagAndSetInnerText("price", 550, seatNo)

                setInnerTextByID("noOfselected", arrayLength);

                // get price and add to the total 
                // const getStillPrice = document.getElementById("totalBDT").innerText


                const totalBDTT = parseInt(document.getElementById("totalBDT").innerText) + 550;
                setInnerTextByID("totalBDT", totalBDTT);
                setInnerTextByID("grandTotalBDT", totalBDTT);

                // if(restTotalBDTAfterMinus){
                //     let totalBDT = restTotalBDTAfterMinus + 550;
                //     setInnerTextByID("totalBDT", totalBDT);
                //     setInnerTextByID("grandTotalBDT", totalBDT);
                // }
                // else{
                //     let nextCurrentTotal = parseInt(document.getElementById("totalBDT").innerText);
                //     let withOutMinus = nextCurrentTotal + 550;
                //     setInnerTextByID("totalBDT", withOutMinus);
                //     setInnerTextByID("grandTotalBDT", withOutMinus);
                // }

                // total price 

                // 
                // let now = nextCurrentTotal
                // grand total price




                const phoneNumber = document.getElementById("phoneNumber").value;
                nextButton(phoneNumber, arrayLength);
            }

            else {
                alert("Sorry! You cannot book more than 4 seats");
            }


        } // else end




    })

}




document.getElementById("phoneNumber").addEventListener("keyup", function (e) {
    const phoneNumber = e.target.value;

    const arrayLength = seatArray.length;
    nextButton(phoneNumber, arrayLength);
})



document.getElementById("apply").addEventListener("click", function () {
    const getCoupon = document.getElementById("coupon").value;
    const getConvertedCoupon = getCoupon.toLowerCase().split(" ").join("");
    if (getConvertedCoupon === "new15" || getConvertedCoupon === "couple20") {
        const totalCurrentPrice = parseInt(document.getElementById("totalBDT").innerText);
        if (getConvertedCoupon === "new15") {
            const discount = totalCurrentPrice * 15 / 100;


            createTagAndSetInnerText("discount", "Discount Price");
            document.getElementById("discount").classList.remove("hidden");

            setDiscount("discount", discount);



            const grandtotal = totalCurrentPrice - discount;
            setInnerTextByID("grandTotalBDT", grandtotal);

            const inputLabelField = document.getElementById("inputLabel");
            inputLabelField.classList.add("hidden");
        }
        else {
            const discount = totalCurrentPrice * 20 / 100;



            createTagAndSetInnerText("discount", "Discount Price");
            document.getElementById("discount").classList.remove("hidden");
            setDiscount("discount", discount);




            const grandtotal = totalCurrentPrice - discount;
            setInnerTextByID("grandTotalBDT", grandtotal);

            const inputLabelField = document.getElementById("inputLabel");
            inputLabelField.classList.add("hidden");
        }
    }
    else {
        alert("You have inserted wrong coupon");
    }

})




function deleteElement(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

// function for clearing disability of apply button 
function applyButton(seatSelectNumber) {
    if (seatSelectNumber >= 4) {
        document.getElementById("apply").removeAttribute("disabled");
    }
    else {
        document.getElementById("apply").setAttribute("disabled", true);
    }
}
// function for clearing disability of next button 
function nextButton(phoneNumber, seatSelectNumber) {
    if (phoneNumber && seatSelectNumber) {
        document.getElementById("next").removeAttribute("disabled");
    }
    else {
        document.getElementById("next").setAttribute("disabled", true);
    }
}



// get id and set innerText
function setInnerTextByID(elementId, INNERTEXT) {
    document.getElementById(elementId).innerText = INNERTEXT;
}

// create element and set inner text by id 
function createTagAndSetInnerText(ParentID, INNERTEXT, className) {
    const parentElement = document.getElementById(ParentID);
    const tagVariable = document.createElement("p");
    tagVariable.innerText = INNERTEXT;
    tagVariable.classList.add(className);
    parentElement.appendChild(tagVariable);
}

// delete element from a div identified by an ID
function removeChildTag(id, className) {
    const parent = document.getElementById(id);
    const deletedTags = parent.querySelectorAll(`.${className}`);
    for (const tag of deletedTags) {
        parent.removeChild(tag);
    }
}

// function to set discount 
function setDiscount(parentDiv, discount) {
    const discountDiv = document.getElementById(parentDiv);
    const bdt = document.createElement("p")
    bdt.innerText = "BDT";
    bdt.style.gap = "1px";
    const spanPrice = document.createElement("span");
    spanPrice.innerText = discount;
    spanPrice.style.marginLeft = "9px";
    bdt.appendChild(spanPrice);
    discountDiv.appendChild(bdt);
}