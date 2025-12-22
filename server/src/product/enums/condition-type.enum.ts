import { registerEnumType } from "@nestjs/graphql";

export enum ConditionTypeEnum {
    USED = "USED",
    NEW = "NEW",
}

registerEnumType(ConditionTypeEnum, {
    name: "ConditionType",
    description: "Condition type",
});
