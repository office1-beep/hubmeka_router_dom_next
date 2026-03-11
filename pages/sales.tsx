import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/router";

// Fix: Cast motion components to any to resolve TypeScript errors with animation props
const MotionDiv = motion.div as any;

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const SalesInquiry: React.FC = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    content: "",
    agreePrivacy: false,
    agreeMarketing: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Refs for focus management
  const companyRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    const renderRecaptcha = () => {
      if (
        window.grecaptcha &&
        window.grecaptcha.render &&
        recaptchaRef.current
      ) {
        // Prevent re-rendering if already rendered in this session
        if (recaptchaRef.current.innerHTML !== "") return;

        try {
          widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
            // Google Test Key (replace with your actual Site Key in production)
            //서버***************************************************************************************************
            sitekey: "6Lfr7l0sAAAAANW3_PKKK6I1i6x1-9-rUi2Zd03j", //new.hubmeka.com
			//sitekey: "6LcUboQsAAAAACHFd7i5FXNo110OSvoFZGDN9h7v", //new.hubmeka.com
            //로컬***************************************************************************************************
            //sitekey: "6LeA8l0sAAAAAKLlI0_i3IM7l9DiUUZdvmIZ0i0l", //localhost
            callback: (token: string) => setRecaptchaToken(token),
            "expired-callback": () => setRecaptchaToken(null),
          });
        } catch (e) {
          console.error("reCAPTCHA render error:", e);
        }
		console.error("111======================");
      }
	  console.error("222======================");
    };

	console.error("333======================");
	
    // Check if grecaptcha is ready, if not, wait for it
    const intervalId = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
        clearInterval(intervalId);
        renderRecaptcha();
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Required Fields Validation
    if (!formState.company.trim()) {
      alert("회사명을 입력해주세요.");
      companyRef.current?.focus();
      return;
    }

    if (!formState.name.trim()) {
      alert("이름을 입력해주세요.");
      nameRef.current?.focus();
      return;
    }

    if (!formState.phone.trim()) {
      alert("연락처를 입력해주세요.");
      phoneRef.current?.focus();
      return;
    }

    if (!formState.email.trim()) {
      alert("이메일을 입력해주세요.");
      emailRef.current?.focus();
      return;
    }

    if (!formState.content.trim()) {
      alert("문의내용을 입력해주세요.");
      contentRef.current?.focus();
      return;
    }

    if (!formState.agreePrivacy) {
      alert("개인정보 수집 동의는 필수입니다.");
      return;
    }

    if (!recaptchaToken) {
      alert("로봇이 아님을 증명해주세요. (reCAPTCHA 체크)");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        //"http://10.10.78.19:8081/api/sales-inquiry/add",
        //"http://localhost:8081/api/sales-inquiry/add",
        "https://report.hubmeka.com:442/api/sales-inquiry/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company: formState.company,
            name: formState.name,
            phone: formState.phone,
            email: formState.email,
            content: formState.content,
            agreePrivacy: formState.agreePrivacy,
            agreeMarketing: formState.agreeMarketing, // Will be false
            //recaptchaToken: recaptchaToken, // Include token for backend verification
            "g-recaptcha-response": recaptchaToken, // Include token for backend verification
          }),
        },
      );

      if (response.ok) {
        console.log("Form Submitted Successfully");
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        console.error("Submission failed with status:", response.status);
        alert("상담 신청 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "서버와 통신 중 오류가 발생했습니다. 네트워크 상태를 확인해 주세요.: " +
        error,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen pt-[64px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
        {/* Left Section: Value Proposition */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center animate-in slide-in-from-left duration-700">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              상담을 통해 궁금한 점을
              <br />
              즉시 해결하세요.
            </h1>

            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <Check size={28} className="text-slate-900 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    궁금한 점을 빠르게 확인할 수 있습니다.
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    · 연락처를 남겨주시면 빠른 시일이내에 연락 드립니다.
                    <br />· 전문가와의 상담을 통해 문의사항을 빠르고 정확하게
                    해결하세요.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <Clock size={28} className="text-slate-900 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    프로그램을 알아보는 시간을 획기적으로 줄여보세요.
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    · 우리 회사의 업무에 어떻게 적용할 수 있을지 확인할 수
                    있습니다.
                    <br />· 프로그램 도입 여부를 빠르게 판단할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Right Section: Form */}
        <div className="w-full lg:w-1/2 bg-[#1d74b8] p-6 lg:p-12 text-white flex flex-col justify-center animate-in slide-in-from-right duration-700">
          {isSubmitted ? (
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white text-slate-900 p-10 rounded-2xl text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                상담 신청이 완료되었습니다.
              </h2>
              <p className="text-slate-600 mb-8">
                빠른 시일 내에 전문 상담원이 연락드리겠습니다.
                <br />
                감사합니다.
              </p>
              <button
                onClick={() => router.push("/")}
                className="bg-[#1d74b8] text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                돌아가기
              </button>
            </MotionDiv>
          ) : (
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-6 text-white tracking-tight">
                상담문의
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form Fields */}
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <label
                    htmlFor="company"
                    className="w-24 font-bold text-white shrink-0"
                  >
                    회사명
                  </label>
                  <input
                    ref={companyRef}
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2.5 rounded bg-white text-slate-900 border-none outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <label
                    htmlFor="name"
                    className="w-24 font-bold text-white shrink-0"
                  >
                    이름
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2.5 rounded bg-white text-slate-900 border-none outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <label
                    htmlFor="phone"
                    className="w-24 font-bold text-white shrink-0"
                  >
                    연락처
                  </label>
                  <input
                    ref={phoneRef}
                    type="text"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2.5 rounded bg-white text-slate-900 border-none outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <label
                    htmlFor="email"
                    className="w-24 font-bold text-white shrink-0"
                  >
                    E-mail
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2.5 rounded bg-white text-slate-900 border-none outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-2">
                  <label
                    htmlFor="content"
                    className="w-24 font-bold text-white shrink-0 mt-2"
                  >
                    문의내용
                  </label>
                  <textarea
                    ref={contentRef}
                    id="content"
                    name="content"
                    rows={4}
                    value={formState.content}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2.5 rounded bg-white text-slate-900 border-none outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  ></textarea>
                </div>

                {/* Agreements */}
                <div className="pt-4 border-t border-white/20 mt-4">
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <div
                        className={`w-5 h-5 rounded border-2 border-white flex items-center justify-center ${formState.agreePrivacy ? "bg-white" : ""}`}
                      >
                        {formState.agreePrivacy && (
                          <Check
                            size={16}
                            className="text-[#1d74b8] stroke-[4]"
                          />
                        )}
                      </div>
                      <input
                        type="checkbox"
                        name="agreePrivacy"
                        checked={formState.agreePrivacy}
                        onChange={handleCheckboxChange}
                        className="hidden"
                      />
                      <span className="font-bold text-lg">
                        개인정보 수집 동의(필수)
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => router.push("/policy")}
                      className="underline text-sm ml-1 hover:text-white text-white/90"
                    >
                      내용보기
                    </button>
                  </div>
                </div>

                {/* Google reCAPTCHA v2 */}
                <div className="flex justify-center mt-4">
                  <div
                    ref={recaptchaRef}
                    className="bg-white rounded p-1 shadow-md"
                    style={{ minHeight: "78px", minWidth: "304px" }}
                  ></div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-slate-900 font-bold text-xl py-4 rounded mt-4 transition-colors shadow-lg flex items-center justify-center gap-2 ${isSubmitting
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-[#ffc000] hover:bg-[#ffb000]"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      전송 중...
                    </>
                  ) : (
                    "상담신청"
                  )}
                </button>
              </form>
            </MotionDiv>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesInquiry;
