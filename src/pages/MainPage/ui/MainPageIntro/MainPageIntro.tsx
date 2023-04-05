import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './MainPageIntro.module.scss';
import { Text, TextSize, TextTheme } from 'shared/ui/Text';

interface MainPageIntroProps {
  className?: string;
}

export const MainPageIntro = memo((props: MainPageIntroProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.MainPageIntro, [className], {})}>
      <div className={cls.section}>
        <Text
          text="Привет, меня зовут "
          theme={TextTheme.TEXT_PRIMARY}
          size={TextSize.XL}
          inline
          className={cls.text}
        />
        <Text
          title="Дмитрий Афанасьев"
          theme={TextTheme.NEON_SECONDARY}
          size={TextSize.XL}
          inline
        />
        <Text
          text="."
          theme={TextTheme.TEXT_PRIMARY}
          size={TextSize.XL}
          inline
        />
      </div>
      <div className={cls.section}>
        <Text
          text="Я"
          theme={TextTheme.TEXT_PRIMARY}
          size={TextSize.M}
          inline
          className={cls.text}
        />
        <Text
          text="frontend"
          theme={TextTheme.NEON_SECONDARY}
          size={TextSize.L}
          inline
          className={cls.text}
        />
        <Text
          text="разработчик!"
          theme={TextTheme.TEXT_PRIMARY}
          size={TextSize.M}
          inline
          className={cls.text}
        />
      </div>
    </div>
  );
});