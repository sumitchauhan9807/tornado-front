function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-surface-muted/60 md:mt-12 lg:mt-14">
      <div className="container-wide py-12 md:py-16">
        <div className="flex flex-col gap-6 border-b border-border pb-10 sm:flex-row sm:items-center sm:justify-between">
          <a className="inline-flex items-center " aria-label="The Telephony Co — Every call matters" href="/">
            <img src="https://tornadodialer.net/assets/images/Logo.svg" alt="The Telephony Co" className="h-10 w-auto md:h-11 " loading="eager" decoding="async" />
          </a>
          <div className="flex items-center gap-2 text-sm">
            <span className="eyebrow mr-1">Region</span>
            <a className="rounded-lg border px-3 py-1.5 transition-colors border-border text-ink-muted hover:border-ink hover:text-ink-strong" href="/india">
              India
            </a>
            <a className="rounded-lg border px-3 py-1.5 transition-colors border-ink bg-ink text-paper" href="/">
              Global
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-12 sm:grid-cols-3 lg:grid-cols-6">
          <div>
            <p className="eyebrow mb-4">Products</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center">
                  Contact Center
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/call-tracking-software">
                  Call Tracking Software
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/agentflow">
                  AgentFlow
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/vora">
                  Vora AI Contact Center
                </a>
              </li>
            </ul>
            <a className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink-strong transition-colors hover:text-ink" href="/products">
              Explore more products <span aria-hidden="true">→</span>
            </a>
          </div>
          <div>
            <p className="eyebrow mb-4">Phone Numbers</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/business-phone-number">
                  Business Phone Number
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/toll-free-numbers">
                  Toll-Free Numbers
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/local-numbers">
                  Local Numbers
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/virtual-phone-number">
                  Virtual Phone Number
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/vanity-numbers">
                  Vanity Numbers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Industries</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/industries">
                  All Industries
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/insurance-contact-center-software">
                  Insurance
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/banking-and-finance-contact-center-software">
                  Banking &amp; Finance
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center-software-for-healthcare-industry">
                  Healthcare
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/e-commerce-industry-contact-center-software">
                  E-Commerce
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center-software-for-enterprise">
                  Enterprise
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center-software-for-bpo">
                  BPO
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/pbx-software-for-enterprise">
                  PBX Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Resources</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/features">
                  Features
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/industries">
                  Industries
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/case-study">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/voip-glossary">
                  VoIP Glossary
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/pay-invoice">
                  Pay Your Invoice
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/our-team">
                  Our Team
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/awards">
                  Awards
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/careers">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/coverage">
                  Coverage
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/customers">
                  Customers
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/partners">
                  Partners
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Policy Center</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/terms-conditions">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/refund-and-cancelation-policy">
                  Refund &amp; Cancelation Policy
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/fair-usage-policy">
                  Fair Usage Policy
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/robocall-mitigation-plan">
                  Robocall Mitigation Plan
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/report-abuse">
                  Report Abuse
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-8 border-t border-border pt-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1">
            <p className="eyebrow mb-4">Head Office</p>
            <div className="flex items-start gap-3 text-sm text-ink-muted">
              <span aria-hidden="true" className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ink text-paper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                  <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" strokeLinejoin="round" />
                  <circle cx={12} cy={10} r="2.5" />
                </svg>
              </span>
              <p className="leading-relaxed">
                The Telephony Co <br />
                1201 North Market Street, Suite 111-L91, <br />
                Wilmington, DE 19801{' '}
              </p>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="eyebrow mb-4">Call Us</p>
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex items-start gap-3">
                <span role="img" aria-label="United States flag" className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{ width: '24px', height: '18px', backgroundSize: 'cover' }} />
                <span className="text-sm">
                  <a href="tel:18009221341" className="font-medium text-ink-strong transition-colors hover:text-ink">
                    1800 922 1341
                  </a>
                  <span className="mt-0.5 block text-xs text-ink-muted">Toll Free Customer Service (24×7)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="United States flag" className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{ width: '24px', height: '18px', backgroundSize: 'cover' }} />
                <span className="text-sm">
                  <a href="tel:13322060666" className="font-medium text-ink-strong transition-colors hover:text-ink">
                    +1 332 206 0666
                  </a>
                  <span className="mt-0.5 block text-xs text-ink-muted">Office (9:00 AM to 6:00 PM)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="United Kingdom flag" className="fi fi-gb inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{ width: '24px', height: '18px', backgroundSize: 'cover' }} />
                <span className="text-sm">
                  <a href="tel:448002294882" className="font-medium text-ink-strong transition-colors hover:text-ink">
                    +44 800 229 4882
                  </a>
                  <span className="mt-0.5 block text-xs text-ink-muted">United Kingdom</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="Australia flag" className="fi fi-au inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{ width: '24px', height: '18px', backgroundSize: 'cover' }} />
                <span className="text-sm">
                  <a href="tel:611800716800" className="font-medium text-ink-strong transition-colors hover:text-ink">
                    +61 1800 716 800
                  </a>
                  <span className="mt-0.5 block text-xs text-ink-muted">Australia</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="India flag" className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{ width: '24px', height: '18px', backgroundSize: 'cover' }} />
                <span className="text-sm">
                  <a href="tel:18002122006" className="font-medium text-ink-strong transition-colors hover:text-ink">
                    1800 212 2006
                  </a>
                  <span className="mt-0.5 block text-xs text-ink-muted">India</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-ink-muted md:flex-row md:items-center">
          <p>© 2026 The Telephony Co. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <a href="https://www.facebook.com/thetelephony.co/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/thetelephonyco" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/thetelephonyco/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thetelephonyco/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer
