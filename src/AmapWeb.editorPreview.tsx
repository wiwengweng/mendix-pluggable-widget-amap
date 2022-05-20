import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { AmapWebPreviewProps } from "../typings/AmapWebProps";

declare function require(name: string): string;

export function preview(props: AmapWebPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
