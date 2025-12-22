import { registerEnumType } from "@nestjs/graphql";

export enum RoleTypeEnum {
    SELLER = "SELLER",
    MODERATOR = "MODERATOR",
    ADMIN = "ADMIN",
}

registerEnumType(RoleTypeEnum, {
    name: "RoleType",
    description: "Role Type",
});
