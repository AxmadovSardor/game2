//Inspired by game in the game
//https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=0gcJCdgAo7VqN5tD
let code1 = ["a", 'l', "1", "g", "h", "k", 'd', '9']
let code2 = ['q', '3', 'w', 'f', 'x', 'y', 'o', '2']
let code3 = ["b", 's', "4", "z", "t", "n", 'm', '6']
let code4 = ['v', 'p', 'c', 'u', 'e', 'r', 'i', 'j']
let code5 = ['5', '.', '7', ',', '0', ':', '8', '!']
let code6 = ['=', '?', '[', ']', '@', 'e', '"', "'"]
let cod = []
//===============================================
let data = {
    nick: "",
    prev: "",
    region: "",
    age: ""
};

let t = ""
function change(event) {
    let firstname = document.getElementById("firstname");
    if (event.target.value.length > 25) {
        firstname.value = t;
        return; // Ensure no `true` is returned here
    }
    t = event.target.value;

    if (event.target.name === "firstname") {
        document.getElementById("output").textContent = event.target.value;
        data.nick = event.target.value;
    } else {
        document.getElementById("output2").textContent = event.target.value;
        data.region = event.target.value;
        if(data.region == "Andijan"){
            data.region = code3[0]
        } else if(data.region == "Bukhara"){
            data.region = code3[1]
        } else if(data.region == "Fergana"){
            data.region = code3[2]
        } else if(data.region == "Jizzakh"){
            data.region = code3[3]
        } else if(data.region == "Kashkadarya"){
            data.region = code3[4]
        } else if(data.region == "Karakalpakstan Rep."){ 
            data.region = code3[5]
        } else if(data.region == "Khorezm"){
            data.region = code3[6]
        } else if(data.region == "Namangan"){
            data.region = code3[7]
        }     else if(data.region == "Navoiy"){
            data.region = code4[0]
        } else if(data.region == "Samarkand"){
            data.region = code4[1]
        } else if(data.region == "Sirdaryo"){
            data.region = code4[2]
        } else if(data.region == "Surkhandarya"){
            data.region = code4[3]
        } else if(data.region == "Tashkent"){
            data.region = code4[4]
        } else {
            data.region = code4[5]
        }
    }
}



//Topshiriq
function submit() {
    
    let firstname = document.getElementById("firstname");
    rel = firstname.value;
    if (firstname.value == "") {
        document.getElementById("ba").textContent = "❌Enter your nick"  

    } else if(document.getElementById("region").selectedIndex == 0){
        document.getElementById("ba").textContent = "❌Enter your region"  
    } else { 
    document.getElementById("ba").textContent = "🕐Loading..."  

    time =Math.round( Math.random() / 0.001)
    setTimeout(() => {
    document.getElementById("reg").style.display = "none";
    }, time);}
    final(c);
}
//================================================
let realy = false

for (let index = 0; index < 32; index++) {
    cod.push(true)
    if (cod[index] === true) {
        document.getElementById(`n${index + 1}`).classList.add("active");
        // let c = c + 1;
    } else{
        document.getElementById(`n${index + 1}`).classList.remove("active");
        // let c = c - 1;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "r" || event.key === "R") {
      reset();
    }
  });
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submit();
    }
});
let c = 0;

let num = (Math.random() * 40) + 10;
num = Math.round(num)


let func = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    n11,
    n12,
    n13,
    n14,
    n15,
    n16,
    n17,
    n18,
    n19,
    n20,
    n21,
    n22,
    n23,
    n24,
    n25,
    n26,
    n27,
    n28,
    n29,
    n30,
    n31,
    n32    
]

for (let index = 0; index < num; index++) {
    let num1 = Math.random() / 0.03225806451612903225806451612903
    num1 = Math.round(num1)
    func[num1]() 
}

async function name(params) {
    
}

