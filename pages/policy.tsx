import React from 'react';
import { motion } from 'framer-motion';

// Fix: Cast motion.div to any to resolve TypeScript errors with animation props
const MotionDiv = motion.div as any;

const PolicyManual: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <div className="flex-1 w-full">
        
        {/* Hero Section */}
        <div className="relative bg-slate-900 overflow-hidden border-b border-white/5 pt-[80px]">
           {/* Changed gradient colors to Blue for Privacy Policy trust */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
           
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 lg:py-16">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                 <h1 className="flex flex-col gap-y-2 leading-none tracking-tight text-left">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-white opacity-70">
                       고객님의 소중한 정보를 보호하는
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-3 lg:gap-x-4">
                       <span className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
                          개인정보
                       </span>
                       <span className="text-3xl md:text-5xl lg:text-6xl font-black text-blue-500">
                          처리방침
                       </span>
                    </div>
                 </h1>
              </MotionDiv>
           </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
           <div className="p-8 md:p-12 border border-slate-200 rounded-2xl bg-white shadow-sm text-left text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
              
              <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-slate-100">개인정보 처리방침</h2>

              <p className="mb-8">
                (주)허브메카(이하 '회사'라 함)는 이용자의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
                회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
              </p>

              <div className="space-y-8">
                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">1. 수집하는 개인정보 항목 및 수집방법</h3>
                    <p className="mb-2">회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                        <li><strong>수집항목</strong>: 이름, 로그인ID, 비밀번호, 자택 전화번호, 자택 주소, 휴대전화번호, 이메일, 회사명, 부서, 직책, 회사전화번호, 쿠키, 결제기록, 접속 IP 정보</li>
                        <li><strong>개인정보 수집방법</strong>: 홈페이지(회원가입, 상담신청, 제휴문의), 서면양식, 팩스, 전화, 상담 게시판, 이메일</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">2. 개인정보의 수집 및 이용목적</h3>
                    <p className="mb-2">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                        <li><strong>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</strong>: 콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스</li>
                        <li><strong>회원 관리</strong>: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인, 불만처리 등 민원처리, 고지사항 전달</li>
                        <li><strong>마케팅 및 광고에 활용</strong>: 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">3. 개인정보의 보유 및 이용기간</h3>
                    <p className="mb-2">원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                        <li>보존 항목 : 결제기록</li>
                        <li>보존 근거 : 계약 또는 청약철회 등에 관한 기록</li>
                        <li>보존 기간 : 3년</li>
                        <li>계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                        <li>대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                        <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">4. 개인정보의 파기절차 및 방법</h3>
                    <p className="mb-2">회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.</p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                        <li><strong>파기절차</strong>: 회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.</li>
                        <li><strong>파기방법</strong>: 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">5. 개인정보 제공</h3>
                    <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                        <li>이용자들이 사전에 동의한 경우</li>
                        <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">6. 수집한 개인정보의 위탁</h3>
                    <p>회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다.</p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                        <li>위탁 대상자 : [택배사 명], [PG사 명] 등</li>
                        <li>위탁업무 내용 : [물품배송], [구매 및 요금 결제] 등</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">7. 이용자 및 법정대리인의 권리와 그 행사방법</h3>
                    <p>이용자 및 법정대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다. 이용자 혹은 만 14세 미만 아동의 개인정보 조회/수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">8. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</h3>
                    <p className="mb-2">회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                        <li><strong>쿠키 등 사용 목적</strong>: 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공</li>
                        <li><strong>쿠키 설정 거부 방법</strong>: 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">9. 개인정보에 관한 민원서비스</h3>
                    <p className="mb-2">회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.</p>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="font-bold text-slate-900">개인정보관리책임자</p>
                        <p>성명 : 우태경</p>
                        <p>소속 : 기업본부</p>
                        <p>전화번호 : 02-868-3260</p>
                        <p>이메일 : help@hubmeka.com</p>
                    </div>
                    <p className="mt-4">귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>
                </section>

              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default PolicyManual;