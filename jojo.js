let obj = {
    name: "chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x + y;
    }
}

obj.add(10,5);

let h1 = document.querySelector("h1");

h1.style.color = "pink";