function reset() {
    let num = (Math.random() * 40) + 10;
    num = Math.round(num)
    data.length = num

    data.prev = ""
    for (let index = 0; index < num; index++) {
        let num1 = Math.random() / 0.03225806451612903225806451612903
        num1 = Math.round(num1)
        func[num1]()
        data.prev = num1 +  "-" + data.prev
    }
    data.age()
    console.log(data.prev)
    console.log(data);
    


    for (let index = 0; index < 32; index++) {
        if (cod[index] === true) {
            document.getElementById(`n${index + 1}`).classList.add("active");
            c = c + 1;
        } else{
           document.getElementById(`n${index + 1}`).classList.remove("active");
        }
    }
    final(c)
}

for (let index = 0; index < 32; index++) {
    if (cod[index] === true) {
        document.getElementById(`n${index + 1}`).classList.add("active");
        c = c + 1;
    } else{
        document.getElementById(`n${index + 1}`).classList.remove("active");
    }
}


// 0.03125


function one() {
    data.age = data.age + code1[0];

    cod[0] = !cod[0];
    
    if (cod[0] === true) {
        document.getElementById("n1").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n1").classList.remove("active");
        c = c - 1;
    }

    cod[1] = !cod[1];

    if (cod[1] === true) {
        document.getElementById("n2").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n2").classList.remove("active");
        c = c - 1;
    }
    cod[8] = !cod[8];

    if (cod[8] === true) {
        document.getElementById("n9").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n9").classList.remove("active");
        c = c - 1;
    }
    final(c)
}
function myFunction() {
    let res = data.age + data.nick + data.region + data.prev
    navigator.clipboard.writeText(res);
}
function final(num3) {
    if (num3 >= 32) {
        document.getElementById("result").style.display = "flex"
        document.getElementById("link").innerHTML = `<button id="link" onclick='myFunction()'><img src='13949696.png'></button>`;
        document.getElementById("syrp").innerHTML = "<video autoplay><source src='sike.mp4' type='video/mp4'></video>";
        document.getElementById("sy").innerHTML = "<h1>You Won 🎉✨🎊</h1>";
        document.getElementById("bot").href = `https://t.me/puzzle_result_bot?text=${data.age + data.nick + data.prev + data.region}`;
    }
}

function two() {
    data.age = data.age + code1[2];

    cod[0] = !cod[0];

    if (cod[0] === true) {
        document.getElementById("n1").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n1").classList.remove("active");
        c = c - 1;
    }

    cod[1] = !cod[1];

    if (cod[1] === true) {
        document.getElementById("n2").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n2").classList.remove("active");
        c = c - 1;
    }
    cod[9] = !cod[9];

    if (cod[9] === true) {
        document.getElementById("n10").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n10").classList.remove("active");
        c = c - 1;
    }

    cod[2] = !cod[2];

    if (cod[2] === true) {
        document.getElementById("n3").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n3").classList.remove("active");
        c = c - 1;
    } 
    final(c);
    
}


function three() {
    data.age = data.age + code1[2];

    cod[1] = !cod[1];

    if (cod[1] === true) {
        document.getElementById("n2").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n2").classList.remove("active");
        c = c - 1;
    }

    cod[2] = !cod[2];

    if (cod[2] === true) {
        document.getElementById("n3").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n3").classList.remove("active");
        c = c - 1;
    }
    cod[10] = !cod[10];

    if (cod[10] === true) {
        document.getElementById("n11").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n11").classList.remove("active");
        c = c - 1;
    }

    cod[3] = !cod[3];

    if (cod[3] === true) {
        document.getElementById("n4").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n4").classList.remove("active");
        c = c - 1;
    } 
    final(c);

}

