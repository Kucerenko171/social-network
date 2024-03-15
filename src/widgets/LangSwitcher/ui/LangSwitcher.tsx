import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib";
import {Button} from "shared/ui";
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
            <Button
                onClick={onToggle}
                className={classNames(cls.LangSwitcher, {}, [className])}
            >
                {t('lang')}
            </Button>
    );
};
