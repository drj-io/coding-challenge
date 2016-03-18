var md5 = require('md5');
var randomstring = require("randomstring");
var m = md5("madwire");
//compareHashes("3b2f", "78a2")
//console.log(m);

function makeRandomHash(){

}

function compareHashes(a1, a2, cb){
    var b1 = a1.split('');
    var b2 = a2.split('');

    var c1 = [];
    var c2 = []

    var total = 0;
    b1.forEach(function(e,i){
      c1[i] = convertToDecBecuaseAustinCurveball(e);

    });

    b2.forEach(function(e,i){
      c2[i] = convertToDecBecuaseAustinCurveball(e);
      total +=  Math.abs(c2[i] - c1[i]);
    });



    //console.log(c1,c2, total);

    return total;
}

controller(1000,"hi", function(ret){

  //console.log(ret);
})

function controller(sec,string, cb){
  var finished = false;
  var nonce = 999999;
  var nonce_string = "";

  //setInterval(function(){ console.log('hi')}, 100);

  var this_one =0
  var start = +new Date();
  var now = +new Date();
  var totalComps = 0;
  //console.log(now, start);


  var gend = "";
  while(sec > (now - start)){
    //console.log(start,now)
    totalComps++;
    gend = md5(randomstring.generate())
    this_one = compareHashes(md5(string), gend);

    if (nonce > this_one) { nonce = this_one; nonce_string = gend }
    now = +new Date();
  }

  cb(sec + " " + string + " " +   nonce + " " + totalComps + " " + gend);


}

var doThese = [

  
  [204800,"shiftybuckets"],
  [409600,"stompydumper"],
  [819200,"krunkbiscuits"],
]


counter = 0;

function go() {
  var thisone = doThese[counter];
  controller(thisone[0], thisone[1] , function(a){
    counter ++;
    console.log(a);
    go();
  })

}

go();
//console.log(convertToDecBecuaseAustinCurveball('a'),convertToDecBecuaseAustinCurveball('8'))



function convertToDecBecuaseAustinCurveball(n){
  var a = parseInt(n);
  if (n=="a") a = 10;
  if (n=="b") a = 11;
  if (n=="c") a = 12;
  if (n=="d") a = 13;
  if (n=="e") a = 14;
  if (n=="f") a = 15;
 return a

}
