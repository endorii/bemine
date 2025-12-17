import { Query, Resolver } from "@nestjs/graphql";
import { Section } from "./models/section.model";
import { SectionService } from "./section.service";

@Resolver()
export class SectionResolver {
    constructor(private readonly sectionService: SectionService) {}

    @Query(() => [Section], { name: "section" })
    findAll() {
        return this.sectionService.findAll();
    }

    // @Mutation(() => Section)
    // createSection(@Args("createSectionInput") createSectionInput: CreateSectionInput) {
    //     return this.sectionService.create(createSectionInput);
    // }
}
