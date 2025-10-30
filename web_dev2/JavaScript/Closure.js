function age(age = 18) {
    return function (params) {
        age++
        return age
    }
}

let increment = age()
console.log(increment());
