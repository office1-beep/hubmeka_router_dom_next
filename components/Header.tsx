import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  FileText,
  Headset,
  Monitor,
  ChevronDown,
} from "lucide-react";
import { NavItem } from "../types";

const NAV_ITEMS: NavItem[] = [
  {
    label: "서비스소개",
    href: "#", // Changed to # as it shouldn't be clickable
    children: [
      { label: "단체급식프로그램", href: "/catering" },
      { label: "식자재유통프로그램", href: "/distribution" },
    ],
  },
  { label: "이용안내", href: "/guide" },
  { label: "회사소개", href: "/company" },
];

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  // Consistent white/glassy header
  const headerClass =
    "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3";

  const isItemActive = (item: NavItem) => {
    // Check currentPath for specific pages
    if (item.label === "회사소개" && currentPath.startsWith("/company"))
      return true;
    if (item.label === "이용안내" && currentPath.startsWith("/guide"))
      return true;

    // Check for Service Intro parent active state
    if (
      item.label === "서비스소개" &&
      (currentPath.startsWith("/catering") ||
        currentPath.startsWith("/distribution"))
    )
      return true;

    // Check children specific active state
    if (
      item.label === "단체급식프로그램" &&
      currentPath.startsWith("/catering")
    )
      return true;
    if (
      item.label === "식자재유통프로그램" &&
      currentPath.startsWith("/distribution")
    )
      return true;

    // Recursive check (though we handled specific cases above)
    if (item.children) {
      return item.children.some((child) => isItemActive(child));
    }

    return false;
  };

  const MobileLink = ({
    item,
    onClick,
  }: {
    item: NavItem;
    onClick: () => void;
    key?: string;
  }) => {
    if (item.children) {
      return (
        <div className="flex flex-col">
          <div
            className={`text-xl font-bold py-3 border-b border-slate-50 flex items-center justify-between ${
              isItemActive(item) ? "text-red-700" : "text-slate-800"
            }`}
          >
            {item.label}
            <ChevronDown size={20} />
          </div>
          <div className="pl-4 flex flex-col gap-2 mt-2 bg-slate-50 rounded-lg p-2">
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                onClick={onClick}
                className={`py-2 px-2 text-lg font-medium rounded ${
                  isItemActive(child)
                    ? "text-red-700"
                    : "text-slate-600 hover:text-red-700"
                }`}
              >
                - {child.label}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        href={item.href}
        className={`text-xl font-bold py-3 border-b border-slate-50 flex items-center justify-between ${
          isItemActive(item)
            ? "text-red-700"
            : "text-slate-800 hover:text-red-700"
        }`}
        onClick={onClick}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      {/* Aligned with UserGuide container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left Section: Logo & Nav */}
          <div className="flex items-center gap-6 xl:gap-10">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 cursor-pointer shrink-0"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-12 h-12 shadow-sm rounded-full"
              >
                <circle cx="50" cy="50" r="50" fill="#009030" />
                <text
                  x="50"
                  y="48"
                  fontFamily="Arial, sans-serif"
                  fontWeight="900"
                  fontStyle="italic"
                  fontSize="36"
                  textAnchor="middle"
                  fill="white"
                  letterSpacing="-1"
                >
                  Hub
                </text>
                <text
                  x="50"
                  y="75"
                  fontFamily="Arial, sans-serif"
                  fontWeight="500"
                  fontStyle="italic"
                  fontSize="22"
                  textAnchor="middle"
                  fill="white"
                >
                  meka
                </text>
              </svg>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                (주)허브메카
              </span>
            </Link>

            {/* Desktop Nav - Left Aligned next to Logo */}
            <nav className="hidden md:flex items-center gap-8 ml-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <div
                      className={`text-xl font-bold transition-colors flex items-center gap-1 py-4 cursor-default ${
                        isItemActive(item)
                          ? "text-red-700"
                          : "text-slate-800 hover:text-red-700"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={18} strokeWidth={3} />
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-xl font-bold transition-colors flex items-center gap-1 py-4 cursor-pointer ${
                        isItemActive(item)
                          ? "text-red-700"
                          : "text-slate-800 hover:text-red-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Vertical Submenu */}
                  {item.children && (
                    <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white border border-slate-200 shadow-xl rounded-xl w-72 p-2 animate-in fade-in slide-in-from-top-2 duration-200 pt-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`w-full px-5 py-3 rounded-lg font-bold whitespace-nowrap text-left transition-colors text-lg ${
                            isItemActive(child)
                              ? "text-red-700 bg-slate-50"
                              : "text-slate-700 hover:bg-slate-50 hover:text-red-700"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Section: Customer Center & Remote Support & Sales */}
          <div className="hidden md:flex items-center ml-auto gap-3">
            {/* Red Customer Center Button (Phone Number) */}
            <div className="bg-red-700 text-white px-5 py-2.5 rounded-full text-lg font-bold shadow-md flex items-center gap-2 cursor-default">
              <Headset size={22} />
              02-868-3260
            </div>

            {/* Remote Support Button */}
            <a
              href="https://www.988.co.kr/hubmeka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-lg font-bold shadow-md flex items-center gap-2 transition-all"
            >
              <Monitor size={22} />
              원격지원
            </a>

            {/* Sales Inquiry Button */}
            <Link
              href="/sales"
              className={`px-5 py-2.5 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-md hover:shadow-lg ${
                currentPath.startsWith("/sales")
                  ? "bg-primary-800 text-white ring-2 ring-primary-300"
                  : "bg-primary-600 hover:bg-primary-700 text-white"
              }`}
            >
              <FileText size={22} />
              상담신청
            </Link>
          </div>

          {/* Mobile Menu Button (Right aligned on mobile) */}
          <button
            className="md:hidden ml-auto text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200 h-[calc(100vh-5rem)] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <MobileLink
              key={item.label}
              item={item}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ))}

          <a
            href="https://www.988.co.kr/hubmeka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold py-3 border-b border-slate-50 text-left flex items-center gap-2 text-slate-800 hover:text-primary-700"
          >
            <Monitor size={20} />
            원격지원
          </a>

          <Link
            href="/sales"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-xl font-bold py-3 border-b border-slate-50 text-left flex items-center gap-2 ${
              currentPath.startsWith("/sales")
                ? "text-primary-700"
                : "text-slate-800 hover:text-primary-700"
            }`}
          >
            <FileText size={20} />
            상담신청
          </Link>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:02-868-3260"
              className="bg-red-700 text-white w-full py-3.5 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
            >
              <Headset size={20} />
              02-868-3260
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
