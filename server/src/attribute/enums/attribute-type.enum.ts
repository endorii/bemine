import { registerEnumType } from "@nestjs/graphql";

export enum AttributeTypeEnum {
    TEXT = "TEXT",
    NUMBER = "NUMBER",
    SELECT = "SELECT",
    BOOLEAN = "BOOLEAN",
}

registerEnumType(AttributeTypeEnum, {
    name: "AttributeType",
    description: "Attribute type",
});
