import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './Text.module.scss';
import { Mods } from 'shared/helpers/classNames/classNames';

export enum TextTheme {
  PRIMARY = 'primary',
  TEXT_PRIMARY = 'text_primary',
  NEON = 'neon',
  NEON_SECONDARY = 'neon_secondary',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  inline?: boolean;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    inline = false,
  } = props;

  const mods: Mods = { [cls.inline]: inline }

  return (
    <div className={classNames(
      '',
      [className, cls[theme], cls[align], cls[size],],
      mods
    )}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
