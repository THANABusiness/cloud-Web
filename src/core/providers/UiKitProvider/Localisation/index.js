import React from 'react';

import { IntlProvider } from 'react-intl';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import i18n from '~/i18n';

const defaultLocale = 'en'; // TODO: need to work on that too
TimeAgo.addLocale(en); // TODO: need to rework that

const Localization = ({ locale, ...props }) => {
  const messages = locale in i18n ? i18n[locale] : i18n[defaultLocale];

  return (
    <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={messages} {...props} />
  );
};

export default Localization;
