import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { AmapWebPreviewProps } from "../typings/AmapWebProps";

export function getProperties(
    values: AmapWebPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: AmapWebPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
