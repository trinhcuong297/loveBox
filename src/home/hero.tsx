export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: 'url("https://i.imgur.com/2SEtd7x.jpg")' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-max bg-gray-900/70 p-8 rounded-2xl overflow-hidden">
            <h1 className="mb-2 text-3xl font-bold">
              Hello <span className="text-red-500">Thai Bao</span>
            </h1>
            <h1 className="mb-2 text-3xl font-bold">
              I am <span className="text-blue-500">Trinh Cuong</span>
            </h1>
            <p className="mb-2">and ...</p>
            <p className="mb-2">I just want to say</p>
            <div className="tooltip tooltip-error" data-tip="i love you">
              <div className="mockup-code text-left">
                <pre data-prefix="1">
                  <code>01101001 00100000 01101100</code>
                </pre>
                <pre data-prefix="2">
                  <code>01101111 01110110 01100101 00100000</code>
                </pre>
                <pre data-prefix="3">
                  <code>01111001 01101111 01110101</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
