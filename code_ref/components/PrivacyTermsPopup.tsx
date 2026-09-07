import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const points = [
  {
    key: "acceptTerms",
    label: (
      <>
        Saya telah membaca dan menerima{" "}
        <a
          href="/kebijakan-penggunaan#ketentuan-penggunaan"
          className="underline"
          style={{ color: "rgb(206, 146, 38)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ketentuan Penggunaan Klien API YouTube
        </a>
        .
      </>
    ),
    detail:
      "Anda setuju mengikuti aturan yang berlaku di aplikasi ini dan juga Ketentuan Layanan YouTube.",
  },
  {
    key: "acceptPrivacy",
    label: (
      <>
        Saya telah membaca dan menerima{" "}
        <a
          href="/ketentuan-penggunaan#kebijakan-privasi"
          className="underline"
          style={{ color: "rgb(206, 146, 38)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Kebijakan Privasi
        </a>
        .
      </>
    ),
    detail:
      "Anda memahami bagaimana data Anda dikumpulkan, digunakan, dan dilindungi sesuai kebijakan privasi kami.",
  },
  {
    key: "acceptYoutubeTerms",
    label: (
      <>
        Saya menyetujui{" "}
        <a
          href="https://www.youtube.com/t/terms"
          className="underline"
          style={{ color: "rgb(206, 146, 38)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ketentuan Layanan YouTube
        </a>
        .
      </>
    ),
    detail:
      "Penggunaan aplikasi ini juga tunduk pada Ketentuan Layanan YouTube.",
  },
  {
    key: "acceptGooglePrivacy",
    label: (
      <>
        Saya menyetujui{" "}
        <a
          href="https://policies.google.com/privacy"
          className="underline"
          style={{ color: "rgb(206, 146, 38)" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Kebijakan Privasi Google
        </a>
        .
      </>
    ),
    detail:
      "Penggunaan YouTube API pada aplikasi ini mengikuti Kebijakan Privasi Google.",
  },
];

const PrivacyTermsPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({
    acceptTerms: false,
    acceptPrivacy: false,
    acceptYoutubeTerms: false,
    acceptGooglePrivacy: false,
  });

  if (!isOpen) return null;

  const allChecked = Object.values(checked).every(Boolean);

  const handleCheck = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAgreeAll = () => {
    if (allChecked) onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto w-full max-h-[90vh] overflow-y-auto">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center leading-tight"
          style={{ color: "rgb(206, 146, 38)" }}
        >
          Persetujuan Ketentuan Penggunaan & Kebijakan Privasi
        </h2>
        <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
          Sebelum melanjutkan menggunakan aplikasi ini, mohon baca dan setujui
          semua poin berikut:
        </p>
        <form className="space-y-4 sm:space-y-5 mb-4 sm:mb-6">
          {points.map((point) => (
            <div key={point.key} className="flex items-start gap-3 sm:gap-4">
              <input
                type="checkbox"
                id={point.key}
                checked={checked[point.key]}
                onChange={() => handleCheck(point.key)}
                className="mt-1 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                style={{ accentColor: "rgb(206, 146, 38)" }}
              />
              <label
                htmlFor={point.key}
                className="block text-gray-800 cursor-pointer text-sm sm:text-base leading-relaxed"
              >
                <div className="mb-1">{point.label}</div>
                <div className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {point.detail}
                </div>
              </label>
            </div>
          ))}
        </form>
        <div className="text-center">
          <button
            className={`text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto min-h-[48px] ${
              !allChecked ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{ backgroundColor: "rgb(206, 146, 38)" }}
            onMouseEnter={(e) =>
              !allChecked
                ? null
                : (e.currentTarget.style.backgroundColor = "rgb(180, 128, 33)")
            }
            onMouseLeave={(e) =>
              !allChecked
                ? null
                : (e.currentTarget.style.backgroundColor = "rgb(206, 146, 38)")
            }
            disabled={!allChecked}
            onClick={handleAgreeAll}
            type="button"
          >
            Setujui Semua & Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTermsPopup;
