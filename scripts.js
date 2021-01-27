// table

for (let i1 = 1; i1 <= 9; i1++) {  
    document.write("<div style='float: left; width: 70px; margin-right: 10px; border: 2px solid'>"); 
    for (let i2 = 1; i2 <= 9; i2++) { 
        document.write(i2 + "*" + i1 + "=" +(i2*i1) + "<br>"); 
    }  
    document.write ("</div>"); 
} 

// let y = 5;
// do {
//     document.write(y + "<br>");
//     y++;
// } while (y <= 10);

// let u = 1;
// do {
//     document.write(u + "<br>");
//     u++;
// } while (u <= 12);