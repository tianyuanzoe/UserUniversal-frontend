import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Created by tianyuanzoe',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'This is A User Management System',
          title: 'User Universal',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />  tianyuanzoe Github</>,
          href: 'https://github.com/tianyuanzoe',
          blankTarget: true,
        },
        {
          key: 'A rental and leasing Website in Seattle',
          title: 'Seattle Rental',
          href: 'https://www.seattlerental.lol/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
