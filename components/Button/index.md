# 按钮组件需求文档

## 1. **概述**

本按钮组件旨在提供一个高度可定制、易于使用的 UI 组件，支持各种类型、样式、状态和交互行为，适用于不同的应用场景。按钮支持设置不同的样式（如颜色、大小、形状等），以及处理不同的状态（如禁用、加载等）。此组件还需要处理点击事件，并支持一定的扩展性，如插槽和方法。

## 2. **属性（Props）**

### 2.1 **基础属性**

* **type** (`ButtonType`)：设置按钮的类型。

  * 类型：`'default' | 'primary' | 'dashed' | 'link' | 'text'`
  * 默认值：`'default'`
  * 描述：定义按钮的基本类型，决定按钮的外观。

* **bgColor** (`string`)：设置按钮的背景颜色。

  * 类型：`string`
  * 默认值：undefiend
  * 描述：定义按钮的背景颜色。

* **textColor** (`string`)：设置按钮的字体颜色。

  * 类型：`string`
  * 默认值：undefiend
  * 描述：定义按钮的字体颜色。

* **icon** (`React.ReactNode`)：设置按钮的图标。

  * 类型：`React.ReactNode`（可以是字符串、JSX 元素等）
  * 默认值：`undefined`
  * 描述：定义按钮左侧或右侧的图标。

* **iconPosition** (`ButtonPosition`)：设置图标的位置。

  * 类型：`'start' | 'end'`
  * 默认值：`'start'`
  * 描述：设置图标在按钮中的位置（默认是图标在文本左侧）。

* **shape** (`ButtonShape`)：设置按钮的形状。

  * 类型：`'default' | 'circle' | 'round'`
  * 默认值：`'default'`
  * 描述：设置按钮的形状，`circle` 为圆形按钮，`round` 为圆角按钮，`default` 为矩形。

* **size** (`ButtonSize`)：设置按钮的大小。

  * 类型：`'small' | 'medium' | 'large'`
  * 默认值：`'medium'`
  * 描述：设置按钮的尺寸，适应不同的布局需求。

* **disabled** (`boolean`)：设置按钮是否禁用。

  * 类型：`boolean`
  * 默认值：`false`
  * 描述：禁用按钮，禁用状态下按钮无法点击。

* **loading** (`boolean | { delay?: number, icon?: React.ReactNode }`)：设置按钮是否处于加载状态。

  * 类型：`boolean | { delay?: number, icon?: React.ReactNode }`
  * 默认值：`false`
  * 描述：当按钮处于加载状态时，按钮会显示加载图标。`delay` 表示加载延迟，`icon` 可自定义加载图标。

* **block** (`boolean`)：设置按钮是否为块级元素。

  * 类型：`boolean`
  * 默认值：`false`
  * 描述：设置按钮宽度是否占满父容器。

* **ghost** (`boolean`)：设置按钮是否为透明按钮。

  * 类型：`boolean`
  * 默认值：`false`
  * 描述：当为 `true` 时，按钮背景透明，通常与 `outlined` 样式一起使用。

* **danger** (`boolean`)：设置按钮是否为危险按钮。

  * 类型：`boolean`
  * 默认值：`false`
  * 描述：当为 `true` 时，按钮的颜色会变为红色，表示危险操作。

* **children** (`React.ReactNode`)：按钮的内容（文本或其他元素）。

  * 类型：`React.ReactNode`
  * 默认值：`undefined`
  * 描述：按钮的内容，可以是文本、HTML 或自定义组件。

* **href** (`string`)：当按钮用作链接时，设置按钮的 `href`。

  * 类型：`string`
  * 默认值：`undefined`
  * 描述：用于将按钮转化为链接按钮。

* **htmlType** (`ButtonHTMLType`)：设置按钮的原生 HTML 类型。

  * 类型：`'button' | 'submit' | 'reset'`
  * 默认值：`'button'`
  * 描述：定义按钮的 `type` 属性，通常用于表单提交。

* **autoInsertSpace** (`boolean`)：控制是否自动在按钮内容中的字符之间插入空格。

  * 类型：`boolean`
  * 默认值：`true`
  * 描述：主要用于中文环境，避免按钮文本内容因为没有空格而显示异常。

### 2.2 **方法**

* **focus()**: 手动聚焦按钮。

  * 描述：将按钮聚焦，触发浏览器的焦点事件。

* **blur()**: 手动移除按钮的焦点。

  * 描述：移除按钮的焦点，触发浏览器的失焦事件。

* **toggleLoading()**: 切换按钮的加载状态。

  * 描述：该方法可在需要的地方调用，切换按钮的加载状态。

### 2.3 **插槽（Slots）**

按钮组件没有传统意义上的插槽，但通过 `children` 属性实现内容插槽，即按钮内部的元素可以自定义，支持文本、图标、图片等。

### 2.4 **事件**

* **onClick** (`(e: React.MouseEvent) => void`): 按钮点击事件。

  * 描述：当按钮被点击时触发。需要在父组件中传递该事件来处理按钮点击时的逻辑。

* **onMouseEnter** (`(e: React.MouseEvent) => void`): 鼠标进入按钮时触发。

  * 描述：当鼠标悬停在按钮上时触发，常用于改变按钮的样式或显示提示信息。

* **onMouseLeave** (`(e: React.MouseEvent) => void`): 鼠标离开按钮时触发。

  * 描述：当鼠标离开按钮时触发，常用于恢复按钮的样式或隐藏提示信息。

* **onFocus** (`(e: React.FocusEvent) => void`): 按钮聚焦时触发。

  * 描述：当按钮获得焦点时触发，通常用于键盘导航时的交互效果。

* **onBlur** (`(e: React.FocusEvent) => void`): 按钮失焦时触发。

  * 描述：当按钮失去焦点时触发，通常用于键盘导航时的交互效果。

* **onKeyDown** (`(e: React.KeyboardEvent) => void`): 按钮键盘按下事件。

  * 描述：当用户按下键盘上的任意键时触发。可以用于按钮的键盘快捷键支持。

## 3. **功能需求**

### 3.1 **按钮的状态**

* 支持 `loading` 状态，显示加载动画，阻止点击事件。
* 支持 `disabled` 状态，禁用按钮，禁止点击。
* 支持 `danger` 状态，按钮的样式应与普通按钮有所区别，通常为红色背景。

### 3.2 **按钮样式**

* 按钮支持不同的 `type` 和 `variant` 样式（如 `primary`、`outlined`、`link`）。
* 按钮支持 `ghost` 样式，设置按钮透明背景。
* 支持自定义图标，通过 `icon` 属性传递图标。

### 3.3 **交互行为**

* 按钮在加载时，禁用点击，显示加载图标。
* 按钮支持点击事件，可以通过 `onClick` 处理点击行为。
* 支持 `block` 设置，按钮宽度占满父容器。
* 支持 `href` 属性，使按钮具备链接行为。

## 4. **兼容性要求**

* 组件应兼容不同尺寸（`small`、`medium`、`large`）和不同形状（`circle`、`round`）的按钮样式。
* 在移动端和桌面端均能正常显示，并支持响应式布局。

## 5. **总结**

本按钮组件提供了丰富的属性配置和事件处理功能，满足大部分 UI 设计需求。通过精细的状态管理和样式控制，按钮不仅能够提供基本的交互，还能应

对不同的业务场景（如加载、禁用、危险操作等）。
