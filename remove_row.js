const Excel = require('exceljs');

// 엑셀 정보 읽고 각자 열에 쓰기
async function saveExcel () {
    //엑셀 데이터 읽고 워크북 불러오기
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile('excel/cafe_2022-08-09_130802.xlsx')
      .then(function()  {
        const worksheet = workbook.getWorksheet('사방넷상품대량등록_샘플파일');

        // delete a specific row
        const limit = 21;
        const lastRow = worksheet.lastRow;

        worksheet.eachRow({ includeEmpty: true },(row, index) => {
          if(index > 21) {
            row.splice(row, 40);
            row.commit();
          }
        });

        return workbook.xlsx.writeFile(`excel/rm-row-test.xlsx`);
    });
  }

  saveExcel();