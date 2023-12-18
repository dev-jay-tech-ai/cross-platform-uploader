## Cross-platform uploader

Streamlined Upload Processes

Implemented logic to simplify and consolidate previously repetitive uploads. <br>
The system can now intelligently infer the category through the title, <br> allowing for a one-time, efficient upload using a predefined template. <br>
<br>
<br>

A. Crawling
  To initiate crawling, use the following command:
  ```
  node crawler_multipage.js
  ```

B. Image and Excel File Creation
  In the createImage.js file, modify the file name at line 8 with the one you have crawled.
  
  Run the following commands:
  ```
  node createImage.js
  node createExcelfile.js
  ```




<br>
<br>
<br>
⚙️ 
Node js 18.17.1
