import { Resolver } from "@nestjs/graphql";
import { AttributeValueService } from "./attribute-value.service";
import { AttributeValue } from "./models/attribute-value.model";

@Resolver(() => AttributeValue)
export class AttributeValueResolver {
    constructor(private readonly attributeValueService: AttributeValueService) {}

    // @Mutation(() => AttributeValue)
    // createAttributeValue(@Args('createAttributeValueInput') createAttributeValueInput: CreateAttributeValueInput) {
    //   return this.attributeValueService.create(createAttributeValueInput);
    // }

    // @Query(() => [AttributeValue], { name: 'attributeValue' })
    // findAll() {
    //   return this.attributeValueService.findAll();
    // }

    // @Query(() => AttributeValue, { name: 'attributeValue' })
    // findOne(@Args('id', { type: () => Int }) id: number) {
    //   return this.attributeValueService.findOne(id);
    // }

    // @Mutation(() => AttributeValue)
    // updateAttributeValue(@Args('updateAttributeValueInput') updateAttributeValueInput: UpdateAttributeValueInput) {
    //   return this.attributeValueService.update(updateAttributeValueInput.id, updateAttributeValueInput);
    // }

    // @Mutation(() => AttributeValue)
    // removeAttributeValue(@Args('id', { type: () => Int }) id: number) {
    //   return this.attributeValueService.remove(id);
    // }
}
