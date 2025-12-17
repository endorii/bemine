import { Module } from "@nestjs/common";
import { AttributeValueResolver } from "./attribute-value.resolver";
import { AttributeValueService } from "./attribute-value.service";

@Module({
    providers: [AttributeValueResolver, AttributeValueService],
})
export class AttributeValueModule {}
