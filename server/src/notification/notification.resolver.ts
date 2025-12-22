import { Resolver } from "@nestjs/graphql";
import { Notification } from "./models/notification.model";
import { NotificationService } from "./notification.service";

@Resolver(() => Notification)
export class NotificationResolver {
    constructor(private readonly notificationService: NotificationService) {}

    // @Mutation(() => Notification)
    // createNotification(@Args('createNotificationInput') createNotificationInput: CreateNotificationInput) {
    //   return this.notificationService.create(createNotificationInput);
    // }

    // @Query(() => [Notification], { name: 'notification' })
    // findAll() {
    //   return this.notificationService.findAll();
    // }

    // @Query(() => Notification, { name: 'notification' })
    // findOne(@Args('id', { type: () => Int }) id: number) {
    //   return this.notificationService.findOne(id);
    // }

    // @Mutation(() => Notification)
    // updateNotification(@Args('updateNotificationInput') updateNotificationInput: UpdateNotificationInput) {
    //   return this.notificationService.update(updateNotificationInput.id, updateNotificationInput);
    // }

    // @Mutation(() => Notification)
    // removeNotification(@Args('id', { type: () => Int }) id: number) {
    //   return this.notificationService.remove(id);
    // }
}
