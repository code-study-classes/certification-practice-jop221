const calculateDistance = (x1,x2) =>{
    const a=x1-x2;
    return Math.abs(a)

}
const calculateSegmentProduct = (a,b,c) =>{ 
    const g = (a-c);
    const n = (b-c);
    return Math.abs(g)*Math.abs(n)
}
console.log(calculateSegmentProduct(0,5,2))
const calculateKilobytes = (fileSizeInBytes) => {
   const a = fileSizeInBytes/1024;
   return Math.floor(a)
}
const calculateSegments = (lengthA,lengthB) =>{
    if (lengthA > lengthB){
        return Math.floor(lengthA/lengthB)
    }
}
const calculateDigitSum = (twoDigitNumber) =>{
    const a= twoDigitNumber%10;
    const b=twoDigitNumber/10;
    return Math.floor(a+b)
}
const swapHundredsAndTens = (twoDigitNumber) =>{
    for (let i = 0; i < twoDigitNumber.length; i = i + 2)
    a = twoDigitNumber.charAt(i + 1) + twoDigitNumber.charAt(i)+twoDigitNumber(i+2);
    return a
}
console.log(swapHundredsAndTens(123))