module.exports = (formPrice) => {
  let tmp;
  if(formPrice !== undefined) {
    if(formPrice.includes('만') && formPrice.includes('천')) {
      const mil = formPrice.slice(0,formPrice.indexOf('만'));
      const thou = formPrice.slice(formPrice.indexOf('만')+1, formPrice.indexOf('천'));
      tmp = mil+thou+'000';
    } else if(formPrice.includes('만')) {
      const mil = formPrice.slice(0,formPrice.indexOf('만'));
      tmp = mil+'0000';
    } else {
      tmp = formPrice;
    }
    tmp = tmp.replace(/[^0-9]/g,'');
  } else tmp = 1234500;
  return tmp;
}