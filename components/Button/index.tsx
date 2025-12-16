"use client";
import { useCallback, useMemo } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";
import { LoadingOne } from "@icon-park/react";

// 定义类型
type ButtonType = "default" | "primary" | "dashed" | "link" | "text";
type ButtonPosition = "start" | "end";
type ButtonShape = "default" | "circle" | "round";
type ButtonSize = "small" | "medium" | "large";
type ButtonHTMLType = "button" | "submit" | "reset";

// 按钮属性
interface ButtonProps {
  // 按钮的类型
  type?: ButtonType;
  // 按钮的背景颜色
  bgColor?: string;
  // 按钮的字体颜色
  textColor?: string;
  // 按钮的图标
  icon?: React.ReactNode;
  // 图标的位置
  iconPosition?: ButtonPosition;
  // 按钮的形状
  shape?: ButtonShape;
  // 按钮的大小
  size?: ButtonSize;
  // 是否禁用按钮
  disabled?: boolean;
  // 按钮是否处于记载状态
  loading?: boolean | { delay?: number; icon?: React.ReactNode };
  // 是否为块级元素
  block?: boolean;
  // 按钮是否为透明按钮
  ghost?: boolean;
  // 是否为危险按钮
  danger?: boolean;
  // 按钮的内容
  children?: React.ReactNode;
  // 当按钮为链接时，设置按钮的href
  href?: string;
  // 按钮的原生HTML类型
  htmlType?: ButtonHTMLType;
  // 按钮的点击事件
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  bgColor,
  textColor,
  icon,
  iconPosition = "start",
  shape = "default",
  size = "medium",
  disabled = false,
  loading = false,
  block = false,
  ghost = false,
  danger = false,
  children,
  href,
  htmlType = "button",
  onClick,
}) => {
  // 处理 loading 状态
  const mergedLoading = useMemo(() => {
    if (typeof loading === "object") {
      return {
        ...loading,
        icon: loading.icon || (
          <LoadingOne
            className={styles.loading}
            theme="outline"
            size="14"
            fill="#333"
            strokeWidth={2}
          />
        ),
      };
    }
    return {
      loading: loading,
      icon: (
        <LoadingOne
          theme="outline"
          size="14"
          fill="#333"
          strokeWidth={2}
        />
      ),
    };
  }, [loading]);

  // 按钮样式
  const buttonClassName = clsx(
    styles.button,
    styles[type],
    styles[shape],
    styles[size],
    {
      [styles.block]: block,
      [styles.ghost]: ghost,
      [styles.danger]: danger,
      [styles.disabled]: disabled || mergedLoading.loading,
    }
  );

  // 按钮颜色处理
  const buttonColorStyle = useMemo(() => {
    if (bgColor) {
      return {
        backgroundColor: bgColor,
        borderColor: bgColor,
        color: textColor,
      };
    }
  }, [bgColor, textColor]);

  // 按钮点击事件
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled || mergedLoading.loading) return;
      if (onClick) onClick(e);
    },
    [disabled, mergedLoading.loading, onClick]
  );

  // 按钮内容
  const contentNode = mergedLoading.loading ? (
    <>
      {iconPosition === "start" && (
        <span className={styles.icon}>{mergedLoading.icon}</span>
      )}
      {children}
      {iconPosition === "end" && (
        <span className={styles.icon}>{mergedLoading.icon}</span>
      )}
    </>
  ) : (
    <>
      {icon && iconPosition === "start" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "end" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={buttonClassName}
        onClick={handleClick}
        aria-disabled={disabled}
      >
        {contentNode}
      </a>
    );
  }

  return (
    <button
      type={htmlType}
      className={buttonClassName}
      onClick={handleClick}
      disabled={disabled || mergedLoading.loading}
      style={buttonColorStyle}
    >
      {contentNode}
    </button>
  );
};

export default Button;
