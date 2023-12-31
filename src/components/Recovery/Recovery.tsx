import {
  Form,
  FormField,
  FormItem,
  FormDescription,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ToastContainer } from "react-toastify";
import { z } from "zod";
import styles from "@/styles/loginpage.module.css";
import { zodResolver } from "@hookform/resolvers/zod";

const formRecoveryPasswordSchema = z.object({
  email: z.string().email({ message: "Email invalido" }).max(50),
});

const Recovery = () => {
  const form = useForm<z.infer<typeof formRecoveryPasswordSchema>>({
    resolver: zodResolver(formRecoveryPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formRecoveryPasswordSchema>) => {
    console.log({ values });
  };

  const onError = () => {};

  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center h-screen ${styles.background_personality}`}
    >
      <Link to={"/"}>
        <img
          src="assets/logo.png"
          alt="logo"
          className="object-cover w-[120px] h-[50px]"
        />
      </Link>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Recovery</CardTitle>
              <CardDescription>Enter OTP to recover password</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                {/* <div className="profile flex justify-center py-4">
                  <img
                    src="assets/profile.png"
                    className={styles.profile_img}
                    alt="avatar"
                  />
                </div> */}
                <div className="flex flex-col space-y-1 5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Enter 6 digits OTP send to your email address
                        </FormLabel>
                        <FormControl>
                          <Input type="text" {...field} placeholder="" />
                        </FormControl>
                        <FormDescription>
                          OTP received in the mail
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Iniciar Sesion
              </Button>
              <div className="text-center">
                <span className="text-gray-500 text-xs">
                  Can't get OTP?{" "}
                  <Link to="/signup" className="text-red-500">
                    Resend
                  </Link>
                </span>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>

      <ToastContainer />
      <DevTool control={form.control} />
    </div>
  );
};

export default Recovery;
