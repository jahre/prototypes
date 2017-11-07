function Junior(name){
  this._name = name;
  this._title = 'd1';
  this._experience = 0;
}
Junior.prototype.greet = function(){
  console.log('Hello, I am ' + this._name + ', ' + this._title + ' level developer with ' + this._experience + ' years of experience.');
}
Junior.prototype.showSkills = function(){
  this.greet();
  console.log('I do CSS, I do HTML.');
}

function Middle(name){
  this._name = name;
  this._title = 'd2';
  this._experience = '1+';
}
Middle.prototype = Object.create(Junior.prototype);
Middle.prototype.showSkills = function(favorite){
  Junior.prototype.showSkills.apply(this);
  console.log(`Also I do Javascript, I do frameworks. My favorite is ${favorite ? favorite : 'VanillaJS'}.`);
}

function Senior(name, engLevel){
  this._name = name;
  this._engLevel = engLevel || 'b1';
  this._title = 'd3';
  this._experience = '3+';
}
Senior.prototype = Object.create(Middle.prototype);
Senior.prototype.showSkills = function(){
  Middle.prototype.showSkills.apply(this, arguments);
  console.log('Moreover, I do management, I make decisions. My English level: ' + this._engLevel);
}

var dev1 = new Junior('Van Helsing');
var dev2 = new Middle('Blade');
var dev3 = new Senior('Hellboy', 'b2');

console.group('junior');
dev1.showSkills();
console.groupEnd();

console.group('middle');
dev2.showSkills('React');
console.groupEnd();

console.group('senior');
dev3.showSkills();
console.groupEnd();
