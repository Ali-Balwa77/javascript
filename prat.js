n=4;
k=1;

for(var i=1; i<=n; i++){
    for(var j=1; j<=i; j++){
        document.write(k + " ");
        k++;
    }
    document.write('</br>');
}
document.write('</br>');

n=4
k=10

for(var i=1; i<=n; i++){
    for(var j=1; j<=i; j++){
        document.write(k +" ")
        k--
    }
    document.write('</br>')
}
document.write('</br>');

n=4;
k=10;
str = "";

for(var i=1; i<=n; i++){
    for(var j=1; j<=n-i+1; j++){
        str += k + " ";
        k--
    }
    str += '</br>'
}
document.write(str)
document.write('</br>');

n=4;
k=1;
str = "";

for(var i=1; i<=n; i++){
    for(var j=1; j<=n-i+1; j++){
        str += k +" "
        k++
    }
    str += '</br>'
}
document.write(str)

var myname = "akbar";

const guessmyname = () =>{
    console.log(myname);
    var myname = "akbarabbas balwa";
};
guessmyname();
