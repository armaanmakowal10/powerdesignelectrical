import { formatSurveyAnswers } from './surveyData';

export const SURVEY_RECIPIENT = 'powerdesignelectricalltd@gmail.com';

const SEND_ERROR =
  'Could not send your request. Please try again or call (403) 771-2553.';

/** Sends survey answers to powerdesignelectricalltd@gmail.com via FormSubmit. */
export async function submitSurvey(data) {
  const { email, fields } = formatSurveyAnswers(data);

  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(SURVEY_RECIPIENT)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: 'New survey lead — Power Design Electrical',
        _template: 'table',
        _captcha: 'false',
        email,
        ...fields,
      }),
    },
  );

  let body;
  try {
    body = await res.json();
  } catch {
    throw new Error(SEND_ERROR);
  }

  if (!res.ok || (body.success !== true && body.success !== 'true')) {
    throw new Error(body.message || SEND_ERROR);
  }

  return body;
}
