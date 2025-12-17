import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateSectionInput } from "./create-section.input";

@InputType()
export class UpdateSectionInput extends PartialType(CreateSectionInput) {
    @Field(() => Int)
    id: number;
}
