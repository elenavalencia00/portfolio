type LoginScreenProps = {
  onLogin: () => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        background: "#d1fdf9ff",
      }}
    >
      <div
        className="flex flex-col md:flex-row rounded-lg overflow-hidden w-full max-w-[700px]"
        style={{
          boxShadow:
            "0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          className="flex flex-col items-center md:items-end justify-center p-6 md:pr-8"
          style={{
            width: "100%",
            minHeight: "250px",
            background: "#5a7fbe",
            borderRight: "0",
            borderBottom: "2px solid #3a6bb5",
          }}
          {...({
            style: {
              width: "100%",
              minHeight: "250px",
              background: "#5a7fbe",
              borderRight: "0",
              borderBottom: "2px solid #3a6bb5",
            },
          } as any)}
        >
          <style>
            {`
              @media (min-width: 768px) {
                .login-left-panel {
                  width: 280px !important;
                  height: 400px !important;
                  border-right: 2px solid #3a6bb5 !important;
                  border-bottom: 0 !important;
                }
              }
            `}
          </style>
          <div
            className="login-left-panel"
            style={{
              width: "100%",
              minHeight: "250px",
              background: "#5a7fbe",
              borderRight: "0",
              borderBottom: "2px solid #3a6bb5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
          >
            <img
              src="/power.PNG"
              alt="elenOS"
              style={{
                width: "80px",
                height: "80px",
                marginBottom: "16px",
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
              }}
              className="md:w-[120px] md:h-[120px] md:mb-6"
            />
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                letterSpacing: "2px",
                marginBottom: "12px",
                textAlign: "center",
              }}
              className="md:text-4xl md:mb-4 md:text-right"
            >
              elenaOS
            </h1>
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "white",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                textAlign: "center",
              }}
              className="md:text-base md:text-right"
            >
              To begin, click your user name
            </h2>
          </div>
        </div>

        <div
          className="flex flex-col justify-center px-6 md:px-12 py-8"
          style={{
            width: "100%",
            minHeight: "200px",
            background: "#4a6eb0",
          }}
          {...({
            style: {
              width: "100%",
              minHeight: "200px",
              background: "#4a6eb0",
            },
          } as any)}
        >
          <style>
            {`
              @media (min-width: 768px) {
                .login-right-panel {
                  width: 420px !important;
                  height: 400px !important;
                }
              }
            `}
          </style>
          <div
            className="login-right-panel"
            style={{
              width: "100%",
              minHeight: "200px",
              background: "#4a6eb0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 1.5rem",
            }}
          >
            <div
              className="cursor-pointer hover:bg-white/10 transition-all rounded-lg p-4"
              onClick={onLogin}
            >
              <div className="flex items-center gap-4">
                <div
                  className="rounded overflow-hidden border-2 border-white shadow-lg flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded overflow-hidden border-2 border-white shadow-lg flex-shrink-0"
                >
                  <img
                    src="/avatar.PNG"
                    alt="Elena Valencia"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "white",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
                  }}
                  className="text-base md:text-lg"
                >
                  Elena Valencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4"
        style={{
          height: "32px",
          background: "rgba(26, 61, 110, 0.8)",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="text-white text-xs opacity-80">
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div className="text-white text-xs opacity-80">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
