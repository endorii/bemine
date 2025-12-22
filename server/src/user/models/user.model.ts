import { Field, ObjectType } from "@nestjs/graphql";
import { Favorite } from "src/favorites/models/favorite.model";
import { Notification } from "src/notification/models/notification.model";
import { Listing } from "src/product/models/listing.model";
import { RoleTypeEnum } from "../enums/role-type.enum";

@ObjectType()
export class User {
    @Field()
    id: string;

    @Field()
    email: string;

    @Field()
    phone: string;

    @Field()
    password: string;

    @Field()
    name: string;

    @Field()
    surname: string;

    @Field({ nullable: true })
    avatarUrl?: string;

    @Field()
    isOnline: boolean;

    @Field({ nullable: true })
    lastSeenAt?: Date;

    @Field()
    isVerified: boolean;

    @Field({ nullable: true })
    verificationToken?: string;

    @Field({ nullable: true })
    verificationTokenExpires?: Date;

    @Field({ nullable: true })
    resetPasswordToken?: string;

    @Field({ nullable: true })
    resetPasswordTokenExpires?: Date;

    @Field({ nullable: true })
    hashedRefreshToken?: string;

    @Field(() => RoleTypeEnum)
    role: RoleTypeEnum;

    @Field(() => [Listing])
    listings: Listing[];

    @Field(() => [Favorite])
    favorites: Favorite[];

    @Field(() => [Notification])
    notifications: Notification;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
