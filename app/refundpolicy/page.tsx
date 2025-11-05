"use server";

import Navbar from "@/components/Navbar";

export default async function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <section className="refund-policy px-6 py-10 max-w-4xl mx-auto text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold text-center mb-8">Refund Policy</h1>

        <p className="mb-6">
          Thank you for supporting <strong>Punarjjani</strong>.
        </p>

        <p className="mb-8">
          As a charitable initiative, all donations made to Punarjjani are used
          solely for the benefit of genuine patients and charitable medical
          activities.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. No Refund Policy</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Once a donation is made, it is considered{" "}
                <strong>final and non-refundable</strong>.
              </li>
              <li>
                We do not offer refunds or cancellations for any contributions,
                whether made online, offline, or through any other means.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Incorrect Transactions
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                If you believe a transaction was made in error (such as
                duplicate payment or incorrect amount), please contact us within{" "}
                <strong>7 days</strong> of the transaction at our official email
                address.
              </li>
              <li>
                Such cases will be reviewed individually, and corrections may be
                made at the discretion of the Punarjjani administration.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Acknowledgment</h2>
            <p>
              By donating, you acknowledge and agree to this{" "}
              <strong>No Refund Policy</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
