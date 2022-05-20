import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { AmapWebPreviewProps } from "../typings/AmapWebProps"; import logo from "./assets/map-9.png";

declare function require(name: string): string;

export function preview(props: AmapWebPreviewProps) {
    return <img style={parseStyle(props.style)} src={logo}></img>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
