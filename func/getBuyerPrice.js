module.exports = (code) => {
  if(code?.includes('(')) {
    const country = code?.includes(')') ? code.split(')')[1] : '';
    const arr = code.split('(');
    const ex1 = code.match(/\((\d+)\)/)[1];
    const ex2 = arr[1].replace(')','');
    const num = arr[0].includes('1000') ? arr[0].replace('1000','') : arr[0].replace('100','')
    const result = Number(num)-(Number(ex1)/100 * Number(num));
    const numUnit = arr[0].includes('1000') ? '1000' : '100';
    if(ex1+country === ex2) return numUnit+result+country.toUpperCase(); 
  } else return code.toUpperCase(); 
}