function four() {
    data.age = data.age + code1[3];

    cod[2] = !cod[2];

    if (cod[2] === true) {
        document.getElementById("n3").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n3").classList.remove("active");
        c = c - 1;
    }

    cod[3] = !cod[3];

    if (cod[3] === true) {
        document.getElementById("n4").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n4").classList.remove("active");
        c = c - 1;
    }
    cod[11] = !cod[11];

    if (cod[11] === true) {
        document.getElementById("n12").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n12").classList.remove("active");
        c = c - 1;
    }

    cod[4] = !cod[4];

    if (cod[4] === true) {
        document.getElementById("n5").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n5").classList.remove("active");
        c = c - 1;
    } 
    final(c);

}
function five() {
    data.age = data.age + code1[4];

    cod[3] = !cod[3];

    if (cod[3] === true) {
        document.getElementById("n4").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n4").classList.remove("active");
        c = c - 1;
    }

    cod[4] = !cod[4];

    if (cod[4] === true) {
        document.getElementById("n5").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n5").classList.remove("active");
        c = c - 1;
    }
    cod[12] = !cod[12];

    if (cod[12] === true) {
        document.getElementById("n13").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n13").classList.remove("active");
        c = c - 1;
    }

    cod[5] = !cod[5];

    if (cod[5] === true) {
        document.getElementById("n6").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n6").classList.remove("active");
        c = c - 1;
    } 
    final(c);

}


function six() {
    data.age = data.age + code1[5];

    cod[4] = !cod[4];

    if (cod[4] === true) {
        document.getElementById("n5").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n5").classList.remove("active");
        c = c - 1;
    }

    cod[5] = !cod[5];

    if (cod[5] === true) {
        document.getElementById("n6").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n6").classList.remove("active");
        c = c - 1;
    }

    cod[13] = !cod[13];

    if (cod[13] === true) {
        document.getElementById("n14").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n14").classList.remove("active");
        c = c - 1;
    }

    cod[6] = !cod[6];

    if (cod[6] === true) {
        document.getElementById("n7").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n7").classList.remove("active");
        c = c - 1;
    }
    final(c);
}



