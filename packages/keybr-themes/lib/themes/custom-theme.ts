import { Color } from "./color.ts";
import {
  type PropName,
  type PropValue,
  themeProps,
  themePropsMap,
} from "./theme-props.ts";

export class CustomTheme implements Iterable<[PropName, PropValue]> {
  readonly #props: Map<PropName, PropValue>;

  constructor(props: Iterable<[PropName, PropValue]> = []) {
    this.#props = new Map(props);
  }

  *[Symbol.iterator](): IterableIterator<[PropName, PropValue]> {
    for (const prop of themeProps) {
      const value = this.#props.get(prop);
      if (value != null) {
        yield [prop, value];
      }
    }
  }

  get(prop: PropName): PropValue | null {
    return this.#props.get(prop) ?? null;
  }

  getColor(prop: PropName): Color | null {
    return (this.#props.get(prop) as Color) ?? null;
  }

  getImage(prop: PropName): Blob | null {
    return (this.#props.get(prop) as Blob) ?? null;
  }

  set(prop: PropName, value: PropValue | null): CustomTheme {
    const props = new Map(this.#props);
    if (value == null) {
      props.delete(prop);
    } else {
      props.set(prop, value);
    }
    return new CustomTheme(props);
  }

  delete(prop: PropName): CustomTheme {
    const props = new Map(this.#props);
    props.delete(prop);
    return new CustomTheme(props);
  }

  merge(that: CustomTheme): CustomTheme {
    const props = new Map(this.#props);
    for (const [prop, value] of that) {
      props.set(prop, value);
    }
    return new CustomTheme(props);
  }
}

export function applyTheme(
  theme: CustomTheme,
  style: CSSStyleDeclaration = document.documentElement.style,
) {
  for (const prop of themeProps) {
    const type = themePropsMap[prop];
    const value = theme.get(prop);
    if (value != null) {
      style.setProperty(prop, type.toCss(value));
    } else {
      style.removeProperty(prop);
    }
  }
}

export function clearTheme(
  style: CSSStyleDeclaration = document.documentElement.style,
) {
  for (const prop of themeProps) {
    style.removeProperty(prop);
  }
}

export const defaultCustomTheme = new CustomTheme()
  .set("--primary-d2", Color.parse("#9a9a9a"))
  .set("--primary-d1", Color.parse("#a6a6a6"))
  .set("--primary", Color.parse("#b3b3b3"))
  .set("--primary-l1", Color.parse("#c0c0c0"))
  .set("--primary-l2", Color.parse("#cccccc"))
  .set("--secondary-d1", Color.parse("#0c0c0c"))
  .set("--secondary", Color.parse("#262626"))
  .set("--secondary-l1", Color.parse("#404040"))
  .set("--secondary-l2", Color.parse("#595959"))
  .set("--secondary-f1", Color.parse("#424242"))
  .set("--secondary-f2", Color.parse("#5e5e5e"))
  .set("--accent-d2", Color.parse("#1a1a1a"))
  .set("--accent-d1", Color.parse("#333333"))
  .set("--accent", Color.parse("#4d4d4d"))
  .set("--accent-l1", Color.parse("#676767"))
  .set("--accent-l2", Color.parse("#808080"))
  .set("--error-d1", Color.parse("#7a351f"))
  .set("--error", Color.parse("#a34729"))
  .set("--error-l1", Color.parse("#cc5933"))
  .set("--slow-key-color", Color.parse("#cc0000"))
  .set("--fast-key-color", Color.parse("#60d788"))
  .set("--pinky-zone-color", Color.parse("#8ec07c"))
  .set("--ring-zone-color", Color.parse("#b8bb26"))
  .set("--middle-zone-color", Color.parse("#fabd2f"))
  .set("--left-index-zone-color", Color.parse("#83a698"))
  .set("--right-index-zone-color", Color.parse("#d3869b"))
  .set("--thumb-zone-color", Color.parse("#d66354"))
  .set("--effort-0-color", Color.parse("#d1daf4"))
  .set("--effort-1-color", Color.parse("#adc5f8"))
  .set("--effort-2-color", Color.parse("#8aaffb"))
  .set("--effort-3-color", Color.parse("#6699ff"));

export const lightTheme = new CustomTheme()
  .set("--primary-d2", Color.parse("#ded3d3"))
  .set("--primary-d1", Color.parse("#e9e1e1"))
  .set("--primary", Color.parse("#f4f0f0"))
  .set("--primary-l1", Color.parse("#faf9f9"))
  .set("--primary-l2", Color.parse("#ffffff"))
  .set("--secondary-d1", Color.parse("#141320"))
  .set("--secondary", Color.parse("#282640"))
  .set("--secondary-l1", Color.parse("#3c3960"))
  .set("--secondary-l2", Color.parse("#504c80"))
  .set("--secondary-f1", Color.parse("#514e63"))
  .set("--secondary-f2", Color.parse("#7a7786"))
  .set("--accent-d2", Color.parse("#14181f"))
  .set("--accent-d1", Color.parse("#292f3d"))
  .set("--accent", Color.parse("#3d475c"))
  .set("--accent-l1", Color.parse("#515f7b"))
  .set("--accent-l2", Color.parse("#667699"))
  .set("--error-d1", Color.parse("#ff0000"))
  .set("--error", Color.parse("#ff3333"))
  .set("--error-l1", Color.parse("#ff6666"))
  .set("--slow-key-color", Color.parse("#cc0000"))
  .set("--fast-key-color", Color.parse("#60d788"))
  .set("--pinky-zone-color", Color.parse("#8ec07c"))
  .set("--ring-zone-color", Color.parse("#b8bb26"))
  .set("--middle-zone-color", Color.parse("#fabd2f"))
  .set("--left-index-zone-color", Color.parse("#83a698"))
  .set("--right-index-zone-color", Color.parse("#d3869b"))
  .set("--thumb-zone-color", Color.parse("#d66354"))
  .set("--effort-0-color", Color.parse("#d1daf4"))
  .set("--effort-1-color", Color.parse("#adc5f8"))
  .set("--effort-2-color", Color.parse("#8aaffb"))
  .set("--effort-3-color", Color.parse("#6699ff"));

export const darkTheme = new CustomTheme()
  .set("--primary-d2", Color.parse("#4d4d4d"))
  .set("--primary-d1", Color.parse("#404040"))
  .set("--primary", Color.parse("#333333"))
  .set("--primary-l1", Color.parse("#2e2e2e"))
  .set("--primary-l2", Color.parse("#2b2b2b"))
  .set("--secondary-d1", Color.parse("#b8b3b3"))
  .set("--secondary", Color.parse("#9f9999"))
  .set("--secondary-l1", Color.parse("#867f7f"))
  .set("--secondary-l2", Color.parse("#6c6666"))
  .set("--secondary-f1", Color.parse("#898585"))
  .set("--secondary-f2", Color.parse("#747070"))
  .set("--accent-d2", Color.parse("#524d4d"))
  .set("--accent-d1", Color.parse("#5f5a5a"))
  .set("--accent", Color.parse("#6c6666"))
  .set("--accent-l1", Color.parse("#797272"))
  .set("--accent-l2", Color.parse("#867f7f"))
  .set("--error-d1", Color.parse("#b75c5c"))
  .set("--error", Color.parse("#9b4545"))
  .set("--error-l1", Color.parse("#783535"))
  .set("--slow-key-color", Color.parse("#8c1818"))
  .set("--fast-key-color", Color.parse("#448154"))
  .set("--pinky-zone-color", Color.parse("#617a58"))
  .set("--ring-zone-color", Color.parse("#76772d"))
  .set("--middle-zone-color", Color.parse("#977831"))
  .set("--left-index-zone-color", Color.parse("#5b6d66"))
  .set("--right-index-zone-color", Color.parse("#835d67"))
  .set("--thumb-zone-color", Color.parse("#854b44"))
  .set("--effort-0-color", Color.parse("#323948"))
  .set("--effort-1-color", Color.parse("#303f5d"))
  .set("--effort-2-color", Color.parse("#2f4471"))
  .set("--effort-3-color", Color.parse("#2d4a86"));