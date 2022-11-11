
let data = ["abc", "cbdfhdhdfhdfhj", "essdfs"];
function getLengthLongerStr(arr) {
	if (arr) {
		let temp = arr[0];
		for (var i = 1; i < arr.length; i++) {
			temp = temp.length > arr[i].length ? temp : arr[i];
		}
		return temp.length;
	} else {
		return "Введите данные";
	}	
}
console.log(getLengthLongerStr(data));

let outTemp = prompt("Введите температуру");
//alert(typeof outTemp);
function getReccom(t) {
	let temp = +t;
	if (temp < -30) {
		return("Оставайтесь дома");
	} else if (temp>=-30 && temp<= -10) {
		return("Сегодня холодно");
	} else if (temp>-10 && temp<=5) {
		return("Не холодно");
	} else if (temp>5 && temp<=15) {
		return("Тепло");
	} else if (temp<15 && temp<=25) {
		return("Очень тепло");
	} else if (temp>25 && temp<35) {
		return("Жарко");
	} else if (temp>= 35){
		return("Пекло");
	} else {
		return("Введите корректные данные");
	}
}
alert(getReccom(outTemp));

let userType = "admin";
switch(userType) {
	case "admin":
	console.log("admin");
	break;

	case "user":
	console.log("user");
	break;

	case "manager":
	console.log("manager");
	break;
}

console.log(null || 0 || "" || undefined); //undefined, все false, выводим занчение последнего операнда
console.log("яблоко" && true && null && 1);//null, первый false операнд
console.log(0 || true && "false" || null); //"false", первый true операнд
console.log(0 && true || "false" && null); //null, приводится к 0||null, все falsб выводим последний операнд
console.log(!0 && !!1); //true, приводится к true&&true, последний операнд, так как все true
console.log(!(null || !"апельсин" && true)); //true

let someStr = "some string";
let count = 5;
for (var i = 0; i < 5; i++) {
	console.log(someStr);
}

let limitCar = 50;
let allCar = 1000;

let tempVar = allCar;
let day = 0;
while(tempVar > limitCar) {
	tempVar = tempVar / 2;
	day++;
}
console.log(day);

console.log("---------------------------");

let j1=0;
for (var i = 1800; i <= 2020; i++) {
	j1++;
	if (i == 1961) {
		console.log(j1);
	}
}

let j2=0;
for (var i = 1800; i <= 2020; i=i+4) {
	j2++;
}
console.log(j2);