function seven() {
    data.age = data.age + code1[6];

    cod[5] = !cod[5];

    if (cod[5] === true) {
        document.getElementById("n6").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n6").classList.remove("active");
        c = c - 1;
    }

    cod[6] = !cod[6];

    if (cod[6] === true) {
        document.getElementById("n7").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n7").classList.remove("active");
        c = c - 1;
    }

    cod[14] = !cod[14];

    if (cod[14] === true) {
        document.getElementById("n15").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n15").classList.remove("active");
        c = c - 1;
    }

    cod[7] = !cod[7];

    if (cod[7] === true) {
        document.getElementById("n8").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n8").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function eight() {
    data.age = data.age + code1[7];

    cod[6] = !cod[6];

    if (cod[6] === true) {
        document.getElementById("n7").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n7").classList.remove("active");
        c = c - 1;
    }

    cod[7] = !cod[7];

    if (cod[7] === true) {
        document.getElementById("n8").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n8").classList.remove("active");
        c = c - 1;
    }

    cod[15] = !cod[15];

    if (cod[15] === true) {
        document.getElementById("n16").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n16").classList.remove("active");
        c = c - 1;
    }
    final(c)
}



function nine() {
    data.age = data.age + code2[0];

    cod[8] = !cod[8];

    if (cod[8] === true) {
        document.getElementById("n9").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n9").classList.remove("active");
        c = c - 1;
    }

    cod[9] = !cod[9];

    if (cod[9] === true) {
        document.getElementById("n10").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n10").classList.remove("active");
        c = c - 1;
    }

    cod[16] = !cod[16];

    if (cod[16] === true) {
        document.getElementById("n17").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n17").classList.remove("active");
        c = c - 1;
    }
    cod[0] = !cod[0];

    if (cod[0] === true) {
        document.getElementById("n1").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n1").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function ten() {
    data.age = data.age + code2[1];

    cod[8] = !cod[8];

    if (cod[8] === true) {
        document.getElementById("n9").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n9").classList.remove("active");
        c = c - 1;
    }

    cod[9] = !cod[9];

    if (cod[9] === true) {
        document.getElementById("n10").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n10").classList.remove("active");
        c = c - 1;
    }

    cod[17] = !cod[17];

    if (cod[17] === true) {
        document.getElementById("n18").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n18").classList.remove("active");
        c = c - 1;
    }

    cod[10] = !cod[10];

    if (cod[10] === true) {
        document.getElementById("n11").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n11").classList.remove("active");
        c = c - 1;
    }
    cod[1] = !cod[1];

    if (cod[1] === true) {
        document.getElementById("n2").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n2").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n11() {
    data.age = data.age + code2[2];

    cod[9] = !cod[9];

    if (cod[9] === true) {
        document.getElementById("n10").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n10").classList.remove("active");
        c = c - 1;
    }

    cod[10] = !cod[10];

    if (cod[10] === true) {
        document.getElementById("n11").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n11").classList.remove("active");
        c = c - 1;
    }

    cod[18] = !cod[18];

    if (cod[18] === true) {
        document.getElementById("n19").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n19").classList.remove("active");
        c = c - 1;
    }

    cod[11] = !cod[11];

    if (cod[11] === true) {
        document.getElementById("n12").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n12").classList.remove("active");
        c = c - 1;
    }
    cod[2] = !cod[2];

    if (cod[2] === true) {
        document.getElementById("n3").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n3").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n12() {
    data.age = data.age + code2[3];

    cod[10] = !cod[10];

    if (cod[10] === true) {
        document.getElementById("n11").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n11").classList.remove("active");
        c = c - 1;
    }

    cod[11] = !cod[11];

    if (cod[11] === true) {
        document.getElementById("n12").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n12").classList.remove("active");
        c = c - 1;
    }

    cod[19] = !cod[19];

    if (cod[19] === true) {
        document.getElementById("n20").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n20").classList.remove("active");
        c = c - 1;
    }

    cod[12] = !cod[12];

    if (cod[12] === true) {
        document.getElementById("n13").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n13").classList.remove("active");
        c = c - 1;
    }
    cod[3] = !cod[3];

    if (cod[3] === true) {
        document.getElementById("n4").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n4").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n13() {
    data.age = data.age + code2[4];

    cod[11] = !cod[11];

    if (cod[11] === true) {
        document.getElementById("n12").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n12").classList.remove("active");
        c = c - 1;
    }

    cod[12] = !cod[12];

    if (cod[12] === true) {
        document.getElementById("n13").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n13").classList.remove("active");
        c = c - 1;
    }

    cod[20] = !cod[20];

    if (cod[20] === true) {
        document.getElementById("n21").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n21").classList.remove("active");
        c = c - 1;
    }

    cod[13] = !cod[13];

    if (cod[13] === true) {
        document.getElementById("n14").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n14").classList.remove("active");
        c = c - 1;
    }
    cod[4] = !cod[4];

    if (cod[4] === true) {
        document.getElementById("n5").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n5").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n14() {
    data.age = data.age + code2[5];

    cod[12] = !cod[12];

    if (cod[12] === true) {
        document.getElementById("n13").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n13").classList.remove("active");
        c = c - 1;
    }

    cod[13] = !cod[13];

    if (cod[13] === true) {
        document.getElementById("n14").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n14").classList.remove("active");
        c = c - 1;
    }

    cod[21] = !cod[21];

    if (cod[21] === true) {
        document.getElementById("n22").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n22").classList.remove("active");
        c = c - 1;
    }

    cod[14] = !cod[14];

    if (cod[14] === true) {
        document.getElementById("n15").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n15").classList.remove("active");
        c = c - 1;
    }
    cod[5] = !cod[5];

    if (cod[5] === true) {
        document.getElementById("n6").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n6").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n15() {
    data.age = data.age + code2[6];

    cod[13] = !cod[13];

    if (cod[13] === true) {
        document.getElementById("n14").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n14").classList.remove("active");
        c = c - 1;
    }

    cod[14] = !cod[14];

    if (cod[14] === true) {
        document.getElementById("n15").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n15").classList.remove("active");
        c = c - 1;
    }

    cod[22] = !cod[22];

    if (cod[22] === true) {
        document.getElementById("n23").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n23").classList.remove("active");
        c = c - 1;
    }

    cod[15] = !cod[15];

    if (cod[15] === true) {
        document.getElementById("n16").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n16").classList.remove("active");
        c = c - 1;
    }
    cod[6] = !cod[6];

    if (cod[6] === true) {
        document.getElementById("n7").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n7").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n16() {    
    data.age = data.age + code2[7];

    cod[14] = !cod[14];

    if (cod[14] === true) {
        document.getElementById("n15").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n15").classList.remove("active");
        c = c - 1;
    }

    cod[15] = !cod[15];

    if (cod[15] === true) {
        document.getElementById("n16").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n16").classList.remove("active");
        c = c - 1;
    }

    cod[23] = !cod[23];

    if (cod[23] === true) {
        document.getElementById("n24").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n24").classList.remove("active");
        c = c - 1;
    }
    cod[7] = !cod[7];

    if (cod[7] === true) {
        document.getElementById("n8").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n8").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n17() {
    data.age = data.age + code3[0];

    cod[16] = !cod[16];
    if (cod[16] === true) {
        document.getElementById("n17").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n17").classList.remove("active");
        c = c - 1;
    }

    cod[17] = !cod[17];
    if (cod[17] === true) {
        document.getElementById("n18").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n18").classList.remove("active");
        c = c - 1;
    }

    cod[24] = !cod[24];
    if (cod[24] === true) {
        document.getElementById("n25").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n25").classList.remove("active");
        c = c - 1;
    }

    cod[8] = !cod[8];
    if (cod[8] === true) {
        document.getElementById("n9").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n9").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n18() {
    data.age = data.age + code3[1];

    cod[16] = !cod[16];
    if (cod[16] === true) {
        document.getElementById("n17").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n17").classList.remove("active");
        c = c - 1;
    }

    cod[17] = !cod[17];
    if (cod[17] === true) {
        document.getElementById("n18").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n18").classList.remove("active");
        c = c - 1;
    }

    cod[25] = !cod[25];
    if (cod[25] === true) {
        document.getElementById("n26").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n26").classList.remove("active");
        c = c - 1;
    }

    cod[18] = !cod[18];
    if (cod[18] === true) {
        document.getElementById("n19").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n19").classList.remove("active");
        c = c - 1;
    }

    cod[9] = !cod[9];
    if (cod[9] === true) {
        document.getElementById("n10").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n10").classList.remove("active");
        c = c - 1;
    }
    final(c);
}
function n19() {
    data.age = data.age + code3[2];

    cod[17] = !cod[17];
    if (cod[17] === true) {
        document.getElementById("n18").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n18").classList.remove("active");
        c = c - 1;
    }

    cod[18] = !cod[18];
    if (cod[18] === true) {
        document.getElementById("n19").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n19").classList.remove("active");
        c = c - 1;
    }

    cod[26] = !cod[26];
    if (cod[26] === true) {
        document.getElementById("n27").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n27").classList.remove("active");
        c = c - 1;
    }

    cod[19] = !cod[19];
    if (cod[19] === true) {
        document.getElementById("n20").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n20").classList.remove("active");
        c = c - 1;
    }

    cod[10] = !cod[10];
    if (cod[10] === true) {
        document.getElementById("n11").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n11").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n20() {
    data.age = data.age + code3[3];

    cod[18] = !cod[18];
    if (cod[18] === true) {
        document.getElementById("n19").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n19").classList.remove("active");
        c = c - 1;
    }

    cod[19] = !cod[19];
    if (cod[19] === true) {
        document.getElementById("n20").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n20").classList.remove("active");
        c = c - 1;
    }

    cod[27] = !cod[27];
    if (cod[27] === true) {
        document.getElementById("n28").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n28").classList.remove("active");
        c = c - 1;
    }

    cod[20] = !cod[20];
    if (cod[20] === true) {
        document.getElementById("n21").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n21").classList.remove("active");
        c = c - 1;
    }

    cod[11] = !cod[11];
    if (cod[11] === true) {
        document.getElementById("n12").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n12").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n21() {
    data.age = data.age + code3[4];

    cod[20] = !cod[20];
    if (cod[20] === true) {
        document.getElementById("n21").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n21").classList.remove("active");
        c = c - 1;
    }

    cod[19] = !cod[19];
    if (cod[19] === true) {
        document.getElementById("n20").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n20").classList.remove("active");
        c = c - 1;
    }

    cod[28] = !cod[28];
    if (cod[28] === true) {
        document.getElementById("n29").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n29").classList.remove("active");
        c = c - 1;
    }

    cod[21] = !cod[21];
    if (cod[21] === true) {
        document.getElementById("n22").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n22").classList.remove("active");
        c = c - 1;
    }

    cod[12] = !cod[12];
    if (cod[12] === true) {
        document.getElementById("n13").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n13").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n22() {
    data.age = data.age + code3[5];

    cod[21] = !cod[21];
    if (cod[21] === true) {
        document.getElementById("n22").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n22").classList.remove("active");
        c = c - 1;
    }

    cod[22] = !cod[22];
    if (cod[22] === true) {
        document.getElementById("n23").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n23").classList.remove("active");
        c = c - 1;
    }

    cod[29] = !cod[29];
    if (cod[29] === true) {
        document.getElementById("n30").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n30").classList.remove("active");
        c = c - 1;
    }

    cod[20] = !cod[20];
    if (cod[20] === true) {
        document.getElementById("n21").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n21").classList.remove("active");
        c = c - 1;
    }

    cod[13] = !cod[13];
    if (cod[13] === true) {
        document.getElementById("n14").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n14").classList.remove("active");
        c = c - 1;
    }
    final(c);
}
function n23() {
    data.age = data.age + code3[6];

    cod[22] = !cod[22];
    if (cod[22] === true) {
        document.getElementById("n23").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n23").classList.remove("active");
        c = c - 1;
    }

    cod[23] = !cod[23];
    if (cod[23] === true) {
        document.getElementById("n24").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n24").classList.remove("active");
        c = c - 1;
    }

    cod[21] = !cod[21];
    if (cod[21] === true) {
        document.getElementById("n22").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n22").classList.remove("active");
        c = c - 1;
    }

    cod[30] = !cod[30];
    if (cod[30] === true) {
        document.getElementById("n31").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n31").classList.remove("active");
        c = c - 1;
    }

    cod[14] = !cod[14];
    if (cod[14] === true) {
        document.getElementById("n15").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n15").classList.remove("active");
        c = c - 1;
    }
    final(c);
}
function n24() {
    data.age = data.age + code3[7];

    cod[22] = !cod[22];
    if (cod[22] === true) {
        document.getElementById("n23").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n23").classList.remove("active");
        c = c - 1;
    }

    cod[23] = !cod[23];
    if (cod[23] === true) {
        document.getElementById("n24").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n24").classList.remove("active");
        c = c - 1;
    }

    cod[31] = !cod[31];
    if (cod[31] === true) {
        document.getElementById("n32").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n32").classList.remove("active");
        c = c - 1;
    }

    cod[15] = !cod[15];
    if (cod[15] === true) {
        document.getElementById("n16").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n16").classList.remove("active");
        c = c - 1;
    }
    final(c);
}
function n25() {
    data.age = data.age + code4[0];

    cod[16] = !cod[16];
    if (cod[16] === true) {
        document.getElementById("n17").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n17").classList.remove("active");
        c = c - 1;
    }

    cod[24] = !cod[24];
    if (cod[24] === true) {
        document.getElementById("n25").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n25").classList.remove("active");
        c = c - 1;
    }

    cod[25] = !cod[25];
    if (cod[25] === true) {
        document.getElementById("n26").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n26").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n26() {
    data.age = data.age + code4[1];

    cod[17] = !cod[17];
    if (cod[17] === true) {
        document.getElementById("n18").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n18").classList.remove("active");
        c = c - 1;
    }

    cod[25] = !cod[25];
    if (cod[25] === true) {
        document.getElementById("n26").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n26").classList.remove("active");
        c = c - 1;
    }

    cod[26] = !cod[26];
    if (cod[26] === true) {
        document.getElementById("n27").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n27").classList.remove("active");
        c = c - 1;
    }
    cod[24] = !cod[24];
    if (cod[24] === true) {
        document.getElementById("n25").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n25").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n27() {
    data.age = data.age + code4[2];

    cod[18] = !cod[18];
    if (cod[18] === true) {
        document.getElementById("n19").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n19").classList.remove("active");
        c = c - 1;
    }

    cod[26] = !cod[26];
    if (cod[26] === true) {
        document.getElementById("n27").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n27").classList.remove("active");
        c = c - 1;
    }

    cod[27] = !cod[27];
    if (cod[27] === true) {
        document.getElementById("n28").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n28").classList.remove("active");
        c = c - 1;
    }
    cod[25] = !cod[25];
    if (cod[25] === true) {
        document.getElementById("n26").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n26").classList.remove("active");
        c = c - 1;
    }
    final(c);
}
function n28() {
    data.age = data.age + code4[3];

    cod[19] = !cod[19];
    if (cod[19] === true) {
        document.getElementById("n20").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n20").classList.remove("active");
        c = c - 1;
    }

    cod[27] = !cod[27];
    if (cod[27] === true) {
        document.getElementById("n28").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n28").classList.remove("active");
        c = c - 1;
    }

    cod[28] = !cod[28];
    if (cod[28] === true) {
        document.getElementById("n29").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n29").classList.remove("active");
        c = c - 1;
    }
    cod[26] = !cod[26];
    if (cod[26] === true) {
        document.getElementById("n27").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n27").classList.remove("active");
        c = c - 1;
    }
    final(c);
}
function n29() {
    data.age = data.age + code4[4];

    cod[20] = !cod[20];
    if (cod[20] === true) {
        document.getElementById("n21").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n21").classList.remove("active");
        c = c - 1;
    }

    cod[29] = !cod[29];
    if (cod[29] === true) {
        document.getElementById("n30").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n30").classList.remove("active");
        c = c - 1;
    }

    cod[27] = !cod[27];
    if (cod[27] === true) {
        document.getElementById("n28").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n28").classList.remove("active");
        c = c - 1;
    }
    cod[28] = !cod[28];
    if (cod[28] === true) {
        document.getElementById("n29").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n29").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n30() {
    data.age = data.age + code4[5];

    cod[21] = !cod[21];
    if (cod[21] === true) {
        document.getElementById("n22").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n22").classList.remove("active");
        c = c - 1;
    }

    cod[30] = !cod[30];
    if (cod[30] === true) {
        document.getElementById("n31").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n31").classList.remove("active");
        c = c - 1;
    }

    cod[28] = !cod[28];
    if (cod[28] === true) {
        document.getElementById("n29").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n29").classList.remove("active");
        c = c - 1;
    }
    cod[29] = !cod[29];
    if (cod[29] === true) {
        document.getElementById("n30").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n30").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n31() {
    data.age = data.age + code4[6];

    cod[22] = !cod[22];
    if (cod[22] === true) {
        document.getElementById("n23").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n23").classList.remove("active");
        c = c - 1;
    }

    cod[31] = !cod[31];
    if (cod[31] === true) {
        document.getElementById("n32").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n32").classList.remove("active");
        c = c - 1;
    }

    cod[29] = !cod[29];
    if (cod[29] === true) {
        document.getElementById("n30").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n30").classList.remove("active");
        c = c - 1;
    }
    cod[30] = !cod[30];
    if (cod[30] === true) {
        document.getElementById("n31").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n31").classList.remove("active");
        c = c - 1;
    }
    final(c);
}

function n32() {
    data.age = data.age + code4[7];

    cod[23] = !cod[23];
    if (cod[23] === true) {
        document.getElementById("n24").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n24").classList.remove("active");
        c = c - 1;
    }

    cod[30] = !cod[30];
    if (cod[30] === true) {
        document.getElementById("n31").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n31").classList.remove("active");
        c = c - 1;
    }
    cod[31] = !cod[31];
    if (cod[31] === true) {
        document.getElementById("n32").classList.add("active");
        c = c + 1;
    } else {
        document.getElementById("n32").classList.remove("active");
        c = c - 1;
    }
    final(c)
}