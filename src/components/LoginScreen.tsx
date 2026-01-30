type LoginScreenProps = {
  onLogin: () => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        background: "#d1fdf9ff",
      }}
    >
      <style>
        {`
          @media (max-width: 1023px) {
            .login-container {
              flex-direction: column !important;
              max-width: 100% !important;
              margin: 1rem !important;
            }
            .login-left {
              width: 100% !important;
              height: auto !important;
              min-height: 200px !important;
              align-items: center !important;
              padding: 1.5rem !important;
              border-right: 0 !important;
              border-bottom: 2px solid #3a6bb5 !important;
            }
            .login-left img {
              width: 80px !important;
              height: 80px !important;
              margin-bottom: 1rem !important;
            }
            .login-left h1 {
              font-size: 28px !important;
              text-align: center !important;
              margin-bottom: 0.75rem !important;
            }
            .login-left h2 {
              font-size: 14px !important;
              text-align: center !important;
            }
            .login-right {
              width: 100% !important;
              height: auto !important;
              min-height: 200px !important;
              padding: 2rem 1.5rem !important;
            }
            .login-avatar {
              width: 48px !important;
              height: 48px !important;
            }
            .login-name {
              font-size: 16px !important;
            }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .login-left img {
              width: 96px !important;
              height: 96px !important;
            }
            .login-left h1 {
              font-size: 32px !important;
            }
            .login-left h2 {
              font-size: 15px !important;
            }
            .login-avatar {
              width: 56px !important;
              height: 56px !important;
            }
          }
        `}
      </style>
      <div
        className="flex login-container rounded-lg overflow-hidden"
        style={{
          boxShadow:
            "0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          className="flex flex-col items-end justify-center pr-8 login-left"
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
            elenaOS
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
          className="flex flex-col justify-center px-12 login-right"
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
              <div
                className="rounded overflow-hidden border-2 border-white shadow-lg flex-shrink-0 login-avatar"
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
                className="font-semibold text-white login-name"
                style={{
                  fontSize: "18px",
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
