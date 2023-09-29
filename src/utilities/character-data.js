export const TightCrew = {
    leaderName: 'You',
    companions: [companion1, companion2],
    image: "https://placedog.net/100/150/pixelate",
    level: 1,
    attack: 3 + this.companions[0].attack + this.companions[1].attack,
    health: 20 + this.companions[0].health + this.companions[1].health,
    research: 3,
    rest: 10,
    status: "Sharp",
    skill: [companion1.skill, companion2.skill]
} 

export const companion1 = {
    name: "Bug Sniper",
    image: "https://placedog.net/100/150/pixelate?r",
    attack: 3,
    health: 12,
    skillName: 'Hard Snipe',
    skill: [this.attack * 2, -2]
}

export const companion2 = {
    name: "Designer",
    image: "https://placedog.net/100/150/pixelate?r",
    attack: 1,
    health: 15,
    skillName: 'Creative flair',
    skill: [Math.ceil(Math.random() * 4), "Sharp"]
}

export const enemy =  {
    name: "Backend Brute",
    image: "https://placedog.net/200/250/pixelate",
    attack: 5,
    health: 50,
    status: "Strong",
    skill: this.attack * 3
}