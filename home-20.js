// завдання 1
// const workers = [
//     { name: "Max", balance: 3000 },
//     { name: "Andriy", balance: 8000 },
//     { name: "Nastya", balance: 20000 },
//     { name: "Matwiy", balance: 0 }
// ]


// const workersSum = workers.reduce((totalSum, {balance}) =>totalSum + balance ,0);
// console.log(workersSum);


// завдання  2
// const goodFriend = [
//     {
//         name: "Nastya",
//         age: 25,
//         friandName: "Max",
//     },
//     {
//         name: "Nika",
//         age: 18,
//         friandName: "Nastya",
//     },
//     {
//         name: "Matwiy",
//         age: 13,
//         friandName: "Sanya",
//     },
//     {
//         name: "Sanya",
//         age: 14,
//         friandName: "Max",
//     }
// ]

// const frendName = goodFriend.reduce((totalFriend, { name, friandName }) => {
//     if (friandName === "Max") {
//         totalFriend.push(name);
//     }
//     return totalFriend;

// }, []);

// console.log(frendName);





// завдання 3


// const friend = [
//     {name:"Max", friends: 7},
//     {name:"Nastya", friends: 1},
//     {name:"Matwiy", friends: 8},
//     {name:"Nika", friends: 2}

// ]

//  const friends = friend.sort(
//     (firstName, friend) = firstName.friend - friend.friends

// );

// console.log(friends);

// const nameMe = friends.reduce((totalName, {name}) => {

//     totalName.push(name);

// return totalName;
// }, [])


// console.log(nameMe);



// завдання 4


// const topSkillss = [
//     {name: Max, skill: "Fortnite"},
//     {name: Ivan, skill: "Cs-Go"},
//     {name: Sanya, skill: "Fifa"},
//     {name: Nastya, skill: "Dota2"}
// ]

// const sort = [...topSkillss].sort((a, b) => a.localSort(b) );

// const reduce = topSkillss.reduce((totalSkil, topSkillss, {skill} ) => {


//     for(const skil  of topSkillss ){

// if(topSkillss.includes(skil)){

// continue;
  
// }
// totalSkil.push(skill);
// };
// return totalSkil;

// }, [])


// console.log(reduce);