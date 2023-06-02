function main() {
    var n = parseInt(document.getElementById("inputN").value);
    var m = parseInt(document.getElementById("inputM").value);
    
    var output = document.getElementById("output");
    output.innerHTML = "";
    
    for (var i = 1; i <= m; i++) {
      var o = i * n;
      output.innerHTML += n + "x" + i + "=" + o + "<br>";
    }
  }
  