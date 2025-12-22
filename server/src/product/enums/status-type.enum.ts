import { registerEnumType } from "@nestjs/graphql";

export enum StatusTypeEnum {
    DRAFT = "DRAFT",
    PENDING_MODERATION = "PENDING_MODERATION",
    ACTIVE = "ACTIVE",
    REJECTED = "REJECTED",
    ARCHIVED = "ARCHIVED",
}

registerEnumType(StatusTypeEnum, {
    name: "StatusType",
    description: "Status Type",
});
