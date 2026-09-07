import React from "react";
import { Link } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";

const FloatingPolicyButton: React.FC = () => (
  <Link
    to="/ketentuan-penggunaan"
    className="fixed z-50 bottom-6 right-6 text-white rounded-full shadow-lg flex items-center px-4 py-3 space-x-2 transition-colors duration-300"
    style={{
      minWidth: 56,
      minHeight: 56,
      backgroundColor: "rgb(206, 146, 38)",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgb(180, 128, 33)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "rgb(206, 146, 38)")
    }
    title="Kebijakan Penggunaan & Ketentuan Layanan"
  >
    <FaRegFileAlt size={24} />
    <span className="hidden md:inline font-semibold text-sm">
      Kebijakan & Ketentuan
    </span>
  </Link>
);

export default FloatingPolicyButton;
