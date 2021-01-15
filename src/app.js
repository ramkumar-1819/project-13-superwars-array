const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    detailedPlayers=players.map((names,index)=>{
            return{name:"names",
            strength:getRandomStrength(),
            img:"images/super-"+(index+1)+".png",
            type:getType(index)}
    });
    // Instead of forloop use Map method
    // Code here

    return detailedPlayers;
}
//getting type
const getType=(index)=>{
    if(index%2===0){
        return"hero";
    }
    else{
        return "villan";
    }
}
// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';
    fragment=players.map((player)=>{
        `<div class="player">
         <img src="${players[i].image}" alt="">
         <div class="name">${players[i].name}</div>
         <div class="strength">${players[i].strength}</div>
         </div>`;
    }).filter(value=>{
         return value.type===type;
    }).join()
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}