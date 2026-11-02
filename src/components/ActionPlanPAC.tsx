import React, { useState } from 'react';
import { Language, PacProject } from '../types/portal';
import { pacProjects } from '../data/portalData';
import { MoroccanStar, MoroccanFriezeDivider } from './MoroccanMotifs';
import { 
  Building, 
  Coins, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Sparkles,
  Layers
} from 'lucide-react';

interface ActionPlanPACProps {
  lang: Language;
}

export const ActionPlanPAC: React.FC<ActionPlanPACProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ongoing' | 'completed'>('all');

  const filteredProjects = pacProjects.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.status === selectedFilter;
  });

  return (
    <section id="pac" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
            <MoroccanStar size={12} />
            <span>{isAr ? 'الشفافية والتنمية التشاركية' : 'Développement Participatif & PAC'}</span>
            <MoroccanStar size={12} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight text-balance">
            {isAr ? 'برنامج عمل جماعة تارودانت 2023 - 2028' : 'Plan d\'Action Communal (PAC 2023 - 2028)'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {isAr
              ? 'وثيقة التخطيط الاستراتيجي لتنمية المدينة، صيانة تراثها العريق، وتحسين جودة عيش الساكنة بشراكة مع الفاعلين المؤسساتيين.'
              : 'La feuille de route stratégique pour moderniser les infrastructures urbaines, valoriser le patrimoine et hisser la qualité de vie des habitants.'}
          </p>
          <MoroccanFriezeDivider className="my-5" />
        </div>

        {/* Feature Showcase Banner with Communal Action Plan & Municipal Palace */}
        <div className="mb-12 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-900 font-semibold mb-3">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>{isAr ? 'المشروع النموذجي المهيكل' : 'Projet Phare Structurant'}</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>2024 - 2026</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                {isAr
                  ? 'تهيئة الساحات الحضرية والواحة البيئية المستدامة لتارودانت'
                  : 'Aménagement des Plazas Urbaines & de l\'Oasis Durable de Taroudant'}
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                {isAr
                  ? 'مشروع يجمع بين احترام الخصوصية المعمارية الطينية السوسية، وتوفير فضاءات عمومية خضراء مجهزة بالإنارة الشمسية، ممرات الراجلين، ومقاعد الاستراحة العائلية في انسجام مع أسوار المدينة.'
                  : 'Un projet d\'envergure mariant l\'architecture traditionnelle en pisé, les espaces verts irrigués par eaux recyclées, l\'éclairage solaire et les cheminements piétons conviviaux.'}
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-stone-500 block mb-0.5">{isAr ? 'الاعتماد المالي' : 'Budget global'}</span>
                <span className="text-base font-bold text-amber-900 font-mono tabular-nums">21.5 M DH</span>
              </div>
              <div>
                <span className="text-stone-500 block mb-0.5">{isAr ? 'نسبة الإنجاز' : 'Taux d\'avancement'}</span>
                <span className="text-base font-bold text-emerald-800 font-mono tabular-nums">78%</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-stone-500 block mb-0.5">{isAr ? 'الشريك التقني' : 'Partenaire'}</span>
                <span className="font-semibold text-stone-800 truncate block">
                  {isAr ? 'جهة سوس ماسة' : 'Région Souss-Massa'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] max-h-[320px] lg:max-h-none bg-stone-900 overflow-hidden">
            <img
              src="/assets/aistudio/__________________________________________________________cced9d47.jpg"
              alt="برنامج عمل جماعة تارودانت 2023-2028 - قصر بلدية تارودانت"
              className="w-full h-full object-cover object-top filter brightness-95"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-4 sm:p-5">
              <span className="text-[11px] sm:text-xs text-amber-100 bg-stone-900/85 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-amber-500/30 w-fit leading-tight">
                {isAr ? 'الوثيقة الرسمية: برنامج عمل جماعة تارودانت 2023-2028' : 'Document officiel : Plan d\'Action Communal 2023-2028'}
              </span>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Strip below showcase (frontend-design §5.13) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-xl border border-stone-200">
            <div className="flex items-center justify-between text-amber-800 mb-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                {isAr ? 'الميزانية الإجمالية' : 'Budget Global PAC'}
              </span>
              <Coins className="w-4 h-4" />
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-stone-900">94.3 M DH</div>
            <div className="mt-1 text-[11px] text-stone-500">
              {isAr ? 'مشاريع ممولة ومعتمدة' : 'Engagés & sécurisés'}
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200">
            <div className="flex items-center justify-between text-emerald-800 mb-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                {isAr ? 'معدل التنفيذ' : 'Taux Moyen Réalisé'}
              </span>
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-stone-900">72.4%</div>
            <div className="mt-1 text-[11px] text-stone-500">
              {isAr ? 'تقدّم الأشغال الميدانية' : 'Avancement physique'}
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200">
            <div className="flex items-center justify-between text-amber-800 mb-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                {isAr ? 'المشاريع المهيكلة' : 'Projets Structurants'}
              </span>
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-stone-900">18 مشروعاً</div>
            <div className="mt-1 text-[11px] text-stone-500">
              {isAr ? 'تغطي مختلف الأحياء' : 'Sur tous les arrondissements'}
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200">
            <div className="flex items-center justify-between text-stone-700 mb-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                {isAr ? 'الشركاء المؤسساتيون' : 'Partenaires Clés'}
              </span>
              <Users className="w-4 h-4" />
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-stone-900">7 مؤسسات</div>
            <div className="mt-1 text-[11px] text-stone-500">
              {isAr ? 'وزارات وهيئات جهوية' : 'Ministères & Région'}
            </div>
          </div>
        </div>

        {/* Filter Tabs for Projects */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-amber-900 text-white'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {isAr ? 'جميع المشاريع' : 'Tous les chantiers'}
            </button>
            <button
              onClick={() => setSelectedFilter('ongoing')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'ongoing'
                  ? 'bg-amber-900 text-white'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {isAr ? 'قيد الإنجاز' : 'En cours'}
            </button>
            <button
              onClick={() => setSelectedFilter('completed')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'completed'
                  ? 'bg-amber-900 text-white'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {isAr ? 'مكتملة ومستلمة' : 'Achevés'}
            </button>
          </div>

          <div className="text-xs text-stone-500 font-medium">
            {isAr ? 'البيانات محينة لشهر أكتوبر 2026' : 'Données actualisées en Octobre 2026'}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:border-amber-700/50 transition-all shadow-sm"
            >
              <div>
                {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-amber-900">{isAr ? project.categoryAr : project.categoryFr}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isAr ? project.statusAr : project.statusFr}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-stone-900 mb-2 leading-snug">
                  {isAr ? project.titleAr : project.titleFr}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {isAr ? project.descriptionAr : project.descriptionFr}
                </p>
              </div>

              {/* Progress and Budget Section */}
              <div className="mt-6 pt-4 border-t border-stone-100">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-stone-600">{isAr ? 'نسبة تقدم الأشغال:' : 'Avancement :'}</span>
                  <span className="font-bold font-mono tabular-nums text-amber-900">{project.completionRate}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-amber-800 transition-all duration-500 rounded-full"
                    style={{ width: `${project.completionRate}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="truncate">
                    {isAr ? `الشريك: ${project.partnerAr}` : `Partenaire: ${project.partnerFr}`}
                  </span>
                  <span className="font-mono tabular-nums font-bold text-stone-900 shrink-0">
                    {project.budget}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
