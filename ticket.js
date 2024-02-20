console.log("connected");
let seatSelectNumber = 0;
let restTotalBDTAfterMinus = 0;
let seatArray = [];
let seatNameTyped = 0;
let selected = 0;
const seatButtons = document.querySelectorAll(".buttons");
for (let i = 0; i < seatButtons.length; i++) {
    const seatName = seatButtons[i];
    seatName.addEventListener("click", function (event) {
        const seatNo = event.target.innerText;



        if (seatArray.includes(seatNo)) {
            deleteElement(seatArray, seatNo);
            const lengthArray = seatArray.length
            setInnerTextByID("noOfselected", lengthArray);
selected--;
applyButton(selected);
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
        
            console.log(seatArray);
            const arrayLength = seatArray.length;


            if (arrayLength < 4) {
                event.target.style.backgroundColor = "#1DD100";
                event.target.style.color = "white";

                selected++;
                applyButton(selected);

                // get seat left and set the rest 
                const totalSeats = parseInt(document.getElementById("totalSeats").innerText);
                const seatLeft = totalSeats - 1;
                document.getElementById("totalSeats").innerText = seatLeft;


 
                createTagAndSetInnerText("seat", seatNo, seatNo)
                createTagAndSetInnerText("class", "Economy", seatNo)
                createTagAndSetInnerText("price", 550, seatNo)

                setInnerTextByID("noOfselected", selected);

                
                // get price and add to the total 
                // const getStillPrice = document.getElementById("totalBDT").innerText


                const totalBDTT = parseInt(document.getElementById("totalBDT").innerText) + 550;
                setInnerTextByID("totalBDT", totalBDTT);
                setInnerTextByID("grandTotalBDT", totalBDTT);


                const phoneNumber = document.getElementById("phoneNumber").value;
                const mail = document.getElementById("emaill").value;
                nextButton(phoneNumber, selected, mail);

                seatArray.push(seatNo)
            }

            else {
                alert("Sorry! You cannot book more than 4 seats");
            }


        } // else end




    })

}





document.getElementById("bus").addEventListener("click", function(e){

document.getElementById("bus-image").classList.add("hidden");
document.getElementById("truck-image").classList.remove("hidden");
    if(document.getElementById("bus").classList.contains("seeme")){
        e.preventDefault();
        document.getElementById("bus").classList.add("hidden");
        document.getElementById("truck").classList.remove("hidden");
        document.getElementById("bus").classList.remove("seeme");
        document.getElementById("truck").classList.add("seeme");
    } else {
        document.getElementById("truck").classList.add("hidden");
        document.getElementById("bus").classList.remove("hidden");
        document.getElementById("truck").classList.remove("seeme");
        document.getElementById("bus").classList.add("seeme");
    }
});

document.getElementById("truck").addEventListener("click", function(e){
    document.getElementById("truck-image").classList.add("hidden");
    document.getElementById("bus-image").classList.remove("hidden");
    if(document.getElementById("truck").classList.contains("seeme")){
        e.preventDefault();
        document.getElementById("truck").classList.add("hidden", "seeme");
        document.getElementById("bus").classList.remove("hidden");
        document.getElementById("truck").classList.remove("seeme");
        document.getElementById("bus").classList.add("seeme");
    } else {
        e.preventDefault();
        document.getElementById("bus").classList.add("hidden");
        document.getElementById("truck").classList.remove("hidden");
        document.getElementById("bus").classList.remove("seeme");
        document.getElementById("truck").classList.add("seeme");
    }
});









document.getElementById("phoneNumber").addEventListener("keyup", function (e) {
    const phoneNumber = e.target.value;
const mail = document.getElementById("emaill").value;
    const arrayLength = seatArray.length;
    nextButton(phoneNumber, arrayLength, mail);
})

document.getElementById("emaill").addEventListener("keyup", function(e){
    const mail = e.target.value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    console.log(mail);
    const arrayLength = seatArray.length;
    nextButton(phoneNumber, arrayLength, mail);
})


document.getElementById("apply").addEventListener("click", function () {
    const getCoupon = document.getElementById("coupon").value;
    const getConvertedCoupon = getCoupon.toLowerCase().split(" ").join("");
    if (getConvertedCoupon === "new15" || getConvertedCoupon === "couple20" || getConvertedCoupon === "21feb" || getConvertedCoupon === "mar26") {
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
        else if(getConvertedCoupon === "couple20") {
            const discount = totalCurrentPrice * 20 / 100;



            createTagAndSetInnerText("discount", "Discount Price");
            document.getElementById("discount").classList.remove("hidden");
            setDiscount("discount", discount);




            const grandtotal = totalCurrentPrice - discount;
            setInnerTextByID("grandTotalBDT", grandtotal);

            const inputLabelField = document.getElementById("inputLabel");
            inputLabelField.classList.add("hidden");
        }

        else if(getConvertedCoupon === "21feb") {
            const discount = totalCurrentPrice * 21 / 100;



            createTagAndSetInnerText("discount", "Discount Price");
            document.getElementById("discount").classList.remove("hidden");
            setDiscount("discount", discount);




            const grandtotal = totalCurrentPrice - discount;
            setInnerTextByID("grandTotalBDT", grandtotal);

            const inputLabelField = document.getElementById("inputLabel");
            inputLabelField.classList.add("hidden");
        }

        else {
            const discount = totalCurrentPrice * 26 / 100;



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


document.getElementById("continue").addEventListener("click",function(){

    window.location.reload();
    window.location.href = "index.html";

})





document.getElementById("offer").addEventListener("click", function(){

if(document.getElementById("offer").classList.contains("forme")){

    document.getElementById("third").classList.add("hidden")
    document.getElementById("fourth").classList.add("hidden");
    document.getElementById("offer").innerText = "See All Offers"; 
    document.getElementById("offer").classList.remove("forme");

}

else{
    document.getElementById("offer").classList.add("forme");
    document.getElementById("third").classList.remove("hidden");
    document.getElementById("fourth").classList.remove("hidden");
    document.getElementById("offer").innerText = "Close All Offers";
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

document.getElementById("emaill").addEventListener("change", function(e){
    const mail = e.target.value;
    console.log(mail);
})

function nextButton(phoneNumber, seatSelectNumber, mail) {
    if (phoneNumber.length === 11 && seatSelectNumber && mail ) {
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