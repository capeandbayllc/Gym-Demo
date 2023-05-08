import { InputInterface } from "~/api/mutations/resolvers/ResolverInterfaces";
import dateFormat from "dateformat";

export function onCompleted(
  user: any,
  args: InputInterface,
  { mirageSchema }: any
) {
  const now = new Date();
  const photoPhotoPath = "/default-user.jpg";
  const createdAt = dateFormat(now, "yyyy-mm-dd HH:MM:ss");
  const updatedAt = createdAt;

  user.update({
    created_at: createdAt,
    updated_at: updatedAt,
    profile_photo_path: photoPhotoPath,
  });
}

export function onError() {
  console.log(arguments);
}

export { apply } from "~/api/mutations/resolvers/create.default";
