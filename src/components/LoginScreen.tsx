type LoginScreenProps = {
  onLogin: () => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        background: "#ffb3d9",
      }}
    >
      <div className="flex rounded-lg overflow-hidden shadow-2xl">
        <div
          className="flex flex-col items-end justify-center pr-8"
          style={{
            width: "280px",
            height: "400px",
            background: "#5a7fbe",
            borderRight: "2px solid #3a6bb5",
          }}
        >
          <img
            src="/power.PNG"
            alt="elenOS"
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "24px",
              filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
            }}
          />
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
              letterSpacing: "2px",
              marginBottom: "16px",
            }}
          >
            elenOS
          </h1>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "white",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
              textAlign: "right",
            }}
          >
            To begin, click your user name
          </h2>
        </div>

        <div
          className="flex flex-col justify-center px-12"
          style={{
            width: "420px",
            height: "400px",
            background: "#4a6eb0",
          }}
        >
          <div
            className="cursor-pointer hover:bg-white/10 transition-all rounded-lg p-4"
            onClick={onLogin}
          >
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="rounded overflow-hidden border-2 border-white shadow-lg flex-shrink-0"
                style={{
                  width: "64px",
                  height: "64px",
                }}
              >
                <img
                  src="/avatar.PNG"
                  alt="Elena Valencia"
                  className="w-full h-full object-contain"
                />
              </div>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "white",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
                }}
              >
                Elena Valencia
              </p>
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
