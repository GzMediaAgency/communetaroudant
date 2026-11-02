import React from 'react';
import { Language } from '../types/portal';
import { MoroccanKingdomCrest, MoroccanStar } from './MoroccanMotifs';
import { X, Users, Award, Shield, Handshake, CheckCircle2, BookOpen } from 'lucide-react';

export type InstitutionalTopic = 'powers' | 'council_board' | 'charter' | 'cooperation' | 'participatory_budget';

interface InstitutionalModalProps {
  topic: InstitutionalTopic;
  lang: Language;
  onClose: () => void;
  onOpenComplaint?: () => void;
}

export const InstitutionalModal: React.FC<InstitutionalModalProps> = ({
  topic,
  lang,
  onClose,
  onOpenComplaint
}) => {
  const isAr = lang === 'ar';

  const getContent = () => {
    switch (topic) {
      case 'powers':
        return {
          titleAr: 'اختصاصات جماعة تارودانت وفق القانون التنظيمي 113.14',
          titleFr: 'Compétences de la Commune selon la Loi Organique 113.14',
          icon: Shield,
          subtitleAr: 'الإطار القانوني لصلاحيات المجلس الجماعي في تدبير الشأن المحلي',
          subtitleFr: 'Cadre légal des prérogatives communales',
          sections: [
            {
              headingAr: '1. الاختصاصات الذاتية (Compétences Propres)',
              headingFr: '1. Compétences Propres',
              itemsAr: [
                'إعداد وتتبع تنفيذ برنامج عمل الجماعة (PAC).',
                'المرافق العمومية الجماعية: توزيع الماء الصالح للشرب والكهرباء، التطهير السائل والصلب، ومحطة معالجة المياه.',
                'الإنارة العمومية وصيانة شبكات الطرق والأرصفة والمساحات الخضراء.',
                'تنظيم ومراقبة أسواق الجملة والأسواق الأسبوعية والمحلات التجارية والمجازر الجماعية.',
                'مكاتب حفظ الصحة، مراقبة المواد الغذائية والوقاية الصحية الحضرية.'
              ],
              itemsFr: [
                'Élaboration et suivi du Plan d\'Action Communal (PAC).',
                'Gestion des services publics : eau, électricité, assainissement et éclairage public.',
                'Entretien de la voirie communale, places publiques et espaces verts.',
                'Organisation et gestion des marchés, abattoirs municipaux et foires.',
                'Police administrative, salubrité et bureau d\'hygiène municipal.'
              ]
            },
            {
              headingAr: '2. الاختصاصات المشتركة مع الدولة (Compétences Partagées)',
              headingFr: '2. Compétences Partagées avec l\'État',
              itemsAr: [
                'تأهيل وحماية التراث المعماري والثقافي وصيانة أسوار تارودانت التاريخية.',
                'تنمية الاقتصاد المحلي ودعم مقاولات القرب والصناعة التقليدية بالسوس.',
                'إحداث وصيانة المراكز الثقافية، دور الشباب، والمركبات الرياضية الجماعية.'
              ],
              itemsFr: [
                'Restauration et préservation du patrimoine historique et des remparts.',
                'Promotion du développement économique local et de l\'artisanat.',
                'Création d\'infrastructures sportives, culturelles et socio-éducatives.'
              ]
            }
          ]
        };

      case 'council_board':
        return {
          titleAr: 'تشكيلة وهيكلة المجلس الجماعي لتارودانت',
          titleFr: 'Composition et Organes du Conseil Communal',
          icon: Users,
          subtitleAr: 'الهيئة المنتخبة لتمثيل ساكنة المدينة (الانتداب 2021 - 2027)',
          subtitleFr: 'Instance élue représentative des citoyens',
          sections: [
            {
              headingAr: 'مكتب المجلس الجماعي (Bureau du Conseil)',
              headingFr: 'Bureau du Conseil Communal',
              itemsAr: [
                'رئاسة المجلس الجماعي لتارودانت: الإشراف العام وتنفيذ المقررات.',
                'النائب الأول للرئيس: مكلف بالتعمير والممتلكات والتهيئة الحضرية.',
                'النائب الثاني: مكلف بالميزانية والشؤون المالية والمنازعات.',
                'النائب الثالث: مكلف بالشؤون الثقافية والرياضية والشباب والتراث.',
                'النائب الرابع: مكلف بالمرافق العمومية، الإنارة، والنظافة وتدبير الآليات.',
                'النائب الخامس: مكلفة بالشؤون الاجتماعية وهيئة المساواة ومقاربة النوع.'
              ],
              itemsFr: [
                'Présidence du Conseil Communal : Coordination générale et exécution des délibérations.',
                '1er Vice-Président : Urbanisme, patrimoine et aménagement urbain.',
                '2ème Vice-Président : Budget, fiscalité locale et affaires juridiques.',
                '3ème Vice-Président : Affaires culturelles, patrimoine historique et jeunesse.',
                '4ème Vice-Président : Services publics, éclairage, propreté et régies.',
                '5ème Vice-Présidente : Affaires sociales et parité.'
              ]
            },
            {
              headingAr: 'اللجان الدائمة بالمجلس (Commissions Permanentes)',
              headingFr: 'Commissions Permanentes',
              itemsAr: [
                'لجنة الميزانية والشؤون المالية والبرمجة.',
                'لجنة المرافق العمومية والخدمات والتنمية المجالية.',
                'لجنة التنمية البشرية والشؤون الاجتماعية والثقافية والرياضية.',
                'هيئة المساواة وتكافؤ الفرص ومقاربة النوع (الهيئة الاستشارية للمجتمع المدني).'
              ],
              itemsFr: [
                'Commission des finances, du budget et de la programmation.',
                'Commission des services publics et du développement territorial.',
                'Commission du développement humain, culture et affaires sociales.',
                'Instance consultative de l\'Équité, de l\'Égalité des Chances et du Genre.'
              ]
            }
          ]
        };

      case 'charter':
        return {
          titleAr: 'ميثاق المشاركة المواطنة لجماعة تارودانت',
          titleFr: 'Charte de Participation Citoyenne de Taroudant',
          icon: BookOpen,
          subtitleAr: 'ترسيخ الديمقراطية التشاركية والحق الدستوري في تقديم العرائض والمقترحات',
          subtitleFr: 'Démocratie participative et droit de pétition citoyenne',
          sections: [
            {
              headingAr: 'مبادئ وأهداف الميثاق التشاركي',
              headingFr: 'Principes directeurs de la Charte',
              itemsAr: [
                'إشراك المواطنات والمواطنين وجمعيات المجتمع المدني في إعداد وتتبع برنامج عمل الجماعة.',
                'تفعيل حق تقديم العرائض الشعبية للمجلس الجماعي لإدراج نقط في جدول أعمال الدورات.',
                'ضمان الشفافية والحق في الولوج إلى المعلومة والوثائق الإدارية والميزانية الجماعية.',
                'عقد لقاءات تشاورية دورية بمختلف أحياء تارودانت للاستماع المباشر لانشغالات الساكنة.'
              ],
              itemsFr: [
                'Implication active des citoyens et du tissu associatif dans le suivi du PAC.',
                'Exercice garanti du droit de pétition pour inscrire des points à l\'ordre du jour.',
                'Accès garanti à l\'information municipale et aux données budgétaires ouvertes.',
                'Tenue de réunions publiques de concertation dans tous les quartiers de la ville.'
              ]
            }
          ]
        };

      case 'cooperation':
        return {
          titleAr: 'التعاون والشراكات اللامركزية والدولية',
          titleFr: 'Coopération Décentralisée & Partenariats Internationaux',
          icon: Handshake,
          subtitleAr: 'علاقات التعاون المؤسساتي لتارودانت مع المدن الشقيقة والمنظمات الدولية',
          subtitleFr: 'Rayonnement territorial et conventions bilatérales',
          sections: [
            {
              headingAr: 'أبرز اتفاقيات التعاون اللامركزي (Conventions & Jumelages)',
              headingFr: 'Conventions & Jumelages Historiques',
              itemsAr: [
                'اتفاقية توأمة وتعاون ثقافي مع مدينة رومان-سور-إيزير (Romans-sur-Isère) الفرنسية في مجال حماية التراث وصناعة الجلود.',
                'شراكة إستراتيجية مع جهة سوس ماسة في إطار صندوق التنمية القروية والحضرية وتأهيل المدينة العتيقة.',
                'اتفاقيات تعاون مع الوكالة الوطنية لإنعاش التشغيل والكفاءات (ANAPEC) لتمكين شباب وخريجي الإقليم.',
                'شراكة مع المديرية العامة للجماعات الترابية (DGCT) لتمويل مشاريع التحول الرقمي والحكامة الذكية.'
              ],
              itemsFr: [
                'Jumelage et coopération patrimoniale avec la ville de Romans-sur-Isère (France) sur le cuir et la cordonnerie.',
                'Partenariat stratégique avec le Conseil Régional Souss-Massa pour la mise à niveau urbaine.',
                'Conventions d\'insertion professionnelle avec l\'ANAPEC pour l\'employabilité des jeunes du Souss.',
                'Partenariat avec la DGCT pour le financement de la transition numérique communale.'
              ]
            }
          ]
        };

      case 'participatory_budget':
        return {
          titleAr: 'الميزانية التشاركية لساكنة تارودانت',
          titleFr: 'Budget Participatif de la Commune de Taroudant',
          icon: Award,
          subtitleAr: 'تخصيص جزء من الاستثمار الجماعي للمشاريع المقترحة والمصوت عليها من طرف المواطنين',
          subtitleFr: 'Co-décision citoyenne sur les investissements de proximité',
          sections: [
            {
              headingAr: 'كيف تعمل الميزانية التشاركية؟',
              headingFr: 'Fonctionnement du Budget Participatif',
              itemsAr: [
                'تخصيص غلاف مالي سنوي لمشاريع القرب في الأحياء (حدائق ألعاب، ملاعب قرب، إنارة شمسية، تهيئة ممرات الراجلين).',
                'إيداع مقترحات المشاريع من طرف المواطنين ووداديات الأحياء عبر البوابة الرقمية أو مكاتب المقاطعات.',
                'الدراسة التقنية والمالية للمقترحات من طرف المصالح الجماعية للتأكد من جدواها ومطابقتها.',
                'تصويت عمومي للساكنة لاختيار المشاريع ذات الأولوية وبرمجتها رسمياً في ميزانية السنة القادمة.'
              ],
              itemsFr: [
                'Allocation d\'une enveloppe budgétaire dédiée aux projets de proximité proposés par les riverains.',
                'Dépôt des initiatives citoyennes via le portail ou auprès des arrondissements.',
                'Instruction technique et budgétaire par les ingénieurs municipaux.',
                'Vote citoyen ouvert pour retenir les projets prioritaires financés par la commune.'
              ]
            }
          ]
        };
    }
  };

  const data = getContent();
  const Icon = data.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-[#FAF7F2] rounded-2xl border border-stone-300 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden text-stone-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-600/30 text-amber-300 rounded-lg">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-amber-300 font-mono tracking-wider">
                {isAr ? 'الجماعة الترابية لتارودانت' : 'Commune de Taroudant'}
              </div>
              <h3 className="text-base sm:text-lg font-bold font-serif leading-snug">
                {isAr ? data.titleAr : data.titleFr}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subtitle Banner */}
        <div className="bg-amber-50 px-6 py-2.5 border-b border-amber-200 text-xs font-semibold text-amber-950 flex items-center gap-2">
          <MoroccanStar size={12} className="text-amber-800" />
          <span>{isAr ? data.subtitleAr : data.subtitleFr}</span>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {data.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-3">
              <h4 className="text-sm font-bold text-stone-900 font-serif border-b border-stone-200 pb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-amber-800 rounded-full" />
                <span>{isAr ? section.headingAr : section.headingFr}</span>
              </h4>

              <div className="space-y-2">
                {(isAr ? section.itemsAr : section.itemsFr).map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 bg-white p-3 rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Quick CTA to participate or contact */}
          {onOpenComplaint && (
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-stone-600">
                {isAr ? 'هل لديك مقترح أو استفسار يخص هذا الموضوع؟' : 'Avez-vous une proposition citoyenne à soumettre ?'}
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenComplaint();
                }}
                className="px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                {isAr ? 'إيداع مقترح للمجلس' : 'Déposer une proposition'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
