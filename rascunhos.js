/**
 * Created by betrayer on 05.05.16.
 */
function print (message){
    document.body.innerText += message+"\n";
}

function capitalize (arr) {
    for (var i = 0; i < arr.length; ++i) {
        var name = arr[i];
        var firstChar = name.slice(0, 1);
        var rest = name.slice(1);

        var newName = firstChar.toUpperCase() + rest;
        arr[i] = newName;
    }
}

var kids = ["grisha","lera","alice"];
print (kids.length);
kids.push("julia");
kids.push("masha");
kids.push("petya");
kids.push("anna");
print (kids.length);

for(var i=0;i<kids.length;++i){
    print (kids[i]);
}

capitalize(kids);

for(var i=0;i<kids.length;++i){
    print (kids[i]);
}

var student1 = {
    firstName: "Danil",
    lastName: "Gretchov",
    marks: [5 , 5, 5, 3, 5, 4],
    parents: {
        mother: "SomeMotherName",
        father: "someFatherName"
    }
};

print(student1.firstName);
print(student1.lastName);

print(student1["parents"]["mother"]);