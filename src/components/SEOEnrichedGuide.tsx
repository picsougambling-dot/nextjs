import React from 'react';
import { useTranslations } from 'next-intl';

interface SEOEnrichedGuideProps {
  topCasinos: Array<{ name: string; slug: string; bonus: string; rating: number }>;
  locale: string;
  guideName?: string;
  description?: string;
}

const SEOEnrichedGuide: React.FC<SEOEnrichedGuideProps> = ({
  topCasinos,
  locale,
  guideName: propGuideName,
  description: propDescription
}) => {
  const t = useTranslations('seoGuide');
  const tCasinoCard = useTranslations('CasinoCard');
  const guideName = propGuideName || t('guideName');
  const description = propDescription || t('description');
  
  const formatBonusText = (bonusText: string): string => {
    // Extraire les valeurs du texte de bonus
    // Format: "100% jusqu'à 1 000€ + 100 FS" ou "200% jusqu'à 500€"
    const match = bonusText.match(/(\d+)%\s+jusqu'à\s+([\d\s]+)€(?:\s+\+\s+(\d+)\s+FS)?/);
    if (match) {
      const percent = match[1];
      const amount = match[2].replace(/\s/g, '');
      const freeSpins = match[3];
      
      if (freeSpins) {
        return tCasinoCard('bonusText.withFreeSpins', { percent, amount, freeSpins });
      } else {
        return tCasinoCard('bonusText.withoutFreeSpins', { percent, amount });
      }
    }
    // Si le format ne correspond pas, retourner le texte original
    return bonusText;
  };
  return (
    <section 
      id="guide-enriched-content" 
      className="max-w-7xl mx-auto px-4 py-14 mt-14 bg-muted/20 border-t"
      style={{ fontSize: '14px', lineHeight: '1.6' }}
    >
      {/* Expert Author */}
      <div className="bg-card border border-border rounded-lg p-5 mb-10 flex items-start gap-3">
        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">
          {t('expert.initials')}
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-1">{t('expert.name')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('expert.title')} • {t('expert.experience')} • {t('expert.specialist')} {guideName}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {t('expert.updated')} {new Date().toLocaleDateString(locale)} • {t('expert.basedOn')}
          </p>
        </div>
      </div>

      {/* Comparative Table */}
      <div className="mb-12 overflow-x-auto">
        <h3 className="text-xl font-semibold text-foreground mb-5">📊 {t('table.title')} {guideName}</h3>
        <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="p-3 text-left font-semibold">{t('table.casino')}</th>
              <th className="p-3 text-left font-semibold">{t('table.bonus')}</th>
              <th className="p-3 text-left font-semibold">{t('table.rating')}</th>
              <th className="p-3 text-left font-semibold">{t('table.action')}</th>
            </tr>
          </thead>
          <tbody>
            {topCasinos.map((casino, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                <td className="p-3 font-medium text-foreground">{casino.name}</td>
                <td className="p-3 text-muted-foreground text-sm">{formatBonusText(casino.bonus)}</td>
                <td className="p-3 font-bold text-primary">{casino.rating}/10</td>
                <td className="p-3">
                  <a href={`/${casino.slug}`} className="text-primary hover:underline text-sm">
                    → {t('table.viewOffer')}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Analysis */}
      <div className="mb-12 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">🔍 {t('analysis.title')}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description} {t('analysis.p1')}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t('analysis.p2')}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">💡 {t('recommendations.title')}</h3>
          <div className="space-y-3">
            <div className="bg-card border-l-4 border-primary p-4 rounded-r-lg">
              <h4 className="font-semibold text-foreground mb-2">🥇 {t('recommendations.bestOverall.title')}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {topCasinos[0]?.name} {t('recommendations.bestOverall.description', {
                  bonus: topCasinos[0] ? formatBonusText(topCasinos[0].bonus) : '',
                  rating: topCasinos[0]?.rating
                })}
              </p>
            </div>
            
            <div className="bg-card border-l-4 border-primary/60 p-4 rounded-r-lg">
              <h4 className="font-semibold text-foreground mb-2">🎁 {t('recommendations.bestBonus.title')}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {topCasinos[1]?.name} {t('recommendations.bestBonus.description', {
                  bonus: topCasinos[1] ? formatBonusText(topCasinos[1].bonus) : ''
                })}
              </p>
            </div>
            
            <div className="bg-card border-l-4 border-primary/40 p-4 rounded-r-lg">
              <h4 className="font-semibold text-foreground mb-2">⚡ {t('recommendations.fastestWithdrawals.title')}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {topCasinos[2]?.name} {t('recommendations.fastestWithdrawals.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Guide */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-foreground mb-5">❓ {t('faq.title')} {guideName}</h3>
        
        <div className="space-y-3">
          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors">
              {t('faq.q1.question', { guideName: guideName.toLowerCase() })}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q1.answer')}
            </div>
          </details>

          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors">
              {t('faq.q2.question', { guideName: guideName.toLowerCase() })}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q2.answer')}
            </div>
          </details>

          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors">
              {t('faq.q3.question')}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q3.answer')}
            </div>
          </details>

          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors">
              {t('faq.q4.question')}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q4.answer')}
            </div>
          </details>
        </div>
      </div>

      {/* Internal Links */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-4">🔗 {t('complementaryLinks.title')}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground text-sm mb-3">💰 {t('complementaryLinks.bonusSection.title')}</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• <a href="/bonus-cashback" className="hover:text-primary">{t('complementaryLinks.bonusSection.link1')}</a></li>
              <li>• <a href="/bonus-sans-wager" className="hover:text-primary">{t('complementaryLinks.bonusSection.link2')}</a></li>
              <li>• <a href="/astuces-casino" className="hover:text-primary">{t('complementaryLinks.bonusSection.link3')}</a></li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground text-sm mb-3">💳 {t('complementaryLinks.paymentSection.title')}</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• <a href="/depot/crypto" className="hover:text-primary">{t('complementaryLinks.paymentSection.link1')}</a></li>
              <li>• <a href="/depot/skrill" className="hover:text-primary">{t('complementaryLinks.paymentSection.link2')}</a></li>
              <li>• <a href="/depot/paysafecard" className="hover:text-primary">{t('complementaryLinks.paymentSection.link3')}</a></li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground text-sm mb-3">🎰 {t('complementaryLinks.topCasinos.title')}</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {topCasinos.slice(0, 3).map((casino, i) => (
                <li key={i}>• <a href={`/${casino.slug}`} className="hover:text-primary">{casino.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-5 text-center">
        <h3 className="text-lg font-bold text-foreground mb-2">
          🎯 {t('cta.title')}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {t('cta.description', { count: topCasinos.length, guideName: guideName.toLowerCase() })}
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {topCasinos.slice(0, 3).map((casino, i) => (
            <a 
              key={i}
              href={`/${casino.slug}`}
              className="inline-block bg-primary text-primary-foreground font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              {casino.name} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOEnrichedGuide;
