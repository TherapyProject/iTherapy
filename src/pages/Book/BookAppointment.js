import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../backend/firebase';
import Details from '../../components/BookAppointment/Details';
import Issue from '../../components/BookAppointment/Issue';
import PatientType from '../../components/BookAppointment/PatientType';
import Quality from '../../components/BookAppointment/Quality';
import Relationship from '../../components/BookAppointment/Relationship';
import SeenTherapist from '../../components/BookAppointment/SeenTherapist';
import Submit from '../../components/BookAppointment/Submit';
import ThankYou from '../../components/BookAppointment/ThankYou';
import { useAuth } from '../../contexts/AuthContext';

const STEPS = [
  'Patient type',
  'Relational',
  'Seen a therapist before',
  'Quality',
  'Issue',
  'Details',
  'Submit',
  'Thank you',
];

export default function BookAppointment() {
  const [activeStep, setActiveStep] = useState(0);
  const [patientType, setPatientType] = useState('');
  const [relationship, setRelationship] = useState('');
  const [seenTherapist, setSeenTherapist] = useState('');
  const [quality, setQuality] = useState('');
  const [issue, setIssue] = useState('');
  const [details, setDetails] = useState('');
  const { currentUser } = useAuth();

  const handleNext = () => {
    if (activeStep < STEPS.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setPatientType('');
    setRelationship('');
    setSeenTherapist('');
    setQuality('');
    setIssue('');
    setDetails('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      patientType,
      relationship,
      seenTherapist,
      quality,
      issue,
      details,
    };

    setDoc(doc(db, 'appointments', currentUser.uid), data);

    handleNext();
  };

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-[75vh] flex flex-col justify-center items-center gap-8">
      <h1 className="mb-4 text-4xl text-center font-bold text-gray-800 dark:text-gray-200">
        Let&apos;s match you with the right therapist
      </h1>
      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        Please fill out this short questionnaire to provide some general and
        anonymous background about you and issues you&apos;d like to deal with
        in online therapy. It would help us match you with the most suitable
        therapist for your needs.
      </p>
      <div className="mb-4 w-full">
        <div className="actions mt-4 flex justify-between items-center w-full gap-4 min-h-[16rem]">
          {activeStep === 0 && (
            <PatientType type={patientType} setType={setPatientType} />
          )}
          {activeStep === 1 && (
            <Relationship
              relationship={relationship}
              setRelationship={setRelationship}
            />
          )}
          {activeStep === 2 && (
            <SeenTherapist
              seenTherapist={seenTherapist}
              setSeenTherapist={setSeenTherapist}
            />
          )}
          {activeStep === 3 && (
            <Quality quality={quality} setQuality={setQuality} />
          )}
          {activeStep === 4 && <Issue issue={issue} setIssue={setIssue} />}
          {activeStep === 5 && (
            <Details details={details} setDetails={setDetails} />
          )}
          {activeStep === 6 && <Submit onSubmit={handleSubmit} />}
          {activeStep === 7 && <ThankYou />}
        </div>
        {activeStep < 6 && (
          <div className="flex justify-between mt-8 items-center flex-wrap">
            <button
              type="button"
              className="btn gap-2 flex items-center justify-start"
              onClick={handleBack}
            >
              <svg
                className="h-6 w-6 fill-current md:h-8 md:w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
              </svg>
              Back
            </button>
            <button
              type="button"
              className="btn btn-error gap-2 flex-items-center justify-end"
              onClick={handleReset}
            >
              Reset
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              type="button"
              className="btn gap-2 flex items-center justify-end"
              onClick={handleNext}
            >
              Next
              <svg
                className="h-6 w-6 fill-current md:h-8 md:w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
