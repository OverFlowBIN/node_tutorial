// functional approach

// dummy data
const people = [
  {
    age: 20,
    city: "서울",
    pet: ["cat", "dog"],
  },
  {
    age: 40,
    city: "부산",
  },
  {
    age: 31,
    city: "대구",
    pet: ["cat", "dog"],
  },
  {
    age: 36,
    city: "서울",
    pet: ["cat", "dog"],
  },
  {
    age: 27,
    city: "부산",
    pet: "cat",
  },
  {
    age: 24,
    city: "서울",
    pet: "dog",
  },
];

// 문제.1
// 30대 미만이 한명이라도 사는 모든 도시
function solve1() {
  const cities = [];

  for (const person of people) {
    if (person.age < 30) {
      if (!cities.find((city) => person.city === city)) {
        cities.push(person.city);
      }
    }
  }

  return cities;
}

function solve1Modern() {
  const allCIties = people
    .filter(({ age }) => age < 30)
    .map(({ city }) => city);

  const set = new Set(allCIties);
  return Array.from(set);
}

console.log("solve1", solve1());
console.log("solve1Modern", solve1Modern());

// 문제.2
// 각 도시별로 개와 고양이를 키우는 사람의 수

/**
 *  {
 *    "서울" : {
 *      "dog": 3,
 *      "cat": 2
 *    },
 *    "대구" : {
 *      "dog": 1,
 *      "cat": 1
 *    },
 *    "부산" : {
 *      "cat": 1
 *    }
 *  }
 */

function solve2() {
  const result = {};

  for (const person of people) {
    const { city, pet: petOrPets } = person;

    if (petOrPets) {
      const petsOfCity = result[city] || {};

      if (typeof petOrPets === "string") {
        const pet = petOrPets;

        const origNumPetsOfCity = petsOfCity[pet] || 0;
        petsOfCity[pet] = origNumPetsOfCity + 1;
      } else {
        for (const pet of petOrPets) {
          const origNumPetsOfCity = petsOfCity[pet] || 0;
          petsOfCity[pet] = origNumPetsOfCity + 1;
        }
      }
      result[city] = petsOfCity;
    }
  }
  return result;
}

/**
 * ['서울', 'cat'],
 * ['서울', 'dog'],
 * ['부산', 'dog'],
 */

function solve2Modern() {
  return people
    .map(({ pet: petOrPets, city }) => {
      const pets =
        typeof petOrPets === "string" ? [petOrPets] : petOrPets || [];

      return { city, pets };

      /**
      [
        [
          ["서울", "cat"],
          ["서울", "dog"],
        ],
        [],
        [
          ["대구", "cat"],
          ["대구", "dog"],
        ],
        [
          ["서울", "cat"],
          ["서울", "dog"],
        ],
          [["부산", "cat"]],
          [["서울", "dog"]],
      ];
       */
    })
    .flatMap(({ city, pets }) => pets.map((pet) => [city, pet]))
    .reduce((result, [city, pet]) => {
      return {
        ...result,
        [city]: {
          ...result[city],
          [pet]: (result[city]?.[pet] || 0) + 1,
        },
      };
    }, {});

  // flat + map => flatMap
}

console.log("solve2", solve2());
console.log("solve2Modern", solve2Modern());
