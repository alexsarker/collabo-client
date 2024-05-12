import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="mt-36">
      <div className="max-w-[800px] text-center mx-auto">
        <h2 className=" pb-5 text-5xl font-bold">Frequently Asked Question</h2>
        <p>
          Check out our FAQ section to find solutions to common queries about
          our platform.
        </p>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="max-w-[800px]">
          <div className="collapse collapse-arrow bg-theme-moon p-4 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg font-bold">
              How do I get started with Collabo?
            </div>
            <div className="collapse-content">
              <p>
                Getting started with Collabo is easy! Simply sign up for an
                account and explore our platform features. You can start by
                browsing assignments, creating your own, or collaborating with
                friends on existing tasks.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-theme-moon p-4 mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-bold">
              Can I create assignments for specific groups of friends?
            </div>
            <div className="collapse-content">
              <p>
                Yes! Collabo allows you to create assignments for all users or
                specify certain groups of friends. This flexibility enables you
                to tailor tasks to match your study groups or project teams.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-theme-moon p-4 mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-bold">
              Is Collabo platform secure?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! Collabo prioritizes the security and privacy of our
                users data. We implement robust security measures to protect
                your information and ensure a safe learning environment.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-theme-moon p-4 mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-bold">
              How does assignment grading work on Collabo?
            </div>
            <div className="collapse-content">
              <p>
                Assignments on Collabo are graded by peers within your study
                group. Once you submit an assignment, your friends can provide
                feedback and assign marks. This collaborative grading process
                fosters constructive feedback and mutual learning.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-theme-moon p-4 mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-bold">
              What if I encounter technical issues or need assistance?
            </div>
            <div className="collapse-content">
              <p>
                Do not worry! Collabo offers dedicated support to address any
                technical issues or questions you may have. Simply reach out to
                our support team, and we will be happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p>
          Haven’t got your answer?{" "}
          <Link className="text-sec">Contact our support now</Link>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
