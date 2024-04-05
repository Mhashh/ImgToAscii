import Jimp from 'jimp'

let dw = 30

let ans = "\n";
let temp = "\n"
function strChk(grayscale){
    if(grayscale<30){
        ans = ans+"*"
    }
    else if(grayscale<60){
        ans = ans+"."
    }
    else if(grayscale<90){
        ans=ans+" "
    }
    else
        ans= ans+" "
    /**if (grayscale < 10 )
    {
        ans=ans+"_";
    }
    else if (grayscale < 17 )
    {
        ans=ans+"-";
    }
    else if (grayscale < 24)
    {
        ans=ans+">";
    }
    else if (grayscale < 31)
    {
        ans=ans+"<";
    }
    else if (grayscale < 38)
    {
        ans=ans+"*";
    }
    else if (grayscale < 45)
    {
        ans=ans+"=";
    }
    else if (grayscale < 52)
    {
        ans=ans+"~";
    }
    else if (grayscale < 59)
    {
        ans=ans+"o";
    }
    else if (grayscale < 66)
    {
        ans=ans+":";
    }
    else if (grayscale < 73)
    {
        ans=ans+"a";
    }
    else if (grayscale < 80)
    {
        ans=ans+" ";
    }
    else if (grayscale < 87)
    {
        ans=ans+"s";
    }
    else
    {
        ans=ans+" ";
    }*/
    
}

try{
    Jimp.read('monkaHmm.png').then(
        (img)=>{
            
            let h = img.getHeight();
            let w = img.getWidth();
            console.log(" "+h+" "+w)
            
            console.log(dw+" "+((h/w)*dw))
            if(h>w)
                img.resize(Jimp.AUTO,dw);
            else
                img.resize(dw,Jimp.AUTO);

            h = img.getHeight();
            w = img.getHeight();

            console.log(" "+h+" "+w)
            
            for(let i = 0;i<h;i++){
                for(let j = 0;j<w;j++){
                    let pix = Jimp.intToRGBA(img.getPixelColor(j,i));
                    let g = 0.2126 * pix.r + 0.7152 * pix.g + 0.0722 * pix.b;
                    g = ((g-0)/255)*100;
                    g = Math.round(g)
                    strChk(g)
                }
                ans = ans+"\n";
            }
            console.log(ans);
        }  
    ).catch(
        e=>{
            console.log(e)
        }
    )
}
catch(e){
    console.error(e)
}