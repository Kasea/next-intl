import {GetStaticPropsContext} from 'next';
import {useTranslations, getTranslation} from 'next-intl';
import LocaleSwitcher from 'components/LocaleSwitcher';
import PageLayout from 'components/PageLayout';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <PageLayout title={t('title')}>
      <p>{t('description')}</p>
      <LocaleSwitcher />

      <p>{getTranslation('Index', 'description')}</p>
    </PageLayout>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
