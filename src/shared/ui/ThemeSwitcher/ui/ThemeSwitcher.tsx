import { classNames } from 'shared/helpers/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', [className])}
      onClick={toggleTheme}
    >
      {/* {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} */}
      Сменить тему
    </Button>
  );
});
