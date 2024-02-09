var sumber = document.getElementById("sumber");

sumber.onkeyup = function () {
  var hasil = document.getElementById("jogja");
  var sumbertext = sumber.value;
  var konversi = "";

  var baris1 = ["h", "n", "c", "r", "k"];
  var baris2 = ["d", "t", "s", "w", "l"];
  var baris3 = ["p", "dh", "j", "y", "ny"];
  var baris4 = ["m", "g", "b", "th", "ng"];

  var index_baris1 = "";
  var index_baris2 = "";
  var index_baris3 = "";
  var index_baris4 = "";
  var index_baris3_digraf = "";
  var index_baris4_digraf = "";
  var potongan2huruf = "";
  //var vokal = ["a", "i", "u", "e", "o"];
  //var result = ["pa", "pi", "pu", "pe", "po"];

  var pecahSumber = sumbertext.split("");
  for (var i = 0; i < pecahSumber.length; i++) {
    index_baris1 = baris1.indexOf(pecahSumber[i].toLowerCase());
    index_baris2 = baris2.indexOf(pecahSumber[i].toLowerCase());
    index_baris3 = baris3.indexOf(pecahSumber[i].toLowerCase());
    index_baris4 = baris4.indexOf(pecahSumber[i].toLowerCase());
    potongan2huruf = sumbertext.slice(i,i+2);
    index_baris3_digraf = baris3.indexOf(potongan2huruf.toLowerCase());
    index_baris4_digraf = baris4.indexOf(potongan2huruf.toLowerCase());
    
    if(index_baris3_digraf >= 0){
        konversi += baris1[index_baris3_digraf];
        i++;
    } else if(index_baris4_digraf >= 0){
        konversi += baris2[index_baris4_digraf];
        i++;
    } else if(index_baris1 >= 0){
        konversi += baris3[index_baris1];
    } else if(index_baris2 >= 0){
        konversi += baris4[index_baris2]
    } else if(index_baris3 >= 0){
        konversi += baris1[index_baris3]
    } else if(index_baris4 >= 0){
        konversi += baris2[index_baris4]
    } else if(pecahSumber[i] == " "){
        konversi += " ";

    } 
    else {
      konversi += pecahSumber[i];
    }
  }
  hasil.value = konversi;
};

