import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Breadcrumb {
    @Field()
    id: string;

    @Field()
    title: string;

    @Field()
    slug: string;
}
