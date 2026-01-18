#!/usr/bin/env python3
"""
Script de correction des problèmes SEO pour Gigabonus.win
Basé sur l'audit Ahrefs du 02/01/2026
"""

import requests
import xml.etree.ElementTree as ET
from urllib.parse import urlparse, urljoin
from bs4 import BeautifulSoup
import json
from collections import defaultdict
import time

class SEOAuditor:
    def __init__(self, base_url):
        self.base_url = base_url
        self.issues = defaultdict(list)
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (SEO Audit Bot)'
        })
    
    def check_500_pages(self, urls):
        """Vérifier les pages 500"""
        print("\n🔍 Vérification des erreurs 500...")
        for url in urls:
            try:
                response = self.session.get(url, timeout=10)
                if response.status_code >= 500:
                    self.issues['500_errors'].append({
                        'url': url,
                        'status': response.status_code
                    })
                    print(f"❌ Erreur 500 détectée: {url} (Status: {response.status_code})")
            except Exception as e:
                print(f"⚠️  Erreur lors de la vérification de {url}: {str(e)}")
            time.sleep(0.5)
    
    def check_broken_redirects(self, urls):
        """Vérifier les redirections cassées (48 trouvées)"""
        print("\n🔍 Vérification des redirections cassées...")
        for url in urls:
            try:
                response = self.session.get(url, allow_redirects=True, timeout=10)
                if response.history:
                    final_status = response.status_code
                    if final_status >= 400:
                        self.issues['broken_redirects'].append({
                            'url': url,
                            'redirect_chain': [r.url for r in response.history],
                            'final_status': final_status
                        })
                        print(f"❌ Redirection cassée: {url} → {final_status}")
            except Exception as e:
                print(f"⚠️  Erreur: {url} - {str(e)}")
            time.sleep(0.5)
    
    def check_meta_descriptions(self, urls):
        """Vérifier les meta descriptions (272 trop courtes, 93 trop longues)"""
        print("\n🔍 Vérification des meta descriptions...")
        for url in urls:
            try:
                response = self.session.get(url, timeout=10)
                if response.status_code == 200:
                    soup = BeautifulSoup(response.content, 'html.parser')
                    meta_desc = soup.find('meta', attrs={'name': 'description'})
                    
                    if meta_desc and meta_desc.get('content'):
                        content = meta_desc['content']
                        length = len(content)
                        
                        if length < 120:
                            self.issues['meta_desc_short'].append({
                                'url': url,
                                'length': length,
                                'content': content
                            })
                            print(f"⚠️  Meta description trop courte ({length} car.): {url}")
                        elif length > 160:
                            self.issues['meta_desc_long'].append({
                                'url': url,
                                'length': length,
                                'content': content[:50] + '...'
                            })
                            print(f"⚠️  Meta description trop longue ({length} car.): {url}")
                    else:
                        self.issues['meta_desc_missing'].append(url)
                        print(f"❌ Meta description manquante: {url}")
            except Exception as e:
                print(f"⚠️  Erreur: {url} - {str(e)}")
            time.sleep(0.5)
    
    def check_title_tags(self, urls):
        """Vérifier les balises title (71 trop longues)"""
        print("\n🔍 Vérification des balises title...")
        for url in urls:
            try:
                response = self.session.get(url, timeout=10)
                if response.status_code == 200:
                    soup = BeautifulSoup(response.content, 'html.parser')
                    title = soup.find('title')
                    
                    if title:
                        title_text = title.get_text()
                        length = len(title_text)
                        
                        if length > 60:
                            self.issues['title_long'].append({
                                'url': url,
                                'length': length,
                                'title': title_text
                            })
                            print(f"⚠️  Title trop long ({length} car.): {url}")
                        elif length < 30:
                            self.issues['title_short'].append({
                                'url': url,
                                'length': length,
                                'title': title_text
                            })
                            print(f"⚠️  Title trop court ({length} car.): {url}")
                    else:
                        self.issues['title_missing'].append(url)
                        print(f"❌ Title manquant: {url}")
            except Exception as e:
                print(f"⚠️  Erreur: {url} - {str(e)}")
            time.sleep(0.5)
    
    def check_canonical_urls(self, urls):
        """Vérifier les URLs canoniques (88 changées, 199 sans liens entrants)"""
        print("\n🔍 Vérification des URLs canoniques...")
        for url in urls:
            try:
                response = self.session.get(url, timeout=10)
                if response.status_code == 200:
                    soup = BeautifulSoup(response.content, 'html.parser')
                    canonical = soup.find('link', attrs={'rel': 'canonical'})
                    
                    if canonical:
                        canonical_url = canonical.get('href')
                        if canonical_url != url:
                            self.issues['canonical_mismatch'].append({
                                'url': url,
                                'canonical': canonical_url
                            })
                            print(f"⚠️  Canonical différent: {url} → {canonical_url}")
                    else:
                        self.issues['canonical_missing'].append(url)
                        print(f"❌ Canonical manquant: {url}")
            except Exception as e:
                print(f"⚠️  Erreur: {url} - {str(e)}")
            time.sleep(0.5)
    
    def check_sitemap_issues(self, sitemap_url):
        """Vérifier les problèmes de sitemap (242 pages non-canoniques, 10 pages 5XX)"""
        print("\n🔍 Vérification du sitemap...")
        try:
            response = self.session.get(sitemap_url, timeout=10)
            if response.status_code == 200:
                root = ET.fromstring(response.content)
                namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
                
                urls = root.findall('.//ns:url/ns:loc', namespace)
                print(f"📊 {len(urls)} URLs trouvées dans le sitemap")
                
                for url_elem in urls[:50]:  # Limiter pour l'exemple
                    url = url_elem.text
                    try:
                        page_response = self.session.get(url, timeout=5)
                        
                        if page_response.status_code >= 500:
                            self.issues['sitemap_5xx'].append({
                                'url': url,
                                'status': page_response.status_code
                            })
                            print(f"❌ Page 5XX dans sitemap: {url}")
                        
                        soup = BeautifulSoup(page_response.content, 'html.parser')
                        canonical = soup.find('link', attrs={'rel': 'canonical'})
                        if canonical and canonical.get('href') != url:
                            self.issues['sitemap_non_canonical'].append({
                                'url': url,
                                'canonical': canonical.get('href')
                            })
                            print(f"⚠️  Non-canonical dans sitemap: {url}")
                    except:
                        pass
                    time.sleep(0.3)
        except Exception as e:
            print(f"❌ Erreur lors de l'analyse du sitemap: {str(e)}")
    
    def generate_report(self, output_file='seo_audit_report.json'):
        """Générer un rapport JSON"""
        print("\n📝 Génération du rapport...")
        
        report = {
            'base_url': self.base_url,
            'timestamp': time.strftime('%Y-%m-%d %H:%M:%S'),
            'summary': {
                'erreurs_500': len(self.issues['500_errors']),
                'redirections_cassees': len(self.issues['broken_redirects']),
                'meta_desc_courtes': len(self.issues['meta_desc_short']),
                'meta_desc_longues': len(self.issues['meta_desc_long']),
                'meta_desc_manquantes': len(self.issues['meta_desc_missing']),
                'titles_longs': len(self.issues['title_long']),
                'titles_courts': len(self.issues['title_short']),
                'titles_manquants': len(self.issues['title_missing']),
                'canonicals_incorrects': len(self.issues['canonical_mismatch']),
                'canonicals_manquants': len(self.issues['canonical_missing']),
                'sitemap_5xx': len(self.issues['sitemap_5xx']),
                'sitemap_non_canonical': len(self.issues['sitemap_non_canonical'])
            },
            'details': dict(self.issues)
        }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        print(f"\n✅ Rapport généré: {output_file}")
        return report
    
    def print_summary(self):
        """Afficher un résumé des problèmes"""
        print("\n" + "="*60)
        print("📊 RÉSUMÉ DES PROBLÈMES DÉTECTÉS")
        print("="*60)
        
        priorities = [
            ('🔴 CRITIQUE - Erreurs 500', '500_errors'),
            ('🔴 CRITIQUE - Redirections cassées', 'broken_redirects'),
            ('🟠 IMPORTANT - Meta descriptions courtes', 'meta_desc_short'),
            ('🟠 IMPORTANT - Meta descriptions longues', 'meta_desc_long'),
            ('🟡 MOYEN - Titles trop longs', 'title_long'),
            ('🟡 MOYEN - Canonicals incorrects', 'canonical_mismatch'),
            ('🟡 MOYEN - Pages 5XX dans sitemap', 'sitemap_5xx'),
            ('🟡 MOYEN - Pages non-canoniques dans sitemap', 'sitemap_non_canonical')
        ]
        
        for label, key in priorities:
            count = len(self.issues[key])
            if count > 0:
                print(f"\n{label}: {count} problème(s)")
                if count <= 5:
                    for issue in self.issues[key][:5]:
                        if isinstance(issue, dict):
                            print(f"  • {issue.get('url', 'N/A')}")
                        else:
                            print(f"  • {issue}")


def main():
    """Fonction principale"""
    print("="*60)
    print("🚀 SCRIPT D'AUDIT SEO - GIGABONUS.WIN")
    print("="*60)
    
    base_url = "https://gigabonus.win"
    auditor = SEOAuditor(base_url)
    
    # URLs principales à vérifier
    sample_urls = [
        f"{base_url}/",
        f"{base_url}/fr",
        f"{base_url}/en",
        f"{base_url}/fr/bonus-sans-depot",
        f"{base_url}/fr/depot",
    ]
    
    # Lancer les vérifications
    print("\n⚙️  Démarrage de l'audit...")
    
    # Vérifications activées
    auditor.check_sitemap_issues(f"{base_url}/sitemap.xml")
    
    # Générer le rapport
    report = auditor.generate_report()
    auditor.print_summary()
    
    print("\n" + "="*60)
    print("✅ Audit terminé!")
    print("="*60)


if __name__ == "__main__":
    main()
