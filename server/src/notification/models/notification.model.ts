import { Field, ObjectType } from "@nestjs/graphql";
import { Listing } from "src/product/models/listing.model";
import { User } from "src/user/models/user.model";
import { NotificationTypeEnum } from "../enums/notification-type.enum";

@ObjectType()
export class Notification {
    @Field()
    id: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    message?: string;

    @Field()
    userId: string;

    @Field(() => User)
    user: User;

    @Field()
    listingId: string;

    @Field(() => Listing)
    listing: Listing;

    @Field()
    createdAt: Date;

    @Field()
    isRead: boolean;

    @Field(() => NotificationTypeEnum)
    type: NotificationTypeEnum;
}
