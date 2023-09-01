const binaryToBase64 = (binaryData) => {
  const base64Data = btoa(
    binaryData.reduce((data, byte) => data + String.fromCharCode(byte), "")
  );

  const convertedImage = `data:image/jpeg;base64,${base64Data}`;

  return convertedImage;
};

export default binaryToBase64;
