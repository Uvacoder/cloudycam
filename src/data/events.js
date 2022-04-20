export const DEFAULT_EVENT_ID = 'default';

export const events = {
  [DEFAULT_EVENT_ID]: {
    register: {
      link: 'https://cloudinary.com/users/register/free',
      text: 'Get Your Free Account',
    },
  },

  // Events

  cityjsbrazil: {
    register: {
      link: 'https://forms.monday.com/forms/e1ad68a7699011ccfd2514a8d47a3aa3?r=use1',
      text: 'Get Your Free Account',
    },
    hashtags: ['CityJSBrazil'],
    incentive: {
      text: 'extra 3 credits',
      moreInfo: {
        text: 'what are credits?',
        link: 'https://cloudinary.com/pricing/compare-plans#faq-heading-7',
      },
    },
  },
};
