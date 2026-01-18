import React from 'react';
import { useTranslations } from 'next-intl';

interface SEOEnrichedPaymentProps {
  paymentName: string;
  description: string;
  advantages: string[];
  casinoCount: number;
  translationNamespace?: string;
}

const SEOEnrichedPayment: React.FC<SEOEnrichedPaymentProps> = ({
  paymentName,
  description,
  advantages,
  casinoCount,
  translationNamespace = 'SEOEnrichedPayment'
}) => {
  const t = useTranslations(translationNamespace);
  return (
    <section 
      id="payment-enriched-content" 
      className="max-w-7xl mx-auto px-4 py-12 mt-12 bg-muted/20 border-t"
      style={{ fontSize: '14px', lineHeight: '1.6' }}
    >
      {/* Expert Section */}
      <div className="bg-card border border-border rounded-lg p-5 mb-10 flex items-start gap-3">
        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">
          AM
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-1">Alexandre Martin</h3>
          <p className="text-sm text-muted-foreground">
            {t('expert.title', { paymentName })}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {t('expert.updated', { date: new Date().toLocaleDateString('fr-FR'), count: casinoCount })}
          </p>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="mb-10 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">{t('detailedAnalysis.title', { paymentName })}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t('detailedAnalysis.p1', { description, paymentName, casinoCount })}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t('detailedAnalysis.p2', { paymentName })}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">{t('advantages.title', { paymentName })}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-card border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">→</strong> {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">{t('stepByStep.title')}</h3>
          <div className="space-y-3">
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                {t('stepByStep.step1.title', { paymentName })}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('stepByStep.step1.description', { paymentName })}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                {t('stepByStep.step2.title')}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('stepByStep.step2.description', { paymentName })}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                {t('stepByStep.step3.title')}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('stepByStep.step3.description', { paymentName })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Payment */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-foreground mb-5">{t('faq.title', { paymentName })}</h3>
        
        <div className="space-y-3">
          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors text-sm">
              {t('faq.q1.question', { paymentName })}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q1.answer', { paymentName })}
            </div>
          </details>

          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors text-sm">
              {t('faq.q2.question', { paymentName })}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q2.answer', { paymentName })}
            </div>
          </details>

          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors text-sm">
              {t('faq.q3.question', { paymentName })}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q3.answer', { paymentName })}
            </div>
          </details>

          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors text-sm">
              {t('faq.q4.question', { paymentName })}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q4.answer', { paymentName })}
            </div>
          </details>

          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors text-sm">
              {t('faq.q5.question', { paymentName, casinoCount })}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q5.answer', { paymentName, casinoCount })}
            </div>
          </details>

          <details className="bg-card border border-border rounded-lg p-4">
            <summary className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors text-sm">
              {t('faq.q6.question', { paymentName })}
            </summary>
            <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t('faq.q6.answer', { paymentName })}
            </div>
          </details>
        </div>
      </div>

      {/* Related Links */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-4">{t('relatedMethods.title')}</h3>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-card border border-border rounded-lg p-3">
            <h4 className="font-medium text-foreground text-sm mb-2">{t('relatedMethods.ewallets')}</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• <a href="/depot/skrill" className="hover:text-primary">Skrill</a></li>
              <li>• <a href="/depot/neteller" className="hover:text-primary">Neteller</a></li>
              <li>• <a href="/depot/mifinity" className="hover:text-primary">MiFinity</a></li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-3">
            <h4 className="font-medium text-foreground text-sm mb-2">{t('relatedMethods.crypto')}</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• <a href="/depot/crypto" className="hover:text-primary">Bitcoin (BTC)</a></li>
              <li>• <a href="/depot/crypto" className="hover:text-primary">Ethereum (ETH)</a></li>
              <li>• <a href="/depot/crypto" className="hover:text-primary">USDT (Tether)</a></li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-3">
            <h4 className="font-medium text-foreground text-sm mb-2">{t('relatedMethods.prepaid')}</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• <a href="/depot/paysafecard" className="hover:text-primary">Paysafecard</a></li>
              <li>• <a href="/depot/neosurf" className="hover:text-primary">Neosurf</a></li>
              <li>• <a href="/depot/cashlib" className="hover:text-primary">Cashlib</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-5 text-center">
        <h3 className="text-lg font-bold text-foreground mb-2">
          {t('cta.title', { paymentName })}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {t('cta.description', { casinoCount, paymentName })}
        </p>
        <a 
          href="#top-casinos"
          className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          {t('cta.button')}
        </a>
      </div>
    </section>
  );
};

export default SEOEnrichedPayment;
