"use server";

import Navbar from "@/components/Navbar";

export default async function TermsandConditions() {
  return (
    <>
      <Navbar />
      <section className="terms px-6 py-10 max-w-4xl mx-auto text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold text-center mb-8">
          Terms & Conditions
        </h1>

        <p className="text-center mb-6">
          Welcome to <strong>Punarjjani&apos;s official website</strong> —
          <a
            href="https://punarjjani.vercel.app"
            className="text-blue-600 hover:underline"
          >
            https://punarjjani.vercel.app
          </a>
        </p>

        <p className="mb-8">
          By accessing or using this website, you agree to the following{" "}
          <strong>Terms and Conditions</strong>:
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Use of Content</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                All information, text, images, and materials on this site belong
                to <strong>Punarjjani</strong>, unless otherwise stated.
              </li>
              <li>
                You may use the content only for{" "}
                <strong>personal and non-commercial purposes</strong>.
              </li>
              <li>
                Any reproduction, distribution, or modification requires{" "}
                <strong>prior written permission</strong> from Punarjjani.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Accuracy of Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                While we strive to provide accurate and updated information,
                Punarjjani makes no guarantees regarding its completeness,
                accuracy, or reliability.
              </li>
              <li>
                Use of any information or materials from this site is at your
                own discretion and risk.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. External Links</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                This website may contain links to external websites or
                resources.
              </li>
              <li>
                Punarjjani is not responsible for the content, practices, or
                policies of any third-party websites linked from this site.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Limitation of Liability
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Punarjjani shall not be liable for any direct, indirect,
                incidental, or consequential damages, including data loss or
                technical issues, arising from the use or inability to use this
                website.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. User Submissions</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Any feedback, suggestions, or materials submitted through this
                website may be used by Punarjjani for charitable, promotional,
                or operational purposes.
              </li>
              <li>
                Punarjjani is under no obligation to provide compensation or
                acknowledgment for such submissions.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Punarjjani reserves the right to update or modify these Terms
                and Conditions at any time without prior notice.
              </li>
              <li>
                Continued use of the website after any such changes constitutes
                acceptance of the revised terms.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
