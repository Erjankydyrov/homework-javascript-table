// table

for (let i1 = 1; i1 <= 9; i1++) {  
    document.write("<div style='float: left; width: 70px; margin-right: 10px'>"); 
    for (let i2 = 1; i2 <= 9; i2++) { 
        document.write(i2 + "*" + i1 + "=" +(i2*i1) + "<br>"); 
    }  
    document.write ("</div>"); 
} 

