module.exports = (gender, sizeType, brand, div) => {
  const basic = require('../asset/template/basic')
  const measure = require('../asset/template/measure')
  const general = require(`../asset/template/${gender}_general`);
  const italy = require(`../asset/template/${gender}_italy`);
  const etc = require(`../asset/template/${gender}_etc`);
  const tory = require('../asset/template/m_tory');
  const fr = require('../asset/template/w_fr');
  const fr_ch = require('../asset/template/w_fr_ch');
  const w_eu = require('../asset/template/w_eu');
  const w_uk = require('../asset/template/w_uk');
  const w_acne = require('../asset/template/w_acne');
  const w_sandro = require('../asset/template/w_sandro');
  const w_moncler = require('../asset/template/w_moncler');
  const w_etc_odd = require('../asset/template/w_etc_odd');
  const belt = require('../asset/template/belt');
  const goldengoose = require('../asset/template/goldengoose');
  const clothing = require('../asset/template/clothing');
  const shoes = require('../asset/template/shoes');
  const shoeTemp = require('../asset/template/shoes_temp');
  const { _us, _uk, _eu, _burberry, _choo, _maison, _acne, _mcqueen, _tb, _etro, _btv } = require('../asset/template/m_shoes_size_chart');
  const { w_eu_shoes, w_us, w_goldengoose } = require('../asset/template/w_shoes_size_chart');
  const { _moncler } = require('../asset/template/m_clothing_size_chart');
  // if(sizeType === 0) return '정보없음';
  // else if(sizeType === 1) return '제너럴사이즈'
  // else if(sizeType === 2) return '치수'
  // else return sizeType
  if(div === '남성의류') { 
    if(sizeType === 1) {
      if(brand.includes('토리버치')) return tory+clothing;
      else if(brand === '몽클레어' ||  brand === '몽크레어') return _moncler+clothing;
      else return general+clothing;
    } else if(sizeType === 'IT') return italy+clothing;
    else if(sizeType === 'ETC') return etc+clothing;
    else return clothing;
  
  } else if(div === '남성슈즈') { 
    if(brand.includes('토즈') || brand.includes('펜디')) return shoeTemp(brand,_uk)+shoes;
    else if(brand.includes('페라가모')) return shoeTemp(brand,_us)+shoes;
    else if(brand.includes('버버리')) return shoeTemp(brand,_burberry)+shoes;
    else if(brand.includes('지미추')) return shoeTemp(brand,_choo)+shoes;
    else if(brand.includes('마르지엘라')) return shoeTemp(brand,_maison)+shoes;
    else if(brand.includes('아크네')) return shoeTemp(brand,_acne)+shoes;
    else if(brand.includes('맥퀸')) return shoeTemp(brand,_mcqueen)+shoes;
    else if(brand.includes('톰브')) return shoeTemp(brand,_tb)+shoes;
    else if(brand.includes('에트로')) return shoeTemp(brand,_etro)+shoes;
    else if(brand.includes('보테가')) return shoeTemp(brand,_btv)+shoes;
    else if(brand === '골든구스' || brand.includes('골든구스')) return shoeTemp(brand,w_goldengoose)+goldengoose;
    else {
      if(sizeType === 'EU') return shoeTemp(brand,_eu)+shoes;
      else if(sizeType === 'UK') return shoeTemp(brand,_uk)+shoes;
      else return shoes;
    }

  } else if(div === '여성의류') {  
    if(brand === '이자벨마랑') return fr+clothing;
    else if(brand === '샤넬') return fr_ch+clothing;
    else if(brand === '몽클레어' ||  brand === '몽크레어') return w_moncler+clothing;
    else if(brand === '산드로') return w_sandro+clothing;
    else if(brand === '아크네') return w_acne+clothing;
    else {
      if(sizeType === 1) {
        return general+clothing;
      } else if(sizeType === 'UK') return w_uk+clothing;
      else if(sizeType === 'IT') return italy+clothing;
      else if(sizeType === 'ETC') {
        if(brand === '산드로') return w_etc_odd+clothing;
        else return etc+clothing;
      } else if(sizeType === 'FR') return fr+clothing;
      else return w_eu+clothing;
    }
  } else if(div === '여성슈즈') { 
    if(brand === '페라가모') return shoeTemp(brand,w_us)+shoes;
    else if(brand === '골든구스' || brand.includes('골든구스')) return shoeTemp(brand,w_goldengoose)+goldengoose;
    else {
      if(sizeType === 'EU') {
        if(brand === '골든구스' || brand.includes('골든구스')) return shoeTemp(brand,w_goldengoose)+goldengoose;
        else return shoeTemp(brand,w_eu_shoes)+shoes;
      } else if(sizeType === 'UK') return w_uk+shoes;
      else return shoeTemp(brand,w_eu_shoes)+shoes;
    }

  } else if(div === '벨트') return belt;
  else if(div === '가방' || div === '지갑') return measure;
  else return basic;
}