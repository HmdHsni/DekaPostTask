import { useTranslation } from 'react-i18next';
import { AdminAccess } from './data/SidebarOption';
export const useLocalizedSidebar = () => {
  const { t } = useTranslation();

  const translatedAdminAccess = AdminAccess.map(item => ({
    ...item,
    label: t(item.label),
  }));

  return { translatedAdminAccess };
};
