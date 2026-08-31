import Link from "next/link";
import type { Metadata } from "next";
import { LegalShell, type TocItem } from "@/components/LegalShell";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the GymFactor iPhone and Apple Watch app.",
};

const toc: TocItem[] = [
  { id: "s1", label: "Who is responsible" },
  { id: "s2", label: "Data we process" },
  { id: "s3", label: "Why we use data" },
  { id: "s4", label: "Legal bases" },
  { id: "s5", label: "Who we share with" },
  { id: "s6", label: "Retention" },
  { id: "s7", label: "Security" },
  { id: "s8", label: "Your rights" },
  { id: "s9", label: "Children" },
  { id: "s10", label: "Automated decisions" },
  { id: "s11", label: "Changes" },
  { id: "s12", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      effective="Effective 31 August 2026 · Version 1.0"
      toc={toc}
      contactTitle="Privacy questions or requests?"
      crossLinkHref="/terms"
      crossLinkLabel="Terms & Conditions"
    >
      <p className="notice">
        This policy explains how the GymFactor team (“<strong>we</strong>,” “
        <strong>us</strong>,” or “<strong>our</strong>”) handles personal data in GymFactor.
        It is written for a consumer fitness app, not as medical or legal advice. Apple
        Health data is never used for marketing or advertising and is never sold.
      </p>

      <h2 id="s1">Who is responsible</h2>
      <p>
        The data controller (and, where Apple processes data solely on your device or in
        your iCloud account, the party offering the app) is the GymFactor team.
      </p>
      <p>
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>
        GymFactor does not require you to create an account with us. You can use the app as a
        guest. We do not operate a social network.
      </p>

      <h2 id="s2">Data we process</h2>

      <h3>2.1 Information you enter</h3>
      <p>
        Depending on how you use the app, this may include name or display name, training
        goal, experience, days per week, split, units, bar weight, gender, body weight,
        height, and the workouts and sets you log (exercises, weight, reps, rest, notes
        associated with a session).
      </p>
      <p>
        This data is stored on your device using Apple&apos;s on-device database (SwiftData).
        If you are signed into iCloud and CloudKit sync is available, Apple may mirror that
        store to <strong>your</strong> iCloud account so it can appear on your other Apple
        devices. We do not operate a separate cloud copy of your workouts.
      </p>

      <h3>2.2 Apple Health (HealthKit)</h3>
      <p>
        If you choose to connect Health, the iPhone app may <strong>read</strong> (with your
        permission):
      </p>
      <ul>
        <li>Body mass (weight)</li>
        <li>Height</li>
        <li>Date of birth</li>
        <li>Biological sex</li>
      </ul>
      <p>
        The Apple Watch app may, during an in-progress workout and with your permission:
      </p>
      <ul>
        <li>
          <strong>Read</strong> heart rate and active energy
        </li>
        <li>
          <strong>Write</strong> a strength-training workout to Apple Health when the Watch
          session ends
        </li>
      </ul>
      <p>
        Health access is optional. You can deny or later revoke it in iOS Settings → Privacy
        &amp; Security → Health, or in the Health app. HealthKit data is used only to set up
        your profile, show live Watch metrics, and save the Watch workout to Health — not for
        advertising, not sold, and not used for other apps&apos; marketing.
      </p>

      <h3>2.3 Camera and photos (plate scan)</h3>
      <p>
        If you use scan, you may capture a photo or pick one from your library. The image is
        sent to estimate weight. Scan photos are <strong>not</strong> saved in your workout
        database. The scan service holds the image in memory for the request and does not
        keep a photo archive. The image is processed by OpenAI to return a weight estimate.
        OpenAI&apos;s processing is subject to{" "}
        <a href="https://openai.com/policies/privacy-policy">OpenAI&apos;s privacy policy</a>.
      </p>
      <p>
        You should not scan photos of other people or anything you do not have the right to
        process.
      </p>

      <h3>2.4 Purchases</h3>
      <p>
        If you subscribe to GymFactor Pro, Apple processes the payment. We receive
        subscription status (for example, whether Pro is active and an expiration date)
        through RevenueCat, using Apple&apos;s purchase receipts — not your card number.
      </p>

      <h3>2.5 Diagnostics, configuration, and notifications</h3>
      <p>We use Google Firebase for:</p>
      <ul>
        <li>
          <strong>Crashlytics</strong> — crash and non-fatal error reports, device/app
          metadata, and optional breadcrumbs so we can fix bugs. We may attach a technical
          identifier; we do not ask Crashlytics to store your name or workout history.
        </li>
        <li>
          <strong>Remote Config</strong> — feature flags such as whether scan is enabled and
          minimum app version.
        </li>
        <li>
          <strong>Cloud Messaging</strong> — a push token so we can deliver remote
          notifications if you allow them. Local notifications (for example a rest timer)
          stay on device.
        </li>
      </ul>
      <p>
        We do not currently use a separate Firebase Analytics marketing SDK in the app code.
        Google&apos;s Firebase services may still process technical data as described in
        Google&apos;s documentation.
      </p>

      <h3>2.6 Device permissions</h3>
      <p>
        The app may request camera, photo library, Health, notifications, and (in
        development) local network access for a scan server. iOS system prompts explain each
        request. You can change permissions in Settings.
      </p>

      <h2 id="s3">Why we use data</h2>
      <ul>
        <li>
          Provide logging, last-session memory, routines, progress charts, and Watch
          companion features
        </li>
        <li>Import profile fields from Health when you ask</li>
        <li>Estimate weight from a scan you start</li>
        <li>Unlock GymFactor Pro and restore purchases</li>
        <li>Send rest-timer or other notifications you enable</li>
        <li>Keep the app working (crash reports, remote flags, force-update thresholds)</li>
        <li>Respond to privacy or support emails you send us</li>
      </ul>
      <p>
        We do not sell your personal information and we do not use HealthKit data for
        advertising.
      </p>

      <h2 id="s4">Legal bases (EEA/UK and similar)</h2>
      <p>Where GDPR or UK GDPR applies, we rely on:</p>
      <ul>
        <li>
          <strong>Contract</strong> — to provide the Service you request (logging,
          subscriptions you buy)
        </li>
        <li>
          <strong>Consent</strong> — Health, camera/photos, and notifications (you can
          withdraw in iOS Settings)
        </li>
        <li>
          <strong>Legitimate interests</strong> — security, crash diagnostics, and keeping
          the Service reliable, balanced against your rights
        </li>
        <li>
          <strong>Legal obligation</strong> — if we must retain or disclose information
        </li>
      </ul>
      <p>
        Health and scan images can be special-category or sensitive data. We process them
        only with your permission and for the fitness features you invoke.
      </p>

      <h2 id="s5">Who we share with</h2>
      <p>We share data only as needed to run the Service:</p>
      <ul>
        <li>
          <strong>Apple</strong> — App Store, iCloud/CloudKit (your account), HealthKit (your
          Health database), Push
        </li>
        <li>
          <strong>OpenAI</strong> — scan images and related prompts, for weight estimation
          only
        </li>
        <li>
          <strong>Google (Firebase)</strong> — Crashlytics, Remote Config, Cloud Messaging
        </li>
        <li>
          <strong>RevenueCat</strong> — subscription entitlement status
        </li>
      </ul>
      <p>
        We may disclose information if required by law or to protect rights, safety, or the
        Service. If the product is transferred, data practices will remain subject to this
        policy or a successor notice.
      </p>
      <p>
        Processors may be located in the United States or other countries. Where required, we
        rely on appropriate transfer tools offered by those vendors, such as Standard
        Contractual Clauses.
      </p>

      <h2 id="s6">Retention</h2>
      <ul>
        <li>
          <strong>On device</strong> — until you delete the data in-app (where available) or
          uninstall the app
        </li>
        <li>
          <strong>iCloud</strong> — until you delete the app&apos;s iCloud data via
          Apple&apos;s iCloud settings, or your Apple ID no longer syncs it
        </li>
        <li>
          <strong>Apple Health</strong> — remains in Health until you delete those samples in
          the Health app
        </li>
        <li>
          <strong>Scan images</strong> — not stored by us after the request; OpenAI retains
          data per its policy
        </li>
        <li>
          <strong>Crash and config</strong> — kept by Firebase for their standard product
          periods
        </li>
        <li>
          <strong>Purchases</strong> — Apple and RevenueCat keep records needed to provide
          and restore subscriptions
        </li>
        <li>
          <strong>Emails you send us</strong> — as long as needed to handle your request
        </li>
      </ul>
      <p>
        The app does not currently offer a CSV export or in-app “delete all cloud data”
        button. Uninstalling removes local data on that device. To request access,
        correction, or deletion of information we hold (for example email correspondence),
        contact us. We cannot delete data that exists only in your Apple ID, iCloud, or
        Health without you using Apple&apos;s tools.
      </p>

      <h2 id="s7">Security</h2>
      <p>
        We rely on Apple&apos;s device encryption, App Transport security, and vendor
        security for cloud processors. No method of transmission or storage is 100% secure.
        Do not photograph sensitive documents when scanning plates.
      </p>

      <h2 id="s8">Your rights</h2>
      <p>
        <strong>EEA/UK/Switzerland:</strong> you may request access, rectification, erasure,
        restriction, portability, and to object to processing based on legitimate interests.
        You may withdraw consent at any time without affecting prior processing. You may
        complain to your local supervisory authority.
      </p>
      <p>
        <strong>California and similar US state laws:</strong> we do not sell or share
        personal information for cross-context behavioral advertising as those terms are
        commonly defined. You may request access, deletion, and correction of personal
        information we hold, and we will not discriminate against you for exercising rights.
        Health and precise location are not used for ads. We do not have actual knowledge of
        selling the personal information of consumers under 16.
      </p>
      <p>
        To exercise rights, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We
        may need to verify your request. We will respond within the time required by
        applicable law.
      </p>

      <h2 id="s9">Children</h2>
      <p>
        The Service is not directed to children under 13. We do not knowingly collect
        personal information from children under 13. If you believe we have, contact us and
        we will delete it. Users 13–15 should use the app with a parent or guardian where
        local law requires.
      </p>

      <h2 id="s10">Automated decisions</h2>
      <p>
        Scan uses an AI model to estimate weight. That estimate is not used to legally or
        similarly significantly affect you; you confirm or override it before logging.
        Training plans are rule-based templates from the profile you enter, not credit or
        employment decisions.
      </p>

      <h2 id="s11">Changes</h2>
      <p>
        We may update this policy. The effective date will change. Material changes will be
        posted here and, where required, noted in the app. Continued use after the effective
        date means you accept the updated policy where the law allows.
      </p>

      <h2 id="s12">Contact</h2>
      <p>
        Privacy questions and requests:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>
        See also the <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>
    </LegalShell>
  );
}
