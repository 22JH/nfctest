import React, { useState, useEffect } from "react";

function App() {
  const [nfcSupported, setNfcSupported] = useState(false);
  const [nfcReading, setNfcReading] = useState(false);
  const [nfcData, setNfcData] = useState("");

  useEffect(() => {
    // 브라우저가 Web NFC API를 지원하는지 확인합니다.
    if ("NDEFReader" in window) {
      setNfcSupported(true);
    }
  }, []);

  // const startNfcReading = async () => {
  //   try {
  //     const reader = new NDEFReader();
  //     await reader.scan();
  //     setNfcReading(true);
  //     reader.addEventListener("reading", ({ message, serialNumber }) => {
  //       // NFC 태그를 읽은 후 처리할 코드를 작성합니다.
  //       const nfcData = message.records[0].data;
  //       setNfcData(nfcData);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const stopNfcReading = async () => {
  //   setNfcReading(false);
  //   const reader = new NDEFReader();
  //   await reader.stop();
  // };

  return (
    <div>
      {nfcSupported ? (
        <div>
          {/* <button onClick={nfcReading ? stopNfcReading : startNfcReading}>
            {nfcReading ? "Stop NFC Reading" : "Start NFC Reading"}
          </button>
          <p>{nfcData}</p> */}
          <p>지원하는 기기</p>
        </div>
      ) : (
        <p>Web NFC API is not supported.</p>
      )}
    </div>
  );
}

export default App;
