const { createWorker } = require('tesseract.js');

(async () => {
  const worker = await createWorker();

  (async () => {
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('./image/IMG_5897_test_3.jpg');
    console.log(text);
    await worker.terminate();
  })();
})();