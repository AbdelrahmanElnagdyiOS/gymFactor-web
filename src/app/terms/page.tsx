import Link from "next/link";
import type { Metadata } from "next";
import { LegalShell, type TocItem } from "@/components/LegalShell";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for the GymFactor iPhone and Apple Watch app.",
};

const toc: TocItem[] = [
  { id: "s1", label: "Who we are" },
  { id: "s2", label: "Eligibility" },
  { id: "s3", label: "The Service" },
  { id: "s4", label: "Your content and data" },
  { id: "s5", label: "Acceptable use" },
  { id: "s6", label: "Health and fitness disclaimer" },
  { id: "s7", label: "AI plate scan" },
  { id: "s8", label: "Subscriptions and payments" },
  { id: "s9", label: "Intellectual property" },
  { id: "s10", label: "Third-party services" },
  { id: "s11", label: "Privacy" },
  { id: "s12", label: "Termination" },
  { id: "s13", label: "Disclaimers" },
  { id: "s14", label: "Limitation of liability" },
  { id: "s15", label: "Indemnity" },
  { id: "s16", label: "Disputes" },
  { id: "s17", label: "Changes" },
  { id: "s18", label: "General" },
];

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      effective="Effective 31 August 2026 · Version 1.0"
      toc={toc}
      contactTitle="Questions about these Terms?"
      crossLinkHref="/privacy"
      crossLinkLabel="Privacy Policy"
    >
      <p className="notice">
        By downloading, accessing, or using GymFactor, you agree to these Terms &amp;
        Conditions (the “<strong>Terms</strong>”). If you do not agree, do not use the app.
        These Terms incorporate the <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2 id="s1">Who we are</h2>
      <p>
        GymFactor (the “<strong>Service</strong>”) is operated by the GymFactor team (“
        <strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”). Contact:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <p>
        The Service is the GymFactor iPhone app, the companion Apple Watch app, widgets, and
        related websites. There is no separate user account with us. You may use the Service
        as a guest on your device.
      </p>

      <h2 id="s2">Eligibility</h2>
      <p>
        You must be at least <strong>13 years old</strong> to use the Service. If you are
        between 13 and the age of majority where you live, you may use the Service only with
        a parent or guardian&apos;s permission, and they agree to these Terms on your behalf.
      </p>
      <p>
        The Service is offered worldwide. Local consumer protections that cannot be waived
        still apply to you.
      </p>

      <h2 id="s3">The Service</h2>
      <p>
        GymFactor helps you log gym workouts, remember last-session weights, follow a
        training split, and view local progress. Optional features include camera or photo
        plate/dumbbell scan, Apple Health import, Apple Watch workout recording, push or
        local notifications, and a paid Pro subscription.
      </p>
      <p>
        Core logging is designed to work offline. Network access is used for optional
        features (scan, crash reporting, remote configuration, notifications, purchase
        validation, and iCloud sync if enabled on your Apple ID).
      </p>
      <p>
        We may change, suspend, or discontinue features. We do not promise uninterrupted or
        error-free operation.
      </p>

      <h2 id="s4">Your content and data</h2>
      <p>
        You retain ownership of the workout logs, profile details, and other information you
        enter (“<strong>Your Content</strong>”). You grant us a limited license to host,
        store, process, and display Your Content solely to operate the Service on your
        devices and, where you enable iCloud, via Apple&apos;s CloudKit in your iCloud
        account.
      </p>
      <p>
        You are responsible for the accuracy of what you log and for keeping your device,
        Apple ID, and iCloud account secure.
      </p>
      <p>
        If you send feedback or ideas, you grant us a worldwide, royalty-free license to use
        that feedback without restriction or compensation.
      </p>

      <h2 id="s5">Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for anything illegal, fraudulent, or deceptive</li>
        <li>Interfere with, probe, or bypass security, rate limits, or the scan service</li>
        <li>Upload malware or attempt unauthorized access</li>
        <li>Scrape, reverse engineer (except where the law allows), or resell the Service</li>
        <li>
          Misuse camera or Health permissions, or submit others&apos; photos or health data
          without authority
        </li>
        <li>Harass, abuse, or infringe others&apos; rights</li>
        <li>Use the Service if you are under 13</li>
      </ul>
      <p>
        We may suspend or terminate access for violations or to protect the Service,
        ourselves, or others.
      </p>

      <h2 id="s6">Health and fitness disclaimer</h2>
      <p>
        GymFactor is a consumer fitness logger. It is <strong>not</strong> medical advice,
        diagnosis, treatment, or a medical device. It is not a substitute for a doctor,
        trainer, or other professional. Consult a qualified professional before starting or
        changing exercise, especially if you have an injury or medical condition.
      </p>
      <p>
        You use training plans, estimated one-rep max, volume stats, heart-rate display, and
        similar features at your own risk. We are not responsible for injury, overtraining,
        or health outcomes.
      </p>

      <h2 id="s7">AI plate scan</h2>
      <p>
        Optional scan sends a photo you capture or pick to a processing service (currently
        OpenAI) to estimate weight. Estimates can be wrong. Never rely on a scan instead of
        checking the plates or dumbbells yourself. You must confirm before a scanned weight
        is logged. We do not warrant accuracy, and low-confidence results should be entered
        manually.
      </p>

      <h2 id="s8">Subscriptions and payments</h2>
      <p>
        Some features may require a paid <strong>GymFactor Pro</strong> subscription sold
        through the Apple App Store and processed by Apple, with purchase status managed via
        RevenueCat.
      </p>
      <ul>
        <li>Title, length, and price are shown in the app and App Store at purchase.</li>
        <li>
          Subscriptions auto-renew unless you cancel at least 24 hours before the end of the
          current period.
        </li>
        <li>
          Payment is charged to your Apple ID. Manage or cancel in iOS Settings → Apple ID →
          Subscriptions, or as Apple otherwise provides.
        </li>
        <li>Refunds are handled by Apple under Apple&apos;s terms, not by us directly.</li>
        <li>
          Restore purchases with the in-app Restore control if you reinstall or change
          devices.
        </li>
      </ul>
      <p>
        Taxes may apply as determined by Apple. We do not store your full payment card
        details.
      </p>

      <h2 id="s9">Intellectual property</h2>
      <p>
        The Service, including the GymFactor name, logo, design, exercise catalog, software,
        and documentation, is owned by us or our licensors. We grant you a personal,
        non-exclusive, non-transferable, revocable license to use the Service for your own
        training, subject to these Terms. You may not copy, modify, or distribute the
        Service except as allowed by law.
      </p>

      <h2 id="s10">Third-party services</h2>
      <p>
        The Service may rely on Apple (App Store, CloudKit, HealthKit, Push), OpenAI (scan),
        Google Firebase (crash reporting, remote config, messaging), and RevenueCat
        (subscriptions). Their terms and privacy policies apply to their processing. We do
        not control and are not responsible for third-party services, outages, or content.
      </p>

      <h2 id="s11">Privacy</h2>
      <p>
        How we handle personal data is described in the{" "}
        <Link href="/privacy">Privacy Policy</Link>. Health data from Apple Health is used
        only as described there and is not used for advertising or sold.
      </p>

      <h2 id="s12">Termination</h2>
      <p>
        You may stop using the Service at any time by deleting the app. We may stop offering
        the Service or your access, with or without notice, including if we discontinue the
        product. Provisions that by nature should survive (including disclaimers, liability
        limits, indemnity, and dispute terms) survive termination.
      </p>
      <p>
        Deleting the app removes data stored on that device. Data in your iCloud or Apple
        Health remains under Apple&apos;s controls until you delete it there. Subscriptions
        continue until you cancel with Apple.
      </p>

      <h2 id="s13">Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        ACCURACY, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW. WE DO NOT
        WARRANT THAT SCANS, PLANS, STATS, OR HEALTH IMPORTS ARE CORRECT OR SUITABLE FOR YOU.
      </p>

      <h2 id="s14">Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, GYMFACTOR AND ITS OPERATORS SHALL NOT BE
        LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
        DAMAGES, OR FOR LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM THE SERVICE OR THESE
        TERMS, EVEN IF ADVISED OF THE POSSIBILITY.
      </p>
      <p>
        TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU
        PAID FOR THE SERVICE IN THE 12 MONTHS BEFORE THE CLAIM OR (B) USD $100. THESE LIMITS
        DO NOT APPLY TO LIABILITY THAT CANNOT BE LIMITED UNDER APPLICABLE LAW, INCLUDING
        LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE, FRAUD, OR WILLFUL
        MISCONDUCT WHERE SUCH LIMITATION IS PROHIBITED.
      </p>
      <p>
        If you are a consumer in the European Economic Area, United Kingdom, or a similar
        jurisdiction, nothing in these Terms limits your mandatory statutory rights.
      </p>

      <h2 id="s15">Indemnity</h2>
      <p>
        To the extent permitted by law, you will defend and indemnify GymFactor and its
        operators against claims, damages, and costs arising from your misuse of the
        Service, Your Content, or your violation of these Terms or third-party rights.
      </p>

      <h2 id="s16">Disputes</h2>
      <p>
        Contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> first and allow 30
        days to try to resolve a dispute informally.
      </p>
      <p>
        These Terms are governed by the laws of the country in which the Service&apos;s
        operators are established, without regard to conflict-of-law rules, except that
        mandatory consumer protections of your country of residence still apply.
      </p>
      <p>
        If you are in the United States: except for claims that may be brought in
        small-claims court, disputes will be resolved by binding individual arbitration
        administered by a reputable arbitration provider in English. You and we waive class
        actions and class arbitration to the extent allowed by law. You may opt out of
        arbitration by emailing us within 30 days of first accepting these Terms.
      </p>
      <p>
        EEA/UK consumers may bring proceedings in their country of residence. You may also
        use the EU ODR platform where available.
      </p>

      <h2 id="s17">Changes</h2>
      <p>
        We may update these Terms. The “Effective” date above will change. Material changes
        will be indicated by updating this page and, where required, by in-app notice.
        Continued use after the effective date is acceptance of the updated Terms, except
        where local law requires affirmative consent.
      </p>

      <h2 id="s18">General</h2>
      <p>
        If a provision is unenforceable, the rest remains in effect. You may not assign
        these Terms without our consent; we may assign them in connection with a transfer of
        the Service. These Terms are the entire agreement regarding the Service. Notices to
        you may be posted in the app or on this site; notices to us must be emailed to the
        address above.
      </p>
    </LegalShell>
  );
}
