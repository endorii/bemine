import { registerEnumType } from "@nestjs/graphql";

export enum NotificationTypeEnum {
    LISTING_APPROVED = "LISTING_APPROVED",
    LISTING_REJECTED = "LISTING_REJECTED",
    LISTING_FAVORITED = "LISTING_FAVORITED",
    PRICE_CHANGED = "PRICE_CHANGED",
    MESSAGE_RECEIVED = "MESSAGE_RECEIVED",
    SYSTEM = "SYSTEM",
}

registerEnumType(NotificationTypeEnum, {
    name: "NotificationType",
    description: "Notification Type",
});
