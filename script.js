let btn = document.querySelectorAll(".squareb");

let count=0;

btn.forEach((val) => {
    count++;
    val.innerText=count;
})



let pic=0;
btn.forEach( (val) => {
    val.addEventListener( "click", () => {
        pic++;
        const img = document.createElement("img");
        if(val.innerText==1) img.src = "https://i.pinimg.com/1200x/07/1d/3b/071d3b4a5ebb658209e103bcb56a4fae.jpg";
        if(val.innerText==2) img.src = "https://i.pinimg.com/736x/a5/86/32/a58632000193f3104a9d6c12bcbe8bf5.jpg";
        if(val.innerText==3) img.src = "https://i.pinimg.com/736x/29/d6/0d/29d60d2b6ab728ee32119989e58dd82a.jpg";
        if(val.innerText==4) img.src = "https://i.pinimg.com/1200x/14/31/37/143137fbb4fe2ffd8c793adc3e6471a5.jpg";
        if(val.innerText==5) img.src = "https://i.pinimg.com/1200x/91/69/9e/91699ec84f9e861897c17f11ce6d5b98.jpg";
        if(val.innerText==6) img.src = "https://i.pinimg.com/736x/ea/cd/d1/eacdd1c6a8ad172e82e8ce5464add282.jpg";
        if(val.innerText==7) img.src = "https://i.pinimg.com/736x/d6/db/05/d6db054449ae5515da69a959d2d14704.jpg";
        if(val.innerText==8) img.src = "https://i.pinimg.com/736x/5f/5f/50/5f5f503c0c3189e1e4622da720154c91.jpg";
        if(val.innerText==9) img.src = "https://i.pinimg.com/736x/96/94/a3/9694a3ce0870a88ab03f16ac10592775.jpg";
        if(val.innerText==10) img.src = "https://i.pinimg.com/1200x/37/00/85/370085f82e9c5782ff8d09388ee6843d.jpg";
        if(val.innerText==11) img.src = "https://i.pinimg.com/736x/59/56/49/5956499bb8763a99bb7292358d8acd5e.jpg";
        if(val.innerText==12) img.src = "https://i.pinimg.com/736x/b5/b1/ae/b5b1ae0ea9440f6fe54339a11154ddd6.jpg";
        if(val.innerText==13) img.src = "https://i.pinimg.com/1200x/82/35/ce/8235cea867da62c679f7f7603545c320.jpg";
        if(val.innerText==14) img.src = "https://i.pinimg.com/1200x/64/fd/7e/64fd7ee249a2295ada39979b66d99879.jpg";
        if(val.innerText==15) img.src = "https://i.pinimg.com/1200x/2d/3e/34/2d3e34da5d8dd5a408a9a223d13735d2.jpg";
        if(val.innerText==16) img.src = "https://i.pinimg.com/1200x/de/c4/62/dec462cce6e3bd7683e51ae88f312fb8.jpg";
        if(val.innerText==17) img.src = "https://i.pinimg.com/736x/8d/13/77/8d1377c6bafab198b6db213b242af385.jpg";
        if(val.innerText==18) img.src = "https://i.pinimg.com/1200x/c9/92/85/c99285c613528d9c0c0f317171aa8ce2.jpg";
        if(val.innerText==19) img.src = "https://i.pinimg.com/736x/8d/13/77/8d1377c6bafab198b6db213b242af385.jpg";
        if(val.innerText==20) img.src = "https://i.pinimg.com/736x/a4/28/18/a42818c2a08b864934d89812cccf03b4.jpg";
        if(val.innerText==21) img.src = "https://i.pinimg.com/736x/d9/59/de/d959dee030c18c50db0cb800f98162a0.jpg";
        if(val.innerText==22) img.src = "https://i.pinimg.com/1200x/0e/ca/b8/0ecab831f35069b3812815205d307007.jpg";
        if(val.innerText==23) img.src = "https://i.pinimg.com/736x/fb/a4/10/fba4108d56657456e3d3a948e38ee036.jpg";
        if(val.innerText==24) img.src = "https://i.pinimg.com/736x/9c/b1/04/9cb104c3197ae23a339ff5ffbba92766.jpg";
        if(val.innerText==25) img.src = "https://i.pinimg.com/736x/d4/3e/f3/d43ef32953c8cc10441255eb58a66d34.jpg";
        if(val.innerText==26) img.src = "https://i.pinimg.com/736x/8a/11/3a/8a113af9ce9ab33a1cd1badc893debae.jpg";
        if(val.innerText==27) img.src = "https://i.pinimg.com/736x/f2/1d/15/f21d15fc3ae440719ff2845ac80a2161.jpg";
        if(val.innerText==28) img.src = "https://i.pinimg.com/1200x/c2/d7/80/c2d7804525de3e9adbc9e7d0968bae23.jpg";
        if(val.innerText==29) img.src = "https://i.pinimg.com/736x/73/76/34/737634298fa3cf9c29164812ac95ff79.jpg";
        if(val.innerText==30) img.src = "https://i.pinimg.com/736x/8d/3c/80/8d3c80762e1b282226f009caa6a52d8c.jpg";
        if(val.innerText==31) img.src = "https://i.pinimg.com/736x/30/11/7e/30117ecee25d9fa6b90c5e1f41b154b4.jpg";
        if(val.innerText==32) img.src = "https://i.pinimg.com/1200x/36/f9/5c/36f95c49642a34dfefa200acb1f606ba.jpg";
        if(val.innerText==33) img.src = "https://i.pinimg.com/736x/84/24/8a/84248af2b5deecf83a8d0d8aaa0b987c.jpg";
        if(val.innerText==34) img.src = "https://i.pinimg.com/736x/24/96/a2/2496a2a7084c4cffc3afcf3648e4f4bd.jpg";
        if(val.innerText==35) img.src = "https://i.pinimg.com/736x/41/6d/05/416d05f0ded49f6fbbe82b1f32dbe808.jpg";
        if(val.innerText==36) img.src = "https://i.pinimg.com/736x/2e/09/ab/2e09abdf30dcfc8353315c1a56c20003.jpg";

        if(val.innerText==37) img.src = "https://i.pinimg.com/1200x/07/1d/3b/071d3b4a5ebb658209e103bcb56a4fae.jpg";
        if(val.innerText==38) img.src = "https://i.pinimg.com/736x/a5/86/32/a58632000193f3104a9d6c12bcbe8bf5.jpg";
        if(val.innerText==39) img.src = "https://i.pinimg.com/736x/29/d6/0d/29d60d2b6ab728ee32119989e58dd82a.jpg";
        if(val.innerText==40) img.src = "https://i.pinimg.com/1200x/14/31/37/143137fbb4fe2ffd8c793adc3e6471a5.jpg";
        if(val.innerText==41) img.src = "https://i.pinimg.com/1200x/91/69/9e/91699ec84f9e861897c17f11ce6d5b98.jpg";
        if(val.innerText==42) img.src = "https://i.pinimg.com/736x/ea/cd/d1/eacdd1c6a8ad172e82e8ce5464add282.jpg";
        if(val.innerText==43) img.src = "https://i.pinimg.com/736x/d6/db/05/d6db054449ae5515da69a959d2d14704.jpg";
        if(val.innerText==44) img.src = "https://i.pinimg.com/736x/5f/5f/50/5f5f503c0c3189e1e4622da720154c91.jpg";
        if(val.innerText==45) img.src = "https://i.pinimg.com/736x/96/94/a3/9694a3ce0870a88ab03f16ac10592775.jpg";
        if(val.innerText==46) img.src = "https://i.pinimg.com/1200x/37/00/85/370085f82e9c5782ff8d09388ee6843d.jpg";
        if(val.innerText==47) img.src = "https://i.pinimg.com/736x/59/56/49/5956499bb8763a99bb7292358d8acd5e.jpg";
        if(val.innerText==48) img.src = "https://i.pinimg.com/736x/b5/b1/ae/b5b1ae0ea9440f6fe54339a11154ddd6.jpg";
        if(val.innerText==49) img.src = "https://i.pinimg.com/1200x/82/35/ce/8235cea867da62c679f7f7603545c320.jpg";
        if(val.innerText==50) img.src = "https://i.pinimg.com/1200x/64/fd/7e/64fd7ee249a2295ada39979b66d99879.jpg";
        if(val.innerText==51) img.src = "https://i.pinimg.com/1200x/2d/3e/34/2d3e34da5d8dd5a408a9a223d13735d2.jpg";
        if(val.innerText==52) img.src = "https://i.pinimg.com/1200x/de/c4/62/dec462cce6e3bd7683e51ae88f312fb8.jpg";
        if(val.innerText==53) img.src = "https://i.pinimg.com/736x/8d/13/77/8d1377c6bafab198b6db213b242af385.jpg";
        if(val.innerText==54) img.src = "https://i.pinimg.com/1200x/c9/92/85/c99285c613528d9c0c0f317171aa8ce2.jpg";
        if(val.innerText==55) img.src = "https://i.pinimg.com/736x/8d/13/77/8d1377c6bafab198b6db213b242af385.jpg";
        if(val.innerText==56) img.src = "https://i.pinimg.com/736x/a4/28/18/a42818c2a08b864934d89812cccf03b4.jpg";
        if(val.innerText==57) img.src = "https://i.pinimg.com/736x/d9/59/de/d959dee030c18c50db0cb800f98162a0.jpg";
        if(val.innerText==58) img.src = "https://i.pinimg.com/1200x/0e/ca/b8/0ecab831f35069b3812815205d307007.jpg";
        if(val.innerText==59) img.src = "https://i.pinimg.com/736x/fb/a4/10/fba4108d56657456e3d3a948e38ee036.jpg";
        if(val.innerText==60) img.src = "https://i.pinimg.com/736x/9c/b1/04/9cb104c3197ae23a339ff5ffbba92766.jpg";
        if(val.innerText==61) img.src = "https://i.pinimg.com/736x/d4/3e/f3/d43ef32953c8cc10441255eb58a66d34.jpg";
        if(val.innerText==62) img.src = "https://i.pinimg.com/736x/8a/11/3a/8a113af9ce9ab33a1cd1badc893debae.jpg";
        if(val.innerText==63) img.src = "https://i.pinimg.com/736x/f2/1d/15/f21d15fc3ae440719ff2845ac80a2161.jpg";
        if(val.innerText==64) img.src = "https://i.pinimg.com/1200x/c2/d7/80/c2d7804525de3e9adbc9e7d0968bae23.jpg";
        if(val.innerText==65) img.src = "https://i.pinimg.com/736x/73/76/34/737634298fa3cf9c29164812ac95ff79.jpg";
        if(val.innerText==66) img.src = "https://i.pinimg.com/736x/8d/3c/80/8d3c80762e1b282226f009caa6a52d8c.jpg";
        if(val.innerText==67) img.src = "https://i.pinimg.com/736x/30/11/7e/30117ecee25d9fa6b90c5e1f41b154b4.jpg";
        if(val.innerText==68) img.src = "https://i.pinimg.com/1200x/36/f9/5c/36f95c49642a34dfefa200acb1f606ba.jpg";
        if(val.innerText==69) img.src = "https://i.pinimg.com/736x/84/24/8a/84248af2b5deecf83a8d0d8aaa0b987c.jpg";
        if(val.innerText==70) img.src = "https://i.pinimg.com/736x/24/96/a2/2496a2a7084c4cffc3afcf3648e4f4bd.jpg";
        if(val.innerText==71) img.src = "https://i.pinimg.com/736x/41/6d/05/416d05f0ded49f6fbbe82b1f32dbe808.jpg";
        if(val.innerText==72) img.src = "https://i.pinimg.com/736x/2e/09/ab/2e09abdf30dcfc8353315c1a56c20003.jpg";

        if(val.innerText==73) img.src = "https://i.pinimg.com/1200x/07/1d/3b/071d3b4a5ebb658209e103bcb56a4fae.jpg";
        if(val.innerText==74) img.src = "https://i.pinimg.com/736x/a5/86/32/a58632000193f3104a9d6c12bcbe8bf5.jpg";
        if(val.innerText==75) img.src = "https://i.pinimg.com/736x/29/d6/0d/29d60d2b6ab728ee32119989e58dd82a.jpg";
        if(val.innerText==76) img.src = "https://i.pinimg.com/1200x/14/31/37/143137fbb4fe2ffd8c793adc3e6471a5.jpg";
        if(val.innerText==77) img.src = "https://i.pinimg.com/1200x/91/69/9e/91699ec84f9e861897c17f11ce6d5b98.jpg";
        if(val.innerText==78) img.src = "https://i.pinimg.com/736x/ea/cd/d1/eacdd1c6a8ad172e82e8ce5464add282.jpg";
        if(val.innerText==79) img.src = "https://i.pinimg.com/736x/d6/db/05/d6db054449ae5515da69a959d2d14704.jpg";
        if(val.innerText==80) img.src = "https://i.pinimg.com/736x/5f/5f/50/5f5f503c0c3189e1e4622da720154c91.jpg";
        if(val.innerText==81) img.src = "https://i.pinimg.com/736x/96/94/a3/9694a3ce0870a88ab03f16ac10592775.jpg";
        if(val.innerText==82) img.src = "https://i.pinimg.com/1200x/37/00/85/370085f82e9c5782ff8d09388ee6843d.jpg";
        if(val.innerText==83) img.src = "https://i.pinimg.com/736x/59/56/49/5956499bb8763a99bb7292358d8acd5e.jpg";
        if(val.innerText==84) img.src = "https://i.pinimg.com/736x/b5/b1/ae/b5b1ae0ea9440f6fe54339a11154ddd6.jpg";
        if(val.innerText==85) img.src = "https://i.pinimg.com/1200x/82/35/ce/8235cea867da62c679f7f7603545c320.jpg";
        if(val.innerText==86) img.src = "https://i.pinimg.com/1200x/64/fd/7e/64fd7ee249a2295ada39979b66d99879.jpg";
        if(val.innerText==87) img.src = "https://i.pinimg.com/1200x/2d/3e/34/2d3e34da5d8dd5a408a9a223d13735d2.jpg";
        if(val.innerText==88) img.src = "https://i.pinimg.com/1200x/de/c4/62/dec462cce6e3bd7683e51ae88f312fb8.jpg";
        if(val.innerText==89) img.src = "https://i.pinimg.com/736x/8d/13/77/8d1377c6bafab198b6db213b242af385.jpg";
        if(val.innerText==90) img.src = "https://i.pinimg.com/1200x/c9/92/85/c99285c613528d9c0c0f317171aa8ce2.jpg";
        if(val.innerText==91) img.src = "https://i.pinimg.com/736x/8d/13/77/8d1377c6bafab198b6db213b242af385.jpg";
        if(val.innerText==92) img.src = "https://i.pinimg.com/736x/a4/28/18/a42818c2a08b864934d89812cccf03b4.jpg";
        if(val.innerText==93) img.src = "https://i.pinimg.com/736x/d9/59/de/d959dee030c18c50db0cb800f98162a0.jpg";
        if(val.innerText==94) img.src = "https://i.pinimg.com/1200x/0e/ca/b8/0ecab831f35069b3812815205d307007.jpg";
        if(val.innerText==95) img.src = "https://i.pinimg.com/736x/fb/a4/10/fba4108d56657456e3d3a948e38ee036.jpg";
        if(val.innerText==96) img.src = "https://i.pinimg.com/736x/9c/b1/04/9cb104c3197ae23a339ff5ffbba92766.jpg";
        if(val.innerText==97) img.src = "https://i.pinimg.com/736x/d4/3e/f3/d43ef32953c8cc10441255eb58a66d34.jpg";
        if(val.innerText==98) img.src = "https://i.pinimg.com/736x/8a/11/3a/8a113af9ce9ab33a1cd1badc893debae.jpg";
        if(val.innerText==99) img.src = "https://i.pinimg.com/736x/f2/1d/15/f21d15fc3ae440719ff2845ac80a2161.jpg";
        if(val.innerText==100) img.src = "https://i.pinimg.com/1200x/c2/d7/80/c2d7804525de3e9adbc9e7d0968bae23.jpg";
        if(val.innerText==101) img.src = "https://i.pinimg.com/736x/73/76/34/737634298fa3cf9c29164812ac95ff79.jpg";
        if(val.innerText==102) img.src = "https://i.pinimg.com/736x/8d/3c/80/8d3c80762e1b282226f009caa6a52d8c.jpg";
        if(val.innerText==103) img.src = "https://i.pinimg.com/736x/30/11/7e/30117ecee25d9fa6b90c5e1f41b154b4.jpg";
        if(val.innerText==104) img.src = "https://i.pinimg.com/1200x/36/f9/5c/36f95c49642a34dfefa200acb1f606ba.jpg";
        if(val.innerText==105) img.src = "https://i.pinimg.com/736x/84/24/8a/84248af2b5deecf83a8d0d8aaa0b987c.jpg";
        if(val.innerText==106) img.src = "https://i.pinimg.com/736x/24/96/a2/2496a2a7084c4cffc3afcf3648e4f4bd.jpg";
        if(val.innerText==107) img.src = "https://i.pinimg.com/736x/41/6d/05/416d05f0ded49f6fbbe82b1f32dbe808.jpg";
        if(val.innerText==108) img.src = "https://i.pinimg.com/736x/2e/09/ab/2e09abdf30dcfc8353315c1a56c20003.jpg";
        img.height = 52;
        img.width = 52;
        val.appendChild(img);
    })
})

let click=0;
btn.forEach( (val) => {
    val.addEventListener ( "click", () => {
        click++;
        if( (click-1)%3==0 ) p=val.innerText;
        if( (click-2)%3==0 ) q=val.innerText;
        if( (click)%3==0 ) r=val.innerText;
        if(click%3==0){
            if(r==73 && q==37 && p==1) {
                console.log("hello");
            }
            console.log(p);
            console.log(q);
            console.log(r);
            
        }
    })
})
