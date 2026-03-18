// "use client";

import {
  LandingPage,
} from "@/presentation/templates";
// import { useUser } from "@/presentation/hooks";

export default function Home() {
  // const { user, loading, error } = useUser();

  // if (loading) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
  //       <div className="text-center">
  //         <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-zinc-300 border-t-purple-500 dark:border-zinc-700 dark:border-t-cyan-400"></div>
  //         <p className="text-zinc-600 dark:text-zinc-400">
  //           Carregando perfil...
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error || !user) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
  //       <div className="text-center">
  //         <p className="text-red-500">Erro ao carregar perfil</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <LandingPage />
    // <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
    //   {/* Background gradient effect */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-purple-400/20 to-transparent blur-3xl dark:from-purple-600/20"></div>
    //     <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-400/20 to-transparent blur-3xl dark:from-cyan-600/20"></div>
    //   </div>

    //   {/* Theme toggle button */}
    //   <div className="absolute right-4 top-4 md:right-8 md:top-8">
    //     <ThemeToggle />
    //   </div>

    //   {/* Content container */}
    //   <div className="relative w-full max-w-md space-y-8">
    //     {/* Profile header */}
    //     <ProfileHeader
    //       avatar={user.avatar}
    //       displayName={user.displayName}
    //       username={user.username}
    //     />

    //     {/* Links section */}
    //     <LinksList links={user.links} />

    //     {/* Social links */}
    //     <SocialLinks links={user.socialLinks} />

    //     {/* Footer */}
    //     <Footer text={user.footerText} />
    //   </div>
    // </div>
  );
}
