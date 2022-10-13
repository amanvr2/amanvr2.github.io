console.log('js loaded');

var names = ['Simran', 'Naina', 'Sakshi', 'Priyanka', 'Yash', 'Rimmi'];
var numbers = [0,1, 2, 3, 4, 5];

var intMax = 5;
var intMin = 0;

function getRes(){
    
    if(names.length > 0)
    {
    var rand = getRandomArbitrary();
    console.log(rand);
    console.log(names[rand]);
    document.getElementById('luckyName').innerHTML = names[rand];
    names = names.filter(n => n !== names[rand]);
    intMax = names.length - 1;
    console.log(names);
    }
    else
    {
        document.getElementById('luckyName').innerHTML = "Jisne ye App bnayi , usko to Gift dedo :)";
    }
    
}

function getRandomArbitrary() {
    min = Math.ceil(intMin);
    max = Math.floor(intMax);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  