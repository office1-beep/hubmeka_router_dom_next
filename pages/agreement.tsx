import React from 'react';
import { motion } from 'framer-motion';

// Fix: Cast motion.div to any to resolve TypeScript errors with animation props
const MotionDiv = motion.div as any;

const Agreement: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <div className="flex-1 w-full">
        
        {/* Hero Section */}
        <div className="relative bg-slate-900 overflow-hidden border-b border-white/5 pt-[80px]">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-500/10 to-transparent pointer-events-none"></div>
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl pointer-events-none"></div>
           
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 lg:py-16">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                 <h1 className="flex flex-col gap-y-2 leading-none tracking-tight text-left">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-white opacity-70">
                       투명하고 공정한 서비스 이용을 위한
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-3 lg:gap-x-4">
                       <span className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
                          서비스
                       </span>
                       <span className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-400">
                          이용약관
                       </span>
                    </div>
                 </h1>
              </MotionDiv>
           </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
           <div className="p-8 md:p-12 border border-slate-200 rounded-2xl bg-white shadow-sm text-left text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
              
              <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-slate-100">서비스 이용약관</h2>

              <div className="space-y-8">
                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 1 조 (목적)</h3>
                    <p>본 약관은 (주)허브메카(이하 "회사")가 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 회사의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 2 조 (약관의 효력과 변경)</h3>
                    <p>
                        1. 회사는 귀하가 본 약관 내용에 동의하는 것을 조건으로 귀하에게 서비스를 제공할 것이며, 귀하가 본 약관의 내용에 동의하는 경우, 회사의 서비스 제공 행위 및 귀하의 서비스 사용 행위에는 본 약관이 우선적으로 적용될 것입니다.<br/>
                        2. 회사는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된 약관은 회사 사이트 내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다. 이용자가 변경된 약관에 동의하지 아니하는 경우, 이용자는 본인의 회원등록을 취소(회원탈퇴)할 수 있으며, 계속 사용의 경우는 약관 변경에 대한 동의로 간주됩니다. 변경된 약관은 공지와 동시에 그 효력이 발생됩니다.
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 3 조 (약관 외 준칙)</h3>
                    <p>본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법, 정보통신윤리위원회 심의규정, 정보통신 윤리강령, 프로그램보호법 및 기타 관련 법령의 규정에 의합니다.</p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 4 조 (이용 계약의 성립)</h3>
                    <p>이용계약은 신청자가 온라인으로 신청흥 양식에 기록하여 신청을 하고, 이에 대한 회사의 승낙으로 성립됩니다.</p>
                </section>
                
                 <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 5 조 (회원정보 사용에 대한 동의)</h3>
                    <p>
                        1. 회원의 개인정보는 공공기관의 개인정보보호에 관한 법률에 의해 보호됩니다.<br/>
                        2. 회사의 회원 정보는 다음과 같이 수집, 사용, 관리, 보호됩니다.<br/>
                        &nbsp;&nbsp;① 개인정보의 수집 : 회사는 귀하의 서비스 가입시 귀하가 제공하는 정보를 통하여 귀하에 관한 정보를 수집합니다.<br/>
                        &nbsp;&nbsp;② 개인정보의 사용 : 회사는 서비스 제공과 관련해서 수집된 회원의 신상정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우 또는 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우, 귀하가 회사에 제공한 개인정보를 스스로 공개한 경우에는 그러하지 않습니다.<br/>
                        &nbsp;&nbsp;③ 개인정보의 관리 : 귀하는 개인정보의 보호 및 관리를 위하여 서비스의 개인정보관리에서 수시로 귀하의 개인정보를 수정/삭제할 수 있습니다.<br/>
                        &nbsp;&nbsp;④ 개인정보의 보호 : 귀하의 개인정보는 오직 귀하만이 열람/수정/삭제 할 수 있으며, 이는 전적으로 귀하의 ID와 비밀번호에 의해 관리되고 있습니다. 따라서 타인에게 본인의 ID와 비밀번호를 알려주어서는 안 되며, 작업 종료 시에는 반드시 로그아웃해주시기 바랍니다.<br/>
                        3. 회원이 본 약관에 따라 이용신청을 하는 것은, 회사가 신청서에 기재된 회원정보를 수집, 이용하는 것에 동의하는 것으로 간주됩니다.
                    </p>
                </section>

                 <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 6 조 (사용자의 정보 보안)</h3>
                    <p>
                        1. 가입 신청자가 회사 서비스 가입 절차를 완료하는 순간부터 귀하는 입력한 정보의 비밀을 유지할 책임이 있으며, 회원의 ID와 비밀번호를 사용하여 발생하는 모든 결과에 대한 책임은 회원 본인에게 있습니다.<br/>
                        2. ID와 비밀번호에 관한 모든 관리의 책임은 회원에게 있으며, 회원의 ID나 비밀번호가 부정하게 사용되었다는 사실을 발견한 경우에는 즉시 회사에 신고하여야 합니다. 신고를 하지 않음으로 인한 모든 책임은 회원 본인에게 있습니다.<br/>
                        3. 이용자는 서비스의 사용 종료 시마다 정확히 접속을 종료해야 하며, 정확히 종료하지 아니함으로써 제3자가 귀하의 정보를 도용하는 등의 결과를 초래하더라도 회사는 없음을 알려드립니다.
                    </p>
                </section>
                
                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 7 조 (서비스 이용시간)</h3>
                    <p>
                        1. 서비스 이용시간은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.<br/>
                        2. 제1항의 이용시간은 정기점검 등의 필요로 인하여 회사가 정한 날 또는 시간은 예외로 합니다.
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 8 조 (서비스의 중지 및 정보의 저장과 사용)</h3>
                    <p>
                       1. 귀하는 회사 서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의 내용이 국가의 비상사태, 정전, 회사의 관리 범위 외의 서비스 설비 장애 및 기타 불가항력에 의하여 보관되지 못하였거나 삭제된 경우, 전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에 회사는 관련 책임을 지지 않음을 동의합니다.<br/>
                       2. 회사가 정상적인 서비스 제공의 어려움으로 인하여 일시적으로 서비스를 중지하여야 할 경우에는 서비스 중지 1주일 전의 고지 후 서비스를 중지할 수 있으며, 이 기간 동안 귀하가 고지 내용을 인지하지 못한 데 대하여 회사는 책임을 부담하지 아니합니다. 부득이한 사정이 있을 경우 위 사전 고지기간은 감축되거나 생략될 수 있습니다. 또한 위 서비스 중지에 의하여 본 서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의 내용이 보관되지 못하였거나 삭제된 경우, 전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에 대하여도 회사는 책임을 부담하지 아니합니다.
                    </p>
                </section>

                 <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 9 조 (회사의 의무)</h3>
                    <p>
                        1. 회사는 특별한 사정이 없는 한 이용자가 신청한 서비스 제공 개시일에 서비스를 이용할 수 있도록 합니다.<br/>
                        2. 회사는 이 약관에서 정한 바에 따라 계속적, 안정적으로 서비스를 제공할 의무가 있습니다.<br/>
                        3. 회사는 이용자의 개인 신상 정보를 본인의 승낙 없이 타인에게 누설, 배포하지 않습니다. 다만, 전기통신관련법령 등 관계법령에 의하여 관계 국가기관 등의 요구가 있는 경우에는 그러하지 아니합니다.
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 10 조 (회원의 의무)</h3>
                    <p>
                        1. 회원은 서비스를 이용할 때 다음 각 호의 행위를 하지 않아야 합니다.<br/>
                        &nbsp;&nbsp;가. 다른 회원의 ID를 부정하게 사용하는 행위<br/>
                        &nbsp;&nbsp;나. 서비스에서 얻은 정보를 회사의 사전승낙 없이 회원의 이용 이외의 목적으로 복제하거나 이를 출판 및 방송 등에 사용하거나 제3자에게 제공하는 행위<br/>
                        &nbsp;&nbsp;다. 회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위<br/>
                        &nbsp;&nbsp;라. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행위<br/>
                        &nbsp;&nbsp;마. 범죄와 결부된다고 객관적으로 판단되는 행위<br/>
                        &nbsp;&nbsp;바. 기타 관계법령에 위배되는 행위<br/>
                        2. 회원은 이 약관에서 규정하는 사항과 서비스 이용안내 또는 주의사항을 준수하여야 합니다.<br/>
                        3. 회원은 내용별로 회사가 서비스 공지사항에 게시하거나 별도로 공지한 이용제한 사항을 준수하여야 합니다.<br/>
                        4. 회원은 회사의 사전 승낙 없이는 서비스를 이용하여 영업활동을 할 수 없으며, 영업활동의 결과와 회원이 약관에 위반한 영업활동을 이용하여 발생한 결과에 대하여 회사는 책임을 지지 않습니다.
                    </p>
                </section>

                 <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 11 조 (계약해지 및 이용제한)</h3>
                    <p>
                        1. 회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 온라인을 통해 회사에 해지 신청을 하여야 합니다.<br/>
                        2. 회사는 회원이 다음 각 호의 1에 해당하는 행위를 하였을 경우 사전통지 없이 이용계약을 해지하거나 또는 기간을 정하여 서비스 이용을 중지할 수 있습니다.<br/>
                        &nbsp;&nbsp;가. 타인의 ID 및 비밀번호를 도용한 경우<br/>
                        &nbsp;&nbsp;나. 서비스 운영을 고의로 방해한 경우<br/>
                        &nbsp;&nbsp;다. 가입한 이름이 실명이 아닌 경우<br/>
                        &nbsp;&nbsp;라. 같은 사용자가 다른 ID로 이중등록을 한 경우<br/>
                        &nbsp;&nbsp;마. 공공질서 및 미풍양속에 저해되는 내용을 고의로 유포시킨 경우<br/>
                        &nbsp;&nbsp;바. 회원이 국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행하는 경우<br/>
                        &nbsp;&nbsp;사. 타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우<br/>
                        &nbsp;&nbsp;아. 기타 회사가 정한 이용조건에 위반한 경우
                    </p>
                </section>
                
                 <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">제 12 조 (관할법원)</h3>
                    <p>본 서비스 이용과 관련하여 발생한 분쟁에 대해 소송이 제기될 경우 (주)허브메카 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.</p>
                </section>
                
                 <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">부칙</h3>
                    <p>(시행일) 본 약관은 2024년 1월 1일부터 시행됩니다.</p>
                </section>

              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Agreement;