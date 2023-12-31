import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components";
import { useFavoriteReposStore } from "@/store/favoriteRepos";
import { Repository } from "@/types/types";
import { ThumbsDown, ThumbsUp } from "lucide-react";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

const CardRepo = ({ repository, isFavorite }: CardProps) => {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }

    addFavoriteRepo(repository.id);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{repository.name}</CardTitle>
        <CardDescription>{repository.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div></div>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} onClick={toggleFavorite}>
          {isFavorite ? <ThumbsDown /> : <ThumbsUp />}
        </Button>
      </CardFooter>
    </Card>
    // <Card>
    //   <CardHeader>
    //     <CardTitle>Notifications</CardTitle>
    //     <CardDescription>You have 3 unread messages.</CardDescription>
    //   </CardHeader>
    //   <CardContent className="grid gap-4">
    //     <div className="flex items-center space-x-4 rounded-md border p-4">
    //       <BellRing />
    //       <div className="flex-1 space-y-1">
    //         <p className="text-sm font-medium leading-none">
    //           Push Notifications
    //         </p>
    //         <p className="text-sm text-muted-foreground">
    //           Send notifications to device
    //         </p>
    //       </div>
    //       <Switch />
    //     </div>
    //     <div>
    //       {notifications.map((notification, index) => (
    //         <div
    //           key={index}
    //           className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
    //         >
    //           <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
    //           <div className="space-y-1">
    //             <p className="text-sm font-medium leading-none">
    //               {notification.title}
    //             </p>
    //             <p className="text-sm text-muted-foreground">
    //               {notification.description}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </CardContent>
    //   <CardFooter>
    //     <Button className="w-full">
    //       <Check className="mr-2 h-4 w-4" /> Mark all as read
    //     </Button>
    //   </CardFooter>
    // </Card>
  );
};

export default CardRepo;
