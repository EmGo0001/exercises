const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
// showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""
  arr.forEach((each) => {
    // let stopText;
    // if(each.stop){
    //   stopText =each.stops;
    // }
    // else{
    //   stopText = each.stops;
    // }
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ?? "-"}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric ? "X": "-"}</td>
  <td>${each.isTandem ? "X": "-"}</td>
</tr>`;
  });
}

// Alle el drevne fartøjer
function isElectric(vehicles){
  if(vehicles.isElectric === true){
    return true;
  }
  else{
    return false;
  }
}

const onlyElectric = vehicles.filter(isElectric);
// showTheseVehicles(onlyElectric);

// Alle fartøjer med mere end 2 sæder
function checkSeats (vehicles){
  if(vehicles.passengers > 2){
    return true;
  }
  else{
    return false;
  }
}

const moreThanTwoSeats = vehicles.filter(checkSeats);
// showTheseVehicles(moreThanTwoSeats);

// Alle el-drevne fartøjer ejet af Jonas
function electricJonas (vehicles){
  if(vehicles.isElectric === true && vehicles.ownedBy === "Jonas" ){
    return true;
  }
  else{
    return false;
  }
}

const electricOwnedByJonas = vehicles.filter(electricJonas);
// showTheseVehicles(electricOwnedByJonas);

// Alle rugbrøds drevne fartøjer med plads til mere end en
function rugbrød (vehicles){
  if(vehicles.fuel === "Rugbrød" && vehicles.passengers > 1){
    return true;
  }
  else{
    return false;
  }
}

const rugbrødMoreThanOne = vehicles.filter(rugbrød);
// showTheseVehicles(rugbrødMoreThanOne);

// 4 + 1 knap
const electricBtn = document.querySelector(".filter1");
const seatsBtn = document.querySelector(".filter2");
const vehicleJonasBtn = document.querySelector(".filter3");
const ryebreadBtn = document.querySelector(".filter4");
const noFilterBtn = document.querySelector(".filter5");

electricBtn.addEventListener("click", () => showTheseVehicles(onlyElectric));
seatsBtn.addEventListener("click", () => showTheseVehicles(moreThanTwoSeats));
vehicleJonasBtn.addEventListener("click", () => showTheseVehicles(electricOwnedByJonas));
ryebreadBtn.addEventListener("click", () => showTheseVehicles(rugbrødMoreThanOne));
noFilterBtn.addEventListener("click", () => showTheseVehicles(vehicles));