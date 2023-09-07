import sys
from openpyxl import load_workbook
import pandas as pd
 
name = str(sys.argv[1])
lastRow = int(sys.argv[2])
 
wb = load_workbook('./excel/'+ name +'.xlsx')
ws = wb.active
ws.delete_rows(lastRow, 200)
wb.save('./excel/'+ name +'.xlsx')
 
df = pd.read_excel('./excel/'+ name +'.xlsx', dtype={'원산지 코드':'string'})
df = df.sort_values(by='대표 이미지 파일명')
df.to_excel('./excel/'+ name +'.xlsx', index=False)